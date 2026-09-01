# AWS Agent Registryが一般提供開始 - エージェント検出とガバナンスの集中管理

AWS Agent Registry for centralized agent discovery and governance is now generally available

**カテゴリ:** What's New
**公開日:** 2026-08-31
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-agent-registry-generally-available)

このページでは、AWS What's Newで発表された「AWS Agent Registry for centralized agent discovery and governance is now generally available」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Agent Registryが一般提供となり、組織全体のAIエージェントとツールを集中的に検出・管理できるエンタープライズ機能が強化されました。本アップデートは、複数アカウントでのガバナンスと既存資産の再利用を求める企業チームに適しております。

## このアップデートで何が変わったか

### 一般提供開始

- AWS Agent Registryが一般提供開始となりました
- 組織内のエージェント、ツール、スキル、MCPサーバー、カスタムリソース向けのプライベートでガバナンスされたカタログおよび検出レイヤーを提供

### 新機能

- **コード管理**: CloudFormation、Terraform、CDKによるレジストリのコード管理
- **タグ付け**: コスト配分、アクセス制御、組織化に対応
- **アカウント間共有**: AWS RAMによるアカウント間でのレジストリ共有
- **自動検出**: AgentCore上のエージェント自動検出機能
- **複数インターフェース**: コンソール、CLI、SDK、Amazon Bedrock AgentCore、Amazon Quick、Kiro IDEからアクセス可能

## 対象ユーザー

- **開発チーム**: 既存エージェント・ツールの検出で開発時間を短縮、重複開発を防止
- **管理者・ガバナンス**: 組織全体のエージェント・ツール・スキルを一元管理、セキュリティ・コンプライアンスを強化
- **エンタープライズ**: 複数アカウント対応で大規模組織に対応、管理負荷を軽減

## 利用可能なリージョン

- US East (N. Virginia)
- US West (Oregon)
- Europe (Ireland)
- Asia Pacific (Tokyo)
- Asia Pacific (Sydney)

## 主な機能

### 検出・管理機能

- **セマンティック・キーワード検索**: 自然言語で必要なエージェント・ツールを検出
- **URL ベース自動検出**: MCP サーバーやエージェントエンドポイントからメタデータを自動取得
- **複数インターフェース**: コンソール、CLI、SDK、IDE（Kiro）から直接アクセス

### ガバナンス・セキュリティ

- **承認ワークフロー**: ドラフト → 承認待ち → 公開の段階的管理
- **IAM ポリシー**: 登録・検出のアクセス制御
- **CloudTrail 監査**: すべてのアクセスと管理操作を記録

### インフラストラクチャ・コード対応

- **AWS CloudFormation**: レジストリをコードで定義・管理
- **Terraform**: インフラストラクチャ・アズ・コード対応
- **AWS CDK**: プログラマティックな定義が可能

## ユースケース

### Southwest Airlines

- エンタープライズ規模のエージェント・カタログを構築
- 複数プラットフォーム間での統一的なガバナンス
- 標準化された所有権メタデータとポリシー強制で「エージェント・スプロール」を防止

### パートナー統合

- **Informatica**: ホストされた MCP サーバーをレジストリから検出・利用
- **Check Point**: AgentCore ワークロードのセキュリティ・コンプライアンス評価を自動化

## ロードマップ・今後の展開

### ガバナンス強化

- セキュリティ・コンプライアンス・重複排除の評価を承認ワークフローに統合
- リソースのバージョニングと完全な監査証跡

### 検出・インベントリ拡張

- EC2、EKS、ECS 上のリソースを自動検出
- 外部システムとのフェデレーション連携

### ユーザー体験向上

- スタンドアロン Web アプリケーション（SSO 認証対応）
- パブリック・レジストリで顧客・パートナーにエージェント機能を公開

## 参考リンク

- [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-agent-registry-generally-available/)
- [AWS Agent Registry ドキュメント](https://docs.aws.amazon.com/agent-registry/)
- [AWS ML ブログ](https://aws.amazon.com/blogs/machine-learning/manage-agents-tools-and-skills-at-scale-with-aws-agent-registry/)
- [AWS Show & Tell (YouTube)](https://www.youtube.com/watch?v=rIcOJrE-fTk)