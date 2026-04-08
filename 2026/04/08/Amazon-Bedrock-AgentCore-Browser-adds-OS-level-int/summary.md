# Amazon Bedrock AgentCore Browser adds OS-level interaction capabilities

**カテゴリ:** What's New
**公開日:** 2026-04-08T17:03:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/agentcore-browser-os-actions/](https://aws.amazon.com/about-aws/whats-new/2026/04/agentcore-browser-os-actions/)

---

## 要約

Amazon Bedrock AgentCore Browser は、OS レベルのマウス・キーボード操作とデスクトップスクリーンショット機能を新たに追加し、CDP では対応できない複雑なブラウザワークフローの自動化を実現しました。この機能は、AI エージェント開発者、テスト自動化エンジニア、および LLM 駆動型の Web インタラクションツール構築組織に有用であり、14 の AWS リージョンでデフォルト利用可能です。

## 詳細

### 新機能

- **OS レベルのインタラクション機能をサポート**
  - マウス操作（クリック、移動、ドラッグ、スクロール）
  - キーボード操作（入力、キー押下、Ctrl+A や Ctrl+P などのショートカット）
  - デスクトップ全体のスクリーンショット取得

- **Chrome DevTools Protocol（CDP）の限界を超える**
  - プリントダイアログ、ネイティブシステムアラート、右クリックメニューなどの複雑な UI インタラクションに対応
  - CDP では対応できないブラウザワークフロー自動化が可能

### 対象ユーザー

- **AI エージェント開発者**
  - 複雑なエージェント処理の実装
  - ビジョンベースの自動化

- **テスト自動化エンジニア**
  - 統合テストの自動化
  - 複雑なシナリオへの対応

- **LLM 駆動型ツール構築組織**
  - Web インタラクションツール
  - RPA の実装

### ユースケース

- **自動テスト**: UI テストの自動実行
- **ドキュメント管理ワークフロー**: フォーム入力と処理の自動化
- **ビジョンベース AI エージェント開発**: 画面認識に基づくタスク実行

### 利用可能性

- **14 の AWS リージョンで利用可能**
  - US East（N. Virginia）、US West（Oregon）
  - EU（Ireland）、EU（Frankfurt）
  - Asia Pacific（Tokyo）、Asia Pacific（Singapore）
  - その他主要リージョン
- デフォルトで利用可能（追加設定不要）

### ビジネスインパクト

- **開発効率の向上**: より複雑な自動化シナリオの迅速実装
- **運用コストの削減**: 手動作業の自動化と人的ミスの削減
- **スケーラビリティ**: グローバル環境での大規模自動化プロセスへの対応

---

## 関連情報

### Amazon Bedrock AgentCore の最近の進化

- **2026年3月**: Stateful MCP Server サポート
- **2026年4月**: OS レベルインタラクション機能の追加

### 参考リンク

- [AWS What's New - 元記事](https://aws.amazon.com/about-aws/whats-new/2026/04/agentcore-browser-os-actions/)
- [AWS CLI Reference - invoke-browser](https://docs.aws.amazon.com/cli/latest/reference/bedrock-agentcore/invoke-browser.html)
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/)