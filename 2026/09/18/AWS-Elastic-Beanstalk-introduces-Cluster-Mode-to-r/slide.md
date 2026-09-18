---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Elastic Beanstalk のCluster Modeで複数アプリケーションを共有インフラで実行可能に

AWS Elastic Beanstalk introduces Cluster Mode to run multiple applications on shared infrastructure

**What's New** | 2026-09-17T08:00:00

---

## 概要

- AWS Elastic Beanstalkに複数アプリケーションを共有インフラ上で実行できるCluster Modeが追加されました。
- 本機能はアプリケーション数の増加に伴うコスト最適化を図りたいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS Elastic Beanstalk release notes - AWS Elastic Beanstalk**
  [詳細](https://docs.aws.amazon.com/elasticbeanstalk/latest/relnotes/relnotes.html)

- **Release: Elastic Beanstalk Amazon Linux 2023 platform updates on September 10, 2026**
  [詳細](https://docs.aws.amazon.com/elasticbeanstalk/latest/relnotes/release-2026-09-10-al2023.html)

---

## 変更内容・新機能

新機能はAWS Elastic BeanstalkのCluster Modeであり、共有インフラストラクチャ上で複数のアプリケーションを実行および管理できる新しいデプロイメントモードです。ソースコードやDockerfile、Amazon ECRのコンテナイメージを提供するだけで、コンテナ化から運用までをElastic Beanstalkが処理します。このアップデートは、複数のアプリケーションを運用しコンピュートコストを削減したいお客様に適しています。Cluster Modeは Amazon EKS を活用し、イベント駆動型のオートスケーリング、OpenTelemetry ベースの可観測性、AWS Secrets Manager 統合、AWS Certificate Manager による HTTPS をサポートしています。

---

## 効果・メリット

- 新機能はAWS Elastic BeanstalkのCluster Modeであり、共有インフラストラクチャ上で複数のアプリケーションを実行および管理できる新しいデプロイメントモードです。
- ソースコードやDockerfile、Amazon ECRのコンテナイメージを提供するだけで、コンテナ化から運用までをElastic Beanstalkが処理します。
- このアップデートは、複数のアプリケーションを運用しコンピュートコストを削減したいお客様に適しています。
- Cluster Modeは Amazon EKS を活用し、イベント駆動型のオートスケーリング、OpenTelemetry ベースの可観測性、AWS Secrets Manager 統合、AWS Certificate Manager による HTTPS をサポートしています。

---

## ユースケース

新機能はAWS Elastic BeanstalkのCluster Modeであり、共有インフラストラクチャ上で複数のアプリケーションを実行および管理できる新しいデプロイメントモードです。ソースコードやDockerfile、Amazon ECRのコンテナイメージを提供するだけで、コンテナ化から運用までをElastic Beanstalkが処理します。このアップデートは、複数のアプリケーションを運用しコンピュートコストを削減したいお客様に適しています。Cluster Modeは Amazon EKS を活用し、イベント駆動型のオートスケーリング、OpenTelemetry ベースの可観測性、AW

---

## まとめ

- AWS Elastic Beanstalk introduces Cluster Mode to run multiple applications on shared infrastructure について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/elastic-beanstalk-cluster-mode/)

### 関連情報

- [AWS Elastic Beanstalk release notes - AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/relnotes/relnotes.html)
- [Release: Elastic Beanstalk Amazon Linux 2023 platform updates on September 10, 2026](https://docs.aws.amazon.com/elasticbeanstalk/latest/relnotes/release-2026-09-10-al2023.html)