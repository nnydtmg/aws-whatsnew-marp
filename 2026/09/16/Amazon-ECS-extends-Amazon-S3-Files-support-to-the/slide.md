---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECS が Amazon S3 Files のサポートを EC2 起動タイプに拡張

Amazon ECS extends Amazon S3 Files support to the Amazon EC2 compute type

**What's New** | 2026-09-16T16:25:00

---

## 概要

- Amazon ECSはAmazon EC2起動タイプにおいてAmazon S3 Filesのサポートを拡張し、コード変更なしでS3データをファイルシステムとして利用できるようになりました。
- この機能は、EC2上のECSワークロードやファイルベースのアプリケーションを利用するお客様に適しています。

---

## 前提・背景

### これまでの課題

Amazon Elastic Container Service (Amazon ECS) が Amazon EC2 起動タイプで実行されるタスクに対して Amazon S3 Files をサポートしました。これにより、コンテナ化されたアプリケーションを Amazon S3 上のデータに共有ファイルシステムとして直接接続できます。これまで S3 Files は AWS Fargate および ECS Managed Instances 上の ECS タスクで利用可能でしたが、今回 EC2 起動タ

---

### 関連する最近の動向

- **Amazon S3 Files**
  [詳細](https://aws.amazon.com/s3/features/files)

- **Launching S3 Files, making S3 buckets a...

---

## 変更内容・新機能

Amazon Elastic Container Service (Amazon ECS) が Amazon EC2 起動タイプで実行されるタスクに対して Amazon S3 Files をサポートしました。これにより、コンテナ化されたアプリケーションを Amazon S3 上のデータに共有ファイルシステムとして直接接続できます。これまで S3 Files は AWS Fargate および ECS Managed Instances 上の ECS タスクで利用可能でしたが、今回 EC2 起動タイプにも拡張され、3つの起動タイプすべてで一貫したアクセスが可能になりました。Amazon S3 Files は Amazon EFS 上に構築され、S3 上のデータをフルのファイルシステムセマンティクスと低レイテンシで利用できます。データは S3 から移動せず、新規・既存のバケット双方でマイグレーション不要です。標準的なファイルシステム操作で読み書きでき、コード変更やデータのコピー・ステージングは不要です。ファイルベースのアプリケーション、AIエージェント、データ処理ワークロードに適しています

---

## まとめ

- Amazon ECS extends Amazon S3 Files support to the Amazon EC2 compute type について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-s3-files-ec2/)

### 関連情報

- [Amazon S3 Files](https://aws.amazon.com/s3/features/files)
- [Launching S3 Files, making S3 buckets accessible as file systems](https://aws.amazon.com/blogs/aws/launching-s3-files-making-s3-buckets-accessible-as-file-systems)
- [Amazon S3 Files: Native File System Access](https://krishnendubhowmick.medium.com/amazon-s3-files-native-file-system-access-to-your-s3-data-launched-recently-a320144e6b8e)