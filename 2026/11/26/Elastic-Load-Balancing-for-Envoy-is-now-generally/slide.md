---
marp: true
theme: aws-whatsnew
paginate: true
---

# ELB for Envoy が一般提供開始 — Envoyプロキシの運用をAWSが担当

Elastic Load Balancing for Envoy is now generally available

**What's New** | 2026-11-25T16:00:00

---

## 概要

- ELB for Envoyが一般提供開始となり、Envoyプロキシの運用をAWSが担う新しいロードバランサーをご利用いただけます。
- 自らEnvoyを運用するプラットフォームチームやKubernetesイングレス、セルフマネージドEnvoyからの移行に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Elastic Load Balancing for Envoy is now generally available - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/elastic-load-balancing-for-envoy-generally-available)

- **AWS makes ELB for Envoy generally available - Venture Atlas**
  [詳細](https://www.ventureatlas.org/news/2026-11-25-aws-elb-envoy)

---

## 変更内容・新機能

- 新機能は、オープンソースのEnvoyプロキシを実行するElastic Load Balancingの新しいロードバランサータイプであるELB for Envoyの一般提供開始です。
- AWSがアップグレード、セキュリティパッチ適用、アベイラビリティーゾーン間のキャパシティ管理を担当し、Nitro Systemによるハードウェア分離とCVE監視および自動パッチ適用を提供します。
- 既存のEnvoy設定、拡張機能、コントロールプレーンをそのまま利用でき、ACMやAWS WAFとの統合、WebAssemblyやLuaによるカスタムロジック追加をサポートします。
- VPC内で動作し、セキュリティグループおよびVPC暗号化に対応し、Kubernetes上のEnvoy GatewayからGateway APIリソースを書き換えずに移行でき、14のAWSリージョンでご利用いただけます。
- 本アップデートは、自らEnvoyを運用するプラットフォームチーム、Envoyの拡張性を必要とするワークロード、Kubernetesイングレス、セルフマネージドEnvoyからの移行に適しております。

---

## まとめ

- Elastic Load Balancing for Envoy is now generally available について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/elastic-load-balancing-for-envoy-generally-available)

### 関連情報

- [Elastic Load Balancing for Envoy is now generally available - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/elastic-load-balancing-for-envoy-generally-available)
- [AWS makes ELB for Envoy generally available - Venture Atlas](https://www.ventureatlas.org/news/2026-11-25-aws-elb-envoy)