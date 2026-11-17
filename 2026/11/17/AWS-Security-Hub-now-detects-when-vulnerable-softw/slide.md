---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security HubがEC2上で実行中の脆弱ソフトウェアを検出可能に

AWS Security Hub now detects when vulnerable software is running on Amazon EC2 instances

**What's New** | 2026-11-16T08:00:00

---

## 概要

- AWS Security Hubは実行中の脆弱なソフトウェアを検出し、重大度を高く評価することで、セキュリティチームが最大のリスクに集中できるようになりました。
- 本機能はEssentialsプランで追加料金なしでご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **Remediating exposures for EC2 instances - AWS Security Hub**
  [詳細](https://docs.aws.amazon.com/securityhub/latest/userguide/exposure-ec2-instance.html)

- **Unified Cloud Security Solution – AWS Security Hub Pricing**
  [詳細](https://aws.amazon.com/security-hub/pricing)

- **AWS Security Hub now generally available with near real-time analytics and risk prioritization**
  [詳細](h...

---

## 変更内容・新機能

- AWS Security Hubは、既知の脆弱性を持つソフトウェアがAmazon EC2インスタンス上で実行中であることを検出する新機能を提供いたします。
- 該当するエクスポージャー検出結果には新しい特性が追加され、より高い重大度評価が付与されます。
- GuardDuty Runtime MonitoringとInspector VM Scannerのデータを相関させて検出いたします。
- 本機能はSecurity Hub Essentialsプランで追加料金なしでご利用いただけます。
- 数千のインスタンスを管理するセキュリティチームが、実際のランタイムリスクに基づいて対応を優先するのに役立ちます。

---

## まとめ

- AWS Security Hub now detects when vulnerable software is running on Amazon EC2 instances について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-detects-vulnerable-software/)

### 関連情報

- [Remediating exposures for EC2 instances - AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/exposure-ec2-instance.html)
- [Unified Cloud Security Solution – AWS Security Hub Pricing](https://aws.amazon.com/security-hub/pricing)
- [AWS Security Hub now generally available with near real-time analytics and risk prioritization](https://aws.amazon.com/blogs/aws/aws-security-hub-now-generally-available-with-near-real-time-analytics-and-risk-prioritization)
- [AWS Security Hub Exposure Findings](https://www.youtube.com/watch?v=zhqn_P-FGqU)
- [Automate vulnerability management and remediation in AWS using Amazon Inspector and AWS Systems Manager](https://aws.amazon.com/blogs/mt/automate-vulnerability-management-and-remediation-in-aws-using-amazon-inspector-and-aws-systems-manager-part-1)