# Amazon Bedrock now supports cost allocation by IAM user and role

**カテゴリ:** What's New
**公開日:** 2026-04-09
**発表日時:** 2026年4月9日 21:50:00 UTC
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/bedrock-iam-cost-allocation/](https://aws.amazon.com/about-aws/whats-new/2026/04/bedrock-iam-cost-allocation/)

---

## 要約

Amazon Bedrockは、IAMプリンシパルによるコスト配分機能をCUR 2.0（AWS Cost and Usage Report 2.0）およびCost Explorerで新たにサポートするようになりました。これにより、顧客はBedrockの推論コストをユーザー、チーム、プロジェクト、アプリケーション単位で詳細に追跡・分析することが可能になります。

---

## 主な変更点

### 新機能: IAM単位のコスト配分

1. **IAMプリンシパルによるコスト配分**
   - IAMユーザーおよびIAMロール単位でBedrockの推論コストを追跡可能
   - 複雑な組織構造でも正確なコスト配分が実現

2. **複数の分析手段**
   - **AWS Cost and Usage Report 2.0 (CUR 2.0)**: ラインアイテムレベルでの詳細分析
   - **AWS Cost Explorer**: グラフィカルなコスト可視化とトレンド分析

3. **カスタムタグとの統合**
   - IAMユーザーおよびロールにチーム、プロジェクト、コストセンター等の属性をタグ付け可能
   - タグをコスト配分タグとして有効化することで自動的にコスト分析対象に

---

## 利用可能範囲

- **対応リージョン**: Amazon Bedrockが利用可能なすべてのAWSコマーシャルリージョン
- **利用料金**: 追加料金なし（AWS Cost Management サービスとしての標準機能）

---

## 利用開始方法

### 3つのステップ

#### 1. IAM リソースへのタグ付け
- AWSコンソール or AWS CLIを使用してIAMユーザーおよびロールにカスタム属性をタグとして付与
- 例: `Team: Engineering`, `Project: ChatBot`, `CostCenter: 12345`

#### 2. Billing and Cost Management でタグを有効化
- Billing and Cost Management コンソール → Billing → Cost Allocation Tags
- 設定したタグをコスト配分タグとして有効化
- 有効化後、翌日からコスト分析データに反映

#### 3. Cost Explorer or CUR 2.0 で分析
- Cost Explorer でタグを絞り込み条件として使用
- CUR 2.0 でラインアイテムレベルの詳細分析が可能
- BI ツール連携による高度な分析も実現

---

## ユースケース

### 1. マルチテナント SaaS プラットフォーム
- 顧客別のBedrockコスト配分
- 利用量ベースの課金体系構築
- 顧客ごとのコスト最適化提案

### 2. エンタープライズ組織
- 部門別・プロジェクト別のコスト管理
- チーム単位での予算設定と実績管理
- チームメンバーのコスト意識向上

### 3. コスト中心型の組織
- 正確なコスト配分に基づいた内部チャージバック実装
- 予算承認プロセスの効率化
- 過去実績データに基づいた将来のコスト予測

---

## メリット・効果

### ビジネスメリット
- ✅ 正確な費用配分: チーム・プロジェクト・ユーザー単位での正確なコスト把握
- ✅ コスト最適化: コスト要因の特定と効率化施策の実施
- ✅ チャージバック: 正確なコスト配分に基づいた内部チャージバック制度の実装
- ✅ 予算管理強化: チーム単位での予算設定と実績管理

### 技術メリット
- ✅ シンプルな導入: 既存のIAMタグ機構を活用
- ✅ 細粒度な追跡: IAM単位での詳細なコスト追跡
- ✅ AWS 統合: 標準的なAWSコスト管理ツールで利用可能
- ✅ スケーラビリティ: エンタープライズ規模の複雑な組織に対応

### 管理メリット
- ✅ ガバナンス強化: コスト責任の明確化
- ✅ マルチテナント対応: 複数部門・顧客の効率的な費用管理
- ✅ 自動化対応: タグ付けルールの自動適用

---

## 対象組織

### 特に活用効果が高い組織

1. **マルチテナント・SaaS プロバイダー**
   - 複数の顧客にサービスを提供する場合、顧客別のコスト配分が重要

2. **大規模エンタープライズ**
   - 複数の部門・チームが共有のクラウドインフラを使用する場合

3. **コスト管理が重要な組織**
   - 部門別・プロジェクト別のコスト管理が必須の場合
   - チャージバック制度を導入している場合

4. **AI/ML の大規模利用組織**
   - Bedrock の推論コストが増加している組織
   - 複数のユーザー・チームがBedrockを使用している場合

---

## 注意事項・前提条件

- AWS Cost and Usage Report 2.0 (CUR 2.0) の設定が必要
- Cost Explorer へのアクセス権限が必要
- IAM ユーザー・ロールへのタグ付けには IAM 管理権限が必要
- コスト配分タグの有効化には Billing and Cost Management への権限が必要

---

## 関連情報

### AWS ドキュメント
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/)
- [AWS Cost Management](https://aws.amazon.com/aws-cost-management/)
- [Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html)
- [AWS Cost and Usage Report (CUR)](https://docs.aws.amazon.com/cur/latest/userguide/)
- [AWS Cost Explorer](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html)

### 関連トピック
- AWS のコスト最適化
- IAM ベストプラクティス
- クラウドコスト管理
- マルチテナントアーキテクチャ

---

## まとめ

Amazon Bedrock のIAMコスト配分機能は、組織がAI推論コストをより正確に追跡・管理できるようにする重要な機能です。特に、複数チーム・プロジェクト・部門でBedrockを利用している組織や、コスト管理が重要な組織にとって大きなメリットがあります。

シンプルな設定で導入でき、AWS の標準的なコスト管理ツール（Cost Explorer, CUR 2.0）と統合されているため、既存のコスト管理体制をシームレスに強化できます。
