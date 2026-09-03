# Amazon SES が S/MIME メール署名に対応

Amazon SES now supports S/MIME email signing

**カテゴリ:** What's New
**公開日:** 2026-09-03
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ses-supports-smime-signing)

このページでは、AWS What's Newで発表された「Amazon SES now supports S/MIME email signing」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon SESにS/MIMEメール署名機能が追加されました。セキュリティを重視する送信者は、既存のSES環境を維持したまま自動署名をご利用いただけます。

## このアップデートで何が変わったか

- Amazon SESはS/MIMEによるメール署名を新たにサポートいたします。
- 証明書をAWS Certificate Managerに保存し送信者アイデンティティで有効化すれば、SESが自動的に署名いたします。
- この更新はセキュリティを重視する送信者に適しております。
- 既存のSES設定を継続しながらデジタル署名を追加したいお客様に有用です。

## 詳細

### S/MIME 署名とは

S/MIME（Secure/Multipurpose Internet Mail Extensions）は、メールメッセージの暗号化と電子署名を提供する標準です。S/MIME署名により、受信者はメッセージが本当に送信者から送られたものであり、送信後に改ざんされていないことを確認できます。

### 実装方法

1. **証明書の登録**: AWS Certificate Manager（ACM）に署名用証明書を保存
2. **送信者アイデンティティの設定**: SES コンソールで送信者アイデンティティに対して S/MIME 署名を有効化
3. **自動署名**: メール送信時に SES が自動的にメッセージに署名

### 利点

- **セキュリティ向上**: メール真正性の確保と改ざん検知
- **運用効率化**: 手動署名が不要で、既存システムへの影響が最小化
- **互換性**: S/MIME非対応のメールクライアントでも通常通り読める

## ユースケース

### 金融サービス
- 取引確認メール、口座情報通知の真正性確認
- コンプライアンス要件への対応

### ヘルスケア
- 患者向け通知メール（HIPAA準拠）
- 医療情報の安全な送信

### エンタープライズ
- 重要な契約書・文書の送付
- 企業間通信の信頼性向上

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ses-supports-smime-signing)
- [Amazon SES ドキュメント](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-smime.html)
- [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/)