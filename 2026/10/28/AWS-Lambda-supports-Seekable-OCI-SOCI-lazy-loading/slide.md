---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda Managed Instances で Seekable OCI (SOCI) 遅延読み込みが利用可能に

AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances

**What's New** | 2026-10-28T18:44:00

---

## 概要

- AWS Lambda Managed InstancesでSOCI遅延読み込みが利用可能となり、コンテナ起動時間を最大70パーセント短縮できます。
- コンピュート集約型アプリケーションを構築されるお客様に有用な機能です。

---

## 前提・背景

### これまでの課題

新機能は、Lambda Managed Instances上のOCIイメージ向けSeekable OCI（SOCI）遅延読み込みのサポートです。Lambdaは起動各段階で必要なファイルのみを取得し、コンテナ起動時間を最大70パーセント短縮いたします。本アップデートは、データ処理パイプライン、高スループットAPIバックエンド、バッチ計算などのコンピュート集約型アプリケーションを構築されるお客様に適しております。SOCIは起動環境の各ステージで必要なファイルのみをストリーミングし、イメージ全体を事前

---

### 関連する最近の動向

- **AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances**
  [詳細](https://aws.amazon.c...

---

## 変更内容・新機能

新機能は、Lambda Managed Instances上のOCIイメージ向けSeekable OCI（SOCI）遅延読み込みのサポートです。Lambdaは起動各段階で必要なファイルのみを取得し、コンテナ起動時間を最大70パーセント短縮いたします。本アップデートは、データ処理パイプライン、高スループットAPIバックエンド、バッチ計算などのコンピュート集約型アプリケーションを構築されるお客様に適しております。SOCIは起動環境の各ステージで必要なファイルのみをストリーミングし、イメージ全体を事前にダウンロードする必要を無くします。これまでSOCIはAmazon EKSやAmazon ECS Fargateで利用可能でしたが、Lambda Managed InstancesのEvent Functions（OCIイメージ）でも対応しました。Agent Toolkit for AWSからLambda Managed Instances skillをインストールして設定・デプロイできます。

---

## 効果・メリット

- 新機能は、Lambda Managed Instances上のOCIイメージ向けSeekable OCI（SOCI）遅延読み込みのサポートです。
- Lambdaは起動各段階で必要なファイルのみを取得し、コンテナ起動時間を最大70パーセント短縮いたします。
- 本アップデートは、データ処理パイプライン、高スループットAPIバックエンド、バッチ計算などのコンピュート集約型アプリケーションを構築されるお客様に適しております。
- SOCIは起動環境の各ステージで必要なファイルのみをストリーミングし、イメージ全体を事前にダウンロードする必要を無くします。
- これまでSOCIはAmazon EKSやAmazon ECS Fargateで利用可能でしたが、Lambda Managed InstancesのEvent Functions（OCIイメージ）でも対応しました。

---

## まとめ

- AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci/)

### 関連情報

- [AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci)
- [Seekable OCI: Lazy-Loading Container Images via Range-Request Indexing](https://arxiv.org/html/2607.06868v1)
- [Under the hood: Lazy Loading Container Images with Seekable OCI and AWS Fargate](https://aws.amazon.com/blogs/containers/under-the-hood-lazy-loading-container-images-with-seekable-oci-and-aws-fargate)
- [Lambda in 2026: Durable Functions and Managed Instances Explained](https://builder.aws.com/content/3Khau5gTSwgQtIvpLKuytKkDkg2)