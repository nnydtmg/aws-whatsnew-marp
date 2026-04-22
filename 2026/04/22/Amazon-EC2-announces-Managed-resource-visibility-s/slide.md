---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EC2が管理リソースの可視性設定を発表

Managed resource visibility settings

**発表日: 2026年4月22日**

---

## 概要

### 何が変わったか

- **管理リソースの可視性制御**: Amazon EKS、Amazon ECS、AWS Lambda、Amazon Workspacesなどのサービスによって管理されるリソースをコンソールおよびAPI応答で表示/非表示に制御可能
- **デフォルト動作の変更**: 新しい管理リソースはデフォルトで非表示に設定
- **共有責任モデルとの整合性向上**: AWS責任下のリソースが明確に区分化
- **リソース管理効率の改善**: ユーザーが管理するリソースに焦点を当てられます

---

## 前提・背景

### これまでの課題

- 管理リソースと自己管理リソースが区別なく表示されていた
- API応答およびAmazon EC2コンソールに両方のリソースが混在
- AWS責任下のリソースと顧客責任のリソースが視覚的に区分化されていない

### 関連する最近の動向

- Amazon EC2のリソース表示機能の強化（2026年2月: Related resourcesタブの一般提供）
- EC2管理インスタンスの拡張機能のサポート
- より細かいリソース管理制御の需要

---

## 主な機能

### 1. 管理リソース可視性の制御

- **対象サービス**:
  - Amazon EKS
  - Amazon ECS
  - AWS Lambda
  - Amazon Workspaces
- リソースがコンソールビューに表示されるかどうかを制御

### 2. API応答の制御

- **describe-instances APIレスポンス**: 管理リソースの表示/非表示を選択可能
- 自動化スクリプトやアプリケーションでの一貫性を確保

### 3. 設定方法

- Amazon EC2コンソールから簡単に設定
- AWS CLIコマンドで自動化可能

---

## 効果・メリット

### ビジネスメリット

- **管理効率の向上**: 自社が管理すべきリソースに焦点を集中
- **可視性の改善**: AWS責任下のリソースと顧客責任のリソースが明確に区分
- **運用コスト削減**: リソース一覧の整理に要するコストを削減

### 技術的メリット

- **共有責任モデルとの整合性**: AWS責任の明確化
- **スクリプト互換性**: API応答の予測可能性向上
- **インベントリ管理**: より正確なリソースカウントが可能

---

## ユースケース

### 企業内での活用

1. **マルチテナント環境**
   - サービスプロバイダーが管理するリソースを意図的に非表示にして顧客に影響を最小化

2. **コンプライアンス要件への対応**
   - AWS責任のリソースと顧客責任のリソースを明確に分離
   - 監査ログやコスト分析の精度向上

3. **開発・運用チームの効率化**
   - 不要なリソース情報をフィルタリング
   - 管理対象リソースの把握が容易に

---

## まとめ

### Amazon EC2管理リソース可視性設定のポイント

- Amazon EKS、ECS、Lambda、Workspacesなど主要サービスのリソースをコントロール可能
- デフォルト設定で管理リソースが非表示になり、運用効率を向上
- 共有責任モデルに基づいた明確なリソース分類を実現
- コンソール/CLI双方での設定が可能で、自動化に対応

### 推奨される次のステップ

1. 現在のAmazon EC2リソースの構成を確認
2. 組織のニーズに応じて可視性設定を検討
3. パイロットプロジェクトで機能を検証
4. 本番環境での段階的な導入

---

## 参考リソース

### 元記事

- [Amazon EC2 announces Managed resource visibility settings](https://aws.amazon.com/about-aws/whats-new/2026/04/ec2-managed-resource-visibility/)

### 関連情報

- [Amazon EC2 and VPC now display related resources](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-console-related-resources-generally-available/)
- [Manage your Amazon EC2 resources - Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resources.html)
- [Amazon EC2 managed instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-ec2-managed-instances.html)

---

**ご質問やご不明な点は、AWSサポートまでお問い合わせください**