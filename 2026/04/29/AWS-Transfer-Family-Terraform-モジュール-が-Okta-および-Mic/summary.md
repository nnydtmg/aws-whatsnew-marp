# AWS Transfer Family Terraform モジュール が Okta および Microsoft Entra ID との統合をサポート

**カテゴリ:** What's New  
**公開日:** 2026-04-29  
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transfer-family-terraform-okta-microsoft-entra-id/

---

## 要約

AWS Transfer Family Terraform モジュールが Okta および Microsoft Entra ID との統合例をサポートするようになりました。このアップデートにより、エンタープライズ企業は既存の ID インフラストラクチャを活用して Transfer Family サーバーのデプロイメントを自動化できるようになります。

実装は多要素認証（MFA）、監査ログ、ユーザーごとの IP アドレス許可リストなどのセキュリティ制御を備えた Custom IdP（カスタム ID プロバイダー）ソリューションに基づいており、Terraform Registry から利用可能です。

---

## 詳細

### 主な特徴

1. **Okta 統合のサポート**
   - パスワードベースの認証フロー
   - TOTP ベースの多要素認証（MFA）
   - Okta からのユーザー属性動的取得
   - Okta Identity Cloud 導入企業向け

2. **Microsoft Entra ID（旧 Azure AD）統合**
   - パスワードベースの認証
   - Microsoft ID プラットフォームへの標準化実装
   - Microsoft エコシステムに依存する大規模組織向け

3. **エンドツーエンドのデプロイメント例**
   - Transfer Family エンドポイントの完全な統合例を提供
   - Infrastructure as Code（Terraform）による自動化
   - 既存 ID インフラとのシームレスな連携

### セキュリティ機能

- **多要素認証（MFA）**: TOTP ベースの実装
- **監査ログ**: すべてのアクセスと操作の記録
- **IP ホワイトリスト**: ユーザーごとの IP アドレス許可リスト設定
- **標準化された認証フロー**: 多くの ID プロバイダーとの統合に対応

### オープンソースの基盤

- Custom IdP ソリューションはオープンソースベース
- モジュール性により、新しい ID プロバイダーの追加が容易
- AWS コミュニティによる継続的改善が期待できる

### 利用開始方法

- Terraform Registry から新しいモジュールを取得
- AWS Transfer Family Custom IdP ユーザーガイドで詳細を確認
- AWS Capabilities テーブルで対応リージョンを確認

---

## ユースケース

### 1. Okta 導入企業

- Okta Identity Cloud で ID 管理を一元化している組織
- Transfer Family サーバーを Okta の認証体系で保護
- 従業員と取引先企業のアクセス管理を統一

### 2. Microsoft エコシステム企業

- Azure AD / Entra ID で既に ID 管理を実施
- Transfer Family に Entra ID 認証を適用
- Office 365、Entra ID と同じ認証体験を実現

### 3. エンタープライズ向けセキュアなファイル転送

- MFA と監査ログによるセキュリティ要件への準拠
- IP ホワイトリストによるアクセス制限
- SFTP、FTPS、FTP での安全なファイル転送

### 4. マルチテナント環境

- 複数の組織・部門が異なる ID プロバイダーを使用
- Custom IdP ソリューションで複数 IdP を統一的に管理

---

## メリット

### セキュリティ面

- 既存 ID インフラストラクチャの活用による統一的なセキュリティ
- MFA と IP ホワイトリストによるエンタープライズグレードの保護
- 完全な監査ログによるコンプライアンス対応

### 運用面

- Terraform による Infrastructure as Code 実装
- 既存の ID プロバイダーで一元管理
- 従業員の認証管理プロセスの簡素化

### コスト面

- 既存の ID インフラ投資の最大活用
- Transfer Family のデプロイメント自動化による手動作業削減
- 管理オーバーヘッドの低減

---

## 推奨される実装ステップ

1. **評価フェーズ**
   - 自社の ID インフラを確認（Okta または Entra ID）
   - Terraform Registry で提供されているモジュールを検証
   - セキュリティ要件との適合性を確認

2. **パイロットフェーズ**
   - テスト環境でのデプロイメント実施
   - MFA、監査ログ、IP ホワイトリストの動作確認
   - 既存 ID インフラとの統合テスト

3. **本番化フェーズ**
   - セキュリティレビューの完了
   - ユーザーアクセス権限の設定
   - 本番環境へのデプロイメント

4. **運用フェーズ**
   - 監査ログの継続的なモニタリング
   - セキュリティインシデントへの対応体制構築
   - 定期的なセキュリティ監査

---

## 関連リソース

### 公式ドキュメント

- **AWS What's New 記事**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transfer-family-terraform-okta-microsoft-entra-id/
- **Terraform Registry - AWS Transfer Family モジュール**: https://registry.terraform.io/modules/aws-ia/transfer-family/aws/latest
- **Custom IdP ソリューション (GitHub)**: https://github.com/aws-samples/toolkit-for-aws-transfer-family/tree/main/solutions/custom-idp
- **AWS Transfer Family ユーザーガイド**: https://docs.aws.amazon.com/transfer/latest/userguide/
- **Custom IdP 実装ガイド**: https://docs.aws.amazon.com/transfer/latest/userguide/custom-idp-toolkit.html
- **AWS Transfer Family 対応リージョン**: https://builder.aws.com/build/capabilities

### 関連サービス

- **AWS Transfer Family**: SFTP、FTPS、FTP のマネージドファイル転送サービス
- **AWS IAM Identity Center**: エンタープライズ向けアイデンティティ管理
- **Amazon S3**: Transfer Family のデータストレージバックエンド
- **AWS CloudTrail**: API コールとイベントの監査ログ

---

## 用語解説

- **IdP（Identity Provider）**: ID プロバイダー。ユーザー認証を行うシステム
- **Custom IdP**: AWS Transfer Family にカスタム認証ロジックを組み込むための機能
- **Okta**: エンタープライズ向けのクラウドベース ID 管理プラットフォーム
- **Microsoft Entra ID（旧 Azure AD）**: Microsoft の ID 管理サービス
- **MFA（Multi-Factor Authentication）**: 多要素認証
- **TOTP**: Time-based One-Time Password（時間ベースのワンタイムパスワード）
- **SFTP**: SSH File Transfer Protocol（暗号化されたファイル転送プロトコル）
- **Terraform**: Infrastructure as Code（IaC）ツール
