---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWSがルートユーザーサインインのリージョン耐障害性を強化

AWS improves regional resiliency for root user sign-in

**What's New** | 2026-09-14T19:30:00

---

## 概要

- AWSルートユーザーのサインインがUS East (N. Virginia)、US East (Ohio)、およびUS West (Oregon)で分散処理されるようになり、回復力が向上しました。
- この更新はすべてのAWSアカウントに適用され、CloudTrailの監視をこれらのリージョンに拡張することをお勧めします。

---

## 前提・背景

### 関連する最近の動向

- **AWS improves regional resiliency for root user sign-in - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/root-user-regional-resiliency/)

- **Sign in to the AWS Management Console as the root user - AWS Sign-In**
  [詳細](https://docs.aws.amazon.com/signin/latest/userguide/introduction-to-root-user-sign-in-tutorial.html)

- **AWS Management Console sign-in events -...

---

## 変更内容・新機能

- AWSのルートユーザーサインインがUS East (N. Virginia)、US East (Ohio)、およびUS West (Oregon)の3つのリージョンで提供され、サインイントラフィックがこれらのリージョンに分散される
- AWSは自動的にサポートされたリージョンにルートユーザーサインインをルーティングし、ユーザーがリージョンを選択したりサインイン方法を変更したりする必要はない
- この変更により、US East (N. Virginia) への依存が軽減され、サービス中断時の回復力が向上
- すべてのAWSアカウントで今すぐ利用可能
- CloudTrailのConsoleLoginイベントは、サインインリクエストを処理したリージョンに記録される
- CloudTrailでルートユーザーのサインイン活動を監視している場合は、US East (N. Virginia)、US East (Ohio)、US West (Oregon)をカバーするように監視とアラートを更新する必要がある

---

## 効果・メリット

- - AWSのルートユーザーサインインがUS East (N. Virginia)、US East (Ohio)、およびUS West (Oregon)の3つのリージョンで提供され、サインイントラフィックがこれらのリージョンに分散される
- - AWSは自動的にサポートされたリージョンにルートユーザーサインインをルーティングし、ユーザーがリージョンを選択したりサインイン方法を変更したりする必要はない
- - この変更により、US East (N. Virginia) への依存が軽減され、サービス中断時の回復力が向上
- - すべてのAWSアカウントで今すぐ利用可能
- - CloudTrailのConsoleLoginイベントは、サインインリクエストを処理したリージョンに記録される

---

## まとめ

- AWS improves regional resiliency for root user sign-in について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/root-user-regional-resiliency/)

### 関連情報

- [AWS improves regional resiliency for root user sign-in - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/root-user-regional-resiliency/)
- [Sign in to the AWS Management Console as the root user - AWS Sign-In](https://docs.aws.amazon.com/signin/latest/userguide/introduction-to-root-user-sign-in-tutorial.html)
- [AWS Management Console sign-in events - AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-aws-console-sign-in-events.html)
- [Resilience in AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/disaster-recovery-resiliency.html)