# Amazon CloudWatch、Metrics Insights のクエリ対象期間を2週間に拡張

Amazon CloudWatch now supports querying metrics data up to two weeks old

**カテゴリ:** What's New
**公開日:** 2026-05-29
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-mi-extended-retention-region-expansion)

このページでは、AWS What's Newで発表された「Amazon CloudWatch now supports querying metrics data up to two weeks old」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch の Metrics Insights が過去 2 週間のメトリクスデータをクエリできるようになり、従来の 3 時間制限から大幅に拡張されました。これにより、長期的なトレンド分析と事後調査が可能になり、運用チームの効率性と可視性が向上します。

## このアップデートで何が変わったか

- Amazon CloudWatch の Metrics Insights クエリ機能が、過去 2 週間のメトリクスデータをクエリできるようになりました。
- 従来は Metrics Insights SQL クエリを使用する場合、ダッシュボードとアラームの作成時に 3 時間以内のデータのみを可視化できていましたが、今回の拡張により、より長期間のデータ分析が可能になりました。
- この新機能により、イベント発生から数日後であっても、トレンド分析と影響調査を実施できるようになりました。
- 本機能は AWS GovCloud (US-East) および AWS GovCloud (US-West) リージョンで利用可能です。
- 過去 2 週間のメトリクスデータをクエリする機能は、追加費用なしで自動的に利用可能であり、標準的な料金体系が適用されます。
- このアップデートは、動的なメトリクスグループの監視を行い、長期的なデータ分析と調査が必要な組織に適しています。
- 運用チームが操作の健全性を向上させ、イベント発生後の影響を見落とさないようにすることができます。

## 詳細

- Amazon CloudWatch の Metrics Insights クエリ機能が、過去 2 週間のメトリクスデータをクエリできるようになりました。
- 従来は Metrics Insights SQL クエリを使用する場合、ダッシュボードとアラームの作成時に 3 時間以内のデータのみを可視化できていましたが、今回の拡張により、より長期間のデータ分析が可能になりました。
- この新機能により、イベント発生から数日後であっても、トレンド分析と影響調査を実施できるようになりました。
- 本機能は AWS GovCloud (US-East) および AWS GovCloud (US-West) リージョンで利用可能です。
- 過去 2 週間のメトリクスデータをクエリする機能は、追加費用なしで自動的に利用可能であり、標準的な料金体系が適用されます。
- このアップデートは、動的なメトリクスグループの監視を行い、長期的なデータ分析と調査が必要な組織に適しています。
- 運用チームが操作の健全性を向上させ、イベント発生後の影響を見落とさないようにすることができます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-mi-extended-retention-region-expansion)
