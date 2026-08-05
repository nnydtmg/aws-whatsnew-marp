# AWS IAM Identity Center の AWS アカウントアクセス管理が任意に

AWS IAM Identity Center makes managment of AWS account access optional for new organization instances

**公開日:** 2026-08-05
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-identity-center-accounts-optional/)

このページでは、AWS What's Newで発表された「AWS IAM Identity Center makes managment of AWS account access optional for new organization instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAM Identity Centerは、新規インスタンス作成時にAWSアカウントアクセス管理を任意にすることで、アプリケーションアクセス管理のみの利用を可能にし、セキュリティ体制を強化することができるようになりました。この機能は、AWSアプリケーションへのシングルサインオン管理を必要とする一方で、アカウントレベルのアクセス管理が不要な組織に特に有益です。

## このアップデートで何が変わったか

- AWS IAM Identity Centerは、新しい組織インスタンスの作成時にAWSアカウントアクセスの管理を任意にすることができるようになりました。
- この機能により、AWSアカウントへのアクセス管理を行わずに、AWSアプリケーションのみへのアクセス管理をIAM Identity Centerで実施することが可能になりました。
- アカウント管理を有効にしない場合、IAM Identity Centerはメンバーアカウントにサービスリンクロールをプロビジョニングしないため、環境のアクセス表面積が削減されます。
- この機能は初期設定時のみ利用可能であり、既存のIAM Identity Centerインスタンスには影響しません。
- アカウント管理権限は、後からインスタンス設定またはUpdateInstance APIを通じて有効にすることができます。
- この機能はIAM Identity Centerが利用可能なすべてのAWSリージョンで利用可能です。

## 詳細

- AWS IAM Identity Centerは、新しい組織インスタンスの作成時にAWSアカウントアクセスの管理を任意にすることができるようになりました。
- この機能により、AWSアカウントへのアクセス管理を行わずに、AWSアプリケーションのみへのアクセス管理をIAM Identity Centerで実施することが可能になりました。
- アカウント管理を有効にしない場合、IAM Identity Centerはメンバーアカウントにサービスリンクロールをプロビジョニングしないため、環境のアクセス表面積が削減されます。
- この機能は初期設定時のみ利用可能であり、既存のIAM Identity Centerインスタンスには影響しません。
- アカウント管理権限は、後からインスタンス設定またはUpdateInstance APIを通じて有効にすることができます。
- この機能はIAM Identity Centerが利用可能なすべてのAWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-identity-center-accounts-optional/)