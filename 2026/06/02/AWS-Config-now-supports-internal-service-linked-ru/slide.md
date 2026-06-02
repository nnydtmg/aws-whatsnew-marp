---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Config が内部サービスリンクルールをサポート

AWS Config now supports internal service linked rules

**What's New** | 2026-06-02T18:00:00

---

## 概要

- AWS Configが内部サービスリンクルール機能をサポートするようになり、AWS Security HubなどのAWSサービスがAWS Configマネージドルールを使用してリソース構成を評価できるようになりました。
- この機能により、顧客は既存のAWS Config運用を継続しながら、AWSサービスがサービス固有の評価を独立して管理でき、追加費用なしで統合されたセキュリティおよびコンプライアンス機能を享受できるようになります。

---

## 前提・背景

### 従来の課題

- AWS Configとセキュリティサービスの統合におけるオーバーヘッド
- サービスごとの独立した評価管理
- コンプライアンス監視の複雑化

### 市場動向

- クラウドセキュリティポスチャー管理(CSPM)の需要増加
- AWS Security Hubなどの統合セキュリティサービスの普及
- リソース構成の自動評価・監視への要望

---

## 変更内容・新機能

### 内部サービスリンクルール機能

- AWS Configが内部サービスリンクルール機能をサポート
- AWSサービスがAWS Configマネージドルールを使用してリソース構成を評価
- 内部サービスリンクルールは、既存のサービスリンクレコーダー機能を拡張

### AWS Security Hub との連携

- AWS Security Hub CSPMがサービス固有の機能に対するルール評価をデプロイ・管理
- 評価結果は、ルールをデプロイしたAWSサービスに直接配信
- AWS Configから顧客への課金は発生しない

---

## 主な利点

### 既存運用との互換性

- **独立した動作**: 内部サービスリンクルールは、既存の顧客管理型AWS Configレコーダーおよびルールとは独立
- **継続的な利用**: 顧客は引き続きAWS Configをインベントリ、ガバナンス、コンプライアンス、監査用途に使用可能
- **追加費用なし**: コスト効率的なセキュリティ強化

### セキュリティの強化

- 統合されたセキュリティおよびコンプライアンス機能
- AWSサービスのネイティブな評価能力の活用
- 自動化されたリソース構成チェック

---

## 利用可能なリージョン

- ✅ すべてのコマーシャルリージョン
- ✅ GovCloud
- ✅ 中国リージョン

---

## まとめ

### AWS Config の進化

- 内部サービスリンクルール機能により、AWSサービスとの深い統合を実現
- 既存のAWS Config運用を維持しながら、セキュリティ機能を強化
- AWS Security Hub など他のAWSセキュリティサービスとのシームレスな連携

### 次のステップ

1. AWS Security Hub CSPM の内部サービスリンクルール機能を確認
2. 既存のAWS Config ルールとの共存を検証
3. セキュリティポスチャー監視の強化を検討

---

## 参考URL

- [元記事: AWS Config now supports internal service linked rules](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-config-supports-internal-service-linked-rules)
- [AWS Config ドキュメント](https://docs.aws.amazon.com/config/)
- [AWS Security Hub ドキュメント](https://docs.aws.amazon.com/securityhub/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**