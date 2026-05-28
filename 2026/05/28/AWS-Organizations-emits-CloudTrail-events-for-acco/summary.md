# AWS Organizations が CloudTrail イベントを発行

アカウントメンバーシップ変更を監視

**カテゴリ:** What's New
**公開日:** 2026-05-28
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-organizations-cloudtrail/)

---

## 📋 要約

AWS Organizations が新たに CloudTrail イベント（**AccountJoinedOrganization** および **AccountDepartedOrganization**）を発行することで、セキュリティチームとクラウド管理者は組織メンバーシップの変更をリアルタイムで監視し、不正検出やコンプライアンス監査に対応できるようになりました。本機能は全商用 AWS リージョンおよび GovCloud、中国リージョンで利用可能です。

---

## 🎯 このアップデートで何が変わったか

### 新しい CloudTrail イベント

#### 1. AccountJoinedOrganization イベント
- アカウントが組織に参加した時点で自動発行
- **記録内容**:
  - 参加方法（Created / Invited）
  - 参加タイムスタンプ
  - 管理アカウント ID
  - メンバーアカウント ID

#### 2. AccountDepartedOrganization イベント
- アカウントが組織から離脱した時点で自動発行
- **記録内容**:
  - 離脱方法（Left / Removed / Cleaned）
  - 離脱タイムスタンプ
  - 管理アカウント ID
  - メンバーアカウント ID

---

## 🔍 主な機能

### 自動イベント記録

- AWS Organizations の管理アカウントに自動的にイベントを発行
- CloudTrail に記録されるため、検索・分析が容易
- ログの保持とアーカイブが可能

### リアルタイム監視の実現

- **CloudWatch アラーム** で疑わしいアカウント操作を検出
- **Amazon EventBridge** ルールで自動応答を実装
- SNS / Slack との連携で即座に通知

### 重要なユースケースへの対応

1. **不正検出**: 不正なアカウント参加を検出
2. **コンプライアンス監査**: アカウント操作の完全な監査トレイルを確保
3. **セキュリティ監視**: 組織的変更をリアルタイムで監視
4. **インシデント調査**: 過去のアカウント操作履歴を調査

---

## 💡 実装のポイント

### CloudTrail 設定

```
対象イベント:
- AccountJoinedOrganization
- AccountDepartedOrganization

記録先:
- 管理アカウント CloudTrail
- Amazon S3 / CloudWatch Logs
```

### EventBridge ルール設定例

```yaml
イベントパターン:
  source: ["aws.organizations"]
  detail-type: ["AWS API Call via CloudTrail"]
  detail:
    eventName:
      - AccountJoinedOrganization
      - AccountDepartedOrganization

アクション:
  - Lambda 関数の実行
  - SNS 通知
  - AWS Security Hub への送信
```

---

## ✅ 実装のベストプラクティス

### 推奨設定

- ✅ 管理アカウントで CloudTrail を有効化
- ✅ CloudTrail ログを CloudWatch Logs に送信
- ✅ EventBridge ルールで自動応答を実装
- ✅ SNS / Slack と連携して即座に通知
- ✅ CloudTrail ログ保持期間を適切に設定

### 注意点

- ⚠️ メンバーアカウントは自身のイベントのみ参照可能
- ⚠️ ログの過度な増加によるコスト増加に注意
- ⚠️ IAM ポリシーで適切なアクセス制御を実装
- ⚠️ 大規模組織での膨大なイベント量への対応

---

## 🌍 対応リージョン

- ✅ 全商用 AWS リージョン
- ✅ AWS GovCloud（US）リージョン
- ✅ 中国リージョン

---

## 📚 参考情報

### 公式ドキュメント
- [AWS Organizations Documentation](https://docs.aws.amazon.com/organizations/latest/APIReference/Welcome.html)
- [AWS CloudTrail Documentation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/)
- [Amazon EventBridge Documentation](https://docs.aws.amazon.com/eventbridge/)
- [CloudWatch Alarms Documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/)

### 関連情報
- [AWS Cloud Security Best Practices 2026](https://blog.qualys.com/product-tech/2026/04/09/1aws-cloud-security-best-practices-guide)
- [AWS Organizations 本体の詳細](https://aws.amazon.com/organizations/)

---

## 🚀 次のステップ

1. **環境確認**: 現在の CloudTrail 設定を確認
2. **アラーム設定**: CloudWatch アラームを構成
3. **自動化実装**: EventBridge ルールを作成
4. **テスト**: 開発環境で動作確認
5. **本番展開**: 段階的に本番環境へ適用

---

**このドキュメントについてのご質問は、AWS サポートまでお問い合わせください。**