---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon AuroraとAmazon RDSがOn-Demand Capacity Reservationに対応

Amazon Aurora and Amazon RDS now support On-Demand Capacity Reservation

**What's New** | 2026-10-21T16:00:00

---

## 概要

- Amazon AuroraおよびAmazon RDSでオンデマンドキャパシティ予約が利用可能になり、ビジネスクリティカルなイベント向けにDBインスタンス容量を確保できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Aurora and Amazon RDS now support On-Demand Capacity Reservations - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-aurora-rds-on-demand-capacity-reservations)

- **Amazon RDS On-Demand Capacity Reservations - Amazon Relational Database Service**
  [詳細](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/capacity-reservations.html)

---

## 変更内容・新機能

Amazon AuroraおよびAmazon RDSにおいて、オンデマンドキャパシティ予約が新たにサポートされるようになりました。お客様は、1つ以上のアベイラビリティーゾーンでDBインスタンスのコンピューティングキャパシティを必要な期間予約できます。本機能により、容量不足によるDBインスタンスの作成、復元、コンピュートスケール、および起動操作の失敗を防ぐことができます。本アップデートは、移行、製品発売、季節的なピーク、高可用性デプロイメント、災害復旧などのビジネスクリティカルなイベントで特定のDBインスタンス容量の確保が必要なワークロードに適しています。DBインスタンスクラス、エンジン、アベイラビリティーゾーン、AZごとの予約容量を選択すると、RDSがその容量を確保します。2つ以上のAZで容量を予約することでMulti-AZデプロイメントにも対応できます。即時利用の予約はコミットメント不要でいつでもキャンセル可能、または5〜120日後に開始する予約を最小コミットメント付きでスケジュールできます。予約中はDBインスタンスの稼働有無にかかわらずオンデマンド料金で課金されます。既存のRese

---

## まとめ

- Amazon Aurora and Amazon RDS now support On-Demand Capacity Reservation について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-aurora-rds-on-demand-capacity-reservations/)

### 関連情報

- [Amazon Aurora and Amazon RDS now support On-Demand Capacity Reservations - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-aurora-rds-on-demand-capacity-reservations)
- [Amazon RDS On-Demand Capacity Reservations - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/capacity-reservations.html)