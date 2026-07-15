# Amazon CloudFront Functions でアクセスログへのカスタムデータ記録が可能に

Amazon CloudFront Functions now supports logging to CloudFront access logs

**カテゴリ:** What's New
**公開日:** 2026-07-14T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudfront-functions-access-logs/)

このページでは、AWS What's Newで発表された「Amazon CloudFront Functions now supports logging to CloudFront access logs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

CloudFront Functionsが新しいヘルパーメソッド「cf.logCustomData()」をサポートするようになり、カスタムデータを直接CloudFrontアクセスログに書き込むことが可能になりました。これにより、複数のログシステムを相関させる必要がなくなり、単一のクエリで関数の動作とリクエスト結果を効率的に分析できるようになります。

## このアップデートで何が変わったか

- CloudFront Functionsが新しいヘルパーメソッド「cf.logCustomData()」をサポートするようになりました。
- このメソッドにより、CloudFront Functionsから直接CloudFront アクセスログにカスタムデータを書き込むことができるようになりました。
- A/Bテスト、認証結果、ルーティング決定などの値をログに記録できます。
- Viewer RequestおよびViewer Response関数から呼び出すことが可能です。
- CloudFront リアルタイムログ設定と標準ログ（v2）の両方に対応しています。
- 既存のconsole.log()機能は引き続き利用でき、同じ関数内で両方のメソッドを使用できます。
- 複数のログシステムにわたってデータを相関させる必要がなくなり、単一のクエリで関数の動作とリクエスト結果を分析できます。
- 全CloudFrontエッジロケーションで本日から利用可能です。
- cf.logCustomData()の使用に追加料金はかかりません。
- 標準的なCloudFront Functions呼び出し料金とアクセスログ配信料金が適用されます。

## 詳細

- CloudFront Functionsが新しいヘルパーメソッド「cf.logCustomData()」をサポートするようになりました。
- このメソッドにより、CloudFront Functionsから直接CloudFront アクセスログにカスタムデータを書き込むことができるようになりました。
- A/Bテスト、認証結果、ルーティング決定などの値をログに記録できます。
- Viewer RequestおよびViewer Response関数から呼び出すことが可能です。
- CloudFront リアルタイムログ設定と標準ログ（v2）の両方に対応しています。
- 既存のconsole.log()機能は引き続き利用でき、同じ関数内で両方のメソッドを使用できます。
- 複数のログシステムにわたってデータを相関させる必要がなくなり、単一のクエリで関数の動作とリクエスト結果を分析できます。
- 全CloudFrontエッジロケーションで本日から利用可能です。
- cf.logCustomData()の使用に追加料金はかかりません。
- 標準的なCloudFront Functions呼び出し料金とアクセスログ配信料金が適用されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudfront-functions-access-logs/)