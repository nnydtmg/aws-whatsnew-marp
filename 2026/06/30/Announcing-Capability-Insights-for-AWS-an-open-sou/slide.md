---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Capability Insights - VPC内でリージョナルケーパビリティを管理するオープンソースソリューション

Announcing Capability Insights for AWS, an open-source solution for regional capabilities

**What's New** | 2026-06-30

---

## 概要

- AWS Capability Insightsは、VPC内にデプロイ可能なオープンソースソリューションであり、リージョナルケーパビリティデータの自動更新とワークロード分析機能を提供します。
- このソリューションは、データレジデンシー要件、コンプライアンス対応、およびマルチリージョン戦略を必要とする組織に特に適しており、追加ライセンスコストなしで利用できます。

---

## 前提・背景

### マルチリージョンアーキテクチャの課題

- リージョンごとのAWSサービス・機能の可用性管理が複雑
- データレジデンシー要件への対応が必要
- コンプライアンス要件を満たす内部報告ツールの不足
- 複数リージョン戦略の実行における可視性の欠如

### 関連する最近の動向

- **AWS Capabilities by Region** が1,500以上のサービス・機能を追跡
- availability notifications による自動アラート機能の開始
- リージョナル計画ツールの強化

---

## 主な機能と特徴

### 1. リージョナルケーパビリティダッシュボード

- 24時間ごとの自動更新
- 全リージョンのAWSサービス・機能・API操作・CloudFormationリソースをカバー
- VPC内でのセルフホスト型ダッシュボード

### 2. Workload Analysis コンポーネント

- CloudTrailログとCloudFormationスタックをスキャン
- 200以上のサービスから実際の使用状況を自動抽出
- 複数週間かかるGAPanalysiを迅速に実施

---

## 変更内容・新機能

### アーキテクチャと構成

- **ホスティング**: お客様のAmazon VPC内（インターネット経由ではない）
- **デプロイ対象**: Lambda、S3、API Gateway、EventBridge、Step Functions、Athena、AWS Glueが利用可能な任意のAWSリージョン
- **スタック方式**: 
  - ベーススタック（ダッシュボード＋API）
  - オプションスタック1（Workload Analyzer）
  - オプションスタック2（リージョナルガバナンス）
  - オプションスタック3（会話型アシスタント）

### コンプライアンス・セキュリティ

- すべてのデータがVPCペリメータ内に留まる
- 独自のインフラストラクチャ所有・管理
- 完全なガバナンスコントロール

---

## 効果・メリット

### 運用効率の向上

- ✅ マルチリージョン計画の迅速化
- ✅ コンプライアンス報告の自動化
- ✅ ダッシュボードで全体把握が容易

### セキュリティ・コンプライアンス

- ✅ データレジデンシー要件への対応
- ✅ 内部ネットワーク内での完全なデータ保持
- ✅ 独自のセキュリティポリシー適用

### コスト最適化

- ✅ 追加ライセンスコストなし
- ✅ 標準的なAWSサービス料金のみ
- ✅ オープンソースなので自由なカスタマイズ可能

---

## 対象ユースケース

### 最適なユースケース

1. **マルチリージョンアーキテクチャの構築**
   - 複数リージョンにワークロードを分散する組織
   - リージョナル拡張計画を立案するチーム

2. **データレジデンシー要件への対応**
   - 特定地域でのデータ保持が法的要件の組織
   - 自社VPC内でのみデータ管理を許可する企業

3. **コンプライアンス・ガバナンス強化**
   - 内部レポーティング機能が必要なコンプライアンスチーム
   - 利用可能なサービスの可視化が必須の組織

4. **ディザスタリカバリー計画**
   - マルチリージョン復旧戦略を計画するチーム

---

## まとめ

### AWS Capability Insights の価値

- VPC内にデプロイ可能なオープンソース型リージョナルケーパビリティ管理ツール
- 24時間自動更新で常に最新の情報を保持
- CloudTrailログ解析による現状把握の効率化
- コンプライアンス・データレジデンシー要件への対応

### 推奨される次のステップ

1. GitHubリポジトリを確認してデプロイ可能性を検証
2. 開発環境でのパイロット実装
3. ワークロード分析機能の試行
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/capability-insights-aws/
- **GitHubリポジトリ**: https://github.com/aws/capability-insights-for-aws
- **AWS Capabilities by Region**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-regional-planning-tool-notification/
- **関連ブログ**: https://aws.amazon.com/blogs/aws/introducing-aws-capabilities-by-region-for-easier-regional-planning-and-faster-global-deployments/

---

**ご質問やご不明な点は、AWS サポートまたはコミュニティにお問い合わせください**