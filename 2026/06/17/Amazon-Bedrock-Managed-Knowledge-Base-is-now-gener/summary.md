# Amazon Bedrock Managed Knowledge Base が一般利用可能に

Amazon Bedrock Managed Knowledge Base is now generally available

**カテゴリ:** What's New
**公開日:** 2026-06-17
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-managed-knowledge-base/)

このページでは、AWS What's Newで発表された「Amazon Bedrock Managed Knowledge Base is now generally available」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock Managed Knowledge Baseは、ベクトルデータベース管理の負担を軽減し、6つのネイティブコネクタと高度な検索機能を備えた完全マネージドRAGサービスとして一般利用可能になりました。このサービスは、エンタープライズデータに基づいたAIエージェントを迅速に本番環境に展開したい開発者や組織に最適です。

## このアップデートで何が変わったか

### 新しい完全マネージドRAGサービス

- **Amazon Bedrock Managed Knowledge Base の一般利用開始**
- ベクトルデータベース、データパイプライン、検索インフラストラクチャを自動管理
- エンタープライズデータに基づいたRAGサービスをマネージドで提供

### 6つのネイティブコネクタ

- **Amazon S3**: AWS のオブジェクトストレージからのデータ接続
- **SharePoint**: マイクロソフトのエンタープライズポータルからのデータ取得
- **Confluence**: Atlassian のドキュメント管理プラットフォーム統合
- **Google Drive**: Google のクラウドストレージからのデータ連携
- **OneDrive**: マイクロソフトのクラウドストレージからのデータ連携
- **Web Crawler**: 公開ウェブサイトからの自動データ収集

### 高度な検索機能

- **ハイブリッド検索**: ベクトルベース検索とキーワード検索の組み合わせ
- **ドキュメントランキング**: 検索結果の関連性に基づいた自動ランキング
- **エージェント検索**: マルチホップクエリ（複数ステップの質問）への自動対応

### マルチモーダル対応

- **テキスト**: 従来のテキストドキュメント
- **ビデオ**: 動画ファイルからの情報抽出
- **オーディオ**: 音声ファイルからの情報抽出
- **画像**: 画像ファイルからの情報抽出

### Amazon Bedrock AgentCore との統合

- **シームレス統合**: ナレッジベースをエージェントに簡単に接続
- **自動権限管理**: ロールベースのアクセス制御を自動生成
- **組み込み可観測性**: AgentCore Observability ダッシュボードでの監視と評価

### 利用可能な地域

- **北米**: US East (N. Virginia)、US West (Oregon)
- **アジア太平洋**: Asia Pacific (Sydney、Tokyo)
- **ヨーロッパ**: Europe (Dublin、Frankfurt、London)
- **その他**: AWS GovCloud (US-West)

## 対象ユーザー

### 開発者

- プロトタイプから本番環境への迅速な展開を目指す開発者
- インフラ管理の負担なくAIエージェントを構築したい開発者
- 短期間でエンタープライズAI体験を実装したい開発者

### エンタープライズ組織

- 従業員アシスタント、カスタマーサポート自動化を必要とする組織
- マルチモーダルナレッジベース構築を必要とする組織
- エンタープライズデータに基づいたAIエージェントを構築したい企業

### ユースケース

- **従業員アシスタント**: 社内情報から自動回答を生成
- **カスタマーサポート**: 顧客サポートを自動化・効率化
- **マルチモーダル検索**: テキスト、ビデオ、画像を統合した検索
- **内部ポリシー参照**: 社内規定・手順書への即座のアクセス提供

## 主な技術的特徴

### 自動化された管理

- ベクトル化の自動化（埋め込みモデルの自動選択）
- データ同期の自動化（継続的な更新管理）
- ストレージの自動最適化（コスト効率的な管理）

### スケーラビリティ

- マネージドサービスによる自動スケーリング
- エンタープライズレベルの可用性確保
- グローバルな地域展開への対応

### セキュリティ

- 自動権限管理によるアクセス制御
- 監査ログの統合
- AWS 標準のセキュリティ機構

## ビジネス上のメリット

### 速度

- **時間削減**: 従来の数週間から数分での本番導入
- **開発加速**: インフラ構築期間の廃止
- **迅速なイテレーション**: マネージドサービスによる運用負担軽減

### コスト

- **運用コスト削減**: ベクトルDB、パイプラインの管理不要
- **インフラコスト最適化**: 自動ストレージ最適化による効率化
- **開発リソース節約**: 複雑な実装の不要化

### 精度

- **検索精度向上**: ハイブリッド検索とランキング機能
- **複雑クエリへの対応**: マルチホップ検索による多段階推論
- **継続的な改善**: 自動的なベストプラクティスの適用

## 導入のステップ

### 1. ナレッジベースの作成

Amazon Bedrock コンソール上でナレッジベースを作成します。

### 2. データソースの接続

S3、SharePoint、Confluence などから接続を選択して設定します。

### 3. エージェントへの統合

数行のコードで Bedrock AgentCore に統合します。

### 4. テストと最適化

実際のクエリでテストを行い、精度を最適化します。

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-managed-knowledge-base/
- **Amazon Bedrock ドキュメント**: https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html
- **Amazon Bedrock Knowledge Base 製品ページ**: https://aws.amazon.com/bedrock/knowledge-bases/
- **AWS ブログ**: https://aws.amazon.com/blogs/aws/introducing-amazon-bedrock-managed-knowledge-base-for-faster-more-accurate-enterprise-ai-applications
- **DevelopersIO**: https://dev.classmethod.jp/en/articles/20260617-amazon-bedrock-managed-knowledge-base
- **参考アーキテクチャ**: https://hidekazu-konishi.com/entry/amazon_bedrock_rag_architecture_guide.html

---

**注記**: このドキュメントは、AWS What's New で公開されたアナウンスを元に作成されています。最新情報は公式ドキュメントをご確認ください。