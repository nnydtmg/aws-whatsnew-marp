---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCoreの次世代ランタイムがデフォルトに

The next generation AgentCore runtime is now the default

**What's New** | 2026-11-12T05:00:00

---

## 概要

- Amazon Bedrock AgentCoreの次世代ランタイムが複数リージョンでデフォルトとなり、セッションの高速起動とアイドル時ゼロスケールを実現します。
- 重量作業やマルチターンエージェントを運用するお客様にとって、性能向上と最大68パーセントの課金メモリ削減が期待できます。

---

## 前提・背景

### これまでの課題

本日より、Amazon Bedrock AgentCoreの新規ランタイムでは次世代ランタイムがデフォルトとなります。次世代ランタイムは初期化済みエージェントのスナップショットから各セッションを復元し、作業に応じてコンピュートとメモリをスケールし、アイドル時はゼロまでスケールします。各セッションはハードウェア分離されたFirecrackerマイクロVMで動作し、最大8 vCPUおよび32 GBメモリ、最大10 GBのコンテナイメージをサポートします。2 GBイメージではセッション起動がP75で2

---

### 関連する最近の動向

- **The next generation AgentCore runtime is now the default - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-...

---

## 変更内容・新機能

本日より、Amazon Bedrock AgentCoreの新規ランタイムでは次世代ランタイムがデフォルトとなります。次世代ランタイムは初期化済みエージェントのスナップショットから各セッションを復元し、作業に応じてコンピュートとメモリをスケールし、アイドル時はゼロまでスケールします。各セッションはハードウェア分離されたFirecrackerマイクロVMで動作し、最大8 vCPUおよび32 GBメモリ、最大10 GBのコンテナイメージをサポートします。2 GBイメージではセッション起動がP75で2秒未満となり、従来の29.7秒から短縮されました。マルチターンエージェントではセッションあたり最大68パーセントの課金メモリ削減が見込めます。既存ランタイムは移行まで現行版のままで、platformVersionをV2に設定すると移行できます。新規ランタイムを現行版のまま使う場合はplatformVersionをV1に設定します。本更新は、大規模コードベースのコンパイルやブラウザ操作、ローカルモデル読み込みなどの重量作業を行うお客様に適しています。セッションの高速起動と課金メモリ削減を求めるマル

---

## 効果・メリット

- 本日より、Amazon Bedrock AgentCoreの新規ランタイムでは次世代ランタイムがデフォルトとなります。
- 次世代ランタイムは初期化済みエージェントのスナップショットから各セッションを復元し、作業に応じてコンピュートとメモリをスケールし、アイドル時はゼロまでスケールします。
- 各セッションはハードウェア分離されたFirecrackerマイクロVMで動作し、最大8 vCPUおよび32 GBメモリ、最大10 GBのコンテナイメージをサポートします。
- 2 GBイメージではセッション起動がP75で2秒未満となり、従来の29.7秒から短縮されました。
- マルチターンエージェントではセッションあたり最大68パーセントの課金メモリ削減が見込めます。

---

## まとめ

- The next generation AgentCore runtime is now the default について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/)

### 関連情報

- [The next generation AgentCore runtime is now the default - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/)
- [The new AgentCore Runtime is now available in Amazon Bedrock AgentCore - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/new-agentcore-runtime-generally-available)
- [The new AgentCore runtime: Elastic, optimized, and consistently fast starts](https://aws.amazon.com/blogs/machine-learning/the-new-agentcore-runtime-elastic-optimized-and-consistently-fast-starts)
- [Release notes for Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html)
- [Deploy AWS Bedrock AgentCore: 12-Step Tutorial [2026]](https://shattered.io/deploy-aws-bedrock-agentcore-agent-2026)