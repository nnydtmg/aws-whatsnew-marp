---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Quick × Snowflake Cortex AI
自然言語でのデータクエリとワークフロー自動化を実現

**発表日: 2026年6月11日**

---

## 概要

### Amazon Quickの新しい統合

- **Snowflake Cortex AIとの統合**: Model Context Protocol（MCP）を通じて実現
- **自然言語インターフェース**: Snowflakeのデータと非構造化ドキュメントをNLで検索可能
- **ワークフロー自動化**: Quick内で複数ステップのプロセスを自動化・統制
- **エンタープライズ対応**: 全AWSリージョンで利用可能

---

## 前提・背景

### 企業が直面する課題

- **データアクセスの複雑さ**: 構造化データと非構造化ドキュメントが分散
- **自動化と柔軟性の両立**: 統制されたプロセスと会話型インターフェースの共存の難しさ
- **スキル依存**: SQLやプログラミング知識が必要
- **セキュリティとガバナンス**: データを安全に保ちながら分析する必要性

### AWS・Snowflakeの戦略的協業

- Snowflakeが$6B規模のAWS インフラコミットメントを発表（2026年5月）
- Snowflake Cortex AIの機能拡張: テキスト-SQL、要約、感情分析
- AWS Gravitonプロセッサによる価格パフォーマンス向上

---

## 主な機能

### 1. Snowflake Cortex AIの統合

- **Cortex Analyst**: 構造化データへの自然言語クエリ
- **Cortex Search**: 非構造化ドキュメントの検索・要約
- **OAuth認証**: セキュアなMCP接続

### 2. Quick Flowsによるワークフロー構築

- Snowflake Cortex Agentsのオーケストレーション
- 反復可能で統制された処理フロー
- 一貫した構造化出力

### 3. Quick Chatとの統合

- 同じMCP接続をQuick Chatから利用可能
- アドホックなフォローアップ質問に対応
- エンタープライズナレッジとの組み合わせで最適な回答を提供

---

## ユースケース・効果

### 適用対象

<div class="columns">
<div>

### 対象の部門・チーム

- **データ分析チーム**: セルフサービス分析
- **法務・コンプライアンス**: AML（マネーロンダリング防止）alert triage
- **営業・マーケティング**: キャンペーンデータ分析
- **オペレーション**: ルーチン処理の自動化

</div>
<div>

### 期待される効果

- **時間削減**: 複雑なクエリ作成に要する時間を削減
- **スキル障壁の低減**: SQLスキル不要で誰でも利用可能
- **ガバナンス強化**: 統制されたプロセスで監査対応
- **意思決定高速化**: 自然言語で迅速に洞察を取得

</div>
</div>

---

<!-- _class: small -->

## 実装ケース: AML Alert Triage（マネーロンダリング防止）

### ワークフロー例

1. **入力ステップ**: 分析者がAlert ID と時間窓を入力
2. **調査フェーズ**: Cortex Analystで以下を自動取得
   - Alert詳細（ID、ルール、重要度、日付）
   - トランザクションパターン（金額、カウンターパーティ、チャネル）
   - 顧客プロフィール（リスク等級、オンボーディング国)
   - 過去の履歴（前Alert、SAR、結果）
3. **評価**: Cortex Agentが自動的にリスク評価（スコア1-10）を実施
4. **推奨**: 結果を以下の中から自動推奨
   - クローズ / エスカレート / SAR提出
5. **ドラフト作成**: 2-3パラグラフのナレーティブを自動生成

→ 手作業では数時間要した調査が数分で完了

---

## 技術的ポイント

### Model Context Protocol（MCP）とは

- Anthropicが定義した標準プロトコル
- AIアプリケーションとデータソースを安全に接続
- 複数のツール・データソースの統一的な管理

### セキュリティ

- OAuth認証による安全な接続
- Snowflakeの管理MCPサーバー
- データを「安全な一周」内に保持

### パフォーマンス

- AWS Graviton プロセッサ活用
- GPU加速のEC2インスタンス利用可能
- エンタープライズスケールに対応

---

## AWS・Snowflake エコシステム

### 関連サービスとの連携

- **Amazon QuickSight**: 分析結果の可視化
- **AWS IAM**: アクセス制御
- **Amazon S3**: データレイク統合
- **AWS Lambda**: カスタムワークフロー

### 利用可能なリージョン

- **全AWSリージョン**: Amazon Quickが利用可能なすべてのリージョンで即座に利用可能

---

## 次のステップ

### 導入に向けて

1. **無料トライアル開始**: Amazon Quickのフリートライアル登録
2. **Snowflake接続設定**: OAuth認証でMCP接続をセットアップ
3. **パイロット運用**: 1つの部門でユースケース検証
4. **スケールアップ**: 他部門への展開と最適化

### リソース

- [Amazon Quick 公式サイト](https://aws.amazon.com/quick/)
- [Snowflake Cortex AI ドキュメント](https://docs.snowflake.com/)
- [AML Alert Triage ブログ](https://aws.amazon.com/blogs/machine-learning/automate-aml-alert-triage-with-amazon-quick-and-snowflake-cortex-ai/)

---

## まとめ

### Amazon Quick × Snowflake Cortex AIの統合

- **統制と柔軟性の両立**: 構造化プロセスと会話型インターフェースを共存
- **高速な洞察取得**: 自然言語で数秒で複雑な分析を実施
- **スキル民主化**: データアクセスのハードルを大幅に低減
- **エンタープライズ対応**: 全リージョン対応でグローバル展開可能

### ビジネスインパクト

✅ **生産性向上**: 分析時間を数時間から数分に短縮  
✅ **コスト削減**: 手作業工程の自動化による人員効率化  
✅ **リスク軽減**: ガバナンスされたワークフローで監査対応  
✅ **スケーラビリティ**: 複雑な多段階プロセスを自動運用

---

## 参考リソース

### 公式情報

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-snowflake-cortex-ai/
- **Amazon Quick 公式**: https://aws.amazon.com/quick/
- **Snowflake Cortex AI**: https://www.snowflake.com/

### 関連記事・ブログ

- **AML Alert Triage実装ガイド**: https://aws.amazon.com/blogs/machine-learning/automate-aml-alert-triage-with-amazon-quick-and-snowflake-cortex-ai/
- **AWS×Snowflake $6B協業**: https://press.aboutamazon.com/2026/5/snowflake-expands-aws-collaboration-with-6b-commitment-to-accelerate-enterprise-agentic-ai-adoption
- **Quick Integrations**: https://aws.amazon.com/quick/integrations/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**