---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon DynamoDB
リアルタイムベクトル検索が一般提供開始

**発表日: 2026年8月5日**

---

## 概要

### Amazon DynamoDB ベクトル検索機能の3つの特徴

- **シングルストア**: 運用データとベクトル埋め込みを同じDynamoDBに保存
- **高速検索**: シングル桁ミリ秒のレイテンシーで99%以上の再現率を実現
- **スケーラビリティ**: 数兆個のベクトルまで対応、ストレージ制限なし

### 従来との違い

- 別のベクトルストアにデータを複製する必要がなくなった
- データ同期パイプラインの保守が不要
- データ移動コストとライセンスコストが削減

---

## 前提・背景

### AI/ML時代の課題

- セマンティック検索の需要が増加
- RAG（検索拡張生成）、推奨エンジンなど多くのユースケース
- 既存システムに意味検索機能を追加する複雑性

### 従来のベクトルストア運用の課題

- DynamoDB + 別のベクトルデータベース = 2つのシステムを管理
- データ同期パイプラインの構築と保守
- 複数システム間のデータ一貫性の課題
- 追加のコスト（ライセンス、インフラ、保守）

---

## 主な機能と改善

### 1. ネイティブベクトル検索

- DynamoDB内に専用のベクトルインデックスを作成
- `SearchVectors` APIで効率的に検索
- PutItemで標準的にベクトルを保存（List型のNumber要素）

### 2. 柔軟な設定オプション

- **最大4096次元対応**
- **距離関数選択**: ユークリッド距離、コサイン距離、ドット積
- **インラインフィルタリング**: クエリ時に結果を絞り込み
- **パーティションキー**: 大規模データセットでのパフォーマンス最適化

---

<!-- _class: small -->

## 利用方法・実装ステップ

### 1. 埋め込みの生成と保存

- Amazon Bedrock Titan Text Embeddings、Cohere Embed、OpenAIモデルなどを使用
- 各アイテムに `descriptionEmbedding` のような属性を追加
- UpdateItem APIで既存テーブルに埋め込みを追加

### 2. ベクトルインデックスの作成

```
インデックス名: ProductDescriptionIndex
ベクトル属性: descriptionEmbedding
次元数: 埋め込みモデルの出力次元に合わせる
距離関数: Cosine（コサイン距離）
パーティションキー: marketplace（オプション）
フィルタ属性: category など
```

### 3. 検索の実行

- 自然言語クエリから埋め込みを生成
- SearchVectors APIで検索
- パーティションキー値で検索スコープを限定
- 返り値に類似度スコアと全テーブル属性（name, price等）を含む

---

## パフォーマンス・スケーラビリティ

### 検索パフォーマンス

| 項目 | 値 |
|------|-----|
| レイテンシー | **シングル桁ミリ秒** |
| 再現率 | **99%以上** |
| サポートベクトル数 | **数兆個** |
| 次元数上限 | **4096次元** |

### インフラ運用

- **完全サーバーレス**: プロビジョニング不要
- **ゼロダウンタイム保守**: 定期パッチ適用が自動
- **従量課金**: 他のDynamoDB操作と同じ
- **自動スケーリング**: ベクトルインデックスはストレージ無制限で水平スケーリング

---

## ユースケース

### 1. セマンティック検索

- **e-commerce**: 商品説明から自然言語検索
- **ナレッジベース**: ドキュメントの意味ベース検索
- **例**: 「軽い夏用ランニングシューズ」で靴の販売品を検索

### 2. 検索拡張生成（RAG）

- ユーザー問い合わせから関連ドキュメント/データを検索
- LLMへのコンテキスト提供で精度向上

### 3. 推奨エンジン・パーソナライゼーション

- ユーザー行動/嗜好を埋め込み表現
- 類似ユーザー/商品を素早く発見

### 4. 異常検知

- 正常データの埋め込みから大きく離れた異常検知
- 不正検出、品質管理

---

## まとめ

### Amazon DynamoDB ベクトル検索の位置づけ

- **運用データとベクトルを統一**: 別システム不要
- **高速・スケーラブル**: 数兆ベクトルでシングル桁msのレイテンシー
- **完全サーバーレス**: 管理負荷ゼロで従量課金
- **AI時代の標準機能**: RAG、推奨エンジン、異常検知に対応

### 次のステップ

1. 自社の既存DynamoDBデータを確認
2. 埋め込みモデル（Bedrock Titan等）の検討
3. パイロットプロジェクトで効果測定
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/blogs/aws/amazon-dynamodb-now-supports-real-time-vector-search-at-any-scale/
- **Amazon DynamoDB ドキュメント（ベクトル検索）**: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/VectorSearch.html
- **Amazon Bedrock Titan Text Embeddings**: https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html
- **DynamoDB 料金**: https://aws.amazon.com/dynamodb/pricing/
- **AWS re:Post for DynamoDB**: https://repost.aws/tags/knowledge-center/TAljkKQ0MDQJCjDdxSeDQBJw

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**