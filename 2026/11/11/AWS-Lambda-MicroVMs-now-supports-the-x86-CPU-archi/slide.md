---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda MicroVMs が x86 CPU アーキテクチャのサポートを開始

AWS Lambda MicroVMs now supports the x86 CPU architecture

**What's New** | 2026-11-11T18:00:00

---

## 概要

- AWS Lambda MicroVMs が新たに x86 CPU アーキテクチャをサポートし、既存の x86 アプリケーション、ツール、ソフトウェア依存関係を再コンパイルや移植なしで実行できるようになりました。
- MicroVM イメージ作成時に x86 と Arm（AWS Graviton）を選択でき、各ユーザーまたはジョブに対してワークロードが使用するアーキテクチャ上で分離された MicroVM を提供します。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda MicroVMs now supports the x86 CPU architecture - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture)

- **MicroVM images - AWS Lambda**
  [詳細](https://docs.aws.amazon.com/lambda/latest/dg/microvms-images.html)

- **AWS Lambda MicroVMs Explained**
  [詳細](https://www.youtube.com/watch?v=r0UfGwJ7Pkk)

---

## 変更内容・新機能

AWS Lambda MicroVMs が x86 CPU アーキテクチャをサポートするようになりました。既存の x86 アプリケーション、ツール、およびソフトウェア依存関係を再コンパイルや移植なしで実行できます。MicroVM イメージ作成時に x86 と Arm（AWS Graviton）を選択できるようになりました。Lambda MicroVMs は、VM レベルの分離、ほぼ瞬時の起動・再開、状態保持を提供するサーバーレスコンピュートプリミティブであり、AI コーディングアシスタント、CI/CD ランナー、インタラクティブ開発環境、脆弱性スキャナーなどのアプリケーションでユーザーコードや AI 生成コードを実行するために使用されます。今回の発表により、x86 ベースのワークロードをそのまま Lambda MicroVMs 上で実行できます。Arm で動作するワークロードは、引き続きデフォルトの CPU アーキテクチャである AWS Graviton プロセッサを利用できます。x86 ワークロードの構築を開始するには、Dockerfile から MicroVM イメージを作成する際

---

## まとめ

- AWS Lambda MicroVMs now supports the x86 CPU architecture について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture/)

### 関連情報

- [AWS Lambda MicroVMs now supports the x86 CPU architecture - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture)
- [MicroVM images - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/microvms-images.html)
- [AWS Lambda MicroVMs Explained](https://www.youtube.com/watch?v=r0UfGwJ7Pkk)
- [Serverless ICYMI Q3 2026](https://aws.amazon.com/blogs/compute/serverless-icymi-q3-2026)
- [AWS Lambda MicroVMs: An Honest Guide to Pricing and Tradeoffs](https://medium.com/@PedalsUp/aws-lambda-microvms-an-honest-guide-to-pricing-and-tradeoffs-b5cbb48cd307)