#!/usr/bin/env node
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

const KV_NAMESPACE_ID = process.env.KV_NAMESPACE_ID || 'bb277b979d88444da36a3140236b59b2';
const metadata = JSON.parse(readFileSync('metadata.json', 'utf-8'));

// 年月でグループ化
const monthlyGroups = {};
metadata.articles.forEach(article => {
  const key = `${article.year}/${String(article.month).padStart(2, '0')}`;
  if (!monthlyGroups[key]) {
    monthlyGroups[key] = [];
  }
  monthlyGroups[key].push(article);
});

// metadata:months キー（利用可能な月一覧）
const months = Object.keys(monthlyGroups).sort().reverse();
const monthsJson = JSON.stringify(months).replace(/'/g, "'\\''");

try {
  execSync(`wrangler kv key put "metadata:months" '${monthsJson}' --namespace-id="${KV_NAMESPACE_ID}"`, {
    stdio: 'inherit'
  });
  console.log(`✓ Uploaded metadata:months (${months.length} months)`);
} catch (error) {
  console.error('Failed to upload metadata:months', error);
  process.exit(1);
}

// 各月のメタデータをアップロード
for (const [key, articles] of Object.entries(monthlyGroups)) {
  const [year, month] = key.split('/');
  const monthData = {
    year: parseInt(year, 10),
    month: parseInt(month, 10),
    articles,
    totalPages: Math.ceil(articles.length / 10)
  };

  const monthDataJson = JSON.stringify(monthData).replace(/'/g, "'\\''");

  try {
    execSync(`wrangler kv key put "metadata:${key}" '${monthDataJson}' --namespace-id="${KV_NAMESPACE_ID}"`, {
      stdio: 'inherit'
    });
    console.log(`✓ Uploaded metadata:${key} (${articles.length} articles)`);
  } catch (error) {
    console.error(`Failed to upload metadata:${key}`, error);
    process.exit(1);
  }
}

console.log('\n✅ All monthly metadata uploaded successfully!');