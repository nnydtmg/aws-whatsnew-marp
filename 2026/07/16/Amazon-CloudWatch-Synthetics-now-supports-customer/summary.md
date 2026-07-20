# Amazon CloudWatch Synthetics で顧客管理キーによる暗号化に対応

Amazon CloudWatch Synthetics now supports customer managed encryption keys

**カテゴリ:** What's New
**公開日:** 2026-07-16
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/synthetics-customer-managed-keys/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Synthetics now supports customer managed encryption keys」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Synthetics が顧客管理 KMS キーによる環境変数の暗号化に対応するようになり、API キーや認証情報などの機密データの暗号化を完全に制御できるようになりました。この更新は、規制業界で組織的なキー管理ポリシーと監査可能性が必要なチームに特に有益です。

## このアップデートで何が変わったか

### コア機能の変更

- **顧客管理 KMS キーの対応**: AWS Key Management Service (KMS) の顧客管理キーを使用した暗号化が可能に
- **環境変数の暗号化**: カナリ環境変数に含まれる API キー、認証情報、トークンなどを保護
- **暗号化方式の選択**:
  - 保存時暗号化: カナリ作成/更新時に顧客管理 KMS キーを指定
  - クライアント側暗号化: 保存前に値をクライアント側で暗号化

### 従来との違い

| 項目 | 従来 | 現在 |
|------|------|------|
| 暗号化キー | AWS 所有キーのみ | AWS 所有キー + 顧客管理 KMS キー |
| 制御範囲 | AWS が管理 | ユーザーが完全制御 |
| クライアント側暗号化 | 非対応 | 対応 |
| キーローテーション | 不可 | 可能 |

## 技術的な詳細

### 暗号化プロセス

1. **設定時**: カナリ作成/更新時に顧客管理 KMS キーを指定
2. **グラント処理**: CloudWatch Synthetics がキーに対するグラントを使用
3. **透過的な処理**: 暗号化・復号化を自動処理
4. **実行時復号化**: カナリ スクリプトが AWS KMS Decrypt API を使用

### マルチロケーション対応

- すべての商用 AWS リージョンで利用可能
- マルチロケーション カナリはレプリカ リージョンごとに異なる KMS キーを使用可能
- グローバルなコンプライアンス要件への対応が可能

## 対象ユーザー

### 主な対象

- **規制業界のチーム**
  - 組織的なキー管理ポリシーが必要
  - 監査可能性が必須
  - キーローテーション制御が必要

### 活用シーン

- 金融機関での API キー管理
- 医療機関での認証情報保護
- 政府機関でのコンプライアンス要件対応
- エンタープライズレベルのセキュリティ運用

## メリット

### セキュリティ面

- **完全な制御**: 機密データの暗号化・復号化を完全に制御
- **コンプライアンス準拠**: PCI-DSS、HIPAA などの要件に対応
- **監査可能性**: CloudTrail による全操作の追跡
- **キー管理**: 組織全体のキー管理ポリシーを適用

### 運用面

- **透過的な処理**: CloudWatch Synthetics が自動で暗号化・復号化
- **一元管理**: AWS KMS で全キーを管理
- **柔軟性**: マルチリージョン環境でのリージョン別キー指定
- **監査ログ**: すべての操作を CloudTrail に記録

## 利用方法

### 基本的な手順

1. **KMS キーの準備**
   - AWS KMS で対称キーを作成
   - CloudWatch Synthetics に対する権限を設定

2. **カナリの設定**
   - 新規作成または既存カナリを更新
   - 暗号化方式を選択（保存時 / クライアント側）
   - KMS キーの ARN を指定

3. **環境変数の指定**
   - 機密データを環境変数として設定
   - 自動的に指定したキーで暗号化

4. **実行時の復号化**
   - カナリ スクリプトが AWS KMS Decrypt API を使用
   - 必要に応じて機密データにアクセス

## 注意事項

- CloudWatch Synthetics の IAM ロールに KMS キーへのアクセス権限が必要
- キーローテーション実施時の動作確認
- CloudTrail でアクセスログを定期的に確認

## 参考リンク

- [AWS What's New 元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/synthetics-customer-managed-keys/)
- [Amazon CloudWatch ドキュメント - 環境変数の暗号化](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_CommonFeatures.html#CloudWatch_Synthetics_function_encryption)
- [カナリ アーティファクト暗号化](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html)
- [AWS Key Management Service (AWS KMS)](https://aws.amazon.com/kms/)
- [CloudWatch Synthetics ドキュメント](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics.html)

---

**最終更新:** 2026-07-16