---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM アカウントアクセスマネージャーでワークフォースユーザーのIAMロール割り当てを簡素化

AWS Identity and Access Management streamlines assignment of IAM roles to workforce users with account access manager

**What's New** | 2026-08-10T20:07:00

---

## 概要

- AWS IAMがアカウントアクセスマネージャーをリリースし、IAM Identity Centerを通じたワークフォースユーザーへのIAMロール割り当てを簡素化しました。
- この機能は、単一フェデレーションポイントの利便性とIAMロールの柔軟性を求める組織にとって、追加コストなしで利用可能です。

---

## 前提・背景

### これまでの課題

- 従来は、ユーザーアクセス許可の管理に2つの方法がありました。各AWSアカウントに個別にユーザーをフェデレーションする方法、またはIAM Identity Centerを通じて一度フェデレーションしてアクセス許可セットで集中管理する方法です。

---

### 関連する最近の動向

- **A decade of enterprise identity in the cloud with AWS Managed Microsoft AD**
  企業のクラウド上のID管理に関する進化

- **Account access manager**
  AWS IAM Identity Center との統合による ID 管理の一元化

---

## 変更内容・新機能

### アカウントアクセスマネージャーの主要機能

- AWS IAM（アイデンティティ・アクセス・マネジメント）がアカウントアクセスマネージャーという新機能をリリースしました。

- 管理者はアカウントアクセスマネージャーを使用して、AWS IAM Identity Centerのワークフォースユーザーおよびグループに対してAWSアカウント内のIAMロールを割り当てることができます。

---

### 主な特徴

- **権限管理の柔軟性**: IAM ロールを直接割り当てられます
- **ユーザー認識**: ワークフォースユーザーのグループ管理に対応
- **単一フェデレーションポイント**: IAM Identity Center を通じた統一管理
- **複数の利用方法**: AWS IAMコンソール、AWS SDK、CloudFormation/CDK

---

## 効果・メリット

- 追加コストなしで提供
- すべてのAWSコマーシャルリージョンでデフォルトで有効
- ワークフォースユーザーへのIAMロール割り当てプロセスを簡素化
- 単一フェデレーションポイントの利便性とIAMロールの柔軟性を両立

---

## ユースケース

### 想定される活用シーン

- **大規模組織のID管理**: IAM Identity Center を使用する企業でのワークフォースユーザー管理
- **マルチアカウント環境**: 複数のAWSアカウントにおけるロール割り当ての一元化
- **セキュリティ強化**: 統一されたフェデレーション方式による権限管理の標準化

---

## まとめ

### AWS IAM アカウントアクセスマネージャーの位置づけ

- AWS IAM Identity Center と連携したワークフォースユーザー管理の新機能
- IAM ロール割り当てプロセスの簡素化
- 柔軟性とセキュリティのバランスを実現
- 追加コストなしで全リージョンで利用可能

### 次のステップ

1. 自社のID管理戦略の確認
2. IAM Identity Center の構成を整理
3. アカウントアクセスマネージャーの評価と導入

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-aam/)

### 関連情報

- [A decade of enterprise identity in the cloud with AWS Managed Microsoft AD](https://aws.amazon.com/blogs/security/a-decade-of-enterprise-identity-in-the-cloud-with-aws-managed-microsoft-ad)
- [Account access manager](https://docs.aws.amazon.com/IAM/latest/UserGuide/account-access-manager.html)
- [Getting started with account access manager](https://docs.aws.amazon.com/IAM/latest/UserGuide/account-access-manager-getting-started.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**