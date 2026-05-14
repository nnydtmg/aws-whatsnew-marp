---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Aurora DSQLがChange Data Capture（CDC）をサポート

リアルタイムデータベース変更ストリーミング

**発表日: 2026年5月14日**

---

## 概要

### Amazon Aurora DSQLにCDC機能が登場

- **リアルタイムストリーミング**: データベース変更をAmazon Kinesis Data Streamsへ直接配信
- **カスタムパイプライン不要**: 完全マネージド型でインフラセットアップなし
- **ダウンストリーム処理**: Lambda、Firehose、S3、Redshift、OpenSearchへの統合が容易

### 主な対象ユースケース

- イベント駆動型アプリケーションの構築
- リアルタイム分析パイプラインの実装
- マイクロサービス間のデータ同期

---

## 前提・背景

### 従来の課題

- **データベース変更の追跡**: 手動でストリーミングパイプラインを構築・運用
- **複雑な統合**: マイクロサービス間でのデータ同期に手間
- **メンテナンスコスト**: カスタムロジックの保守が必要

### Aurora DSQLの進化

- 2025年以降、エンタープライズグレードの分散SQLデータベース
- PostgreSQL互換性により既存スキルを活用可能
- サーバーレスで自動スケーリング対応

### 市場の動向

- イベント駆動型アーキテクチャの需要増加
- リアルタイムデータ処理への強いニーズ
- AWSネイティブサービス統合の価値向上

---

## 主な機能

### Change Data Capture（CDC）の機能

- **自動キャプチャ**: Insert、Update、Delete操作を自動追跡
- **変更イベント**: 構造化された変更イベントとして配信
- **ゼロインパクト設計**: データベースワークロードへの影響なし

### 対応アーキテクチャ

```
Amazon Aurora DSQL → Kinesis Data Streams → Lambda / Firehose
                                                    ↓
                            S3 / Redshift / OpenSearch Service
```

### キャプチャ対象操作

- **INSERT**: 新規レコード追加
- **UPDATE**: 既存レコード変更
- **DELETE**: レコード削除

---

## 利用シーン・メリット

### 1. マイクロサービスアーキテクチャ

- 複数サービス間でのデータ同期が自動化
- 依存関係を減らし独立性を向上
- イベント駆動型設計が実現しやすい

### 2. リアルタイム分析

- 変更データをRedshiftやOpenSearchに即座に配信
- ダッシュボード・検索の鮮度向上
- ビジネス分析の即時性が改善

### 3. ダウンストリーム処理

- Lambdaでのカスタム処理トリガー
- Firehose経由での複数サービス配信
- 柔軟なパイプライン構築が可能

---

<!-- _class: small -->

## 技術仕様

### 利用可能な地域

- **グローバル対応**: Aurora DSQLが利用可能なすべてのAWSリージョン
- **マルチリージョン**: マルチリージョンクラスタにも対応予定

### 課金モデル

- **DPU課金**: Distributed Processing Units（DPU）ベースで計量
- **キャプチャデータ量に応じた課金**: 実際に処理したデータ量で課金
- **Kinesis別途課金**: Amazon Kinesis Data Streamsの料金は別途適用

### 現在のステータス

- **プレビュー段階**: 継続的な改善と機能追加予定
- **本番サポート**: 計画中（GA発表待機）

---

## まとめ

### Amazon Aurora DSQL CDCの価値

- **自動化**: 複雑なストリーミングパイプラインの構築が不要
- **スケーラビリティ**: マネージド型でスケーリングを自動処理
- **統合の容易さ**: AWS服務との統合が标准化
- **運用効率**: インフラ管理コストの削減

### 次のステップ

1. **試験**: プレビュー段階で試験的運用を開始
2. **パイロット**: 小規模プロジェクトでの検証
3. **展開**: 本格運用への段階的移行

---

## 参考リソース

### AWS公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-aurora-dsql-change-data-capture-preview/
- **Getting Started CDC**: https://docs.aws.amazon.com/aurora-dsql/latest/userguide/cdc-setup.html
- **AWS Database Blog**: https://aws.amazon.com/blogs/database/getting-started-with-change-data-capture-in-amazon-aurora-dsql/

### 関連サービス

- **Amazon Aurora DSQL**: https://docs.aws.amazon.com/aurora-dsql/latest/userguide/what-is-aurora-dsql.html
- **Amazon Kinesis Data Streams**: https://aws.amazon.com/kinesis/data-streams/
- **AWS Lambda**: https://aws.amazon.com/lambda/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**