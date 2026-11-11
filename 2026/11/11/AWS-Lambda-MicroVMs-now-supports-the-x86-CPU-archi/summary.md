# AWS Lambda MicroVMs が x86 CPU アーキテクチャのサポートを開始

AWS Lambda MicroVMs now supports the x86 CPU architecture

**カテゴリ:** What's New
**公開日:** 2026-11-11T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture/)

このページでは、AWS What's Newで発表された「AWS Lambda MicroVMs now supports the x86 CPU architecture」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda MicroVMs が新たに x86 CPU アーキテクチャをサポートし、既存の x86 アプリケーション、ツール、ソフトウェア依存関係を再コンパイルや移植なしで実行できるようになりました。MicroVM イメージ作成時に x86 と Arm（AWS Graviton）を選択でき、各ユーザーまたはジョブに対してワークロードが使用するアーキテクチャ上で分離された MicroVM を提供します。

## このアップデートで何が変わったか

AWS Lambda MicroVMs が x86 CPU アーキテクチャをサポートするようになりました。既存の x86 アプリケーション、ツール、およびソフトウェア依存関係を再コンパイルや移植なしで実行できます。MicroVM イメージ作成時に x86 と Arm（AWS Graviton）を選択できるようになりました。Lambda MicroVMs は、VM レベルの分離、ほぼ瞬時の起動・再開、状態保持を提供するサーバーレスコンピュートプリミティブであり、AI コーディングアシスタント、CI/CD ランナー、インタラクティブ開発環境、脆弱性スキャナーなどのアプリケーションでユーザーコードや AI 生成コードを実行するために使用されます。今回の発表により、x86 ベースのワークロードをそのまま Lambda MicroVMs 上で実行できます。Arm で動作するワークロードは、引き続きデフォルトの CPU アーキテクチャである AWS Graviton プロセッサを利用できます。x86 ワークロードの構築を開始するには、Dockerfile から MicroVM イメージを作成する際

## 対象ユーザー

AWS Lambda MicroVMs が x86 CPU アーキテクチャをサポートするようになりました。既存の x86 アプリケーション、ツール、およびソフトウェア依存関係を再コンパイルや移植なしで実行できます。MicroVM イメージ作成時に x86 と Arm（AWS Graviton）を選択できるようになりました。Lambda MicroVMs は、VM レベルの分離、ほぼ瞬時の起動・再開、状態保持を提供するサーバーレスコンピュートプリミティブであり、AI コーディングアシスタント、CI/CD ランナー、インタラクティブ開発環境、脆弱性スキャナーなどのアプリケーションでユーザーコードや

## 詳細

AWS Lambda MicroVMs が x86 CPU アーキテクチャをサポートするようになりました。既存の x86 アプリケーション、ツール、およびソフトウェア依存関係を再コンパイルや移植なしで実行できます。MicroVM イメージ作成時に x86 と Arm（AWS Graviton）を選択できるようになりました。Lambda MicroVMs は、VM レベルの分離、ほぼ瞬時の起動・再開、状態保持を提供するサーバーレスコンピュートプリミティブであり、AI コーディングアシスタント、CI/CD ランナー、インタラクティブ開発環境、脆弱性スキャナーなどのアプリケーションでユーザーコードや AI 生成コードを実行するために使用されます。今回の発表により、x86 ベースのワークロードをそのまま Lambda MicroVMs 上で実行できます。Arm で動作するワークロードは、引き続きデフォルトの CPU アーキテクチャである AWS Graviton プロセッサを利用できます。x86 ワークロードの構築を開始するには、Dockerfile から MicroVM イメージを作成する際に x86 アーキテクチャを選択し、そのイメージから MicroVM を起動します。AWS Lambda コンソール、AWS CloudFormation、AWS CDK、または Agent Toolkit for AWS を使用したエージェント開発ツールから利用できます。x86 CPU アーキテクチャのサポートは、Lambda MicroVMs が利用可能なすべての AWS リージョンで利用できます（ただし、アジアパシフィック（香港）、アジアパシフィック（マレーシア）、アジアパシフィック（タイ）、欧州（スペイン）を除く）。x86_64 はベースイメージバージョン 3 からサポートされます。ARM64 がデフォルトです。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture/)