---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock Managed Knowledge Base が一般利用可能に

エンタープライズデータ向け完全マネージドRAGサービス

**発表日: 2026年6月17日**

---

## 概要

### Amazon Bedrock Managed Knowledge Baseの3つの主要特徴

- **完全マネージドRAG**: ベクトルデータベース、データパイプライン、検索インフラストラクチャを自動管理
- **6つのネイティブコネクタ**: Amazon S3、SharePoint、Confluence、Google Drive、OneDrive、Web Crawler
- **高度な検索機能**: ハイブリッド検索、ドキュメントランキング、マルチホップ対応エージェント検索

### 対応データ形式

- **マルチモーダル対応**: テキスト、ビデオ、オーディオ、画像を統合管理
- **自動同期**: エンタープライズデータの継続的な同期と最適化

---

## 前提・背景

### RAG（Retrieval-Augmented Generation）の課題

- ベクトルデータベースの構築と管理の複雑さ
- データ同期パイプラインの保守負担
- 検索精度の向上に必要な複雑な実装
- エンタープライズデータ統合の難しさ

### 市場の動向

- **AIエージェントの需要拡大**: エンタープライズにおけるAI活用の加速
- **本番環境での信頼性要求**: 迅速な展開と高い精度の両立が必要
- **データ統合の標準化**: 複数のデータソースからの効率的な活用

---

## 主な機能と改善

### 1. 自動化されたデータ管理

- **自動データ同期**: 接続されたデータソースから継続的に更新
- **ベクトル化の自動化**: 埋め込みモデルの自動選択と管理
- **ストレージ最適化**: コスト効率的なベクトルストレージ運用

### 2. 高度な検索機能

- **ハイブリッド検索**: 密ベクトル検索とキーワード検索の組み合わせ
- **ドキュメントランキング**: 関連性に基づいた検索結果の自動ランキング
- **エージェント検索**: 複雑なマルチホップクエリの自動解析と実行

---

## 技術的な特徴

### Amazon Bedrock AgentCoreとの統合

- **シームレス統合**: 数行のコードでナレッジベースをエージェントに接続
- **自動権限管理**: ロールベースのアクセス制御を自動生成
- **組み込み可観測性**: AgentCore Observability ダッシュボードでの監視

### 利用可能地域

- **北米**: US East (N. Virginia)、US West (Oregon)
- **アジア太平洋**: Asia Pacific (Sydney、Tokyo)
- **ヨーロッパ**: Europe (Dublin、Frankfurt、London)
- **その他**: AWS GovCloud (US-West)

---

## 利用シーン・ユースケース

### 1. 従業員アシスタント

- 企業データベースから自動的に回答を生成
- 社内ポリシー、手順書への即座のアクセス
- 複数のドキュメントを統合した複雑な問い合わせへの対応

### 2. カスタマーサポート自動化

- 製品マニュアル、FAQ、過去事例からの自動応答
- サポートチケット処理の効率化
- 多言語対応の知識ベース構築

### 3. マルチモーダルナレッジベース

- テキスト、画像、ビデオ、オーディオを統合管理
- トレーニング教材、プレゼン資料の効率的な活用
- 複合的な情報源からの最適な回答生成

---

## 効果・メリット

### 開発効率の向上

- **プロトタイプから本番への高速化**: インフラ管理の削減により数分で本番展開が可能
- **運用負担の軽減**: ベクトルデータベース、データパイプラインの管理が不要
- **スケーラビリティの確保**: マネージドサービスによる自動スケーリング

### 精度とパフォーマンスの向上

- **検索精度の改善**: ハイブリッド検索とドキュメントランキングによる高精度化
- **複雑クエリへの対応**: マルチホップ検索による多段階の推論が可能
- **レイテンシの最適化**: マネージドベクトルストレージによる高速検索

### セキュリティとコンプライアンス

- **自動権限管理**: ロールベースアクセス制御の自動化
- **監査ログの統合**: AgentCore Observability による可観測性
- **データ保護**: AWS の標準セキュリティ機構による保護

---

## 実装のステップ

### ステップ1: ナレッジベースの作成

```
1. Amazon Bedrock コンソールにログイン
2. Knowledge Base セクションでナレッジベースを作成
3. データソースコネクタを選択（S3、SharePoint等）
```

### ステップ2: データソースの接続

```
1. S3 パスまたは接続情報を指定
2. 自動同期設定を構成
3. メタデータフィルタを定義
```

### ステップ3: エージェントへの統合

```python
# 数行のコードで統合
agent.connect_knowledge_base(
    knowledge_base_id="KB123456",
    type="KNOWLEDGE_BASE"
)
```

---

## まとめ

### Amazon Bedrock Managed Knowledge Base の価値

- **インフラ管理の廃止**: ベクトルデータベースの構築・保守が不要
- **迅速な本番導入**: プロトタイプから本番環境まで数分で展開可能
- **エンタープライズ対応**: マルチモーダル、複雑クエリへの完全対応
- **コスト効率**: マネージドサービスによる運用コスト削減

### 次のステップ

1. 自社のユースケースに合わせたナレッジベースの設計
2. パイロットプロジェクトでの検証開始
3. 本番環境への段階的展開
4. 精度改善と継続的な最適化

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-managed-knowledge-base/
- **Amazon Bedrock ドキュメント**: https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html
- **AWS ブログ**: https://aws.amazon.com/blogs/aws/introducing-amazon-bedrock-managed-knowledge-base-for-faster-more-accurate-enterprise-ai-applications
- **DevelopersIO**: https://dev.classmethod.jp/en/articles/20260617-amazon-bedrock-managed-knowledge-base
- **参考アーキテクチャ**: https://hidekazu-konishi.com/entry/amazon_bedrock_rag_architecture_guide.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**