---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon RDS for OracleでJVM・Spatial等の自動マイナーアップグレードが任意に

Amazon RDS for Oracle no longer requires automatic minor version upgrades for JVM, Spatial, Locator, and OLAP options

**What's New** | 2026-10-30T17:00:00

---

## 概要

- Amazon RDS for Oracleでは、JVM、Spatial、Locator、またはOLAPオプション利用時でも自動マイナーバージョンアップグレードをオフにできるようになりました。
- この変更は、アップグレード適用時期を自ら管理したいお客様に適しております。

---

## 前提・背景

### これまでの課題

Amazon Relational Database Service (Amazon RDS) for Oracle now lets you turn off automatic minor version upgrades on new and existing DB instances that use the JVM, Spatial, Locator, or OLAP option. Previously, these options required automatic minor 

---

### 関連する最近の動向

- **Amazon RDS for Oracle no longer requires automatic minor version upgrades for JVM, Spatial, Locator, and OLAP o...

---

## 変更内容・新機能

新機能は、Amazon RDS for Oracleにおいて、JVM、Spatial、Locator、またはOLAPオプションを使用する新規および既存のDBインスタンスで自動マイナーバージョンアップグレードをオフにできるようになったことです。この更新は、これらのオプションを使用するDBインスタンスへのマイナーバージョンアップグレードの適用時期を自ら決定したいお客様に適しております。

---

## まとめ

- Amazon RDS for Oracle no longer requires automatic minor version upgrades for JVM, Spatial, Locator, and OLAP options について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/oracle-jvm-spatial-locator-olap-options-amvu-optional/)

### 関連情報

- [Amazon RDS for Oracle no longer requires automatic minor version upgrades for JVM, Spatial, Locator, and OLAP options - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/oracle-jvm-spatial-locator-olap-options-amvu-optional)
- [Oracle Spatial - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Options.Spatial.html)
- [Oracle minor version upgrades - Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.Minor.html)
- [Amazon RDS for Oracle now supports January 2026 Release Update and Spatial Patch Bundle - AWS](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-rd-for-oracle-jan-release-update-spatial-patch-bundle)