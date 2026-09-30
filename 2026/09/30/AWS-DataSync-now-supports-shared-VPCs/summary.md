# AWS DataSync が共有 VPC をサポート開始

AWS DataSync now supports shared VPCs

**カテゴリ:** What's New
**公開日:** 2026-09-29T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-datasync-shared-vpcs/)

このページでは、AWS What's Newで発表された「AWS DataSync now supports shared VPCs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS DataSyncが共有VPCをサポートし、中央アカウントのエンドポイントを効率的に利用できるようになりました。これによりIPアドレスの節約と運用オーバーヘッドの削減が可能になります。AWS Resource Access Manager (RAM) でアカウント間共有されたサブネットを使って DataSync エージェントを作成し、転送タスクを実行できます。中央アカウントで管理する共有サブネットと VPC エンドポイント経由でプライベートにデータ転送できます。

## このアップデートで何が変わったか

AWS DataSync now supports shared Virtual Private Clouds (VPCs). You can create DataSync agents and run transfer tasks using subnets shared across AWS accounts with AWS Resource Access Manager (RAM). It allows you to transfer data privately over a shared subnet and VPC endpoint managed in a central account, rather than one per account. Customers that centralize their networking previously had to create a separate DataSync VPC endpoint in every account that connected privately through AWS PrivateL

## 対象ユーザー

AWS DataSync now supports shared Virtual Private Clouds (VPCs). You can create DataSync agents and run transfer tasks using subnets shared across AWS accounts with AWS Resource Access Manager (RAM). It allows you to transfer data privately over a shared subnet and VPC endpoint managed in a central a

## 詳細

AWS DataSync now supports shared Virtual Private Clouds (VPCs). You can create DataSync agents and run transfer tasks using subnets shared across AWS accounts with AWS Resource Access Manager (RAM). It allows you to transfer data privately over a shared subnet and VPC endpoint managed in a central account, rather than one per account. Customers that centralize their networking previously had to create a separate DataSync VPC endpoint in every account that connected privately through AWS PrivateLink. Each endpoint consumed IP addresses and added operational overhead to maintain across accounts. With shared VPC support, a single endpoint in the account that owns the VPC serves every account the subnet is shared with, conserving IP address space and removing the need for a per-account endpoint. This launch also helps within a single account setup. You can now use one VPC endpoint across multiple subnets, removing the earlier requirement for a matching VPC endpoint in each subnet. Shared VPC is supported for both Enhanced mode and Basic mode agent-based tasks. To get started, create a DataSync agent using the console or the CreateAgent API and specify a subnet shared with your account via AWS RAM. AWS DataSync support for Shared VPCs is available in all AWS Regions, except AWS Secret Regions, where AWS DataSync is offered.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-datasync-shared-vpcs/)