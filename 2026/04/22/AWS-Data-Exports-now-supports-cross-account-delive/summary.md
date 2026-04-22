# AWS Data Exports now supports cross-account delivery

**カテゴリ:** What's New
**公開日:** 2026-04-14T16:13:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/aws-data-exports-cross-account-delivery-cost/](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-data-exports-cross-account-delivery-cost/)

---

## 要約

AWS Data Exportsの新機能により、FinOpsチームは複数のAWSアカウント間で直接CUR 2.0やFOCusなどのレポートをS3に配信でき、データ複製やストレージコストの削減が実現できます。本機能は、GovCloudと中国リージョンを除く全商用リージョンで利用可能です。

## 詳細

- AWS Data Exportsが、複数のAWSアカウント間でのデータ配信に対応するようになりました。

- Cost and Usage Report 2.0（CUR 2.0）、FOCUS、Cost Optimization Recommendations、Carbon Emissionsレポートなどの標準エクスポートを、認可されたAWSアカウントのAmazon S3バケットに直接送信できるようになりました。

- 複数アカウント間でのデータ複製やストレージの重複コストが不要になります。

- エクスポート作成時に、任意のAWSアカウント内の宛先S3バケットを指定できます。

- 宛先アカウントの所有者がS3バケットポリシーで配信元アカウントを制御するため、両アカウントが明示的にデータフローを承認します。

- FinOpsチームは、管理アカウントから集中分析アカウントへCUR 2.0エクスポートを直接配信でき、カスタム複製プロセスの構築が不要になります。

- 管理アカウントに非管理ワークロードを配置しないというセキュリティベストプラクティスをサポートしています。

- 本機能は、AWS GovCloud（US）リージョンと中国リージョンを除く、すべての商用AWSリージョンで利用可能です。