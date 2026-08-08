# Amazon Cognito が AWS Agent Toolkit のスキルとして利用可能に

Amazon Cognito now available as a skill in the Agent Toolkit for AWS

**カテゴリ:** What's New
**公開日:** 2026-08-07
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-auth-agent-skill/)

このページでは、AWS What's Newで発表された「Amazon Cognito now available as a skill in the Agent Toolkit for AWS」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Cognito が AWS Agent Toolkit のコアスキル（aws-auth）として新たに利用可能になり、AIコーディングエージェントがセキュアなサインインフロー実装をベストプラクティスに基づいて迅速に構築できるようになりました。

## このアップデートで何が変わったか

- Amazon Cognito が AWS Agent Toolkit のコアスキル（aws-auth）として利用可能に
- AIコーディングエージェントが Amazon Cognito をセットアップ・設定・セキュリティ保護・トラブルシューティング可能
- ベストプラクティスワークフローに基づいた実装

## 対応機能

### 認証・認可機能
- ユーザープール設定
- アプリクライアント設定
- OAuth 2.0 フロー
- JWT オーソライザー
- マネージドログイン

### セキュリティ機能
- WebAuthn / パスキー登録
- 脅威保護機能
- Lambda トリガー配線
- アイデンティティプール
- IAM ベースのガードレール
- CloudTrail 監査ログ

## ユースケース

- **SaaS アプリケーション**: ユーザー認証フローの高速構築
- **マイクロサービス**: サービス間の認証・JWT オーソライザー
- **AI エージェント**: エージェント自身の認識管理・権限制御

## メリット

- ✅ 認証フロー構築時間を大幅短縮
- ✅ ベストプラクティスに基づいた実装保証
- ✅ IAM ガードレール と CloudTrail による監視・管理
- ✅ ユーザー、エージェント、マイクロサービスに対応
- ✅ AWS Agent Toolkit での一元管理

## 利用開始方法

1. GitHub から Amazon Cognito aws-auth skill をダウンロード
   - https://github.com/aws/agent-toolkit-for-aws/tree/main/skills/core-skills/aws-auth

2. Agent Toolkit Quick Start ガイド を参照
   - https://docs.aws.amazon.com/agent-toolkit/latest/userguide/quick-start.html

3. AWS MCP Server と組み合わせて運用開始

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-auth-agent-skill/)
- [Amazon Cognito aws-auth skill (GitHub)](https://github.com/aws/agent-toolkit-for-aws/tree/main/skills/core-skills/aws-auth)
- [Agent Toolkit Quick Start ガイド](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/quick-start.html)
- [Amazon Cognito Developer Guide](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)
- [AWS MCP Server ドキュメント](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/mcp-server.html)