# Amazon ECS が Amazon S3 Files のサポートを EC2 起動タイプに拡張

Amazon ECS extends Amazon S3 Files support to the Amazon EC2 compute type

**カテゴリ:** What's New
**公開日:** 2026-09-16T16:25:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-s3-files-ec2/)

このページでは、AWS What's Newで発表された「Amazon ECS extends Amazon S3 Files support to the Amazon EC2 compute type」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECSはAmazon EC2起動タイプにおいてAmazon S3 Filesのサポートを拡張し、コード変更なしでS3データをファイルシステムとして利用できるようになりました。この機能は、EC2上のECSワークロードやファイルベースのアプリケーションを利用するお客様に適しています。

## このアップデートで何が変わったか

Amazon Elastic Container Service (Amazon ECS) が Amazon EC2 起動タイプで実行されるタスクに対して Amazon S3 Files をサポートしました。これにより、コンテナ化されたアプリケーションを Amazon S3 上のデータに共有ファイルシステムとして直接接続できます。これまで S3 Files は AWS Fargate および ECS Managed Instances 上の ECS タスクで利用可能でしたが、今回 EC2 起動タイプにも拡張され、3つの起動タイプすべてで一貫したアクセスが可能になりました。Amazon S3 Files は Amazon EFS 上に構築され、S3 上のデータをフルのファイルシステムセマンティクスと低レイテンシで利用できます。データは S3 から移動せず、新規・既存のバケット双方でマイグレーション不要です。標準的なファイルシステム操作で読み書きでき、コード変更やデータのコピー・ステージングは不要です。ファイルベースのアプリケーション、AIエージェント、データ処理ワークロードに適しています

## 詳細

Amazon Elastic Container Service (Amazon ECS) が Amazon EC2 起動タイプで実行されるタスクに対して Amazon S3 Files をサポートしました。これにより、コンテナ化されたアプリケーションを Amazon S3 上のデータに共有ファイルシステムとして直接接続できます。これまで S3 Files は AWS Fargate および ECS Managed Instances 上の ECS タスクで利用可能でしたが、今回 EC2 起動タイプにも拡張され、3つの起動タイプすべてで一貫したアクセスが可能になりました。Amazon S3 Files は Amazon EFS 上に構築され、S3 上のデータをフルのファイルシステムセマンティクスと低レイテンシで利用できます。データは S3 から移動せず、新規・既存のバケット双方でマイグレーション不要です。標準的なファイルシステム操作で読み書きでき、コード変更やデータのコピー・ステージングは不要です。ファイルベースのアプリケーション、AIエージェント、データ処理ワークロードに適しています。全商用リージョンおよび AWS GovCloud (US) で利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-s3-files-ec2/)