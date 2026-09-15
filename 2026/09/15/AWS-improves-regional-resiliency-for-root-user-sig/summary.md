# AWSがルートユーザーサインインのリージョン耐障害性を強化

AWS improves regional resiliency for root user sign-in

**カテゴリ:** What's New
**公開日:** 2026-09-14T19:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/root-user-regional-resiliency/)

このページでは、AWS What's Newで発表された「AWS improves regional resiliency for root user sign-in」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWSルートユーザーのサインインがUS East (N. Virginia)、US East (Ohio)、およびUS West (Oregon)で分散処理されるようになり、回復力が向上しました。この更新はすべてのAWSアカウントに適用され、CloudTrailの監視をこれらのリージョンに拡張することをお勧めします。

## このアップデートで何が変わったか

- AWSのルートユーザーサインインがUS East (N. Virginia)、US East (Ohio)、およびUS West (Oregon)の3つのリージョンで提供され、サインイントラフィックがこれらのリージョンに分散される
- AWSは自動的にサポートされたリージョンにルートユーザーサインインをルーティングし、ユーザーがリージョンを選択したりサインイン方法を変更したりする必要はない
- この変更により、US East (N. Virginia) への依存が軽減され、サービス中断時の回復力が向上
- すべてのAWSアカウントで今すぐ利用可能
- CloudTrailのConsoleLoginイベントは、サインインリクエストを処理したリージョンに記録される
- CloudTrailでルートユーザーのサインイン活動を監視している場合は、US East (N. Virginia)、US East (Ohio)、US West (Oregon)をカバーするように監視とアラートを更新する必要がある

## 対象ユーザー

- AWSのルートユーザーサインインがUS East (N. Virginia)、US East (Ohio)、およびUS West (Oregon)の3つのリージョンで提供され、サインイントラフィックがこれらのリージョンに分散される
- AWSは自動的にサポートされたリージョンにルートユーザーサインインをルーティングし、ユーザーがリージョンを選択したりサインイン方法を変更したりする必要はない
- この変更により、US East (N. Virginia) への依存が軽減され、サービス中断時の回復力が向上
- すべてのAWSアカウントで今すぐ利用可能
- CloudTrailのConsoleL

## 詳細

- AWSのルートユーザーサインインがUS East (N. Virginia)、US East (Ohio)、およびUS West (Oregon)の3つのリージョンで提供され、サインイントラフィックがこれらのリージョンに分散される
- AWSは自動的にサポートされたリージョンにルートユーザーサインインをルーティングし、ユーザーがリージョンを選択したりサインイン方法を変更したりする必要はない
- この変更により、US East (N. Virginia) への依存が軽減され、サービス中断時の回復力が向上
- すべてのAWSアカウントで今すぐ利用可能
- CloudTrailのConsoleLoginイベントは、サインインリクエストを処理したリージョンに記録される
- CloudTrailでルートユーザーのサインイン活動を監視している場合は、US East (N. Virginia)、US East (Ohio)、US West (Oregon)をカバーするように監視とアラートを更新する必要がある

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/root-user-regional-resiliency/)