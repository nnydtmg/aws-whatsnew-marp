---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Transfer Family Terraform モジュール
Okta と Microsoft Entra ID との統合に対応

**発表日: 2026年4月29日**

---

## 概要

### 3つの主要な改善

- **Terraform モジュールの拡張**: Okta と Microsoft Entra ID の統合例をサポート
- **エンタープライズID インフラとの連携**: 既存の ID インフラストラクチャを活用してデプロイメントを自動化
- **セキュリティ制御の強化**: MFA、監査ログ、IP ホワイトリストなど組み込みセキュリティ機能

### 利用可能な場所

- Terraform Registry で利用可能
- オープンソースの Custom IdP ソリューションに基づいた実装

---

## 前提・背景

### エンタープライズの課題

- 複数の ID インフラストラクチャ環境での統一的なアクセス管理の必要性
- セキュアなファイル転送サーバーのデプロイメント自動化の複雑性
- Identity Provider との統合における標準的なアプローチの欠如

### Transfer Family の位置づけ

- **用途**: SFTP、FTPS、FTP プロトコルでの安全なファイル転送
- **課題**: 既存の ID システムとの統合が複雑
- **ニーズ**: Infrastructure as Code (Terraform) による自動化

---

## 変更内容・新機能

### 1. Okta 統合のサポート

- **認証方式**: パスワードベースの認証フロー
- **多要素認証**: TOTP（時間ベースのワンタイムパスワード）ベースの MFA
- **属性取得**: Okta からユーザー属性を動的に取得
- **使用ケース**: Okta Identity Cloud を利用する組織

### 2. Microsoft Entra ID（旧 Azure AD）統合

- **認証方式**: パスワードベースの認証
- **標準化**: Microsoft ID プラットフォームに標準化された実装
- **対象組織**: Microsoft エコシステムに依存する大規模組織

### 3. Custom IdP ソリューションの基盤

- **モジュール性**: 新しい ID プロバイダーを容易に追加可能な設計
- **再利用性**: オープンソースベースの確立された実装

---

## セキュリティ機能

### 組み込みセキュリティ制御

| 機能 | 説明 |
|------|------|
| **多要素認証（MFA）** | TOTP ベースの MFA サポート |
| **監査ログ** | すべてのアクセスとアクション記録 |
| **IP ホワイトリスト** | ユーザーごとの IP アドレス許可リスト |
| **認証フロー** | パスワードベース、公開鍵認証対応 |

### エンタープライズセキュリティ要件への準拠

- 標準化された認証フロー
- 完全な監査証跡
- 粒度の細かいアクセス制御

---

## 主要な利点

### セキュリティ面

- 既存 ID インフラストラクチャの活用による統一的なセキュリティ
- MFA と IP ホワイトリストによるアクセス保護
- 完全な監査ログによるコンプライアンス対応

### 運用面

- **自動化**: Terraform による Infrastructure as Code 実装
- **管理効率**: 既存の ID プロバイダーで一元管理
- **デプロイメント簡素化**: エンドツーエンドの統合例を提供

### 開発面

- **モジュラー設計**: 他の ID プロバイダーへの拡張が容易
- **オープンソース基盤**: コミュニティによる継続的改善

---

## ユースケース

### 1. Okta 導入企業

- Okta Identity Cloud で ID 管理を一元化
- Transfer Family サーバーを Okta の認証体系で保護
- 従業員と取引先企業のアクセス管理を統一

### 2. Microsoft エコシステム企業

- Azure AD / Entra ID で既に ID 管理
- Transfer Family に Entra ID 認証を適用
- Office 365、Entra ID と同じ認証で操作性向上

### 3. マルチテナント環境

- 複数の組織・部門が異なる ID プロバイダーを使用
- Custom IdP ソリューションで複数 IdP を統一的に管理

---

## まとめ

### 重要ポイント

- **AWS Transfer Family Terraform モジュールが Okta と Microsoft Entra ID の統合をサポート**
- **エンタープライズ企業は既存の ID インフラストラクチャを活用**
- **多要素認証や監査ログなどのセキュリティ制御を備えた実装**
- **Infrastructure as Code で自動デプロイメントが実現**

### 次のステップ

1. Terraform Registry で新しいモジュールを確認
2. 自社の ID インフラ（Okta または Entra ID）との統合を検証
3. パイロット環境でのデプロイメント実施
4. セキュリティ要件に合わせたカスタマイズ

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transfer-family-terraform-okta-microsoft-entra-id/
- **Terraform Registry**: https://registry.terraform.io/modules/aws-ia/transfer-family/aws/latest
- **Custom IdP ソリューション**: https://github.com/aws-samples/toolkit-for-aws-transfer-family/tree/main/solutions/custom-idp
- **AWS Transfer Family ユーザーガイド**: https://docs.aws.amazon.com/transfer/latest/userguide/
- **Custom IdP 実装ガイド**: https://docs.aws.amazon.com/transfer/latest/userguide/custom-idp-toolkit.html

### 関連サービス

- **AWS Transfer Family**: SFTP、FTPS、FTP のマネージドサービス
- **AWS IAM Identity Center**: エンタープライズ向けアイデンティティ管理
- **Amazon S3**: Transfer Family のバックストレージ

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**