---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECRがプライベートレジストリ向けグローバル認証トークンをサポート

Amazon ECR now supports global authentication tokens for private registries

**What's New** | 2026-11-17T21:37:00

---

## 概要

- Amazon ECRは同一AWSパーティション内で利用可能なグローバル認証トークンに対応しました。
- 複数リージョンでプロキシを運用するチームのトークン管理が簡素化されます。
- これまではコンテナイメージをプッシュ・プルする各AWSリージョンで別々の認証トークンが必要でしたが、今はAWS Sign-In CreateBearerToken APIから単一のトークンを取得し、同一AWSパーティション内のすべてのECRプライベートレジストリで利用できます。

---

## 前提・背景

### これまでの課題

Amazon Elastic Container Registry (Amazon ECR) はプライベートレジストリ向けグローバル認証トークンをサポートしました。これまではコンテナイメージをプッシュ・プルする各AWSリージョンで別々の認証トークンを取得する必要がありました。今は、AWS Sign-In CreateBearerToken APIから単一のトークンをリクエストし、同一AWSパーティション内のすべてのECRプライベートレジストリで利用できます。レイテンシや可用性を最適化するためにリ

---

### 関連する最近の動向

- **Private registry authentication in Amazon ECR - Amazon ECR**
  [詳細](https://docs.aws.amazon.com/AmazonECR/lates...

---

## 変更内容・新機能

Amazon Elastic Container Registry (Amazon ECR) はプライベートレジストリ向けグローバル認証トークンをサポートしました。これまではコンテナイメージをプッシュ・プルする各AWSリージョンで別々の認証トークンを取得する必要がありました。今は、AWS Sign-In CreateBearerToken APIから単一のトークンをリクエストし、同一AWSパーティション内のすべてのECRプライベートレジストリで利用できます。レイテンシや可用性を最適化するためにリージョン跨ぎでコンテナプルをルーティングするプロキシサービスを運用するチームでは、これまでプロキシ配下のすべてのリージョンごとに別々のトークンを取得・更新・調整する必要がありました。グローバルトークンにより、プロキシはAWSパーティション内のすべてのリージョンに対して1つのトークンを管理するだけで済みます。グローバルトークンの有効期限はデフォルトで12時間ですが、最短5分まで設定可能です。これらのトークンはDocker CLIおよびAmazon ECR Docker Credential Hel

---

## まとめ

- Amazon ECR now supports global authentication tokens for private registries について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/global-authentication-amazon-ecr)

### 関連情報

- [Private registry authentication in Amazon ECR - Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)
- [Amazon ECR private registry - Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html)
- [Amazon ECR now supports global authentication tokens for private registries](https://aws.amazon.com/about-aws/whats-new/2026/11/global-authentication-amazon-ecr)