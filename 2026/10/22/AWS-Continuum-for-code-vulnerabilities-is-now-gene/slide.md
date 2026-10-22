---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Continuum for code vulnerabilities が一般提供開始

AWS Continuum for code vulnerabilities is now generally available

**AWS Blog** | 2026-10-22T20:33:10

---

## 概要

- AWS Continuum for code vulnerabilitiesが一般提供開始となり、悪用可能な脆弱性の検証と修正提案を自動化いたします。
- 大規模なコード資産を抱える組織のセキュリティ運用効率化に貢献いたします。

---

## 前提・背景

### 関連する最近の動向

- **AWS Continuum for code vulnerabilities is now generally available | AWS News Blog**
  [詳細](https://aws.amazon.com/blogs/aws/aws-continuum-for-code-vulnerabilities-is-now-generally-available/)

- **Introducing AWS Continuum: Security at machine speed**
  [詳細](https://aws.amazon.com/blogs/security/introducing-aws-continuum-security-at-machine-speed)

- **Security at Machine Speed:...

---

## 変更内容・新機能

【追加情報】
- 2026年6月のAWS Summit NYCでgated previewとして発表され、2026年10月22日に一般提供開始
- 有効地域: US East (N. Virginia) と US West (Oregon)
- コンテキストグラフ: コードリポジトリとAWS環境（AWS Configリソース・ネットワーク構成）から構築
- Collectorをコード実行アカウント・リージョンに設置し、ネットワーク到達性と攻撃経路を評価
- ビジネスクリティカルなシステム（顧客データストア・決済パイプライン・認証サービス）への近さで優先度を決定
- 証拠レベル：静的解析で証明済み、再現可能な場合はサンドボックスで攻撃を実行しPoCコード付与
- 修正はコードパッチ・依存関係アップグレード・設定変更としてプルリクエストで提案
- 全ての修正は人による承認が必須（human-in-the-loop）。将来は信頼度に応じ自動適用も可能に
- コードソース: GitHub統合 または Amazon S3バケット
- スキャンはスケジュール実行またはオンデマンド実行
- モデル非

---

## ユースケース

AWS Continuum for code vulnerabilitiesが一般提供開始となりました。本機能はコードの脆弱性を検出および検証し、悪用可能性とビジネス影響度に基づいて優先順位を付けます。修正はパッチまたはプルリクエストとして提案され、人による承認後に適用されます。コードリポジトリとAWS環境のコンテキストから攻撃経路と影響範囲を評価いたします。大規模なアプリケーション資産を運用し、多数のスキャナー検出結果を処理する組織に適しております。セキュリティおよび開発チームの連携が必要なお客様にご活用いただけます。

---

## まとめ

- AWS Continuum for code vulnerabilities is now generally available について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/blogs/aws/aws-continuum-for-code-vulnerabilities-is-now-generally-available/)

### 関連情報

- [AWS Continuum for code vulnerabilities is now generally available | AWS News Blog](https://aws.amazon.com/blogs/aws/aws-continuum-for-code-vulnerabilities-is-now-generally-available/)
- [Introducing AWS Continuum: Security at machine speed](https://aws.amazon.com/blogs/security/introducing-aws-continuum-security-at-machine-speed)
- [Security at Machine Speed: How AWS Continuum Finds, Validates, and Fixes Vulnerabilities](https://builder.aws.com/content/3FSBeB7JZdgaTXGKUwEbTk1zjso/security-at-machine-speed-how-aws-continuum-finds-validates-and-fixes-vulnerabilities-before-you-know-they-exist)
- [AWS Continuum to Enable Agentic Code Security for Enterprises - InfoQ](https://www.infoq.com/news/2026/07/aws-continuum-code-security)
- [Shifting Security Left with AWS Continuum](https://repost.aws/articles/AR563wo1hiQtCrpo6VvDNknQ/shifting-security-left-with-aws-continuum-from-reactive-scanning-to-continuous-validation)