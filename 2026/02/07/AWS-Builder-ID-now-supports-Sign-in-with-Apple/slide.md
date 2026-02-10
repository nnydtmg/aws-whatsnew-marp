---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Builder ID now supports Sign in with Apple

**発表日: 2026年2月5日**

---

# 概要

- AWS Builder ID が Apple Sign in に対応しました。
- Google Sign in に続いて、Apple ユーザーが AWS Builder Center、AWS Training and Certification、AWS re:Post、AWS Startups、および Kiro へのアクセスを Apple Account 認証情報でシームレスに実行できるようになりました。

---

# 前提・背景

### これまでの課題

- AWS Builder ID は複数のアプリケーション・サービスへのアクセスを提供する個人プロフィール
- 以前はメール・パスワードと Google Sign in のみが選択肢
- Apple ユーザーは別途認証情報を管理する必要があった
- パスワード管理の複雑さ、忘れたパスワードの問題が存在

---

# 新機能の詳細

### Sign in with Apple の統合

- **対応サービス:** AWS Builder Center、AWS Training and Certification、AWS re:Post、AWS Startups、Kiro
- **認証方式:** Apple Account を使用した OAuth ベースの認証
- **iCloud+ との連携:** Hide My Email 機能にも対応

---

# 効果・メリット

- **ユーザー体験の向上**
  - パスワード管理の複雑さを排除
  - 忘れたパスワードの問題を軽減
  - シームレスな新規登録と既存ユーザーのサインイン

- **セキュリティの強化**
  - Apple Account の認証情報を活用
  - iCloud+ の Hide My Email で プライバシーを保護
  - OAuth トークンベースの安全な認証

---

# ユースケース

- **開発者・ビルダー向け:**
  - AWS Builder Center での開発リソースへのアクセス
  - AWS Training and Certification での認定プログラム登録
  - AWS re:Post でのコミュニティディスカッション参加
  - AWS Startups のスタートアップリソース探索
  - Kiro での開発

---

# まとめ

- AWS Builder ID に Sign in with Apple が追加
- Apple ユーザーのシームレスなアクセスを実現
- セキュリティと利便性が向上
- 複数の AWS ビルダーサービスで利用可能

---

# 参考URL

- [AWS Builder ID now supports Sign in with Apple](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-builder-id-sign-in-apple)
- [Create your AWS Builder ID](https://docs.aws.amazon.com/signin/latest/userguide/create-builder-id.html)
- [Setting up Sign in with Apple as an identity pool IdP](https://docs.aws.amazon.com/cognito/latest/developerguide/apple.html)
- [Sign in with AWS Builder ID](https://docs.aws.amazon.com/signin/latest/userguide/sign-in-builder-id.html)
