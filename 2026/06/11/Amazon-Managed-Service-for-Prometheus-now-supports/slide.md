---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Managed Service for Prometheus が順序外サンプル取り込みに対応

**発表日: 2026年6月11日**

---

## 概要

### 主な新機能

- **順序外サンプル取り込み機能**: メトリクスサンプルが時系列順序外に到着しても受け入れ可能
- **ワークスペースレベルのルールクエリオフセット**: ルール評価実行前に遅延を導入
- **デフォルト設定**: 1分間の順序外時間ウィンドウで自動対応

### 実現される効果

- 分散型コレクターやネットワーク遅延のあるワークロードでの**データ損失削減**
- **アラート精度の向上**で検出漏れを防止
- メトリクス完全性の保証

---

## 前提・背景

### 課題

- 分散型メトリクス収集ではサンプルの順序乱れが発生
- バッチエクスポートやネットワーク遅延による遅延到着データの損失
- 古い設定ではルール評価時にまだ到着していないサンプルが検出漏れになる

### 市場動向

- **Amazon OpenSearch Ingestion**: 2026年3月、Amazon Managed Service for Prometheus シンク対応
- **クロスアカウント取り込み**: 2025年1月、複数アカウント間のメトリクス収集に対応
- 監視・観測性基盤の統合・管理ニーズが高まる

---

## 主な機能詳細

### 1. 順序外サンプル取り込み（Out-of-Order Sample Ingestion）

- **デフォルト設定**: 1分間の順序外時間ウィンドウ
- **カスタマイズ可能**: 取り込みパターンに合わせて調整
- **無効化オプション**: 0に設定して機能無効化・破棄

### 2. ルールクエリオフセット（Rule Query Offset）

- ルール評価クエリ実行前に**遅延を導入**
- 遅延到着サンプルの取り込み完了を待つ
- ルール評価結果の正確性向上

### 3. CloudWatch ベンダーメトリクス

- **OutOfOrderIngestionRate**: 順序外サンプルの取り込み速度
- **OutOfOrderSampleAge**: サンプルの経過時間
- 取り込みパターンの**可視化とチューニング**

---

## 対応範囲と設定方法

### 利用可能性

- Amazon Managed Service for Prometheus が一般提供されている**すべてのAWSリージョン**で利用可能
- 既存・新規ワークスペース両対応

### 設定方法

<div class="columns">
<div>

**AWS マネジメントコンソール**
- ワークスペース設定画面で直接設定
- UIによる簡単操作

</div>
<div>

**API / CLI**
- プログラマティック設定
- IaC統合対応

</div>
</div>

---

## ユースケース

### 向いているワークロード

- **マイクロサービスアーキテクチャ**: 複数の分散型エージェント
- **Kubernetes環境**: 可変ネットワークレイテンシー
- **バッチメトリクス処理**: 定期的な一括送信
- **リアルタイム監視**: アラート精度が重要なシステム

### 設定例

```
# 順序外時間ウィンドウ: 2分
outOfOrderTimeWindow: 2m

# ルールクエリオフセット: 30秒
ruleQueryOffset: 30s
```

---

## まとめ

### Amazon Managed Service for Prometheus の進化

| 項目 | 効果 |
|------|------|
| 順序外サンプル取り込み | データ損失防止 |
| ルールクエリオフセット | アラート精度向上 |
| CloudWatch メトリクス | 可視化・チューニング |
| 全リージョン対応 | スケーラブルな展開 |

### 次のステップ

1. 自社ワークロードの特性分析（ネットワークレイテンシー、取り込み速度）
2. パイロットプロジェクトで設定値をテスト
3. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-managed-service-prometheus-outoforder-ingestion/
- **Amazon Managed Service for Prometheus ドキュメント**: https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-workspace-configuration.html
- **Amazon Prometheus ホームページ**: https://aws.amazon.com/prometheus/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**