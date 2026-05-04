#!/usr/bin/env node

/**
 * metadata-all.json から sitemap.xml を生成するスクリプト
 *
 * 使い方:
 *   node .github/scripts/generate-sitemap.mjs [metadata-all.json のパス]
 *
 * 出力: sitemap.xml (stdout)
 */

import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://whatsnew-marp.nnydtmg.com';

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemap(articles) {
  const urls = [];

  // トップページ
  urls.push(`  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`);

  // 記事ページ
  for (const article of articles) {
    urls.push(`  <url>
    <loc>${escapeXml(`${BASE_URL}/article/${article.id}`)}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
}

function main() {
  const metadataPath = process.argv[2] || 'metadata-all.json';

  if (!fs.existsSync(metadataPath)) {
    console.error(`Error: ${metadataPath} not found`);
    process.exit(1);
  }

  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
  const articles = metadata['metadata:index']?.articles ?? [];

  // 日付の降順でソート済み前提だが念のため
  articles.sort((a, b) => b.date.localeCompare(a.date));

  const sitemap = buildSitemap(articles);
  process.stdout.write(sitemap);

  console.error(`Generated sitemap.xml with ${articles.length} article(s)`);
}

main();
