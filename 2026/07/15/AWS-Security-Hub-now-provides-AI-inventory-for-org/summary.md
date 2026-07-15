# AWS Security Hub が AIインベントリ機能で組織全体のAIアセットを可視化

AWS Security Hub now provides AI inventory for organization-wide visibility of AI assets

**カテゴリ:** What's New
**公開日:** 2026-07-14T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-ai/)

このページでは、AWS What's Newで発表された「AWS Security Hub now provides AI inventory for organization-wide visibility of AI assets」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Security Hubが新たにAIインベントリ機能を提供することで、組織全体のAIアセットを自動検出し、セキュリティ脅威と相関させた一元的な可視化が実現されました。この機能は、複数のAWS環境にわたってAIワークロードをデプロイしている組織のセキュリティチームにとって、AIアセットの管理と脅威対応を効率化するために有効です。

## このアップデートで何が変わったか

- この機能はSecurity Hub Essentialsに追加費用なしで含まれており、追加の有効化は不要です。

- AIインベントリはSecurity Hubが提供されているすべてのAWSコマーシャルリージョンで利用可能です。

## 対象ユーザー

**このアップデートが有効な対象者：**

## 活用シーン

- Amazon InspectorのSBOM分析を活用して、EC2インスタンスやECRコンテナイメージ上のOllama、vLLM、Hugging Face TGIなどのフレームワークを識別します。

## 詳細

- AWS Security Hubが、組織全体のAIアセットの可視化を実現するAIインベントリ機能を提供するようになりました。

- この機能により、セキュリティチームはAIエージェント、モデル、パイプラインなどのAIアセットを一元的に把握できるようになります。

- Security Hub AIインベントリは、Amazon Bedrock、Bedrock AgentCore、Amazon SageMakerなどのマネージドAIサービスから自動的にリソースを検出します。

- Amazon InspectorのSBOM分析を活用して、EC2インスタンスやECRコンテナイメージ上のOllama、vLLM、Hugging Face TGIなどのフレームワークを識別します。

- Amazon GuardDuty DNSテレメトリを活用して、EC2インスタンスからアクセスされる外部AIAPIエンドポイント（サードパーティモデルプロバイダーへの呼び出しなど）を検出します。

- 検出されたAIアセットは基盤となるインフラストラクチャにマッピングされ、Amazon GuardDutyの脅威検出を含むAWSセキュリティスタック全体のセキュリティ検出結果と相関関係が確立されます。

- セキュリティチームはアカウント、リソースタイプ、検出方法、モデルIDごとにAIインベントリをフィルタリング、グループ化、クエリできます。

- この機能はSecurity Hub Essentialsに追加費用なしで含まれており、追加の有効化は不要です。

- AIインベントリはSecurity Hubが提供されているすべてのAWSコマーシャルリージョンで利用可能です。

**このアップデートが有効な対象者：**

- 組織全体のAIアセットのセキュリティ可視性を必要とする中央セキュリティチーム。

- 複数のAWS環境にわたってAIワークロードをデプロイしている大規模組織。

- AIアセットの脅威検出と構成ミスを一元管理したいセキュリティ運用チーム。

- サードパーティAI依存関係を特定し、管理する必要があるセキュリティ責任者。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-ai/)