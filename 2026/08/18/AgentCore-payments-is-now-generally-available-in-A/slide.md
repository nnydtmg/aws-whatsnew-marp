---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore で支払い機能が一般公開

AgentCore payments is now generally available in Amazon Bedrock AgentCore

**発表日: 2026年8月18日**

---

## 概要

- AgentCore payments は、AI エージェントが自律的に有料 API やコンテンツに対して支払いを行うことを可能にする Amazon Bedrock AgentCore の新機能
- **Coinbase** および **Stripe** との統合でマイクロトランザクションに対応
- 支払い制限の設定により安全な運用を実現
- **AgentCore Observability** によるエンドツーエンドの可視性を提供

---

## 前提・背景

### 市場背景

- AI エージェントが外部 API やコンテンツにアクセスするニーズが増加
- エージェントが自律的に支払いを行う仕組みが求められている
- エンタープライズ規模でのトランザクション処理の信頼性が重要

### 関連する最近の動向

- **AWS May 2026** にて AgentCore Payments プレビュー版を発表
- Coinbase と Stripe による統合パートナーシップを構築
- x402 プロトコルと Machine Payment Protocol（MPP）の標準化に参加

---

## 主な機能・変更内容

### 1. 自律的な支払い機能

- AI エージェントが **有料 API**、**MCP**、**コンテンツ** を自律的に発見・アクセス・支払い
- エージェント間での支払いにも対応

### 2. ウォレット統合

- **Coinbase CDP ウォレット** との統合
- **Stripe Privy ウォレット** との統合
- マイクロトランザクション対応

### 3. 支払いオーケストレーション

- プロトコル全体での支払い管理
- インフラストラクチャレイヤーで設定可能な **支払い制限**
- セッションレベルでの支出上限設定

---

## 技術仕様

### サポートプロトコル

- **Machine Payment Protocol（MPP）**
- **x402 プロトコル** の「upto」スキーム

### 利用開始方法

- **Claude Code** からの開始
- **Kiro** からの開始
- **Codex** などのコーディングアシスタントスキルから開始
- **AgentCore CLI** を使用
- **AWS Management Console** から開始

### Coinbase プロビジョニング

- **AgentCore コンソール** 内での迅速なプロビジョニング
- 認証情報の簡単登録

---

## 可視性と管理

### AgentCore Observability

- トランザクション全体の **エンドツーエンド可視性** を提供
- 支払い履歴の追跡と監査が容易
- エージェントの支出状況をリアルタイムで確認

### セキュリティとガードレール

- インフラストラクチャレイヤーでの支払い制限実装
- セッション単位での支出上限設定
- コンプライアンス要件に対応可能な設計

---

## ユースケース

### 研究エージェント

- リアルタイム市場データへの支払いアクセス
- 金融分析機能の強化

### コーディングエージェント

- タスク実行中に有料 API を動的に呼び出し
- コード品質向上に必要なサービスへのアクセス

### エンタープライズワークフロー

- 本番環境でのトランザクション処理
- 金融分析
- サイバーセキュリティ
- コンピュータ操作タスク

---

## まとめ

### 主なメリット

- 🤖 **自律性の向上**: エージェントが支払いを含む完全なワークフローを実行
- 💳 **決済管理の簡素化**: Coinbase・Stripe との統合で複雑な支払い処理を自動化
- 🔒 **セキュリティの確保**: 支払い制限とガードレールによる安全な運用
- 📊 **可視性の確保**: AgentCore Observability で全トランザクションを追跡

### 対象組織

- エンタープライズ規模で本番環境にトランザクション処理を行うエージェントをデプロイする組織
- セキュリティ、ガードレール、可観測性を必要とする企業

### 次のステップ

1. 自社のユースケースに合わせた評価開始
2. パイロットプロジェクトの実施
3. 本番環境への段階的展開

---

## 参考リソース

### 公式ドキュメント

- [AWS What's New: AgentCore payments GA](https://aws.amazon.com/about-aws/whats-new/2026/08/bedrock-agentcore-payments-ga/)
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/)
- [AgentCore 開発者ガイド](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/)

### 関連記事

- [AWS May 2026: AgentCore Payments, Kiro, Q Developer](https://www.usage.ai/blogs/aws/monthly-updates/aws-may-2026)
- [AWS Weekly Roundup: Amazon Bedrock AgentCore payments](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-amazon-bedrock-agentcore-payments-agent-toolkit-for-aws-and-more-may-11-2026/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**