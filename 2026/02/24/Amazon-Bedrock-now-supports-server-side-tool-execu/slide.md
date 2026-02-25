---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock server-side tool execution
AgentCore Gateway 統合による高度なエージェント実行

**発表日: 2026年2月24日**

---

## 概要

### 主な変更点

- **AgentCore Gateway の統合**: Responses API にサーバー側のツール実行機能を統合
- **クライアント側オーケストレーション不要**: 複雑なツール呼び出しロジックをサーバー側で処理
- **複数ツール呼び出し対応**: 単一の会話ターン内で複数ツールの実行が可能
- **一般提供開始**: すべての対応リージョンで GA（General Availability）

---

## 前提・背景

### 市場の課題

- AIエージェントの複雑さが増加し、ツール管理が煩雑化
- ツール増殖（Tool Proliferation）への対応が困難
- クライアント側でのオーケストレーション構築・維持に多大なコストがかかる
- エージェントワークフローのレイテンシー増加

### Enterprise AgentCore の発展

- AgentCore Gateway による統一的なツール管理
- MCP サーバー、API Gateway、Lambda 等の異なるツール形式を統合
- 複数ツール間の依存関係管理の需要が高まる

---

## 主な機能と改善

### 1. サーバー側ツール実行

- **AgentCore Gateway ARN** をツールコネクタとして指定
- Responses API が自動的にゲートウェイから利用可能なツールを検出
- 推論中にモデルに提示し、選択されたツール呼び出しを実行

### 2. 自動ツール検出

- **MCP サーバーコネクタ**: ゲートウェイ ARN で統一的に定義
- ツール発見・モデル選択・実行・結果注入が自動化
- ツール更新時にエージェント側のコード変更不要

---

## 主な機能と改善（続き）

### 3. セキュリティと制御

- **AWS IAM 権限**: 既存のアクセス制御をそのまま活用
- **AgentCore Gateway 設定**: ツールアクセスの完全な制御を保持
- 認証・認可の透過的なハンドリング

### 4. パフォーマンス向上

- **複数ツール呼び出し**: 単一 API コール内で複数実行
- **ストリーミング結果配信**: ツール結果がリアルタイムでクライアントに返却
- **レイテンシー削減**: クライアント側オーケストレーション廃止によるオーバーヘッド削減

---

## 対応状況と利用方法

### 対応モデル

- **Responses API に対応するすべてのモデル**
  - Anthropic Claude シリーズ
  - その他のプロバイダーモデル（利用可能なもの）

### 対応リージョン

- Amazon Bedrock Responses API と AgentCore Gateway の両方が利用可能なすべての AWS リージョン

### 定義方法

```json
{
  "tools": [
    {
      "name": "my_gateway_tools",
      "type": "MCP_SERVER",
      "description": "Tools from AgentCore Gateway",
      "gatewayArn": "arn:aws:bedrock-agentcore:region:account:gateway/gateway-id"
    }
  ]
}
```

---

## 効果・メリット

### 開発効率の向上

- ✅ クライアント側のツール管理ロジックが不要
- ✅ ツール更新時のエージェント再構築が不要
- ✅ ツール共有による組織全体の再利用性向上

### 性能向上

- ✅ API コール削減によるレイテンシー低下
- ✅ リアルタイムストリーミングによる UX 改善
- ✅ サーバー側処理による信頼性向上

### 運用効率

- ✅ IAM 統合による統一的なアクセス管理
- ✅ AgentCore Observability による監視
- ✅ トークン使用量・レイテンシー・エラー率の可視化

---

## ユースケース

### 1. エンタープライズエージェント

- 複数部門にまたがるツールの統一管理
- コンプライアンス要件への対応
- 監査ログの一元化

### 2. 複雑な業務自動化

- 金融分析・リスク管理
- カスタマーサポート自動化
- 意思決定支援システム

### 3. マルチテナント SaaS

- 顧客別ツールアクセス制御
- ツール利用量の追跡と課金
- セキュアな組織間データ分離

---

## まとめ

### Amazon Bedrock AgentCore Gateway サーバー側ツール実行の位置づけ

- **次世代エージェント実行基盤**: クライアント側オーケストレーション廃止
- **エンタープライズ対応**: IAM 統合・監視・コンプライアンス対応
- **即座に利用可能**: すべての対応リージョンで GA

### 次のステップ

1. AgentCore Gateway の設定・デプロイ
2. ツール定義を MCP サーバー形式で準備
3. 既存エージェントの移行評価
4. パイロットプロジェクトの実施

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-server-side-tool-execution-agentcore-gateway/
- **Amazon Bedrock Documentation**: https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html
- **Amazon Bedrock AgentCore Gateway**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html
- **Best Practices**: https://aws.amazon.com/blogs/machine-learning/ai-agents-in-enterprises-best-practices-with-amazon-bedrock-agentcore/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
