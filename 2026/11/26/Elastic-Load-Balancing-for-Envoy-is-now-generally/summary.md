# ELB for Envoy が一般提供開始 — Envoyプロキシの運用をAWSが担当

Elastic Load Balancing for Envoy is now generally available

**カテゴリ:** What's New
**公開日:** 2026-11-25T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/elastic-load-balancing-for-envoy-generally-available)

このページでは、AWS What's Newで発表された「Elastic Load Balancing for Envoy is now generally available」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

ELB for Envoyが一般提供開始となり、Envoyプロキシの運用をAWSが担う新しいロードバランサーをご利用いただけます。自らEnvoyを運用するプラットフォームチームやKubernetesイングレス、セルフマネージドEnvoyからの移行に適しております。

## このアップデートで何が変わったか

- 新機能は、オープンソースのEnvoyプロキシを実行するElastic Load Balancingの新しいロードバランサータイプであるELB for Envoyの一般提供開始です。
- AWSがアップグレード、セキュリティパッチ適用、アベイラビリティーゾーン間のキャパシティ管理を担当し、Nitro Systemによるハードウェア分離とCVE監視および自動パッチ適用を提供します。
- 既存のEnvoy設定、拡張機能、コントロールプレーンをそのまま利用でき、ACMやAWS WAFとの統合、WebAssemblyやLuaによるカスタムロジック追加をサポートします。
- VPC内で動作し、セキュリティグループおよびVPC暗号化に対応し、Kubernetes上のEnvoy GatewayからGateway APIリソースを書き換えずに移行でき、14のAWSリージョンでご利用いただけます。
- 本アップデートは、自らEnvoyを運用するプラットフォームチーム、Envoyの拡張性を必要とするワークロード、Kubernetesイングレス、セルフマネージドEnvoyからの移行に適しております。

## 対象ユーザー

- 新機能は、オープンソースのEnvoyプロキシを実行するElastic Load Balancingの新しいロードバランサータイプであるELB for Envoyの一般提供開始です。
- AWSがアップグレード、セキュリティパッチ適用、アベイラビリティーゾーン間のキャパシティ管理を担当し、Nitro Systemによるハードウェア分離とCVE監視および自動パッチ適用を提供します。
- 既存のEnvoy設定、拡張機能、コントロールプレーンをそのまま利用でき、ACMやAWS WAFとの統合、WebAssemblyやLuaによるカスタムロジック追加をサポートします。
- VPC内で動作し、セキュリ

## 詳細

- 新機能は、オープンソースのEnvoyプロキシを実行するElastic Load Balancingの新しいロードバランサータイプであるELB for Envoyの一般提供開始です。
- AWSがアップグレード、セキュリティパッチ適用、アベイラビリティーゾーン間のキャパシティ管理を担当し、Nitro Systemによるハードウェア分離とCVE監視および自動パッチ適用を提供します。
- 既存のEnvoy設定、拡張機能、コントロールプレーンをそのまま利用でき、ACMやAWS WAFとの統合、WebAssemblyやLuaによるカスタムロジック追加をサポートします。
- VPC内で動作し、セキュリティグループおよびVPC暗号化に対応し、Kubernetes上のEnvoy GatewayからGateway APIリソースを書き換えずに移行でき、14のAWSリージョンでご利用いただけます。
- 本アップデートは、自らEnvoyを運用するプラットフォームチーム、Envoyの拡張性を必要とするワークロード、Kubernetesイングレス、セルフマネージドEnvoyからの移行に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/elastic-load-balancing-for-envoy-generally-available)