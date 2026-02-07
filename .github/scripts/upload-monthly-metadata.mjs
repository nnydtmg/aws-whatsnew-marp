#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { execSync } from 'child_process';
import { resolve } from 'path';

const KV_NAMESPACE_ID = process.env.KV_NAMESPACE_ID || 'bb277b979d88444da36a3140236b59b2';

// 現在のディレクトリを表示
console.log(`📂 Current directory: ${process.cwd()}`);

// metadata.jsonの存在確認
if (!existsSync('metadata.json')) {
  console.error('❌ Error: metadata.json not found in current directory');
  process.exit(1);
}

const metadata = JSON.parse(readFileSync('metadata.json', 'utf-8'));
console.log(`📊 Loaded metadata with ${metadata.articles.length} articles`);

// 年月でグループ化
const monthlyGroups = {};
metadata.articles.forEach(article => {
  const key = `${article.year}/${String(article.month).padStart(2, '0')}`;
  if (!monthlyGroups[key]) {
    monthlyGroups[key] = [];
  }
  monthlyGroups[key].push(article);
});

console.log(`📅 Found ${Object.keys(monthlyGroups).length} unique months`);

// metadata:months キー（利用可能な月一覧）
const months = Object.keys(monthlyGroups).sort().reverse();
console.log(`📝 Months to upload: ${months.join(', ')}`);

// 一時ファイルに書き出してアップロード
const monthsFile = 'metadata-months.json';
writeFileSync(monthsFile, JSON.stringify(months, null, 2));

// ファイルが作成されたか確認
if (existsSync(monthsFile)) {
  const stats = statSync(monthsFile);
  console.log(`✅ Created ${monthsFile} (${stats.size} bytes)`);
  console.log(`📄 Content: ${readFileSync(monthsFile, 'utf-8')}`);
} else {
  console.error(`❌ Failed to create ${monthsFile}`);
  process.exit(1);
}

try {
  console.log(`📤 Uploading metadata:months...`);
  execSync(`wrangler kv key put "metadata:months" --path=${monthsFile} --namespace-id="${KV_NAMESPACE_ID}" --remote`, {
    stdio: 'inherit'
  });
  console.log(`✓ Uploaded metadata:months (${months.length} months)`);
} catch (error) {
  console.error('❌ Failed to upload metadata:months', error);
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

  // 一時ファイルに書き出してアップロード
  const tempFile = `metadata-${year}-${month}.json`;
  console.log(`\n📝 Creating ${tempFile} for ${key}...`);
  writeFileSync(tempFile, JSON.stringify(monthData, null, 2));

  // ファイルが作成されたか確認
  if (existsSync(tempFile)) {
    const stats = statSync(tempFile);
    console.log(`✅ Created ${tempFile} (${stats.size} bytes, ${articles.length} articles)`);
  } else {
    console.error(`❌ Failed to create ${tempFile}`);
    process.exit(1);
  }

  try {
    console.log(`📤 Uploading metadata:${key}...`);
    execSync(`wrangler kv key put "metadata:${key}" --path=${tempFile} --namespace-id="${KV_NAMESPACE_ID}" --remote`, {
      stdio: 'inherit'
    });
    console.log(`✓ Uploaded metadata:${key} (${articles.length} articles)`);
  } catch (error) {
    console.error(`❌ Failed to upload metadata:${key}`, error);
    process.exit(1);
  }
}

console.log('\n✅ All monthly metadata uploaded successfully!');
