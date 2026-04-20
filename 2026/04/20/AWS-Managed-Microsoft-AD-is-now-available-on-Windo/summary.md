# AWS Managed Microsoft AD is now available on Windows functional level 2016

**カテゴリ:** What's New
**公開日:** 2026-04-20
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/04/aws-managed-microsoft-ad-2016-functional-level/

---

## 要約

AWS Managed Microsoft ADがWindows機能レベル 2016にアップグレードされ、すべての既存ディレクトリに自動適用されました。このアップグレードにより、LAPS機能を含む強化された認証メカニズムと特権アクセス管理のセキュリティが向上し、クラウド上のActive Directory基盤をより適切に保護することができます。

---

## 詳細

### アップグレード内容

- AWS Managed Microsoft ADが Windows機能レベル 2016にアップグレード
- すべての既存のAWS Managed Microsoft ADディレクトリに自動的に適用
- ユーザーの手動操作は不要

### セキュリティ機能

- **強化された認証メカニズム**: より安全な認証プロセス
- **特権アクセス管理**: 権限管理のセキュリティ向上
- **LAPS（Local Administrator Password Solution）機能**:
  - ドメイン参加コンピュータのローカル管理者パスワードを自動生成・管理
  - 生成されるパスワードは複雑で一意
  - Active Directoryに安全に保存
  - 定期的な自動ローテーション対応

### 提供範囲

- AWS Managed Microsoft ADが利用可能なすべてのリージョンで有効
- 例外: 中東（UAE）および中東（バーレーン）リージョンを除く

### 利点

- **セキュリティ向上**: 自動的なパスワード管理により漏洩リスク低減
- **運用効率化**: 手作業を削減し管理負荷を軽減
- **コンプライアンス対応**: 監査ログの一元管理で規制への対応を容易化
- **スケーラビリティ**: コンピュータ数増加時の管理が効率的

---

## 対象ユーザー

- AWS Managed Microsoft ADを使用している企業
- Windows環境でハイブリッドクラウドを構築している組織
- ゼロトラストセキュリティを推進している企業
- コンプライアンス要件（HIPAA・GDPR等）がある業界

---

## 実装時の注意点

- アップグレードは自動実行されるため、特別な対応は不要
- ただし、LAPS機能の最適な利用に向けた管理ポリシーの策定が推奨
- ドメイン参加コンピュータ側での対応確認を実施
