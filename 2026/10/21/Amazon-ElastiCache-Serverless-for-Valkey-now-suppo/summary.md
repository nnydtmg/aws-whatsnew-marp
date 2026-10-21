# Amazon ElastiCache Serverless for Valkeyがゼロダウンタイムのオンライン移行をサポート

Amazon ElastiCache Serverless for Valkey now supports online migration with zero downtime

**カテゴリ:** What's New
**公開日:** 2026-10-20T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-serverless-valkey-online-migration/)

このページでは、AWS What's Newで発表された「Amazon ElastiCache Serverless for Valkey now supports online migration with zero downtime」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ElastiCache Serverless for Valkeyがゼロダウンタイムのオンライン移行を新たにサポートいたします。本機能はEC2上のセルフマネージドValkeyおよびRedis OSSから安全に移行したいお客様に適しております。

## このアップデートで何が変わったか

- 新機能は、Amazon ElastiCache Serverless for ValkeyにおけるセルフマネージドValkeyおよびRedis OSSからのゼロダウンタイムオンライン移行です。
- アプリケーションはカットオーバー中も読み書きを継続でき、サードパーティツールは不要です。
- TLSとAWS Secrets Managerによる認証に対応し、Redis OSS 4.0から7.2またはValkey 7.2から8.1をValkey 9.0へ移行できます。
- 本アップデートは、EC2上のセルフマネージド環境からダウンタイムなしでサーバーレスへ移行したいお客様に適しております。
- オンライン移行は3ステップで実行: 移行の準備、データ同期の開始、カットオーバーの完了。
- ElastiCacheが移行エンドポイントを提供し、アプリケーションはそのエンドポイントを指すことができる。
- データはソースから継続的にレプリケートされ、手動または自動カットオーバーを選択可能。
- 移行使用料はアカウントごとに最初の180日間無料。その後は移行ノードのノード時間あたり課金。
- 全

## 対象ユーザー

- 新機能は、Amazon ElastiCache Serverless for ValkeyにおけるセルフマネージドValkeyおよびRedis OSSからのゼロダウンタイムオンライン移行です。
- アプリケーションはカットオーバー中も読み書きを継続でき、サードパーティツールは不要です。
- TLSとAWS Secrets Managerによる認証に対応し、Redis OSS 4.0から7.2またはValkey 7.2から8.1をValkey 9.0へ移行できます。
- 本アップデートは、EC2上のセルフマネージド環境からダウンタイムなしでサーバーレスへ移行したいお客様に適しております。
-

## 詳細

- 新機能は、Amazon ElastiCache Serverless for ValkeyにおけるセルフマネージドValkeyおよびRedis OSSからのゼロダウンタイムオンライン移行です。
- アプリケーションはカットオーバー中も読み書きを継続でき、サードパーティツールは不要です。
- TLSとAWS Secrets Managerによる認証に対応し、Redis OSS 4.0から7.2またはValkey 7.2から8.1をValkey 9.0へ移行できます。
- 本アップデートは、EC2上のセルフマネージド環境からダウンタイムなしでサーバーレスへ移行したいお客様に適しております。
- オンライン移行は3ステップで実行: 移行の準備、データ同期の開始、カットオーバーの完了。
- ElastiCacheが移行エンドポイントを提供し、アプリケーションはそのエンドポイントを指すことができる。
- データはソースから継続的にレプリケートされ、手動または自動カットオーバーを選択可能。
- 移行使用料はアカウントごとに最初の180日間無料。その後は移行ノードのノード時間あたり課金。
- 全商用AWSリージョン、中国リージョン、AWS GovCloud (US) リージョンで利用可能。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-serverless-valkey-online-migration/)