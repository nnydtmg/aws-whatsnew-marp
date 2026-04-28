---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Billing Conductor
Passthrough Pricing Plan の提供開始

**発表日: 2026年4月27日**

---

## 概要

### 3つの主要ポイント

- **新しい料金プラン**: Billing Transfer ユーザー向けの **Passthrough Pricing Plan** が利用可能に
- **統一された請求データ**: 請求グループ内のすべてのアカウントが AWS インボイス値を反映した統一データを表示
- **無料で提供**: Direct Customers および Channel Partners 向けの無料ソリューション

---

## 前提・背景

### 請求管理の課題

- 複数アカウント環境では、請求データが統一されていないことが課題
- 独自割引やカスタマイズの管理が複雑化
- 支払い処理の一元化と簡素化の必要性

### AWS Billing Conductor の進化

- Billing Transfer 機能により、請求の一元管理を実現
- 複数の料金プランオプションで柔軟な運用を提供
- 企業の多様なニーズに対応

---

## 主な機能

### 1. Passthrough Pricing Plan の特徴

- **AWS インボイス値の反映**: 請求グループ内のすべてのアカウントで統一
- **My View と Showback/Chargeback View の一致**: 同じ請求データを表示
- **シンプルな運用**: カスタマイズ不要な設定

### 2. 対応ユーザー

- **Direct Customers**: AWS と直接契約するお客様
- **Channel Partners**: AWS パートナー企業
- **前提条件**: 独自割引の保護が不要、カスタマイズ不要な環境

---

## 利用方法

### 新しい Billing Transfer 設定時

1. AWS Billing and Cost Management コンソールにログイン
2. Billing Transfer ページから新しい転送を設定
3. 料金プランで **Passthrough Pricing Plan** を選択

### 既存の請求グループへの適用

1. AWS Billing Conductor コンソールにアクセス
2. 既存の請求グループを選択
3. **Passthrough Pricing Plan** に変更

---

## 効果・メリット

### 請求管理の効率化

- **単一の請求ビュー**: 複数アカウント間で統一されたデータ表示
- **支払いの簡素化**: 一元化された請求処理
- **運用コストの削減**: カスタマイズ対応が不要

### ビジネス上のメリット

- **コスト可視化**: グループ全体の正確なコスト把握
- **チャージバック実現**: 公平かつシンプルな内部請求
- **無料で利用可能**: 追加費用なし

---

## 対応リージョン

- **現在**: US East (N. Virginia) リージョン
- **今後の拡張**: その他リージョンへの展開予定

---

## 今後のアクション

### 次のステップ

1. **環境確認**: 自社がこのプランの対象かを確認
2. **テスト実施**: US East リージョンでの試行
3. **本番環境への展開**: 既存システムの段階的移行

### 関連ドキュメント

- [AWS Billing Transfer 製品ページ](https://aws.amazon.com/aws-cost-management/aws-billing-transfer/)
- [Billing Transfer 設定ドキュメント](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/orgs_transfer_billing.html)
- [AWS Cost Management ドキュメント](https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html)

---

## まとめ

### Passthrough Pricing Plan の位置づけ

- AWS Billing Conductor の新しい選択肢
- Billing Transfer を活用した請求一元化の実現
- シンプルで無料な料金プラン

### 対象のお客様

- Direct Customers で複数アカウント管理が必要
- Channel Partners で統一請求が必要
- カスタマイズ対応が不要な環境

---

## 参考リソース

### 公式リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-billing-conductor-launches-passthrough/
- **Billing Transfer 製品ページ**: https://aws.amazon.com/aws-cost-management/aws-billing-transfer/
- **AWS Billing Conductor コンソール**: https://console.aws.amazon.com/billingconductor

### ドキュメント

- [Billing Transfer の設定](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/orgs_transfer_billing.html)
- [AWS Cost Management ドキュメント](https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**