---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Continuum for Penetration Testingがテスト実行前のタスク時間見積もりに対応

AWS Continuum for Penetration Testing now estimates task hours before you run a test

**What's New** | 2026-11-20T08:00:00

---

## 概要

- AWS Continuum for Penetration Testing（旧AWS Security Agent）は、ペネトレーションテスト実行前に課金対象のタスク時間（task hours）を無料で見積もる機能を追加しました。
- 開発者とセキュリティチームが予算計画と使用制限（最大タスク時間上限）の設定を行いやすくなります。
- 以前は実際にテストを実行しなければ所要時間がわからず、予算計画や上限設定が難しかった課題がありました。

---

## 前提・背景

### 関連する最近の動向

- **AWS Continuum Pricing: Task-Hours, Trials and Cost Limits**
  [詳細](https://www.penligent.ai/hackinglabs/aws-continuum-pricing)

- **Pricing and billing - AWS Security Agent (now part of AWS Continuum)**
  [詳細](https://docs.aws.amazon.com/securityagent/latest/userguide/pricing.html)

- **Pricing | AWS Continuum**
  [詳細](https://aws.amazon.com/continuum/pricing)

---

## 変更内容・新機能

AWS Continuum for Penetration Testing（旧AWS Security Agent）は、WebアプリケーションおよびAPIに対してオンデマンドのAI駆動ペネトレーションテストを実行するサービスです。新機能では、テスト実行前にタスク時間を見積もれます。利用方法: ペネトレーションテストを開き、Pentest cost estimateタブを選択して見積もりを依頼します。AWS Continuumがアプリケーションのスコープを短時間で予備分析し、過去のペネトレーションテストの実績を基に、類似アプリケーションが完了するタスク時間と一部が必要とする高い範囲を表示します。見積もりの依頼は無料であり、見積もりはガイドであって見積もり書や上限ではありません。実際のタスク時間は増減する可能性があり、使用量をキャップするのは最大タスク時間上限のみです。本機能はAWS Continuum for Penetration Testingが利用可能なすべてのAWSリージョンで利用できます。価格はタスク時間あたり$50（秒単位計量）。タスク時間はエージェントが推論・動作した累積時

---

## まとめ

- AWS Continuum for Penetration Testing now estimates task hours before you run a test について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/continuum-pentest-cost-estimates/)

### 関連情報

- [AWS Continuum Pricing: Task-Hours, Trials and Cost Limits](https://www.penligent.ai/hackinglabs/aws-continuum-pricing)
- [Pricing and billing - AWS Security Agent (now part of AWS Continuum)](https://docs.aws.amazon.com/securityagent/latest/userguide/pricing.html)
- [Pricing | AWS Continuum](https://aws.amazon.com/continuum/pricing)
- [AWS Security Agent (now Continuum for penetration testing) Best Practices](https://aws.github.io/aws-security-services-best-practices/guides/security-agent)