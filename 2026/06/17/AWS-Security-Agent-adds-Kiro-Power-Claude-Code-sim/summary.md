# AWS Security Agent が Kiro Power と Claude Code をサポート、シミュレーション検証と新しい統合が利用可能に

AWS Security Agent adds Kiro Power, Claude Code, simulated validations and new integrations support

**カテゴリ:** What's New
**公開日:** 2026-06-17
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-kiro-power-claude-code/)

このドキュメントは、AWS What's Newで発表された「AWS Security Agent adds Kiro Power, Claude Code, simulated validations and new integrations support」の内容を日本語で要約したものです。

---

## 要約

AWS Security Agentは、Kiro PowerおよびClaude Codeのサポート、シミュレートされた検証機能、および複数のプラットフォーム統合を追加することで、開発者がIDE内からセキュリティスキャンと脅威検証を実施できるようになりました。この更新により、セキュリティチームは検証済みの検出結果に基づいて、より効果的に優先順位付けと修復を行うことができるようになります。

---

## このアップデートで何が変わったか

### IDE 統合の強化

- AWS Security Agent（現在はAWS Continuumの一部）がKiroおよびClaude Codeのサポートを追加
- 開発者が開発環境（IDE）から直接セキュリティスキャンをトリガーできるように
- MCP (Model Context Protocol) による統合により、シームレスな連携を実現

### シミュレートされた検証機能

- コードスキャナーの検出結果をサンドボックス環境でシミュレート検証
- エクスプロイト可能性の証拠を提供し、実際の脅威かどうかを判定
- 誤検知を最小化し、修復の優先順位付けを確実に

### プラットフォーム統合の拡大

- **対応プラットフォーム**: GitLab.com、GitLab Self Managed、GitHub Enterprise、Bitbucket、Confluence
- 既存のソースコントロールプラットフォームに接続可能
- エンタープライズ環境における多様なプラットフォーム要件に対応

### IDE プラグイン機能

- Kiro Power と Claude Code プラグインが利用可能
- IDE 内から脅威モデルの構築、コードスキャンの実行、検証済み検出結果の修復を実行
- すべてのスキャン結果がインライン表示されるため、コンテキストスイッチが不要

### 利用可能性

- すべての AWS Security Agent がサポートされているリージョンで利用可能
- 段階的にリージョンを拡大予定

---

## 対象ユーザー

### 開発者
- IDE 内からセキュリティスキャンを実行したいエンジニア
- Kiro または Claude Code を使用している開発チーム
- 開発効率を損なわずにセキュリティを確保したいチーム

### セキュリティチーム
- 検証済みの脅威情報に基づいて優先順位付けを行いたいチーム
- 誤検知による無駄な対応を削減したいチーム
- 複数のプラットフォームを統一的に管理したいチーム

### DevOps / Platform Engineering
- DevSecOps ワークフローを構築したいチーム
- 開発ライフサイクル全体でセキュリティを組み込みたいチーム

---

## ユースケース

### 1. セキュリティファーストな開発フロー

**シナリオ**: 開発者が新しい機能を実装する際

1. IDE で機能を実装
2. Kiro Power / Claude Code で自動セキュリティレビューを実行
3. 検証済みの脅威情報に基づいて修復
4. プルリクエストを作成

**効果**: セキュリティレビュー段階で検出できず本番環境に流出するリスクを低減

### 2. セキュリティチームの効率化

**シナリオ**: セキュリティチームが検出結果を確認・優先順位付けする

1. AWS Security Agent からスキャン結果を取得
2. シミュレーション検証により、実際の脅威かどうかを判定
3. 検証済み結果に基づいて優先順位を付与
4. 開発チームに修復を依頼

**効果**: 誤検知による対応時間が削減され、本当に重要な脅威に集中可能

### 3. エンタープライズ環境での統一的なセキュリティ管理

**シナリオ**: 企業が GitHub Enterprise、GitLab Self-Managed など複数のプラットフォームを運用

1. AWS Security Agent を各プラットフォームに統合
2. 統一された UI でセキュリティスキャンを実行
3. 脅威モデルとコードスキャン結果を一元管理
4. Confluence と連携し、ドキュメント化

**効果**: プラットフォーム間の運用負荷を軽減、セキュリティ体制の強化

---

## 技術的な詳細

### IDE 統合

- **Kiro Power**: AWS 公式 IDE「Kiro」向けのパワー機能
- **Claude Code プラグイン**: Anthropic の Claude Code IDE 向けのプラグイン
- **MCP 統合**: Model Context Protocol により、他のツールとも統合可能

### シミュレーション検証

- AWS Security Agent の コードスキャナーが検出した脆弱性を、サンドボックス環境で再現
- エクスプロイトの実行可能性を判定
- 実際の脅威レベルを数値化

### プラットフォーム連携

- **GitHub**: OAuth 認証、Webhook によるトリガー
- **GitLab**: API 統合、Pipeline トリガー
- **Bitbucket**: Bitbucket Cloud / Server API
- **Confluence**: ドキュメント参照用に統合

---

## 効果・メリット

### 開発チーム向け

1. **開発効率の向上**: IDE から離れることなくセキュリティレビューが完結
2. **学習効果**: 検証済みの脅威情報を受けることで、セキュリティ知識を習得
3. **誤検希による時間ロス削減**: シミュレーション検証により、実際の脅威に集中

### セキュリティチーム向け

1. **対応効率の向上**: 誤検知による無駄な対応を削減
2. **優先順位付けの明確化**: 検証済みの脅威レベルに基づいた対応順序
3. **エンタープライズ対応**: 複数プラットフォームを統一的に管理

### 組織全体

1. **DevSecOps の推進**: セキュリティを開発ライフサイクル全体に組み込む
2. **リスク低減**: セキュリティレビュー段階での脆弱性検出率向上
3. **コンプライアンス**: 脅威モデル、スキャン結果、修復履歴を一元管理

---

## リリース情報

- **発表日**: 2026年6月17日
- **利用可能性**: AWS Security Agent がサポートされているすべてのリージョン
- **料金**: 既存の AWS Security Agent の料金体系に含まれる

---

## 次のステップ

1. **Kiro / Claude Code のセットアップ**: IDE を最新バージョンに更新
2. **AWS Security Agent の接続**: IDE から AWS Security Agent に接続
3. **プラットフォーム統合**: GitHub Enterprise、GitLab など既存のプラットフォームに接続
4. **パイロットプロジェクト**: 小規模なプロジェクトでセキュリティスキャンをテスト
5. **本番環境への展開**: 全開発チームに展開

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-kiro-power-claude-code/
- **AWS Security Agent ドキュメント**: https://docs.aws.amazon.com/securityagent/
- **AWS Security Agent ブログ**: https://aws.amazon.com/blogs/security/
- **Kiro (AWS IDE)**: https://aws.amazon.com/kiro/
- **Claude Code**: https://www.anthropic.com/claude/code
- **AWS What's New RSS**: https://aws.amazon.com/about-aws/whats-new/feed/
