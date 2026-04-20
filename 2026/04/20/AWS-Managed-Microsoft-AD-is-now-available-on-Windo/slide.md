---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Managed Microsoft AD
Windows機能レベル 2016 で利用可能に

**発表日: 2026年4月20日**

---

## 概要

### AWS Managed Microsoft AD の3つの主要改善

- **Windows機能レベル 2016 へアップグレード**: すべての既存ディレクトリに自動適用
- **LAPS 機能搭載**: ローカル管理者パスワードの自動生成・管理
- **セキュリティ強化**: 特権アクセス管理と認証メカニズムが向上

### 利用可能リージョン

AWS Managed Microsoft ADが利用可能なほぼすべてのリージョンで有効
（中東 UAE・バーレーンを除く）

---

## 前提・背景

### クラウド Active Directory の課題

- オンプレミスと同等のセキュリティレベルの実現が必要
- ローカル管理者パスワード管理の複雑化と人的ミス
- ドメイン参加コンピュータのアクセス制御強化の要求

### 市場動向

- 2026年、Windows Server環境がハイブリッドクラウド化
- エンタープライズは Active Directory のモダナイゼーションを推進
- 特権アクセス管理（PAM）への投資が増加

---

## 主な機能と改善

### 1. Windows機能レベル 2016

- 最新の Active Directory 機能に対応
- セキュリティ強化機能がデフォルトで有効
- 既存ディレクトリへの自動適用（ユーザー操作不要）

### 2. LAPS（Local Administrator Password Solution）

- ドメイン参加コンピュータのローカル管理者パスワードを自動生成
- パスワードの複雑性と一意性を保証
- Active Directory に安全に保存・管理
- 定期的な自動ローテーション機能

---

## 効果・メリット

### セキュリティ面

- **認証強化**: 強化された認証メカニズムで不正アクセスを防止
- **パスワード管理**: 人的ミスを排除した自動管理により漏洩リスク低減
- **監査対応**: Active Directory 内での一元管理で監査ログ取得が容易

### 運用面

- **自動適用**: ユーザー操作なく自動アップグレード、手作業削減
- **統一管理**: オンプレミスと同じ方法でクラウド AD を管理可能
- **スケーラビリティ**: LAPS によりコンピュータ数増加時の管理負荷軽減

---

## ユースケース

### 金融・保険業界

- コンプライアンス要件（特権アクセス管理）への対応
- 監査ログの一元化による透明性確保

### 医療・公共機関

- HIPAA・GDPR 等規制への適合性向上
- ドメイン参加デバイスのセキュアな管理

### エンタープライズ一般

- ハイブリッドワーク環境での VDI・RDS との組み合わせ
- AWS Managed Microsoft AD + AWS Directory Service による統合

---

## まとめ

### AWS Managed Microsoft AD の位置づけ

- クラウドネイティブな Active Directory サービス
- Windows機能レベル 2016 により最新セキュリティに対応
- LAPS 機能搭載で特権アクセス管理がより安全に

### 次のステップ

1. 既存 AWS Managed Microsoft AD の機能レベル確認
2. LAPS 機能の有効化と管理ポリシーの策定
3. ドメイン参加コンピュータへの展開計画

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-managed-microsoft-ad-2016-functional-level/
- **AWS Directory Service ドキュメント**: https://docs.aws.amazon.com/directoryservice/
- **AWS Managed Microsoft AD**: https://aws.amazon.com/directoryservice/managed-microsoft-ad/
- **Microsoft LAPS**: https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**