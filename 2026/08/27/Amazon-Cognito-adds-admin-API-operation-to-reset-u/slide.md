---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Cognito で TOTP 設定をリセットする管理 API 操作が利用可能に

**発表日: 2026年8月26日**

---

## 概要

### TOTP MFA リセット機能の3つの特徴

- **簡素化されたリカバリー**: ユーザーが TOTP デバイスを紛失した場合、アカウント再作成不要で復旧可能
- **継続的なセキュリティ**: 多要素認証の強制を維持しながらユーザーに復旧パスを提供
- **管理者による制御**: AdminDeleteSoftwareToken API で管理者がユーザーの TOTP 設定を簡単にリセット

### 利用可能なリージョン

- **すべての AWS リージョン**: Amazon Cognito が利用可能なすべてのリージョンで提供

---

## 前提・背景

### MFA による認証の課題

- TOTP デバイスを紛失したユーザーはロックアウトされる
- 従来はアカウント再作成が必要となる場合がある
- セキュリティを維持しながらユーザーをサポートしたい

### Amazon Cognito の MFA 機能

- Amazon Cognito では複数の MFA 方式をサポート（SMS、TOTP、メール等）
- TOTP は高いセキュリティを提供する認証方式
- 管理者による柔軟な MFA 管理が求められている

---

## 主な機能と改善

### 1. 新しい管理 API 操作

- **AdminDeleteSoftwareToken API**: ユーザーの TOTP 設定をリセット
- AWS CLI、SDK、または API を通じてアクセス可能
- 管理者権限で実行

### 2. ユーザーリカバリープロセス

- 管理者がユーザーの TOTP デバイス関連付けを削除
- ユーザーが次回サインイン時に新しいデバイスを登録
- セキュリティを損なうことなく復旧を実現

### 3. MFA 強制の継続

- TOTP リセット後も MFA を必須に設定したままにできる
- ユーザーは新しい TOTP デバイスを設定するまでサインイン時に促される

---

## 効果・メリット

### 運用効率の向上

- ユーザーがデバイスを紛失した場合のサポートコスト削減
- アカウント再作成プロセスの廃止
- 管理者による迅速な対応が可能

### セキュリティ維持

- MFA による強力な認証を継続
- 認証プロセスの一貫性を保持
- 不正アクセスのリスク低減

### ユーザー体験の向上

- デバイス紛失時の対応が簡単になる
- ダウンタイムの最小化
- シームレスなアカウント復旧

---

## ユースケース

### 金融・医療機関での利用

- MFA が必須の規制環境
- ユーザーがデバイスを紛失した場合の迅速な対応
- セキュリティと利便性のバランス

### SaaS サービスの運用

- ユーザーサポートにおける対応時間の短縮
- サポートチームの負担軽減
- ユーザー満足度の向上

---

## まとめ

### Amazon Cognito TOTP リセット機能の意義

- セキュリティを損なわずにユーザーをサポート
- 管理者による効率的な MFA 管理が実現
- エンタープライズ向けアプリケーションのベストプラクティス対応

### 次のステップ

1. Amazon Cognito ユーザープール設定を確認
2. TOTP MFA を有効化している場合は AdminDeleteSoftwareToken API の利用を検討
3. サポートプロセスにこの機能を組み込む

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cognito-totp-reset/
- **Amazon Cognito ドキュメント**: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa-totp.html
- **Cognito API リファレンス**: https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**