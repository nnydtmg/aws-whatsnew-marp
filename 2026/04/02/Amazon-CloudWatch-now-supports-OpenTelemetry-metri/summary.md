# Amazon CloudWatch now supports OpenTelemetry metrics in public preview

**カテゴリ:** What's New
**公開日:** 2026-04-02T15:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-opentelemetry-metrics/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-cloudwatch-opentelemetry-metrics/)

---

## 要約

Amazon CloudWatchがOpenTelemetryメトリクスのネイティブサポートをパブリックプレビューで提供開始し、複数環境からのメトリクスをOTLPで直接送信でき、PromQLでの統一的なクエリと異常検知が可能になりました。本機能は、マイクロサービスをEKSとオンプレミスで運用するチームや、複数環境のメトリクスを統合管理する必要がある組織に特に有用です。

## 詳細

- Amazon CloudWatchがOpenTelemetry（OTel）メトリクスのネイティブサポートをパブリックプレビューで提供開始したことが新機能です。

- OpenTelemetry Protocol（OTLP）を使用して、カスタム変換ロジックや追加ツールなしでメトリクスを直接送信できるようになりました。

- 70以上のAWSサービスから提供されるメトリクスと、カスタムOpenTelemetryメトリクスを組み合わせることが可能です。

- PromQLを使用してメトリクスをクエリでき、追加のエージェントやコード変更は不要です。

- CloudWatch異常検知がOpenTelemetryメトリクスに対応し、静的閾値を設定することなく異常パターンを自動検出します。

- Query Studioという新しいコンソール体験により、CloudWatchコンソール内でPromQLクエリの作成、メトリクスの探索、アラームの作成、ダッシュボードの構築ができます。

- Amazon EKSとオンプレミスサーバーなど複数環境からのメトリクスを統合し、インフラストラクチャ全体にわたる統一されたダッシュボードとアラームを構築できます。

- 本機能はUS East（N. Virginia）、US West（Oregon）、Asia Pacific（Sydney）、Asia Pacific（Singapore）、Europe（Ireland）でパブリックプレビュー利用可能です。

- プレビュー期間中、OpenTelemetryメトリクスとクエリの利用に料金は発生しません。

## ユースケース

### マルチ環境メトリクス統合
- Amazon EKS とオンプレミスサーバーのメトリクスを統一的に管理
- インフラストラクチャ全体にわたる統一ダッシュボードとアラーム構築

### マイクロサービス監視
- OpenTelemetry インストルメンテーション済みのアプリケーションメトリクスを CloudWatch に直接送信
- サービス間の遅延、エラー率などを PromQL で分析
- AWS サービスメトリクスとの相関分析

## 効果・メリット

- **シンプルな統合**: OTLP で直接送信でき、カスタム変換ロジック不要
- **標準化**: 業界標準の OpenTelemetry に対応
- **柔軟なクエリ**: PromQL で複雑な分析が可能
- **自動異常検知**: 機械学習による異常パターン検出
- **統一管理**: 複数環境のメトリクスを単一ダッシュボードで管理
- **コスト効率**: プレビュー期間中は無料

## 対応リージョン

- US East（N. Virginia）
- US West（Oregon）
- Asia Pacific（Sydney）
- Asia Pacific（Singapore）
- Europe（Ireland）

## 関連リソース

- [AWS CloudWatch ドキュメント - OpenTelemetry](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-OpenTelemetry-Sections.html)
- [AWS CloudWatch - OTLP エンドポイント](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-OTLPEndpoint.html)
- [OneUptime ガイド: OpenTelemetry メトリクスを CloudWatch に送信する方法](https://oneuptime.com/blog/post/2026-02-06-send-opentelemetry-metrics-amazon-cloudwatch/)