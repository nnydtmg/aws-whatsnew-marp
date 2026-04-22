# CloudWatch Logs Insights JOIN and Sub-Query Commands

**カテゴリ:** What's New
**公開日:** 2026-04-20
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-logs-insights-join-sub-query/](https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-logs-insights-join-sub-query/)

---

## 要約

Amazon CloudWatch Logs Insights に JOIN コマンドと sub-query コマンドが導入され、複数のログループにわたるデータの相関分析が単一のクエリで可能になりました。複数のクエリを実行して結果を手動で組み合わせる必要がなくなります。

## 詳細

### 【新機能】

- **JOIN コマンド**: 異なるロググループのデータを一致フィールドで結合
  - 結合キーとなるフィールドを指定して複数ロググループのデータを統合
  - 異なるソースからのデータ相関分析が可能

- **sub-query コマンド**: ネストされたクエリで中間結果セットを生成
  - 複雑なクエリを段階的に構築可能
  - 中間結果を後続のクエリで再利用可能

### 【利点】

- 複数のロググループにわたるログ分析が加速
- 異なるソースからのデータ相関分析が単一クエリで実現
- 複数のクエリ実行と手動結合が不要
- クエリロジックの簡素化により運用効率向上
- トラブルシューティング時間の大幅短縮

### 【ユースケース】

1. **エラー相関分析**
   - 異なるサービスとロググループ全体でアプリケーションとインフラストラクチャのエラーを相関
   - 過去1日間に20件以上のエラーが発生したサービスを特定し、パフォーマンスデータと相関
   - 単一クエリで高エラー率と最悪のパフォーマンス影響を持つサービスを優先順位付け

2. **セキュリティイベント分析**
   - 複数のサービス全体でセキュリティイベントを分析
   - 攻撃パターンの検出と相互相関

3. **ユーザーセッション追跡**
   - 分散システム全体でユーザーセッションを追跡
   - エンドツーエンドのユーザージャーニー可視化

### 【対象ユーザー】

- システム管理者
- DevOps エンジニア
- セキュリティアナリスト
- SRE (Site Reliability Engineer)
- 複数のログソースを分析する必要があるすべてのユーザー

### 【提供状況】

- ✅ すべての商用 AWS リージョンで本日から利用可能
- ✅ 追加費用なし
- ✅ CloudWatch Logs の既存顧客が利用可能

### 【関連アップデート】

- 2026年3月: CloudWatch Logs Insights で保存クエリがパラメータをサポート
  - クエリテンプレートの再利用性が向上
  - 最大20個のパラメータを定義可能

### 【活用シナリオ例】

**例1: マイクロサービスの障害分析**
```
sub-queryで各サービスのエラー率を計算
→ JOINでCPU/メモリ使用率と相関
→ リソース制限が障害の根本原因か判定
```

**例2: セキュリティインシデント調査**
```
sub-queryで不正アクセス試行を検出
→ JOINでアプリケーションログと相関
→ 影響を受けたユーザーと操作を特定
```

---

## 参考リソース

- AWS 公式記事: https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-logs-insights-join-sub-query/
- CloudWatch Logs Insights ドキュメント: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- CloudWatch Logs Insights クエリ構文: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html