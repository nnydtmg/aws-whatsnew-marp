---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# CloudWatch Observability EKS Add-on
Application Performance Monitoring がデフォルト有効化

**発表日: 2026年2月26日**

---

## 概要

### CloudWatch Application Signals の自動有効化

- **CloudWatch Observability EKS Add-on v5.0.0** でリリース
- Application Signals がすべての新規インストール・アップグレードで自動有効化
- 手動設定が不要 - ゼロコンフィギュレーションの実装
- DevOps エンジニア、プラットフォームチーム、開発者が即座に恩恵を受ける

---

## 前提・背景

### 従来の課題

- アプリケーションパフォーマンスモニタリングには手動のオプトイン手続きが必要
- 初期設定が複雑で、チームごとの個別対応が必要
- Kubernetes ワークロード注釈の手動管理が必須
- エンタープライズ環境でのロールアウトが困難

### 市場の動向

- Observability の重要性が高まる中、簡易導入が急務
- マイクロサービスアーキテクチャの複雑化に対応
- DevOps 自動化の推進
- SLO/SLI ベースの運用管理への移行

---

## 主な機能と改善

### 1. 自動計測の実現

- **ゼロコンフィギュレーション**: 設定なしで自動計測開始
- **手動注釈の廃止**: Kubernetes ワークロード注釈が不要
- **即座に有効**: インストール時点から動作開始

### 2. 統合オブザーバビリティ

- **トレース**: 分散トレースを自動収集
- **メトリクス**: サービスメトリクスの自動生成
- **ログ**: アプリケーションログを統合

### 3. アプリケーション中心のビュー

- サービスレイテンシーの可視化
- エラー率の把握
- リクエストトレースの分析
- 事前構築ダッシュボード

---

## 機能詳細

### CloudWatch Application Signals の利点

| 項目 | 従来 | v5.0.0 以降 |
|------|------|----------|
| セットアップ | 手動オプトイン | 自動有効化 |
| 設定作業 | 必須 | 不要 |
| Kubernetes 注釈 | 必須 | 不要 |
| ダッシュボード | 手動作成 | 事前構築済み |
| 開始時間 | 数時間～数日 | 即座 |

---

## ユースケース

### 1. マイクロサービス環境の可視化

- EKS 上の複数サービス間の通信を監視
- レイテンシースパイクを即座に検出
- エラー率の増加を自動検知

### 2. インシデント対応の高速化

- 根本原因をすばやく特定
- 複数サービスの関連性を把握
- トラブルシューティング時間を短縮

### 3. SLO/SLI ベースの運用

- サービスレベル目標の自動追跡
- SLI の自動計算（Application Signals ベース）
- バーンレート警告の自動設定

---

## メリット・効果

### 開発チーム

- アプリケーションパフォーマンスが即座に可視化
- 本番環境での動作を詳細に把握
- デバッグに必要なトレース情報を活用

### プラットフォームチーム

- インフラストラクチャの管理負荷が軽減
- 自動化されたモニタリング実装
- 一貫したオブザーバビリティ戦略の実行

### DevOps エンジニア

- 設定・保守作業が減少
- インシデント対応時間が短縮
- 予防的なモニタリングが可能

---

## 利用開始方法

### アップグレード手順

1. **CloudWatch Observability EKS Add-on をバージョン 5.0.0 にアップグレード**
2. **自動的に Application Signals が有効化される**
3. **CloudWatch コンソールでダッシュボードを確認**

### 対応リージョン

- すべての商用 AWS リージョンで利用可能
- リージョン固有の制限なし

### 前提条件

- Amazon EKS クラスター
- CloudWatch Observability EKS Add-on をデプロイ
- 適切な IAM 権限

---

## まとめ

### CloudWatch Observability EKS Add-on v5.0.0 の意義

- **ゼロコンフィギュレーション**: 初期設定が完全に自動化
- **即座の可視化**: インストール後すぐにアプリケーションパフォーマンスを監視
- **運用負荷の削減**: 手動設定・注釈が不要
- **エンタープライズ対応**: 大規模環境への段階的導入が容易

### 次のステップ

1. 既存 EKS クラスターを v5.0.0 にアップグレード
2. CloudWatch コンソールでダッシュボードを確認
3. アプリケーションパフォーマンスの可視化を活用
4. SLO/SLI ベースのモニタリングへ移行

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/application-performance-monitoring-cloudwatch-eks/
- **CloudWatch Application Signals パーミッション**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Application_Signals_Permissions.html
- **CloudWatch Application Signals for SLO Monitoring**: https://oneuptime.com/blog/post/2026-02-12-use-cloudwatch-application-signals-for-slo-monitoring/view
- **Amazon EKS ドキュメント**: https://docs.aws.amazon.com/eks/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**