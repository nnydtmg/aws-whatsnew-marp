# Amazon EKS enhances cluster governance with new IAM condition keys

**カテゴリ:** What's New
**公開日:** 2026-04-20
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-eks-iam-condition-keys/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-eks-iam-condition-keys/)

---

## 要約

Amazon EKS は、クラスターの作成と設定 API に対して 7 つの新しい IAM 条件キーを追加し、マルチアカウント環境における一元的なセキュリティガバナンスとコンプライアンス強制を実現しました。この更新は、AWS Organizations のサービスコントロールポリシーと統合され、手動プロセスに依存することなくクラスター設定に対する細かい制御を提供します。

## 詳細

Amazon EKS は、クラスター作成および設定 API に対して 7 つの追加 IAM 条件キーをサポートするようになりました。新しい IAM 条件キーにより、プライベートのみの API エンドポイント（eks:endpointPublicAccess、eks:endpointPrivateAccess）、カスタマー管理の AWS KMS キーによる暗号化（eks:encryptionConfigProviderKeyArns）、承認された Kubernetes バージョンへの制限（eks:kubernetesVersion）、本番環境ワークロードの削除保護（eks:deletionProtection）、コントロールプレーンのスケーリング層の指定（eks:controlPlaneScalingTier）、および高可用性のためのゾーンシフト機能（eks:zonalShiftEnabled）が実現されます。これらの条件キーは CreateCluster、UpdateClusterConfig、UpdateClusterVersion、および AssociateEncryptionConfig API に適用されます。AWS Organizations のサービスコントロールポリシー（SCP）と統合され、複数アカウント全体での一元的なガバナンスが可能になります。新しい IAM 条件キーは、Amazon EKS が利用可能なすべての AWS リージョンで追加料金なしで利用できます。