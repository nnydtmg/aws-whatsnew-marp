# Amazon CloudWatch Logs Insights に新しいクエリコマンドと関数を追加

Amazon CloudWatch Logs Insights adds new query commands and functions

**カテゴリ:** What's New
**公開日:** 2026-05-21
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-insights/)

---

## 要約

Amazon CloudWatch Logs Insightsに13個の新しいコマンドと関数が追加されました。文字列操作、エンコーディング/デコーディング、ログ解析、地理的距離計算などの高度なログ分析機能が提供されます。これらの機能は、複雑なログ分析やデータ変換が必要なお客様にとって非常に有用です。

---

## このアップデートで何が変わったか

### 追加された13個の新機能

#### 1. 文字列および数値関数（6個）
- **round**: 数値を指定した桁数に丸める
- **startswith**: 文字列が特定の接頭辞で始まるかを判定
- **endswith**: 文字列が特定の接尾辞で終わるかを判定  
- **case**: 条件付きの文字列操作や値の選択
- **regex_replace**: 正規表現パターンに基づいた置換
- **haversine**: 2つの座標間の距離を計算（球面距離）

#### 2. エンコーディングおよびデコーディング関数（4個）
- **urlencode**: URLエンコード処理
- **urldecode**: URLデコード処理
- **base64encode**: Base64エンコード
- **base64decode**: Base64デコード
- インラインでのデコード実行が可能になり、別途ツール不要

#### 3. 解析および分析コマンド（3個）
- **parse logfmt**: logfmt形式（Apache等）の非JSON形式ログを構造化データとして解析
- **expand**: ネストされたJSON配列を個別レコードに展開
- **relevantfields**: 高カーディナリティロググループから関連フィールドを自動検出

### 主な変更点

1. **文字列プレフィックスによるログフィルタリング**
   - startswith/endswithを活用した高速フィルタリング

2. **Base64ペイロードのインライン解析**
   - エンコード済みデータを直接デコード可能
   - セキュリティ分析の効率化

3. **logfmt構造化ログの解析**
   - Apache、Nginx等のログから自動的にフィールドを抽出
   - JSONへの変換が不要

4. **ネストされたJSON配列の展開**
   - 複雑な階層構造を単一レコードに平坦化
   - 分析クエリの簡素化

5. **座標間距離の計算**
   - haversine関数で地理的距離を計算
   - ジオロケーション分析に活用可能

6. **高カーディナリティデータからの自動特異値検出**
   - relevantfieldsコマンドで関連フィールドを自動表示
   - 異常検知の効率化

### 利用可能性

- **リリース日**: 2026年5月21日
- **対象**: すべての商用AWSリージョン
- **料金**: CloudWatch Logs Insights の既存料金に変更なし

---

## 詳細情報

### 対象ユースケース

#### ログ分析
- Apache、Nginx等の非JSON形式ログの自動解析
- マイクロサービス環境での複雑なログ構造の処理
- セキュリティログの効率的なデコード

#### 文字列操作
- URLパラメータの抽出と解析
- Base64エンコード済みペイロードの検査
- 正規表現による動的なデータ変換

#### データ変換
- ネストされたJSON配列の正規化
- 異なるログフォーマットの統一化処理

#### 地理的距離計算
- CDNやグローバルネットワークの遅延分析
- ロケーションベースのトラブルシューティング

### 推奨される利用シーン

1. **セキュリティ監視**
   - エンコード済みペイロードのインライン解析
   - 疑わしいアクセスパターンの検出

2. **パフォーマンス分析**
   - エンドツーエンド遅延の地理的な関連性分析
   - 複雑なデータ構造からのパフォーマンスメトリクス抽出

3. **コンプライアンス**
   - 多形式ログの統一化処理
   - 監査ログの効率的な検索・分析

4. **異常検知**
   - 高カーディナリティデータからの自動特異値検出
   - 予期しない動作パターンの特定

---

## メリットと効果

### 分析性の向上
- 複雑なログデータをクエリレベルで直感的に操作可能
- 多様なデータ形式に対応した柔軟な分析

### 開発効率の改善
- クエリロジックの簡素化により開発時間を削減
- 複雑なデータ変換を別途ツール不要で実現

### 運用コスト削減
- 外部ツールの削減
- CloudWatch Logs Insightsだけで完結
- クエリ処理時間の短縮

### セキュリティ強化
- エンコード済みデータの即座な検査
- セキュリティイベントの高速な分析

### スケーラビリティ
- 大規模・複雑なログセットへの効率的な対応
- 高カーディナリティデータの自動処理

---

## 参考リンク

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-insights/
- **Amazon CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- **CloudWatch Logs Insights クエリ構文リファレンス**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html
- **CloudWatch Logs のベストプラクティス**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Best_Practice_Recommended_Alarms_AWS_Services.html

---

*このドキュメントは AWS What's New の記事をスライド形式で提供するために作成されました。最新情報は元記事をご確認ください。*