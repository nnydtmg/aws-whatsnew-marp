# AWS Lambda Managed Instances で Seekable OCI (SOCI) 遅延読み込みが利用可能に

AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances

**カテゴリ:** What's New
**公開日:** 2026-10-28T18:44:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci/)

このページでは、AWS What's Newで発表された「AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda Managed InstancesでSOCI遅延読み込みが利用可能となり、コンテナ起動時間を最大70パーセント短縮できます。コンピュート集約型アプリケーションを構築されるお客様に有用な機能です。

## このアップデートで何が変わったか

新機能は、Lambda Managed Instances上のOCIイメージ向けSeekable OCI（SOCI）遅延読み込みのサポートです。Lambdaは起動各段階で必要なファイルのみを取得し、コンテナ起動時間を最大70パーセント短縮いたします。本アップデートは、データ処理パイプライン、高スループットAPIバックエンド、バッチ計算などのコンピュート集約型アプリケーションを構築されるお客様に適しております。SOCIは起動環境の各ステージで必要なファイルのみをストリーミングし、イメージ全体を事前にダウンロードする必要を無くします。これまでSOCIはAmazon EKSやAmazon ECS Fargateで利用可能でしたが、Lambda Managed InstancesのEvent Functions（OCIイメージ）でも対応しました。Agent Toolkit for AWSからLambda Managed Instances skillをインストールして設定・デプロイできます。

## 対象ユーザー

新機能は、Lambda Managed Instances上のOCIイメージ向けSeekable OCI（SOCI）遅延読み込みのサポートです。Lambdaは起動各段階で必要なファイルのみを取得し、コンテナ起動時間を最大70パーセント短縮いたします。本アップデートは、データ処理パイプライン、高スループットAPIバックエンド、バッチ計算などのコンピュート集約型アプリケーションを構築されるお客様に適しております。SOCIは起動環境の各ステージで必要なファイルのみをストリーミングし、イメージ全体を事前にダウンロードする必要を無くします。これまでSOCIはAmazon EKSやAmazon ECS F

## 詳細

新機能は、Lambda Managed Instances上のOCIイメージ向けSeekable OCI（SOCI）遅延読み込みのサポートです。Lambdaは起動各段階で必要なファイルのみを取得し、コンテナ起動時間を最大70パーセント短縮いたします。本アップデートは、データ処理パイプライン、高スループットAPIバックエンド、バッチ計算などのコンピュート集約型アプリケーションを構築されるお客様に適しております。SOCIは起動環境の各ステージで必要なファイルのみをストリーミングし、イメージ全体を事前にダウンロードする必要を無くします。これまでSOCIはAmazon EKSやAmazon ECS Fargateで利用可能でしたが、Lambda Managed InstancesのEvent Functions（OCIイメージ）でも対応しました。Agent Toolkit for AWSからLambda Managed Instances skillをインストールして設定・デプロイできます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci/)