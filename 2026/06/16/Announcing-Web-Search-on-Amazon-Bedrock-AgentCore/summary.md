# Amazon Bedrock AgentCore に Web Search 機能が一般提供開始

Announcing Web Search on Amazon Bedrock AgentCore for Agentic Web Retrieval

**カテゴリ:** What's New
**公開日:** 2026-06-16
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-web-search/)

このページでは、AWS What's Newで発表された「Announcing Web Search on Amazon Bedrock AgentCore for Agentic Web Retrieval」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore に Web Search 機能が一般提供されました。これにより、AI エージェントは AWS環境内でデータ流出ゼロの安全な状態で、最新の Web 情報にアクセスし、より正確でグラウンディングされた応答を提供できるようになります。

## このアップデートで何が変わったか

### 主な変更点

1. **Web Search 機能の一般提供開始**
   - AI エージェントが学習データを超えた最新情報にアクセス可能に
   - AWS環境内でのデータ留保を実現

2. **セキュリティ面での改善**
   - データ流出ゼロでの安全な利用
   - AWS環境内での完全な管理

3. **運用の簡素化**
   - 従来は外部の検索プロバイダーとの統合、カスタムオーケストレーション、認証・請求管理が必要でしたが、その手間が削減されます

4. **精度の向上**
   - Amazonの検索インフラストラクチャに基づいており、Alexa+、Amazon Q Business、Kiroでの実績があります
   - Webインデックスと構造化ナレッジグラフデータを組み合わせた複数ソースのグラウンディングアプローチを採用

## 詳細

### 技術仕様

- **公開形式**: Model Context Protocol（MCP）を使用した組み込みコネクタとしてAgentCore gatewayで公開
- **入力**: エージェントから自然言語クエリを送信
- **出力**: ランク付けされた結果、関連スニペット、ソースURL、タイトル、公開日
- **提供地域**: 現在、US East（N. Virginia）リージョンで一般提供

### 対象ユーザー

- **AI エージェント開発者**: 複雑な統合不要で Web Search 機能を活用可能
- **セキュリティとコンプライアンスを重視する企業**: データ流出ゼロの安全な環境
- **複数のサービス統合の手間を削減したい開発チーム**: ワンプラットフォームでの完全な管理
- **最新情報に基づいたエージェント応答が必要なユースケース**: 学習データを超えた情報アクセス

### ユースケース例

1. **最新情報を必要とするQ&Aシステム**: ニュース、市場動向、製品情報など
2. **リサーチエージェント**: 複雑な調査タスクの自動化
3. **カスタマーサポート**: 最新のナレッジベースに基づいたエージェント対応
4. **ビジネス分析**: 市場情報の自動収集と分析

## 関連情報

### 関連する最近のアップデート

1. **AWS adds agentic payment features to Amazon Bedrock AgentCore** (2026年5月)
   - AgentCore に支払い機能が追加され、エージェントが購入をサポート可能に
   - Source: SiliconANGLE

2. **Amazon Bedrock AgentCore adds new features to help developers build agents faster** (2026年4月)
   - マネージドハーネス、AgentCore CLI、コーディングアシスタント向けスキルを提供
   - 開発者がアイデアから実装可能なエージェントへの移行を高速化
   - Source: AWS What's New

## 参考リンク

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-web-search/
- **AgentCore ドキュメント**: https://docs.aws.amazon.com/bedrock-agentcore/
- **AWS News Blog**: https://aws.amazon.com/blogs/aws/
