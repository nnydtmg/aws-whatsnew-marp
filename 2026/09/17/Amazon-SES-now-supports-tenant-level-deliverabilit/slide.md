---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon SES テナントレベルの配信可能性インサイトに対応

Amazon SES now supports tenant-level deliverability insights

**What's New** | 2026-09-17

---

## 概要

- Amazon SESのVDMがテナントレベルの配信インサイトに対応し、テナントごとの配信状況を監視できるようになりました。
- 顧客や事業部門ごとにメール送信を分離している送信者の皆様に適したアップデートでございます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon SES Pricing: Full Cost Breakdown (2026)**
  [詳細](https://www.emercury.net/blog/email-marketing-tips/amazon-ses-pricing)

- **Virtual Deliverability Manager for Amazon SES**
  [詳細](https://docs.aws.amazon.com/ses/latest/dg/vdm.html)

- **Improving email deliverability with new virtual deliverability manager features**
  [詳細](https://aws.amazon.com/blogs/messaging-and-targe...

---

## 変更内容・新機能

Amazon SESのVirtual Deliverability Managerがテナントレベルの配信可能性インサイトを新たにサポートいたします。テナントをご利用でVDMを有効にしたお客様は、各テナントの配信状況を監視できるようになります。ダッシュボードにテナントビューが追加され、送信量、配信、バウンス、苦情、開封、クリックなどのメトリクスをご確認いただけます。詳細ページではメールボックスプロバイダー別および関連アイデンティティと設定セット別にメトリクスを表示いたします。送信メッセージの検索・エクスポートやBatchGetMetricData APIのTENANT_NAMEディメンションによるクエリが可能です。本アップデートは顧客、事業部門、アプリケーション間でメール送信を分離している送信者の皆様に適しております。

---

## まとめ

- Amazon SES now supports tenant-level deliverability insights について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ses-vdm-tenants/)

### 関連情報

- [Amazon SES Pricing: Full Cost Breakdown (2026)](https://www.emercury.net/blog/email-marketing-tips/amazon-ses-pricing)
- [Virtual Deliverability Manager for Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/vdm.html)
- [Improving email deliverability with new virtual deliverability manager features](https://aws.amazon.com/blogs/messaging-and-targeting/improving-email-deliverability-with-new-virtual-deliverability-manager-features)