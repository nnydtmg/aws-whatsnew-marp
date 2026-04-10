---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Pipelines
条件付き処理とドロップイベント処理がサポート開始

**発表日: 2026年4月10日**

---

## 概要

### CloudWatch Pipelines の新機能

- **条件付き処理**: プロセッサー実行時期とログエントリーごとの処理適用を制御
- **ドロップイベントプロセッサー**: 不要なログエントリーを条件に基づいてフィルタリング
- **21個のプロセッサー対応**: Add Entries、Delete Entries、Copy Values、Grok など
- **追加コスト無し**: 既存の CloudWatch Logs 料金のみで利用可能

---

## 前提・背景

### 従来の課題

- ログデータの大量処理におけるノイズの増加
- インジェスト・ストレージコストの増大
- ログ変換時の制御の限界
- 条件分岐による複雑な処理フロー実装の困難さ

### CloudWatch Pipelines

- AWS が提供するマネージド型データパイプラインソリューション
- テレメトリーおよびセキュリティデータの収集、フィルタリング、ルーティングを一元化
- エンタープライズ規模のログ処理に対応

---

## 変更内容・新機能

### 1. 条件付き処理（Conditional Processing）

- **「run when」条件**: 各プロセッサーに条件を設定
- **プロセッサーレベル制御**: 条件不満足時はプロセッサー全体をスキップ
- **エントリーレベル制御**: 個別ログエントリーに対する処理の適用を制御
- **対応プロセッサー**: 21個のプロセッサー全体で利用可能

### 2. 新しいドロップイベントプロセッサー

- **条件ベースのフィルタリング**: 定義した条件に基づいて不要ログを削除
- **サードパーティパイプライン対応**: 外部パイプラインコネクターからの入力に対応
- **ノイズ削減**: 不要なログエントリーを早期に除外

---

## 効果・メリット

### コスト最適化

- **ノイズ削減**: 不要なログデータの自動フィルタリング
- **ストレージ効率化**: 不要なログをインジェスト前に削除
- **追加コスト無し**: CloudWatch Logs の標準料金のみで実装

### 運用効率化

- **柔軟なログ処理**: 条件に応じた動的な処理フロー
- **複雑なワークフロー対応**: 複数条件の組み合わせが可能
- **メンテナンス性向上**: 条件ロジックを明示的に定義

### セキュリティ・ガバナンス

- **感度の高いログの選別**: 条件付きで機密情報をフィルタリング
- **ログの均一性向上**: パイプライン全体での一貫した処理

---

## ユースケース

### 1. 多量ログからの重要情報抽出

```
エラーレベルのログのみを処理対象
→ INFO・DEBUG ログは自動フィルタリング
```

### 2. サードパーティデータの前処理

```
外部パイプラインからのデータ受信
→ 不要フィールド削除 + 条件フィルタリング
→ CloudWatch に送信
```

### 3. セキュリティログの処理

```
全ログから脅威指標を含むエントリーを抽出
→ 専用保管庫へルーティング
→ その他は別処理フロー
```

---

## 対応リージョン・料金

### 利用可能範囲

- **リージョン**: CloudWatch Pipelines が一般提供されているすべての AWS リージョン
- **機能**: 条件付き処理とドロップイベントプロセッサー

### 料金

| 項目 | 料金 |
|-----|------|
| 条件付き処理 | **無料** |
| ドロップイベントプロセッサー | **無料** |
| CloudWatch Logs（インジェスト） | 標準料金 |
| CloudWatch Logs（ストレージ） | 標準料金 |

---

## 実装例

### 条件付き処理の設定

```yaml
Processors:
  - Name: copy_values
    RunWhen: '$.severity == "ERROR"'
    TargetFields:
      - SourceField: error_message
        TargetField: critical_message

  - Name: drop_events
    RunWhen: '$.severity == "DEBUG"'
```

---

## まとめ

### CloudWatch Pipelines の進化

- **条件付き処理**: より細かいログ制御が可能に
- **ドロップイベントプロセッサー**: ノイズ削減と効率化を実現
- **コスト最適化**: 追加投資なしで導入可能
- **運用効率向上**: 複雑なワークフロー実装が容易

### 推奨される取り組み

1. **現状ログ分析**: 自社ログの規模と内容を把握
2. **条件ルール設計**: フィルタリング条件を定義
3. **パイロット導入**: テスト環境での実装と検証
4. **本番展開**: 段階的なロールアウト

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-pipelines-conditional/
- **条件付き処理の構文**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/conditional-processing.html
- **パイプライン作成ガイド**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Creating-pipelines.html
- **CloudWatch Pipelines ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html
- **パイプラインプロセッサー一覧**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/pipeline-processors.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**