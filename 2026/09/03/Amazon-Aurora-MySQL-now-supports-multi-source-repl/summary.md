# Amazon Aurora MySQL がマルチソースレプリケーションと遅延レプリケーションに対応

Amazon Aurora MySQL now supports multi-source replication and delayed replication

**カテゴリ:** What's New
**公開日:** 2026-09-03
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-aurora-mysql-multisourcerep-delayedrep/)

このページでは、AWS What's Newで発表された「Amazon Aurora MySQL now supports multi-source replication and delayed replication」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Aurora MySQLは、マルチソースレプリケーションと遅延レプリケーションを新たにサポートいたします。本機能は、データの統合や人的ミスからの迅速な復旧を必要とするお客様に適しております。

## このアップデートで何が変わったか

- 新機能は、Amazon Aurora MySQLにおけるマルチソースレプリケーションと遅延レプリケーションのサポートでございます。
- マルチソースレプリケーションでは、単一のAurora MySQLクラスターが複数のソースデータベースから同時にレプリケートすることが可能でございます。
- 遅延レプリケーションでは、binlogレプリカをソースより意図的に一定時間遅らせて設定することが可能でございます。
- 本アップデートは、複数のMySQLデータベースからデータを統合したいお客様に適しております。
- また、人的ミスや論理的なデータ破損に対する保護を求めるお客様にも有益でございます。

## 詳細

### マルチソースレプリケーション

- 単一のAurora MySQLクラスターが複数のソースデータベースから同時にレプリケート可能
- 複数のMySQLデータベースからのデータ統合を実現
- シャード統合やデータ集約ワークフロー（レポーティング、バックアップ）に対応

### 遅延レプリケーション

- binlogレプリカをソースより意図的に一定時間遅延させて設定可能
- ヒューマンエラーや論理的なデータ破損に対する保護
- 有害な変更発生時に、レプリケーション停止して迅速に復旧
- フルデータベース復元不要

### 対応バージョン

- Aurora MySQL 8.4.8 以上
- すべてのAWSリージョン（Aurora MySQLが利用可能な地域）

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-aurora-mysql-multisourcerep-delayedrep/)
- [MySQL マルチソースレプリケーション](https://dev.mysql.com/doc/refman/8.4/en/replication-multi-source.html)
- [MySQL 遅延レプリケーション](https://dev.mysql.com/doc/refman/8.4/en/replication-delayed.html)
- [Aurora MySQLディザスタリカバリガイダンス](https://docs.aws.amazon.com/solutions/disaster-recovery-using-amazon-aurora/)
- [Amazon Aurora ドキュメント](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html)