---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Gateway と Identity が VPC egress をサポート

VPC 内のプライベートリソースと Identity Provider への安全な接続

**発表日: 2026年4月24日**

---

## 概要

### 3つの主要な変更

- **VPC egress トラフィック管理**: AgentCore Gateway と Identity が VPC egress 機能をサポート
- **2つの構成方式**: マネージド構成とセルフマネージド構成の両方で実装可能
- **広範な対応**: 14の AWS リージョンで利用可能

---

## 前提・背景

### エンタープライズAIの課題

- AIエージェントからプライベートリソースへのセキュアなアクセスが必要
- VPC内のカスタム Identity Provider との統合要件
- ネットワークセグメンテーションを維持しながら、機能を拡張する必要性

### 市場の動向

- AgentCore の一般提供により、エンタープライズ向けAIエージェントの需要が急増
- VPC内のプライベートリソース（MCP サーバーなど）連携の需要
- ハイブリッドおよびオンプレミス環境での Identity Provider 統合

---

## 主な機能

### AgentCore Gateway VPC egress

- **プライベートリソースへのアクセス**: EKS でホストされている MCP サーバーなどを直接呼び出し可能
- **マネージド VPC egress**: ほとんどの顧客ユースケースに対応
- **カスタマイズ可能**: 複雑なネットワーク構成では VPC Lattice リソースをカスタマイズ
- **プライベート DNS 解決**: マネージド VPC egress リソースのプライベート DNS 解決に対応

### AgentCore Identity VPC egress

- **プライベート Identity Provider 対応**: 顧客 VPC 内で実行されている IdP への接続
- **トークン検証**: プライベート IdP から発行されたアクセストークンの検証
- **認証フロー**: アウトバウンドリクエスト認証用のトークン取得が可能

---

## 機能の詳細

### VPC内通信フロー

| 項目 | 説明 |
|------|------|
| **マネージド構成** | ほとんどのユースケースで推奨、AWS が管理 |
| **セルフマネージド構成** | 特殊なネットワーク要件に対応可能 |
| **VPC Lattice 統合** | 複雑な構成で柔軟なカスタマイズが可能 |
| **セキュリティ** | VPC 内トラフィックの完全な分離と制御 |

---

## 効果・メリット

### セキュリティの向上

- VPC 内のプライベートリソースへの安全で制御された接続
- Internet を経由しないプライベート通信パス
- Identity Provider との統合で認証・認可の一元管理

### 運用の効率化

- マネージド構成で複雑なネットワーク設定を簡素化
- VPC Lattice による柔軟なカスタマイズが可能
- 既存のネットワークトポロジーを変更せずに統合

### コスト効率

- VPC 内通信によるコスト削減
- マネージド構成でインフラ管理負担の軽減

---

## ユースケース

### 1. プライベート MCP サーバー連携

- EKS でホストされているカスタム MCP サーバーへのアクセス
- 企業内のプロプライエタリなツール統合

### 2. ハイブリッドセキュリティ環境

- オンプレミスまたはプライベート Identity Provider の利用
- ゼロトラスト アーキテクチャの実装

### 3. 規制対応ワークフロー

- HIPAA、SOC 2 対応が必要な環境
- データレジデンシー要件がある場合

---

## 利用可能なリージョン

### デプロイ対象リージョン（14地域）

- **北米**: us-east-1, us-west-2
- **ヨーロッパ**: eu-central-1, eu-west-1
- **アジア太平洋**: ap-southeast-1, ap-northeast-1
- その他 8 リージョン

**詳細**: AWS ドキュメントで最新の対応リージョンを確認してください

---

## まとめ

### Amazon Bedrock AgentCore の進化

- VPC egress サポートでエンタープライズセキュリティ要件に対応
- マネージド・セルフマネージド構成の選択肢で柔軟性を提供
- プライベートリソースと Identity Provider との統合が実現

### 次のステップ

1. 自社の VPC アーキテクチャに対応可能か評価
2. マネージド/セルフマネージド構成の選択
3. PoC（Proof of Concept）による検証
4. 本番環境への段階的デプロイ

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2024/04/agentcore-gateway-identity-vpc/
- **AWS ドキュメント (VPC egress)**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-vpc-egress.html
- **AWS ドキュメント (VPC Lattice)**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/vpc-egress-private-endpoints.html
- **Amazon Bedrock AgentCore**: https://docs.aws.amazon.com/bedrock-agentcore/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
