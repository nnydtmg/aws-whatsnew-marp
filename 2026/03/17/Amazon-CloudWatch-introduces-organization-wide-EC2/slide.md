---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch
組織全体でのEC2詳細モニタリング自動有効化

**発表日: 2026年3月16日**

---

## 概要

### CloudWatch enablement rules の3つの主要特徴

- **自動有効化**: AWS Organization全体でEC2詳細モニタリングを自動的に有効化
- **柔軟なスコープ設定**: 組織、アカウント、リソースタグに基づいた細粒度制御
- **一貫したメトリクス収集**: 1分間隔のメトリクス収集を確保

### 利用可能性

- **対応リージョン**: すべてのAWSコマーシャルリージョン
- **対応リソース**: 既存および新規EC2インスタンス
- **メトリクス間隔**: 1分（従来の5分から改善）

---

## 前提・背景

### 従来の課題

- EC2インスタンスの詳細モニタリングは手動で有効化が必要
- 大規模な環境では組織全体での統一的な設定が困難
- 新規インスタンス起動時に手動で設定する運用負荷

### 市場の動向

- **AWS Organizationの活用拡大**: 複数アカウント管理の標準化
- **Auto Scaling需要増加**: インスタンス使用率の迅速な検知が重要
- **運用の自動化**: IaC、ポリシーベースの設定管理が普及

### CloudWatchの進化

- CloudWatch Ingestion の機能拡張
- Telemetry enablement rules による一元管理
- エンタープライズワークフロー対応を強化

---

## 主な機能と改善

### 1. Enablement Rules の機能

- **CloudWatch Ingestion** でルールを作成
- ルールスコープに一致するEC2インスタンスを自動検知
- 既存および新規インスタンスに対して詳細モニタリングを有効化
- ルール更新は即座に反映

### 2. スコープの柔軟性

- **組織レベル**: Organization全体に適用
- **アカウントレベル**: 特定アカウントに限定
- **リソースタグ**: 「env:production」など、タグベースの指定

### 3. メトリクス詳細度の向上

- **詳細モニタリング**: 1分間隔でのデータ収集
- **追加ディメンション**: InstanceId、ImageId、InstanceType
- **Auto Scaling連携**: インスタンス使用率の変化を迅速に検知

---

## メリット・効果

### 運用効率の向上

- **自動化**: 手動設定の削減
- **一貫性**: 組織全体で統一されたモニタリング設定
- **スケーラビリティ**: 大規模環境での管理負荷の軽減

### ビジネス価値

- **レスポンス向上**: 1分間隔のメトリクスで迅速な対応が可能
- **コスト最適化**: 必要なインスタンスのみ詳細モニタリングを有効化
- **信頼性向上**: 一貫したモニタリングで障害検知を強化

### セキュリティ・コンプライアンス

- **ポリシー適用**: 組織のセキュリティポリシーを自動適用
- **監査対応**: 統一されたメトリクス収集で監査が容易

---

## ユースケース

### 1. 本番環境の優先的な監視

中央のDevOpsチームが「env:production」タグを持つEC2インスタンスに対してenablement ruleを設定。本番ワークロードのメトリクスを自動的に1分間隔で収集し、障害検知を迅速化。

### 2. Multi-Account 環境の統一管理

AWS Organization配下の複数アカウントに対してOrganization レベルでenablement ruleを設定。全アカウントのEC2インスタンスで統一されたモニタリングを実現。

### 3. Auto Scaling 関連ワークロード

Auto Scalingグループ内のインスタンスに対して詳細モニタリングを自動有効化。インスタンス使用率の変化を迅速に検知し、スケーリングポリシーが素早く対応。

---

## 料金・制限

### 料金体系

- **詳細モニタリング**: CloudWatchの標準料金体系に準拠
- **メトリクスデータ**: 1分間隔でのデータ保存に応じた課金
- **カスタムメトリクス**: 別途料金

### 制限事項

- **マルチリージョン**: 各リージョンで個別の設定が必要
- **既存インスタンス**: 適用には再計算が必要な場合あり

---

## まとめ

### Amazon CloudWatch Enablement Rules の位置づけ

- **組織全体のモニタリング自動化**: 運用負荷を大幅削減
- **ビジネス要件への対応**: タグベースの柔軟なスコープ設定
- **信頼性・応答性の向上**: 1分間隔メトリクスで迅速な対応を実現

### 次のステップ

1. 自社の環境でenablement ruleの適用箇所を特定
2. 本番・非本番環境の区分けルール定義
3. CloudWatch Ingestionでルール設定を実施
4. メトリクス収集と自動スケーリングの連携確認

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-org-enablement-ec2-metrics/
- **CloudWatch ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/
- **EC2 詳細モニタリング**: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-detailed-monitoring.html
- **Telemetry enablement rules**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/telemetry-config-rules.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
