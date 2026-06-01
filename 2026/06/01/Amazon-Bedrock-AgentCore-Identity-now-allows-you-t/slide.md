---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Identity が AWS Secrets Manager でのシークレット管理に対応

**発表日: 2026年6月1日**

---

## 概要

### 主な変更点

- Amazon Bedrock AgentCore Identity が、AWS Secrets Manager の既存シークレット ARN を直接参照できる機能を一般提供開始
- 顧客管理型シークレット（自身で作成・管理）に対応
- カスタマーマネージドキー（CMK）による暗号化が可能に
- 自動ローテーション、リソースポリシー、組織固有のガバナンスコントロールをサポート
- 14 の AWS リージョンで利用可能

---

## 前提・背景

### これまでのシークレット管理方式

- **従来のアプローチ**: サービス管理型シークレット
- AWS がシークレットを顧客の代わりに作成・管理
- ガバナンスやコンプライアンスポリシーの適用が制限的
- 組織固有の要件への対応が困難

### 市場の動向

- AI エージェントの活用拡大に伴い、セキュアな認証情報管理の重要性が増加
- エンタープライズ環境では厳格なガバナンスが必須要件
- 組織間での信頼管理とセキュリティの両立が課題

---

## 主な機能・改善点

### 1. 顧客管理型シークレット対応

- AWS Secrets Manager の既存シークレット ARN を直接参照可能
- シークレットの作成・管理・ガバナンスについて顧客が完全な所有権を保有
- AgentCore Identity の実行時動作は変わらない

### 2. エンタープライズ向けガバナンス機能

- **カスタマーマネージドキー（CMK）**: 独自の暗号化キーでシークレットを暗号化
- **リソースタグ**: タグベースのアクセス制御と分類が可能
- **自動ローテーション**: AWS Secrets Manager のローテーション機能をサポート
- **リソースポリシー**: IAM ポリシーを使用した細かいアクセス制御

---

## 効果・メリット

### セキュリティ面での利点

- シークレットの作成・分類・ガバナンスについて完全なコントロール
- 組織的なコンプライアンスポリシーの適用が容易
- 認証情報の一元管理と監査追跡の実現

### 運用面での効率化

- 既存の AWS Secrets Manager インスタンスとの統合
- セットアップの簡素化と移行コストの削減
- 厳格なガバナンス要件を持つ組織に最適

---

## 対応リージョン

- **一般提供対象**: 14 の AWS リージョン
- 主要なエンタープライズ向けリージョンに展開
- グローバル規模での AI エージェント運用が可能

---

## ユースケース

### 適用に適したシナリオ

1. **高度なコンプライアンス要件を持つ組織**
   - 金融機関、医療機関など規制業界

2. **マルチテナント環境での AI エージェント運用**
   - テナント別シークレット管理ポリシーの適用

3. **既存ガバナンスフレームワークとの統合**
   - 組織全体の認証情報管理ポリシーの統一

---

## まとめ

### AWS AgentCore Identity の進化

- 顧客ニーズに応じた柔軟なシークレット管理方式を実現
- エンタープライズ向けガバナンス機能の充実
- セキュアな AI エージェント運用の基盤を提供

### 次のステップ

1. 現在の AWS Secrets Manager 環境の確認
2. 既存のガバナンスポリシーとの整合性評価
3. パイロット環境でのテストと検証
4. 本番環境への段階的な導入

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-identity-secrets-manager/
- **Amazon Bedrock AgentCore Identity ガイド**: https://docs.aws.amazon.com/bedrock-agentcore/
- **AWS Secrets Manager ドキュメント**: https://docs.aws.amazon.com/secretsmanager/
- **Securing Amazon Bedrock AgentCore with Auth0 for AI Agents**: https://auth0.com/blog/securing-amazon-bedrock-agentcore-agents-auth0-for-ai-agents/
- **Introducing Amazon Bedrock AgentCore Identity**: https://aws.amazon.com/blogs/machine-learning/introducing-amazon-bedrock-agentcore-identity-securing-agentic-ai-at-scale/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**