#!/usr/bin/env node

/**
 * aws-whatsnew-marpリポジトリ用のメタデータ生成スクリプト
 *
 * ファイル構造:
 *   yyyy/mm/dd/title/
 *     ├── slide.html  (Marp変換済み)
 *     └── summary.md
 *
 * 生成されるメタデータ:
 *   {
 *     "articles": [
 *       {
 *         "id": "yyyy-mm-dd-title",
 *         "title": "Article Title",
 *         "date": "yyyy-mm-dd",
 *         "year": yyyy,
 *         "month": mm,
 *         "day": dd,
 *         "path": "yyyy/mm/dd/title",
 *         "thumbnailUrl": "https://thumbs.example.com/yyyy/mm/dd/title/thumbnail.png"
 *       }
 *     ],
 *     "updatedAt": "2026-02-07T10:00:00Z",
 *     "totalCount": 123
 *   }
 */

import fs from 'fs';
import path from 'path';

/**
 * HTMLファイルからタイトルを抽出
 */
function extractTitleFromHtml(htmlPath) {
  try {
    const content = fs.readFileSync(htmlPath, 'utf-8');
    // <h1>タグからタイトルを抽出
    const match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (match && match[1]) {
      // HTMLエンティティをデコード（簡易版）
      return match[1]
        .replace(/<[^>]+>/g, '') // HTMLタグを削除
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .trim();
    }
  } catch (error) {
    console.error(`Failed to extract title from ${htmlPath}:`, error.message);
  }
  return null;
}

/**
 * ディレクトリ名からタイトルを生成（フォールバック）
 */
function titleFromDirectory(dirname) {
  return dirname
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * ディレクトリをスキャンして記事メタデータを収集
 */
function scanArticles(baseDir = '.') {
  const articles = [];
  const thumbnailBaseUrl = process.env.THUMBNAIL_BASE_URL
    ? process.env.THUMBNAIL_BASE_URL.replace(/\/+$/, '')
    : null;

  // yyyy ディレクトリを検索
  const yearDirs = fs.readdirSync(baseDir)
    .filter(name => /^\d{4}$/.test(name) && fs.statSync(path.join(baseDir, name)).isDirectory())
    .sort((a, b) => b.localeCompare(a)); // 新しい年から

  for (const yearDir of yearDirs) {
    const yearPath = path.join(baseDir, yearDir);
    const year = parseInt(yearDir, 10);

    // mm ディレクトリを検索
    const monthDirs = fs.readdirSync(yearPath)
      .filter(name => /^\d{2}$/.test(name) && fs.statSync(path.join(yearPath, name)).isDirectory())
      .sort((a, b) => b.localeCompare(a)); // 新しい月から

    for (const monthDir of monthDirs) {
      const monthPath = path.join(yearPath, monthDir);
      const month = parseInt(monthDir, 10);

      // dd ディレクトリを検索
      const dayDirs = fs.readdirSync(monthPath)
        .filter(name => /^\d{2}$/.test(name) && fs.statSync(path.join(monthPath, name)).isDirectory())
        .sort((a, b) => b.localeCompare(a)); // 新しい日から

      for (const dayDir of dayDirs) {
        const dayPath = path.join(monthPath, dayDir);
        const day = parseInt(dayDir, 10);

        // title ディレクトリを検索
        const titleDirs = fs.readdirSync(dayPath)
          .filter(name => fs.statSync(path.join(dayPath, name)).isDirectory());

        for (const titleDir of titleDirs) {
          const articlePath = path.join(dayPath, titleDir);
          const slideHtml = path.join(articlePath, 'slide.html');
          const summaryMd = path.join(articlePath, 'summary.md');

          // slide.htmlとsummary.mdが両方存在する場合のみ記事として認識
          if (fs.existsSync(slideHtml) && fs.existsSync(summaryMd)) {
            // タイトルをHTMLから抽出、失敗したらディレクトリ名から生成
            const title = extractTitleFromHtml(slideHtml) || titleFromDirectory(titleDir);

            // 記事IDは yyyy-mm-dd-title 形式
            const id = `${yearDir}-${monthDir}-${dayDir}-${titleDir}`;

            // 日付は yyyy-mm-dd 形式
            const date = `${yearDir}-${monthDir}-${dayDir}`;

            // pathは yyyy/mm/dd/title 形式（.mdを含めない）
            const relativePath = path.relative(baseDir, articlePath).replace(/\\/g, '/');

            const thumbnailUrl = thumbnailBaseUrl
              ? `${thumbnailBaseUrl}/${relativePath}/thumbnail.png`
              : undefined;

            articles.push({
              id,
              title,
              date,
              year,
              month,
              day,
              path: relativePath,
              thumbnailUrl
            });

            console.error(`Found article: ${id} - ${title}`);
          } else {
            console.error(`Skipping incomplete article: ${articlePath} (missing slide.html or summary.md)`);
          }
        }
      }
    }
  }

  return articles;
}

/**
 * 月別に記事をグルーピング
 */
function groupByMonth(articles) {
  const grouped = {};

  for (const article of articles) {
    const monthKey = `${article.year}/${String(article.month).padStart(2, '0')}`;

    if (!grouped[monthKey]) {
      grouped[monthKey] = {
        year: article.year,
        month: article.month,
        articles: []
      };
    }

    grouped[monthKey].articles.push(article);
  }

  return grouped;
}

/**
 * メイン処理
 */
function main() {
  const baseDir = process.argv[2] || '.';
  const outputFormat = process.argv[3] || 'index'; // index, months, monthly, all

  console.error(`Scanning articles in: ${path.resolve(baseDir)}`);

  const articles = scanArticles(baseDir);

  // 日付の降順でソート（新しい記事が先）
  articles.sort((a, b) => b.date.localeCompare(a.date));

  const updatedAt = new Date().toISOString();

  if (outputFormat === 'all') {
    // 全てのKVキー用のデータを生成
    const monthlyGroups = groupByMonth(articles);
    const months = Object.keys(monthlyGroups).sort((a, b) => b.localeCompare(a));

    const output = {
      'metadata:index': {
        articles,
        updatedAt,
        totalCount: articles.length
      },
      'metadata:months': months
    };

    // 各月のメタデータを追加
    for (const [monthKey, data] of Object.entries(monthlyGroups)) {
      output[`metadata:${monthKey}`] = {
        year: data.year,
        month: data.month,
        articles: data.articles,
        totalPages: Math.ceil(data.articles.length / 10) // 1ページ10件
      };
    }

    console.log(JSON.stringify(output, null, 2));
    console.error(`Generated metadata for ${articles.length} articles across ${months.length} months`);
  } else if (outputFormat === 'months') {
    // 月一覧のみ
    const monthlyGroups = groupByMonth(articles);
    const months = Object.keys(monthlyGroups).sort((a, b) => b.localeCompare(a));
    console.log(JSON.stringify(months, null, 2));
  } else if (outputFormat === 'monthly') {
    // 月別データのみ（キー名なし）
    const monthlyGroups = groupByMonth(articles);
    for (const [monthKey, data] of Object.entries(monthlyGroups)) {
      data.totalPages = Math.ceil(data.articles.length / 10);
      console.log(`--- ${monthKey} ---`);
      console.log(JSON.stringify(data, null, 2));
    }
  } else {
    // デフォルト: metadata:index のみ
    const metadata = {
      articles,
      updatedAt,
      totalCount: articles.length
    };
    console.log(JSON.stringify(metadata, null, 2));
    console.error(`Generated metadata for ${articles.length} articles`);
  }
}

main();
