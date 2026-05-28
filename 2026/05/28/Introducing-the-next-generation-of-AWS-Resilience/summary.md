# AWS Resilience Hub次世代版で実現するAI駆動型SREレジリエンス

Introducing the next generation of AWS Resilience Hub for generative AI-based SRE resilience journey

**カテゴリ:** AWS Blog
**公開日:** 2026-05-28
**元記事:** [AWS What's New](https://aws.amazon.com/blogs/aws/introducing-the-next-generation-of-aws-resilience-hub-for-generative-ai-based-sre-resilience-journey/)

---

## 要約

AWS Resilience Hubの次世代版は、生成AI駆動の障害モード分析、自動依存関係検出、モジュール型レジリエンスポリシーにより、企業全体でレジリエンス目標の設定と測定を一貫性を持って実施できるようになりました。このアップデートは、複数のアプリケーションを運用し、レジリエンスのコンプライアンス証明が必要なSREおよび開発チームに特に適しています。

---

## このアップデートで何が変わったか

### 新しい機能

1. **新しいアプリケーションモデル**
   - ビジネス成果に直結するユーザージャーニーに基づいたアプリケーションモデリング
   - より直感的なアプリケーション構造の理解

2. **生成AI駆動の障害モード分析**
   - AIが自動的に想定外の障害シナリオを生成・評価
   - 「What if」を自動生成し、想定外の障害パターンを発見
   - 従来の手作業による分析をAIが補完

3. **自動依存関係検出**
   - DNS クエリログ分析による複雑な依存関係の自動認識
   - 手作業でのマッピング工数を大幅削減

4. **モジュール型レジリエンスポリシー**
   - SLO（サービスレベル目標）
   - マルチAZ対応
   - マルチリージョンディザスタリカバリー
   - データ復旧要件
   - アプリケーションに必要な要件を選択して構成可能

5. **組織全体のレポーティング機能**
   - AWS Organizations との統合
   - 単一の委任管理者アカウントから企業全体のレジリエンス管理が可能
   - 複数アカウントへのログイン不要で効率化

6. **マイグレーション対応**
   - マイグレーションAPIで既存評価ポリシーを新レジリエンスポリシーに自動変換

---

## 対象ユーザー

### 主要なターゲット

- **SREチーム**: 複数のアプリケーションを運用し、レジリエンス管理を効率化したいチーム
- **開発チーム**: レジリエンスコンプライアンス証明が必要な組織
- **大規模企業**: 数百のアプリケーションを運用する組織
- **金融機関など**: コンプライアンス要件がある業界

---

## 活用シーン

### シーン1: 多数アプリケーション運用企業

数百のアプリケーションを運用する大規模企業が、企業全体でレジリエンス目標を一貫性を持って設定・測定する場合に活用。

### シーン2: コンプライアンス要件への対応

金融機関などのコンプライアンス要件に対応しながら、レジリエンスポリシーを自動検証・報告する場合に活用。

### シーン3: マイクロサービス環境の複雑性対応

複雑なマイクロサービス環境で依存関係を自動検出し、潜在的な障害パターンをAIで事前発見する場合に活用。

### シーン4: SREチームの運用効率化

手作業による障害モード分析や依存関係マッピングの工数削減、月2回の自動評価による継続的な改善。

---

## 詳細情報

### 新しいサービスベースの価格モデル

- **月2回の障害モード評価**: 自動実施で定期的な検証
- **オプション機能**: 自動依存関係評価
- **無料試用**: 新規ユーザー向けの試用環境提供

### 既存ユーザー向けの対応

- マイグレーションAPIで既存ポリシーを段階的に移行
- 複雑なシステムの段階的な移行が可能

### 市場での位置づけ

- SRE業界全体で「AI: From Toil to Transformation」へのシフト進行中
- 予防的レジリエンスエンジニアリングへの注目拡大
- AWS re:Invent 2025での重点テーマ「AI-powered resilience testing and disaster recovery」

---

## 関連リソース

### AWS公式リソース

- [AWS Resilience Hub ドキュメント](https://docs.aws.amazon.com/resilience-hub/)
- [AWS Organizations のベストプラクティス](https://docs.aws.amazon.com/organizations/)
- [AWS Fault Injection Service](https://aws.amazon.com/fis/)

### 業界トレンド

- [AWS re:Invent 2025 - AI-powered resilience testing and disaster recovery (COP420)](https://www.youtube.com/watch?v=aG033p7YP7w)
- [Build resilient generative AI agents | AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/build-resilient-generative-ai-agents)
- [The Future of AI in SRE: Preventing Failures, Not Fixing Them - The New Stack](https://thenewstack.io/the-future-of-ai-in-sre-preventing-failures-not-fixing-them)
- [AI SRE: The 2026 Guide to AI-Powered Site Reliability Engineering](https://www.augmentcode.com/guides/ai-sre-ai-powered-site-reliability-engineering)
- [The SRE Report 2026 | LogicMonitor](https://www.logicmonitor.com/resources/2026-observability-ai-trends-outlook-2)

---

**このドキュメントは AWS What's New の記事を基に作成されました。**
