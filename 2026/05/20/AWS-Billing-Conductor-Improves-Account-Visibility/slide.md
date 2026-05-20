---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Billing Conductor の請求転送インベントリ機能で請求可視性が向上

AWS Billing Conductor Improves Account Visibility with Billing Transfer Inventory

**What's New** | 2026-05-20T16:28:00

---

## 概要

- AWS Billing Conductor コンソールは、請求転送招待を受け入れたものの、プロフォーマ請求データへのアクセスが不足しているアカウントを可視化する新機能を提供いたします。
- これにより、顧客は請求可視性のギャップを効率的に検出し、AWS User Notifications と Amazon EventBridge を通じた日次通知を活用して、設定の完了を促進することができるようになりました。

---

## 前提・背景

### 多数組織運用における課題

- 複数のAWSアカウントを管理する際に、請求データの可視性が重要
- 請求転送招待を受け入れたものの、プロフォーマ請求データにアクセスできないアカウントの把握が困難
- 請求設定の不完全な箇所を手動で検出することが非効率

### AWS Billing Conductor の進化

- 2025年11月: Billing Transfer の発表（マルチ組織請求対応）
- 2026年4月: Passthrough Pricing Plan の提供開始
- 2026年5月: インベントリ機能による可視性向上

---

## 主な機能

### 1. インベントリ表示機能

- AWS Billing Conductor コンソールで、請求転送招待の状態を一覧表示
- プロフォーマ請求データへのアクセス有無を可視化
- ギャップのあるアカウントを一目で把握

### 2. 自動通知機能

- AWS User Notifications を活用した日次サマリー
- Amazon EventBridge との統合で自動化が可能
- 設定完了を促進する機能

---

## 利用可能な通知チャネル

### マルチチャネル通知対応

- **メール**: 標準的な通知方法
- **Amazon Q Developer**: Slack、Microsoft Teams、Amazon Chime でのアラート
- **AWS Console Mobile App**: プッシュ通知
- **コンソール通知センター**: AWS コンソール内での通知

### 効果

- 複数の通知方法により、管理者の見落としを防止
- リアルタイムな対応が可能に
- 請求設定の完全性を確保

---

## 利用シナリオ

### 典型的な運用フロー

1. 親組織が複数の子アカウントに請求転送招待を送信
2. 各子アカウントが招待を受け入れ
3. AWS Billing Conductor でインベントリを確認
4. プロフォーマ請求データアクセス未設定のアカウントを検出
5. 自動通知により管理者が即座に対応
6. 請求グループ設定を完了
7. Billing and Cost Management ツール全体でコストデータにアクセス可能に

---

## まとめ

### 提供されるメリット

- **可視化**: 請求設定の状態を一元管理
- **効率化**: 手動検出作業を削減
- **自動化**: 通知機能により対応を迅速化
- **信頼性**: 請求データの完全性を確保

### 次のステップ

1. AWS Billing Conductor コンソールでインベントリ機能を確認
2. AWS User Notifications と Amazon EventBridge を設定
3. 既存のビリング転送設定をレビュー
4. 必要に応じて請求グループ設定を完了

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-billing-conductor-billing-transfer/
- **AWS Billing Conductor ドキュメント**: https://docs.aws.amazon.com/billingconductor/
- **AWS User Notifications**: https://docs.aws.amazon.com/user-notifications/
- **Amazon EventBridge**: https://docs.aws.amazon.com/eventbridge/
- **AWS Billing Transfer**: https://aws.amazon.com/about-aws/whats-new/2025/11/billing-transfer-multi-organization-billing-cost-management/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**