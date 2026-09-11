---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS DevOps AgentがSlackとの双方向通信に対応

AWS DevOps Agent adds support for bidirectional Slack communication

**What's New** | 2026-09-11T15:00:00

---

## 概要

- AWS DevOps AgentがSlackとの双方向通信に対応し、エンジニアはSlack内で本番運用の調査を完結できるようになりました。
- 本機能は、オンコールエンジニアおよびDevOpsチームの運用効率向上に寄与いたします。

---

## 前提・背景

### 関連する最近の動向

- **AWS DevOps Agent adds support for bidirectional Slack communication - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-devops-agent-bidirectional-slack-communication)

- **Connecting Slack - AWS DevOps Agent User Guide**
  [詳細](https://docs.aws.amazon.com/devopsagent/latest/userguide/connecting-to-ticketing-and-chat-connecting-slack.html#setting-up-bidirection...

---

## 変更内容・新機能

- 新機能といたしましては、AWS DevOps Agentが双方向のSlack通信をサポートするようになったことです。
- エンジニアはSlack内で本番運用の調査ライフサイクル全体を管理できるようになりました。
- Slackの接続済みプライベートチャンネルでエージェントをメンションすることにより、調査を開始および誘導できます。
- 本アップデートは、重大インシデント時に分断されたワークフローに直面していたオンコールエンジニアおよびDevOpsチームに適しております。
- AWS、マルチクラウド、オンプレミス環境にまたがる本番運用の調査ライフサイクル全体をSlack内で完結可能。
- 接続済みSlackプライベートチャンネルでAWS DevOps Agentを@メンションするだけで調査を開始・誘導できる。
- チームが提供したコンテキスト、エージェントの調査結果、推奨アクションが1つのスレッドに集約される。
- AWSリソース、システムメトリクス、アラーム状態、デプロイ履歴、インシデントパターンについて質問可能。
- AWS DevOps Agentが対応しているすべての商用AWS

---

## 効果・メリット

- AWS DevOps AgentがSlackとの双方向通信に対応し、エンジニアはSlack内で本番運用の調査を完結できるようになりました。
- 本機能は、オンコールエンジニアおよびDevOpsチームの運用効率向上に寄与いたします。

---

## まとめ

- AWS DevOps Agent adds support for bidirectional Slack communication について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-devops-agent-bidirectional-slack-communication)

### 関連情報

- [AWS DevOps Agent adds support for bidirectional Slack communication - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-devops-agent-bidirectional-slack-communication)
- [Connecting Slack - AWS DevOps Agent User Guide](https://docs.aws.amazon.com/devopsagent/latest/userguide/connecting-to-ticketing-and-chat-connecting-slack.html#setting-up-bidirectional-communication-in-slack)
- [AWS DevOps Agent release history](https://docs.aws.amazon.com/devopsagent/latest/userguide/whats-new.html)
- [Supported Regions for AWS DevOps Agent](https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-supported-regions.html)