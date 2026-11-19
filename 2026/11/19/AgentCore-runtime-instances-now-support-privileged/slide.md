---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCoreがランタイムインスタンスの特権モードに対応

AgentCore runtime instances now support privileged mode

**What's New** | 2026-11-18T07:00:00

---

## 概要

- Amazon Bedrock AgentCoreのランタイムインスタンスが特権モードに対応し、システムレベルのソフトウェアのインストールと入れ子コンテナの実行が可能になりました。
- 本更新は、依存サービスやコンパイラを必要とするコーディングエージェントおよびコード近代化エージェントに適しています。

---

## 前提・背景

### 関連する最近の動向

- **AgentCore runtime instances now support privileged mode - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-elevated-privileges/)

- **Security model and permissions for Runtime Instances - Amazon Bedrock AgentCore**
  [詳細](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-instances-security.html)

- **Runtime Instances - Amazon Bedroc...

---

## 変更内容・新機能

- 新機能は、Amazon Bedrock AgentCoreランタイムインスタンスにおける特権モードのサポートです。
- 特権モードでは、エージェントがシステムレベルのソフトウェアをインストールし、入れ子のコンテナを実行できます。
- ランタイムインスタンスはAmazon EC2上でエージェントを実行し、AgentCoreがプロビジョニング、パッチ適用、スケーリング、ライフサイクル管理を担当します。
- 特権モードは、エージェントランタイムの作成時または更新時に有効化できます。
- 特権セッションでは当該エージェントのみが実行され、既存エージェントは標準モードのまま変更されません。
- 本更新は、PostgresやRedisをコンテナで起動して統合テストを行うコーディングエージェントに適しています。
- また、移行に必要なコンパイラやライブラリをインストールするコード近代化エージェントにも適しています。
- Privileged mode is available in all AWS Regions where AgentCore runtime instances are ava

---

## まとめ

- AgentCore runtime instances now support privileged mode について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-elevated-privileges/)

### 関連情報

- [AgentCore runtime instances now support privileged mode - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-elevated-privileges/)
- [Security model and permissions for Runtime Instances - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-instances-security.html)
- [Runtime Instances - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-instances.html)