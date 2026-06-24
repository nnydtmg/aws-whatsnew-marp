# Amazon EC2 がAMI ウォーターマークで強化されたAMIガバナンスを実現

Amazon EC2 announces AMI Watermarks for improved AMI governance

**カテゴリ:** What's New
**公開日:** 2026-06-24T20:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/ec2-image-watermarks-allowed-images)

このページでは、AWS What's Newで発表された「Amazon EC2 announces AMI Watermarks for improved AMI governance」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EC2のAMI Watermarks機能により、プライベートAMIにカスタム識別子を埋め込むことができ、リージョン間のコピーや派生AMI作成時にも自動的に継承されるため、AMIの出所追跡とガバナンスポリシーの実施が容易になります。この機能は、複数のAWSアカウント間でAMIを管理し、セキュリティとコンプライアンスを強化したい組織に特に適しており、すべてのリージョンで追加費用なく利用できます。

## このアップデートで何が変わったか

- Amazon EC2がAMI Watermarksという新機能を発表しました。これにより、プライベートAMIにカスタム識別子を埋め込むことができます。

- AWS Management Console、AWS CLI、またはSDKを使用してウォーターマークを追加できます。

## 詳細

- Amazon EC2がAMI Watermarksという新機能を発表しました。これにより、プライベートAMIにカスタム識別子を埋め込むことができます。

- ウォーターマークは、リージョン間でのコピーや実行中のインスタンスからの新規AMI作成時に、自動的に派生するすべてのAMIに継承されます。

- ウォーターマークは他のアカウントとAMIを共有する際にも表示されたままになります。

- AMI ID、オーナーID、リージョン、作成タイムスタンプなどのメタデータが含まれており、コピーや新規作成の回数に関わらず永続的な出所追跡が可能です。

- ウォーターマークとAllowed AMIsを組み合わせることで、承認されたウォーターマークを持つAMIのみへのインスタンス起動を制限できます。

- AWS Management Console、AWS CLI、またはSDKを使用してウォーターマークを追加できます。

- EC2 Image Builderを通じてAMI構築パイプラインの一部としてウォーターマークを適用することも可能です。

- すべてのAWSリージョン（AWS China地域およびAWS GovCloud地域を含む）で、すべてのお客様に追加費用なしで利用可能です。

- この機能は、信頼できるAMIの識別、出所の追跡、および組織全体のガバナンスポリシーの実施に役立ちます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/ec2-image-watermarks-allowed-images)