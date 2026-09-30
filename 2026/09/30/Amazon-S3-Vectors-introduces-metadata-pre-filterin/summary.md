# Amazon S3 Vectorsがメタデータ事前フィルタリングを導入、フィルタ検索の再現率が最大5倍に

Amazon S3 Vectors introduces metadata pre-filtering for up to 5x higher recall on filtered search

**カテゴリ:** What's New
**公開日:** 2026-09-30T20:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/s3-vectors-introduces-metadata-pre-filtering/)

このページでは、AWS What's Newで発表された「Amazon S3 Vectors introduces metadata pre-filtering for up to 5x higher recall on filtered search」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3 Vectorsにメタデータ事前フィルタリングと$startsWith演算子が追加され、選択的フィルター時に一致するベクトルを最大5倍多く返すことができるようになりました。本アップデートは、RAG、エージェンティック、セマンティック検索アプリケーションをご利用のお客様に適しております。

## このアップデートで何が変わったか

新機能は、類似検索の前にメタデータフィルターを評価するAmazon S3 Vectorsの事前フィルタリングです。選択的なフィルター時に、一致するベクトルを最大5倍多く返すことができます。パスやURLなどの値向けに、プレフィックス一致演算子（$startsWith）が追加されます。新規インデックスではデフォルトで有効となり、既存インデックスはUpdateIndexMode APIで更新できます。追加費用はなく、S3 Vectors対応の商用AWSリージョンおよび中国リージョンでご利用いただけます。本アップデートは、RAG、エージェンティック、セマンティック検索アプリケーションをご利用のお客様に適しております。

## 対象ユーザー

新機能は、類似検索の前にメタデータフィルターを評価するAmazon S3 Vectorsの事前フィルタリングです。選択的なフィルター時に、一致するベクトルを最大5倍多く返すことができます。パスやURLなどの値向けに、プレフィックス一致演算子（$startsWith）が追加されます。新規インデックスではデフォルトで有効となり、既存インデックスはUpdateIndexMode APIで更新できます。追加費用はなく、S3 Vectors対応の商用AWSリージョンおよび中国リージョンでご利用いただけます。本アップデートは、RAG、エージェンティック、セマンティック検索アプリケーションをご利用のお客様に

## 詳細

新機能は、類似検索の前にメタデータフィルターを評価するAmazon S3 Vectorsの事前フィルタリングです。選択的なフィルター時に、一致するベクトルを最大5倍多く返すことができます。パスやURLなどの値向けに、プレフィックス一致演算子（$startsWith）が追加されます。新規インデックスではデフォルトで有効となり、既存インデックスはUpdateIndexMode APIで更新できます。追加費用はなく、S3 Vectors対応の商用AWSリージョンおよび中国リージョンでご利用いただけます。本アップデートは、RAG、エージェンティック、セマンティック検索アプリケーションをご利用のお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/s3-vectors-introduces-metadata-pre-filtering/)