---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCoreランタイムでNested Virtualizationが利用可能に

AgentCore runtime instances now support Nested Virtualization

**What's New** | 2026-11-19T10:00:00

---

## 概要

- Amazon Bedrock AgentCoreのランタイムインスタンスがネストされた仮想化をサポートし、エージェントがセッション内で仮想マシンやエミュレータを実行できるようになりました。
- 本機能はモバイルエミュレータや仮想マシンサンドボックスを必要とするお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AgentCore runtime instances now support Nested Virtualization - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-nested-virtualization/)

- **AgentCore runtime instances are now generally available - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-bedrock-agentcore-runtime-instances-generally-available)

- **Runtime instances: persist...

---

## 変更内容・新機能

- 新機能はAmazon Bedrock AgentCoreランタイムインスタンスのネストされた仮想化のサポートです。
- エージェントはKVMによりセッション内で仮想マシンやエミュレータを実行できます。
- Linuxキャパシティプロバイダー作成時に本機能を有効化できます。
- 対応インスタンスはC7i、C8i、M7i、M8i、R7i、R8iファミリーです。
- 本アップデートは仮想マシン内で動作するツールに依存するエージェントをご利用のお客様に適しております。
- モバイルエミュレータや仮想マシンサンドボックスをご利用のお客様に適しております。

---

## ユースケース

Amazon Bedrock AgentCore runtime instances now support nested virtualization, so your agents can run their own virtual machines and emulators inside a session with Kernel-based Virtual Machine (KVM). Runtime instances run your agents on Amazon EC2 instances while AgentCore handles provisioning, patc

---

## まとめ

- AgentCore runtime instances now support Nested Virtualization について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-nested-virtualization/)

### 関連情報

- [AgentCore runtime instances now support Nested Virtualization - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-nested-virtualization/)
- [AgentCore runtime instances are now generally available - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-bedrock-agentcore-runtime-instances-generally-available)
- [Runtime instances: persistent compute for production AI agents on Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/aws/runtime-instances-persistent-compute-for-production-ai-agents-on-amazon-bedrock-agentcore)
- [AgentCore Runtime Instances [What It Changes]](https://ustechautomations.com/resources/blog/agentcore-runtime-instances-explained-what-it-changes)
- [Multi Agent Collaboration Gets Persistent Compute in Bedrock AgentCore - InfoQ](https://www.infoq.com/news/2026/08/aws-bedrock-agentcore-runtime)