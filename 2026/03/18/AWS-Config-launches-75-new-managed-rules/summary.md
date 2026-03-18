# AWS Config launches 75 new managed rules

**カテゴリ:** What's New
**公開日:** 2026-03-18T15:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/aws-config-launches-new-rules/](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-config-launches-new-rules/)

---

## 要約

AWS Configが75個の新しいマネージドルールをリリースしました。これらのルールはセキュリティ、耐久性、運用に関する様々なユースケースに対応しており、Conformance Packsを使用してアカウント単位または組織全体でのマルチアカウントガバナンスを効率化できます。

## 詳細

### アップデート内容

- AWS Configが75個の新しいマネージドルールを追加したことが発表されました。

- これらのルールはセキュリティ、耐久性、運用などの様々なユースケースに対応しており、AWS環境全体のガバナンスを強化できます。

- AWS Amplify、Amazon SageMaker、Amazon Route 53など、複数のAWSサービスに対応したセキュリティ評価が可能になりました。

### デプロイ方法

- Conformance Packsを活用することで、これらのルールをアカウント単位または組織全体で一括デプロイできるようになりました。

### 対応サービス

- ACM、API Gateway、AppMesh、CloudTrail、Lambda、RDS、S3など、幅広いAWSサービスに対応したルールが含まれています。

### コンプライアンスチェック機能

- タグ付けの確認、暗号化設定の検証、ヘルスチェック設定の確認など、多様なコンプライアンスチェック機能が提供されます。

### 管理方法

- AWS Configコンソールから直接これらのルールを検索、有効化、管理することができます。

## 新規ルールの主要カテゴリ

### セキュリティ関連

- **ACM_CERTIFICATE_TRANSPARENT_LOGGING_ENABLED**: ACM 証明書の透明性ログ有効化確認
- **CLOUDTRAIL_EVENT_DATA_STORE_MULTI_REGION**: CloudTrail イベントデータストアのマルチリージョン設定確認
- **IAM_OIDC_PROVIDER_CLIENT_ID_LIST_CHECK**: IAM OIDC プロバイダーのクライアント ID リスト確認

### AWS Amplify 関連

- **AMPLIFY_APP_BUILD_SPEC_CONFIGURED**: Amplify アプリのビルド設定確認
- **AMPLIFY_BRANCH_AUTO_BUILD_ENABLED**: ブランチの自動ビルド有効化確認
- **AMPLIFY_BRANCH_PULL_REQUEST_PREVIEW_ENABLED**: プルリクエストプレビューの有効化確認

### AWS AppMesh 関連

- **APPMESH_VIRTUAL_GATEWAY_LISTENERS_HEALTH_CHECK_ENABLED**: バーチャルゲートウェイのヘルスチェック有効化確認
- **APPMESH_VIRTUAL_NODE_LISTENERS_HEALTH_CHECK_ENABLED**: バーチャルノードのヘルスチェック有効化確認
- **APPMESH_VIRTUAL_NODE_SERVICE_BACKENDS_TLS_ENFORCED**: サービスバックエンドの TLS 強制確認

### Amazon SageMaker 関連

- **SAGEMAKER_DATA_QUALITY_JOB_ENCRYPT_IN_TRANSIT**: データ品質ジョブの暗号化確認
- **SAGEMAKER_MODEL_BIAS_JOB_ENCRYPT_IN_TRANSIT**: モデルバイアスジョブの暗号化確認
- **SAGEMAKER_MODEL_EXPLAINABILITY_JOB_ENCRYPT_IN_TRANSIT**: モデル説明可能性ジョブの暗号化確認

### Amazon Route 53 関連

- **ROUTE53_RECOVERY_CONTROL_CLUSTER_TAGGED**: リカバリーコントロールクラスタのタグ付け確認
- **ROUTE53_RECOVERY_READINESS_CELL_TAGGED**: リカバリー準備性セルのタグ付け確認
- **ROUTE53_RECOVERY_READINESS_RESOURCE_SET_TAGGED**: リソースセットのタグ付け確認

### その他のサービス

- **RDS_CLUSTER_BACKUP_RETENTION_CHECK**: RDS クラスタバックアップ保持期間の確認
- **RDS_GLOBAL_CLUSTER_AURORA_MYSQL_SUPPORTED_VERSION**: RDS グローバルクラスタの Aurora MySQL サポートバージョン確認
- **S3_DIRECTORY_BUCKET_LIFECYCLE_POLICY_RULE_CHECK**: S3 ディレクトリバケットのライフサイクルポリシー確認
- **LAMBDA_FUNCTION_LOG_FORMAT_JSON**: Lambda 関数の JSON ログ形式設定確認
- **ECS_SERVICE_PROPAGATE_TAGS_ENABLED**: ECS サービスのタグ伝播設定確認
- **ELBV2_TARGETGROUP_PROTOCOL_ENCRYPTED**: ELBv2 ターゲットグループの暗号化プロトコル確認

## メリット

### 運用効率化

- 手動でのコンプライアンスチェックを自動化
- AWS Config コンソールから一元管理
- Conformance Packs で組織全体に一括デプロイ

### ガバナンス強化

- セキュリティ、耐久性、運用の多層的な検証
- リスク低減と監査対応の強化
- ルール履歴と評価結果の可視化

### コスト削減

- 時間とリソースの削減
- 修正対象の自動特定
- 本番環境でのインシデント防止

## 利用開始方法

### ステップ 1: AWS Config の有効化

- AWS Management Console から AWS Config にアクセス
- リージョンを選択してサービスを有効化

### ステップ 2: ルールを検索・有効化

- AWS Config コンソール内で新しいマネージドルールを検索
- 対象サービス名またはルール ID で検索
- 必要なルールを選択して有効化

### ステップ 3: Conformance Packs でのデプロイ

- Conformance Packs メニューから新規作成
- テンプレートを選択またはカスタマイズ
- アカウント/組織単位でデプロイ

### ステップ 4: モニタリング

- AWS Config ダッシュボードでコンプライアンス状況を監視
- 非準拠リソースの自動修正を設定
- 定期的なレポート生成と分析

## リージョン対応

- AWS Config が利用可能なすべてのリージョンで新ルールが提供されます
- 各ルールのリージョン別可用性は AWS Config マネージドルール ドキュメントで確認可能です
- 定期的に新しいリージョン対応が追加される予定です

## 参考リンク

- AWS What's New: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-config-launches-new-rules/
- AWS Config 開発者ガイド: https://docs.aws.amazon.com/config/latest/developerguide/
- マネージドルール一覧: https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html
- ルール評価の開始: https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_add-rules.html
