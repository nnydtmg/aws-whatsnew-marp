# Amazon Bedrock AgentCore Gateway and Identity support VPC egress

**カテゴリ:** What's New
**公開日:** 2026-04-24
**元記事:** https://aws.amazon.com/about-aws/whats-new/2024/04/agentcore-gateway-identity-vpc/

---

## 要約

Amazon Bedrock AgentCore Gateway と Identity が VPC egress サポートを追加し、VPC 内のプライベートリソースや Identity Provider への安全で制御された接続が実現されました。マネージド構成とセルフマネージド構成の両方が提供され、14 の AWS リージョンで利用可能です。

## 詳細

### 主な機能追加

1. **VPC egress トラフィック管理**
   - Amazon Bedrock AgentCore Gateway と Identity が VPC egress トラフィック管理機能をサポート
   - マネージド構成とセルフマネージド構成の両方で、VPC 内のリソースとの安全で制御された通信が可能

2. **プライベートリソースへのアクセス**
   - AgentCore Gateway から EKS でホストされている MCP サーバーなどのプライベートリソースを直接呼び出せるようになりました
   - プライベート DNS 解決をサポート

3. **柔軟な構成オプション**
   - マネージド VPC egress はほとんどの顧客ユースケースに対応
   - 複雑なネットワーク構成の場合は VPC Lattice リソースをカスタマイズ可能

4. **Identity Provider との統合**
   - AgentCore Identity VPC egress は、顧客の VPC 内で実行されている Identity Provider (IdP) への接続をサポート
   - プライベート IdP から発行されたアクセストークンの検証が可能
   - アウトバウンドリクエスト認証用のトークン取得が可能

5. **広範なリージョン対応**
   - 14 の AWS リージョンで利用可能

### ユースケース

- **プライベート MCP サーバー連携**: EKS でホストされているカスタムツールとの統合
- **ハイブリッド環境**: オンプレミスまたはプライベート IdP の利用
- **規制対応**: HIPAA、SOC 2 対応が必要な環境
- **ゼロトラスト**: 分離されたネットワークアーキテクチャの実装

### 利点

1. **セキュリティの向上**
   - VPC 内のプライベートリソースへの安全で制御された接続
   - Internet を経由しないプライベート通信

2. **運用の効率化**
   - マネージド構成で複雑なネットワーク設定を簡素化
   - VPC Lattice による柔軟なカスタマイズが可能

3. **コスト効率**
   - VPC 内通信によるコスト削減
   - インフラ管理負担の軽減

### 次のステップ

1. 自社の VPC アーキテクチャに対応可能か評価
2. マネージド/セルフマネージド構成の選択
3. PoC（Proof of Concept）による検証
4. 本番環境への段階的デプロイ

---

## 参考リソース

- **AWS ドキュメント (VPC egress)**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-vpc-egress.html
- **AWS ドキュメント (VPC Lattice)**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/vpc-egress-private-endpoints.html
- **Amazon Bedrock AgentCore**: https://docs.aws.amazon.com/bedrock-agentcore/
