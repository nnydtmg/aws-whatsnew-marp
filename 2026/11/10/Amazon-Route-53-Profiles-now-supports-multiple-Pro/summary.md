# Amazon Route 53 ProfilesがVPCあたり複数プロファイルの関連付けをサポート

Amazon Route 53 Profiles now supports multiple Profiles per VPC

**カテゴリ:** What's New
**公開日:** 2026-11-09T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-profiles-multiple-per-vpc/)

このページでは、AWS What's Newで発表された「Amazon Route 53 Profiles now supports multiple Profiles per VPC」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Route 53 Profilesは、1つのVPCに複数のプロファイルを優先度付きで関連付けられるようになりました。チームごとの設定分離と最小権限管理が可能になります。

## このアップデートで何が変わったか

- 新機能は、Amazon Route 53 Profilesが1つのVPCに複数のプロファイルを関連付けられるようになったことです。
- 各プロファイルに優先度を設定でき、Route 53は番号が小さいものから順に評価します。
- 共有設定とチーム固有の設定を別々のプロファイルで管理できます。
- 本更新は、設定を分担するセキュリティチームやインフラ・ネットワーク管理チームに適しています。
- 最小権限のIAM許可と組み合わせ、セキュリティ体制を強化したい組織にも有用です。
- 以前は1つのVPCに1つのProfileしか関連付けられませんでした。
- 2026年3月にリリースされたgranular IAM権限と組み合わせることで、各チームが自分のProfileを最小権限で所有・管理できます。
- この機能はRoute 53 Profilesが利用可能なすべてのAWSリージョンで利用できます。
- 各Profile-VPC関連付けは標準のRoute 53 Profiles価格で課金されます。

## 詳細

- 新機能は、Amazon Route 53 Profilesが1つのVPCに複数のプロファイルを関連付けられるようになったことです。
- 各プロファイルに優先度を設定でき、Route 53は番号が小さいものから順に評価します。
- 共有設定とチーム固有の設定を別々のプロファイルで管理できます。
- 本更新は、設定を分担するセキュリティチームやインフラ・ネットワーク管理チームに適しています。
- 最小権限のIAM許可と組み合わせ、セキュリティ体制を強化したい組織にも有用です。
- 以前は1つのVPCに1つのProfileしか関連付けられませんでした。
- 2026年3月にリリースされたgranular IAM権限と組み合わせることで、各チームが自分のProfileを最小権限で所有・管理できます。
- この機能はRoute 53 Profilesが利用可能なすべてのAWSリージョンで利用できます。
- 各Profile-VPC関連付けは標準のRoute 53 Profiles価格で課金されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-profiles-multiple-per-vpc/)