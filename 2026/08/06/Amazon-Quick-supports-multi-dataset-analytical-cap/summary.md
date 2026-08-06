# Amazon Quick、複数データセット分析機能に対応

Amazon Quick supports multi-dataset analytical capabiity

**カテゴリ:** What's New
**公開日:** 2026-08-06
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick/)

---

## 要約

Amazon Quickの新しいマルチデータセットトピック機能により、ユーザーは複数のデータセット間の関係性を単一のトピックで定義し、事前のデータ結合なしにダッシュボード構築と自然言語Q&Aを実行できるようになりました。この機能は既存のセキュリティとガバナンスを維持しながら、セマンティックモデルの再利用性と効率性を大幅に向上させます。

---

## このアップデートで何が変わったか

### 主な変更点

1. **マルチデータセット対応の実現**
   - Amazon Quickが複数のデータセットにまたがるトピックをサポート
   - 単一のトピック内で複数のデータセット間の関係性をモデル化

2. **ダッシュボード構築の簡素化**
   - トピックがデータモデルとして機能
   - 複数のデータセットからフィールドを取得する単一のビジュアルが作成可能
   - Quickが基礎となるジョインを自動生成

3. **自然言語分析の強化**
   - チャットエージェントをトピックに直接指定して質問可能
   - エージェントがトピックで定義された関係性を読み込み
   - 実行時にデータセット間でジョインを実行

4. **セマンティックモデルの統一**
   - 1つの管理されたセマンティックモデルが人間とエージェント両方の単一の情報源として機能
   - ガバナンスと一貫性の確保

---

## これまでの課題

- 複数のデータセットにまたがる質問に答えるために、事前にデータを結合する必要があった
- 手動でJOINロジックをデータ準備段階で記述する必要があった
- SPICE容量を消費し、複数のデータセットを用途別に構築する必要があった
- ビジネスユーザーが複数のダッシュボードを参照し、データを手動で集約する手間が発生

---

## セキュリティとガバナンス

- マルチデータセットトピックは既存のデータセット権限を再利用
- **行レベルセキュリティ (RLS)** をサポート
- **列レベルセキュリティ (CLS)** をサポート
- 確立された管理体制が全てのクロスデータセットビジュアルと回答に適用

---

## 効果・メリット

### 運用効率の向上

- **データ準備の簡素化**: 事前のデータ結合が不要に
- **セマンティックモデルの再利用**: 一度定義したモデルをすべてのビジュアルで再利用
- **SPICE容量の効率化**: 複数のデータセットを別々に保持したまま活用可能

### ビジネス価値の向上

- **セルフサービス分析の拡大**: ビジネスユーザーが複雑なクロスデータセット分析を自力で実施
- **意思決定の迅速化**: ダッシュボード構築と質問応答が高速化
- **ガバナンスの統一**: 単一のセマンティックモデルで全体的な一貫性を確保

---

## 対象ユーザー

- Amazon Quickの既存ユーザー
- 複数のデータソースから分析を行うビジネスユーザー
- BI/分析チーム
- データエンジニア

---

## ユースケース

### 営業分析

- 顧客マスタ、受注データ、返品データの関連分析
- 顧客セグメント別の売上・返品傾向分析

### 在庫最適化

- 商品マスタ、在庫データ、売上データの統合分析
- 店舗別・商品別の在庫と販売動向の把握

### 顧客分析

- 顧客属性と購買履歴の関連分析
- ロイヤルティティア別の顧客行動分析

---

## 可用性

- **対象リージョン**: Amazon Quickが利用可能なすべてのAWSリージョン
- **提供形式**: 一般提供 (GA)

---

## 参考リンク

- **元記事**: [Amazon Quick supports multi-dataset analytical capabiity](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick/)
- **ブログ**: [Build a unified semantic layer across datasets with multi-dataset Topics in Amazon Quick](https://aws.amazon.com/blogs/machine-learning/build-a-unified-semantic-layer-across-datasets-with-multi-dataset-topics-in-amazon-quick/)
- **参考**: [Beyond BI: How the Dataset Q&A feature of Amazon Quick powers the next generation of data decisions](https://aws.amazon.com/blogs/machine-learning/beyond-bi-how-the-dataset-qa-feature-of-amazon-quick-powers-the-next-generation-of-data-decisions)
- **Amazon Quick Community**: [What's New - Amazon Quick Community](https://community.amazonquicksight.com/c/announcements/12)
