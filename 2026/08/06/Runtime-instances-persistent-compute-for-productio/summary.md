# Amazon Bedrock AgentCore のランタイムインスタンス - 本番環境の AI エージェント向け永続的コンピュート

Runtime instances: persistent compute for production AI agents on Amazon Bedrock AgentCore

**カテゴリ:** AWS Blog
**公開日:** 2026-08-06T22:58:00
**元記事:** [元記事](https://aws.amazon.com/blogs/aws/runtime-instances-persistent-compute-for-production-ai-agents-on-amazon-bedrock-agentcore/)

このページでは、AWS What's Newで発表された「Runtime instances: persistent compute for production AI agents on Amazon Bedrock AgentCore」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCoreの新しい「Runtime instances」機能により、複数のエージェントが最大14日間にわたって共有インフラストラクチャ上で協調作業できるようになりました。このアップデートは、複数日間実行されるワークフロー、GPU処理、マルチエージェント調整が必要な本番環境のAIエージェントを構築・運用する組織に特に有益です。

## このアップデートで何が変わったか

- Amazon Bedrock AgentCoreに「Runtime instances」という新しいコンピュート オプションが追加されました。
- Runtime instancesは、複数のエージェントを単一のランタイムにデプロイできるAWS管理のEC2インフラストラクチャを提供します。
- エージェント同士が同じホスト上で協調作業でき、最大14日間持続するセッションをサポートしています。
- GPUアクセラレーション、セッションの停止/再開、コンテナ化されたデプロイメントが利用可能です。
- Runtime microVMsとRuntime instancesは補完的なコンピュート オプションであり、同じAgentCore APIを通じて連携できます。
- 複数日間実行されるワークフロー、GPUアクセスが必要なタスク、マルチエージェント調整が必要な場合に特に有用です。
- デモでは、コード生成エージェントとコードレビューエージェントが共有ファイルシステムを通じて協調作業する例が示されました。
- Python 3.11-14、ARM64およびx86_64 Linux、GPU対応インスタンスタイプがサポートされています。
- 複数のAWSリージョンで利用可能であり、標準的なEC2料金とAgentCoreオーケストレーション管理料金が適用されます。

## 詳細

Amazon Bedrock AgentCoreの進化の一環として、新しいコンピュート オプション「Runtime instances」が導入されました。

### 主な機能

**1. 永続的なコンピュート環境**
- EC2ベースのAWS管理インフラストラクチャ
- 最大14日間のセッション持続時間
- 複数エージェントの共存と協調作業

**2. セッション・ワークフロー管理**
- セッション停止・再開機能
- 共有ファイルシステムによるデータ交換
- ステートフルなエージェント動作

**3. リソース・プラットフォーム対応**
- GPUアクセラレーション対応
- Python 3.11-3.14のサポート
- ARM64、x86_64アーキテクチャ対応

### ユースケース

- **マルチエージェント協調**: コード生成とコードレビューエージェントの連携
- **複数日ワークフロー**: 複雑な業務プロセスの自動化
- **高度な計算処理**: GPUを活用した分析・推論タスク

### 料金体系

- 標準的なEC2料金
- AgentCoreオーケストレーション管理料金

## 参考リンク

- [元記事](https://aws.amazon.com/blogs/aws/runtime-instances-persistent-compute-for-production-ai-agents-on-amazon-bedrock-agentcore/)
- [Amazon Bedrock AgentCore ドキュメント](https://docs.aws.amazon.com/bedrock/)