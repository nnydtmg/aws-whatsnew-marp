---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda Managed Instances が GPU インスタンスをサポート

AWS Lambda adds support for GPU instances on Lambda Managed Instances

**What's New** | 2026-11-18T18:00:00

---

## 概要

- AWS Lambdaは、Lambda Managed Instances上でGPU加速Event Functionsをサポートし、ドライバー管理なしでAI推論などのGPUワークロードを実行できるようになりました。
- 本機能は、サーバーレスでGPU処理を迅速に導入したいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Lambda in 2026: Durable Functions and Managed Instances Explained**
  [詳細](https://builder.aws.com/content/3Khau5gTSwgQtIvpLKuytKkDkg2/lambda-in-2026-durable-functions-and-managed-instances-explained)

- **What you need to know about Lambda Managed Instances**
  [詳細](https://theburningmonk.com/2025/12/what-you-need-to-know-about-lambda-managed-instances)

- **Lambda Managed Inst...

---

## 変更内容・新機能

AWS Lambda now supports GPU-accelerated Event Functions on Lambda Managed Instances using EC2 G-series instances. You can now run GPU-accelerated workloads including AI inference, media processing, 3D rendering, scientific computing, and financial simulations on Lambda without managing GPU drivers, frameworks, or scaling. Lambda runs multiple invocations concurrently in each execution environment and scales responsively based on GPU utilization, CPU utilization, and concurrency to keep your GPUs

---

## 効果・メリット

- AWS Lambda now supports GPU-accelerated Event Functions on Lambda Managed Instances using EC2 G-series instances. You can now run GPU-accelerated workloads including AI inference, media processing, 3D rendering, scientific computing, and financial simulations on Lambda without managing GPU drivers, frameworks, or scaling. Lambda runs multiple invocations concurrently in each execution environmen

---

## ユースケース

AWS Lambda now supports GPU-accelerated Event Functions on Lambda Managed Instances using EC2 G-series instances. You can now run GPU-accelerated workloads including AI inference, media processing, 3D rendering, scientific computing, and financial simulations on Lambda without managing GPU drivers, 

---

## まとめ

- AWS Lambda adds support for GPU instances on Lambda Managed Instances について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-gpu-managed-instances/)

### 関連情報

- [Lambda in 2026: Durable Functions and Managed Instances Explained](https://builder.aws.com/content/3Khau5gTSwgQtIvpLKuytKkDkg2/lambda-in-2026-durable-functions-and-managed-instances-explained)
- [What you need to know about Lambda Managed Instances](https://theburningmonk.com/2025/12/what-you-need-to-know-about-lambda-managed-instances)
- [Lambda Managed Instances - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances.html)