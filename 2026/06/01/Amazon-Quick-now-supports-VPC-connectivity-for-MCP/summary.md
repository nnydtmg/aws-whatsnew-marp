# Amazon Quick が VPC 接続での MCP 接続をサポート

Amazon Quick now supports VPC connectivity for MCP connections

**カテゴリ:** What's New
**公開日:** 2026-06-01T17:26:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-vpc-mcp/)

このページでは、AWS What's Newで発表された「Amazon Quick now supports VPC connectivity for MCP connections」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Quickが、プライベートネットワーク上でホストされているModel Context Protocol（MCP）サーバーへのVPC接続をサポートするようになりました。これにより、エンタープライズ顧客は独自アプリケーションやカスタムデータソースをインターネットに公開することなく、安全にAI ワークフローに統合できるようになります。

## このアップデートで何が変わったか

- Amazon Quickが、Model Context Protocol（MCP）サーバーへのVPC接続をサポートするようになりました
- これまでのMCP対応は、公開インターネット経由でアクセス可能なサードパーティホスト型サーバーに限定されていました
- VPC対応により、プライベートネットワーク上でホストされているMCP サーバーをAmazon Quickに安全に接続できるようになりました
- 独自アプリケーション、カスタムデータソース、および内部ツール用のプライベートホストMCP サーバーを運用するエンタープライズ顧客に最適です
- VPC対応はAmazon Quickが利用可能なすべてのAWSリージョンで利用可能です

## 詳細

### サポート対象のコンピュート環境

- Amazon EC2
- AWS Fargate
- AWS Agentcore
- その他プライベートネットワーク内のコンピュート

### 設定方法

- MCP コネクター作成時にVPC接続を選択
- MCP サーバーのURLを指定するだけで設定が完了
- すべてのトラフィックはVPC経由で安全にルーティング

### インタラクション方法

- チームはQuick内で自然言語を使用してプライベートMCP サーバーと対話可能
- VPC経由の安全な通信を実現

### セキュリティ面のメリット

- 機密データをインターネットに公開することなく、AI ワークフローを拡張できる
- セキュリティとプライバシーを重視する組織に最適

## 活用例

### エンタープライズユースケース

1. **独自アプリケーション統合**
   - 社内システムとAmazon Quickの連携
   - ビジネスロジックの AI活用

2. **カスタムデータソース統合**
   - 社内データベースとの接続
   - 機密データの安全な処理

3. **内部ツール連携**
   - 既存システムの統合
   - ワークフロー自動化の実現

## 今後の対応

- VPC対応はAmazon Quickが利用可能なすべてのAWSリージョンで利用可能
- エンタープライズ顧客の継続的なニーズに対応
- セキュアなAI統合の新しいスタンダード

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-vpc-mcp/)
- [Model Context Protocol (MCP) integration - Amazon Quick](https://docs.aws.amazon.com/quick/latest/userguide/mcp-integration.html)
- [Connect Amazon Quick Suite to enterprise apps and agents with MCP](https://aws.amazon.com/blogs/machine-learning/connect-amazon-quick-suite-to-enterprise-apps-and-agents-with-mcp)
- [Amazon Quick integration with time-series databases for market intelligence](https://aws.amazon.com/blogs/machine-learning/amazon-quick-integration-with-time-series-databases-for-market-intelligence-using-mcp)