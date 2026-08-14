---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Billing and Cost Management がマネージドダッシュボード機能を導入

セットアップ不要で、すぐに使えるコスト分析ダッシュボード

**発表日: 2026年8月14日**

---

## 概要

### 5つのマネージドダッシュボードが新登場

- **セットアップ不要**: アカウントデータが事前に入力済み
- **読み取り専用**: AWSが管理・メンテナンス
- **5つのキュレーション済みダッシュボード** でコスト分析が即座に可能
- **すべての商用AWSリージョン** で追加料金なしで利用可能

### 対象ユーザー

- FinOps初心者から経験者まで
- コスト管理の標準化を求める組織
- 迅速なコスト可視化が必要な企業

---

## 前提・背景

### FinOpsの課題

- **可視性の欠如**: クラウドコスト全体像の把握が困難
- **セットアップコスト**: ダッシュボード構築に多くの時間と労力が必要
- **専門知識の依存**: コスト分析に高度な技術スキルが必要

### 市場の動向（2026）

- 98%の組織がAI支出の管理を実施（前年31%から大幅増加）
- FinOps Foundation: 事前デプロイメント・アーキテクチャコスティングの需要が急増
- Cost Explorer等との統合による統一的なコスト管理へのニーズ

---

## 5つのマネージドダッシュボード

### 1. Cost Overview & Trends

<div class="columns">
<div>

**特徴**
- 12ヶ月間の支出追跡
- サービス別・アカウント別・リージョン別の分析
- 将来予測による支出傾向の可視化

</div>
<div>

**活用例**
- 支出パターンの把握
- 季節的な変動の検出
- 将来のコスト予測

</div>
</div>

---

### 2. Compute & Database ダッシュボード

<div class="columns">
<div>

**Compute**
- 各サービスのコスト内訳
- コミットメント適用範囲の表示
- 利用率メトリクスの可視化

</div>
<div>

**Database**
- データベース別の支出分析
- 予約・Savings Plans の効果測定
- 過少利用の特定

</div>
</div>

---

### 3. Reservations & Savings Plans ダッシュボード

<div class="columns">
<div>

**Reservations**
- 購入コミットメントのパフォーマンス監視
- 利用ギャップの定量化
- コスト削減機会の特定

</div>
<div>

**Savings Plans**
- 購入効果の可視化
- 金銭的な過少利用の把握
- 最適化のための改善提案

</div>
</div>

---

## 主な機能と利点

### 管理側の利点

- **読み取り専用設計**: AWSが常に最新の状態を保証
- **複製可能**: 必要に応じてカスタマイズ可能なコピーを作成
- **柔軟な拡張**: 既存ダッシュボードに個別ウィジェットを追加可能

### ユーザー活用

- **PDF / CSV エクスポート対応**: レポーティング・共有が容易
- **シームレス統合**: AWS Billing and Cost Management コンソール内で完結
- **ロールベースアクセス**: 権限に応じた情報提供が可能

---

## 効果とメリット

### 導入効果

- **即座の可視化**: セットアップ時間をゼロに削減
- **コスト削減**: 配置・保守コストなしで利用開始
- **意思決定の加速**: データドリブンなコスト最適化が可能

### 組織レベルでの効果

- **チーム間の見解統一**: 標準化されたベースラインを確立
- **FinOps成熟度の向上**: 初級者でも専門的な分析が実施可能
- **継続的改善**: 定期的なコスト監視と最適化サイクルの構築

---

## ユースケース

### 1. FinOps初心者の組織

- 標準的なベースラインから開始
- 成長とともにカスタマイズに移行
- 専門知識不要で即座に効果を実感

### 2. マルチアカウント環境

- 全アカウントの一元的なコスト監視
- 部門・プロジェクト別の支出可視化
- Savings Plans活用最適化

### 3. エンタープライズ組織

- 財務チームへのコスト報告の自動化
- コンプライアンス・監査対応の強化
- 継続的なコスト最適化プログラムの運用

---

## 始める方法

### ステップ1: AWS Billing and Cost Management コンソールにアクセス

- AWS Management Consoleにサインイン
- 「Billing and Cost Management」を選択
- 「Dashboards」をクリック

### ステップ2: マネージドダッシュボードの確認

- ダッシュボード一覧に5つのマネージドダッシュボードを表示
- 各ダッシュボードを確認・分析開始

### ステップ3: カスタマイズ（必要に応じて）

- ダッシュボードを複製してカスタマイズ
- ウィジェットを追加してデータ分析を深化

---

## まとめ

### AWS Billing and Cost Management マネージドダッシュボードの価値

- **すぐに始められる**: セットアップなしで5つの分析ダッシュボードを即座に利用
- **コスト最適化の基盤**: 全レベルの組織に対応した標準化されたコスト可視化
- **継続的な改善**: FinOps実践の第一歩から本格的な運用まで対応

### 次のステップ

1. **今日から試す**: AWS コンソールで確認
2. **チーム間で共有**: ダッシュボードへのアクセスを設定
3. **コスト最適化を実行**: 得られた分析結果に基づいて改善施策を実施

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-billing-and-cost-management-managed-dashboards/
- **AWS Billing and Cost Management User Guide**: https://docs.aws.amazon.com/cost-management/latest/userguide/dashboards.html
- **AWS Billing and Cost Management Console**: https://console.aws.amazon.com/costmanagement/

### FinOpsベストプラクティス

- **Top 17 AWS FinOps Tools for Cost Control in 2026**: https://sedai.io/blog/aws-finops-tools-cost-management
- **13 AWS Billing Tools and Best Practices in 2026**: https://www.nops.io/blog/aws-billing-tools
- **FinOps Best Practices: 12 Battle-Tested Tips for 2026**: https://cloudaware.com/blog/finops-best-practices

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
