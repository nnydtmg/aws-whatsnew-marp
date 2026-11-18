# Amazon ECRがプライベートレジストリ向けグローバル認証トークンをサポート

Amazon ECR now supports global authentication tokens for private registries

**カテゴリ:** What's New
**公開日:** 2026-11-17T21:37:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/global-authentication-amazon-ecr)

このページでは、AWS What's Newで発表された「Amazon ECR now supports global authentication tokens for private registries」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECRは同一AWSパーティション内で利用可能なグローバル認証トークンに対応しました。複数リージョンでプロキシを運用するチームのトークン管理が簡素化されます。これまではコンテナイメージをプッシュ・プルする各AWSリージョンで別々の認証トークンが必要でしたが、今はAWS Sign-In CreateBearerToken APIから単一のトークンを取得し、同一AWSパーティション内のすべてのECRプライベートレジストリで利用できます。

## このアップデートで何が変わったか

Amazon Elastic Container Registry (Amazon ECR) はプライベートレジストリ向けグローバル認証トークンをサポートしました。これまではコンテナイメージをプッシュ・プルする各AWSリージョンで別々の認証トークンを取得する必要がありました。今は、AWS Sign-In CreateBearerToken APIから単一のトークンをリクエストし、同一AWSパーティション内のすべてのECRプライベートレジストリで利用できます。レイテンシや可用性を最適化するためにリージョン跨ぎでコンテナプルをルーティングするプロキシサービスを運用するチームでは、これまでプロキシ配下のすべてのリージョンごとに別々のトークンを取得・更新・調整する必要がありました。グローバルトークンにより、プロキシはAWSパーティション内のすべてのリージョンに対して1つのトークンを管理するだけで済みます。グローバルトークンの有効期限はデフォルトで12時間ですが、最短5分まで設定可能です。これらのトークンはDocker CLIおよびAmazon ECR Docker Credential Hel

## 対象ユーザー

Amazon Elastic Container Registry (Amazon ECR) はプライベートレジストリ向けグローバル認証トークンをサポートしました。これまではコンテナイメージをプッシュ・プルする各AWSリージョンで別々の認証トークンを取得する必要がありました。今は、AWS Sign-In CreateBearerToken APIから単一のトークンをリクエストし、同一AWSパーティション内のすべてのECRプライベートレジストリで利用できます。レイテンシや可用性を最適化するためにリージョン跨ぎでコンテナプルをルーティングするプロキシサービスを運用するチームでは、これまでプロキシ配

## 詳細

Amazon Elastic Container Registry (Amazon ECR) はプライベートレジストリ向けグローバル認証トークンをサポートしました。これまではコンテナイメージをプッシュ・プルする各AWSリージョンで別々の認証トークンを取得する必要がありました。今は、AWS Sign-In CreateBearerToken APIから単一のトークンをリクエストし、同一AWSパーティション内のすべてのECRプライベートレジストリで利用できます。レイテンシや可用性を最適化するためにリージョン跨ぎでコンテナプルをルーティングするプロキシサービスを運用するチームでは、これまでプロキシ配下のすべてのリージョンごとに別々のトークンを取得・更新・調整する必要がありました。グローバルトークンにより、プロキシはAWSパーティション内のすべてのリージョンに対して1つのトークンを管理するだけで済みます。グローバルトークンの有効期限はデフォルトで12時間ですが、最短5分まで設定可能です。これらのトークンはDocker CLIおよびAmazon ECR Docker Credential Helperで利用できます。既存のリージョナル認証トークンは今後も以前と同様に動作します。グローバル認証トークンはAmazon ECRがサポートされているすべての商用AWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/global-authentication-amazon-ecr)