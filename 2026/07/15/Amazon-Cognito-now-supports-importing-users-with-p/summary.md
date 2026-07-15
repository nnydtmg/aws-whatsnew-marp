# Amazon Cognitoでパスワードハッシュのインポートに対応

Amazon Cognito now supports importing users with password hashes

**カテゴリ:** What's New
**公開日:** 2026-07-15T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cognito-password-hash-import/)

このページでは、AWS What's Newで発表された「Amazon Cognito now supports importing users with password hashes」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Cognitoは、CSVユーザーインポート時にパスワードハッシュをサポートする新機能を提供開始いたしました。これにより、ユーザーは初回サインイン時にパスワードをリセットすることなく、既存の認証情報で即座にサインインできるようになります。

## このアップデートで何が変わったか

- インポートされたすべてのハッシュは、保存前に追加の暗号化保護層を受け取ります。

- この機能は、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用できます。

## 対象ユーザー

- Amazon Cognitoは、CSVユーザーインポート時にパスワードハッシュをインポートする機能をサポートするようになりました。

## 詳細

- Amazon Cognitoは、CSVユーザーインポート時にパスワードハッシュをインポートする機能をサポートするようになりました。

- 従来は、CSVファイルからインポートされたユーザーは初回サインイン時にパスワードをリセットする必要がありました。

- 現在は、CSVファイルにパスワードハッシュを含めることで、インポートされたユーザーが既存の認証情報で即座にサインインできるようになりました。

- サポートされているパスワードハッシュアルゴリズムには、bcrypt、scrypt、Argon2id、およびPBKDF2 with SHA-256が含まれています。

- インポートされたすべてのハッシュは、保存前に追加の暗号化保護層を受け取ります。

- この機能は、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用できます。

- AWS Management Console、AWS Command Line Interface（CLI）、またはAWS Software Development Kits（SDKs）を使用して、ユーザーインポートを開始できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cognito-password-hash-import/)
