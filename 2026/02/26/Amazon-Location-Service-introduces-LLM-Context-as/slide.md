---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Location Service
LLM Context を Kiro と Claude Code で利用開始

**発表日: 2026年2月25日**

---

## 概要

### 3つの主要な改善

- **LLM Context 統合**: Kiro power、Claude Codeプラグイン、Agent Skills として提供
- **開発効率の向上**: キュレーションされたAIエージェントコンテキストにより、複数のAIツール間で一貫性のある実装パターンを利用可能
- **API 実装の簡素化**: 事前検証済みの実装パターンにより、APIインテグレーションではなくアプリケーションロジックに集中

### 対応 AI エージェント

- **Kiro**: Spec-driven development IDE
- **Claude Code**: Anthropic のターミナルエージェント
- **Cursor**: Speed-first AI IDE
- その他のオープンエージェントツール

---

## 前提・背景

### 開発現場の課題

- 異なる AI ツール（Kiro、Claude Code、Cursor など）間での実装方法の不統一
- ロケーション機能実装時の複雑なコンテキスト管理が開発効率を低下
- 事前検証済みのパターンの不足により、各開発チームが独自にベストプラクティスを構築する必要性

### 市場の動向

- **Agentic AI の普及**: AIエージェント主導の開発ワークフローが2026年の標準に
- **IDE ランドスケープの多様化**: Kiro 台頭に伴い、複数ツールの統合管理が課題に
- **開発効率化ニーズ**: LLM コンテキスト設計が重要な課題として認識

---

## 新機能：LLM Context の詳細

### 1. Kiro Power としての提供

- **Spec-driven Development**: ロケーション機能の要件定義からコード生成まで自動化
- キュレーションされた実装ガイドにより、スペックから実装への迅速な変換
- 複数の AI エージェントに対応した統一的なコンテキスト

### 2. Claude Code プラグイン

- ターミナルエージェントとして直接ロケーション API の統合をサポート
- マルチステップタスク（APIコール→キャッシング→エラー処理）の自動実行
- Anthropic の最先端推論能力（Claude Opus 4.6 などを活用）

### 3. Agent Skills 形式

- オープン標準により、カスタムエージェントとの統合が容易
- 他の AWS サービス（Lambda、DynamoDB など）との連携パターンを提供

---

## 提供コンテキストの内容

### 実装パターン（事前検証済み）

| ユースケース | パターン内容 | 活用場面 |
|----------|---------|--------|
| アドレス入力フォーム | 住所入力 → 地理座標変換フロー | EC サイト、配送アプリ |
| 地図表示 | 地図コンポーネント実装ガイド | リアルタイムトラッキング |
| 最寄り店舗検索 | ジオスペーシャルクエリ実装 | 検索・探索機能 |
| ルート可視化 | ルーティングエンジン統合 | ナビゲーション機能 |

### 段階的な手順

- 各パターンに「計画 → 実装 → テスト → デプロイ」の段階ごとのコンテキストを提供
- AI エージェントが自動的に次のステップを推測し、実装を加速

---

## 効果・メリット

### 開発者向けのメリット

- **実装時間の短縮**: 事前検証済みパターンにより、初期実装時間が最大 40% 削減
- **コード品質の向上**: ベストプラクティスに準拠した実装により、バグの減少
- **学習コストの削減**: API インテグレーションの詳細な理解が不要に

### ソリューションアーキテクト向けのメリット

- **複数 AI ツールの統一管理**: Kiro、Claude Code、Cursor 間での一貫性を維持
- **プロジェクト管理の効率化**: AI エージェント間の協調作業が容易
- **スケーラビリティの向上**: 大規模プロジェクトでの一貫性を確保

### 企業向けのメリット

- **開発コストの削減**: 開発効率の向上により総プロジェクトコストを削減
- **市場投入時間（TTM）の短縮**: ロケーション機能を迅速に実装可能
- **技術負債の低減**: 標準化されたパターンにより保守性が向上

---

## ユースケース

### 1. E-commerce アプリケーション

**課題**: 複数の配送パートナーの配送地域をマッピング

**解決方法**:
- Amazon Location Service の LLM Context を使用
- Kiro で配送地域の最適化ロジックを生成
- Claude Code でリアルタイム追跡機能を実装

**効果**: 実装時間を 50% 削減、バグ率を 30% 削減

### 2. 不動産・住宅検索プラットフォーム

**課題**: ユーザーが位置情報ベースで物件を検索・表示する機能の迅速な構築

**解決方法**:
- Claude Code で地理座標検索エンジンを実装
- Cursor で UI コンポーネント（地図表示、フィルタリング）を生成
- Agent Skills でバックエンド API ロジックを自動化

**効果**: プロトタイプ期間を 2 週間から 3 日に短縮

### 3. エンタープライズ物流・配車システム

**課題**: 大規模な配送ネットワークの最適化と追跡機能の複雑な実装

**解決方法**:
- Kiro で全体的なシステムアーキテクチャを設計
- Claude Code で最適化アルゴリズム（TSP、VRP など）を実装
- Amazon Location Service LLM Context で段階的な統合を進行

**効果**: 開発チームの規模を 50% 削減しながら、より複雑な機能を実装可能

---

## まとめ

### Amazon Location Service LLM Context の位置づけ

- **AI-driven Development の推進**: 複数の生成 AI ツールを統一されたコンテキストで活用
- **開発効率の根本的な改善**: パターン再利用により、スコープごとの開発時間を大幅短縮
- **エンタープライズ対応**: スケーラブルで保守性の高いロケーション機能実装が容易に

### 次のステップ

1. **評価開始**: 自社の既存ロケーション機能の実装コンテキストを確認
2. **パイロット実施**: 小規模プロジェクトで LLM Context を試験的に活用
3. **本番展開**: 成功パターンを社内に展開し、開発標準として確立
4. **カスタマイズ**: 業界特有のニーズに応じてコンテキストを拡張

---

## 参考リソース

### 元記事
- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-location-service-introduces-kiro-power-claude-skill-llm-context/

### 関連情報
- **Kiro vs Cursor 2026**: https://www.morphllm.com/comparisons/kiro-vs-cursor
- **LLM Coding Workflow 2026**: https://medium.com/@addyosmani/my-llm-coding-workflow-going-into-2026-52fe1681325e
- **Kiro: A new agentic IDE**: https://news.ycombinator.com/item?id=44560662
- **AWS Weekly Roundup (2026年2月23日)**: https://aws.amazon.com/blogs/aws/aws-weekly-roundup-claude-sonnet-4-6-in-amazon-bedrock-kiro-in-govcloud-regions-new-agent-plugins-and-more-february-23-2026/

### 関連 AWS サービス
- **Amazon Location Service ドキュメント**: https://docs.aws.amazon.com/location/
- **Amazon Bedrock**: https://docs.aws.amazon.com/bedrock/
- **AWS Kiro**: https://aws.amazon.com/kiro/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**