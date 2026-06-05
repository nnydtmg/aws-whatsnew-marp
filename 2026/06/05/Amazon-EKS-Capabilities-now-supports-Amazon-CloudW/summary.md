# Amazon EKS Capabilities が Amazon CloudWatch Vended Logs をサポート

Amazon EKS Capabilities now supports Amazon CloudWatch Vended Logs

**カテゴリ:** What's New
**公開日:** 2026-06-04T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-capabilities-logging)

このページでは、AWS What's Newで発表された「Amazon EKS Capabilities now supports Amazon CloudWatch Vended Logs」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKS CapabilitiesがAmazon CloudWatch Vended Logsに対応し、Argo CD、ACK、kroなどの管理対象コントローラーのログをCloudWatch Logs、S3、Kinesis Data Firehoseに安全かつ確実に配信できるようになりました。EKS Capabilitiesを運用し、ログの一元管理と監視が必要なお客様にとって、追加料金なしで監視とトラブルシューティング機能が強化される有用なアップデートです。

## このアップデートで何が変わったか

- Amazon EKS Capabilities を CloudWatch Vended Logs の配信ソースとして設定可能に
- Argo CD、AWS Controllers for Kubernetes（ACK）、kro からのログを一元管理
- CloudWatch Logs、Amazon S3、Kinesis Data Firehose への複数配信先対応
- 追加 EKS 料金なし、CloudWatch Vended Logs の割引料金が適用
- すべての EKS Capabilities サポートリージョンで即座に利用可能

## 対象ユーザー

- EKS Capabilities を使用して複数のマネージドコントローラーを運用している組織
- ログの一元管理と監視が必要な企業
- 運用コストを最適化したいお客様
- コンプライアンス監査ログが必要な環境
- セキュリティとトラブルシューティング強化が必要な組織

## 主な特徴

### 1. ログ配信の統合

- Argo CD のデプロイログ
- AWS Controllers for Kubernetes（ACK）のリソース管理ログ
- kro（Kubernetes Resource Orchestrator）のオーケストレーションログ
- これらをすべて CloudWatch Vended Logs で一元管理

### 2. 複数の配信先に対応

- **CloudWatch Logs**: リアルタイム分析、Dashboard、アラーム
- **Amazon S3**: 長期アーカイブ、低コスト保管
- **Kinesis Data Firehose**: ストリーミング処理、SIEM 統合

### 3. コスト効率

- 追加 EKS 料金なし
- CloudWatch Vended Logs の割引料金（標準 CloudWatch Logs の約 50% 低コスト）
- 配信先の選択で最適なコスト構造を実現

### 4. セキュリティと管理

- AWS IAM による統一的なアクセス制御
- AWS 管理キーおよびカスタマーマネージドキーでの暗号化対応
- ネイティブ AWS ログ配信による信頼性の高い配信

## 利用方法

### 有効化手順

1. **AWS マネジメントコンソール**
   - EKS → Capabilities → ログ配信設定
   - または CloudWatch API を使用

2. **設定項目**
   - 各 Capability ごとに独立して設定
   - 配信先を選択（CloudWatch Logs/S3/Firehose）

3. **ログの確認**
   - CloudWatch Logs: リアルタイム表示・Insights で分析
   - S3: オブジェクトとしてダウンロード可能
   - Firehose: ストリーム処理へ自動転送

## ユースケース

### 1. マルチテナント環境の監視

複数の Capability を運用する SaaS プロバイダーが、テナント別にログを CloudWatch で分析・監視。

### 2. コンプライアンス監査

Finance や Healthcare 業界が、Argo CD のデプロイ履歴や ACK のリソース変更を S3 に監査ログとして保存。

### 3. インシデント対応

本番環境の Capability で障害が発生した際に、CloudWatch Logs でリアルタイムにエラーをキャッチし、SIEM に統合。

### 4. コスト最適化

スケール環境でログ量が多い場合、S3 への長期保管で CloudWatch Logs コストを削減。

## 技術仕様

| 項目 | 詳細 |
|-----|------|
| 対応リージョン | EKS Capabilities がサポートされているすべてのリージョン |
| 料金 | CloudWatch Vended Logs 標準料金（配信先で異なる） |
| 配信遅延 | Best effort（通常数分以内） |
| ログ形式 | JSON（CloudWatch Logs）、圧縮テキスト（S3） |
| 認証・認可 | AWS IAM、AWS 管理キー |
| 暗号化 | AWS 管理キー（デフォルト）、CMK 対応 |

## まとめと推奨事項

### メリット

- **監視強化**: Argo CD、ACK、kro のログを一元管理
- **コスト最適化**: Vended Logs 割引で約 50% 低コスト
- **運用効率**: CloudWatch Dashboard で統一管理
- **セキュリティ**: AWS IAM による統一的なアクセス制御

### 推奨される対応

1. 自社の EKS Capabilities 環境でログ配信を即座に有効化
2. CloudWatch Insights で関連するダッシュボードを作成
3. IAM ポリシーでアクセス権限を適切に設定
4. 配信先（CloudWatch/S3/Firehose）のコスト比較を実施

### 次のステップ

1. AWS マネジメントコンソールでログ配信設定を確認
2. パイロット環境でテスト・検証
3. 本番環境への段階的ロールアウト
4. CloudWatch Dashboard・Alarm の設定

## 参考リソース

- [AWS What's New - Amazon EKS Capabilities Logging](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-capabilities-logging)
- [Amazon EKS ドキュメント](https://docs.aws.amazon.com/eks/)
- [CloudWatch Vended Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)
- [EKS Capabilities Guide](https://docs.aws.amazon.com/eks/latest/userguide/capabilities.html)
- [Amazon CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing/)

---

**更新日**: 2026年6月4日
**作成者**: AWS What's New Content Team