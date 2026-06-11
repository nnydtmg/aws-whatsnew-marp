# Amazon Managed Service for Prometheus が順序外サンプル取り込みに対応

Amazon Managed Service for Prometheus now supports out of order sample ingestion

**カテゴリ:** What's New
**公開日:** 2026-06-11
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-managed-service-prometheus-outoforder-ingestion/)

このページでは、AWS What's Newで発表された「Amazon Managed Service for Prometheus now supports out of order sample ingestion」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Managed Service for Prometheusが順序外サンプル取り込みとワークスペースレベルのルールクエリオフセット機能をサポートするようになりました。これにより、分散型コレクターやネットワーク遅延を持つワークロードにおいて、データ損失を削減し、アラート精度を向上させることができます。

## このアップデートで何が変わったか

### 主な変更点

1. **順序外サンプル取り込み機能の追加**
   - メトリクスサンプルが時系列順序外に到着しても受け入れ可能
   - デフォルトで1分間の順序外時間ウィンドウを設定
   - ウィンドウはカスタマイズ可能、0で無効化も可能

2. **ワークスペースレベルのルールクエリオフセット**
   - ルール評価クエリ実行前に遅延を導入
   - 遅延到着サンプルの取り込み完了を待つ
   - ルール評価結果の正確性が向上

3. **新しいCloudWatch ベンダーメトリクス**
   - OutOfOrderIngestionRate: 順序外サンプルの取り込み速度
   - OutOfOrderSampleAge: サンプルの経過時間

## 対象ユーザー

- **分散型メトリクス収集を使用している組織**
- **マイクロサービスアーキテクチャを採用している企業**
- **Kubernetes環境で監視を行う組織**
- **バッチメトリクス処理を実施している企業**
- **ネットワーク遅延による影響を受けやすいワークロードを持つ企業**

## 詳細

### 技術仕様

- **デフォルト設定**: 1分間（60秒）の順序外時間ウィンドウ
- **調整範囲**: ワークロードに合わせてカスタマイズ可能
- **利用可能リージョン**: Amazon Managed Service for Prometheus が一般提供されているすべてのAWSリージョン
- **設定方法**: AWS コンソール、API、CLI

### メリット

1. **データ損失の削減**
   - 遅延到着したメトリクスが破棄されない
   - メトリクスの完全性が保証される

2. **アラート精度の向上**
   - ルール評価前に十分な時間待機
   - 検出漏れや誤検知の削減

3. **運用の効率化**
   - CloudWatch メトリクスで取り込みパターンを可視化
   - 設定値のチューニングが容易

## 関連トピック

### 最近の関連アップデート

- **Amazon OpenSearch Ingestion**: Amazon Managed Service for Prometheus シンク対応（2026年3月）
- **クロスアカウント取り込み対応**: 複数アカウント間のメトリクス収集が可能（2025年1月）

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-managed-service-prometheus-outoforder-ingestion/)
- [Amazon Managed Service for Prometheus ドキュメント](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-workspace-configuration.html)
- [Amazon Prometheus ホームページ](https://aws.amazon.com/prometheus/)