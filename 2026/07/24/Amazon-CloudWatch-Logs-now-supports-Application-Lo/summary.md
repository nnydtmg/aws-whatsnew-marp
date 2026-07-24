# Amazon CloudWatch Logs が Application Load Balancer ログに対応

Amazon CloudWatch Logs now supports Application Load Balancer logs

**カテゴリ:** What's New
**公開日:** 2026-07-23T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-logs/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Logs now supports Application Load Balancer logs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch LogsがApplication Load Balancerログをベンダーログとしてサポートするようになり、ALBのアクセス、接続、ヘルスチェックログをCloudWatch内で直接分析できるようになりました。CloudWatch telemetry enablement rulesにより自動的にログ設定を構成でき、CloudWatch Logs Insights、メトリクスフィルター、Live Tailを活用してネットワークトラフィックを監視し、問題をより迅速に特定・解決することが可能になります。

## このアップデートで何が変わったか

- Amazon CloudWatch Logs が Application Load Balancer（ALB）ログをベンダーログとしてサポート
- ALB のアクセスログ、接続ログ、ヘルスチェックログを CloudWatch 内で直接分析可能に
- CloudWatch Logs Insights でアクセスパターンを追跡、メトリクスフィルターで監視・アラーム設定
- Live Tail でリアルタイムトラフィック確認
- CloudWatch Telemetry Enablement Rules で自動設定
- AWS CommercialおよびGovCloud地域で利用可能

## 詳細

### 主な機能

- **ALB ログの統合サポート**
  - アクセスログ（Access Logs）
  - 接続ログ（Connection Logs）
  - ヘルスチェックログ（Health Check Logs）

- **CloudWatch Telemetry Enablement Rules**
  - 既存・新規 ALB リソースのログ設定を自動で構成
  - 手動設定の手間を大幅削減

- **設定方法**
  - AWS Management Console から直接設定
  - AWS CLI または SDK でのプログラマティック設定

- **ログ配信の柔軟性**
  - Amazon Data Firehose への配信
  - Amazon S3（Apache Parquet 形式）へも配信可能

### メリット

- **オペレーション効率の向上**
  - ネットワークトラフィック可視化によるトラブルシューティング時間短縮
  - 複数 ALB の監視負荷を軽減
  - 自動化で運用コストを削減

- **デバッグの簡素化**
  - CloudWatch Logs Insights で SQL ライクなクエリが実行可能
  - リアルタイムでパターン分析・問題検出

- **企業向けメリット**
  - 複数 ALB リソースを一元管理
  - 一貫した監視カバレッジを確保
  - ネットワーク問題を迅速に特定・解決

### ユースケース

1. **トラブルシューティング**
   - ALB 経由のトラフィック異常検知
   - CloudWatch Logs Insights で原因分析
   - 迅速な対応

2. **パフォーマンス監視**
   - アクセスログからレスポンスタイム・エラー率を抽出
   - メトリクスフィルターで監視対象を設定
   - CloudWatch ダッシュボードで可視化

3. **コンプライアンス・監査**
   - ALB ログを Amazon S3 に長期保存
   - 監査要件に対応

## 提供地域

- AWS Commercial リージョン
- AWS GovCloud リージョン

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-logs/)
- [Amazon CloudWatch Logs ドキュメント](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/)
- [CloudWatch Logs Insights ドキュメント](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)