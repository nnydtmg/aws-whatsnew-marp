---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS CloudTrail で UserIdentity ベースのネットワークアクティビティイベントをフィルタリング

VPCエンドポイントのフィルタリングが強化

**発表日: 2026年7月20日**

---

## 概要

### 新しいフィルタリング機能

- **UserIdentity ベースのフィルタリング**: IAM ユーザーアイデンティティに基づいた選択的なイベント記録
- **ロギングコスト削減**: 不要なログを削減しながら重要なセキュリティイベントを捕捉
- **ノイズ低減**: AccessDenied イベントなど重要なイベントのみをログ記録

### 主な効果

- セキュリティ上重要なアクセス拒否イベントの効果的な検出
- 不正アクセス試行の早期発見
- データ境界戦略の実装が容易に

---

## 前提・背景

### 従来の課題

- VPCエンドポイント経由のすべてのネットワークアクティビティイベントをログ記録すると、ロギングコストが増大
- 信頼できるプリンシパルからのアクセスログなど、不要なログが大量に生成される
- データ流出の試みなどセキュリティ上重要なイベントを検出するのが困難
- ログの分析・管理に多くの時間が必要

### 市場の需要

- CloudTrail ネットワークアクティビティイベント機能が一般提供開始（2025年2月）
- データ境界戦略の重要性が増加
- より細粒度のログフィルタリング機能が求められていた

---

## 変更内容・新機能

### 1. UserIdentity ベースのフィルタリング

- IAM ユーザーアイデンティティに基づいた条件付きログ記録
- 信頼できるアイデンティティリストに含まれないユーザーからのアクセスのみをログ記録
- AccessDenied イベントと正常なアクセスの区別が可能

### 2. Advanced Event Selectors による細粒度制御

- `eventName` や `vpcEndpointId` などの既存フィールドと UserIdentity 条件を組み合わせ
- ログに記録される内容をきめ細かく制御
- 複数の条件をまとめて管理可能

### 3. 利用可能な方法

- AWS Management Console から設定
- AWS Command Line Interface (CLI) で自動化
- AWS SDK を使用したプログラマティック設定

---

## 効果・メリット

### コスト削減

- ✅ 不要なログ記録の大幅削減
- ✅ ロギングに関連する保存・分析コストを削減
- ✅ CloudTrail Lake への保存コスト最適化

### セキュリティ向上

- ✅ 認可されていないアクセス試行を効果的に検出
- ✅ データ流出の試みを識別可能
- ✅ VPC エンドポイントポリシー違反を検出

### 運用効率化

- ✅ ログノイズの低減で分析が容易に
- ✅ セキュリティイベントに集中できる
- ✅ コンプライアンス監査の効率化

---

## ユースケース

### 1. データ境界戦略の実装

- VPC エンドポイント経由のアクセスを監視
- 承認されたプリンシパル以外のアクセスのみ記録
- 潜在的なデータ流出を早期に発見

### 2. セキュリティイベント検出

- 信頼されていない IAM ユーザーからのアクセス拒否を追跡
- 異常なアクセスパターンを識別
- セキュリティアラートの精度向上

### 3. コンプライアンス監査

- 金融機関や医療業界での規制要件を満たす
- 重要なセキュリティイベントのみを監査ログとして保持
- 監査効率を改善

---

## 利用方法

### AWS Console での設定例

1. CloudTrail のトレイルまたはイベントデータストアを作成
2. ネットワークアクティビティイベントを有効化
3. Advanced Event Selectors で UserIdentity フィルタリングを設定
4. 記録対象とする IAM ユーザーアイデンティティを指定

### 対象サービス

- Amazon S3
- Amazon EC2
- AWS Key Management Service (AWS KMS)
- AWS Secrets Manager
- AWS CloudTrail

---

## 対応リージョン・利用可能性

- **対応リージョン**: CloudTrail ネットワークアクティビティイベントがサポートされているすべてのAWSリージョン
- **API**: AWS Management Console、AWS CLI、AWS SDK
- **料金**: CloudTrail 価格表を参照

### 関連する最近の動向

- VPC エンドポイント経由のネットワークアクティビティイベント機能の一般提供開始（2025年2月）
- セキュリティ・コンプライアンス機能の継続的な強化

---

## まとめ

### 主な改善点

1. **UserIdentity ベースのフィルタリング**: IAM ユーザーアイデンティティに基づいた選択的ログ記録
2. **ロギングコストの最適化**: 不要なログを削減し、ストレージコスト削減
3. **セキュリティイベント検出の強化**: AccessDenied や不正アクセス試行の効果的な検出
4. **データ境界戦略の実装支援**: VPC エンドポイント経由のアクセス監視が容易に

### 推奨される次のステップ

1. 自社のセキュリティ要件を整理
2. CloudTrail での UserIdentity フィルタリング設定を計画
3. パイロット環境で機能を評価
4. 本番環境への段階的展開を実施

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-cloudtrail-filter-useridentity-advance-selectors/
- **AWS CloudTrail ドキュメント**: https://docs.aws.amazon.com/cloudtrail/
- **CloudTrail Network Activity Events**: https://docs.aws.amazon.com/cloudtrail/latest/userguide/network-activity-events.html
- **Boosting AWS Security and Compliance**: https://www.cloudthat.com/resources/blog/boosting-aws-security-and-compliance-with-aws-cloudtrails-for-vpc-network-activity-events
- **CloudTrail Network Activity Events for VPC Endpoints | Wiz Blog**: https://www.wiz.io/blog/aws-vpc-endpoint-cloudtrail

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**