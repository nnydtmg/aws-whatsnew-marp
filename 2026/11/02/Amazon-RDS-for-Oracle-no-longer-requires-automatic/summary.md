# Amazon RDS for OracleでJVM・Spatial等の自動マイナーアップグレードが任意に

Amazon RDS for Oracle no longer requires automatic minor version upgrades for JVM, Spatial, Locator, and OLAP options

**カテゴリ:** What's New
**公開日:** 2026-10-30T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/oracle-jvm-spatial-locator-olap-options-amvu-optional/)

このページでは、AWS What's Newで発表された「Amazon RDS for Oracle no longer requires automatic minor version upgrades for JVM, Spatial, Locator, and OLAP options」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon RDS for Oracleでは、JVM、Spatial、Locator、またはOLAPオプション利用時でも自動マイナーバージョンアップグレードをオフにできるようになりました。この変更は、アップグレード適用時期を自ら管理したいお客様に適しております。

## このアップデートで何が変わったか

新機能は、Amazon RDS for Oracleにおいて、JVM、Spatial、Locator、またはOLAPオプションを使用する新規および既存のDBインスタンスで自動マイナーバージョンアップグレードをオフにできるようになったことです。この更新は、これらのオプションを使用するDBインスタンスへのマイナーバージョンアップグレードの適用時期を自ら決定したいお客様に適しております。

## 対象ユーザー

Amazon Relational Database Service (Amazon RDS) for Oracle now lets you turn off automatic minor version upgrades on new and existing DB instances that use the JVM, Spatial, Locator, or OLAP option. Previously, these options required automatic minor version upgrades to be enabled. With this change, 

## 詳細

Amazon Relational Database Service (Amazon RDS) for Oracle now lets you turn off automatic minor version upgrades on new and existing DB instances that use the JVM, Spatial, Locator, or OLAP option. Previously, these options required automatic minor version upgrades to be enabled. With this change, you decide when to apply minor version upgrades to DB instances using these options. If you turn off automatic minor version upgrades, we recommend that you apply new minor versions regularly so your DB instances keep the latest Oracle security fixes. To keep automatic minor version upgrades turned on and still control the order in which your environments are upgraded, you can use AWS Organizations upgrade rollout policy. This change is available in all commercial AWS Regions and the AWS GovCloud (US) Regions where Amazon RDS for Oracle is available.

新機能は、Amazon RDS for Oracleにおいて、JVM、Spatial、Locator、またはOLAPオプションを使用する新規および既存のDBインスタンスで自動マイナーバージョンアップグレードをオフにできるようになったことです。この更新は、これらのオプションを使用するDBインスタンスへのマイナーバージョンアップグレードの適用時期を自ら決定したいお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/oracle-jvm-spatial-locator-olap-options-amvu-optional/)