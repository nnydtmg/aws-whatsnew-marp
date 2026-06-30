---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS WAF が Amazon Bedrock AgentCore Gateway に対応

エージェンティックAIワークロードをウェブ攻撃から保護

**発表日: 2026年6月29日**

---

## 概要

### AWS WAFのサポート範囲拡大

- **IP ベースのアクセス制御**: エージェント通信の制御
- **レート制限ルール**: エージェントの過度な利用を防止
- **AWS マネージドルールグループ**: 既知の脅威から自動保護

### 一度の設定でガバナンス統一

- Gateway レベルで保護パックを設定
- 下流のすべてのツール、エージェント、統合に一貫して適用
- セキュリティとプラットフォームチームが効率的に運用

---

## 前提・背景

### エージェンティックAIの急速な成長

- Agentic アプリケーションがプロトタイプから本番環境へ移行
- 複雑なタスク実行により新しいセキュリティリスクが発生
- 複数ツール・エージェント統合時の一貫したセキュリティが課題

### 関連動向

- **Amazon Bedrock AgentCore Gateway**: セキュアなAIゲートウェイとして機能
- **Policy in Amazon Bedrock AgentCore**: 細粒度のアクセス制御が提供開始
- **Security の統合**: セキュリティプロバイダーとの連携が拡大

---

## 主な機能と変更内容

### AWS WAF統合のメリット

- **IP ベースアクセス制御**
  - 信頼できるIPアドレスからのみアクセスを許可
  - 不正なリクエストを事前にブロック

- **レート制限ルール**
  - エージェントの異常な動作を検知
  - DDoS 攻撃やリソース枯渇を防止

- **AWS マネージドルールグループ**
  - CVE 脆弱性やボット検出に対応
  - AWS が継続的に更新・改善

---

## 効果とメリット

### セキュリティチーム向け

- 一度の設定ですべてのエージェントを保護
- 統一されたセキュリティポリシー運用
- 監査・コンプライアンス対応の容易化

### プラットフォームチーム向け

- 開発チームの自由度を損なわずにセキュリティ確保
- ガバナンスの自動適用により運用負荷軽減
- Gateway 単位での可視化・管理が可能

### ビジネス側

- 本番環境でのアジェント稼働を安心してスケール
- コンプライアンス・規制対応の加速
- エージェンティック技術への投資リスク低減

---

## ユースケース

### 金融サービス業

- 顧客向けAIエージェント: 不正取引検出エージェント
- AWS WAF で IP 制限 + レート制限により不正アクセス防止

### エンタープライズIT

- 内部向けセルフサービスエージェント: IT ヘルプデスク自動化
- レート制限で単一ユーザーの過度な利用を制御

### SaaS プロバイダー

- 複数顧客向けエージェント API: マルチテナント環境
- マネージドルールで既知の脅威をブロック

---

## 技術仕様

### 対応リージョン

- AWS WAF と Amazon Bedrock AgentCore Gateway の両方が利用可能なすべてのリージョン

### 設定方法

- AWS WAF コンソールから、AgentCore Gateway リソースを選択
- IP セット、レート制限ルール、マネージドルールグループを適用
- ルール変更は即座に下流リソースに反映

### 料金体系

- AWS WAF: リクエスト数ベース（既存の WAF 料金を適用）
- 追加コストなし

---

## まとめ

### 要点

1. **AWS WAF が Amazon Bedrock AgentCore Gateway に対応**
   - エージェンティックAIの本番環境セキュリティを強化

2. **一度の設定で統一的な保護**
   - Gateway レベルで設定すれば全エージェントに自動適用

3. **セキュリティとプラットフォームの協業を実現**
   - ガバナンスの自動化で運用効率を向上

### 次のステップ

1. AWS WAF のルール設計: 自社のセキュリティポリシーに基づいたルール作成
2. パイロットデプロイ: 本番環境の一部で検証
3. スケーラブル運用へ: ルール更新の自動化・監視の構築

---

## 参考リソース

### 公式ドキュメント

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-waf-amazon-bedrock-agentcore/
- **Amazon Bedrock AgentCore Gateway**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html
- **AWS WAF ドキュメント**: https://docs.aws.amazon.com/waf/

### 関連情報

- **ICYMI: May 2026 @AWS Security**: https://aws.amazon.com/blogs/security/icymi-may-2026-aws-security
- **Amazon Bedrock AgentCore: Agent Knowledge**: https://awsinsider.net/articles/2026/06/25/amazon-bedrock-agentcore-adds-three-new-layers-of-agent-knowledge.aspx
- **Policy in Amazon Bedrock AgentCore**: https://aws.amazon.com/about-aws/whats-new/2026/03/policy-amazon-bedrock-agentcore-generally-available

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**