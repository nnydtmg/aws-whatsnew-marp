# Amazon Bedrock AgentCoreランタイムでNested Virtualizationが利用可能に

AgentCore runtime instances now support Nested Virtualization

**カテゴリ:** What's New
**公開日:** 2026-11-19T10:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-nested-virtualization/)

このページでは、AWS What's Newで発表された「AgentCore runtime instances now support Nested Virtualization」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCoreのランタイムインスタンスがネストされた仮想化をサポートし、エージェントがセッション内で仮想マシンやエミュレータを実行できるようになりました。本機能はモバイルエミュレータや仮想マシンサンドボックスを必要とするお客様に適しております。

## このアップデートで何が変わったか

- 新機能はAmazon Bedrock AgentCoreランタイムインスタンスのネストされた仮想化のサポートです。
- エージェントはKVMによりセッション内で仮想マシンやエミュレータを実行できます。
- Linuxキャパシティプロバイダー作成時に本機能を有効化できます。
- 対応インスタンスはC7i、C8i、M7i、M8i、R7i、R8iファミリーです。
- 本アップデートは仮想マシン内で動作するツールに依存するエージェントをご利用のお客様に適しております。
- モバイルエミュレータや仮想マシンサンドボックスをご利用のお客様に適しております。

## 対象ユーザー

You turn on nested virtualization when you create a Linux capacity provider, and agents in every session on its instances can use KVM. For example, your agents can run Android emulators to build and test mobile apps, or start lightweight virtual machines to isolate the code that they run. Nested vir

## 活用シーン

Amazon Bedrock AgentCore runtime instances now support nested virtualization, so your agents can run their own virtual machines and emulators inside a session with Kernel-based Virtual Machine (KVM). Runtime instances run your agents on Amazon EC2 instances while AgentCore handles provisioning, patc

## 詳細

Amazon Bedrock AgentCore runtime instances now support nested virtualization, so your agents can run their own virtual machines and emulators inside a session with Kernel-based Virtual Machine (KVM). Runtime instances run your agents on Amazon EC2 instances while AgentCore handles provisioning, patching, scaling, and lifecycle management. Nested virtualization serves agents that rely on tools that run in a virtual machine, such as mobile emulators or virtual machine sandboxes.

You turn on nested virtualization when you create a Linux capacity provider, and agents in every session on its instances can use KVM. For example, your agents can run Android emulators to build and test mobile apps, or start lightweight virtual machines to isolate the code that they run. Nested virtualization works on supported Intel-based instance types, including the C7i, C8i, M7i, M8i, R7i, and R8i families.

Nested virtualization is available on supported instance types in all AWS Regions where AgentCore runtime instances are available.

- 新機能はAmazon Bedrock AgentCoreランタイムインスタンスのネストされた仮想化のサポートです。
- エージェントはKVMによりセッション内で仮想マシンやエミュレータを実行できます。
- Linuxキャパシティプロバイダー作成時に本機能を有効化できます。
- 対応インスタンスはC7i、C8i、M7i、M8i、R7i、R8iファミリーです。
- 本アップデートは仮想マシン内で動作するツールに依存するエージェントをご利用のお客様に適しております。
- モバイルエミュレータや仮想マシンサンドボックスをご利用のお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-nested-virtualization/)