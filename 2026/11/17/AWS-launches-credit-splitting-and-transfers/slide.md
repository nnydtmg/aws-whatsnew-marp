---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWSがクレジット分割と転送機能を発表

AWS launches credit splitting and transfers

**What's New** | 2026-11-17T08:00:00

---

## 概要

- AWSの新機能であるクレジット分割と転送は、FinOpsチームの作業負担を軽減し、クレジットの柔軟な管理を実現します。

---

## 前提・背景

### これまでの課題

AWSはクレジットの分割と転送を新たにサポートしました。お客様は任意のAWSクレジットを複数の小さなクレジットに分割し、ペイヤーアカウント内のリンクされたアカウントへ転送できます。これまでAWSは、所有者アカウントからクレジットを適用し、余分を他のアカウントの利用量に応じて共有していたため、大規模なクレジットを特定のチームや事業単位に精度よく割り当てることが難しい状況でした。FinOpsチームは、金額、割合、または均等分割でクレジットを分割し、各部分を受譲したチームへ転送できます。クレジット分割

---

### 関連する最近の動向

- **AWS launches credit splitting and transfers - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/a...

---

## 変更内容・新機能

AWSはクレジットの分割と転送を新たにサポートしました。お客様は任意のAWSクレジットを複数の小さなクレジットに分割し、ペイヤーアカウント内のリンクされたアカウントへ転送できます。これまでAWSは、所有者アカウントからクレジットを適用し、余分を他のアカウントの利用量に応じて共有していたため、大規模なクレジットを特定のチームや事業単位に精度よく割り当てることが難しい状況でした。FinOpsチームは、金額、割合、または均等分割でクレジットを分割し、各部分を受譲したチームへ転送できます。クレジット分割と転送により、FinOpsチームの毎月の手動チャージバック作業を削減し、チームや事業単位ごとの予測可能なクレジット予算を提供します。分割後の各クレジットは元の有効期限とサービス適用条件を継承し、共有設定もデフォルトで維持されるため未使用残高は他の適格アカウントへ流れます。転送先アカウントは転送されたクレジットを優先的に消費できます。クレジットレベルの共有やクレジット一時停止など既存機能と組み合わせて使用可能です。任意のクレジット種類をAWS Billing Console、CLI、APIから分割

---

## 効果・メリット

- AWSはクレジットの分割と転送を新たにサポートしました。
- お客様は任意のAWSクレジットを複数の小さなクレジットに分割し、ペイヤーアカウント内のリンクされたアカウントへ転送できます。
- これまでAWSは、所有者アカウントからクレジットを適用し、余分を他のアカウントの利用量に応じて共有していたため、大規模なクレジットを特定のチームや事業単位に精度よく割り当てることが難しい状況でした。
- FinOpsチームは、金額、割合、または均等分割でクレジットを分割し、各部分を受譲したチームへ転送できます。
- クレジット分割と転送により、FinOpsチームの毎月の手動チャージバック作業を削減し、チームや事業単位ごとの予測可能なクレジット予算を提供します。

---

## まとめ

- AWS launches credit splitting and transfers について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-credit-splitting-transfers/)

### 関連情報

- [AWS launches credit splitting and transfers - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-credit-splitting-transfers/)
- [Credit splitting and transfers - AWS Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/credits-split-transfer.html)
- [Applying AWS credits - AWS Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilling-credits.html)
- [AWS Cloud Financial Management: Key 2025 re:Invent Launches to Transform Your FinOps Practices](https://aws.amazon.com/blogs/aws-cloud-financial-management/aws-cloud-financial-management-key-reinvent-2025-launches-to-transform-your-finops-practice)