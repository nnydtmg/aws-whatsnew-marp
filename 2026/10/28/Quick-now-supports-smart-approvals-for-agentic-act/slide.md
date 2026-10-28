---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Quickがエージェントアクションのスマート承認をサポート

Quick now supports smart approvals for agentic actions

**What's New** | 2026-10-28T18:28:00

---

## 概要

- Amazon Quickにスマート承認が追加され、定型アクションは自動承認しつつ重要な操作のみ利用者確認を残します。
- エージェント操作の承認疲れを抑えたい利用者と管理者に適した機能です。

---

## 前提・背景

### 関連する最近の動向

- **Building with Amazon Quick: A Product Builder's Guide to AWS's Agentic AI Platform**
  [詳細](https://builder.aws.com/content/3GYxQQ4lhMKlcikLWNEzbYGHmpZ/building-with-amazon-quick-a-product-builders-guide-to-awss-agentic-ai-platform)

- **What Is Amazon Quick Suite? The Complete Guide for Enterprise Teams in 2026**
  [詳細](https://www.novelvista.com/blogs/cloud-and-aws/what-is-ama...

---

## 変更内容・新機能

- 新機能はAmazon Quickのスマート承認であり、不要な承認プロンプトを減らしつつ重要な操作の人による監督を維持するレビュー層です。
- 分類器がユーザーの依頼に照らして適格な各アクションを評価し、定型操作は自動承認し、影響の大きい操作は利用者確認へ回します。
- 既存ポリシーが常に優先され、「毎回確認」設定のアクションのみが対象となり、拒否は維持され新たなアクセスは付与されません。
- 本アップデートは、メール送信、レコード更新、チケット作成などをエージェントに任せて承認疲れを軽減したいAmazon Quick利用者に適しています。
- 管理者はカスタム権限で利用対象を制御でき、利用者は会話やスケジュール実行でオフにできます。
- 自動承認は審査した該当のアクションのみを対象とし、審査失敗やタイムアウト時は利用者確認へ回されます。
- 組織外へのコンテンツ送信、権限変更、コンテンツ削除、支払い、依頼範囲を超える操作は利用者確認へ回されます。
- AWS CloudTrailがスマート承認の審査と設定変更を記録します。
- Amazon Quickのエージェント機能が対応してい

---

## 効果・メリット

- Amazon Quick now supports smart approvals, a review layer that reduces unnecessary approval prompts while preserving human oversight of the actions that matter most. As agents take more actions on a user's behalf, such as sending email, updating records, and creating tickets, asking a person to approve every step leads to approval fatigue and weaker oversight over time. With smart approvals, a s

---

## ユースケース

Amazon Quick now supports smart approvals, a review layer that reduces unnecessary approval prompts while preserving human oversight of the actions that matter most. As agents take more actions on a user's behalf, such as sending email, updating records, and creating tickets, asking a person to appr

---

## まとめ

- Quick now supports smart approvals for agentic actions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/quick-smart-approvals-agentic-actions/)

### 関連情報

- [Building with Amazon Quick: A Product Builder's Guide to AWS's Agentic AI Platform](https://builder.aws.com/content/3GYxQQ4lhMKlcikLWNEzbYGHmpZ/building-with-amazon-quick-a-product-builders-guide-to-awss-agentic-ai-platform)
- [What Is Amazon Quick Suite? The Complete Guide for Enterprise Teams in 2026](https://www.novelvista.com/blogs/cloud-and-aws/what-is-amazon-quick-suite-2026)
- [Amazon launches Agentic AI Quick Suite to let you automate tasks at work](https://www.aboutamazon.com/news/aws/amazon-quick-suite-agentic-ai-aws-work)
- [Announcing Amazon Quick Suite: your agentic teammate for answering questions and taking action](https://aws.amazon.com/blogs/aws/reimagine-the-way-you-work-with-ai-agents-in-amazon-quick-suite)
- [Quick now supports smart approvals for agentic actions](https://aws.amazon.com/about-aws/whats-new/2026/10/quick-smart-approvals-agentic-actions/)