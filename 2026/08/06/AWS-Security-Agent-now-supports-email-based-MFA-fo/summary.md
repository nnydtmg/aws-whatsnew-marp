# AWS Security Agent、メールベース多要素認証に対応

AWS Security Agent now supports email-based MFA for penetration testing

**カテゴリ:** What's New
**公開日:** 2026-08-06T16:54:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-security-agent-mfa/)

このページでは、AWS What's Newで発表された「AWS Security Agent now supports email-based MFA for penetration testing」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Security Agentがメールベースの多要素認証（MFA）に対応し、ペネトレーションテストの対象範囲が拡大されました。本機能により、メール転送ルールを通じてMFA認証情報を自動的に処理でき、プライバシーを保護しながら複数のMFA方式に対応したアプリケーションの包括的なセキュリティテストが可能になります。

## このアップデートで何が変わったか

- 従来は、メールで送信されるワンタイムコードや検証リンクを必要とするアプリケーションは、自動化されたペネトレーションテストの対象外でしたが、このアップデートにより対応が可能になりました。

- この機能はAWS Security AgentがサポートされているすべてのAWSリージョンで利用可能です。

## 対象ユーザー

- AWS Security Agent を利用しているセキュリティチーム
- ペネトレーションテストを実施する組織
- メール MFA を採用しているアプリケーション開発者
- クラウドセキュリティの専門家

## 詳細

### AWS Security Agent とは

- 2026年3月31日に一般利用可能（GA）になった自動ペネトレーションテストサービス
- 価格：$50/task-hour（秒単位で課金）
- 機能：SAST、DAST、active exploitation を統合した context-aware agent
- マルチクラウド対応：AWS、Azure、GCP、オンプレミス環境に対応

### メール MFA 対応の詳細

- AWS Security Agent（現在はAWS Continuumの一部）がメールベースの多要素認証（MFA）に対応し、ペネトレーションテストの範囲が拡大されました。

- 従来は、メールで送信されるワンタイムコードや検証リンクを必要とするアプリケーションは、自動化されたペネトレーションテストの対象外でしたが、このアップデートにより対応が可能になりました。

- 本機能では、認証情報ごとに一意の転送アドレスを生成し、既存のメールプロバイダーの転送ルールを使用してMFAメールをエージェントにルーティングします。

- ペネトレーションテスト中、エージェントは自動的に転送されたメッセージを読み取り、コードまたはリンクを送信して認証を完了させます。

- メールアカウント認証情報は保存されないため、強力なプライバシー保護が維持されます。

- 既存のTOTP対応に加えて、複数のMFA方式に対応したアプリケーションテストの統一的なソリューションが提供されます。

- この機能はAWS Security AgentがサポートされているすべてのAWSリージョンで利用可能です。

### 動作メカニズム

1. **転送アドレス生成**: 認証情報ごとに一意のメール転送アドレスを生成
2. **転送ルール設定**: 既存メールプロバイダーで転送ルールを設定
3. **メールルーティング**: MFA メールが AWS Security Agent に自動ルーティング
4. **メッセージ読取**: エージェントが転送されたメッセージを自動読取
5. **認証情報抽出**: ワンタイムコードまたは検証リンクを自動抽出
6. **認証完了**: 抽出した情報を使用して認証プロセスを完了

### セキュリティ特性

- **プライバシー保護**: メールアカウント認証情報は一切保存されない
- **プライバシー設計**: 強力なプライバシー保護が維持される
- **包括的テスト**: 複数のMFA方式に対応した統一的なソリューション

### 利用可能な環境

- AWS Security Agent がサポートされているすべての AWS リージョン
- マルチクラウド環境対応

## 活用シーン

### セキュリティチーム

- ペネトレーションテストの自動化
- セキュリティ脆弱性の網羅的な検出
- セキュリティ監査の効率化

### 開発チーム

- CI/CD パイプラインへの組み込み
- 設計段階でのセキュリティ検証
- コード分析とセキュリティレビュー

## メリット

### ビジネス面

- テスト対象範囲の大幅な拡大
- 手動テストコストの削減
- セキュリティテストの自動化率向上
- ペネトレーションテスト実施時間の短縮

### セキュリティ面

- OWASP Top 10 およびビジネスロジック脆弱性への対応
- 検証可能な exploit パスのレポート
- CVSS スコアによる優先度管理
- より包括的なセキュリティテスト

## 参考リンク

- [AWS What's New - AWS Security Agent now supports email-based MFA for penetration testing](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-security-agent-mfa/)
- [AWS Security Agent ドキュメント](https://docs.aws.amazon.com/security-agent/)
- [AWS Security Blog](https://aws.amazon.com/blogs/aws/)
- [AWS Security Agent - 概要](https://aws.amazon.com/security-agent/)
