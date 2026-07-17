# Amazon CloudWatch Logs Insights に25個の新しいクエリコマンドと関数が追加

Amazon CloudWatch Logs Insights adds 25 new query commands and functions

**カテゴリ:** What's New
**公開日:** 2026-07-15T21:56:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/7/amazon-cloudwatch-logs-insights-ql/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Logs Insights adds 25 new query commands and functions」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Logs Insightsは、ログのクエリ、変換、相関分析、分析能力を拡張する25個の新しいコマンドと関数を追加しました。これらの機能は、統計集計、時系列データの処理、異常値検出、データエンリッチメントが必要なお客様にとって有益であり、全ての商用AWSリージョンで本日より利用可能です。

## このアップデートで何が変わったか

### 25個の新機能（機能別カテゴリ）

#### 1. 型変換・エンコーディング関数（3個）
- **hexToAscii**: 16進数をASCII文字に変換
- **hexToDec**: 16進数を10進数に変換
- **decToHex**: 10進数を16進数に変換

#### 2. 日付・時間関数（5個）
- **parseDate**: 日付文字列をパース
- **formatDate**: 日付のフォーマット
- **queryStartTime**: クエリ開始時刻を取得
- **queryEndTime**: クエリ終了時刻を取得
- **queryTimeRange**: クエリ時間範囲を取得

#### 3. 文字列・JSON検査関数（4個）
- **messageSize**: メッセージサイズを計算
- **jsonArraySize**: JSON配列のサイズを取得
- **jsonArrayContains**: JSON配列に要素が含まれるか判定
- **isNumeric**: 値が数値かどうか判定

#### 4. 統計コマンド（3個）
- **variance**: 分散を計算
- **topk**: 上位k件を取得
- **countFrequent**: 頻度カウント

#### 5. 行処理・null処理コマンド（4個）
- **autoregress**: 自動回帰（前の行との関係を計算）
- **accum**: 累積計算
- **filldown**: 欠損値を下方に埋める
- **fillmissing**: 欠損値を埋める

#### 6. セッション化・時間比較コマンド（2個）
- **sessionize**: セッション化
- **logcompare**: ログを時間で比較

#### 7. データ分析コマンド（1個）
- **outlier**: 異常値を検出

#### 8. クエリ構成・結合・エンリッチメント（3個）
- **where**: 条件フィルター
- **appendcols**: 列の追加
- **cidrlookup**: CIDR範囲で外部データと結合（ルックアップエンリッチメント）

## 対象ユーザー

- **ログ分析エンジニア**: ログから有意義な統計情報を抽出する必要がある
- **セキュリティ分析チーム**: 異常値検出とアクセスパターン分析が必要
- **システム運用チーム**: パフォーマンス監視と時間比較分析を実施
- **アプリケーション開発者**: ログから詳細な動作分析を行う必要がある
- **データエンジニア**: ログと外部データソースの統合が必要

## 利用可能な地域

- **全ての商用AWSリージョン**: 2026年7月15日より提供開始

## 主な利点

### 1. データ品質の向上
- 統計処理により、ログから有意義なパターンを発見
- 欠損値の自動補完でデータセットの完全性向上
- 型変換により、異なるデータ形式の統一が可能

### 2. 分析精度の向上
- 異常値検出で問題を素早く識別
- 時系列比較でトレンド変化を検出
- セッション化でユーザー行動を追跡
- 統計分析で有意性の高いイベントを抽出

### 3. オペレーション効率化
- SQLのような直感的な構文
- 複雑な分析を簡潔に記述可能
- 外部ツール不要で全ての分析を実行
- 開発・運用コストの削減

### 4. エンタープライズ対応
- 大規模ログセットの高度な分析
- 複数システムのログの統合分析
- 外部ルックアップテーブルによる情報付加

## 実装シーン

### パフォーマンス監視
- セッション化と時間比較でレスポンスタイムの変動を分析
- 異常値検出で遅延や性能低下を自動検出
- variance関数で性能の揺らぎを定量化

### セキュリティ分析
- CIDR範囲で外部接続元を分類・判定
- 異常なアクセスパターンを検出
- 統計分析で通常と異なる活動を識別
- 時間比較で攻撃パターンの変化を捕捉

### ビジネスメトリクス分析
- 統計コマンドで重要度の高い事象をランキング
- 時間窓比較で前日比・前年比を計算
- セッションに基づく顧客行動の分析
- countFrequent で頻出イベントを抽出

### オペレーション統合
- 複数ログソースのデータエンリッチメント
- ルックアップテーブルによる情報付加
- 外部システムとの相関分析
- appendcols で追加情報の結合

## CloudWatch Logs Insights の進化時系列

- **2026年6月**: 23個の新コマンド・関数を追加
- **2026年6月（2回目）**: 13個の新コマンド・関数を追加
- **2026年7月**: さらに25個の新コマンド・関数を追加

→ 約2か月で60個以上の新機能が追加される急速な進化

## 今後の期待

CloudWatch Logs Insightsは以下の方向で進化が予想されます：

1. **機械学習統合**: より高度な異常検出やパターン認識
2. **リアルタイム分析**: ストリーミングデータ分析の拡充
3. **クロスサービス連携**: Athena、Dataなどとのシームレス統合
4. **可視化の強化**: より高度なグラフ表現機能

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/7/amazon-cloudwatch-logs-insights-ql/
- **Amazon CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_LogsInsights.html
- **関連アップデート (6月)**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-insights-new
- **AWS CloudWatch ブログ**: https://aws.amazon.com/blogs/devops/
