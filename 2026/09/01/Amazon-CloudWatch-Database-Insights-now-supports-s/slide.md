---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Database Insights がセルフマネージド PostgreSQL に対応

**発表日: 2026年9月1日**

---

## 概要

### 主な変更点

- **Amazon CloudWatch Database Insights** がセルフマネージド PostgreSQL をサポート開始
- EC2 上のデータベースを RDS・Aurora と同じコンソールで統一監視
- CloudWatch Agent で健全性・パフォーマンスデータを自動収集
- ライブパフォーマンスデータ（DB ロード、ウェイトイベント、クエリ統計）を表示

---

## 前提・背景

### データベース運用の課題

- **多様なデータベース環境**: AWS マネージド DB（RDS・Aurora）とセルフマネージド DB が混在
- **監視の複雑化**: 複数のコンソール・ツールを使い分ける必要がある
- **統合監視の必要性**: データベースフリート全体を一元管理したいニーズ

### CloudWatch Database Insights の進化

- 2024年12月: Aurora・RDS 向けに Database Insights を発表
- 2026年9月: セルフマネージド PostgreSQL に対応拡大

---

## 変更内容・新機能

### 1. セルフマネージド PostgreSQL 対応

- EC2 上で実行される PostgreSQL インスタンスを監視対象に追加
- RDS・Aurora と同じ Database Insights ダッシュボードで管理

### 2. CloudWatch Agent による データ収集

- CloudWatch Agent をセルフマネージド PostgreSQL に導入
- 健全性とパフォーマンスデータを自動的に収集

### 3. 統一されたパフォーマンス分析

- **データベースロード**: DB の負荷状況をリアルタイム表示
- **ウェイトイベント分析**: ボトルネック特定に活用
- **クエリレベル統計**: SQL クエリの実行状況を詳細に把握
- **ホストメトリクス**: CPU・メモリなどのリソース使用状況

---

## 利用メリット

### 運用効率の向上

- **統一監視**: 複数のコンソール・ツール不要で一元管理
- **トラブルシューティング短縮**: 同じ UX で問題診断・解決
- **スケーラビリティ**: データベースフリート全体を効率的に監視

### コスト最適化

- **既存ツール削減**: 従来の監視ツール・エージェントの統合
- **シンプルな料金体系**: CloudWatch Database Insights の統一価格

---

## ユースケース

### 1. ハイブリッド環境の企業

- AWS クラウド（RDS・Aurora）とオンプレ PostgreSQL を並行運用
- 統一ダッシュボードで全データベースの健全性を監視

### 2. クラウド移行中の組織

- レガシーシステムの PostgreSQL を EC2 で実行
- 段階的なマネージドサービスへの移行を支援

### 3. 開発・テスト環境

- 開発用 PostgreSQL を EC2 で構築
- 本番環境（RDS・Aurora）と同じ監視基準を適用

---

## まとめ

### 主なポイント

- セルフマネージド PostgreSQL への対応により、Database Insights の適用範囲が拡大
- AWS マネージド DB とセルフマネージド DB を統一監視できる環境を実現
- データベース運用の複雑さを軽減し、効率化を推進

### 次のステップ

1. 現在の監視体制を確認
2. CloudWatch Agent の導入・設定
3. Database Insights Advanced Mode の活用検討

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/database-insights-self-managed-postgresql/
- **CloudWatch Database Insights ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Database-Insights.html
- **セルフマネージドデータベース監視ガイド**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Database-Insights-Self-Managed.html
- **CloudWatch 料金**: https://aws.amazon.com/cloudwatch/pricing/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**