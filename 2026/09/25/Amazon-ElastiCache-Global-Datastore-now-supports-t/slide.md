---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ElastiCache Global Datastoreがタグ付けとタグベースアクセス制御に対応

Amazon ElastiCache Global Datastore now supports tagging and tag-based access control

**What's New** | 2026-09-24T07:00:00

---

## 概要

- Amazon ElastiCache Global Datastoreがタグ付けとタグベースのアクセス制御をサポートするようになり、フリート全体で一貫した権限管理とコスト配分が可能になりました。
- 追加料金はなく、対象リージョンですぐにご利用いただけます。

---

## 前提・背景

### これまでの課題

Amazon ElastiCacheがGlobal Datastoreに対するリソースタグ付けおよびタグベースのアクセス制御（TBAC）をサポートしました。従来、ElastiCacheはGlobal Datastoreを除くすべてのリソースでタグ付けをサポートしていましたが、これによりElastiCacheフリート全体で一貫した権限管理とコスト配分モデルを適用できませんでした。本アップデートにより、AddTagsToResource、RemoveTagsFromResource、ListTags

---

### 関連する最近の動向

- **Amazon ElastiCache Global Datastore now supports tagging and tag-based access control - AWS**
  [詳細](https://aw...

---

## 変更内容・新機能

Amazon ElastiCacheがGlobal Datastoreに対するリソースタグ付けおよびタグベースのアクセス制御（TBAC）をサポートしました。従来、ElastiCacheはGlobal Datastoreを除くすべてのリソースでタグ付けをサポートしていましたが、これによりElastiCacheフリート全体で一貫した権限管理とコスト配分モデルを適用できませんでした。本アップデートにより、AddTagsToResource、RemoveTagsFromResource、ListTagsForResourceをGlobal Datastoreに対して使用でき、IAMポリシーやSCPでタグ条件を参照して、個別リソースを列挙せずにタグ属性に基づく権限付与が可能になります。タグ変更はGlobal Datastoreがまたがるすべてのリージョンへ自動伝播するため、リージョンごとの操作なしでアクセス制御とコスト配分ポリシーの一貫性を維持できます。追加料金はなく、Global Datastoreの作成・管理方法に変更はありません。ElastiCache Global Datastoreが利

---

## まとめ

- Amazon ElastiCache Global Datastore now supports tagging and tag-based access control について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-elasticache-global-datastore-tagging/)

### 関連情報

- [Amazon ElastiCache Global Datastore now supports tagging and tag-based access control - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-elasticache-global-datastore-tagging/)
- [Amazon ElastiCache now supports Tag-Based Access Control](https://www.amazonaws.cn/en/new/2021/amazon-elasticache-supports-tag-based-access-control)
- [Valkey-, Memcached-, and Redis OSS-Compatible Cache – Amazon ElastiCache Features – AWS](https://aws.amazon.com/elasticache/features/global-datastore)