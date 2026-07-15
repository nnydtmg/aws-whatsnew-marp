---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Cognitoでパスワードハッシュのインポートに対応

Amazon Cognito now supports importing users with password hashes

**What's New** | 2026-07-15T17:00:00

---

## 概要

- Amazon Cognitoは、CSVユーザーインポート時にパスワードハッシュをサポートする新機能を提供開始いたしました。
- これにより、ユーザーは初回サインイン時にパスワードをリセットすることなく、既存の認証情報で即座にサインインできるようになります。

---

## 前提・背景

### これまでの課題

- 従来は、CSVファイルからインポートされたユーザーは初回サインイン時にパスワードをリセットする必要がありました。


---

## 変更内容・新機能

- インポートされたすべてのハッシュは、保存前に追加の暗号化保護層を受け取ります。

- この機能は、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用できます。

---

## まとめ

- Amazon Cognito now supports importing users with password hashes について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cognito-password-hash-import/)
