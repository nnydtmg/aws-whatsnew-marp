---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM now provides higher maximum quotas for roles, role trust policies, instance profiles, managed policies, and identity providers

**What's New** | 2026-05-05

---

## 概要

- AWS IAM は、ロール、ポリシー、インスタンスプロファイル、OpenID Connect プロバイダーなど 6 つのリソースの最大クォータを大幅に引き上げました。
- この更新により、AWS 環境の成長に伴うスケーリング制約に対応し、より多くのワークロードと IAM リソースのカスタマイズをサポートできるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **IAM and AWS STS quotas - AWS Identity and Access Management**
  [詳細](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html)

- **Quotas and limits in IAM Identity Center**
  [詳細](https://docs.aws.amazon.com/singlesignon/latest/userguide/limits.html)

---

## 変更内容・新機能

- AWS IAM は、ロール、ロール信頼ポリシー、インスタンスプロファイル、マネージドポリシー、および ID プロバイダーの 6 つのリソースについて、最大クォータを引き上げました。
- アカウントあたりのカスタマーマネージドポリシーが 5,000 から 10,000 に増加しました。
- アカウントあたりのインスタンスプロファイルが 5,000 から 10,000 に増加しました。
- ロールあたりのマネージドポリシーが 20 から 25 に増加しました。
- ロール信頼ポリシーの長さが 4,096 文字から 8,192 文字に増加しました。
- アカウントあたりのロール数が 5,000 から 10,000 に増加しました。
- アカウントあたりの OpenID Connect プロバイダーが 100 から 700 に増加しました。

---

## 効果・メリット

### スケーリング制約への対応

- AWS 環境の成長に伴い顧客が直面する一般的なスケーリング制約に対応
- より多くのワークロードをサポート可能

### 柔軟性の向上

- IAM コントロールのカスタマイズに対する柔軟性が向上
- IAM リソースの作成が必要な追加ワークロードに対応
- ポリシー管理のスケーラビリティ向上

---

## ユースケース

### マルチテナント環境
- 複数のテナント向けロール管理
- テナントごとのカスタムポリシー

### 大規模エンタープライズ
- 複雑な組織構造のIAM管理
- 部門別・プロジェクト別のロール設定

### マイクロサービスアーキテクチャ
- サービスごとのロール・ポリシー
- OIDC プロバイダーの複数統合

---

## まとめ

### 主要なポイント

- AWS IAM の6つのリソースについて最大クォータを大幅引き上げ
- スケーリング制約への対応で柔軟性と拡張性が向上
- 大規模環境・複雑な IAM 構成をサポート

### 次のステップ

1. 現在の IAM リソース使用状況を確認
2. Service Quotas コンソールで新しいクォータを確認
3. 必要に応じてクォータ引き上げをリクエスト

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-iam-increased-quotas/)

### 関連情報

- [IAM and AWS STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html)
- [Quotas and limits in IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/limits.html)
- [IAM User Guide](https://docs.aws.amazon.com/iam/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**