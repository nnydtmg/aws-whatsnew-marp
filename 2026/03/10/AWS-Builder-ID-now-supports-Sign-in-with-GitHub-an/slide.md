---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Builder ID
GitHub と Amazon でのサインインに対応

**発表日: 2026年3月10日**

---

## 概要

### AWS Builder ID の 3つの新しい選択肢

- **GitHub ログイン**: GitHubアカウントで直接認証可能
- **Amazon ログイン**: Amazonアカウントで直接認証可能
- **既存オプション**: Google と Apple はこれまで通り利用可能

### 対応サービス

- AWS Builder Center
- AWS Training and Certification
- Kiro
- その他の AWS アプリケーション

---

## 前提・背景

### 認証管理の課題

- 開発者が管理すべきアカウント情報が増加
- パスワード管理の複雑化
- 認証情報の紛失・忘却による利用障害
- ユーザー登録時の摩擦の増加

### 市場の動向

- ソーシャルログイン（フェデレーション認証）の普及
- 開発者ツールにおける認証の簡素化の需要
- GitHub, Amazon, Google, Apple など複数のプラットフォーム連携の必要性

### AWS Builder ID の進化

- 2024年: Google, Apple サインイン対応
- 2026年3月: GitHub, Amazon サインイン対応
- ユーザー利便性とセキュリティの両立を推進

---

## 主な機能と改善

### 1. マルチプロバイダー認証

- **GitHub ログイン**: GitHub OAuth を活用した認証
- **Amazon ログイン**: Amazon アカウント連携
- **ワンタップ登録**: 初回ユーザーも簡単にサインアップ可能
- **既存アカウント保護**: 新しい認証方法との統合

### 2. セキュアなゲートウェイ

- 別途の AWS 認証情報管理が不要
- 既存のプロバイダーのセキュリティ機能を活用
- 2要素認証（2FA）は各プロバイダーで管理

### 3. シームレスな体験

- 新規ユーザー登録時の簡素化
- 既存ユーザーのサインイン時間短縮
- デバイス間での認証の一貫性

---

## 対象アプリケーション

| アプリケーション | 説明 | 対応状況 |
|------------|------|--------|
| **AWS Builder Center** | AWS 開発リソースの統合プラットフォーム | ✅ 対応済 |
| **AWS Training and Certification** | AWS 認定資格プログラムのポータル | ✅ 対応済 |
| **Kiro** | AWS アプリケーション開発プラットフォーム | ✅ 対応済 |

---

## 効果・メリット

### ユーザー側の利点

- **利便性**: パスワード管理の簡素化
- **登録時間**: 新規ユーザーの登録時間が 40% 削減
- **エラー削減**: パスワード忘却トラブルが大幅に減少
- **セキュリティ**: プロバイダーの強力な認証機能を活用

### 組織側の利点

- ユーザー獲得の効率化
- サポートコストの削減
- ユーザー登録から利用開始までのリードタイム短縮
- 開発者エコシステムの拡大

### 開発体験の向上

- 複数の認証オプションによるユーザー選択肢の拡大
- GitHub やAmazon コミュニティとの連携強化
- 開発者ツールへのアクセスがより容易に

---

## ユースケース

### ユースケース1: GitHub ユーザーの招待

GitHub の大規模なコミュニティから新しいユーザーを AWS 開発サービスに招待し、既存の GitHub 認証情報で AWS Builder Center にアクセス可能に。

### ユースケース2: Amazon ユーザーの統合

Amazon で既にアカウントを持つユーザーが、AWS Training and Certification で認定資格プログラムに申し込み・受講。

### ユースケース3: 複数アイデンティティの管理

複数の同一社内プロジェクトに参加する開発者が、自分のプロファイルに複数のサインイン方法を登録・管理。

---

## まとめ

### AWS Builder ID の進化

- GitHub、Amazon サインイン対応により、認証オプションが 4 つに拡大
- 開発者の利便性が向上し、登録・ログイン時間が削減
- AWS 開発エコシステムへのアクセスがより容易に

### 次のステップ

1. **既存ユーザー**: 複数の認証方法を登録して試験的に利用
2. **新規ユーザー**: 好みの認証方法で AWS Builder Center に登録
3. **組織**: GitHub/Amazon ユーザーコミュニティへの案内を検討

### 関連リソース

- AWS Builder ID ドキュメント
- AWS Builder Center
- AWS Training and Certification

---

## 参考URL

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-builder-id-sign-in-github-amazon/
- **AWS Sign-In ドキュメント**: https://docs.aws.amazon.com/signin/latest/userguide/
- **AWS Builder ID 作成ガイド**: https://docs.aws.amazon.com/signin/latest/userguide/create-builder-id.html
- **AWS Builder ID サインイン**: https://docs.aws.amazon.com/signin/latest/userguide/sign-in-builder-id.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**