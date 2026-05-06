---
marp: true
theme: aws-whatsnew
paginate: true
---

# The AWS MCP Server is now generally available

**What's New** | 2026-05-06T12:00:00

---

## 概要

- AWS MCP Serverが一般提供開始となり、AIコーディングエージェントがIAMベースのガードレールと監査ログを通じてAWSサービスに安全にアクセスできるようになりました。
- このアップデートは、セキュリティと可視性を維持しながらエージェントベースの自動化を実装したい組織に適しており、追加料金なしで利用可能です。

---

## 前提・背景

### AIエージェントとセキュリティの課題

- AIコーディングエージェントがAWSと統合されるケースが増加
- 従来の手段ではセキュリティと可視性のバランスが課題
- IAMベースのアクセス制御と監査ログによる透明性の必要性

### Model Context Protocol（MCP）の標準化

- MCPは「AI向けのUSB-C」とも呼ばれる標準プロトコル
- JSONベースのRPCで、ツール登録と発見を標準化
- スケーラビリティと統治の課題を解決

---

## 主な機能と特徴

### セキュリティと可視性

- **IAMベースのガードレール**: 標準のAWS IAMで細粒度なアクセス制御
- **監査ログ**: AWS CloudTrailで全ての操作をトラッキング
- **CloudWatchメトリクス**: リアルタイム監視と異常検知

### 機能面での充実

- **15,000+のAWS API**: 単一ツールあらゆるAWS APIを呼び出し可能
- **ファイルアップロード対応**: バイナリデータ処理に対応
- **長時間実行操作**: 非同期処理やポーリング対応

---

## 実行環境と安全性

### サンドボックス化されたPython実行

- ローカルファイルシステムへのアクセス禁止
- シェルツールの実行を制限
- 複数ステップのワークフロー実行をサポート

### Agent SOPs（Standard Operating Procedures）

- キュレーションされたガイダンスを自動提供
- AWSベストプラクティスに従うワークフロー
- セマンティック検索で関連手順を自動検出
- コンテキストウィンドウ使用量を最小化

---

## 利用条件と可用性

### 料金体系

- **追加料金なし**: MCP Server自体の利用料金は無料
- **従量課金**: エージェント利用時のAWSリソース使用量のみ課金
- **コスト効率**: API呼び出しやスクリプト実行のみで構成

### 利用可能リージョン

- **US East（N. Virginia）**
- **Europe（Frankfurt）**

---

## 効果とメリット

### 組織のメリット

- **セキュリティの維持**: IAMと監査ログで完全な制御可能
- **可視性の向上**: CloudWatchメトリクスで操作追跡
- **導入障壁の低減**: AWS認証情報不要で始められる
- **ガバナンス効率化**: 28-32%のタスク精度向上（研究報告）

### 開発チームのメリット

- **学習曲線の短縮**: AWS標準の認証・認可メカニズムを使用
- **複雑な操作の簡素化**: Agent SOPsで多段階タスクを自動化
- **スケーラビリティ**: MCPの標準化でツール管理コストを削減

---

## 利用可能な対象

### 活用シナリオ

- **AWSと連携するAIコーディングエージェント開発組織**
  - Claude、GPTなどの大規模言語モデルを活用する開発

- **エージェントベースの自動化実装を検討する企業**
  - セキュリティと監査可能性を要件とする環境

- **複雑なマルチステップ操作の自動化が必要な組織**
  - インフラ構築、データ処理、リソース管理など

- **AIエージェント開発の導入障壁を低減したい企業**
  - 既存のIAM・CloudTrail体系を活用したい

---

## まとめ

### AWS MCP Serverの位置付け

- エージェント時代のAWS統合基盤
- セキュリティと利便性のバランスを実現
- 標準化されたMCPプロトコルによる拡張性

### 次のステップ

1. **評価**: 既存のAIプロジェクトでの活用可能性を検討
2. **パイロット**: US East/Frankfurt リージョンで試験導入
3. **拡大**: 社内ガイドラインとガバナンス体系の構築
4. **最適化**: CloudWatchメトリクスで運用を最適化

---

## 参考リソース

- **AWS What's New 記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-mcp-server/
- **AWS MCP Prescriptive Guidance**: https://docs.aws.amazon.com/pdfs/prescriptive-guidance/latest/mcp-strategies/mcp-strategies.pdf
- **AWS MCP Strategy Guide**: https://sjramblings.io/aws-mcp-strategies-the-interesting-parts/
- **What's Next 2026 - Agent Stack**: https://futurumgroup.com/insights/aws-pushes-the-agent-stack-quick-connect-verticals-openai-on-amazon-bedrock/
- **AWS MCP Server - Enhanced Monitoring**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-mcp-server-preview-enhanced-monitoring/
- **AWS Open Source Blog**: https://aws.amazon.com/blogs/opensource/shaping-the-future-of-mcp-aws-commitment-and-vision/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**