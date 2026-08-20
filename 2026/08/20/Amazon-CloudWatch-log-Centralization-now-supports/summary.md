# Amazon CloudWatch log Centralization でロググループタグの伝播がサポート開始

Amazon CloudWatch log Centralization now supports log group tag propagation

**カテゴリ:** What's New
**公開日:** 2026-08-19T21:06:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-centralization-tag-propogation/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch log Centralization now supports log group tag propagation」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Centralizationが新たにロググループタグ伝播機能をサポートするようになり、ソースアカウントのタグを宛先ロググループに自動的にコピーして同期できるようになりました。これにより、プラットフォームチームはセントラライズされたログに対してコスト管理、アクセス制御、コンプライアンス追跡をより効果的に実施することが可能になります。

## このアップデートで何が変わったか

- タグ伝播機能は、CloudWatch Centralizationが利用可能なすべてのAWSリージョンで利用可能です。

## 詳細

- Amazon CloudWatch Centralizationが、ソースアカウントのロググループタグを宛先ロググループに伝播させる機能をサポートするようになりました。

- この機能により、複数のアカウントとリージョンから1つの宛先アカウントに集約されたログデータに対して、ソースで管理されているコスト、所有権、コンプライアンスタグが適用されます。

- CloudWatch Centralizationは、各ソースロググループのタグを宛先ロググループにコピーし、セントラライゼーションルール設定時に選択されたタグ伝播動作に基づいて同期を保ちます。

- プラットフォームチームは、セントラライズされたロググループ上のApplicationおよびCostCenterタグを保持し、IAM条件でアクセスをスコープし、AWS Cost Explorerでセントラライズされたログ支出をチームごとに報告することができます。

- タグ伝播機能は、CloudWatch Centralizationが利用可能なすべてのAWSリージョンで利用可能です。

- Amazon CloudWatchコンソール、AWS CLI、またはAWS SDKを使用して、セントラライゼーションルールのタグ伝播を有効にすることができます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-centralization-tag-propogation/)
