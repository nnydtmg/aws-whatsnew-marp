# AWS Capability Insights - VPC内でリージョナルケーパビリティを管理するオープンソースソリューション

Announcing Capability Insights for AWS, an open-source solution for regional capabilities

**カテゴリ:** What's New
**公開日:** 2026-06-30
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/capability-insights-aws/)

このページでは、AWS What's Newで発表された「Announcing Capability Insights for AWS, an open-source solution for regional capabilities」の内容を日本語で要約しています。

---

## 要約

AWS Capability Insightsは、VPC内にデプロイ可能なオープンソースソリューションであり、リージョナルケーパビリティデータの自動更新とワークロード分析機能を提供します。このソリューションは、データレジデンシー要件、コンプライアンス対応、およびマルチリージョン戦略を必要とする組織に特に適しており、追加ライセンスコストなしで利用できます。

---

## このアップデートで何が変わったか

### 主な機能

1. **リージョナルケーパビリティダッシュボード**
   - 24時間ごとの自動更新
   - 全リージョンのAWSサービス、機能、API操作、CloudFormationリソースをカバー
   - VPC内のセルフホスト型ダッシュボード

2. **Workload Analysis コンポーネント**
   - CloudTrailログとCloudFormationスタックのスキャン
   - 200以上のAWSサービスから実際の使用状況を自動抽出
   - 複数週間かかるGAP分析を迅速に実施可能

3. **セキュリティ・コンプライアンス**
   - すべてのデータがVPCペリメータ内に留まる
   - 独自のインフラストラクチャ所有・管理
   - 完全なガバナンスコントロール

### デプロイ要件

- **対応リージョン**: Lambda、S3、API Gateway、EventBridge、Step Functions、Athena、AWS Glueが利用可能なAWSリージョン
- **コスト**: 標準的なAWSサービス料金のみ（追加ライセンスコストなし）

---

## 対象ユーザー

### 最適な利用者

1. **マルチリージョンアーキテクチャを構築するチーム**
   - 複数リージョンにワークロードを分散
   - リージョナル拡張計画の立案

2. **データレジデンシー要件を持つ組織**
   - 特定地域でのデータ保持が法的要件
   - 自社VPC内でのみデータ管理を許可

3. **コンプライアンスチーム**
   - 内部レポーティング機能が必要
   - 利用可能なサービスの可視化が必須

4. **ディザスタリカバリー計画チーム**
   - マルチリージョン復旧戦略の計画

---

## 詳細情報

### AWS Capability Insightsの構成

AWS Capability Insightsは、お客様のAmazon VPC内にリージョナルケーパビリティデータをデプロイできるオープンソースソリューションです。以下の要素で構成されています：

- **ベースコンポーネント**: ダッシュボード + REST API
- **オプション機能**: 
  - Workload Analyzer（CloudTrailログ分析）
  - リージョナルガバナンス（IAM/SCP ポリシー生成）
  - 会話型アシスタント（Amazon Bedrock統合）

### ダッシュボード機能

- 24時間ごとの自動更新で常に最新の情報を保持
- AWS Capabilities by Region データをベースにした検索可能なダッシュボード
- 全リージョンのサービス、機能、API操作、CloudFormationリソースタイプをカバー

### Workload Analysis 機能

- CloudTrailログをスキャンして実際に使用しているAWSサービスを自動抽出
- CloudFormationスタックを分析
- 200以上のサービスから実運用で使用されているサービスを効率的に特定
- 従来は複数週間かかるGAP分析を迅速に実行可能

### セキュリティとコンプライアンス

- **データ保持**: すべてのデータはVPCペリメータ内に留まる
- **所有権**: 独自のインフラストラクチャとして所有・管理
- **ガバナンス**: 完全なコントロール権を保有
- **要件対応**: 
  - データレジデンシー要件への対応
  - コンプライアンス監査への支援
  - 内部レポーティング機能の提供

### デプロイメント

- **必要なサービス**: Lambda、S3、API Gateway、EventBridge、Step Functions、Athena、AWS Glue
- **デプロイ方式**: CloudFormation スタック
- **カスタマイズ**: オープンソースなので自由にカスタマイズ可能

### コスト

- **ライセンス**: 追加ライセンスコストなし
- **料金**: 標準的なAWSサービス料金のみ
- **コスト最適化**: 使用リソースに応じた従量課金

---

## ユースケース

### ユースケース1: マルチリージョン展開企業

複数リージョンにサービスを展開している企業では、各リージョンの利用可能なAWSサービスを一元管理できます。リージョナル拡張時の事前調査を大幅に削減できます。

### ユースケース2: 規制産業での利用

金融機関や医療機関など、データレジデンシー要件が厳格な業界では、VPC内でのみデータを保持できるため、コンプライアンス要件を完全に満たせます。

### ユースケース3: ディザスタリカバリー計画

マルチリージョン復旧戦略を計画する際、各リージョンの利用可能なサービスを事前に確認できるため、実現可能性の高いDR計画を立案できます。

### ユースケース4: 内部ガバナンス・コンプライアンス報告

コンプライアンスチームが内部レポーティング用に利用可能なAWSサービスを自動抽出でき、監査対応や内部チェックの効率化が可能です。

---

## 効果・メリット

### 運用効率の向上

- ✅ マルチリージョン計画の大幅な短縮
- ✅ GAP分析の自動化による工数削減
- ✅ リージョナルケーパビリティの一元管理
- ✅ ダッシュボードによる直感的な可視化

### セキュリティ・コンプライアンス

- ✅ データレジデンシー要件への完全対応
- ✅ 内部ネットワークでのみデータ保持
- ✅ 監査ログの完全記録
- ✅ 組織固有のセキュリティポリシー適用

### コスト最適化

- ✅ 追加ライセンス不要（オープンソース）
- ✅ 既存AWSサービス料金のみ
- ✅ 必要に応じたリソース調整が容易

### ビジネス価値

- ✅ リージョナル拡張の迅速化
- ✅ マルチリージョン戦略の実現可能性向上
- ✅ コンプライアンス対応の自動化
- ✅ チーム間の情報共有の効率化

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/capability-insights-aws/
- **GitHub リポジトリ**: https://github.com/aws/capability-insights-for-aws
- **AWS Capabilities by Region**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-regional-planning-tool-notification/
- **関連ブログ**: https://aws.amazon.com/blogs/aws/introducing-aws-capabilities-by-region-for-easier-regional-planning-and-faster-global-deployments/

---

**最終更新**: 2026-06-30
**作成者**: AWS What's New スライド自動生成ツール