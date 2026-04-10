# AWS Private CA now supports customer managed permissions for cross-account sharing

**カテゴリ:** What's New
**公開日:** 2026-04-09
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/aws-private-ca-customer-managed-permissions/](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-private-ca-customer-managed-permissions/)

---

## 要約

AWS Private CAがAWS RAMのカスタマー管理権限に対応し、複数アカウント間でのCA共有時に必要なAPIオペレーションのみを選択的に許可できるようになりました。これにより、PKIの一元化がより柔軟で安全に実現できるようになります。

## 詳細

### 主な変更点

- AWS Private CAがAWS Resource Access Manager（AWS RAM）でカスタマー管理権限をサポート
- 複数のAWSアカウント間で認証局（CA）を共有でき、PKIの一元化が可能
- カスタマー管理権限により、CA共有時に許可するAWS Private CA APIオペレーションを正確に選択可能

### 従来との違い

**AWS管理権限（従来）**
- 事前定義されたアクションセットのみが利用可能
- クロスアカウント発行者は特定の証明書テンプレートに制限
- きめ細かいアクセス制御が不可能

**カスタマー管理権限（新規）**
- 読み取りオペレーション（DescribeCertificateAuthority、GetCertificate、GetCertificateAuthorityCertificateなど）と書き込みオペレーション（IssueCertificate、RevokeCertificateなど）から選択可能
- クロスアカウント発行者は特定の証明書テンプレートに制限されない
- 各消費アカウントまたは組織単位に対してアクセスを調整可能

### 利用可能地域

- AWS Private CAとAWS RAMが利用可能なすべてのAWSリージョン

### ユースケース

1. **エンタープライズPKI管理**: 中央集約型のCA管理と部門別アクセス制御
2. **マイクロサービス環境**: サービスごとのアカウント分離と最小権限の原則
3. **マルチテナント環境**: テナント別アカウントの安全な管理と柔軟なアクセス制御

### メリット

- **セキュリティ向上**: 不要なオペレーションへのアクセス完全遮断
- **運用効率化**: 複数アカウントのCA一元管理
- **コスト削減**: アカウント別CA構築の不要化
- **柔軟性**: 組織変更に対応した権限調整が容易

### 参考資料

- [AWS Private CA User Guide - Customer managed permissions](https://docs.aws.amazon.com/privateca/latest/userguide/pca-cmp.html)
- [AWS RAM User Guide - Creating and using customer managed permissions](https://docs.aws.amazon.com/ram/latest/userguide/create-customer-managed-permissions.html)
- [AWS Private CA - Cross-account access best practices](https://docs.aws.amazon.com/privateca/latest/userguide/pca-resource-sharing.html)