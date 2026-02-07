#!/usr/bin/env node
import { readdirSync, statSync } from 'fs';
import { join, basename } from 'path';

/**
 * ディレクトリを再帰的にスキャンして.mdファイルを取得
 * @param {string} dir - スキャンするディレクトリ
 * @param {string} baseDir - ベースディレクトリ（相対パス計算用）
 */
function scanMarkdownFiles(dir, baseDir = dir) {
  const files = [];

  try {
    for (const item of readdirSync(dir)) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...scanMarkdownFiles(fullPath, baseDir));
      } else if (item.endsWith('.md') && !item.endsWith('.summary.md')) {
        const relativePath = fullPath.replace(baseDir + '/', '');
        files.push(relativePath);
      }
    }
  } catch (error) {
    // ディレクトリが存在しない場合はスキップ
  }

  return files;
}

/**
 * ファイルパスからメタデータを抽出
 * パス形式: 2026/02/06/AWS-Config-now-supports-30-new-resource-types.md
 */
function extractMetadata(filePath) {
  // パスを分割: ["2026", "02", "06", "AWS-Config-now-supports-30-new-resource-types.md"]
  const parts = filePath.split('/');

  if (parts.length !== 4) {
    console.error(`Invalid path format: ${filePath}`, { to: process.stderr });
    return null;
  }

  const [year, month, day, filename] = parts;

  // 年月日の妥当性チェック
  if (!/^\d{4}$/.test(year) || !/^\d{2}$/.test(month) || !/^\d{2}$/.test(day)) {
    console.error(`Invalid date format in path: ${filePath}`, { to: process.stderr });
    return null;
  }

  const title = basename(filename, '.md');

  // 対応するsummaryファイルのパス
  const summaryPath = filePath.replace('.md', '.summary.md');

  return {
    id: title,
    title: title.replace(/-/g, ' '), // ハイフンをスペースに変換
    date: `${year}-${month}-${day}`,
    year: parseInt(year, 10),
    month: parseInt(month, 10),
    day: parseInt(day, 10),
    slideUrl: `https://raw.githubusercontent.com/nnydtmg/aws-whatsnew-marp/main/${filePath}`,
    summaryUrl: `https://raw.githubusercontent.com/nnydtmg/aws-whatsnew-marp/main/${summaryPath}`,
    path: filePath
  };
}

// メイン処理
const rootDir = process.cwd();
const slideFiles = scanMarkdownFiles(rootDir).filter(path => {
  // YYYY/MM/DD/形式のパスのみ
  return /^\d{4}\/\d{2}\/\d{2}\//.test(path);
});

const articles = slideFiles
  .map(extractMetadata)
  .filter(Boolean)
  .sort((a, b) => b.date.localeCompare(a.date)); // 日付降順

const metadata = {
  articles,
  updatedAt: new Date().toISOString(),
  totalCount: articles.length
};

console.log(JSON.stringify(metadata, null, 2));