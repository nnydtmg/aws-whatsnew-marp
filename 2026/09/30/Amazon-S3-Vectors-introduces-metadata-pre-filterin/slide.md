---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3 Vectorsがメタデータ事前フィルタリングを導入、フィルタ検索の再現率が最大5倍に

Amazon S3 Vectors introduces metadata pre-filtering for up to 5x higher recall on filtered search

**What's New** | 2026-09-30T20:00:00

---

## 概要

- Amazon S3 Vectorsにメタデータ事前フィルタリングと$startsWith演算子が追加され、選択的フィルター時に一致するベクトルを最大5倍多く返すことができるようになりました。
- 本アップデートは、RAG、エージェンティック、セマンティック検索アプリケーションをご利用のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **How metadata filter selectivity affects recall in Amazon S3 Vectors | AWS re:Post**
  [詳細](https://repost.aws/articles/ARpXgjTc00RZG4mfUYQ7Y-QQ/how-metadata-filter-selectivity-affects-recall-in-amazon-s3-vectors)

- **Metadata filtering - Amazon Simple Storage Service**
  [詳細](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-metadata-filtering.html)

- **Amazon S...

---

## 変更内容・新機能

新機能は、類似検索の前にメタデータフィルターを評価するAmazon S3 Vectorsの事前フィルタリングです。選択的なフィルター時に、一致するベクトルを最大5倍多く返すことができます。パスやURLなどの値向けに、プレフィックス一致演算子（$startsWith）が追加されます。新規インデックスではデフォルトで有効となり、既存インデックスはUpdateIndexMode APIで更新できます。追加費用はなく、S3 Vectors対応の商用AWSリージョンおよび中国リージョンでご利用いただけます。本アップデートは、RAG、エージェンティック、セマンティック検索アプリケーションをご利用のお客様に適しております。

---

## まとめ

- Amazon S3 Vectors introduces metadata pre-filtering for up to 5x higher recall on filtered search について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/s3-vectors-introduces-metadata-pre-filtering/)

### 関連情報

- [How metadata filter selectivity affects recall in Amazon S3 Vectors | AWS re:Post](https://repost.aws/articles/ARpXgjTc00RZG4mfUYQ7Y-QQ/how-metadata-filter-selectivity-affects-recall-in-amazon-s3-vectors)
- [Metadata filtering - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-metadata-filtering.html)
- [Amazon S3 Vectors Design Decision Guide](https://hidekazu-konishi.com/entry/amazon_s3_vectors_design_decision_guide.html)
- [Cost-Optimized Vector Search with Amazon OpenSearch Service and Amazon S3 Vectors](https://builder.aws.com/content/33rpGPf5mEUHxsGxnmXPZ5yI7li/cost-optimized-vector-search-with-amazon-opensearch-service-and-amazon-s3-vectors)
- [Amazon S3 Vectors now generally available with increased scale and performance](https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-generally-available-with-increased-scale-and-performance)