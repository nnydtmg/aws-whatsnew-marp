---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ElastiCache Serverlessがベクトル・全文・ハイブリッド検索と集計をサポート

Amazon ElastiCache Serverless now supports vector, full-text and hybrid searches plus aggregations

**What's New** | 2026-11-10T08:00:00

---

## 概要

- Amazon ElastiCache Serverless for Valkeyは、ベクトル検索・全文検索・ハイブリッド検索および集計を新たにサポートします。
- マイクロ秒単位の低遅延でベクトル検索は最大99%のリコールを達成し、更新は書き込み完了直後から1日に最大十億件のクエリを処理可能です。
- 予測不能なトラフィックを持つ低遅延アプリケーションや、検索を迅速に始めたいチームに適しています。

---

## 前提・背景

### これまでの課題

Amazon ElastiCache Serverless for Valkeyが、ベクトル検索、全文検索、ハイブリッド検索、およびサーバー側集計をサポートしました。ライブデータを検索するアプリケーションは、遅延とリコールのトレードオフや、更新が検索可能になるまでの遅れという課題を抱えていました。本機能により、マイクロ秒単位の低遅延でベクトル検索は最大99%のリコールを実現し、1日あたり最大十億件のクエリを処理できます。書き込み完了直後（マイクロ秒単位）に更新が検索可能になります。複数の検索タイ

---

### 関連する最近の動向

- **Valkey 9 Unlocks Hybrid Search on ElastiCache**
  [詳細](https://offbynone.io/issues/365)

- **Amazon ElastiCache...

---

## 変更内容・新機能

Amazon ElastiCache Serverless for Valkeyが、ベクトル検索、全文検索、ハイブリッド検索、およびサーバー側集計をサポートしました。ライブデータを検索するアプリケーションは、遅延とリコールのトレードオフや、更新が検索可能になるまでの遅れという課題を抱えていました。本機能により、マイクロ秒単位の低遅延でベクトル検索は最大99%のリコールを実現し、1日あたり最大十億件のクエリを処理できます。書き込み完了直後（マイクロ秒単位）に更新が検索可能になります。複数の検索タイプを単一クエリで組み合わせ、リコールを調整し、サーバー側集計で結果を分析できます。開発者はエージェント・セッション・タスクごとに独自のデータストアを秒単位で用意でき、パブリックエンドポイントでネットワーク設定なしに接続でき、使用分のみ課金されます。商品発見、レコメンデーション、RAGにも適しています。ElastiCache version 9 for Valkeyで、すべての商用AWSリージョン、AWS GovCloud (US)、AWS European Sovereign Cloudで利用可

---

## まとめ

- Amazon ElastiCache Serverless now supports vector, full-text and hybrid searches plus aggregations について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-elasticache-serverless-search-aggregations/)

### 関連情報

- [Valkey 9 Unlocks Hybrid Search on ElastiCache](https://offbynone.io/issues/365)
- [Amazon ElastiCache now supports real-time hybrid search with vector and full-text](https://www.amazonaws.cn/en/new/2026/amazon-elasticache-supports-real-time-hybrid-search-with-vector-and-full-text)
- [Full-text, exact-match, range, and hybrid search on Amazon ElastiCache](https://aws.amazon.com/blogs/database/enhanced-search-for-amazon-elasticache)
- [Amazon ElastiCache now supports real-time hybrid search with vector and full-text](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-elasticache-hybrid-search)