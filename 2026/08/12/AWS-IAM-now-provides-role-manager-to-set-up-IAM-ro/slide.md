---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM Role Manager がIAMロール自動セットアップに対応

AWS IAM now provides role manager to set up IAM roles automatically

**What's New** | 2026-08-12

---

## 概要

- AWS IAM role managerは、AWSサービスのセットアップ時にIAMロールを自動的に作成・管理する新機能です。
- 初期段階でのセキュリティ設定が簡素化され、後からIAM Access Analyzerで権限を最適化できます。

---

## 前提・背景

### IAMロール設定の課題

- IAMロール設定の複雑さ: 多くのAWSユーザーにとって難易度が高い
- セキュリティと利便性のバランス: 最小権限原則とセットアップの簡素化の両立
- 初心者から経験者まで、IAM設定に時間と労力が必要

### 市場の動向

- **AWS Identity and Access Management In 2026**
  - IAM更新: 自動化、強力なガードレール、パスワードレスアクセス、厳格なコンプライアンスに焦点
  - AWS MFA全ユーザー強制化
  - 自動プロビジョニング（SCIM）対応

- **AWS IAM Security Best Practices in 2026**
  - IAMロール使用の推奨（ハードコードキーの廃止）
  - フェデレーションユーザーへの短期トークン発行
  - IAM Access Analyzerによるリソース監視

---

## 主な機能と特徴

### Role Manager の機能

- **自動ロール作成**: サービスセットアップ時にデフォルトロールを自動生成
- **既存ロールの再利用**: 必要な権限に合致する既存ロールを再利用
- **6つのサービスに対応**: AWS Lambda、Amazon EventBridge など（初期段階）
- **完全なユーザー制御**: 標準的なIAMロールとして表示・管理可能
- **柔軟な有効/無効切り替え**: 任意のタイミングで機能のオン/オフ可能
- **AWS管理テンプレートの検査**: デプロイされたテンプレートの内容確認

---

## 効果とメリット

### 運用効率の向上

- ✅ IAMロール設定にかかる時間を大幅削減
- ✅ セキュリティ設定の初期段階での自動化
- ✅ 設定エラーやセキュリティリスクの低減
- ✅ IAMコンソールへの頻繁な切り替え不要

### セキュリティ面での利点

- ✅ AWS管理テンプレートに基づいたベストプラクティスの適用
- ✅ 後段のIAM Access Analyzerによる権限最適化が容易
- ✅ 完全な透明性（ロール履歴やテンプレート内容の確認可能）
- ✅ 最小権限原則への段階的な移行

### ユーザー層別の利点

- **初心者**: IAM設定の複雑さを軽減、学習コスト低減
- **経験者**: 定型的な作業の自動化により、より重要な業務に集中
- **組織全体**: セキュリティ体制の標準化と管理負荷の削減

---

## 対応サービスと可用性

### 初期段階での対応サービス

| サービス | 概要 |
|--------|------|
| AWS Lambda | サーバーレス計算 |
| Amazon EventBridge | イベント駆動アーキテクチャ |
| その他4つのAWSサービス | TBD |

### リージョン可用性

- ✅ **すべてのAWSリージョンで利用可能**
- ❌ AWS GovCloud（US）リージョン: 対象外
- ❌ 中国リージョン: 対象外

---

## ユースケース

### シナリオ1: スタートアップ企業

**課題**: IAM専任チームがなく、セキュリティ設定に時間が取られている

**解決策**:
- Role Managerでデフォルトロールを自動生成
- 初期段階ではテンプレートのベストプラクティスに依存
- 成長段階でIAM Access Analyzerで権限を最適化

### シナリオ2: 大企業のプロジェクトチーム

**課題**: 複数プロジェクトの立ち上げ時、IAMロール設定が統一されていない

**解決策**:
- Role Managerで標準化されたロール作成フロー
- セキュリティチームが監視・検証
- IAM管理の一元化と可視化

### シナリオ3: セキュリティ成熟度向上を目指す組織

**課題**: セキュリティベストプラクティスを段階的に導入したい

**解決策**:
- Phase 1: Role Managerで基本的なセキュリティ設定を自動化
- Phase 2: IAM Access Analyzerで権限を最適化
- Phase 3: 完全な最小権限アーキテクチャへの移行

---

## まとめ

### AWS IAM Role Manager の位置づけ

- **課題の解決**: IAMロール設定の複雑さを軽減する新ツール
- **ベストプラクティス**: AWS管理テンプレートに基づいたセキュアな初期設定
- **段階的な導入**: セキュリティ成熟度向上への第一歩
- **広範な対応**: 初心者から経験者まで、すべてのAWSユーザーが恩恵

### 推奨される次のステップ

1. **試験環境での導入**
   - 対応サービスでRole Managerを試行
   - 組織のニーズに合わせたカスタマイズを検討

2. **IAM Access Analyzerとの連携**
   - 初期ロール作成後、権限最適化プロセスを確立
   - 継続的な改善サイクルの構築

3. **組織全体での標準化**
   - Role Managerの利用ガイドライン作成
   - セキュリティ監査プロセスの整備

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-role-manager
- **AWS Security Blog**: https://aws.amazon.com/blogs/security/how-aws-iam-role-manager-rethinks-the-starting-point-for-iam-roles/
- **IAM User Guide**: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_role-manager.html

### 関連情報

- [AWS Identity and Access Management In 2026: Deep Dive](https://www.idmworks.com/insight/aws-identity-and-access-management)
- [AWS IAM Security Best Practices in 2026](https://dev.to/karaniph/aws-iam-security-best-practices-in-2026-a-complete-guide-o14)
- [AWS simplifies IAM role creation and setup in service workflows](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-simplifies-iam-role-creation-and-setup)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**