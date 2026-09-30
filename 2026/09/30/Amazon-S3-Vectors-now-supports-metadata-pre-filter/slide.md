---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3 Vectorsがメタデータ事前フィルタリングをサポート

Amazon S3 Vectors now supports metadata pre-filtering for higher recall on filtered searches

**AWS Blog** | 2026-09-30T20:03:34

---

## 概要

- Amazon S3 Vectorsにメタデータ事前フィルタリングが追加され、フィルタ適用後の類似検索で再現率が向上します。
- テナント単位のRAGやエージェント検索など、範囲を限定する用途に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Amazon S3 Vectors adds metadata pre-filtering for higher recall on filtered searches**
  [詳細](https://news.lavx.hu/article/amazon-s3-vectors-adds-metadata-pre-filtering-for-higher-recall-on-filtered-searches)

- **How metadata filter selectivity affects recall in Amazon S3 Vectors**
  [詳細](https://repost.aws/articles/ARpXgjTc00RZG4mfUYQ7Y-QQ/how-metadata-filter-selectivity-affec...

---

## 変更内容・新機能

新機能はAmazon S3 Vectorsのメタデータ事前フィルタリングです。類似検索の前にメタデータフィルタを評価し、フィルタ付き検索の再現率を高めます。パスやURL、階層キー向けに$startsWithによるプレフィックスマッチングが利用できます。追加料金はなく、再取り込みやクエリ変更も不要です。テナントやカテゴリで検索範囲を限定するRAGアプリケーションに適しています。法律・専門サービス、金融、メディア、エージェントアプリケーションの利用者に有用です。ENHANCEDインデックスモードではフィルタを先に解決してから類似検索を実行し、選択性の高いフィルタではCLASSIC比最大5倍のマッチング結果を返します。各ベクトルは最大2KBのフィルタ可能メタデータを携帯でき、1クエリあたり最大100個のフィルタ条件をサポートします。既存インデックスはUpdateIndexModeでENHANCEDに切り替え可能で、再取り込みは不要です。S3 Vectorsが提供されているすべての商用AWSリージョンおよびAWS Chinaリージョンで追加料金なしで利用可能です。

---

## 効果・メリット

- Amazon S3 Vectorsにメタデータ事前フィルタリングが追加され、フィルタ適用後の類似検索で再現率が向上します。
- テナント単位のRAGやエージェント検索など、範囲を限定する用途に適しています。

---

## まとめ

- Amazon S3 Vectors now supports metadata pre-filtering for higher recall on filtered searches について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-supports-metadata-pre-filtering-for-higher-recall-on-filtered-searches/)

### 関連情報

- [Amazon S3 Vectors adds metadata pre-filtering for higher recall on filtered searches](https://news.lavx.hu/article/amazon-s3-vectors-adds-metadata-pre-filtering-for-higher-recall-on-filtered-searches)
- [How metadata filter selectivity affects recall in Amazon S3 Vectors](https://repost.aws/articles/ARpXgjTc00RZG4mfUYQ7Y-QQ/how-metadata-filter-selectivity-affects-recall-in-amazon-s3-vectors)
- [Metadata filtering - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-vectors-metadata-filtering.html)
- [Amazon S3 Vectors now generally available with increased scale and performance](https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-generally-available-with-increased-scale-and-performance)