---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Synthetics で顧客管理キーによる暗号化に対応

Amazon CloudWatch Synthetics now supports customer managed encryption keys

**発表日: 2026年7月16日**

---

## 概要

### 顧客管理 KMS キーによる暗号化に対応

- Amazon CloudWatch Synthetics が顧客管理 KMS キーによる環境変数の暗号化に対応
- API キー、認証情報、トークンなどの機密データの暗号化を完全に制御可能
- AWS 所有キーに加えて、独自の対称 KMS キーを指定可能
- 規制業界で組織的なキー管理ポリシーと監査可能性が必要なチーム向け

---

## 前提・背景

### これまでの制限

- 環境変数は AWS 所有キーのみで暗号化
- 機密データの暗号化をユーザーが完全に制御できない
- 規制業界のキー管理ポリシー要件に対応不足

### 市場の需要

- クラウドセキュリティの重要性が高まる
- コンプライアンス要件の厳格化
- キーローテーション制御の必要性

---

## 変更内容・新機能

### 1. 暗号化方式の選択

- **保存時暗号化**: カナリ作成/更新時に顧客管理 KMS キーを指定
- **クライアント側暗号化**: 保存前に値をクライアント側で暗号化
- CloudWatch Synthetics がキーに対するグラントを使用して透過的に処理

### 2. 復号化機構

- カナリ スクリプトが実行時に AWS KMS Decrypt API を使用
- 機密設定データへの安全なアクセス

---

## 変更内容・新機能 (続き)

### 3. マルチリージョン対応

- すべての商用 AWS リージョンで利用可能
- マルチロケーション カナリ: レプリカ リージョンごとに異なる KMS キーを使用可能
- グローバルなデプロイメントでの柔軟な鍵管理

### 4. セキュリティ機能

- 暗号化と復号化の完全な制御
- CloudTrail による全アクション監査可能
- キーローテーション制御の実装

---

## 効果・メリット

### セキュリティ

- **機密データの完全な保護**: API キー、認証情報、トークンを厳密に管理
- **コンプライアンス準拠**: 規制業界の要件に対応
- **監査可能性の向上**: すべての暗号化・復号化操作を追跡

### 運用効率

- **キー管理の一元化**: 組織全体のポリシー適用
- **キーローテーション制御**: セキュリティポリシーに基づく実装
- **透過的な処理**: CloudWatch Synthetics が自動で対応

---

## ユースケース

### 規制業界向け

- **金融機関**: PCI-DSS、HIPAA など規制要件への対応
- **医療機関**: 患者情報の厳密な保護
- **政府機関**: セキュリティ基準の遵守

### セキュリティ重視の組織

- エンタープライズレベルのキー管理ポリシー
- 多地域展開での統一的な暗号化戦略
- 定期的なキーローテーション実施

---

## まとめ

### 主なポイント

- Amazon CloudWatch Synthetics が顧客管理 KMS キー対応
- 機密データの暗号化を完全に制御可能に
- すべての商用 AWS リージョンで利用可能
- マルチロケーション カナリの柔軟なキー管理

### 次のステップ

1. 既存のカナリにおける機密データを把握
2. 顧客管理 KMS キーの作成・設定
3. カナリの作成/更新時にキーを指定
4. CloudTrail でアクセスログを監視

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/synthetics-customer-managed-keys/
- **ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_CommonFeatures.html#CloudWatch_Synthetics_function_encryption
- **カナリアーティファクト暗号化**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html
- **AWS KMS**: https://aws.amazon.com/kms/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**