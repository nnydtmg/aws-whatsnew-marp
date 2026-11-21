# Amazon VPC IPAMポリシーがFirewallとLambdaのIP割り当てに対応

Amazon VPC IPAM policies now support automated internet firewall and AWS Lambda Web Functions and MicroVMs

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:06:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-ipam-policies-firewall-lambda/)

このページでは、AWS What's Newで発表された「Amazon VPC IPAM policies now support automated internet firewall and AWS Lambda Web Functions and MicroVMs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon VPC IPAMポリシーが、AWS Network Firewallの自動インターネットファイアウォールおよびLambda Web FunctionsとMicroVMsへのパブリックIPv4割り当てを新たにサポートします。これにより、セキュリティ運用の簡素化とBYOIPによるコスト削減が可能になります。

## このアップデートで何が変わったか

Amazon Virtual Private Cloud (VPC) IP Address Manager (IPAM) ポリシーが、AWS Network Firewall の自動インターネットファイアウォールおよび AWS Lambda Web Functions と MicroVMs を新たにサポートします。お客様はAWSアカウントおよびリージョンを横断してポリシーを中央設定し、BYOIPやAmazon提供の連続IPv4ブロックからパブリックIPv4アドレスを割り当てることができます。これにより、より強固なセキュリティ姿勢、ネットワーク・セキュリティ運用の簡素化、BYOIP利用時のパブリックIPv4コスト削減が可能になります。多くのお客様はAWSリソースのパブリックIPをACLやファイアウォールの許可リストに登録しています。以前はこれらのリソースを許可リスト済みアドレスに維持することが各アプリケーションチームに依存していました。本リリースにより、既存のリソースタイプと同様に割り当てルールを定義できるため、セキュリティチームはこれらのリソースが承認済み範囲からアドレスを取得すること

## 対象ユーザー

Amazon Virtual Private Cloud (VPC) IP Address Manager (IPAM) ポリシーが、AWS Network Firewall の自動インターネットファイアウォールおよび AWS Lambda Web Functions と MicroVMs を新たにサポートします。お客様はAWSアカウントおよびリージョンを横断してポリシーを中央設定し、BYOIPやAmazon提供の連続IPv4ブロックからパブリックIPv4アドレスを割り当てることができます。これにより、より強固なセキュリティ姿勢、ネットワーク・セキュリティ運用の簡素化、BYOIP利用時のパブリ

## 詳細

Amazon Virtual Private Cloud (VPC) IP Address Manager (IPAM) ポリシーが、AWS Network Firewall の自動インターネットファイアウォールおよび AWS Lambda Web Functions と MicroVMs を新たにサポートします。お客様はAWSアカウントおよびリージョンを横断してポリシーを中央設定し、BYOIPやAmazon提供の連続IPv4ブロックからパブリックIPv4アドレスを割り当てることができます。これにより、より強固なセキュリティ姿勢、ネットワーク・セキュリティ運用の簡素化、BYOIP利用時のパブリックIPv4コスト削減が可能になります。多くのお客様はAWSリソースのパブリックIPをACLやファイアウォールの許可リストに登録しています。以前はこれらのリソースを許可リスト済みアドレスに維持することが各アプリケーションチームに依存していました。本リリースにより、既存のリソースタイプと同様に割り当てルールを定義できるため、セキュリティチームはこれらのリソースが承認済み範囲からアドレスを取得することを信頼してIPベースのフィルターを追加できます。Lambda Web Functions と MicroVMs では、Lambda Network Connectors 経由のアウトバウンドトラフィックに使用されるパブリックIPv4アドレスが対象となります。プールが枯渇した場合はAmazon提供アドレスへフォールバックし、割り当て範囲はAWSプレフィックスリストとの連携によりパートナーと共有できます。本機能はすべてのAWS商用リージョンで、VPC IPAMのFree TierおよびAdvanced Tierの両方で利用可能です。パブリックIPを許可リストに登録しているお客様やセキュリティチーム、およびBYOIPでコスト削減を図るお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-ipam-policies-firewall-lambda/)