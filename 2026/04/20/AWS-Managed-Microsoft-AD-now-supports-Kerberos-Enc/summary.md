# AWS Managed Microsoft AD now supports Kerberos Encryption audit event logs

**カテゴリ:** What's New
**公開日:** 2026-04-20
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/aws-managed-microsoft-ad-kerberose-encrption-logs/](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-managed-microsoft-ad-kerberose-encrption-logs/)

---

## 要約

AWS Managed Microsoft ADがKerberos暗号化監査イベントログをCloudWatch Logsに転送できるようになり、組織はRC4とAES暗号化の使用状況を可視化できます。

## 詳細

### 主な機能

- **Kerberos暗号化監査ログの転送**: イベントID 201～209の監査ログをCloudWatch Logsに自動転送
- **暗号化使用状況の可視化**: RC4とAES暗号化のどちらを使用しているリソースを特定
- **段階的セキュリティ向上**: セキュリティ要件と互換性に基づいた暗号化戦略を策定可能
- **簡単な設定**: AWS Directory Serviceコンソールの「Network and Security」タブで有効化

### 利用可能リージョン

中東（UAE）および中東（バーレーン）地域を除く、AWS Managed Microsoft ADが利用可能なすべてのAWSリージョン

### CVE-2026-20833への対応

Microsoftが2026年に予定しているKerberos RC4廃止（CVE-2026-20833）に向けた準備が可能

- 現在のRC4依存関係を特定
- AES暗号化への移行計画を策定
- 互換性を保ちながら段階的に実施

### 運用上のメリット

1. **自動監査ログ収集**: 手動でのログ取得が不要
2. **一元管理**: CloudWatch Dashboardで暗号化状況を一元管理
3. **アラート設定**: 非準拠な暗号化使用時に自動通知
4. **コンプライアンス対応**: 完全な監査証跡でレポーティング対応

### ユースケース

- **エンタープライズ環境の暗号化戦略**: 組織全体のKerberos暗号化状況を把握
- **セキュリティ監査**: 定期的な暗号化状況レポートの作成
- **段階的なセキュリティ強化**: 互換性を保ちながらセキュリティ向上