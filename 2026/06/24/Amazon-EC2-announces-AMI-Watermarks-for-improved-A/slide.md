---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EC2 がAMI ウォーターマークで強化されたAMIガバナンスを実現

Amazon EC2 announces AMI Watermarks for improved AMI governance

**What's New** | 2026-06-24T20:00:00

---

## 概要

- Amazon EC2のAMI Watermarks機能により、プライベートAMIにカスタム識別子を埋め込むことができ、リージョン間のコピーや派生AMI作成時にも自動的に継承されるため、AMIの出所追跡とガバナンスポリシーの実施が容易になります。
- この機能は、複数のAWSアカウント間でAMIを管理し、セキュリティとコンプライアンスを強化したい組織に特に適しており、すべてのリージョンで追加費用なく利用できます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EC2 announces AMI Watermarks for improved ...**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/06/ec2-image-watermarks-allowed-images)

- **12 AWS Cloud Security Best Practices for 2026: Cloud Security Guide | Qualys**
  [詳細](https://blog.qualys.com/product-tech/2026/04/09/1aws-cloud-security-best-practices-guide)

- **Amazon Machine Image (AMI) - Cloud Risks | Or...

---

## 変更内容・新機能

- Amazon EC2がAMI Watermarksという新機能を発表しました。これにより、プライベートAMIにカスタム識別子を埋め込むことができます。

- AWS Management Console、AWS CLI、またはSDKを使用してウォーターマークを追加できます。

---

## まとめ

- Amazon EC2 announces AMI Watermarks for improved AMI governance について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/ec2-image-watermarks-allowed-images)

### 関連情報

- [Amazon EC2 announces AMI Watermarks for improved ...](https://aws.amazon.com/about-aws/whats-new/2026/06/ec2-image-watermarks-allowed-images)
- [12 AWS Cloud Security Best Practices for 2026: Cloud Security Guide | Qualys](https://blog.qualys.com/product-tech/2026/04/09/1aws-cloud-security-best-practices-guide)
- [Amazon Machine Image (AMI) - Cloud Risks | Orca Security](https://orca.security/resources/blog/externally-exposed-ami)