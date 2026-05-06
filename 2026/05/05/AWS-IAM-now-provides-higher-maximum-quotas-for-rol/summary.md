# AWS IAM now provides higher maximum quotas for roles, role trust policies, instance profiles, managed policies, and identity providers

**カテゴリ:** What's New
**公開日:** 2026-05-05
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/aws-iam-increased-quotas/](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-iam-increased-quotas/)

---

## 要約

AWS IAM は、ロール、ポリシー、インスタンスプロファイル、OpenID Connect プロバイダーなど 6 つのリソースの最大クォータを大幅に引き上げました。この更新により、AWS 環境の成長に伴うスケーリング制約に対応し、より多くのワークロードと IAM リソースのカスタマイズをサポートできるようになりました。

## 詳細

### 6つのリソースのクォータ引き上げ

- **アカウントあたりのカスタマーマネージドポリシー**
  - 従来: 5,000
  - 新規: 10,000

- **アカウントあたりのインスタンスプロファイル**
  - 従来: 5,000
  - 新規: 10,000

- **ロールあたりのマネージドポリシー**
  - 従来: 20
  - 新規: 25

- **ロール信頼ポリシーの長さ**
  - 従来: 4,096 文字
  - 新規: 8,192 文字

- **アカウントあたりのロール数**
  - 従来: 5,000
  - 新規: 10,000

- **アカウントあたりの OpenID Connect プロバイダー**
  - 従来: 100
  - 新規: 700

### 背景と目的

- AWS 環境の成長に伴い顧客が直面する一般的なスケーリング制約に対応
- より高いクォータにより、IAM コントロールのカスタマイズに対する柔軟性が向上
- IAM リソースの作成が必要な追加ワークロードをサポート可能に

## クォータ引き上げの方法

### AWS 商用リージョン
- US East (N. Virginia) の Service Quotas コンソールを使用してクォータ引き上げをリクエスト

### AWS GovCloud (US) と中国リージョン
- AWS Support を通じてリクエスト

## 影響を受けるユースケース

- マルチテナント環境での複雑なロール・ポリシー管理
- 大規模エンタープライズの複雑な IAM 構成
- マイクロサービスアーキテクチャでの複数 OIDC プロバイダー統合
- IAM リソースが既に高いクォータに接近しているお客様