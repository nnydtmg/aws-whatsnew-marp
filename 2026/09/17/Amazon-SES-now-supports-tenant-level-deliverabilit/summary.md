# Amazon SES テナントレベルの配信可能性インサイトに対応

Amazon SES now supports tenant-level deliverability insights

**カテゴリ:** What's New
**公開日:** 2026-09-17
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ses-vdm-tenants/)

このページでは、AWS What's Newで発表された「Amazon SES now supports tenant-level deliverability insights」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon SESのVDMがテナントレベルの配信インサイトに対応し、テナントごとの配信状況を監視できるようになりました。顧客や事業部門ごとにメール送信を分離している送信者の皆様に適したアップデートでございます。

## このアップデートで何が変わったか

Amazon SESのVirtual Deliverability Managerがテナントレベルの配信可能性インサイトを新たにサポートいたします。テナントをご利用でVDMを有効にしたお客様は、各テナントの配信状況を監視できるようになります。ダッシュボードにテナントビューが追加され、送信量、配信、バウンス、苦情、開封、クリックなどのメトリクスをご確認いただけます。詳細ページではメールボックスプロバイダー別および関連アイデンティティと設定セット別にメトリクスを表示いたします。送信メッセージの検索・エクスポートやBatchGetMetricData APIのTENANT_NAMEディメンションによるクエリが可能です。本アップデートは顧客、事業部門、アプリケーション間でメール送信を分離している送信者の皆様に適しております。

## 詳細

Amazon SESのVirtual Deliverability Managerがテナントレベルの配信可能性インサイトを新たにサポートいたします。テナントをご利用でVDMを有効にしたお客様は、各テナントの配信状況を監視できるようになります。ダッシュボードにテナントビューが追加され、送信量、配信、バウンス、苦情、開封、クリックなどのメトリクスをご確認いただけます。詳細ページではメールボックスプロバイダー別および関連アイデンティティと設定セット別にメトリクスを表示いたします。送信メッセージの検索・エクスポートやBatchGetMetricData APIのTENANT_NAMEディメンションによるクエリが可能です。本アップデートは顧客、事業部門、アプリケーション間でメール送信を分離している送信者の皆様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ses-vdm-tenants/)