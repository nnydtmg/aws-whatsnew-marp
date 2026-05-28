---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Resilience Hub次世代版で実現するAI駆動型SREレジリエンス
Generative AI駆動の障害モード分析で企業全体のレジリエンス管理を一元化

**発表日: 2026年5月28日**

---

## 概要

### 3つの主要な改善ポイント

- **生成AI駆動の障害モード分析**: AIが自動的に想定外の障害シナリオを発見
- **自動依存関係検出**: DNS クエリログ分析で複雑なシステム依存関係を自動認識
- **モジュール型レジリエンスポリシー**: SLO、マルチAZ、マルチリージョンDRを柔軟に構成

### 企業規模の統合管理

- AWS Organizations との統合で企業全体のレジリエンス管理を一元化
- 複数アカウントへのログイン不要で効率化

---

## 前提・背景

### 市場の課題

- SREチームが数百のアプリケーション運用で、レジリエンス目標設定・測定の一貫性を維持できない
- 手作業による障害シナリオ分析に膨大な時間が必要
- 複雑なマイクロサービスアーキテクチャの依存関係把握が困難
- レジリエンスコンプライアンス証明の運用負荷が高い

### 関連する最近の動向

- AWS re:Invent 2025で「AI-powered resilience testing and disaster recovery」が重点テーマ
- SRE業界全体で「AI: From Toil to Transformation」へのシフト
- 予防的レジリエンスエンジニアリングへの注目拡大

---

## 主な機能と改善

### 1. 新しいアプリケーションモデル

- ビジネス成果に直結するユーザージャーニーを基準にモデリング
- アプリケーション構造の理解が直感的に

### 2. 生成AI駆動の障害モード分析

- AIが「What if」を自動生成し、想定外の障害パターンを発見
- 従来の手作業による分析をAIが補完
- 検出精度と分析速度が飛躍的に向上

### 3. 自動依存関係検出

- DNS クエリログ分析により複雑な依存関係を自動認識
- 手作業での依存関係マッピング工数が大幅削減

---

<!-- _class: small -->

## 主な機能と改善（続き）

### 4. モジュール型レジリエンスポリシー

- **SLO（サービスレベル目標）**: 業種・用途に応じて柔軟に定義
- **マルチAZ対応**: 単一リージョン内のAZ冗長化
- **マルチリージョンDR**: リージョン間のディザスタリカバリー戦略
- **データ復旧要件**: 組織のコンプライアンス要件に応じた設定

### 5. 組織全体のレポーティング

- AWS Organizations との統合で企業全体の状況を一元表示
- 単一ダッシュボードでコンプライアンス証明を可視化

### 6. マイグレーション対応

- マイグレーションAPIで既存ポリシーから新レジリエンスポリシーへ自動変換

---

## 効果・メリット

### 運用効率の向上

- 月2回の障害モード評価が自動実施され、SREチームのトイル削減
- マイクロサービスの複雑性を自動認識で対応
- 複数アカウント環境での一元管理で管理負荷を低減

### ビジネスへの貢献

- レジリエンスコンプライアンス証明の可視化で規制対応を加速
- 予防的な障害検出により本番インシデント減少
- SLO達成状況をリアルタイム監視で信頼性向上

### 技術的な効果

- 企業全体で統一されたレジリエンス基準を適用
- AIが想定外の障害パターンを発見し、テスト品質向上
- 自動化により分析作業を「週単位」から実現

---

## ユースケース

### ユースケース1: 多数アプリケーション運用企業

数百のアプリケーションを運用する大規模企業が、企業全体でレジリエンス目標を一貫性を持って設定・測定

### ユースケース2: コンプライアンス要件がある組織

金融機関などのコンプライアンス要件に対応しながら、レジリエンスポリシーを自動検証・報告

### ユースケース3: マイクロサービス環境の複雑性対応

複雑な依存関係を自動検出し、潜在的な障害パターンをAIで事前発見

---

## まとめ

### AWS Resilience Hub次世代版の位置づけ

- **SRE業界への革新**: AI駆動の予防的レジリエンスエンジニアリング実現
- **エンタープライズ対応**: AWS Organizations 統合で大規模企業の一元管理を実現
- **価格メリット**: サービスベース料金で利用可能、無料試用も提供

### 次のステップ

1. 既存Resilience Hubユーザーは無料試用で新版を評価
2. マイグレーションAPIで段階的な移行を計画
3. SREチーム内で新しいモジュール型ポリシー設計
4. 本番環境への段階的展開と効果測定

---

## 参考リソース

### 元記事

- **AWS What's New**: [Introducing the next generation of AWS Resilience Hub for generative AI-based SRE resilience journey](https://aws.amazon.com/blogs/aws/introducing-the-next-generation-of-aws-resilience-hub-for-generative-ai-based-sre-resilience-journey/)

### 関連情報

- [AWS re:Invent 2025 - AI-powered resilience testing and disaster recovery (COP420)](https://www.youtube.com/watch?v=aG033p7YP7w)
- [Build resilient generative AI agents | AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/build-resilient-generative-ai-agents)
- [The Future of AI in SRE: Preventing Failures, Not Fixing Them - The New Stack](https://thenewstack.io/the-future-of-ai-in-sre-preventing-failures-not-fixing-them)
- [AI SRE: The 2026 Guide to AI-Powered Site Reliability Engineering](https://www.augmentcode.com/guides/ai-sre-ai-powered-site-reliability-engineering)
- [The SRE Report 2026 | LogicMonitor](https://www.logicmonitor.com/resources/2026-observability-ai-trends-outlook-2)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
