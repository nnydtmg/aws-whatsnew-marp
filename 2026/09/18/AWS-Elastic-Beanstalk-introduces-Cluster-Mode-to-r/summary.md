# AWS Elastic Beanstalk のCluster Modeで複数アプリケーションを共有インフラで実行可能に

AWS Elastic Beanstalk introduces Cluster Mode to run multiple applications on shared infrastructure

**カテゴリ:** What's New
**公開日:** 2026-09-17T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/elastic-beanstalk-cluster-mode/)

このページでは、AWS What's Newで発表された「AWS Elastic Beanstalk introduces Cluster Mode to run multiple applications on shared infrastructure」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Elastic Beanstalkに複数アプリケーションを共有インフラ上で実行できるCluster Modeが追加されました。本機能はアプリケーション数の増加に伴うコスト最適化を図りたいお客様に適しております。

## このアップデートで何が変わったか

新機能はAWS Elastic BeanstalkのCluster Modeであり、共有インフラストラクチャ上で複数のアプリケーションを実行および管理できる新しいデプロイメントモードです。ソースコードやDockerfile、Amazon ECRのコンテナイメージを提供するだけで、コンテナ化から運用までをElastic Beanstalkが処理します。このアップデートは、複数のアプリケーションを運用しコンピュートコストを削減したいお客様に適しています。Cluster Modeは Amazon EKS を活用し、イベント駆動型のオートスケーリング、OpenTelemetry ベースの可観測性、AWS Secrets Manager 統合、AWS Certificate Manager による HTTPS をサポートしています。

## 活用シーン

新機能はAWS Elastic BeanstalkのCluster Modeであり、共有インフラストラクチャ上で複数のアプリケーションを実行および管理できる新しいデプロイメントモードです。ソースコードやDockerfile、Amazon ECRのコンテナイメージを提供するだけで、コンテナ化から運用までをElastic Beanstalkが処理します。このアップデートは、複数のアプリケーションを運用しコンピュートコストを削減したいお客様に適しています。Cluster Modeは Amazon EKS を活用し、イベント駆動型のオートスケーリング、OpenTelemetry ベースの可観測性、AW

## 詳細

新機能はAWS Elastic BeanstalkのCluster Modeであり、共有インフラストラクチャ上で複数のアプリケーションを実行および管理できる新しいデプロイメントモードです。ソースコードやDockerfile、Amazon ECRのコンテナイメージを提供するだけで、コンテナ化から運用までをElastic Beanstalkが処理します。このアップデートは、複数のアプリケーションを運用しコンピュートコストを削減したいお客様に適しています。Cluster Modeは Amazon EKS を活用し、イベント駆動型のオートスケーリング、OpenTelemetry ベースの可観測性、AWS Secrets Manager 統合、AWS Certificate Manager による HTTPS をサポートしています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/elastic-beanstalk-cluster-mode/)