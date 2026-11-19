---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Aurora DSQLが大陸間マルチリージョンピアリングをサポート

Amazon Aurora DSQL now supports multi-Region peering across continents

**What's New** | 2026-11-19T15:56:00

---

## 概要

- Amazon Aurora DSQLは、異なる大陸間でのマルチリージョンクラスター作成を新たにサポートし、強整合性を保ちつつ2つの大陸で読み書きが可能になりました。
- 各大陸のユーザー近傍への配置や広い障害ドメイン分離を求めるお客様に適した更新です。

---

## 前提・背景

### これまでの課題

Amazon Aurora DSQLが大陸をまたぐマルチリージョンピアリングをサポートしました。これまでは同一の地理的リージョンセット内に限られていましたが、米国東部（バージニア北部）と欧州（アイルランド）など異なる大陸のリージョンでマルチリージョンクラスターを作成できるようになりました。2つの大陸上のアプリケーションが、1つの強整合性データベースに対して読み書きできます。リージョンが利用できなくなっても、コミット済みの書き込みは保持され、もう一方のリージョンで読み書きを継続できます。ピアリージ

---

### 関連する最近の動向

- **Amazon Aurora DSQL now supports multi-Region peering across continents**
  [詳細](https://aws.amazon.com/about-aw...

---

## 変更内容・新機能

Amazon Aurora DSQLは、異なる大陸間でのマルチリージョンクラスター作成を新たにサポートし、強整合性を保ちつつ2つの大陸で読み書きが可能になりました。各大陸のユーザー近傍への配置や広い障害ドメイン分離を求めるお客様に適した更新です。

---

## まとめ

- Amazon Aurora DSQL now supports multi-Region peering across continents について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-dsql-intercontinental-multi-region-clusters/)

### 関連情報

- [Amazon Aurora DSQL now supports multi-Region peering across continents](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-dsql-intercontinental-multi-region-clusters/)
- [What is Amazon Aurora DSQL?](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/what-is-aurora-dsql.html)
- [Amazon Aurora DSQL adds multi-Region cluster support in four more Regions](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-aurora-dsql-adds-multi-region-clusters-four-more-regions)
- [Release notes for Aurora DSQL](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/release-notes.html)