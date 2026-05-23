---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Logs Insights
新しいクエリコマンドと関数を追加

**発表日: 2026年5月21日**

---

## 概要

### 追加された13個の新機能

- **文字列・数値関数**: round、startswith、endswith、case、regex_replace、haversine
- **エンコーディング関数**: urlencode、urldecode、base64encode、base64decode
- **解析コマンド**: parse logfmt、expand、relevantfields

### 主な特徴

- 高度なログ解析と複雑なデータ変換が可能
- 非JSON形式のログの解析に対応
- すべての商用AWSリージョンで利用可能

---

## 前提・背景

### 従来の課題

- CloudWatch Logs Insightsでの複雑なデータ操作に制限
- 非JSON形式（logfmt等）のログ解析が困難
- Base64やURL エンコード済みデータの処理が複雑

### 市場の動向

- ログ分析の高度化・自動化への需要拡大
- マイクロサービスアーキテクチャの普及に伴うログの多様化
- セキュリティ分析、コンプライアンス監視の重要性向上

---

## 新機能の詳細

### 文字列・数値操作

- **round**: 数値の丸め処理
- **startswith / endswith**: 文字列の前後判定
- **case**: 条件付き文字列操作
- **regex_replace**: 正規表現による置換
- **haversine**: 座標間の距離計算

### エンコーディング・デコーディング

- **urlencode / urldecode**: URLエンコード処理
- **base64encode / base64decode**: Base64の相互変換
- インラインでのデコード実行が可能

---

## 新コマンドと分析機能

### parse logfmt

- logfmt形式（Apache等のログ）を構造化データとして解析
- フィールド単位での抽出が容易

### expand

- ネストされたJSON配列を個別レコードに展開
- 複雑な階層構造の処理が簡素化

### relevantfields

- 高カーディナリティロググループで関連フィールドを自動検出
- 異常検知やトレンド分析を効率化

---

## 利用シーン

### セキュリティ監視

- エンコード済みペイロードのインライン解析
- 疑わしいアクセスパターンの検出
- ログフォーマットの統一化

### パフォーマンス分析

- エンドツーエンド遅延の地理的距離分析
- 複雑なデータ構造の自動処理
- 高カーディナリティデータからの特異値検出

### コンプライアンス

- 多形式ログの統一化解析
- 構造化されていないログの整形

---

## 効果・メリット

- **分析性の向上**: 複雑なログデータの直感的な操作
- **開発効率の改善**: クエリロジックの簡素化
- **運用コスト削減**: 外部ツールの削減、処理時間短縮
- **セキュリティ強化**: エンコード済みデータの即座な検査
- **スケーラビリティ**: 大規模・複雑なログセットへの対応

---

## まとめ

### Amazon CloudWatch Logs Insights の進化

- エンタープライズグレードのログ分析プラットフォームへの進化
- データ形式の多様性に対応する拡張性
- セキュリティ・コンプライアンス要件への対応力向上

### 推奨される次のステップ

1. 新機能の動作確認（テスト環境での検証）
2. 既存クエリのベストプラクティス見直し
3. 本番環境での段階的導入
4. チーム内での新機能トレーニング

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-logs-insights/
- **Amazon CloudWatch Logs Insights ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- **CloudWatch Logs Insights クエリ構文**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**