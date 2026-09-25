# Amazon ElastiCache Global Datastoreがタグ付けとタグベースアクセス制御に対応

Amazon ElastiCache Global Datastore now supports tagging and tag-based access control

**カテゴリ:** What's New
**公開日:** 2026-09-24T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-elasticache-global-datastore-tagging/)

このページでは、AWS What's Newで発表された「Amazon ElastiCache Global Datastore now supports tagging and tag-based access control」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ElastiCache Global Datastoreがタグ付けとタグベースのアクセス制御をサポートするようになり、フリート全体で一貫した権限管理とコスト配分が可能になりました。追加料金はなく、対象リージョンですぐにご利用いただけます。

## このアップデートで何が変わったか

Amazon ElastiCacheがGlobal Datastoreに対するリソースタグ付けおよびタグベースのアクセス制御（TBAC）をサポートしました。従来、ElastiCacheはGlobal Datastoreを除くすべてのリソースでタグ付けをサポートしていましたが、これによりElastiCacheフリート全体で一貫した権限管理とコスト配分モデルを適用できませんでした。本アップデートにより、AddTagsToResource、RemoveTagsFromResource、ListTagsForResourceをGlobal Datastoreに対して使用でき、IAMポリシーやSCPでタグ条件を参照して、個別リソースを列挙せずにタグ属性に基づく権限付与が可能になります。タグ変更はGlobal Datastoreがまたがるすべてのリージョンへ自動伝播するため、リージョンごとの操作なしでアクセス制御とコスト配分ポリシーの一貫性を維持できます。追加料金はなく、Global Datastoreの作成・管理方法に変更はありません。ElastiCache Global Datastoreが利

## 対象ユーザー

Amazon ElastiCacheがGlobal Datastoreに対するリソースタグ付けおよびタグベースのアクセス制御（TBAC）をサポートしました。従来、ElastiCacheはGlobal Datastoreを除くすべてのリソースでタグ付けをサポートしていましたが、これによりElastiCacheフリート全体で一貫した権限管理とコスト配分モデルを適用できませんでした。本アップデートにより、AddTagsToResource、RemoveTagsFromResource、ListTagsForResourceをGlobal Datastoreに対して使用でき、IAMポリシーやSCPでタ

## 詳細

Amazon ElastiCacheがGlobal Datastoreに対するリソースタグ付けおよびタグベースのアクセス制御（TBAC）をサポートしました。従来、ElastiCacheはGlobal Datastoreを除くすべてのリソースでタグ付けをサポートしていましたが、これによりElastiCacheフリート全体で一貫した権限管理とコスト配分モデルを適用できませんでした。本アップデートにより、AddTagsToResource、RemoveTagsFromResource、ListTagsForResourceをGlobal Datastoreに対して使用でき、IAMポリシーやSCPでタグ条件を参照して、個別リソースを列挙せずにタグ属性に基づく権限付与が可能になります。タグ変更はGlobal Datastoreがまたがるすべてのリージョンへ自動伝播するため、リージョンごとの操作なしでアクセス制御とコスト配分ポリシーの一貫性を維持できます。追加料金はなく、Global Datastoreの作成・管理方法に変更はありません。ElastiCache Global Datastoreが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-elasticache-global-datastore-tagging/)