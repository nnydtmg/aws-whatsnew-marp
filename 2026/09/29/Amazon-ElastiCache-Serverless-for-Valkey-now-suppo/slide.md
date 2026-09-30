---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ElastiCache Serverless for Valkey がパブリックエンドポイントをサポート

Amazon ElastiCache Serverless for Valkey now supports public endpoints

**What's New** | 2026-09-29

---

## 概要

- Amazon ElastiCache Serverless for Valkeyがパブリックエンドポイントをサポートし、外部からの簡単接続が可能になりました。
- この機能はプロトタイピングやVPC外のワークロードに最適です。

---

## 前提・背景

### 関連する最近の動向

- **ElastiCache vs Azure Cache for Redis vs Memorystore**
  [詳細](https://tech-insider.org/aws-elasticache-vs-azure-cache-vs-google-memorystore-2026)

- **Vadym Kazulkin**
  [詳細](https://x.com/VKazulkin/status/2105235324116811829)

- **Choosing an AWS database service - AWS Decision Guides**
  [詳細](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/databases-on-aws-ho...

---

## 変更内容・新機能

- Amazon ElastiCache Serverless for Valkeyにおけるパブリックエンドポイントのサポートが新機能です。
- ラップトップ、サーバーレス関数、またはAWS外で実行されているアプリケーションから、VPN、バスティオンホスト、SSHトンネルを設定せずにキャッシュへ直接接続できます。
- インターネット経由で到達可能なフルマネージドキャッシュを提供し、VPCの設定やインフラのプロビジョニングが不要となり、1分以内に作成できます。
- このアップデートは、迅速にプロトタイプを作成する方、AIコーディングツールやエージェントをキャッシュに接続する方、VPCに到達できないワークロードにキャッシングを追加する方に適しています。
- すべての接続はIAM認証とTLS 1.3を使用し、パスワード管理が不要です。
- Valkey GLIDE 2.2以降またはDeveloper Toolkit for ElastiCacheを使用して接続できます。
- パブリックエンドポイントはすべての商用AWSリージョンと中国リージョンで利用可能です。
- 追加料金なしで利用できます

---

## まとめ

- Amazon ElastiCache Serverless for Valkey now supports public endpoints について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-elasticache-serverless-public-endpoints/)

### 関連情報

- [ElastiCache vs Azure Cache for Redis vs Memorystore](https://tech-insider.org/aws-elasticache-vs-azure-cache-vs-google-memorystore-2026)
- [Vadym Kazulkin](https://x.com/VKazulkin/status/2105235324116811829)
- [Choosing an AWS database service - AWS Decision Guides](https://docs.aws.amazon.com/decision-guides/latest/decision-guides/databases-on-aws-how-to-choose.html)