---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Aurora DSQL
変更データキャプチャ機能が一般提供開始

**発表日: 2026年7月8日**

---

## 概要

### 何が変わったか

- **Amazon Aurora DSQL CDC が一般提供開始**
  データベース変更をリアルタイムで Kinesis Data Streams にストリーミング

- **完全マネージドサービス**
  インフラ管理が不要、セットアップ不要

- **複数の AWS サービスと統合**
  Lambda、S3、Redshift、OpenSearch Service と連携可能

---

## 前提・背景

### データ同期の課題

- マイクロサービス間のデータ同期は複雑
- リアルタイムデータベース変更の検出が困難
- カスタム ETL パイプラインの構築・保守コスト

### Aurora DSQL の進化

- 2026年5月: CDC 機能プレビュー開始
- 2026年7月: **一般提供開始**
- グローバル対応で複数リージョンをサポート

---

## 主な機能

### CDC ストリーミング機能

- **自動変更キャプチャ**: Insert、Update、Delete 操作をキャプチャ
- **構造化イベント**: JSON 形式での変更イベント配信
- **ゼロパフォーマンス影響**: データベースワークロードに影響なし

### 対応する AWS サービス

- **Amazon Kinesis Data Streams**: リアルタイムストリーミング
- **AWS Lambda**: イベント駆動処理
- **Amazon Data Firehose**: Amazon S3、Redshift、OpenSearch Service へのデータ配信

---

<!-- _class: small -->

## 機能の詳細

### リアルタイムデータベース変更

- 行レベルの変更を自動検出
- スキーマとテーブル情報を含む
- マルチリージョンクラスタの場合、すべてのリージョンの変更をキャプチャ

### インフラストラクチャ管理不要

- AWS が完全にマネージド
- スケーリング、冗長性、可用性は自動処理
- CDC ストリーミングの構成のみ必要

### 利用可能範囲

- Aurora DSQL が利用可能なすべての AWS リージョン
- AWS Free Tier で無料で開始可能
- 従量課金（DPU ベース）で追加コスト最小化

---

## 効果・メリット

### ビジネス効果

- **リアルタイムデータ同期**
  マイクロサービス間の即座なデータ一貫性を実現

- **イベント駆動アーキテクチャ**
  データベース変更に即応するワークフロー構築が可能

- **開発生産性向上**
  カスタムパイプライン開発の廃止で開発コスト削減

### 技術的メリット

- **スケーラビリティ**: 自動スケーリング対応
- **信頼性**: AWS インフラによる高可用性
- **運用効率**: ゼロ管理負荷

---

## ユースケース

### 1. リアルタイム分析

- データベース変更を Redshift にストリーミング
- ダッシュボード、BI ツールで即座に反映

### 2. マイクロサービス間のデータ同期

- 注文サービス → 在庫サービス
- 顧客サービス → 推奨エンジン

### 3. イベント駆動ワークフロー

- 新規ユーザ登録 → ウェルカムメール送信（Lambda）
- 在庫変更 → 通知配信

---

## まとめ

### Amazon Aurora DSQL CDC の位置づけ

- **最新の分散データベース機能**
  PostgreSQL 互換性を保ちながら CDC をネイティブサポート

- **エンタープライズグレードの信頼性**
  AWS が運用、セキュリティとコンプライアンス対応

- **現代的なアーキテクチャに対応**
  イベント駆動、マイクロサービス、リアルタイム分析

### 次のステップ

1. 自社のワークロードに適用できるユースケースを検討
2. Aurora DSQL クラスタで CDC ストリーミングを有効化
3. Kinesis Data Streams コンシューマを実装
4. 本番環境への展開

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-aurora-dsql-cdc-ga/
- **CDC ドキュメント**: https://docs.aws.amazon.com/aurora-dsql/latest/userguide/cdc-streams.html
- **ブログ**: https://aws.amazon.com/blogs/database/getting-started-with-change-data-capture-in-amazon-aurora-dsql
- **Aurora DSQL ガイド**: https://docs.aws.amazon.com/aurora-dsql/latest/userguide/doc-history.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**