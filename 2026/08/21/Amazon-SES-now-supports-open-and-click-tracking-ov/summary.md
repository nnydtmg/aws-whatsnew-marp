# Amazon SES がメール開封・クリック追跡をリクエスト単位で制御可能に

Amazon SES now supports open and click tracking override parameters

**カテゴリ:** What's New
**公開日:** 2026-08-21T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ses-adds-open-click-tracking-override/)

このページでは、AWS What's Newで発表された「Amazon SES now supports open and click tracking override parameters」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon SESの新機能により、SendEmailおよびSendBulkEmail APIでリクエストごとに開封追跡とクリック追跡を直接制御できるようになり、複数の設定セット管理の必要性が軽減されました。この機能は、GDPR等のデータ保護要件に対応する必要があり、受信者の同意選択を尊重する必要があるユーザーに特に有用です。

## このアップデートで何が変わったか

- この新機能により、送信リクエスト内で追跡設定を直接指定できるようになり、設定の複雑性が軽減されます。

- 追加コストなしでこの機能を使用できます。

## 対象ユーザー

- この機能は、GDPR やCNIL ガイダンスなどのデータ保護要件を満たすために、受信者レベルの同意選択を尊重する必要があるユーザーに有用です。

## 詳細

- Amazon SESは、SendEmailおよびSendBulkEmail APIにおいて、開封追跡とクリック追跡のオーバーライドパラメータをサポートするようになりました。

- 従来は、追跡動作を制御するために、開封追跡とクリック追跡の設定の組み合わせごとに個別の設定セットを維持する必要がありました。

- この新機能により、送信リクエスト内で追跡設定を直接指定できるようになり、設定の複雑性が軽減されます。

- トラッキングオーバーライドはリクエストごとに適用され、関連する設定セットで定義された追跡動作よりも優先されます。

- この機能は、GDPR やCNIL ガイダンスなどのデータ保護要件を満たすために、受信者レベルの同意選択を尊重する必要があるユーザーに有用です。

- 追加コストなしでこの機能を使用できます。

- この機能は、Amazon SES が利用可能なすべての AWS リージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ses-adds-open-click-tracking-override/)