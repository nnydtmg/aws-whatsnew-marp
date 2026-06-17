---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon S3 にアノテーション機能を追加
AI エージェントと分析ツール向けデータ検出機能

**発表日: 2026年6月16日**

---

## 概要

### Amazon S3 アノテーション機能の3つの主要特徴

- **カスタムメタデータ対応**: JSON、XML、YAML形式で最大1GB/オブジェクトのメタデータを添付
- **AI エージェント連携**: 別途メタデータシステムなしでデータディスカバリーを効率化
- **シームレス統合**: S3 Metadata、Apache Iceberg、Amazon Athena、Amazon SageMaker と統合

### コア機能

- オブジェクトごとに最大1GBまでのアノテーション保存
- いつでも修正・削除可能
- すべてのAWSリージョンで利用可能

---

## 前提・背景

### エンタープライズデータ管理の課題

- データが急増する中、メタデータシステムの構築・運用コストが増大
- 複数のデータ分析ツールが独立したメタデータを管理する複雑さ
- AI エージェントによるデータディスカバリーの需要が急速に増加

### AWS の取り組み

- Amazon Bedrock AgentCore による エンタープライズグレードのAIエージェント支援
- Amazon S3 Metadata と S3 Vectors による データレイヤー強化
- 2026年の重点: AIエージェント向けの統合データプラットフォーム構築

---

## 主な機能と改善

### 1. マルチフォーマット対応

- **JSON**: 構造化データに最適
- **XML**: レガシーシステム連携に対応
- **YAML**: ヒューマンリーダブルな形式

### 2. メタデータの永続性

- オブジェクトと同じ耐久性・一貫性特性を保持
- コピー・レプリケーション時にメタデータが自動移動
- クロスリージョンレプリケーション対応

### 3. 統合分析機能

- **Amazon Athena**: Apache Icebergテーブルとして大規模クエリ実行
- **Amazon SageMaker Unified Studio**: 自然言語でのアノテーション検索
- **S3 Tables MCP サーバー**: 標準インターフェースでの統合

---

<!-- _class: small -->

## ユースケース

<div class="columns">
<div>

### データ管理

- 大規模データレイク内のデータカタログ化
- データ系統管理の自動化
- メタデータライフサイクル管理

</div>
<div>

### AI・分析

- AIエージェントによる自動データディスカバリー
- データ品質メタデータの一元管理
- セマンティック検索の実装

</div>
<div>

### ガバナンス

- データプライバシー属性の記録
- コンプライアンス要件の管理
- アクセス制御情報の埋め込み

</div>
</div>

---

## 導入方法

### アクセス方法

- **AWS CLI**: `aws s3api` コマンド拡張
- **S3 API**: 新規エンドポイントでアノテーション操作
- **AWS SDK**: Python、Java、JavaScript など標準対応

### 実装例

```bash
# AWS CLI でアノテーション追加
aws s3api put-object-annotations \\
  --bucket my-bucket \\
  --key my-object \\
  --annotations file://annotations.json
```

---

## メリット・効果

### コスト削減

- 独立したメタデータシステム構築コストを排除
- S3 統合による運用負担軽減
- スケーラブルなソリューション

### 効率化

- 数秒でデータディスカバリーが可能
- AIエージェント による自動化の加速
- メタデータ管理の一元化

### スケーラビリティ

- 数十億オブジェクトへの対応
- グローバル展開に対応
- 中国リージョン含む全リージョン対応

---

## まとめ

### Amazon S3 アノテーション機能の位置付け

- S3 の基本サービスレベルでのメタデータ統合
- AIエージェント時代のデータプラットフォーム基盤
- エンタープライズデータ管理の現代化

### 次のステップ

1. 既存データレイクでのメタデータ整理・分類
2. パイロットプロジェクトでの検証
3. 全社データガバナンス戦略への統合

### 対象組織

- 大規模データセットを管理する企業
- AI・機械学習への投資を加速する組織
- メタデータ管理の効率化を求める企業

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-s3-annotations-business-context/
- **Amazon S3 ドキュメント**: https://docs.aws.amazon.com/s3/
- **Amazon SageMaker Unified Studio**: https://docs.aws.amazon.com/sagemaker/
- **関連イベント**: AWS AI and Data Conference 2026 - Building Safe AI Agents

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**