# AWS MCP Server (Preview) - Enhanced Monitoring and Semantic Search

**カテゴリ:** What's New
**公開日:** 2026-03-19
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/aws-mcp-server-preview-enhanced-monitoring/](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-mcp-server-preview-enhanced-monitoring/)

---

## 要約

AWS MCP Serverプレビュー版に、CloudWatchへの運用メトリクス公開とセマンティック類似性を活用したAgent SOPs検出機能が追加されました。これにより、お客様はエージェントの使用パターンを追跡し、権限の問題を特定し、エラー率に基づくアラームを設定することが可能になります。

## 詳細

AWS MCP Serverがプレビュー版で、Amazon CloudWatchへの運用メトリクス公開機能が追加されました。Agent SOPsの検出機能がセマンティック類似性を使用してスケーラブルになりました。CloudWatchの AWS-MCP ネームスペース下で、追加コストなしにメトリクスが自動公開されます。

### 監視可能なメトリクス

- **呼び出し数**: エージェントによるツール実行回数
- **成功率**: タスク成功の割合
- **クライアントエラー**: リクエスト形式の問題
- **サーバーエラー**: AWS API側のエラー
- **スロットリング**: レート制限による制御

### 追跡可能なツール

- **call_aws**: AWS API呼び出しの詳細なメトリクス
- **retrieve_agent_sop**: Agent SOP検索の実行状況
- **search_documentation**: セマンティック検索機能によるドキュメント検索

### 新機能の効果

- 使用パターンの追跡: どのタスクがよく実行されるか可視化
- 権限問題の特定: IAM権限不足を早期に検出
- エラー率ベースのアラーム設定: カスタムしきい値で自動通知

### セマンティック類似性の強化

ドキュメント検索ツール（search_documentation）がセマンティック類似性を使用して、AWS ドキュメントと共に関連するAgent SOPsを返すようになりました。これにより、検索精度が大幅に向上し、よりスケーラブルなSOP検出が可能になります。

### 利用可能性

AWS MCP Serverはプレビュー版として米国東部（N. バージニア）リージョンで追加コストなしで利用可能です。CloudWatchメトリクスの公開も同様に追加コストなし。お客様が生成したAWSリソースとそれに関連するデータ転送費用のみが対象となります。

## ユースケース

### インフラ運用チーム向け
- CloudWatchダッシュボードでエージェント操作を監視
- IAMロール権限の過剰付与を検出
- エージェント導入時の効果測定

### セキュリティチーム向け
- 不正なAPI呼び出しパターンの検出
- 権限エスカレーション試行の追跡
- コンプライアンス監査ログの生成

### 開発チーム向け
- Agent SOPs実装時のデバッグ
- エージェント応答性能の測定
- 最適なプロンプト設計の検証
