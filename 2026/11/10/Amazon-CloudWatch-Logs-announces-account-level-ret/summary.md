# Amazon CloudWatch Logsがアカウントレベル保持ポリシーを発表

Amazon CloudWatch Logs announces account-level retention policies

**カテゴリ:** What's New
**公開日:** 2026-11-09T22:15:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Logs announces account-level retention policies」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Logsはアカウントレベルの保持ポリシーを新たに提供します。プラットフォームチームおよびセキュリティチームは、単一のポリシーでログデータの保持期間を管理できます。アカウント内のすべてのロググループ、またはプレフィックスで始まるロググループに対して保持期間を一括設定できます。

## このアップデートで何が変わったか

主な機能:
- アカウント内のすべてのロググループ、または /aws/lambda のようなプレフィックスで始まるロググループにポリシーを適用可能
- 既存ロググループへの適用、または新規ロググループのみへの適用を選択可能
- 複数のポリシーが一致する場合は、最も長い保持期間が適用される
- 例: プラットフォームチームがアカウント全体に90日のベースラインを設定し、/security で始まるロググループには監査要件を1年ポリシーを設定
- PutAccountPolicy APIに新しい RETENTION_POLICY タイプを追加
- ドライランモードでポリシー変更の影響を事前確認可能
- アカウントおよびリージョンごとに最大20件のポリシーを作成・管理可能
- AWS Management Console、AWS CLI、AWS SDKsで操作可能

利用可能領域: 中東（バーレーン）および中東（UAE）を除くすべての商用AWSリージョン
追加費用: なし

## 詳細

Amazon CloudWatch Logsがアカウントレベル保持ポリシーをサポートしました。単一のポリシーで、AWSアカウント内のすべてまたは一部のロググループに対してログデータの保持期間を設定できます。プラットフォームチームおよびセキュリティチームが、各ロググループを保持基準に合わせることができます。

主な機能:
- アカウント内のすべてのロググループ、または /aws/lambda のようなプレフィックスで始まるロググループにポリシーを適用可能
- 既存ロググループへの適用、または新規ロググループのみへの適用を選択可能
- 複数のポリシーが一致する場合は、最も長い保持期間が適用される
- 例: プラットフォームチームがアカウント全体に90日のベースラインを設定し、/security で始まるロググループには監査要件を1年ポリシーを設定
- PutAccountPolicy APIに新しい RETENTION_POLICY タイプを追加
- ドライランモードでポリシー変更の影響を事前確認可能
- アカウントおよびリージョンごとに最大20件のポリシーを作成・管理可能
- AWS Management Console、AWS CLI、AWS SDKsで操作可能

利用可能領域: 中東（バーレーン）および中東（UAE）を除くすべての商用AWSリージョン
追加費用: なし

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/)