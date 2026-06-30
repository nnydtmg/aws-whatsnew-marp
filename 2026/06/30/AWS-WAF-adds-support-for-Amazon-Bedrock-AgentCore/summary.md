# AWS WAF が Amazon Bedrock AgentCore Gateway に対応

AWS WAF adds support for Amazon Bedrock AgentCore Gateway

**カテゴリ:** What's New
**公開日:** 2026-06-29
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-waf-amazon-bedrock-agentcore/)

---

## 要約

AWS WAF が Amazon Bedrock AgentCore Gateway に対応しました。IP ベースのアクセス制御やレート制限などの保護機能を Gateway レベルで一度設定すれば、すべての下流リソースに一貫して適用できるようになりました。これにより、エンタープライズはエージェンティックアプリケーションの本番環境運用において、セキュリティとプラットフォームチームが統一されたウェブ保護を効率的に実装できるようになります。

---

## このアップデートで何が変わったか

### AWS WAF のサポート範囲拡大

- IP ベースのアクセス制御、レート制限ルール、AWS マネージドルールグループなどの保護機能を AgentCore Gateway レベルで適用可能に
- Gateway レベルで一度保護パックを設定すると、その下流のすべてのツール、エージェント、統合に一貫して適用される

### 提供リージョン

- AWS WAF と Amazon Bedrock AgentCore Gateway の両方が利用可能なすべての AWS リージョン

---

## 詳細情報

### AWS WAFがAmazon Bedrock AgentCore Gatewayに対応

- エージェンティックAIワークロードをウェブ攻撃や悪用から保護できるようになりました
- 複雑なマルチエージェント環境でのセキュリティ確保が容易になります

### 利用可能な保護機能

1. **IP ベースのアクセス制御**
   - 信頼できるIPアドレスからのアクセスのみを許可
   - 不正なリクエストを事前にブロック

2. **レート制限ルール**
   - エージェントの異常な動作を検知
   - DDoS 攻撃やリソース枯渇を防止

3. **AWS マネージドルールグループ**
   - CVE 脆弱性やボット検出に対応
   - AWS が継続的に更新・改善

### ガバナンスの一元化

- Gateway レベルで設定を一度実施すればすべての下流リソースに自動適用
- セキュリティチームとプラットフォームチームの連携を効率化
- 監査・コンプライアンス対応の容易化

### エンタープライズワークフローへの対応

- エージェンティックアプリケーションをプロトタイプから本番環境に移行する際に、セキュリティチームとプラットフォームチームが一貫性のあるカスタマイズ可能なウェブ保護を適用可能に
- 開発の自由度を損なわずにセキュリティガバナンスを自動化

---

## ユースケース

### 金融サービス
- 不正取引検出エージェント: AWS WAF で IP 制限 + レート制限により不正アクセス防止

### エンタープライズIT
- IT ヘルプデスク自動化: レート制限で単一ユーザーの過度な利用を制御

### SaaS プロバイダー
- マルチテナント環境: マネージドルールで既知の脅威をブロック

---

## 関連する最近の動向

- **Amazon Bedrock AgentCore Gateway**: セキュアなAIゲートウェイとして機能
- **Policy in Amazon Bedrock AgentCore**: 細粒度のアクセス制御が提供開始
- **Security の統合**: Check Point、Zscaler、Rubrik などセキュリティプロバイダーとの連携が拡大

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-waf-amazon-bedrock-agentcore/
- **Amazon Bedrock AgentCore Gateway**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html
- **AWS WAF ドキュメント**: https://docs.aws.amazon.com/waf/
- **ICYMI: May 2026 @AWS Security**: https://aws.amazon.com/blogs/security/icymi-may-2026-aws-security
- **Amazon Bedrock AgentCore 関連情報**: https://awsinsider.net/articles/2026/06/25/amazon-bedrock-agentcore-adds-three-new-layers-of-agent-knowledge.aspx