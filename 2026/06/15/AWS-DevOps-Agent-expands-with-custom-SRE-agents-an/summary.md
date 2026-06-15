# AWS DevOps Agent がカスタムSREエージェントとMCP/A2Aプロトコルで拡張

AWS DevOps Agent expands with custom SRE agents and MCP/A2A protocols

**カテゴリ:** What's New  
**公開日:** 2026-06-15  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-devops-agent-custom-agents/)

このページでは、AWS What's Newで発表された「AWS DevOps Agent expands with custom SRE agents and MCP/A2A protocols」の内容を日本語で要約しています。

---

## 要約

AWS DevOps Agentは、カスタムSREエージェント、ヘッドレスアクセス機能、およびサブエージェント統合により、SREワークフローの自動化と既存ツールとの統合が可能になりました。このアップデートは、DevOpsチーム、SRE専門家、および開発者にとって、生産環境の監視と問題解決の効率を大幅に向上させるものです。

---

## このアップデートで何が変わったか

### 1. カスタムSREエージェント（Custom SRE Agents）

- **機能**: Agent Spaces 内でエージェントを作成し、スケジュール設定して定期実行
- **例用例**:
  - 日次データベースヘルスレポートの自動生成
  - 過去24時間のログレビューと異常フラグ
  - スロークエリ検出とパラメータチューニング提案

### 2. ヘッドレスアクセス（Headless Access）

- **対応プロトコル**:
  - **MCP (Model Context Protocol)**: ツール接続用プロトコル
  - **A2A (Agent-to-Agent)**: エージェント間通信用プロトコル
- **利用シーン**:
  - Kiro、Claude などコーディングアシスタントから DevOps Agent を呼び出し
  - IDE を離れることなく本番環境の健全性確認と問題調査
- **メリット**: 既に使用しているツールとのシームレス統合

### 3. サブエージェント統合（Bring-Your-Own Sub-Agents）

- **対応フレームワーク**:
  - Amazon Bedrock で構築したエージェント
  - サードパーティフレームワークで構築したエージェント
- **接続方法**: A2A プロトコル経由
- **効果**: DevOps Agent の機能を自由にカスタマイズ・拡張可能

### 4. チャット・UI の強化

- **チャット機能**: より自然な対話体験
- **ルールベース自動化**: 顧客定義ルールに基づくインシデントスキップ
- **知識管理**: メモリと Git 管理スキルで強化された知識ベース
- **品質追跡**: 人間によるラベリングとカスタマー作成ダッシュボード

### 5. リージョン拡大

- 5つの新しいリージョンで AWS DevOps Agent が利用可能に

---

## 対象ユーザー

### DevOps チーム

- 定期的な SRE ワークフローを自動化したい
- 複数のツール・エージェントを統合したい
- 本番環境の監視を効率化したい

### SRE エンジニア

- インシデント対応を自動化・加速したい
- カスタムルールに基づく自動フロー制御が必要
- 他のエージェント・ツールとの連携を拡大したい

### 開発者

- IDE から本番環境を直接確認・調査したい（Kiro パワー）
- Claude、Kiro などから DevOps Agent を呼び出したい
- コーディング中に運用タスクを中断したくない

---

## 技術詳細

### プロトコル説明

#### MCP (Model Context Protocol)

- **目的**: エージェント ↔ ツール の通信
- **特徴**: 既存オブザーバビリティツール、カスタム監視システム、運用データへのアクセス提供
- **認証方式**: OAuth 2.0、API キー/トークン、AWS Signature Version 4 (SigV4)
- **用途例**: Splunk、DataDog、カスタムダッシュボードとの連携

#### A2A (Agent-to-Agent)

- **目的**: エージェント ↔ エージェント の通信
- **特徴**: 企業グレードのセキュリティ、エージェント発見、タスクベース権限管理
- **トランスポート**: JSON-RPC 2.0、gRPC、REST
- **非同期サポート**: Server-Sent Events (SSE)、Webhook ベースの通知
- **用途例**: Kiro との連携、カスタムエージェントの統合

---

## 活用シーン

### シーン1: 日次運用監視

```
【実行フロー】
1. スケジュール実行: 毎日 AM 6:00
2. カスタムSREエージェント起動
3. DB ヘルスチェック → レポート生成
4. ログ分析 → 異常検知
5. Slack 通知
6. ダッシュボード更新
```

### シーン2: IDE 内での本番確認

```
【実行フロー】
1. 開発者: VS Code 内で Kiro パワー実行
2. Kiro → MCP/A2A プロトコル → DevOps Agent
3. 本番環境の健全性確認
4. 問題検出 → IDE 内に結果表示
5. 必要に応じて自動修復トリガー
```

### シーン3: マルチエージェント协働

```
【実行フロー】
1. DevOps Agent 受信: インシデント通知
2. A2A 経由でサブエージェント呼び出し
   - 分析エージェント: ログ・メトリクス解析
   - 修復エージェント: 自動回復実行
3. 結果集約 → チーム通知
```

---

## メリット・効果

### 効率化

- **手作業削減**: 定期的 SRE ワークフローの完全自動化
- **時間短縮**: IDE を離れることなく本番確認
- **インシデント対応**: 自動検知から報告まで迅速化

### 柔軟性

- **カスタマイズ**: チームのニーズに合わせたエージェント作成
- **相互運用性**: MCP/A2A で既存ツール・エージェントと統合
- **スケーラビリティ**: サブエージェント連携で機能拡張

### 運用性

- **統一管理**: 複数エージェントを一元管理
- **可視化**: カスタムダッシュボードで品質追跡
- **信頼性**: 人間によるラベリングで精度向上

---

## ベストプラクティス

### 導入前チェックリスト

- [ ] 自社の SRE ワークフロー（定期タスク）を整理
- [ ] 既に使用しているツール・エージェントを把握
- [ ] セキュリティ要件を確認（認証、暗号化、監査ログ）
- [ ] 運用ポリシー（エスカレーション、承認フロー）を定義

### 実装ステップ

1. **パイロット**: 1～2 つの SRE ワークフローで試運用
2. **ルール整備**: インシデントスキップ、自動修復の条件を定義
3. **本番展開**: 段階的なロールアウト
4. **運用・最適化**: ダッシュボードで品質監視、継続改善

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-devops-agent-custom-agents/
- **AWS DevOps Agent ドキュメント - Recent Improvements**: https://docs.aws.amazon.com/devopsagent/latest/userguide/recent-fixes-and-improvements.html
- **AWS DevOps Agent - Supported Regions**: https://docs.aws.amazon.com/devopsagent/latest/userguide/about-aws-devops-agent-supported-regions.html
- **Building an End-to-End Agentic SRE**: https://aws.amazon.com/blogs/devops/building-an-end-to-end-agentic-sre-using-aws-devops-agent
- **Connecting MCP Servers**: https://docs.aws.amazon.com/devopsagent/latest/userguide/configuring-capabilities-for-aws-devops-agent-connecting-mcp-servers.html
- **Open Protocols for Agent Interoperability - A2A**: https://aws.amazon.com/blogs/opensource/open-protocols-for-agent-interoperability-part-4-inter-agent-communication-on-a2a/
- **What Is MCP, ACP, and A2A?**: https://boomi.com/blog/what-is-mcp-acp-a2a

---

**最終更新: 2026-06-15**  
**ご質問やご不明な点は、AWS サポートまでお問い合わせください**