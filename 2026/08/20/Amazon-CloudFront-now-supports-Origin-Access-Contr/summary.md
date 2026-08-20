# Amazon CloudFront が Amazon S3 マルチリージョンアクセスポイント用 OAC に対応

Amazon CloudFront now supports Origin Access Control (OAC) for Amazon S3 Multi-Region Access Points

**カテゴリ:** What's New
**公開日:** 2026-08-20T18:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudfront-oac-s3-mrap)

このページでは、AWS What's Newで発表された「Amazon CloudFront now supports Origin Access Control (OAC) for Amazon S3 Multi-Region Access Points」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

CloudFrontがAmazon S3マルチリージョンアクセスポイント（MRAP）に対してOrigin Access Control（OAC）をネイティブにサポートするようになり、カスタムLambda@Edge関数を使用せずにセキュアで高速なグローバルコンテンツ配信が可能になりました。このアップデートにより、グローバルに分散したユーザーへのパフォーマンスと耐障害性が向上し、追加料金なくご利用いただけます。

## このアップデートで何が変わったか

- この機能はCloudFront中国リージョンを除く世界中で利用可能です。

- この機能に関連する追加料金はありません。

## 対象ユーザー

- キャッシュミス時に最も近いリージョンからより高速にコンテンツを取得でき、グローバルに分散したユーザーのパフォーマンスと耐障害性が向上します。

## 詳細

- CloudFrontがAmazon S3マルチリージョンアクセスポイント（MRAP）に対してOrigin Access Control（OAC）をサポートするようになりました。

- CloudFront OACを使用することで、指定されたCloudFront ディストリビューションからのアクセスのみを許可して、S3 MRAPオリジンを保護できるようになりました。

- 従来は、カスタムLambda@Edge関数を使用して非対称署名バージョン4（SigV4a）認可ヘッダーを計算して転送する必要がありました。

- CloudFrontがS3 MRAPオリジンへのリクエストにネイティブに署名するようになったため、カスタム認可ヘッダー計算が不要になりました。

- キャッシュミス時に最も近いリージョンからより高速にコンテンツを取得でき、グローバルに分散したユーザーのパフォーマンスと耐障害性が向上します。

- この機能はCloudFront中国リージョンを除く世界中で利用可能です。

- CloudFrontコンソール、SDK、CLI、またはCloudFormationを使用して、S3 MRAPエンドポイントをCloudFrontで設定する際にOACを有効にできます。

- この機能に関連する追加料金はありません。

- このアップデートは、グローバルなコンテンツ配信とセキュリティを必要とするお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudfront-oac-s3-mrap)