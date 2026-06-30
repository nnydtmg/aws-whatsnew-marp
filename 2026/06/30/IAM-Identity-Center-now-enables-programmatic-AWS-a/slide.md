---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM Identity Center、カスタマー管理アプリケーション向けプログラマティックアクセスに対応

IAM Identity Center now enables programmatic AWS account access for customer managed applications

**What's New** | 2026-06-30T16:00:00

---

## 概要

- IAM Identity Centerは、顧客管理アプリケーションがプログラムによってAWSアカウントにアクセスし、ユーザーが外部IDプロバイダー経由で既に認証済みの場合に冗長なサインインを排除できるようになりました。
- この機能は、外部IDプロバイダーを統合し、中央集約的なアクセス管理を必要とする企業向けに設計されています。

---

## 前提・背景

### 従来の課題

- 顧客管理アプリケーションからAWSアカウントへのアクセス時に追加認証が必要
- ユーザー認証情報の管理が複雑化
- アクセス権限の一元管理が困難

### 市場の動向

- 企業向けアクセス管理の自動化・統合ニーズの高まり
- セロスプラットフォーム認証の重要性が増加
- アイデンティティ管理のクラウド化

---

## 主な機能と改善

### 1. プログラマティックアクセスの実現

- 顧客管理アプリケーションから直接AWSアカウントにアクセス可能
- 追加の認証フローなしに一時的なセキュリティ認証情報を取得
- ユーザー認証情報の重複を排除

### 2. 外部IDプロバイダーの統合

- 外部IDプロバイダーを信頼できるトークン発行者として設定
- 既存認証システムとのシームレス連携
- OIDC（OpenID Connect）対応

### 3. アカウント・ロール管理

- ユーザーに割り当てられたアカウントとロールの自動検出
- 一時認証情報の自動取得
- 権限ベースのアクセス制御

---

## 効果・メリット

- **セキュリティ向上**: 冗長なサインインプロンプトを排除し、セキュリティを強化
- **運用効率化**: 認証フローの統一・簡素化
- **ユーザー体験の改善**: シームレスなアクセス体験
- **管理コストの削減**: 一元管理により運用負担を軽減
- **スケーラビリティ**: 複数アプリケーション間での統一管理が可能

---

## 対応範囲

### 利用可能な環境

- **リージョン**: すべての商用AWSリージョン
- **ガバメント**: AWSガバメントクラウド（US）リージョン
- **中国リージョン**: 対応予定
- **インスタンスタイプ**: IAM Identity Centerの組織インスタンス

### 有効化権限

- 管理アカウント管理者
- 委任管理者

---

## ユースケース

### 1. 業務システム統合

- 社内ポータルアプリケーションからAWSコンソール・APIへの統一アクセス

### 2. エンタープライズアプリケーション

- SaaS型カスタマー管理アプリケーション
- ERP・CRMシステムとの連携

### 3. 開発者体験の向上

- IDE・ローカル開発環境からのシームレスなアクセス
- CI/CDパイプラインとの統合

---

## まとめ

### 重要なポイント

- IAM Identity Centerが顧客管理アプリケーション向けのプログラマティックアクセスに対応
- 外部IDプロバイダーとの統合により、認証フローの大幅な簡素化を実現
- 企業向けアクセス管理のセキュリティと利便性が向上

### 次のステップ

1. 自社の外部IDプロバイダー設定を確認
2. IAM Identity Centerの組織インスタンス環境を準備
3. カスタマー管理アプリケーションでの有効化を検討
4. パイロットプロジェクトでの検証開始

---

## 参考URL

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-iam-identity-center-account-access-customer-managed-apps/
- **Granting programmatic access - Amazon WorkSpaces Secure Browser**: https://docs.aws.amazon.com/workspaces-web/latest/adminguide/getting-started-iam-user-access-keys.html
- **AWS IAM Identity Center Guide**: https://www.cloudquery.io/blog/aws-identity-center-guide
- **AWS Identity and Access Management In 2026**: https://www.idmworks.com/insight/aws-identity-and-access-management

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**