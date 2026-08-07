---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore runtime instances が一般提供開始

EC2インスタンス上でエージェントを実行可能に

**発表日: 2026年8月6日**

---

## 概要

### 3つの主要な変更点

- **EC2でのネイティブ実行**: インフラストラクチャ管理なしでEC2インスタンス上にエージェントをデプロイ
- **長時間セッション対応**: 最大14日間のセッション実行（従来のマイクロVM方式は最大8時間）
- **柔軟なハードウェア選択**: GPU加速、メモリ最適化、コンピュート最適化など幅広いインスタンスタイプをサポート

---

## 前提・背景

### エージェント運用の課題

- リソース集約的なAIエージェントの運用に対応するインフラが必要
- 長時間実行タスクの信頼性確保が困難
- 特定のハードウェア（GPU、メモリ）を必要とするエージェントの配置が制限される

### エンタープライズAIの進化

- AgentCore Harness（GA）により、設定ベースでエージェント構築が可能に
- Managed Knowledge Baseで組み込みRAGパイプラインが利用可能
- Web Searchで最新情報の統合が可能
- マルチエージェント運用がAWSで標準化

---

## 主な機能と改善

### Runtime instances の特徴

#### 実行環境
- **インスタンスタイプ**: GPU加速（g系）、メモリ最適化（r系）、コンピュート最適化（c系）に対応
- **セッション長**: 最大14日間の長時間実行を支持
- **自動管理**: プロビジョニング、パッチ適用、スケーリング、ライフサイクル管理をAWS側で実施

#### 管理方法
- AWS Management Console
- CLI（AWS CLI）
- SDK（Python、Java、JavaScriptなど）
- AWS API

### キャパシティプロバイダーの使用

```
キャパシティプロバイダー設定 → エージェントをアタッチ → 
自動スケーリング → 長時間実行セッション
```

---

## 利用可能なリージョン

### グローバル展開（9リージョン）

<div class="columns-3">
<div>

### 米国
- US East（N. Virginia）
- US West（Oregon）

</div>
<div>

### ヨーロッパ
- Europe（London）
- Europe（Paris）
- Europe（Stockholm）

</div>
<div>

### アジア太平洋
- Asia Pacific（Tokyo）
- Asia Pacific（Singapore）
- Asia Pacific（Seoul）

</div>
</div>

---

## 効果・メリット

### ビジネス上の利点

- **インフラ負担の軽減**: AWS側でプロビジョニング・管理を完全自動化
- **スケーラビリティ向上**: 需要に応じた自動スケーリングで冗長性確保
- **コスト最適化**: 特定用途に最適なインスタンスタイプを選択可能
- **運用の簡素化**: 複雑なオーケストレーションコードが不要

### 技術的なメリット

- **長時間実行対応**: 14日間のセッション継続で複雑なマルチステップタスク実行が可能
- **ハードウェアの柔軟性**: エージェントの要件に応じて最適なインスタンスタイプを選択
- **統合管理**: Console/CLI/API/SDKで統一的に管理
- **セキュリティ**: ISO/CSA STAR認証で信頼性向上

---

## ユースケース

### 適用候補のシナリオ

<div class="columns">
<div>

### リソース集約型
- データ分析エージェント（大規模データセット処理）
- 画像・動画処理エージェント
- 機械学習パイプライン実行

</div>
<div>

### 長時間実行型
- 複雑な調査タスク（情報収集・統合）
- 監視・レポーティングエージェント
- バッチ処理・バックアップ作業

</div>
<div>

### 特殊ハードウェア要求型
- GPU活用の推論・ファインチューニング
- 高メモリ要求のモデル処理
- コンピュート集約的なシミュレーション

</div>
</div>

---

## 価格・コスト構造

### 料金体系

| コスト項目 | 説明 |
|-----------|------|
| **EC2コスト** | 選択したインスタンスタイプに基づく通常のEC2料金 |
| **コンピュート管理費用** | AgentCore Runtime による管理・オーケストレーション費 |
| **合計費用** | EC2費用 + 管理費用 |

### コスト最適化のポイント

- 用途に応じた最適なインスタンスタイプの選択
- リザーブドインスタンス（RI）の活用
- スポットインスタンスの検討（非本番環境）

---

## まとめ

### AgentCore Runtime instances の位置づけ

- **新しい選択肢**: サーバーレス方式に加えてEC2オプションが追加
- **エンタープライズ対応**: リソース集約的・長時間実行・特殊ハードウェア要件に対応
- **運用の簡素化**: インフラ管理が自動化され、開発者はエージェント開発に集中可能
- **グローバル対応**: 9リージョンで安定した運用が可能

### 次のステップ

1. 自社のエージェントワークロードを棚卸し（リソース要件・実行時間）
2. Runtime instances の適用候補を抽出
3. パイロットプロジェクトで動作検証
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-bedrock-agentcore-runtime-instances-generally-available/
- **AgentCore Release Notes**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html
- **The 2026 Guide to Amazon Bedrock AgentCore**: https://www.goml.io/blog/amazon-bedrock-agentcore
- **AWS Spring 2026 Updates**: https://www.nordhero.com/posts/aws-whatsnew-spring2026
- **Amazon Bedrock ドキュメント**: https://docs.aws.amazon.com/bedrock/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**