---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront Functions でアクセスログへのカスタムデータ記録が可能に

Amazon CloudFront Functions now supports logging to CloudFront access logs

**What's New** | 2026-07-14T08:00:00

---

## 概要

- CloudFront Functionsが新しいヘルパーメソッド「cf.logCustomData()」をサポートするようになり、カスタムデータを直接CloudFrontアクセスログに書き込むことが可能になりました。
- これにより、複数のログシステムを相関させる必要がなくなり、単一のクエリで関数の動作とリクエスト結果を効率的に分析できるようになります。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch expands auto-enablement to Amazon CloudFront logs and 3 additional resource types - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-cloudfront-enablement)

- **CloudFront and edge function logging - Amazon CloudFront**
  [詳細](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/logging.html)

- **Access logs (standard logs) - Amazon CloudFront**
  [詳細](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html)

---

## 変更内容・新機能

- CloudFront Functionsが新しいヘルパーメソッド「cf.logCustomData()」をサポートするようになりました。
- このメソッドにより、CloudFront Functionsから直接CloudFront アクセスログにカスタムデータを書き込むことができるようになりました。
- **対応する使用例:**
  - A/Bテストの結果ログ
  - 認証結果の記録
  - ルーティング決定の追跡
- Viewer RequestおよびViewer Response関数から呼び出すことが可能です。
- CloudFront リアルタイムログ設定と標準ログ（v2）の両方に対応しています。
- 既存のconsole.log()機能は引き続き利用でき、同じ関数内で両方のメソッドを使用できます。

---

## メリット

### 運用効率の向上

- 複数のログシステムにわたってデータを相関させる必要がなくなります
- 単一のクエリで関数の動作とリクエスト結果を分析できます
- CloudFront Functions実行の詳細なトレーサビリティが実現

### コスト効率

- cf.logCustomData()の使用に追加料金はかかりません
- 標準的なCloudFront Functions呼び出し料金とアクセスログ配信料金のみが適用されます

### 可用性

- 全CloudFrontエッジロケーションで本日から利用可能です

---

## 使用開始

- CloudFront Functionsのコード内で cf.logCustomData() メソッドを呼び出すだけです
- Viewer Request または Viewer Response ハンドラーで使用可能
- 既存のconsole.log()との共存が可能

---

## まとめ

- Amazon CloudFront Functions でのカスタムデータのアクセスログへの直接記録が可能に
- ログ分析の簡素化により、運用効率が向上
- 追加料金なしで全エッジロケーションで利用可能

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudfront-functions-access-logs/)

### 関連情報

- [Amazon CloudWatch expands auto-enablement to Amazon CloudFront logs and 3 additional resource types - AWS](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-cloudfront-enablement)
- [CloudFront and edge function logging - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/logging.html)
- [Access logs (standard logs) - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html)
- [Logging and monitoring in Amazon CloudFront - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/logging-and-monitoring.html)
- [CloudFront Logging Enabled | TrendAI™](https://trendmicro.com/trendaivisiononecloudriskmanagement/knowledge-base/aws/CloudFront/cloudfront-logging-enabled.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**