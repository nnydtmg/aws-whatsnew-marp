---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon MSK Express が Apache Iceberg のストリーミングテーブルへのデータ配信をサポート

Amazon MSK Express ブローカーがネイティブデータ配信機能を提供

**発表日: 2026年7月30日**

---

## 概要

### Amazon MSK Express の新機能

- **Apache Iceberg ストリーミングテーブルへの直接配信**
  - Apache Kafka トピックから Amazon S3 Tables 上の Iceberg テーブルへ継続的に具体化
  - カスタムパイプラインの開発・運用が不要

### 主なメリット

- データ取り込みコストを最大 **60% 削減**
- ダウンストリームクエリコストを最大 **30% 削減**
- インフラストラクチャ管理の負担を軽減

---

## 前提・背景

### リアルタイムデータ分析の課題

- Kafka からデータレイクへの配信が複雑
- カスタムパイプラインの開発・保守に多大なリソースが必要
- インテグレーション・フローのメンテナンスコストが高い
- スケーラビリティやパフォーマンスの最適化が難しい

### 市場トレンド

- Apache Iceberg が標準的なテーブル形式として普及
- AWS 内での Iceberg 統合が強化（S3 Tables、Kinesis Firehose など）
- リアルタイムから数分程度の鮮度データが必要なユースケースが増加

---

## 主な機能と改善

### 1. ネイティブデータ配信

- Apache Kafka トピックから Iceberg テーブルへ直接配信
- Amazon MSK コンソール、MSK API、または MCP サーバーから設定可能
- 数クリックで有効化できるシンプルな運用

### 2. パフォーマンス最適化

- **最大 10 GB/s のスループット** をサポート
- インテリジェント インライン圧縮により小ファイル問題を解決
- クエリパフォーマンスが予測可能に

---

## 機能詳細と最適化

### 3. 信頼性と互換性

- 組み込みの調整機能で並行書き込み競合を自動解決
- ブローカー出力スループットが増加しないため、インフラスケーリング不要
- Apache Spark、Trino、Apache Flink など複数のエンジンに対応

### 4. コスト効率化

- 自己管理型デプロイメント比で **60% のコスト削減**（取り込み・配信）
- ダウンストリームクエリコストも **30% 削減**
- 開発・運用コストの大幅低減

---

## 利用可能性

### 対応リージョン

- Amazon MSK Express ブローカーが利用可能なすべての AWS リージョンで提供

### 対応データ形式

- Apache Kafka トピックのデータを Iceberg テーブルに変換
- スキーマ進化（Schema Evolution）に対応
- Insert、Update、Delete 操作をサポート

### 統合サービス

- **Amazon S3 Tables**: 自動圧縮とスナップショット管理機能あり
- **自己管理型 Iceberg**: 手動管理オプションも利用可能

---

## まとめ

### Amazon MSK Express の進化

- リアルタイムデータ分析ワークフローが大幅に簡素化
- カスタムパイプライン開発の負担を排除
- コスト削減と運用効率化を同時に実現

### 次のステップ

1. 既存の Kafka ワークフローで Iceberg 配信の適用箇所を検討
2. 小規模なパイロットプロジェクトで検証
3. 本番環境への段階的展開
4. Spark、Trino などのクエリエンジンで分析開始

---

## 参考リソース

- **AWS What's New**
  https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-streaming-tables-for-apache-iceberg
- **Amazon MSK ドキュメント**
  https://docs.aws.amazon.com/msk/
- **Apache Iceberg 公式**
  https://iceberg.apache.org/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
