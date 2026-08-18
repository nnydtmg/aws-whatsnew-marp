# Amazon Bedrock AgentCore で支払い機能が一般公開

AgentCore payments is now generally available in Amazon Bedrock AgentCore

**カテゴリ:** What's New
**公開日:** 2026-08-18
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/bedrock-agentcore-payments-ga/)

このページでは、AWS What's Newで発表された「AgentCore payments is now generally available in Amazon Bedrock AgentCore」の内容を日本語で要約しています。

---

## 要約

AgentCore payments は、AI エージェントが自律的に有料 API やコンテンツに対して支払いを行うことを可能にする Amazon Bedrock AgentCore の新機能です。Coinbase や Stripe との統合、支払い制限の設定、エンドツーエンドの可視性を提供し、エンタープライズ規模での本番環境トランザクション処理に対応しています。

---

## このアップデートで何が変わったか

### 新機能: AgentCore Payments GA

1. **一般提供(GA)開始**
   - AgentCore payments が一般提供へ移行
   - プレビュー版から本番対応へ

2. **自律的支払い機能**
   - AI エージェントが自動的に有料 API にアクセス・支払い
   - MCP（Model Context Protocol）サーバーへの支払いに対応
   - Web コンテンツへの支払いに対応
   - エージェント間での支払いに対応

3. **ウォレット統合**
   - Coinbase CDP ウォレットとの統合
   - Stripe Privy ウォレットとの統合
   - マイクロトランザクションへの対応

4. **支払い管理機能**
   - プロトコル全体での支払いオーケストレーション
   - インフラストラクチャレイヤーでの支払い制限設定
   - セッションレベルでの支出上限設定

5. **可視性の強化**
   - AgentCore Observability によるエンドツーエンド可視性
   - トランザクション履歴の追跡・監査

6. **プロトコル対応**
   - Machine Payment Protocol（MPP）をサポート
   - x402 プロトコルの「upto」スキームをサポート

---

## 主な特徴

### 技術面

- **自動化された支払い処理**: エージェントが独立して支払い判断と実行
- **マルチウォレット対応**: Coinbase と Stripe の両ウォレットに対応
- **柔軟な制限設定**: 支出上限をセッション単位で細粒度制御
- **業界標準プロトコル**: MPP と x402 で相互運用性を確保

### 運用面

- **簡単な開始方法**: AgentCore コンソールからのワンクリック設定
- **完全な可視性**: すべてのトランザクションを一元管理
- **セキュリティ**: ガードレール機能による安全な運用
- **エンタープライズ対応**: コンプライアンス要件に対応可能

---

## 利用開始方法

### 開始方法

1. **Claude Code** から開始
2. **Kiro** から開始
3. **Codex** などのコーディングアシスタントスキルから開始
4. **AgentCore CLI** を使用
5. **AWS Management Console** から開始

### Coinbase との連携

- **AgentCore コンソール** でワンクリックプロビジョニング
- 認証情報をすばやく設定可能

---

## ユースケース

### 研究・分析エージェント

- リアルタイム市場データへの自動支払いアクセス
- 金融分析用データの動的取得
- 複数データソースの統合分析

### コーディングエージェント

- タスク実行中の有料 API 呼び出し
- 外部コード解析サービスへのアクセス
- パッケージ・ライブラリのダウンロード支払い

### エンタープライズワークフロー

- 金融取引処理
- サイバーセキュリティ分析
- コンピュータ操作タスク
- カスタマーサービス自動化

---

## 適用対象

### 対象組織

- エンタープライズ規模での本番環境運用
- トランザクション処理を自動化する必要がある組織
- セキュリティとコンプライアンスを重視する企業
- 可観測性が必須の業界（金融・医療など）

---

## まとめ

### 主なメリット

1. **自動化**: 支払い処理全体をエージェントが自動実行
2. **信頼性**: 支払い制限とガードレールで安全な運用
3. **可視性**: すべてのトランザクションを追跡可能
4. **スケーラビリティ**: エンタープライズ規模での展開対応
5. **統合性**: 業界標準プロトコルで相互運用性確保

### 次のステップ

1. 自社ユースケースの検討
2. パイロットプロジェクトの実施
3. 本番環境への段階的展開
4. 監視・運用体制の構築

---

## 参考リンク

- [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/bedrock-agentcore-payments-ga/)
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/)
- [AgentCore 開発者ガイド](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/)
- [AWS May 2026: AgentCore Payments](https://www.usage.ai/blogs/aws/monthly-updates/aws-may-2026)
