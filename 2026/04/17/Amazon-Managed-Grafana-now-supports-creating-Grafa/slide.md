---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Managed Grafana
Grafana 12.4 ワークスペース作成のサポート

**発表日: 2026年4月17日**

---

## 概要

### Grafana 12.4 の主な特徴

- **Queryless Drilldownアプリ**: ポイント・アンド・クリック探索でデータ分析を簡素化
- **Scenes搭載ダッシュボード**: レンダリングエンジン改善でパフォーマンス向上
- **CloudWatch Logs拡張**: PPL/SQLクエリ、クロスアカウント対応、異常検出
- **ビジュアライゼーション強化**: テーブル再構築、インタラクティブボタン対応

### 利用可能性

- Amazon Managed Grafana の全サポート対象 AWS リージョンで提供
- AWS Console、SDK、CLI から新規ワークスペース作成可能

---

## 前提・背景

### 市場の課題

- 複雑なデータセット間でのナビゲーション効率の向上が必須
- マルチクラウド・マルチアカウント環境でのロギング分析の複雑化
- ダッシュボード作成・保守の負担軽減が求められている

### Grafana プロジェクトの進化

- Grafana 11.0～12.4で段階的に新機能を導入
- オープンソースの最新機能を Amazon Managed Grafana で即座に利用可能に
- エンタープライズグレードの監視とログ分析が重要性を増すなか、ツール機能の強化が加速

---

## 主な新機能

### 1. Queryless Drilldown アプリ

- **対象データソース**: Prometheus メトリクス、Loki ログ、Tempo トレース、Pyroscope プロファイル
- **操作方法**: GUI でのポイント・アンド・クリック探索
- **効果**: 複雑なクエリ記述が不要になり、分析速度が向上

### 2. Scenes 搭載ダッシュボード

- **レンダリングエンジン改善**: より高速で安定したダッシュボード表示
- **パフォーマンス**: 大規模データセットでの応答性向上

---

## 主な新機能 (続き)

### 3. Amazon CloudWatch Logs 強化機能

- **クエリ言語**: PPL (Power Query Language) および SQL に対応
- **クロスアカウント対応**: Metrics Insights でマルチアカウント検索が可能
- **異常検出**: ログデータの異常を自動検出

### 4. テーブルビジュアライゼーション再構築

- **CSS セルスタイリング**: より柔軟なテーブルカスタマイズ
- **インタラクティブボタン**: 行内アクションボタンで操作性向上
- **パフォーマンス**: 大規模テーブルの処理速度改善

---

## データ探索の強化機能

### トレンドライン変換とナビゲーションブックマーク

- **トレンドライン変換**: メトリクスの傾向を自動分析し、異常検知を促進
- **ナビゲーションブックマーク**: よく使用する検索・ビューを保存して素早くアクセス
- **作業効率**: データ探索時の手戻りを削減

---

## 対応リージョンと利用開始方法

### リージョン対応

- Grafana 12.4 は Amazon Managed Grafana が一般提供されている **全 AWS リージョン** で利用可能

### ワークスペース作成方法

1. **AWS Management Console** から直接作成
2. **AWS SDK** を使用した自動化
3. **AWS CLI** によるコマンドライン操作

---

## ユースケース

### 最適な利用シーン

- **分散システムの監視**: Prometheus メトリクスとログを統合分析
- **トラブルシューティング**: Tempo トレースでマイクロサービス障害を可視化
- **ログ分析と異常検知**: CloudWatch Logs の新機能で予防保全を実現
- **複数 AWS アカウント管理**: クロスアカウント環境での統一ダッシュボード構築
- **リアルタイムアラート**: インタラクティブなビジュアライゼーションで即座に対応

---

## まとめ

### Amazon Managed Grafana v12.4 の位置づけ

- **オープンソース最新機能の即座の提供**: Grafana 11.0～12.4の全機能を統合
- **エンタープライズグレード**: AWS マネージドサービスによる可用性と信頼性
- **統合監視・ログ分析プラットform**: CloudWatch Logs との深い統合で AWS ネイティブな環境を実現

### 次のステップ

1. 既存 Grafana ワークスペースのアップグレード評価
2. v12.4 の新機能を試す パイロットプロジェクト実施
3. 本番環境への段階的移行
4. チーム全体への機能 training と best practices 共有

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-managed-grafana-v12-create/
- **Amazon Managed Grafana ドキュメント**: https://docs.aws.amazon.com/grafana/latest/userguide/version-differences.html
- **ワークスペース作成手順**: https://docs.aws.amazon.com/grafana/latest/userguide/AMG-create-workspace.html
- **製品ページ**: https://aws.amazon.com/grafana/
- **料金ページ**: https://aws.amazon.com/grafana/pricing/

### Grafana 公式情報

- **Grafana v12.4 What's New**: https://grafana.com/docs/grafana/latest/whatsnew/whats-new-in-v12-4/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
