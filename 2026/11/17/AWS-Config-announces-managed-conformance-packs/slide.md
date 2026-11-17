---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Configがマネージドコンフォーマンスパックを発表

AWS Config announces managed conformance packs

**What's New** | 2026-11-17T17:49:00

---

## 概要

- AWS Configのマネージドコンフォーマンスパックは、コンプライアンスフレームワークへの準拠を自動的に評価・維持します。
- AWSがパックを構築・維持するため、手動でのルール更新が不要になります。

---

## 前提・背景

### 関連する最近の動向

- **Conformance Packs for AWS Config - AWS Config**
  [詳細](https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html)

- **AWS Config announces managed conformance packs - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-config-managed-conformance-packs)

- **Deploy AWS Config Rules and Conformance Packs using a delegated admin**
  [詳細](https...

---

## 変更内容・新機能

AWS Configはマネージドコンフォーマンスパックを新たに提供します。AWSが特定のコンプライアンスおよびガバナンスフレームワーク向けにパックを構築・維持します。デプロイ時にフレームワークを選択するとリソースが評価され、フレームワークやルールの変更に応じて自動更新されます。PCI DSS v4、SOC 2、NIST SP 800-53 Rev. 5、ISO/IEC 27001:2022、CIS Controls、EU AI Act、NIST AI RMF 1.0などのフレームワークに対応。テンプレートを自分で更新したくないお客様や、複数リージョンで一貫した評価を行いたいお客様に適しています。中東（UAE）および中東（バーレーン）を除くすべてのAWS商用リージョンで利用可能です。

---

## まとめ

- AWS Config announces managed conformance packs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-config-managed-conformance-packs)

### 関連情報

- [Conformance Packs for AWS Config - AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html)
- [AWS Config announces managed conformance packs - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-config-managed-conformance-packs)
- [Deploy AWS Config Rules and Conformance Packs using a delegated admin](https://aws.amazon.com/blogs/mt/deploy-aws-config-rules-and-conformance-packs-using-a-delegated-admin)
- [Automating AWS Config Conformance Pack Score Across Multiple Accounts](https://aws.plainenglish.io/automating-aws-config-conformance-pack-score-across-multiple-accounts-608b8829723a)