# AWS DevOps AgentがAccess ProfilesとAWS Organizationsをサポート

AWS DevOps Agent adds Access Profiles and AWS Organizations

**カテゴリ:** What's New
**公開日:** 2026-11-23T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/devops-agent-access-profiles-orgs/)

このページでは、AWS What's Newで発表された「AWS DevOps Agent adds Access Profiles and AWS Organizations」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS DevOps AgentにAccess ProfilesとAWS Organizationsのサポートが追加され、権限管理とアカウント連携が容易になりました。本機能は、ガバナンスを強化したい組織のお客様に適しています。

## このアップデートで何が変わったか

AWS DevOps Agent now gives you more ways to govern and control your AWS DevOps Agent instances. With the new Access Profiles feature you can link IAM IDC users in your Agent Spaces to specific permission sets. For example, you can use Access Profiles to limit the ability to create or update skills and memories to a select set of users. AWS Organizationsのサポートでは、組織内のアカウントをAgent Spacesに自動的に整合できます。Access Profilesでは、Agent Spaces内のIAM Identity Centerユーザーを特定の権限セットに紐付けることができます。スキルやメモリの作成・更新を特定のユーザーに制限でき

## 対象ユーザー

AWS DevOps Agent now gives you more ways to govern and control your AWS DevOps Agent instances. With the new Access Profiles feature you can link IAM IDC users in your Agent Spaces to specific permission sets. For example, you can use Access Profiles to limit the ability to create or update skills a

## 活用シーン

AWS DevOps Agent now gives you more ways to govern and control your AWS DevOps Agent instances. With the new Access Profiles feature you can link IAM IDC users in your Agent Spaces to specific permission sets. For example, you can use Access Profiles to limit the ability to create or update skills a

## 詳細

AWS DevOps Agent now gives you more ways to govern and control your AWS DevOps Agent instances. With the new Access Profiles feature you can link IAM IDC users in your Agent Spaces to specific permission sets. For example, you can use Access Profiles to limit the ability to create or update skills and memories to a select set of users. AWS Organizationsのサポートでは、組織内のアカウントをAgent Spacesに自動的に整合できます。Access Profilesでは、Agent Spaces内のIAM Identity Centerユーザーを特定の権限セットに紐付けることができます。スキルやメモリの作成・更新を特定のユーザーに制限できます。組織単位（OU）または組織ルートをAgent Spaceに接続でき、CloudFormation StackSetsでアクセスロールを各アカウントに自動デプロイします。各Agent Spaceは最大20の関連付けと3,000のカバーアカウントをサポートします。チャットがスキル・メモリ・カスタムエージェントなどのアセットを扱う際はオペレーター権限を使用します。コンテンツセーフティガードレール（Amazon Bedrock Guardrails）がプロンプトインジェクションとジェイルブレイクを検知します。本アップデートは、AWS DevOps Agentインスタンスのガバナンスと制御を強化したいお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/devops-agent-access-profiles-orgs/)