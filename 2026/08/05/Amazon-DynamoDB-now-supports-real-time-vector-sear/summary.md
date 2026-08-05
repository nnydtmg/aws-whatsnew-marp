# Amazon DynamoDB がリアルタイムベクトル検索に対応

Amazon DynamoDB now supports real-time vector search

**カテゴリ:** What's New
**公開日:** 2026-08-05
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-dynamodb-vector-search)

このページでは、AWS What's Newで発表された「Amazon DynamoDB now supports real-time vector search」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon DynamoDBのベクトル検索機能により、数兆規模のベクトルに対して単一桁ミリ秒のレイテンシーと99%以上のリコールを実現し、セマンティック検索や推奨システムなどの生成AI活用シーンに対応することができます。サーバーレスアーキテクチャにより、インフラ管理の負担なく予測可能なパフォーマンスを提供いたします。

## このアップデートで何が変わったか

### 主な変更点

- **ベクトル検索機能の一般提供開始**: Amazon DynamoDBがリアルタイムベクトル検索機能の一般提供を開始
- **スケーラビリティの向上**: ベクトルデータセットが数十億から数兆に拡大する中でも、単一桁のミリ秒レイテンシーで99%以上のリコール
- **統合されたベクトル保存**: ベクトル埋め込みを他の属性と共に保存可能
- **モデル統合**: Amazon Bedrockで利用可能なモデルを含む任意のモデルでベクトル生成可能

### 新しい操作機能

- ベクトルインデックスの作成
- 近似最近傍探索 (ANN) の実行
- インデックスパーティションキーの選択によるスケーリング
- 属性でのフィルタリング

### サーバーレスの利点

- インフラストラクチャ管理が不要
- ダウンタイムなし
- メンテナンスウィンドウなし
- 使用した分だけの料金体系

## 活用シーン

### AIエージェントのメモリ管理

- エージェントのメモリ保存
- 長期コンテキストの検索

### セマンティック検索

- 意味的に関連するコンテンツの検索
- 自然言語クエリでの検索

### 推奨システム

- パーソナライズされた商品推奨
- 商品類似度検索

### その他のユースケース

- パーソナライズされた広告
- 検索拡張生成 (RAG)
- 顧客セグメンテーション
- 異常検出

## 利用可能なリージョン

- すべての商用AWSリージョン
- AWS GovCloud（US）リージョン

## 詳細

### パフォーマンス特性

- **レイテンシー**: 単一桁ミリ秒
- **リコール率**: 99%以上
- **スケーラビリティ**: 数兆個のベクトルに対応

### 技術的な特徴

- ベクトル埋め込みの統合保存
- 近似最近傍探索 (ANN) アルゴリズム
- インデックスパーティショニング
- 属性ベースのフィルタリング

### 統合

- Amazon Bedrock モデルとの連携
- 任意のベクトル生成モデルの使用
- 既存のDynamoDBアプリケーションへの統合

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-dynamodb-vector-search)
- [Amazon DynamoDB ドキュメント](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/)
- [AWS News Blog](https://aws.amazon.com/blogs/aws/)
- [Amazon Bedrock](https://aws.amazon.com/bedrock/)