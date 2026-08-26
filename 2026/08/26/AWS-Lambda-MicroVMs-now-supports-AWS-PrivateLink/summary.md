# AWS Lambda MicroVMs が AWS PrivateLink をサポート

AWS Lambda MicroVMs now supports AWS PrivateLink

**カテゴリ:** What's New
**公開日:** 2026-08-25T16:34:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/lambda-microvms-supports-privatelink)

このページでは、AWS What's Newで発表された「AWS Lambda MicroVMs now supports AWS PrivateLink」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda MicroVMsがAWS PrivateLinkに対応し、VPC内からパブリックインターネットを経由せずにプライベートにLambda MicroVMs APIおよびHTTPエンドポイントにアクセスできるようになりました。この機能は、金融サービス、医療、政府機関などの規制対象ワークロードにおいて、厳格なネットワーク分離要件を満たす必要がある開発者とITチームに特に有用です。

## このアップデートで何が変わったか

- Lambda MicroVMsが利用可能なすべてのリージョンでこの機能がサポートされています。

## 対象ユーザー

- PrivateLink VPC Endpointsは、AWS Management Console、AWS CLI、AWS CloudFormation、またはAWS SDKsを使用して作成できます。

## 活用シーン

- パブリックインターネットを経由せずにLambda MicroVMs APIにアクセスできるようになりました。例えば、MicroVMイメージの作成やMicroVMの起動、各MicroVMのHTTPエンドポイントへの接続が可能です。

## 詳細

- AWS Lambda MicroVMsがAWS PrivateLinkに対応しました。これにより、Amazon VPC内のリソースからLambda MicroVMsへのプライベート接続が可能になります。

- パブリックインターネットを経由せずにLambda MicroVMs APIにアクセスできるようになりました。例えば、MicroVMイメージの作成やMicroVMの起動、各MicroVMのHTTPエンドポイントへの接続が可能です。

- PrivateLink VPC Endpointsは、AWS Management Console、AWS CLI、AWS CloudFormation、またはAWS SDKsを使用して作成できます。

- Lambda MicroVMsが利用可能なすべてのリージョンでこの機能がサポートされています。

- 金融サービス、医療、政府機関などの規制対象ワークロードがネットワーク分離要件を満たすのに役立ちます。

- 開発者とITチームがLambda MicroVMsへのプライベート接続を必要とする場合に最適です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/lambda-microvms-supports-privatelink)