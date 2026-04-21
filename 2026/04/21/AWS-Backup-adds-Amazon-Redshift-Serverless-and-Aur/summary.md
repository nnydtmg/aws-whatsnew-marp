# AWS Backup adds Amazon Redshift Serverless and Aurora DSQL support for AWS Organizations backup policies

**カテゴリ:** What's New
**公開日:** 2026-04-21
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/04/backup-policies-aurora-dsql-redshift-serverless/

---

## 要約

AWS Backupは、Amazon Redshift ServerlessおよびAmazon Aurora DSQLをAWS Organizationsバックアップポリシーで直接指定できるようにサポートを拡張しました。これにより、組織管理者はタグベースの選択に頼ることなく、これらのリソースタイプに対してより正確で細かなバックアップ制御を実施できるようになります。

---

## 詳細

### 何が変わったのか

- **Amazon Redshift Serverless のネームスペース** が AWS Organizations バックアップポリシーで直接サポート
- **Amazon Aurora DSQL クラスター** が AWS Organizations バックアップポリシーで直接サポート
- これまでタグベースの選択に依存していたバックアップ対象リソースの指定が、直接リソースタイプを指定できるようになりました

### 従来の課題と解決

**従来の課題:**
- Redshift Serverless や Aurora DSQL をOrganizationsバックアップポリシーで保護する場合、タグベースの選択またはメンバーアカウント内のすべてのリソースをバックアップする必要がありました
- タグ管理の複雑化とタグ付け漏洩による保護漏洩のリスク
- 不要なリソースのバックアップによるコスト増加

**提供される解決策:**
- 組織管理者は、Redshift Serverless のネームスペース、Aurora DSQL クラスターを直接指定してバックアップポリシーを定義可能
- メンバーアカウント全体にわたってより正確な制御が可能
- 含めるリソース、除外するリソースについてきめ細かい設定が実現

### 利用可能な地域

- AWS Backupと各サービスが利用可能なすべての AWS Commercial Regions
- AWS GovCloud Regions

### 主なメリット

1. **運用効率化**
   - タグ管理の簡素化
   - ポリシー定義の容易性
   - タグ付け漏洩によるリスク低減

2. **コスト最適化**
   - 必要なリソースのみをターゲット化
   - 不要なバックアップの削減
   - ストレージコストの最適化

3. **ガバナンス強化**
   - 一元的なバックアップポリシー管理
   - 規制要件への対応
   - 監査対応の容易性

### 実装方法

1. AWS Console の Organizations バックアップポリシーセクションにアクセス
2. 新規または既存のバックアップポリシーを編集
3. リソースタイプとして "Redshift Serverless Namespace" または "Aurora DSQL Cluster" を選択
4. ポリシーを対象の OU またはメンバーアカウントに適用
5. 指定されたリソースが自動的にバックアップ保護の対象に

---

## ユースケース

### 1. マルチアカウント環境での統一バックアップ戦略

複数の AWS アカウントを運用する大規模組織では、すべての Redshift Serverless と Aurora DSQL リソースに対して統一的なバックアップポリシーを一度に適用できます。運用負荷を大幅に削減できます。

### 2. コスト最適化

本来必要としないバックアップの除外設定により、ストレージコストを削減。同時にコンプライアンス要件を満たすバックアップスケジュールを実装できます。

### 3. 部門別・環境別ポリシー管理

異なるOrganizational Unit (OU) ごとに異なるバックアップポリシーを適用し、本番・ステージング・開発環境での差別化を実現します。

---

## 関連情報

- **AWS Backup Documentation**: https://docs.aws.amazon.com/aws-backup/
- **AWS Organizations Backup Policies**: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup_syntax.html
- **AWS Backup Console**: https://console.aws.amazon.com/backup

### 関連する最近のアップデート

- [AWS Backup expands support for Amazon Redshift Serverless to seven Regions](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-backup-redshift-serverless-seven-regions/)
- [AWS Backup now supports Amazon Aurora DSQL](https://aws.amazon.com/about-aws/whats-new/2025/05/aws-backup-amazon-aurora-dsql/)
