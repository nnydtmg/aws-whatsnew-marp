---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch、Metrics Insights のクエリ対象期間を2週間に拡張

Amazon CloudWatch now supports querying metrics data up to two weeks old

**What's New** | 2026-05-29

---

## 概要

- Amazon CloudWatch の Metrics Insights が過去 2 週間のメトリクスデータをクエリできるようになり、従来の 3 時間制限から大幅に拡張されました。
- これにより、長期的なトレンド分析と事後調査が可能になり、運用チームの効率性と可視性が向上します。

---

## 前提・背景

### これまでの課題

- 従来の Metrics Insights SQL クエリでは、ダッシュボードとアラーム作成時に 3 時間以内のデータのみを可視化可能でした
- イベント発生から数日後のトレンド分析と影響調査が困難でした
- 長期的なデータ分析ニーズに対応していませんでした

### AWS CloudWatch の進化

- CloudWatch は現在すべてのメトリクスを 15 ヶ月間保存（5分粒度データは63日間）
- Metrics Insights クエリ機能の対象期間を段階的に拡張
- より柔軟な監視・分析機能へのニーズが高まる

---

## 変更内容・新機能

### クエリ対象期間の拡張

- **従来:** 3 時間以内のメトリクスデータのみクエリ可能
- **新機能:** 過去 2 週間のメトリクスデータをクエリ可能
- より長期間のデータ分析に対応

### 利用可能リージョン

- AWS GovCloud (US-East)
- AWS GovCloud (US-West)

---

## 効果・メリット

- **長期トレンド分析:** 2週間のデータから傾向を把握
- **事後調査の強化:** イベント発生後のインシデント分析が容易
- **運用効率向上:** より多くの履歴データで意思決定をサポート
- **追加費用なし:** 自動的に利用可能、標準料金が適用
- **運用チームの可視性向上:** 過去のインシデント影響を見落としなし

---

## ユースケース

- パフォーマンス異常のルートコーズ分析
- キャパシティプランニング向けの長期トレンド分析
- セキュリティインシデント調査における詳細な時系列分析
- SLA違反のルート原因特定
- 動的なメトリクスグループの監視

---

## まとめ

- Amazon CloudWatch の Metrics Insights クエリ機能が大幅に拡張
- 従来の 3 時間から 2 週間のデータをクエリ可能に
- 長期的なトレンド分析と事後調査が可能に
- 追加費用なしで自動利用可能
- 運用チームの効率性と可視性が向上

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-mi-extended-retention-region-expansion)

### 関連情報

- [Amazon CloudWatch Update – Extended Metrics Retention & User Interface Update](https://aws.amazon.com/blogs/aws/amazon-cloudwatch-update-extended-metrics-retention-user-interface-update)
- [AWS CloudWatch (Amazon CloudWatch) Guide 2026](https://www.netcomlearning.com/blog/amazon-cloudwatch)
- [Metrics Insights quotas - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-limits.html)
