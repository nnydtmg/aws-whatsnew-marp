# AWS Certificate Manager がメール検証からDNS検証への切り替えをサポート

AWS Certificate Manager supports switching from e-mail to DNS validation

**カテゴリ:** What's New
**公開日:** 2026-08-13
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/AWS-Certificate-Manager-Email-DNS-Switch)

---

## 要約

AWS Certificate ManagerがメールからDNS検証への切り替え機能を提供開始し、ARNを変更することなく既存の証書の検証方法を変更できるようになりました。これにより、CA/Bフォーラムのメール検証廃止期限までに移行し、完全に自動化された証書更新が実現できます。

## このアップデートで何が変わったか

### 主要な変更点

1. **検証方法の切り替え機能**
   - 既存ACM発行公開TLS証書のドメイン検証方法をメール検証からDNS検証に変更可能
   - 証書の再発行が不要
   - ARNの変更が不要

2. **スケジュール対応**
   - CA/Bフォーラムのメールベースのドメイン検証廃止に対応
   - 2028年3月15日までに段階的にメール検証のサポートを廃止
   - 2027年3月31日からメール検証での新規証書発行停止
   - 2027年9月30日からメール検証証書の更新停止

3. **自動化の実現**
   - DNS検証に切り替えることで、完全に自動化された証書更新が可能に

4. **システム統合への対応**
   - 証書のARNは変更されないため、CI/CDパイプライン、ロードバランサー設定、その他のAWSサービス統合での既存のARN参照は修正不要

---

## 詳細な説明

### 検証方法の切り替え操作

- **操作方法**: ACMコンソールまたはUpdateCertificateOptions APIを使用して検証方法を切り替え可能
- **CNAME設定**: 各ドメインに対してCNAMEレコードが提供され、DNS設定に追加するまで最大72時間の猶予
- **ステータス監視**: コンソールまたはListCertificateDomainValidations APIを使用して各ドメインの検証ステータスを監視可能

### 推奨事項

- 新しい証書にはDNS検証を推奨
- Amazon CloudFront配布にはHTTP検証を推奨

### 利用可能なリージョン

- この機能はACM証書が利用可能なすべてのAWSリージョンで利用可能

---

## ビジネスインパクト

### 運用効率化

- メール検証の手動対応が不要に
- 完全自動化による人的ミスの削減
- DevOpsパイプラインの効率向上

### コスト削減

- 証書管理にかかる人手の削減
- 更新遅延による再発行の削減

### セキュリティ向上

- 業界標準への準拠
- メール依存からの脱却
- 自動更新による失効防止

---

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/AWS-Certificate-Manager-Email-DNS-Switch)
- [AWS Certificate Manager ユーザーガイド](https://docs.aws.amazon.com/acm/latest/userguide/)
- [メールからDNS検証への移行ガイド](https://docs.aws.amazon.com/acm/latest/userguide/email-to-dns-migration.html)
- [AWS Security Blog](https://aws.amazon.com/blogs/security/)