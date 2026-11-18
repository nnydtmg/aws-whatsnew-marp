# AWS Lambda Managed Instances が GPU インスタンスをサポート

AWS Lambda adds support for GPU instances on Lambda Managed Instances

**カテゴリ:** What's New
**公開日:** 2026-11-18T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-gpu-managed-instances/)

このページでは、AWS What's Newで発表された「AWS Lambda adds support for GPU instances on Lambda Managed Instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambdaは、Lambda Managed Instances上でGPU加速Event Functionsをサポートし、ドライバー管理なしでAI推論などのGPUワークロードを実行できるようになりました。本機能は、サーバーレスでGPU処理を迅速に導入したいお客様に適しております。

## このアップデートで何が変わったか

AWS Lambda now supports GPU-accelerated Event Functions on Lambda Managed Instances using EC2 G-series instances. You can now run GPU-accelerated workloads including AI inference, media processing, 3D rendering, scientific computing, and financial simulations on Lambda without managing GPU drivers, frameworks, or scaling. Lambda runs multiple invocations concurrently in each execution environment and scales responsively based on GPU utilization, CPU utilization, and concurrency to keep your GPUs

## 活用シーン

AWS Lambda now supports GPU-accelerated Event Functions on Lambda Managed Instances using EC2 G-series instances. You can now run GPU-accelerated workloads including AI inference, media processing, 3D rendering, scientific computing, and financial simulations on Lambda without managing GPU drivers, 

## 詳細

AWS Lambda now supports GPU-accelerated Event Functions on Lambda Managed Instances using EC2 G-series instances. You can now run GPU-accelerated workloads including AI inference, media processing, 3D rendering, scientific computing, and financial simulations on Lambda without managing GPU drivers, frameworks, or scaling. Lambda runs multiple invocations concurrently in each execution environment and scales responsively based on GPU utilization, CPU utilization, and concurrency to keep your GPUs busy and reduce costs. GPU-accelerated functions integrate with the same 200+ AWS event sources as other Event Functions. Lambda provides GPU base images preconfigured with frameworks such as vLLM, SGLang, and PyTorch. Container images and NVMe ephemeral storage of up to 32 GB are supported. SOCI lazy loading and S3 streaming reduce startup time. Multi-generation G-series fallback is available. Pricing: EC2 On-Demand (Savings Plans and Reserved Instances apply) plus 9.75% Lambda management fee and $0.20 per million requests. Available in all AWS Commercial Regions where Lambda Managed Instances and EC2 G-series instances are available.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-gpu-managed-instances/)