---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore に Web Search 機能が一般提供開始

Announcing Web Search on Amazon Bedrock AgentCore for Agentic Web Retrieval

**What's New** | 2026-06-16

---

## 概要

- Amazon Bedrock AgentCore に Web Search 機能が一般提供されました。
- これにより、AI エージェントは AWS環境内でデータ流出ゼロの安全な状態で、最新の Web 情報にアクセスし、より正確でグラウンディングされた応答を提供できるようになります。

---

## 前提・背景

### これまでの課題

- AI エージェントが学習データを超えた最新情報にアクセスする必要性の増加
- 外部検索プロバイダーとの統合に伴う複雑な管理・認証・請求処理
- データセキュリティとコンプライアンスへの懸念
- 複数サービス連携による運用負荷の増加

### Amazon側の背景

Amazonの検索インフラストラクチャに基づき、Alexa+、Amazon Q Business、Kiroでの実績があります。

---

## 変更内容・新機能

### Web Search の主な特徴

- **データ留保**: AWS環境内でデータ流出ゼロで安全に利用可能
- **複数ソースグラウンディング**: Webインデックスと構造化ナレッジグラフデータを組み合わせた情報取得
- **高精度な応答**: エンティティデータと検証済みの事実へのアクセス
- **標準プロトコル統合**: Model Context Protocol（MCP）を使用

### 技術仕様

- **公開方法**: AgentCore gateway内の組み込みコネクタ
- **入力**: 自然言語クエリ
- **出力**: ランク付けされた結果、関連スニペット、ソースURL、タイトル、公開日
- **提供地域**: US East（N. Virginia）

---

## 効果・メリット

### 開発者向けのメリット

- **統合の簡素化**: 外部検索プロバイダー統合の不要化
- **運用負荷の削減**: 認証・請求管理を一元化
- **開発時間の短縮**: 既製のWeb Search機能をすぐに利用可能

### エンタープライズ向けのメリット

- **セキュリティとコンプライアンス**: AWS環境内でのデータ留保
- **応答精度の向上**: 最新かつグラウンディングされた応答
- **スケーラビリティ**: Amazon の実績あるインフラストラクチャ

---

## ユースケース

### 適用可能なシナリオ

- **最新情報を必要とするQ&Aシステム**: ニュース、市場動向、製品情報など
- **リサーチエージェント**: 複雑な調査タスクの自動化
- **カスタマーサポート**: 最新のナレッジベースに基づいたエージェント対応
- **ビジネス分析**: 市場情報の自動収集と分析

---

## まとめ

### Amazon Bedrock AgentCore Web Search の位置づけ

- エンタープライズAIエージェントの実用化を加速させる機能
- セキュリティとコンプライアンスを両立させた標準ソリューション
- 統合・運用の複雑さを大幅に軽減

### 次のステップ

1. 自社のユースケースに合わせた検証開始
2. パイロットプロジェクトの実施
3. US East（N. Virginia）リージョンでの本番環境検証
4. 機能搭載エージェントの段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-web-search/
- **AgentCore ドキュメント**: https://docs.aws.amazon.com/bedrock-agentcore/
- **AWS News Blog**: https://aws.amazon.com/blogs/aws/

### 関連情報

- [AWS adds agentic payment features to Amazon Bedrock AgentCore](https://siliconangle.com/2026/05/07/aws-adds-agentic-payment-features-amazon-bedrock-agentcore)
- [Amazon Bedrock AgentCore adds new features to help developers build agents faster](https://aws.amazon.com/about-aws/whats-new/2026/04/agentcore-new-features-to-build-agents-faster)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**