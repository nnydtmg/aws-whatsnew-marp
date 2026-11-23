# AWS DevOps Agent に品質改善ダッシュボードとツールが追加

AWS DevOps Agent adds quality improvement dashboards and tools

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-devops-agent-quality-dashboards/)

このページでは、AWS What's Newで発表された「AWS DevOps Agent adds quality improvement dashboards and tools」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS DevOps Agentに品質ダッシュボードとリプレイ機能が追加され、インスタンスの品質を測定し改善できるようになりました。品質とレイテンシーのダッシュボードで調査の根本原因発見率や所要時間を把握でき、グレーダーエージェントが調査を評価し人間評価と比較できます。リプレイ機能でスキルやメモリの変更をテストできます。

## このアップデートで何が変わったか

AWS DevOps Agentに品質ダッシュボードとリプレイ機能が追加され、インスタンスの品質を測定し改善できるようになりました。品質とレイテンシーのダッシュボードで調査の根本原因発見率や所要時間を把握でき、グレーダーエージェントが調査を評価し人間評価と比較できます。リプレイ機能でスキルやメモリの変更をテストできます。

## 対象ユーザー

AWS DevOps Agent now gives you dashboards and tools to enable you to understand and improve the quality of your AWS DevOps Agent instances in your environments. With this launch AWS DevOps Agent now helps you measure the quality of its work. New quality and latency dashboards track the results. For 

## 詳細

AWS DevOps Agent now gives you dashboards and tools to enable you to understand and improve the quality of your AWS DevOps Agent instances in your environments. With this launch AWS DevOps Agent now helps you measure the quality of its work. New quality and latency dashboards track the results. For investigations, you see how often AWS DevOps Agent finds the root cause, how long it takes, and where it lacked context. For mitigations, you see the time to the first plan and how your operators rated each plan. Trend views show whether quality improves over time. A new grader agent rates each investigation. Its dashboard compares those ratings with your operators' ratings, so you can focus on the cases where they disagree. Both grader agent and human ratings become memories that improve the quality of future task runs. Once you understand the quality and performance of your instance of AWS DevOps Agent, you can improve it by configuring or modifying its skills, memories, and tools. To ensure that changes improve your instance, AWS DevOps Agent now provides a replay capability that lets you test changes before you rely on them. You can replay a past investigation to see whether a change to a skill, memory, or instruction makes AWS DevOps better. Start a replay from any past investigation, and note what you changed. The replay uses your current configuration on live data, without changing anything. When it finishes, compare it side by side with the original: grader score, duration, root cause, and the tools and skills each run used. If the comparison shows a gap, adjust your change and replay again.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-devops-agent-quality-dashboards/)