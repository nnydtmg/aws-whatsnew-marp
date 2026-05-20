# AWS Secrets Manager Agent で事前取得とロール引き受けが利用可能に

Introducing pre-fetching and IAM role assumption for AWS Secrets Manager Agent

**カテゴリ:** What's New
**公開日:** 2026-05-18T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/secrets-manager-agent-prefetch-and-role-assumption/)

このページでは、AWS What's Newで発表された「Introducing pre-fetching and IAM role assumption for AWS Secrets Manager Agent」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Secrets Manager Agentが、スタートアップ時のシークレット事前取得機能とIAMロール引き受け機能をサポートするようになりました。これらの機能により、アプリケーション起動レイテンシーの削減、セキュリティ態勢の強化、およびマルチアカウント環境での運用オーバーヘッドの削減が実現されます。

## このアップデートで何が変わったか

- この更新により、ロールベースのシークレットアクセスを通じてセキュリティ態勢が強化されます。

## 活用シーン

- BatchGetSecretValue APIを活用することで、アプリケーション起動レイテンシーを削減し、コストを最適化できるようになりました。

## 詳細

- AWS Secrets Manager Agentが、スタートアップ時のシークレット事前取得機能をサポートするようになりました。

- 事前取得機能により、指定したシークレットまたはタグ値をエージェント起動時に取得してキャッシュできるようになりました。

- BatchGetSecretValue APIを活用することで、アプリケーション起動レイテンシーを削減し、コストを最適化できるようになりました。

- IAM ロール引き受け機能により、事前取得設定またはHTTPリクエストでロールARNを指定できるようになりました。

- IAM ロール引き受け機能を使用することで、異なるアカウント内のロールを引き受けて、クロスアカウント間でのシークレット取得が可能になりました。

- この更新により、ロールベースのシークレットアクセスを通じてセキュリティ態勢が強化されます。

- カスタム事前読み込みロジックを排除することで、運用オーバーヘッドが削減されます。

- 起動時に20個のシークレットが必要なマイクロサービスの場合、単一のバッチ操作で事前取得でき、順序付きGetSecretValue呼び出しを回避できます。

- マルチアカウントアーキテクチャでは、シークレットごとに異なるIAMロールを指定することが可能になりました。

- この機能は、AWS Secrets Managerが提供されているすべてのAWSリージョンでサポートされています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/secrets-manager-agent-prefetch-and-role-assumption/)