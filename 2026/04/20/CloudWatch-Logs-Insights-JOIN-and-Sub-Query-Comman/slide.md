---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# CloudWatch Logs Insights
JOIN と sub-query コマンドが登場

**発表日: 2026年4月20日**

---

## 概要

### 複数のログソースを1つのクエリで分析可能に

- **JOIN コマンド**: 異なるロググループのデータを一致フィールドで結合
- **sub-query コマンド**: ネストされたクエリで中間結果セットを生成

### これまでの課題を解決

- 複数のクエリ実行が不要
- 結果の手動結合が不要
- ログ分析の複雑さを大幅削減

---

## 前提・背景

### 市場の動向

- 複数のマイクロサービス環境でのログ相関分析の需要が増加
- DevOpsエンジニアの運用負荷が増加傾向
- セキュリティ分析で複数ログソースの相関が重要

### CloudWatch Logs Insights の進化

- 既にパワフルなクエリ言語として採用
- 2026年3月: パラメータ付き保存クエリ対応
- 今回: 複数ロググループ相関分析の完全対応

---

## 変更内容・新機能

### 1. JOIN コマンド

結合キーとなるフィールドで複数ロググループのデータを結合

```
fields @timestamp, @message, requestId
| join (fields @timestamp, response_time, requestId) 
  as inner on requestId
```

### 2. sub-query コマンド

中間クエリの結果を後続のクエリで利用可能

```
fields service, errors
| filter errors > 20
| as errors_summary
```

---

## 利用可能な範囲

### 対応リージョン

✅ **すべての商用 AWS リージョン**

- 本日から利用開始可能
- 追加費用なし

### 対象ユーザー

- システム管理者
- DevOps エンジニア
- セキュリティアナリスト
- ログ分析を日常業務とするすべてのユーザー

---

## 効果・メリット

<div class="columns">
<div>

### 運用効率の向上

- 🚀 分析時間の短縮
- 🔄 クエリロジックの簡素化
- 📊 複合分析の実現

</div>
<div>

### 問題解決の加速

- ⚡ トラブルシューティング時間削減
- 🔍 相関原因の早期発見
- 🛡️ セキュリティ対応の迅速化

</div>
</div>

---

## ユースケース

### 1. エラー相関分析

過去1日間に20件以上のエラーが発生したサービスを特定し、パフォーマンスデータと相関させて優先順位付け

### 2. セキュリティ分析

複数サービス全体でセキュリティイベントを分析し、攻撃パターンを検出

### 3. ユーザーセッション追跡

分散システム全体でユーザーセッションを追跡し、エンドツーエンドの可視化を実現

---

## 実装例

### sub-query を使用したエラーサービスの特定

```
fields service, @message
| filter @message like /ERROR/
| stats count() as error_count by service
| filter error_count > 20
```

### JOIN を使用したパフォーマンス相関

```
fields service, response_time, requestId
| join (
  fields service, errors, requestId
) on service
| stats avg(response_time) as avg_time by service
```

---

## まとめ

### CloudWatch Logs Insights の新しい可能性

✅ **複数ロググループの効率的な分析**
- JOIN と sub-query で複雑な相関分析が単一クエリで実現

✅ **運用効率の向上**
- 手動結合作業の完全排除で分析時間を大幅短縮

✅ **エンタープライズ対応**
- セキュリティ、DevOps 、SRE チームの生産性を向上

---

## 参考リソース

- **AWS 公式記事**: https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-logs-insights-join-sub-query/
- **CloudWatch Logs Insights ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- **CloudWatch Logs Insights クエリ構文**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**