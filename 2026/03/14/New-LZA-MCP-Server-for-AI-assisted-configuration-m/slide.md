---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Landing Zone Accelerator MCP Server
AI支援型設定管理機能がオープンソース化

**発表日: 2026年3月12日**

---

## 概要

### 3つの主要な変更点

- **オープンソース化**: Landing Zone Accelerator（LZA）用のModel Context Protocol（MCP）サーバーがAWS Labsで公開
- **AI支援型管理**: 自然言語会話によるLZAデプロイメント管理を実現
- **効率化の実現**: 従来は手作業で時間がかかっていた設定タスクの自動化

### 対応IDE

- **Kiro**
- **Amazon Q Developer**
- **Claude Code**

---

## 前提・背景

### Landing Zone Acceleratorの課題

- マルチアカウント、マルチリージョンの複雑な設定管理
- 手作業による設定作業の時間負荷
- ドキュメント検索の複雑性
- デプロイメント失敗時の原因特定の困難さ

### AIエージェント技術の進化

- Model Context Protocol（MCP）による標準化
- AI支援型の開発ワークフロー需要の増加
- セキュアなエンタープライズAIツール統合の必要性

---

## 主な機能と改善

### 20個の専門的なツール

- **ドキュメント検索**: 複数のLZAバージョンのドキュメント検索
- **設定管理**: LZA設定の作成・編集・管理
- **パイプライン監視**: デプロイメントパイプラインのリアルタイム監視
- **失敗分析**: デプロイメント失敗時の実行可能な洞察を自動生成

### コンテナ化されたMCPエンドポイント

- IDE統合により、エディター内での直接操作が可能
- 複数のAIアシスタント間での相互運用性

---

## セキュリティと互換性

### セキュリティ機能

- **一時認証情報**: AWSのセキュリティベストプラクティスに従う
- **アクセス制御**: 必要最小限の権限で動作
- **エンタープライズ対応**: 金融、医療などの規制業界にも対応

### 利用可能なリージョン

- すべての商用AWSリージョン
- AWS GovCloud（US）リージョン
- グローバルなLZA展開に対応

---

## 効果・メリット

### 運用効率化

- 手作業の削減による作業時間の短縮
- 自然言語によるインタラクティブな管理
- 複数バージョンのドキュメント自動統合検索

### 品質向上

- 設定エラーの削減
- デプロイメント失敗の素早い特定と解決
- ベストプラクティスの自動適用

### 開発生産性

- 開発者が使い慣れたIDEで作業可能
- AIアシスタントによる作業支援
- CloudFormation、設定検証の自動化

---

## ユースケース

### マルチアカウント環境の管理

自然言語で「全リージョンでセキュリティグループを確認」などの指示を実行可能

### ディザスタリカバリー対応

LZA設定の迅速な復旧と検証

### コンプライアンス確認

ドキュメント検索とパイプライン監視による自動コンプライアンス検証

---

## まとめ

### Landing Zone Accelerator MCP Serverの位置づけ

- **エンタープライズ向け**: マルチアカウント環境の管理を効率化
- **AI統合**: 最新のAIエージェント技術をLZAに適用
- **オープン**: AWS Labsで公開、カスタマイズが可能
- **セキュア**: AWSベストプラクティスに準拠

### 次のステップ

1. AWS Labs GitHubリポジトリからコードを取得
2. パイロット環境での動作確認
3. 本番環境への段階的展開
4. IDEプラグインの設定と統合

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/new-lza-mcp-server-ai-assisted/
- **AWS Labs GitHub**: https://github.com/awslabs/
- **Landing Zone Accelerator ドキュメント**: https://docs.aws.amazon.com/lza/
- **Model Context Protocol**: https://modelcontextprotocol.io/

### 関連情報

- **AWS MCP Servers**: https://awslabs.github.io/mcp/
- **Amazon Q Developer**: https://aws.amazon.com/bedrock/amazon-q-developer/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**