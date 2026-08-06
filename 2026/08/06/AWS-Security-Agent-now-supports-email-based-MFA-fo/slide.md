---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security Agent、メールベース多要素認証に対応

AWS Security Agent now supports email-based MFA for penetration testing

**What's New** | 2026-08-06

---

## 概要

### AWS Security Agent の新たな MFA 対応

- **メールベース多要素認証** に対応し、ペネトレーションテストの対象範囲が大きく拡大
- メール転送ルール経由で MFA 認証情報を自動処理
- プライバシー保護を維持しながら複数 MFA 方式に対応
- 包括的なセキュリティテストが実現

---

## 前提・背景

### これまでの課題

- メールで送信されるワンタイムコードや検証リンクが必要なアプリケーション
- 従来は自動化ペネトレーションテストの対象外
- 手動テストによる時間・コスト増加

### 市場背景

- AWS Security Agent は 2026年3月31日に GA
- SAST、DAST、active exploitation を統合
- $50/task-hour で利用可能
- マルチクラウド対応（AWS、Azure、GCP、オンプレミス）

---

## 主な新機能：メール MFA 対応

### 機能概要

- **一意の転送アドレス生成**: 認証情報ごとに固有のアドレスを生成
- **メール転送統合**: 既存メールプロバイダーの転送ルール活用
- **自動認証処理**: MFA メール受信→コード/リンク抽出→認証完了を自動実行
- **プライバシー保護**: メールアカウント認証情報は一切保存しない

---

## 技術仕様

### 動作メカニズム

1. 認証情報ごとに一意の転送アドレスを生成
2. 既存メールプロバイダーで転送ルール設定
3. MFA メールを AWS Security Agent に自動ルーティング
4. エージェントが転送されたメッセージを自動読取
5. OTP コードまたは検証リンクを抽出・送信
6. 認証を自動完了

---

## 対応 MFA 方式

### 複数 MFA 方式の統一サポート

<div class="columns-3">
<div>

### メールベース MFA

- ワンタイムコード
- 検証リンク
- 通知メール

</div>
<div>

### 既存対応

- TOTP
  (Time-based OTP)
- SMS OTP
- セキュリティキー

</div>
<div>

### 利点

- 単一ソリューション
- 複雑さ削減
- テスト範囲拡大
- 自動化度向上

</div>
</div>

---

## 効果・メリット

### ビジネス効果

- **テスト範囲の拡大**: メール MFA 対応アプリの自動テストが実現
- **時間短縮**: 手動テストを削減し、ペネトレーション時間を短縮
- **コスト削減**: 自動化による効率向上で総テストコストを削減
- **セキュリティ向上**: より多くのアプリケーション脆弱性を発見

### セキュリティ効果

- **包括的カバレッジ**: OWASP Top 10 とビジネスロジック脆弱性に対応
- **検証済み脆弱性**: 実証可能な exploit パスをレポート
- **CVSS スコア付与**: 優先度付けが容易

---

## 対象ユースケース

### 活用シーン

<div class="columns">
<div>

### セキュリティチーム

- ペネトレーションテスト
- 脆弱性評価
- セキュリティ監査

</div>
<div>

### 開発チーム

- CI/CD パイプライン統合
- 設計レビュー
- コード分析

</div>
</div>

---

## 利用可能なリージョン

### グローバル対応

- AWS Security Agent サポート対象の **全 AWS リージョン** で利用可能
- マルチクラウド対応（Azure、GCP、オンプレミスも対応）
- 2 ヶ月間の無料トライアルあり（新規顧客）

---

## まとめ

### AWS Security Agent の進化

- **メール MFA 対応で**, ペネトレーションテストの自動化範囲を大きく拡大
- **プライバシー重視設計** により安全に認証情報を処理
- **既存 MFA 対応と統合** して、複数方式に対応する統一ソリューション提供
- **SAST・DAST・exploitation の統合** で、エンドツーエンドのセキュリティテスト実現

### 次のステップ

1. AWS Security Agent コンソールで無料トライアル開始
2. メール MFA 対応アプリの登録
3. ペネトレーションテストの実行
4. レポート確認と脆弱性対応

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-security-agent-mfa/
- **AWS Security Agent ドキュメント**: https://docs.aws.amazon.com/security-agent/
- **AWS Security Blog**: https://aws.amazon.com/blogs/aws/
- **関連記事**: https://www.stingrai.io/blog/does-aws-security-agent-replace-cloud-penetration-test

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**