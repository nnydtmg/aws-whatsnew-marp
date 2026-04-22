# Amazon EC2 announces Managed resource visibility settings

**カテゴリ:** What's New  
**公開日:** 2026-04-22  
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/ec2-managed-resource-visibility/](https://aws.amazon.com/about-aws/whats-new/2026/04/ec2-managed-resource-visibility/)

---

## 要約

Amazon EC2が新しい管理リソースの可視性設定機能を発表しました。Amazon EKS、Amazon ECS、AWS Lambda、Amazon Workspacesなどのサービスによって管理されるリソースをコンソールおよびAPI応答で表示/非表示に制御できます。

新しい管理リソースはデフォルトで非表示に設定され、共有責任モデルとの整合性が向上します。この機能により、ユーザーは自社が責任を持つリソースに焦点を当てることができ、リソース管理の効率性が大幅に改善されます。

---

## 主な機能

### 1. 管理リソース可視性の制御
- Amazon EKS、Amazon ECS、AWS Lambda、Amazon Workspacesなどのサービスプロバイダーによって管理されるインスタンスが対象
- Amazon EC2コンソールビューに表示/非表示を設定可能

### 2. API応答の制御
- describe-instances APIレスポンスで管理リソースの表示/非表示を制御
- デフォルトでは新しい管理リソースが非表示

### 3. 設定方法
- Amazon EC2コンソールから簡単に設定
- AWS CLIコマンドで自動化可能

---

## 背景と課題

### これまでの問題
- 管理リソースがデフォルトで自己管理リソースと一緒にAPI応答およびリソースコンソールに表示されていた
- AWS責任下のリソースと顧客責任のリソースが視覚的に区別されていない
- 運用チームが対応すべきリソースを特定しにくい

### ビジネス上のメリット
- **運用効率の向上**: 自社が管理すべきリソースに焦点を集中
- **可視性の改善**: 共有責任モデルに基づいた明確なリソース分類
- **コスト管理**: リソース一覧の管理コストを削減
- **コンプライアンス**: 監査要件への対応が容易に

---

## 対応サービス一覧

- **Amazon EKS**: Elastic Kubernetes Service
- **Amazon ECS**: Elastic Container Service
- **AWS Lambda**: サーバーレスコンピューティング
- **Amazon Workspaces**: マネージドデスクトップサービス

---

## ユースケース

### 1. マルチテナント環境
サービスプロバイダーが管理するリソースを意図的に非表示にして、顧客のリソースビューをシンプルに保つ

### 2. コンプライアンス・監査
AWS責任のリソースと顧客責任のリソースを明確に分離し、監査ログやコスト分析の精度を向上

### 3. 開発・運用チームの効率化
不要なリソース情報をフィルタリングし、管理対象リソースの把握を容易に

---

## 推奨される導入ステップ

1. 現在のAmazon EC2リソース構成の確認
2. 組織のニーズに応じた可視性設定の検討
3. テスト環境でのパイロット実施
4. 本番環境での段階的な導入

---

## 参考リンク

- [AWS What's New - Amazon EC2](https://aws.amazon.com/about-aws/whats-new/)
- [Amazon EC2ドキュメント](https://docs.aws.amazon.com/AWSEC2/)
- [AWS共有責任モデル](https://aws.amazon.com/compliance/shared-responsibility-model/)