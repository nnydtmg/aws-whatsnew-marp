#!/bin/bash

# KVメタデータ更新スクリプト
# 使い方: ./update-kv-metadata.sh <KV_NAMESPACE_ID>

set -e

NAMESPACE_ID=$1

if [ -z "$NAMESPACE_ID" ]; then
  echo "Usage: $0 <KV_NAMESPACE_ID>"
  exit 1
fi

echo "Generating metadata..."
node scripts/generate-metadata.js . all > metadata-all.json

# metadata-all.jsonから各キーを抽出してKVに投入
echo "Updating Workers KV..."

# metadata:index
echo "Updating metadata:index..."
cat metadata-all.json | jq '."metadata:index"' | \
  npx wrangler kv:key put "metadata:index" --namespace-id="$NAMESPACE_ID" --path=/dev/stdin

# metadata:months
echo "Updating metadata:months..."
cat metadata-all.json | jq '."metadata:months"' | \
  npx wrangler kv:key put "metadata:months" --namespace-id="$NAMESPACE_ID" --path=/dev/stdin

# 各月のメタデータ
echo "Updating monthly metadata..."
cat metadata-all.json | jq -r 'keys[] | select(startswith("metadata:") and (. != "metadata:index") and (. != "metadata:months"))' | while read key; do
  echo "  Updating $key..."
  cat metadata-all.json | jq ".\"$key\"" | \
    npx wrangler kv:key put "$key" --namespace-id="$NAMESPACE_ID" --path=/dev/stdin
done

echo "KV metadata update completed!"
