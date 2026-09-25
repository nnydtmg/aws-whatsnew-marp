# IAMアウトバウンドフェデレーションがOIDCディスカバリー向けVPCエンドポイントをサポート

AWS IAM outbound identity federation now supports interface VPC endpoints for OIDC discovery

**カテゴリ:** What's New
**公開日:** 2026-09-25T17:54:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts-vpc-oidc/)

このページでは、AWS What's Newで発表された「AWS IAM outbound identity federation now supports interface VPC endpoints for OIDC discovery」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

IAMアウトバウンドアイデンティティフェデレーションがOIDCディスカバリー向けVPCエンドポイントに対応し、インターネット制限のあるVPC内ワークロードでも検証キーをプライベートに取得できるようになりました。

## このアップデートで何が変わったか

本機能はすべての商用AWSリージョン、AWS GovCloud (US) リージョン、および中国リージョンで利用可能です。標準のAWS PrivateLink料金以外の追加料金はありません。

## 対象ユーザー

AWS Identity and Access Management (IAM) アウトバウンドアイデンティティフェデレーションが、OpenID Connect (OIDC) ディスカバリーAPI向けのAmazon Virtual Private Cloud (VPC) エンドポイントをサポートしました。VPC内からAWS PrivateLinkを使用し、OIDCメタデータとJSON Web Key Set (JWKS) 検証キーエンドポイントへプライベートにアクセスできます。

## 詳細

AWS Identity and Access Management (IAM) アウトバウンドアイデンティティフェデレーションが、OpenID Connect (OIDC) ディスカバリーAPI向けのAmazon Virtual Private Cloud (VPC) エンドポイントをサポートしました。VPC内からAWS PrivateLinkを使用し、OIDCメタデータとJSON Web Key Set (JWKS) 検証キーエンドポイントへプライベートにアクセスできます。

IAMアウトバウンドアイデンティティフェデレーションは、AWSワークロードが外部サービスにアクセスする際に長期証明情報を使用する必要をなくします。ワークロードはAWS Security Token Service (AWS STS) から短期のJSON Web Token (JWT) を取得し、外部サービスはOIDCディスカバリーエンドポイントで公開されている検証キーとメタデータを使ってトークンを検証します。

これまでOIDCディスカバリーエンドポイントはパブリックインターネット経由でのみアクセス可能だったため、インターネットアクセスのないVPC内の検証ワークロードはキーを取得できませんでした。本機能によりインターフェースVPCエンドポイントを作成し、検証キー取得トラフィックをAWSネットワーク内に止めることができます。

本機能はすべての商用AWSリージョン、AWS GovCloud (US) リージョン、および中国リージョンで利用可能です。標準のAWS PrivateLink料金以外の追加料金はありません。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts-vpc-oidc/)