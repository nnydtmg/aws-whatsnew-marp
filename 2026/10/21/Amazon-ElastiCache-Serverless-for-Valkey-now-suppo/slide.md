---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ElastiCache Serverless for Valkeyがゼロダウンタイムのオンライン移行をサポート

Amazon ElastiCache Serverless for Valkey now supports online migration with zero downtime

**What's New** | 2026-10-20T07:00:00

---

## 概要

- Amazon ElastiCache Serverless for Valkeyがゼロダウンタイムのオンライン移行を新たにサポートいたします。
- 本機能はEC2上のセルフマネージドValkeyおよびRedis OSSから安全に移行したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Migrating to Amazon ElastiCache for Valkey: Best practices and a customer success story | AWS Database Blog**
  [詳細](https://aws.amazon.com/blogs/database/migrating-to-amazon-elasticache-for-valkey-best-practices-and-a-customer-success-story)

- **How I Cut Our AWS ElastiCache Bill from $2,862 to $181/Month by Migrating from Redis to Valkey**
  [詳細](https://medium.com/@codeScala...

---

## 変更内容・新機能

- 新機能は、Amazon ElastiCache Serverless for ValkeyにおけるセルフマネージドValkeyおよびRedis OSSからのゼロダウンタイムオンライン移行です。
- アプリケーションはカットオーバー中も読み書きを継続でき、サードパーティツールは不要です。
- TLSとAWS Secrets Managerによる認証に対応し、Redis OSS 4.0から7.2またはValkey 7.2から8.1をValkey 9.0へ移行できます。
- 本アップデートは、EC2上のセルフマネージド環境からダウンタイムなしでサーバーレスへ移行したいお客様に適しております。
- オンライン移行は3ステップで実行: 移行の準備、データ同期の開始、カットオーバーの完了。
- ElastiCacheが移行エンドポイントを提供し、アプリケーションはそのエンドポイントを指すことができる。
- データはソースから継続的にレプリケートされ、手動または自動カットオーバーを選択可能。
- 移行使用料はアカウントごとに最初の180日間無料。その後は移行ノードのノード時間あたり課金。
- 全

---

## まとめ

- Amazon ElastiCache Serverless for Valkey now supports online migration with zero downtime について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-serverless-valkey-online-migration/)

### 関連情報

- [Migrating to Amazon ElastiCache for Valkey: Best practices and a customer success story | AWS Database Blog](https://aws.amazon.com/blogs/database/migrating-to-amazon-elasticache-for-valkey-best-practices-and-a-customer-success-story)
- [How I Cut Our AWS ElastiCache Bill from $2,862 to $181/Month by Migrating from Redis to Valkey](https://medium.com/@codeScalable/how-i-cut-our-aws-elasticache-bill-from-2-862-to-181-month-by-migrating-from-redis-to-valkey-f9714d753488)
- [Reduce your Amazon ElastiCache costs by up to 60% with Valkey and CUDOS | AWS Database Blog](https://aws.amazon.com/blogs/database/reduce-your-amazon-elasticache-costs-by-up-to-60-with-valkey-and-cudos)
- [Valkey-, Memcached-, and Redis OSS-Compatible Cache – Amazon ElastiCache – AWS](https://aws.amazon.com/elasticache)
- [Optimize your ElastiCache costs by moving to Valkey](https://www.youtube.com/watch?v=_zuRJSWB_X8)