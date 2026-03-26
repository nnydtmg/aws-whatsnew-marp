---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Serverless Agent Plugin
AI支援開発の加速化

**発表日: 2026年3月25日**

---

## 概要

### AWS Serverless Agent Plugin の3つの特徴

- **AI コーディングアシスタント統合**: Kiro、Claude Code、Cursor など主要なAIツールに対応
- **包括的なガイダンス**: Lambda、EventBridge、API Gateway などの AWS サービス統合
- **生産環境対応**: ベストプラクティスとベスト実装パターンを内包

### 提供内容

- 開発ライフサイクル全体をカバーするAIアシスタント機能
- サーバーレスアプリケーション構築から運用まで自動化

---

## 前提・背景

### 市場の動向

- **AI駆動開発の急速な普及**
  クラウド開発が複雑化する中、AI支援ツールへの需要が急増

- **サーバーレスアーキテクチャの浸透**
  Lambda、EventBridge、API Gateway の利用が増加し、ベストプラクティス習得が課題

- **開発効率化への圧力**
  開発者の生産性向上と品質確保の両立が求められている

### AWSの戦略

- AI エージェントを開発ワークフローに統合
- 実証済みのアーキテクチャパターンを自動提供
- エンタープライズ向けサーバーレスアプリケーション開発の加速

---

## 主な機能と改善

### 1. Agent Plugin の構成要素

- **スキル (Skills)**: 再利用可能なAI実行ユニット
- **サブエージェント (Sub-agents)**: 複雑なタスク分割と管理
- **フック (Hooks)**: 開発ライフサイクルの各段階で動作
- **Model Context Protocol (MCP) サーバー**: スタンダード化された情報提供

### 2. 対応する AWS サービス

- **AWS Lambda**: 関数作成、デバッグ、最適化
- **Amazon EventBridge**: イベント駆動設計ガイダンス
- **Amazon Kinesis**: ストリーミングデータ処理パターン
- **AWS Step Functions**: ワークフローオーケストレーション
- **Amazon API Gateway**: REST/HTTP/WebSocket API 設計

### 3. Infrastructure as Code (IaC) サポート

- **AWS SAM (Serverless Application Model)**: テンプレートベースの自動生成
- **AWS CDK (Cloud Development Kit)**: 高レベルな構築パターン
- **再利用可能なコンストラクト**: 実証済みのベストプラクティス組み込み

---

## 機能詳細

### Lambda 耐久関数での長時間実行ワークフロー

- **チェックポイント再生モデル**: 失敗時の自動復旧
- **高度なオーケストレーションパターン**: 複雑なワークフローの管理
- **エラーハンドリング**: 予期しない状況への対応自動化

### API デザインとベストプラクティス

- REST API、HTTP API、WebSocket API に対応
- セキュリティ、認証、レート制限のガイダンス
- 本番環境向けの可観測性設定

### 可観測性とパフォーマンス最適化

- ログ、メトリクス、トレーシングの自動構成
- コスト最適化のベストプラクティス
- トラブルシューティングの自動ガイダンス

---

## 利用方法と導入

### インストール手順

#### Claude Code 利用時
```
/plugin install aws-serverless@claude-plugins-official
```

#### 他のAIツール対応
- **Cursor**: Cursor Marketplace から検索・インストール
- **Kiro**: Agent Skills フォーマットでサポート
- **その他**: Agent Skills 形式での個別インストール対応

### 対応ツール

- Claude Code（公式サポート）
- Cursor（Marketplace経由）
- Kiro（Agent Skills形式）
- その他の Agent Skills 対応ツール

---

## メリットと効果

### 開発生産性の向上

- **時間削減**: サーバーレスアーキテクチャ構築時間を大幅削減
- **ベストプラクティス自動適用**: 人手を介さない品質確保
- **学習曲線の短縮**: 初心者でも本番環境対応コード生成が可能

### 運用コストの削減

- **エラー減少**: AI による事前チェックと自動修正
- **デバッグ効率**: 自動的なエラー診断とフィックス提案
- **インフラ最適化**: コスト効率的なアーキテクチャ推奨

### 品質向上

- **セキュリティ**: ベストプラクティスに従ったセキュアコード
- **パフォーマンス**: 検証済みのアーキテクチャパターン適用
- **保守性**: スケーラブルで拡張可能な構造

---

## ユースケース

### 1. マイクロサービスの高速開発

Lambda 関数とイベント駆動アーキテクチャを組み合わせた マイクロサービス開発を AI が自動支援

### 2. リアルタイムデータ処理

EventBridge と Kinesis を組み合わせた ストリーミング処理パイプラインの構築自動化

### 3. API エコシステムの構築

複数の API Gateway インスタンスを統合したAPI管理と セキュリティポリシーの自動適用

### 4. 長時間実行ワークフロー

Step Functions + Lambda 耐久関数による ステートフル処理の信頼性向上

---

## まとめ

### AWS Serverless Agent Plugin の位置づけ

- **AI駆動開発の新時代**: AI エージェントがサーバーレス開発の標準になる道へ
- **ベストプラクティスの民主化**: すべての開発者が専門家レベルの品質を実現
- **開発効率と品質の両立**: 自動化と検証による最適なバランス

### 次のステップ

1. Claude Code または Cursor でプラグインをインストール
2. 既存のサーバーレスプロジェクトで試す
3. AIエージェント駆動開発への段階的移行
4. チーム全体への展開と ワークフロー最適化

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/agent-plugin-aws-serverless/
- **GitHub: Agent Plugins for AWS**: https://github.com/awslabs/agent-plugins
- **AWS Serverless Application Model**: https://aws.amazon.com/serverless/sam/
- **AWS Cloud Development Kit**: https://aws.amazon.com/cdk/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**