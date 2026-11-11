---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Network Firewall が次世代ファイアウォールポリシーを発表

AWS Network Firewall launches next-generation firewall policy

**What's New** | 2026-11-10T08:00:00

---

## 概要

- AWS Network Firewall の次世代ファイアウォール（NGFW）ポリシーは、セキュリティチームにシンプルなポリシー構造と増加したルール容量を提供します。
- ファイアウォールと IPS の保護を層別にすることでセキュリティ姿勢を強化し、ポリシー管理も容易になります。

---

## 前提・背景

### 関連する最近の動向

- **AWS Network Firewall launches next-generation firewall policy - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-launches-ngfw-policy/)

- **Next Generation policies in AWS Network Firewall**
  [詳細](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policies-v2.html)

- **AWS Network Firewall firewall policy versions**
  [...

---

## 変更内容・新機能

AWS は AWS Network Firewall に次世代ファイアウォール（NGFW）ポリシーを発表しました。これはセキュリティチームによりシンプルなポリシー構造と増加したルール容量を提供する新しいポリシーモデルです。AWS Network Firewall は Amazon VPC をアクセス制御と脅威検知で保護するマネージドネットワークセキュリティサービスです。

新しいポリシーモデルは、ファイアウォールと IPS の保護を組み合わせるのではなく層別にすることでセキュリティ姿勢を強化し、ポリシー管理も容易にします。ファイアウォールルールはデフォルト拒否のアクセス制御を強制し、例えば承認されたドメインへのトラフィックのみを許可します。IPS ルールでは、AWS や AWS Marketplace パートナーのマネージドルールグループを使用でき、新しい脅威の発現に応じて自動更新されます。カスタム IPS ルールグループも作成できます。

---

## ユースケース

新しいポリシーモデルは、ファイアウォールと IPS の保護を組み合わせるのではなく層別にすることでセキュリティ姿勢を強化し、ポリシー管理も容易にします。ファイアウォールルールはデフォルト拒否のアクセス制御を強制し、例えば承認されたドメインへのトラフィックのみを許可します。IPS ルールでは、AWS や AWS Marketplace パートナーのマネージドルールグループを使用でき、新しい脅威の発現に応じて自動更新されます。カスタム IPS ルールグループも作成できます。

---

## まとめ

- AWS Network Firewall launches next-generation firewall policy について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-launches-ngfw-policy/)

### 関連情報

- [AWS Network Firewall launches next-generation firewall policy - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-launches-ngfw-policy/)
- [Next Generation policies in AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policies-v2.html)
- [AWS Network Firewall firewall policy versions](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policy-versions.html)
- [The firewall section and the IPS section](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policy-v2-sections.html)
- [Embedded rules in a Next Generation policy](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policy-v2-embedded-rules.html)