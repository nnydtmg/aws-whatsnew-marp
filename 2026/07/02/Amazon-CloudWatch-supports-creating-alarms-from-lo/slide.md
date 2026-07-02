---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch ログクエリからのアラーム作成に対応

Amazon CloudWatch supports creating alarms from log queries

**発表日: 2026年7月1日**

---

## 概要

### Amazon CloudWatch の新機能

- **ログクエリからのアラーム作成**: メトリクスフィルターなしに直接アラームを設定可能
- **ワークフロー簡素化**: 中間ステップを削減し、ログ分析から監視への流れを効率化
- **異常検知の強化**: ログデータの異常を迅速に検出・通知

### 主な特徴

- CloudWatch Logs Insights クエリから直接アラームを作成
- 標準的なCloudWatchアラームアクションをすべてサポート
- SNS通知、EventBridge統合などに対応

---

## 前提・背景

### ログ監視の課題

- 従来: ログ → メトリクスフィルター → カスタムメトリクス → アラーム（複数ステップ）
- 問題: 設定の複雑さ、導入時間の増加、運用コストの上昇
- 必要性: DevOpsエンジニア、SREの負担軽減

### CloudWatch の進化

- CloudWatch Logs Insights の活用が拡大
- リアルタイム監視・アラート機能の需要増加
- 複雑な運用ワークフローの簡素化が急務

---

## 変更内容・新機能

### 1. ログクエリベースのアラーム

- CloudWatch Logs Insights クエリを直接アラームの条件として設定
- 自動スケジュール実行による継続的な監視
- しきい値を設定して異常検知を自動化

### 2. サポートされるアラームアクション

- **Amazon SNS**: メール、SMS、Slack連携など
- **Amazon EventBridge**: Lambda、SQS、Step Functions トリガー
- **CloudWatch アクション**: Autoscaling、EC2 アクション

### 3. 対応インターフェース

- CloudWatchコンソール（UI ベース）
- AWS CLI（スクリプト化）
- AWS CloudFormation（Infrastructure as Code）
- AWS SDK（プログラマティック）

---

## 利用可能リージョン

### 展開状況

- **対応**: ほぼすべての商用AWSリージョン
- **非対応**: 中東（UAE）、中東（バーレーン）
- 段階的な展開により順次利用可能に

### ユースケース

- **エラーログの監視**: エラー率が閾値を超えた場合にアラート
- **セキュリティ監視**: 不正アクセス試行の検出
- **パフォーマンス監視**: レスポンスタイムの異常を検知

---

## 効果・メリット

### 運用効率化

- **設定時間の短縮**: メトリクスフィルター作成不要 → 90% 以上削減
- **学習曲線の低下**: ログクエリの知識があれば、追加学習不要
- **ワークフロー統一**: ログ分析から監視までをシームレスに実行

### コスト削減

- カスタムメトリクスの作成・保管コスト削減
- 運用チームの生産性向上
- 問題対応時間の短縮

### 監視精度の向上

- ログデータ全体を活用した柔軟なアラーム条件設定
- 複合条件による誤検知の削減
- ログコンテキスト付きのアラーム通知で問題把握が高速化

---

## ユースケース

### ケース1: エラー率監視

```
CloudWatch Logs Insights クエリ:
fields @timestamp, @message
| filter @message like /ERROR/
| stats count() as error_count
| filter error_count > 10

→ このクエリから直接アラーム作成
→ エラーが10件超過時に通知
```

### ケース2: セキュリティ監視

- 認証失敗ログの監視
- 不正なAPI呼び出しの検出
- DDoS 攻撃の兆候検知

### ケース3: パフォーマンス監視

- API レスポンスタイムの異常検知
- データベース接続プール枯渇の警告
- キューの遅延検出

---

## まとめ

### 主な改善点

- ✅ **シンプル**: ログクエリから直接アラーム作成
- ✅ **迅速**: 設定時間を大幅短縮
- ✅ **柔軟**: あらゆるログパターンに対応可能
- ✅ **統合**: 既存のCloudWatchアラーム機能をフル活用

### 推奨される次のステップ

1. **現在のログクエリを見直し**: 既に運用中のクエリから利用開始
2. **パイロット導入**: 非本番環境で試験実施
3. **本番展開**: CloudFormationで自動化された導入
4. **監視ダッシュボード**: CloudWatch Dashboards で一元管理

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: [Amazon CloudWatch supports creating alarms from log queries](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-log-alarms/)
- **CloudWatch ドキュメント**: [Using Amazon CloudWatch alarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Alarms.html)
- **Logs Insights**: [CloudWatch Logs Insights クエリ構文](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html)

### 関連情報

- [AWS CloudWatch Alerting Best Practices](https://oneuptime.com/blog/post/2026-02-13-aws-cloudwatch-alerting-best-practices/view)
- [AWS CloudWatch (Amazon CloudWatch) Guide 2026](https://www.netcomlearning.com/blog/amazon-cloudwatch)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
