# Amazon S3 Vectorsがメタデータ事前フィルタリングをサポート

Amazon S3 Vectors now supports metadata pre-filtering for higher recall on filtered searches

**カテゴリ:** AWS Blog
**公開日:** 2026-09-30T20:03:34
**元記事:** [元記事](https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-supports-metadata-pre-filtering-for-higher-recall-on-filtered-searches/)

このページでは、AWS What's Newで発表された「Amazon S3 Vectors now supports metadata pre-filtering for higher recall on filtered searches」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3 Vectorsにメタデータ事前フィルタリングが追加され、フィルタ適用後の類似検索で再現率が向上します。テナント単位のRAGやエージェント検索など、範囲を限定する用途に適しています。

## このアップデートで何が変わったか

新機能はAmazon S3 Vectorsのメタデータ事前フィルタリングです。類似検索の前にメタデータフィルタを評価し、フィルタ付き検索の再現率を高めます。パスやURL、階層キー向けに$startsWithによるプレフィックスマッチングが利用できます。追加料金はなく、再取り込みやクエリ変更も不要です。テナントやカテゴリで検索範囲を限定するRAGアプリケーションに適しています。法律・専門サービス、金融、メディア、エージェントアプリケーションの利用者に有用です。ENHANCEDインデックスモードではフィルタを先に解決してから類似検索を実行し、選択性の高いフィルタではCLASSIC比最大5倍のマッチング結果を返します。各ベクトルは最大2KBのフィルタ可能メタデータを携帯でき、1クエリあたり最大100個のフィルタ条件をサポートします。既存インデックスはUpdateIndexModeでENHANCEDに切り替え可能で、再取り込みは不要です。S3 Vectorsが提供されているすべての商用AWSリージョンおよびAWS Chinaリージョンで追加料金なしで利用可能です。

## 対象ユーザー

新機能はAmazon S3 Vectorsのメタデータ事前フィルタリングです。類似検索の前にメタデータフィルタを評価し、フィルタ付き検索の再現率を高めます。パスやURL、階層キー向けに$startsWithによるプレフィックスマッチングが利用できます。追加料金はなく、再取り込みやクエリ変更も不要です。テナントやカテゴリで検索範囲を限定するRAGアプリケーションに適しています。法律・専門サービス、金融、メディア、エージェントアプリケーションの利用者に有用です。ENHANCEDインデックスモードではフィルタを先に解決してから類似検索を実行し、選択性の高いフィルタではCLASSIC比最大5倍のマッチ

## 詳細

新機能はAmazon S3 Vectorsのメタデータ事前フィルタリングです。類似検索の前にメタデータフィルタを評価し、フィルタ付き検索の再現率を高めます。パスやURL、階層キー向けに$startsWithによるプレフィックスマッチングが利用できます。追加料金はなく、再取り込みやクエリ変更も不要です。テナントやカテゴリで検索範囲を限定するRAGアプリケーションに適しています。法律・専門サービス、金融、メディア、エージェントアプリケーションの利用者に有用です。ENHANCEDインデックスモードではフィルタを先に解決してから類似検索を実行し、選択性の高いフィルタではCLASSIC比最大5倍のマッチング結果を返します。各ベクトルは最大2KBのフィルタ可能メタデータを携帯でき、1クエリあたり最大100個のフィルタ条件をサポートします。既存インデックスはUpdateIndexModeでENHANCEDに切り替え可能で、再取り込みは不要です。S3 Vectorsが提供されているすべての商用AWSリージョンおよびAWS Chinaリージョンで追加料金なしで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-supports-metadata-pre-filtering-for-higher-recall-on-filtered-searches/)