---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Organizations が CloudTrail イベントを発行
アカウントメンバーシップ変更を監視

**発表日: 2026年5月28日**

---

## 概要

### 3つの主要な新機能

- **自動イベント発行**: AccountJoinedOrganization / AccountDepartedOrganization イベント
- **リアルタイム監視**: CloudWatch アラームと EventBridge ルールで即座に検出
- **セキュリティ強化**: 不正検出、コンプライアンス監査、インシデント調査に対応

### 利用可能なリージョン

- 全商用 AWS リージョン
- AWS GovCloud（US）リージョン
- 中国リージョン

---

## 前提・背景

### 組織管理の課題

- **可視性の欠如**: アカウント参加・離脱の記録がなかった
- **セキュリティリスク**: 不正なアカウント操作を検出できない
- **コンプライアンス対応**: 監査トレイルの不完全性
- **対応遅延**: 疑わしい組織的変更への即座の対応困難

### AWS Organizations の進化

- CloudTrail との統合を強化
- 組織全体のセキュリティ可視性を向上
- 自動監視・アラート機能への対応

---

## 変更内容・新機能

### AccountJoinedOrganization イベント

- **記録情報**:
  - アカウント参加方法（Created / Invited）
  - 参加タイムスタンプ
  - 管理アカウント ID
  - メンバーアカウント ID

### AccountDepartedOrganization イベント

- **記録情報**:
  - 離脱方法（Left / Removed / Cleaned）
  - 離脱タイムスタンプ
  - 管理アカウント ID
  - メンバーアカウント ID

---

## 機能の詳細

### CloudTrail イベント詳細

| 項目 | 説明 |
|------|------|
| **イベント名** | AccountJoinedOrganization / AccountDepartedOrganization |
| **発行元** | AWS Organizations |
| **記録先** | 管理アカウントの CloudTrail |
| **情報粒度** | アカウント ID、タイムスタンプ、参加/離脱方法 |
| **自動発行** | アカウント操作時に自動的に記録 |

---

<!-- _class: small -->

## 実装方法

### CloudWatch アラーム設定例

- **疑わしい組織変更を監視**
  - AccountJoinedOrganization イベント検出時に通知
  - 未認可のアカウント参加を検出
  - タイムベースの異常検知

### Amazon EventBridge ルール設定例

- **自動応答の実装**
  - イベント検出時に Lambda 関数を実行
  - SNS 通知で即座に情報共有
  - セキュリティツール（例: AWS Security Hub）との連携

### 推奨設定パターン

```yaml
CloudTrail の記録:
  - イベント名フィルター: 
    - AccountJoinedOrganization
    - AccountDepartedOrganization
  - 管理アカウント: 対象
  - ストレージ: S3 / CloudWatch Logs
```

---

## 効果・メリット

### セキュリティ向上

- **リアルタイム監視**: 組織メンバーシップの変更を即座に検出
- **不正検出**: 不正なアカウント操作の早期発見
- **インシデント対応**: 疑わしい活動への迅速な対応

### コンプライアンス・運用効率

- **監査トレイル完全化**: 全アカウント操作の記録
- **自動化**: アラートと対応を自動化
- **可視性向上**: 組織全体のアカウント状況を把握

---

## ユースケース

### 1. 不正検出

未認可のアカウント参加を検出し、即座に対応

### 2. コンプライアンス監査

アカウント参加・離脱の完全なトレイルを記録

### 3. セキュリティ監視

CloudWatch + EventBridge で組織的変更を監視

### 4. インシデント調査

過去のアカウント操作履歴を調査可能

---

## 実装のベストプラクティス

### 推奨設定

- ✅ 管理アカウントで CloudTrail を有効化
- ✅ AccountJoinedOrganization / AccountDepartedOrganization イベントに注視
- ✅ CloudWatch Logs への記録で集計・分析
- ✅ EventBridge ルールで自動応答を実装
- ✅ SNS / Slack 連携で即座に通知

### 注意点

- ⚠️ メンバーアカウントは自身のイベントのみ参照可能
- ⚠️ CloudTrail の保持期間を確認
- ⚠️ 権限設定（IAM ポリシー）を適切に構成

---

## まとめ

### AWS Organizations CloudTrail イベントの位置づけ

- **新機能**: アカウントメンバーシップ変更を CloudTrail で自動記録
- **セキュリティ強化**: リアルタイム監視と自動対応を実現
- **コンプライアンス対応**: 完全な監査トレイルを確保
- **全リージョン対応**: 商用・GovCloud・中国リージョンで利用可能

### 次のステップ

1. CloudTrail でイベント記録を確認
2. CloudWatch アラーム設定
3. EventBridge ルール作成
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-organizations-cloudtrail/
- **AWS Organizations ドキュメント**: https://docs.aws.amazon.com/organizations/latest/APIReference/Welcome.html
- **CloudTrail ドキュメント**: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/
- **AWS Cloud Security Best Practices**: https://blog.qualys.com/product-tech/2026/04/09/1aws-cloud-security-best-practices-guide

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**