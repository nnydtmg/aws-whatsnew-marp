---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Logs が Application Load Balancer ログに対応

ALBのアクセス・接続・ヘルスチェックログを CloudWatch 内で直接分析

**発表日: 2026年7月23日**

---

## 概要

Amazon CloudWatch Logs が Application Load Balancer（ALB）ログをベンダーログとして新たにサポート

- **ALB のアクセス・接続・ヘルスチェックログ** を CloudWatch 内で直接分析可能に
- **CloudWatch Logs Insights** で詳細なアクセスパターンを追跡
- **メトリクスフィルター** で監視・アラーム設定を実施
- **Live Tail** でリアルタイムにトラフィックパターンを確認

---

## 前提・背景

### これまでの課題

- ネットワークトラフィックパターンの可視性が限定的だった
- ALB ログと他の監視データを一元管理できない
- デバッグと問題特定に時間がかかる

### 市場背景

- クラウドネイティブアーキテクチャの複雑化
- 運用チームの効率化ニーズが高まっている
- ネットワークレイヤーの可視性が重要性を増している

---

## 主な変更内容・新機能

### 1. ALB ログの統合サポート

- **3 種類のログをサポート**
  - アクセスログ（Access Logs）
  - 接続ログ（Connection Logs）
  - ヘルスチェックログ（Health Check Logs）
- CloudWatch 内で一元管理・分析が可能

### 2. CloudWatch Telemetry Enablement Rules

- 既存・新規 ALB リソースのログ設定を **自動で構成**
- 手動設定の手間を大幅削減
- 一貫した監視カバレッジを確保

---

## 主な変更内容・新機能（続き）

### 3. 設定方法

- **AWS Management Console** から直接設定可能
- **AWS CLI** または **SDK** でのプログラマティック設定も対応

### 4. ログ配信の柔軟性

- **Amazon Data Firehose** への配信に対応
- **Amazon S3**（Apache Parquet 形式）へも配信可能
- ロングタームストレージが容易

---

## 効果・メリット

### オペレーション効率の向上

- **ネットワークトラフィック可視化** → トラブルシューティング時間を短縮
- **一元管理** → 複数 ALB の監視負荷を軽減
- **自動化** → CloudWatch Telemetry Enablement Rules で運用コストを削減

### デバッグの簡素化

- CloudWatch Logs Insights で **SQL ライクなクエリ** が実行可能
- リアルタイムでパターン分析・問題検出

### 企業向けメリット

- 複数 ALB リソースを一元管理し、**一貫した監視カバレッジ** を確保
- 運用チームが **ネットワーク問題を迅速に特定・解決**

---

## ユースケース

### ケース 1: トラブルシューティング

ALB 経由でのトラフィックの異常を検知 → CloudWatch Logs Insights で原因分析 → 迅速な対応

### ケース 2: パフォーマンス監視

アクセスログから **レスポンスタイムやエラー率** をメトリクスフィルターで抽出 → CloudWatch ダッシュボードで可視化

### ケース 3: コンプライアンス・監査

ALB ログを Amazon S3 に長期保存 → 監査要件に対応

---

## まとめ

### このアップデートの要点

- Amazon CloudWatch Logs が Application Load Balancer ログに正式対応
- **一元管理・自動化・柔軟な配信** で運用効率向上
- ネットワークトラフィック可視性の向上 → 問題解決の迅速化

### 次のステップ

1. 既存 ALB リソースで CloudWatch Logs への配信設定を確認
2. CloudWatch Telemetry Enablement Rules で新規 ALB を自動設定
3. CloudWatch Logs Insights のクエリを構築し、監視要件に合わせてカスタマイズ

---

## 提供地域

- **AWS Commercial リージョン** で利用可能
- **AWS GovCloud** リージョンでも利用可能

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-logs/
- **Amazon CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- **CloudWatch Logs Insights ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**