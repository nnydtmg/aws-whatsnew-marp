---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ElastiCache for Valkey が永続性をサポート

Amazon ElastiCache for Valkey now supports durability

**What's New** | 2026-06-02T15:00:00

---

## 概要

- Amazon ElastiCacheがValkey 9.0から同期および非同期の2つの永続性オプションをサポートするようになり、マイクロ秒単位の読み取りレイテンシーを維持しながらデータ損失を防ぐことが可能になりました。
- このアップデートは、AIエージェントのメモリ管理、決済処理、在庫管理など、データの耐久性が重要なワークロードに最適です。

---

## 前提・背景

### データ永続性の必要性

- キャッシュシステムに高い耐久性が求められるようになった
- データの迅速性と安全性の両立が課題
- マイクロ秒単位のレイテンシーを維持しながら、データ保護を実装したいニーズが増加

### Valkey 9.0 の進化

- Redis との互換性を保ちながら、新機能を追加
- オープンソースコミュニティが主導
- エンタープライズ向けの機能拡張

---

## 変更内容・新機能

### 永続性オプション

- **同期書き込みオプション（Synchronous Writes）**
  - クライアントに応答する前に少なくとも2つのAZにデータを永続化
  - ゼロデータ損失を実現
  - わずかなレイテンシーオーバーヘッド

- **非同期書き込みオプション（Asynchronous Writes）**
  - クライアントに応答した後にデータを永続化
  - マイクロ秒単位の書き込みレイテンシーを維持
  - 最大10秒のデータ損失の可能性

### インフラストラクチャ

- マルチAZトランザクショナルログを使用
- 複数のアベイラビリティゾーン（AZ）にわたるデータ永続化
- 読み取りレイテンシーはマイクロ秒単位を維持

---

## 効果・メリット

### データ保護

- データ損失の防止
- 障害時の自動復旧
- 企業の信頼性要件を満たす

### パフォーマンス維持

- マイクロ秒単位の読み取りレイテンシーを維持
- 非同期オプションで書き込みレイテンシーを最小化
- キャッシュとしての性能を保つ

### ユースケース対応

- AIエージェントの長期メモリ
- ワークフロー状態管理
- RAGアプリケーション用ナレッジベース
- 決済トークン化
- リアルタイム在庫管理

---

## ユースケース

### 1. AIエージェントのメモリ管理

- 長期的な会話履歴を安全に保存
- セッション情報の損失を防止
- エージェントの推論品質を向上

### 2. 決済システム

- トランザクション状態の安全な管理
- コンプライアンス要件を満たす
- 顧客信頼を獲得

### 3. 在庫管理

- リアルタイムな在庫情報の保護
- ビジネスロジックの信頼性向上
- 顧客への正確な情報提供

---

## まとめ

### 主要なポイント

- Amazon ElastiCache for Valkey がデータ永続性をサポート
- 同期・非同期の2つのオプションから選択可能
- パフォーマンスと安全性を両立

### 次のステップ

1. 自社のワークロードに適した永続性オプションを評価
2. パイロットプロジェクトでの検証
3. 本番環境への段階的展開

### 利用可能なリージョン

- AWSコマーシャルリージョン
- AWSチャイナリージョン
- AWSガバメントクラウド（US）リージョン

---

## 参考URL

### 元記事

- [Amazon ElastiCache for Valkey now supports durability](https://aws.amazon.com/about-aws/whats-new/2026/06/durability-amazon-elasticache)

### 関連情報

- [Announcing Valkey 9.0 for Amazon ElastiCache - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/valkey-amazon-elasticache)
- [What is Amazon ElastiCache? - Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html)
- [Amazon ElastiCache ドキュメント](https://docs.aws.amazon.com/AmazonElastiCache/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**