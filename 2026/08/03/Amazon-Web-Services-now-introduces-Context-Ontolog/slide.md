---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Context Ontology Accelerator が一般提供開始

AWS の AI エージェント構築ツール

**発表日: 2026年7月31日**

---

## 概要

### Context Ontology Accelerator とは

- **オープンソースツール**: ビジネスオントロジーを自動構築するAWS製ツール
- **開発期間の短縮**: 数ヶ月かかるプロセスを数日に圧縮
- **AI エージェント強化**: 正確で一貫性のある説明可能な意思決定を実現

### 主要な効果

- 複数のシステムに散在するデータを統合
- AIエージェントの信頼性と監査可能性を向上
- スキーマの競合と命名規則の不一致を解決

---

## 前提・背景

### 市場の課題

- **データ分散**: 複数のシステムにデータが散在し、統合が困難
- **開発コスト**: オントロジー構築に数ヶ月の時間が必要
- **信頼性**: AIエージェントの意思決定の説明責任と監査が不足
- **スキーマ競合**: データソース間での命名規則とスキーマの不統一

### Agentic AI の進化

- AWS Contextなど、知識グラフベースのAIサービスが登場
- Amazon Quickで実績のある知識グラフ技術を展開
- 企業全体でAIエージェントを活用する環境が整備中

---

## 主な機能

### 1. データ統合・自動オントロジー生成

- **Scan フェーズ**: 構造化・非構造化データソースに接続
- **Model フェーズ**: AI を使用してオントロジーを自動生成
- **Serve フェーズ**: Model Context Protocol（MCP）サーバーで提供

### 2. エキスパートレビュー

- ドメイン専門家がAI生成のオントロジーをレビュー
- 編集・承認のワークフロー
- ビジネスルールの明確化

### 3. W3C標準対応

- 承認されたオントロジーを W3C 標準の知識グラフで表現
- Model Context Protocol（MCP）サーバーを通じてエージェントが利用

---

## 主な機能（続き）

### 4. AWS サービス統合

- **Amazon Neptune**: グラフデータベースとしての基盤
- **Amazon OpenSearch Serverless**: フルテキスト検索と分析
- **Amazon Bedrock**: GenAI による自動生成エンジン

### 5. オープンソース・ポータビリティ

- **GitHub で提供**: Apache 2.0 ライセンス
- **Apache Iceberg 形式**: Amazon S3 Tables での保存
- **標準的なツールで利用**: Athena、Redshift、Spark対応

---

## 効果・メリット

### 開発効率

- オントロジー構築期間: **数ヶ月 → 数日**
- 自動化による工数削減
- 専門家レビューによる品質確保

### 運用・ガバナンス

- **信頼性**: AIエージェントの意思決定が説明可能に
- **監査可能性**: 知識グラフによる完全な追跡可能性
- **ガバナンス**: ID対応のアクセス制御と権限管理

### データ活用

- データソース間のシームレスな統合
- ビジネスルール・定義の一元管理
- クロスシステムの関係性を自動検出

---

## ユースケース

### 適用業界・シナリオ

<div class="columns">
<div>

### 金融・決済

- 複数の口座・顧客データの統合
- コンプライアンス監視の自動化
- 不正検知エージェントの高度化

</div>
<div>

### 製造・小売

- サプライチェーン最適化
- 在庫管理・需要予測
- 顧客サービス自動化

</div>
</div>

### 推奨される組織

- **複数システム環境**: SAP、Oracle、Salesforce などが混在
- **AI エージェント導入検討中**: PoC → 本番環境への移行を計画
- **規制対応**: 監査・説明責任の強化が必要

---

## 実装・導入

### アーキテクチャ

```
データソース層
  ├─ 構造化データ（RDS、S3、Redshift）
  ├─ 非構造化データ（ドキュメント、ログ）
  └─ 外部カタログ（サードパーティシステム）
        ↓
Context Ontology Accelerator
  ├─ Scan: メタデータ抽出
  ├─ Model: オントロジー生成
  └─ Manage: レビュー・承認
        ↓
知識グラフ層（Amazon Neptune + OpenSearch）
  ├─ W3C 標準表現
  └─ SPARQL / MCP インタフェース
        ↓
AI エージェント（Amazon Bedrock AgentCore など）
```

### 導入ステップ

1. **準備**: データソースの棚卸し・スキーマ確認
2. **スキャン**: Context Ontology Accelerator でメタデータ抽出
3. **モデリング**: AI による自動オントロジー生成
4. **レビュー**: 専門家による承認・編集
5. **デプロイ**: 知識グラフを本番環境に配置
6. **統合**: AI エージェントで利用開始

---

## まとめ

### Context Ontology Accelerator の価値

- **迅速性**: 数日でのオントロジー構築により、AI プロジェクトを加速
- **信頼性**: 説明可能で監査可能なAIエージェント実現
- **スケーラビリティ**: AWS サービスとの統合で数千のエージェント運用も可能

### 次のステップ

1. 自社のデータアーキテクチャを評価
2. GitHub で Context Ontology Accelerator を試す
3. AWS サポートに相談して PoC を実施
4. 本番環境への段階的展開を計画

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-context--ontology-accelarator-generally-available
- **GitHub リポジトリ**: https://github.com/aws/context-ontology-accelerator
- **AWS Context ブログ**: https://aws.amazon.com/blogs/machine-learning/context-intelligence-for-your-data-and-ai-agents-at-scale
- **AWS Summit New York 2026**: https://www.aboutamazon.com/news/aws/aws-summit-nyc-2026-ai-agents
- **Amazon Bedrock ドキュメント**: https://docs.aws.amazon.com/bedrock/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
