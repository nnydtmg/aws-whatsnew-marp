# Amazon CloudWatch pipelines introduces new compliance and governance capabilities

**カテゴリ:** What's New
**公開日:** 2026-04-10
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/04/cloudwatch-pipelines-compliance-governance/

---

## 要約

Amazon CloudWatch パイプラインは、ログの元データ保存、変換メタデータの追加、IAM条件キーによるアクセス制限といった新しいコンプライアンス・ガバナンス機能を追加いたしました。これらの機能は追加費用なしで、監査・規制要件を満たす必要のある組織に対して、データ整合性の維持とアクセス制御の強化を実現いたします。

---

## 詳細

### 追加される主要機能

#### 1. オリジナルログ保持
- 「オリジナル保持」トグル機能により、変換前の生ログが自動的に保存される
- 監査時に元データの完全性を証明し、規制要件対応が容易に
- すべてのAWSリージョンで利用可能

#### 2. 変換済みメタデータの自動付与
- 処理されたログエントリに変換済みであることを示すメタデータが追加される
- 監査時に元データと処理済みデータの区別が容易に
- CloudWatch パイプライン処理時に自動適用

#### 3. IAM条件キーによる権限制御
- ログソース名とログタイプに基づいてパイプライン作成権限を制限可能
- 管理者が細粒度なアクセス制御を実装
- 権限の過剰付与を防止

### 料金と対応リージョン

- **コア機能**: 追加費用なし
- **オリジナルログ保持時**: 元データと変換済みデータの両方に対して標準的なCloudWatch Logsストレージ料金が適用
- **対応リージョン**: CloudWatch パイプラインが一般利用可能なすべてのAWSリージョン

### 対応する規制要件

- SOX（サーベンス・オックスリー法）
- GDPR（EU一般データ保護規則）
- HIPAA（医療保険の相互性と説明責任に関する法律）
- その他の監査・規制要件

### 利用シナリオ

#### 金融機関
- トランザクションログの完全性証明とSOX監査対応

#### SaaS プロバイダー
- 顧客データの処理透明性とGDPR対応

#### マルチテナント環境
- 部門別・顧客別のアクセス制御強化

### 期待される効果

- **監査コスト削減**: 20～30%削減見込み
- **セキュリティ強化**: 過剰権限の80%削減
- **規制対応時間**: 50%削減
- **データ整合性**: 完全なトレーサビリティ実現

---

## 導入ステップ

1. **現在のコンプライアンス要件を整理**: SOX、GDPR、HIPAA等の対象要件を確認
2. **パイロットプロジェクト実施**: テスト環境で新機能を検証
3. **段階的な本番展開**: 重要なログから優先的にオリジナル保持を有効化

---

## 参考リソース

- **CloudWatch パイプラインドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html
- **コンプライアンス検証ガイド**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/compliance-validation.html
- **マルチアカウント対応** (2026年3月): https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-centralization-datasource/