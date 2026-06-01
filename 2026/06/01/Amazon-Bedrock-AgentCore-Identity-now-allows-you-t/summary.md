# Amazon Bedrock AgentCore Identity が AWS Secrets Manager でのシークレット管理に対応

Amazon Bedrock AgentCore Identity now allows you to bring your own secrets with AWS Secrets Manager

**カテゴリ:** What's New
**公開日:** 2026-06-01
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-identity-secrets-manager/)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Identity now allows you to bring your own secrets with AWS Secrets Manager」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore Identityが、AWS Secrets Managerの既存シークレットARNを直接参照できる機能を一般提供開始いたしました。これにより、顧客はカスタマーマネージドキーによる暗号化やリソースタグ、自動ローテーションなど、独自のガバナンスポリシーに基づいてシークレットを管理できるようになり、厳格なコンプライアンス要件を持つ組織に特に有用です。

## このアップデートで何が変わったか

Amazon Bedrock AgentCore Identityが、AWS Secrets Managerの既存シークレットARNを直接参照できるようになりました。これまでは、サービス管理型シークレットアプローチが使用されており、シークレットはサービスによって顧客の代わりに作成・管理されていました。新機能により、顧客はAWS Secrets Managerでシークレットを自身で作成・管理でき、カスタマーマネージドキー（CMK）による暗号化やリソースタグの適用が可能になりました。自動ローテーション、リソースポリシー、組織固有のガバナンスコントロールを適用できるようになりました。AgentCore Identityの実行時の動作は変わらず、シークレットの作成・分類・ガバナンスについて完全な所有権を顧客が得られます。この機能は14のAWSリージョンで一般提供されています。この更新は、厳格なガバナンス要件を持つチームに特に適しています。シークレット管理に対する組織的なコンプライアンスポリシーを適用したい顧客に有益です。

## 詳細

Amazon Bedrock AgentCore Identityが、AWS Secrets Managerの既存シークレットARNを直接参照できるようになりました。これまでは、サービス管理型シークレットアプローチが使用されており、シークレットはサービスによって顧客の代わりに作成・管理されていました。新機能により、顧客はAWS Secrets Managerでシークレットを自身で作成・管理でき、カスタマーマネージドキー（CMK）による暗号化やリソースタグの適用が可能になりました。自動ローテーション、リソースポリシー、組織固有のガバナンスコントロールを適用できるようになりました。AgentCore Identityの実行時の動作は変わらず、シークレットの作成・分類・ガバナンスについて完全な所有権を顧客が得られます。この機能は14のAWSリージョンで一般提供されています。この更新は、厳格なガバナンス要件を持つチームに特に適しています。シークレット管理に対する組織的なコンプライアンスポリシーを適用したい顧客に有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-identity-secrets-manager/)