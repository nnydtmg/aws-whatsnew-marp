# Amazon CloudWatch launches OTel Container Insights for Amazon EKS (Preview)

**カテゴリ:** What's New
**公開日:** 2026-04-02
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-otel-container-insights-eks/

---

## 要約

Amazon CloudWatchがOpenTelemetryメトリクスを使用したContainer Insightsをパブリックプレビューで提供開始し、EKSクラスターから最大150個のラベルで拡張されたメトリクスを収集してCloudWatchに送信することで、より深い可視性と分析機能を実現しました。このアップデートは、EKSクラスターの詳細な監視、PromQLを使用した高度な分析、加速コンピュートハードウェアの自動検出が必要なDevOpsチームと企業に最適です。

---

## 詳細

### 新機能の概要

- Amazon CloudWatchがOpenTelemetryメトリクスを使用したContainer Insightsを、Amazon EKS向けにパブリックプレビューで提供開始
- 既存のContainer Insights体験に基づき、EKSクラスターからより多くのメトリクスを収集
- OpenTelemetry Protocol（OTLP）を使用してCloudWatchに送信

### メトリクス拡張機能

- 各メトリクスは最大150個の説明的ラベルで自動的に拡張
- Kubernetesメタデータ（pod、node、namespace）が含まれる
- チーム、アプリケーション、ビジネスユニットなどのカスタム定義ラベルが含まれる

### ダッシュボード機能

- Container Insightsコンソールのキュレーションされたダッシュボードでクラスター、ノード、ポッドの健全性を表示
- インスタンスタイプ、可用性ゾーン、ノードグループ、またはカスタムラベルでメトリクスを集約およびフィルタリング

### 分析機能

- CloudWatch Query StudioでPrometheus Query Language（PromQL）を使用して、より深い分析のためのクエリを作成可能

### デプロイメント

- CloudWatch Observability EKS アドオンはAmazon EKSコンソールからのワンクリックインストール
- CloudFormation、CDK、Terraformを通じたデプロイも可能

### ハードウェア対応

- NVIDIAグラフィックスプロセッシングユニット、Elastic Fabric Adapter、AWS TrainiumおよびInferentia加速器などの加速コンピュートハードウェアを自動的に検出

### 互換性

- 既存のアドオンユーザーは、OpenTelemetryと既存のContainer Insightsメトリクスの両方を同時に公開可能

### 利用可能なリージョン

- 米国東部（バージニア北部）
- 米国西部（オレゴン）
- アジアパシフィック（シドニー）
- アジアパシフィック（シンガポール）
- ヨーロッパ（アイルランド）

### 料金

- プレビュー期間中、Container InsightsのOpenTelemetryメトリクスに対する料金は発生しません

### 対象ユースケース

- EKSクラスターの可視性を必要とする組織
- マルチクラウド環境でのメトリクス収集を求める企業
- Kubernetesワークロードの詳細な監視と分析が必要なDevOpsチーム

---

## 主要な改善点

1. **メトリクス粒度の向上**: 最大150個のラベルによる柔軟なメトリクス管理
2. **業界標準化**: OpenTelemetry Protocol対応でベンダーロックイン回避
3. **高度な分析**: PromQL対応で複雑なクエリが実現
4. **簡単デプロイ**: ワンクリックアドオンでの導入
5. **ハードウェア認識**: AI/MLワークロード用加速器の自動検出
6. **段階的移行**: 既存メトリクスとの並行運用で安全な移行
7. **コスト最適化**: プレビュー期間中の無料利用

---

## 推奨される実装ステップ

### フェーズ1: 評価
- 対象リージョンの確認（初期段階では5リージョン）
- PromQLスキルの組織内習得計画
- 既存Container Insightsメトリクスの整理

### フェーズ2: パイロット
- 小規模EKSクラスターでの検証
- CloudWatch Observability EKS アドオンのインストール
- 基本的なPromQLクエリの作成と検証

### フェーズ3: 本番展開
- 既存メトリクスとの並行運用
- チーム別、アプリケーション別のラベル戦略策定
- 監視・アラートルールの刷新

### フェーズ4: 最適化
- AI/MLワークロード向けハードウェア監視の強化
- マルチクラウド監視体制への拡張
- PromQL高度な分析の組織的推進
