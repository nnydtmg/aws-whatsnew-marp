# AWS Secrets Manager が Datadog と Snowflake の外部シークレット管理に対応

AWS Secrets Manager adds managed external secrets support for Datadog vended keys and Snowflake Programmatic Access Tokens

**カテゴリ:** What's New
**公開日:** 2026-05-22
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/secrets-manager-managed-external-secrets-datadog-snowflake/)

---

## 要約

AWS Secrets Manager は、Datadog キーと Snowflake プログラマティックアクセストークン（PAT）の管理外部シークレット機能を新たにサポートしました。これにより、お客様はサードパーティの認証情報を AWS Secrets Manager から自動的にローテーションし、セキュアかつ効率的に管理できるようになります。

---

## このアップデートで何が変わったか

### Datadog 連携の強化

- **API キー**: Datadog API 認証用のキーを自動ローテーション
- **アプリケーションキー**: Datadog アプリケーション認証用キー
- **管理者認証情報ペア**: サービスアカウント用の認証情報
- 3 種類すべてが AWS Secrets Manager から一元管理・自動ローテーション対応

### Snowflake PAT 対応

- **ネイティブ認証サポート**: Snowflake 標準認証方式で連携
- **プログラマティックアクセストークン**: PAT の自動ローテーション実装
- **設定可能な猶予期間**: 旧トークンと新トークンの併用期間を指定可能
- **無停止移行**: アプリケーション再起動や中断なくトークン切り替え可能

### 既存機能との連携

- BigID、Confluent Cloud、MongoDB Atlas、Salesforce との既存統合に加わる
- マルチクラウド・マルチサービスのシークレット管理エコシステムが拡大
- すべて AWS Secrets Manager マネージド外部シークレット対応リージョンで利用可能

---

## 詳細情報

### AWS Secrets Manager とは

AWS Secrets Manager は、データベースパスワード、API キー、トークンなどのシークレットを安全に作成・管理・ローテーションするサービスです。

### 管理外部シークレット（Managed External Secrets）

- AWS リソース外のサードパーティサービスの認証情報を管理
- AWS Secrets Manager が自動的にローテーション実行
- Lambda 関数の開発・維持が不要
- カスタムロジック実装なしでネイティブに対応

### Datadog との統合の利点

1. **監視・分析基盤の強化**: Datadog への API キーを一元管理
2. **セキュリティ向上**: 定期的な自動ローテーションで露出リスク低減
3. **運用効率化**: Datadog 設定内の複数キーを AWS Secrets Manager から統一管理
4. **監査対応**: CloudTrail で認証情報変更履歴を完全追跡

### Snowflake PAT との統合の利点

1. **トークン管理の自動化**: Snowflake PAT の定期ローテーション自動実行
2. **無停止運用**: 猶予期間設定により旧トークン利用中に新トークンへ移行
3. **大規模環境対応**: 複数のアプリケーション同時管理に対応
4. **ネイティブ認証**: Snowflake 標準認証方式で安全に実装

---

## ユースケース

### ユースケース1: データ分析パイプライン

**構成:**
- AWS → Datadog (メトリクス・ログ送信)
- Datadog → Snowflake (分析データ取り込み)

**メリット:**
- 全認証情報を AWS Secrets Manager で一元管理
- 自動ローテーションにより無停止で認証情報切り替え
- アプリケーション側の修正不要

### ユースケース2: マルチクラウド環境

**構成:**
- AWS、GCP、Azure など複数クラウド環境
- 各環境のリソースを Datadog で監視
- 分析結果を Snowflake に集約

**メリット:**
- AWS Secrets Manager が単一の認証情報管理ポイント
- リージョン横断的な管理・監視
- コンプライアンス要件への対応強化

### ユースケース3: セキュリティ・DevOps

**構成:**
- CI/CD パイプラインで Datadog API キーを利用
- テスト結果を Snowflake に記録

**メリット:**
- ハードコード化した認証情報を排除
- 自動ローテーションで定期的な情報更新
- 監査ログで全アクセス履歴を追跡

---

## 対応リージョン

AWS Secrets Manager の管理外部シークレット機能がサポートされているすべての AWS リージョン
- 北米、ヨーロッパ、アジアパシフィック、その他全リージョン対応
- 新リージョン追加に伴い自動対応予定

---

## さらに詳しく知る

### 公式ドキュメント

- [AWS Secrets Manager ドキュメント](https://docs.aws.amazon.com/secretsmanager/)
- [Datadog 連携ガイド](https://docs.datadoghq.com/agent/configuration/secrets-management/)
- [Snowflake 認証ドキュメント](https://docs.snowflake.com/en/user-guide/security-authentication)

### 関連機能

- [MongoDB Atlas・Confluent Cloud 対応 (2026年4月)](https://aws.amazon.com/about-aws/whats-new/2026/04/secrets-manager-managed-external-secrets-mongodb-confluent)
- AWS KMS による暗号化
- IAM ポリシーによるアクセス制御
- CloudTrail による監査ログ

---

## まとめ

### AWS Secrets Manager の今後

1. **統合拡大**: Datadog・Snowflake 追加により連携サービス継続増加
2. **セキュリティ強化**: 自動ローテーション標準装備でベストプラクティス実装
3. **運用効率化**: Lambda 開発不要で複雑な要件に対応
4. **グローバル対応**: 全リージョンで利用可能

### 導入の推奨ポイント

- Datadog + Snowflake 利用企業の必須チェック
- ハイブリッド・マルチクラウド環境での認証情報一元化
- セキュリティ強化・運用効率化の同時実現
- コンプライアンス要件への対応

---

**最終更新:** 2026年5月22日