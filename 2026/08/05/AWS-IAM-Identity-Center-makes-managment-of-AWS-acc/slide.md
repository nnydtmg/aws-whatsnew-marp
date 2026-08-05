---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM Identity Center の AWS アカウントアクセス管理が任意に

AWS IAM Identity Center makes managment of AWS account access optional for new organization instances

**発表日: 2026年8月5日**

---

## 概要

- AWS IAM Identity Centerは、新規インスタンス作成時にAWSアカウントアクセス管理を任意にすることで、アプリケーションアクセス管理のみの利用を可能にし、セキュリティ体制を強化することができるようになりました。
- この機能は、AWSアプリケーションへのシングルサインオン管理を必要とする一方で、アカウントレベルのアクセス管理が不要な組織に特に有益です。

---

## 前提・背景

### 市場の動向

- AWS IAM Identity Centerはエンタープライズ向けの統一的なアクセス管理プラットフォーム
- セキュリティの最小権限原則がますます重要に
- クラウドアクセス管理の複雑化による課題の増加

### Anthropic の進化

- 2026年のIAM管理では、最小権限の実装が重視される傾向
- 多くの組織がアプリケーションアクセスのみを必要とするケースが増加
- セキュリティ体制強化のためのきめ細かい制御が求められている

---

## 主な機能と改善

### 1. アカウント管理の任意化

- **新組織インスタンス作成時のオプション化**: AWS IAM Identity Centerは、新しい組織インスタンスの作成時にAWSアカウントアクセスの管理を任意にすることができるようになりました
- **アプリケーションのみの管理**: AWSアカウントへのアクセス管理を行わずに、AWSアプリケーションのみへのアクセス管理をIAM Identity Centerで実施することが可能になりました
- **セキュリティ表面積の削減**: アカウント管理を有効にしない場合、IAM Identity Centerはメンバーアカウントにサービスリンクロールをプロビジョニングしないため、環境のアクセス表面積が削減されます

### 2. 柔軟な設定

- **初期設定時のオプション**: この機能は初期設定時のみ利用可能であり、既存のIAM Identity Centerインスタンスには影響しません
- **後からの有効化**: アカウント管理権限は、後からインスタンス設定またはUpdateInstance APIを通じて有効にすることができます

---

## 利用可能リージョン

- **グローバル対応**: この機能はIAM Identity Centerが利用可能なすべてのAWSリージョンで利用可能です

---

## 効果・メリット

- **セキュリティ強化**: 不要なアカウント管理権限を除外することでセキュリティ体制が強化される
- **アクセス表面積の最小化**: サービスリンクロールのプロビジョニングを回避できる
- **管理の簡素化**: アプリケーションのみのアクセス管理で十分な組織の運用コストが削減される
- **柔軟性**: 後からアカウント管理を有効にできるため、段階的な導入が可能
- **シングルサインオンの活用**: 一貫した認証体験をAWSアプリケーション全体で提供できる

---

## ユースケース

### 対象組織

- **アプリケーションのみのアクセス管理が必要な組織**: AWSアカウントレベルのアクセス管理が不要な場合に最適
- **セキュリティ体制強化を重視する企業**: アクセス表面積を最小限に抑えたい場合に有効
- **シングルサインオン重視の組織**: 一貫した認証体験をAWSアプリケーション全体で提供したいアプリケーション所有者

---

## まとめ

### AWS IAM Identity Center の位置づけ

- AWS IAM Identity Centerのアカウント管理がより柔軟になりました
- セキュリティと管理の最適化が可能に
- アプリケーション中心のアクセス管理が実現できます

### 次のステップ

1. 自社のユースケースに合わせた評価開始
2. 新規IAM Identity Centerインスタンスでのテスト実装
3. 組織の要件に合わせた設定の検討

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-identity-center-accounts-optional/
- **Working with AWS IAM Identity Center and AWS Control Tower**: https://docs.aws.amazon.com/controltower/latest/userguide/sso.html
- **AWS Identity and Access Management (IAM)**: https://aws.amazon.com/iam
- **AWS Identity and Access Management In 2026: Deep Dive**: https://www.idmworks.com/insight/aws-identity-and-access-management

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**