# Application Performance Monitoring Enabled by Default in CloudWatch Observability EKS Add-on

**カテゴリ:** What's New
**公開日:** 2026-02-26
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/application-performance-monitoring-cloudwatch-eks/](https://aws.amazon.com/about-aws/whats-new/2026/02/application-performance-monitoring-cloudwatch-eks/)

---

## 要約

CloudWatch Observability EKS Add-on バージョン 5.0.0 では、Application Signals がデフォルトで自動有効化され、手動設定なしにアプリケーションパフォーマンスモニタリング機能が提供されるようになりました。これにより、DevOps エンジニア、プラットフォームチーム、開発者は、EKS 上のマイクロサービスアプリケーションのサービスレイテンシーやエラー率を即座に可視化し、トラブルシューティングを迅速に実施できるようになります。

## 詳細

### 主な変更点

- **CloudWatch Observability EKS Add-on バージョン 5.0.0** のリリース
- CloudWatch Application Signals がすべての新規インストールおよびアップグレードで自動的に有効になる
- 従来の手動オプトイン手続きが廃止される

### 機能詳細

#### 自動計測の実現

- **ゼロコンフィギュレーション**: 設定なしで自動計測が開始
- **Kubernetes ワークロード注釈が不要**: 手動注釈の管理が不要に
- **即座の有効化**: インストール時点から動作開始

#### 統合オブザーバビリティ

- **トレース**: 分散トレースの自動収集
- **メトリクス**: サービスメトリクスの自動生成
- **ログ**: アプリケーションログを統合
- **アプリケーション中心のビュー**: 統合ビューの提供

#### 可視化機能

- サービスレイテンシーの可視化
- エラー率の把握
- リクエストトレースの分析
- 事前構築されたダッシュボード

### 対象ユーザー

- DevOps エンジニア
- プラットフォームチーム
- 開発者
- マイクロサービスアプリケーション運用チーム

### 利用開始方法

1. CloudWatch Observability EKS Add-on をバージョン 5.0.0 にアップグレード
2. 自動的に Application Signals が有効化される
3. CloudWatch コンソールでダッシュボードを確認

### 対応リージョン

- すべての商用 AWS リージョンで利用可能

### メリット

#### 開発チーム向け

- アプリケーションパフォーマンスが即座に可視化
- 本番環境での動作を詳細に把握
- デバッグに必要なトレース情報を活用

#### プラットフォームチーム向け

- インフラストラクチャ管理負荷の軽減
- 自動化されたモニタリング実装
- 一貫したオブザーバビリティ戦略の実行

#### DevOps エンジニア向け

- 設定・保守作業の削減
- インシデント対応時間の短縮
- 予防的なモニタリングの実現

### ユースケース

#### マイクロサービス環境の可視化

- EKS 上の複数サービス間の通信を監視
- レイテンシースパイクを即座に検出
- エラー率の増加を自動検知

#### インシデント対応の高速化

- 根本原因をすばやく特定
- 複数サービスの関連性を把握
- トラブルシューティング時間を短縮

#### SLO/SLI ベースの運用

- サービスレベル目標の自動追跡
- SLI の自動計算
- バーンレート警告の自動設定

## 関連リソース

- [AWS What's New: Application Performance Monitoring Enabled by Default in CloudWatch Observability EKS Add-on](https://aws.amazon.com/about-aws/whats-new/2026/02/application-performance-monitoring-cloudwatch-eks/)
- [CloudWatch Application Signals パーミッション設定](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Application_Signals_Permissions.html)
- [CloudWatch Application Signals for SLO Monitoring](https://oneuptime.com/blog/post/2026-02-12-use-cloudwatch-application-signals-for-slo-monitoring/view)
- [Amazon EKS Documentation](https://docs.aws.amazon.com/eks/)