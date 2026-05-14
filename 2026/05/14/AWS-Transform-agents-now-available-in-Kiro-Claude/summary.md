# AWS Transform エージェントが Kiro、Claude、Cursor、Codex で利用可能に

AWS Transform agents now available in Kiro, Claude, Cursor, and Codex

**カテゴリ:** What's New
**公開日:** 2026-05-14
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transform-developer-tools/)

このページでは、AWS What's Newで発表された「AWS Transform agents now available in Kiro, Claude, Cursor, and Codex」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Transform agentsが、Kiro、Claude、Cursor、CodexおよびMCPサーバーを通じて利用可能になり、開発者は自分の好みの開発環境からAWS Transformの全機能にアクセスできるようになりました。この更新により、複数の開発環境間でシームレスに連携しながら、Windows、VMware、メインフレームなどの複雑な変換タスクを効率的に実行できるようになります。

## このアップデートで何が変わったか

- AWS Transform agentsが、Kiro、Claude、Cursor、およびCodexで利用可能になったことが発表されました。
- AWS Transformの機能は、Kiro power、agentプラグイン、およびAWS Transform MCPサーバーを通じてアクセスできるようになりました。
- 開発者は、agentic IDE、ウェブコンソール、またはMCP経由でプログラム的に、自分の好みの開発環境からAWS Transformの全機能を利用できます。
- 開発者はagentic IDEで変換を開始し、ウェブコンソールで進捗を監視し、IDEで結果を確認することができ、すべて同じ基盤となるジョブに対して一貫した状態が保たれます。
- AWS TransformはIAMロール認証に対応しており、既存のAWS認証情報を使用してTransform環境、ワークスペース、および変換ジョブを作成できます。
- agentプラグインとMCPはGitHubで、Kiro PowerはKiroマーケットプレイスで利用可能です。

## 対象ユーザー

- 複数の開発環境を使用する開発者やビルダー
- AWS migration and modernizationの専門知識を活用したい開発者
- エンタープライズ規模での IT 変革を進める組織
- Windows、VMware、メインフレーム環境を保持する企業

## 主な利点

### 開発者の生産性向上
- 好みの開発環境で AWS Transform を利用可能
- IDE ⇔ ウェブコンソール間のシームレス連携
- 学習曲線の短縮

### 企業導入メリット
- IAM 認証による既存セキュリティ体系との統合
- 複数開発環境対応で組織全体への展開が容易
- 企業文化に合わせた IDE 選択が可能

### ビジネス効果
- 変換プロセスの簡素化で開発時間を短縮
- 自動化による人的コスト減
- AI エージェントの一貫した変換ルール適用

## 利用可能なプラットフォーム

| プラットフォーム | 配布方法 | ステータス |
|-----------------|--------|----------|
| Kiro Power | Kiro マーケットプレイス | 一般提供 |
| Agent Plugins | GitHub | 一般提供 |
| MCP サーバー | GitHub | 一般提供 |

## 対応される変換シナリオ

- **Windows モダナイゼーション**: .NET ⇒ Blazor + Aurora PostgreSQL
- **メインフレーム現代化**: レガシーシステムから AWS ネイティブアーキテクチャ
- **VMware 移行**: オンプレミス VM から AWS へのシームレス移行
- **カスタム変換**: 組織固有のコーディング規則を学習・適用

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transform-developer-tools/)
- [AWS Transform ホームページ](https://aws.amazon.com/transform/)
- [GitHub - Agent Plugins](https://github.com/awslabs/agent-plugins/tree/main/plugins/aws-transform/)
- [GitHub - MCP サーバー](https://github.com/awslabs/mcp/tree/main/src/aws-transform-mcp-server)