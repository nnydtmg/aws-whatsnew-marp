---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Cloud WANがFlow Logsに対応、グローバルネットワークのIPトラフィックを一元可視化

AWS Cloud WAN now supports Flow Logs

**What's New** | 2026-11-11T20:05:00

---

## 概要

- AWS Cloud WANがフローログに対応し、コアネットワーク全体のIPトラフィックを一元的に可視化できるようになりました。
- 本機能はグローバルネットワークの運用を担当されるネットワーク管理者の皆様に有用です。

---

## 前提・背景

### これまでの課題

- AWS Cloud WANがフローログをサポートするようになり、グローバルネットワーク全体のIPトラフィックを中央で可視化できます。
- フローログはコアネットワーク全体、単一のコアネットワークエッジ、または個別のアタッチメントに対して有効化でき、Amazon CloudWatch Logs、Amazon S3、またはAmazon Data Firehoseに公開できます。
- 本アップデートは、複数のVPCやアカウント、リージョンにまたがるトラフィックを統合して確認したいネットワーク管理者

---

### 関連する最近の動向

- **AWS Cloud WAN monitoring via Cloudwatch | AWS re:Post**
  [詳細](https://repost.aws/questions/QUtIRu9hdURw2be6BWw...

---

## 変更内容・新機能

- AWS Cloud WANがフローログをサポートするようになり、グローバルネットワーク全体のIPトラフィックを中央で可視化できます。
- フローログはコアネットワーク全体、単一のコアネットワークエッジ、または個別のアタッチメントに対して有効化でき、Amazon CloudWatch Logs、Amazon S3、またはAmazon Data Firehoseに公開できます。
- 本アップデートは、複数のVPCやアカウント、リージョンにまたがるトラフィックを統合して確認したいネットワーク管理者およびコアネットワーク所有者に適しています。
- これまでネットワーク管理者は、複数のVPC・アカウント・リージョンからVPC Flow Logsを統合してグローバルネットワークのトラフィックを把握する必要があり、他チームにログアクセスを依存することも多かった。
- Cloud WAN Flow Logsは、VPC間、リージョン間、AWS Direct Connect / AWS Site-to-Site VPN / SD-WAN経由のオンプレミス経由トラフィックを一元的に可視化します。
- フ

---

## ユースケース

- AWS Cloud WANがフローログをサポートするようになり、グローバルネットワーク全体のIPトラフィックを中央で可視化できます。
- フローログはコアネットワーク全体、単一のコアネットワークエッジ、または個別のアタッチメントに対して有効化でき、Amazon CloudWatch Logs、Amazon S3、またはAmazon Data Firehoseに公開できます。
- 本アップデートは、複数のVPCやアカウント、リージョンにまたがるトラフィックを統合して確認したいネットワーク管理者およびコアネットワーク所有者に適しています。
- これまでネットワーク管理者は、複数のVPC・アカウ

---

## まとめ

- AWS Cloud WAN now supports Flow Logs について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cloud-wan-flow-logs/)

### 関連情報

- [AWS Cloud WAN monitoring via Cloudwatch | AWS re:Post](https://repost.aws/questions/QUtIRu9hdURw2be6BWwX3Kow/aws-cloud-wan-monitoring-via-cloudwatch)
- [AWS Cloud WAN events and metrics - AWS Network Manager](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-events-metrics.html)
- [AWS Cloud WAN Flow Logs user guide](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cwan-flow-logs)
- [What VPC Flow Logs actually cost (2026) | Akal Cloud](https://akalcloud.ai/blog/vpc-flow-logs-cost)
- [What are VPC Flow Logs? | Kentik](https://www.kentik.com/kentipedia/what-are-vpc-flow-logs)