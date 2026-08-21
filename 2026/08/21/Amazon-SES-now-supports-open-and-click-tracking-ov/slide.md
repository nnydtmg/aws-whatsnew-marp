---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon SES がメール開封・クリック追跡をリクエスト単位で制御可能に

Amazon SES now supports open and click tracking override parameters

**What's New** | 2026-08-21T07:00:00

---

## 概要

- Amazon SESの新機能により、SendEmailおよびSendBulkEmail APIでリクエストごとに開封追跡とクリック追跡を直接制御できるようになり、複数の設定セット管理の必要性が軽減されました。
- この機能は、GDPR等のデータ保護要件に対応する必要があり、受信者の同意選択を尊重する必要があるユーザーに特に有用です。

---

## 前提・背景

### これまでの課題

- 従来は、追跡動作を制御するために、開封追跡とクリック追跡の設定の組み合わせごとに個別の設定セットを維持する必要がありました。

---

### 関連する最近の動向

- **Amazon SES Email Marketing: The Complete Guide (2026)**
  [詳細](https://www.mailblast.io/blog/ses/amazon-ses-email-marketing)

- **Amazon SES Pricing: Full Cost Breakdown (2026)**
  [詳細](https://www.emercury.net/blog/email-marketing-tips/amazon-ses-pricing)

- **Amazon SES now helps identify autom...

---

## 変更内容・新機能

- この新機能により、送信リクエスト内で追跡設定を直接指定できるようになり、設定の複雑性が軽減されます。

- 追加コストなしでこの機能を使用できます。

---

## まとめ

- Amazon SES now supports open and click tracking override parameters について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ses-adds-open-click-tracking-override/)

### 関連情報

- [Amazon SES Email Marketing: The Complete Guide (2026)](https://www.mailblast.io/blog/ses/amazon-ses-email-marketing)
- [Amazon SES Pricing: Full Cost Breakdown (2026)](https://www.emercury.net/blog/email-marketing-tips/amazon-ses-pricing)
- [Amazon SES now helps identify automated open and click events in event notifications](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ses-automated-email-interactions)