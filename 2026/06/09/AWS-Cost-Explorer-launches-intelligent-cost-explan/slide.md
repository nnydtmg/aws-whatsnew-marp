---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Cost Explorer、Amazon Q搭載のインテリジェント コスト分析が利用可能に

**発表日: 2026年6月9日**

---

## 概要

### 何が変わったか

- AWS Cost Explorerに「**Amazon Qで分析**」機能が追加
- **ワンクリック**でコスト傾向や主要なコスト要因を分析
- Amazon Q Developerが包括的なコスト説明を提供
- **追加料金なし**で全商用リージョンで利用可能

---

## 前提・背景

### 従来の課題

- コスト分析に複数のフィルターとデータポイントの手動調査が必要
- Cost Explorerのコスト傾向の原因を特定するのに時間がかかる
- 最適化機会の発見が困難

### 市場動向

- AIを活用した自動分析の需要が増加
- 企業のクラウドコスト最適化への関心が高まる
- 意思決定の迅速化に向けたAIツール導入が加速

---

## 主な機能

### 1. インテリジェント コスト分析

- **コスト傾向**: 時系列でのコスト変化を自動分析
- **主要なコスト要因**: 最大のコスト増減の原因を特定
- **異常値検出**: 予期しないコスト変動をアラート

### 2. 柔軟な分析機能

- **フィルター対応**: 設定したフィルターと期間で正確に実行
- **履歴・予測説明**: 過去のコスト、将来のコスト予測、混合分析に対応
- **会話型インターフェース**: フォローアップ質問で継続的に深掘り

---

<!-- _class: small -->

## 詳細な機能説明

### ワンクリック分析

AWS Cost Explorerでレポート設定後、「Amazon Qで分析」ボタンをクリックするだけで以下を自動実行：
- コスト傾向の分析
- サービス別・プロジェクト別のコスト内訳
- コスト増減の主要原因の特定
- 最適化の推奨事項の提示

### 会話型のフォローアップ

- Amazon Qは全会話コンテキストを保持
- 「なぜこのコストが増えた？」などの自然言語質問に対応
- リアルタイムで詳細な洞察を提供

---

## メリット・効果

### コスト分析の効率化

- 🚀 **時間削減**: 手動調査から自動分析へ（数時間→数分）
- 📊 **データ駆動**: AIによる客観的な分析結果
- 💡 **洞察向上**: これまで見落としていた最適化機会を発見

### 意思決定の加速

- 迅速なコスト削減施策の立案が可能
- 部門別・プロジェクト別の詳細な分析が可能
- 予測分析により先制的なコスト管理が実現

---

## ユースケース

### 1. コスト急増の原因調査

**例**: 先月のコストが10%増加
- 「このコスト増の原因は何か？」をAmazon Qに質問
- サービス別の増減、新規リソースの検出などを自動分析
- 対応策を即座に決定

### 2. 部門別コストの最適化

- 各部門のコスト傾向をAmazon Qが自動分析
- 過剰プロビジョニングやアイドルリソースを検出
- 部門マネージャーへの可視化レポート作成

### 3. 月次財務レビュー

- Cost Explorerのレポートをワンクリックで分析
- 経営陣向けのコスト説明資料を自動生成
- 予算見通しの迅速な更新が可能

---

## 対応リージョン・料金

### 利用範囲

- **対応リージョン**: すべての商用AWSリージョン
- **料金**: **追加料金なし**
  - AWS Cost Management をご利用いただければご利用可能
  - Amazon Q Developer の利用料は別途（既に契約している場合はそのまま利用可能）

### 利用開始方法

1. AWS Cost Explorerコンソールにアクセス
2. 分析したいレポートを表示
3. 「Amazon Qで分析」ボタンをクリック
4. Amazon Qの分析結果を確認

---

## まとめ

### 主なポイント

✅ AWS Cost Explorerに**インテリジェント コスト分析機能**が新規追加
✅ **ワンクリック**で自動分析、手動調査の時間を大幅削減
✅ **会話型**で継続的な詳細分析が可能
✅ **追加料金なし**で全商用リージョンで利用可能

### 次のステップ

1. AWS Cost Explorerで既存のコスト分析を確認
2. 「Amazon Qで分析」機能を試す
3. 月次コストレビュープロセスに組み込む

---

## 参考リソース

- **元記事**: [AWS Cost Explorer launches intelligent cost explanations powered by Amazon Q](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cost-explorer-intelligent-cost-explanations)

- **関連情報**:
  - [AWS Cost Explorer launches Natural Language Query capabilities powered by Amazon Q](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-cost-explorer-natural-language-query)
  - [Overview of cost management capabilities in Amazon Q Developer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-q-overview.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**