---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS DevOps Agent がカスタムSREエージェントとMCP/A2Aプロトコルで拡張

AWS DevOps Agent expands with custom SRE agents and MCP/A2A protocols

**What's New** | 2026-06-15

---

## 概要

- AWS DevOps Agentは、カスタムSREエージェント、ヘッドレスアクセス機能、およびサブエージェント統合により、SREワークフローの自動化と既存ツールとの統合が可能になりました。
- このアップデートは、DevOpsチーム、SRE専門家、および開発者にとって、生産環境の監視と問題解決の効率を大幅に向上させるものです。

---

## 前提・背景

### 市場の動向

- エージェント間通信の標準化が進展（MCP、A2A プロトコルの普及）
- SRE 業務の自動化ニーズの高まり
- DevOps チームの運用負荷軽減の要求増加

### 従来の課題

- SREワークフローは手作業や単純なスクリプトに依存
- 既存ツールとの統合が複雑で時間がかかる
- エージェント間の通信方法が統一されていない

---

## 変更内容・新機能

### 1. カスタムSREエージェント

- Agent Spaces 内でエージェントを作成・スケジュール設定
- **定期実行**: 日次データベースヘルスレポートの自動作成
- **異常検知**: 過去24時間のログレビューと異常フラグ機能

### 2. ヘッドレスアクセス（MCP/A2Aプロトコル）

- Kiro、Claude などコーディングアシスタントから直接呼び出し
- IDE を離れることなく本番環境の健全性確認

---

<!-- _class: small -->

### 3. サブエージェント統合

- **Amazon Bedrock** または **サードパーティフレームワーク** で構築したサブエージェントを A2A 経由で接続
- DevOps Agent 機能を自由に拡張可能

### 4. その他の改善

- **チャット強化**: より自然な対話体験
- **インシデントスキップ**: 顧客定義ルールに基づく自動スキップ
- **知識管理**: メモリと Git 管理スキルによる強化
- **品質追跡**: 人間によるラベリングとカスタムダッシュボード
- **リージョン拡大**: 5つの新しいリージョンで利用開始

---

## 効果・メリット

### DevOps チーム

- **自動化**: 定期的な SRE ワークフローの自動実行
- **効率化**: 手作業削減により重要なタスクに集中可能

### 開発者

- **統合**: 既に使用しているツール（Kiro、Claude）からシームレスにアクセス
- **迅速性**: IDE を離れることなく本番環境の問題を調査

### 組織全体

- **スケーラビリティ**: カスタムエージェントで自社ニーズに対応
- **相互運用性**: MCP/A2A による標準プロトコルで他ツール連携

---

## ユースケース

### 日次運用監視

```
カスタムSREエージェント
  ↓
毎日実行
  ↓
- DBヘルスレポート生成
- ログ分析・異常検知
- スラック通知
```

### IDE 内での本番環境チェック

```
Kiro パワー（IDE内）
  ↓
MCP プロトコル
  ↓
DevOps Agent
  ↓
本番環境の健全性確認
```

---

## まとめ

### AWS DevOps Agent の進化ポイント

- **カスタマイズ性**: チームに合わせたエージェント作成
- **統合性**: MCP/A2A プロトコルによるシームレス連携
- **自動化**: 定期的 SRE ワークフローの完全自動化

### 次のステップ

1. 自社の SRE ワークフローを整理
2. AWS DevOps Agent のカスタムエージェント評価
3. パイロットプロジェクト開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-devops-agent-custom-agents/
- **Building an end-to-end agentic SRE**: https://aws.amazon.com/blogs/devops/building-an-end-to-end-agentic-sre-using-aws-devops-agent
- **Connecting MCP Servers**: https://docs.aws.amazon.com/devopsagent/latest/userguide/configuring-capabilities-for-aws-devops-agent-connecting-mcp-servers.html
- **Open Protocols for Agent Interoperability**: https://aws.amazon.com/blogs/opensource/open-protocols-for-agent-interoperability-part-4-inter-agent-communication-on-a2a/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**