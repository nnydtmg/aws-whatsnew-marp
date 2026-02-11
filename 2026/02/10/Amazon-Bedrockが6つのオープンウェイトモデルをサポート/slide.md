---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock
6つのオープンウェイトモデルをサポート

**発表日: 2026年2月10日**

---

## 概要

### 新たに追加された6つのオープンウェイトモデル

- **フロンティアレベルの推論能力**: DeepSeek V3.2、Kimi K2.5
- **自律コーディングの新標準**: GLM 4.7、MiniMax M2.1
- **本番環境向けの軽量選択肢**: Qwen3 Coder Next、GLM 4.7 Flash

### 主な特徴

- **大幅に低減された推論コスト**: フロンティアレベルの性能を低コストで提供
- **Project Mantle**: 新しい分散推論エンジンで高速化を実現
- **OpenAI API仕様互換**: 既存の統合を簡素化

---

## 前提・背景

### マーケットの課題

- エンタープライズAIワークロードの多様化（推論、コーディング、エージェンティックAI）
- オープンウェイトモデルの需要増加
- 高性能と低コストの両立の難しさ

### Amazon Bedrockの進化

- 2025年12月に18個のオープンウェイトモデルを追加
- ほぼ100個のサーバーレスモデルを提供
- 継続的なモデルの拡充と最適化

### Project Mantleの必要性

- 新モデルのオンボーディング時間を短縮
- 統一されたサービス品質制御を実現
- スケーラブルな推論インフラの構築

---

## 新しく利用可能なモデル

### 推論とエージェンティックインテリジェンス

#### DeepSeek V3.2
- 最先端の推論能力を提供
- エージェンティックワークフローに最適
- 複雑なマルチステップタスクに対応

#### Kimi K2.5
- エージェンティックインテリジェンスに特化
- 長期コンテキスト理解が可能
- 中国語テキスト処理に優れている

---

## 新しく利用可能なモデル（続）

### 自律コーディング（大規模出力ウィンドウ）

#### GLM 4.7
- 大規模な出力ウィンドウをサポート
- 自律コーディング機能を搭載
- 複雑なコード生成に対応

#### MiniMax M2.1
- 多言語プログラミングに対応
- 大規模出力ウィンドウで長いコード生成が可能
- エンタープライズコーディング向け

---

## 新しく利用可能なモデル（続）

### 本番環境向けの軽量・低コスト選択肢

#### Qwen3 Coder Next
- 軽量で費用効率的
- 本番環境デプロイメント向け設計
- 256Kコンテキストで長期コーディングセッション対応

#### GLM 4.7 Flash
- 軽量バージョンで高速推論
- 本番環境向けの信頼性
- コスト効率に優れている

---

## Project Mantle: 新しい分散推論エンジン

### 主な機能

- **簡素化されたオンボーディング**: 新モデルを迅速に追加可能
- **高性能サーバーレス推論**: 信頼性の高い推論エンジン
- **洗練されたサービス品質制御**: 要件に応じた細かい制御
- **OpenAI API互換性**: 既存のAPIコードをそのまま利用可能

### インパクト

- Amazon Bedrockへのモデル追加時間を短縮
- ユーザーの統合・移行の容易化
- スケーラブルなマルチモデル環境の実現

---

## メリット・効果

### コスト削減
- **大幅な推論コスト低減**: フロンティアレベル性能を低価格で提供
- **選択肢の拡充**: ユースケースに応じた最適なモデルを選択可能

### 機能面での強化
- **推論能力の向上**: 最先端のモデルで最新性能を実現
- **コーディング支援の充実**: 自律コーディングの新標準を達成
- **エージェンティックAI**: マルチステップタスク自動化が可能

### 運用面での改善
- **API互換性**: OpenAI API仕様対応で既存システムの活用が容易
- **サーバーレス**: インフラ管理の負担軽減
- **統一されたサービス品質**: 全モデルで安定した動作保証

---

## ユースケース

### 推論とデータ分析
- 複雑なビジネス分析
- リアルタイム意思決定支援
- エージェンティックインテリジェンスを活用した自動化

### ソフトウェア開発
- コード生成・補完
- バグ検出・修正の自動化
- ドキュメント生成の高速化

### 日本語・多言語処理
- GLMモデルによる中国語対応強化
- Kimiで日本語を含む長文処理
- グローバル企業のAI化支援

---

## 利用開始方法

### 要件
- AWS アカウント
- Amazon Bedrock へのアクセス権限
- OpenAI API互換エンドポイント利用時は追加設定不要

### ステップ
1. Amazon Bedrock コンソール にアクセス
2. 利用するモデルを選択（DeepSeek V3.2、Kimi K2.5など）
3. APIコールを実施または OpenAI API互換エンドポイント を利用

### 関連リソース
- [Amazon Bedrock コンソール](https://console.aws.amazon.com/bedrock/)
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/)
- [Project Mantle ドキュメント](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-mantle.html)

---

## まとめ

### Amazon Bedrock の進化

- **6つの最新オープンウェイトモデルが利用可能に**
  - DeepSeek V3.2、Kimi K2.5（推論・エージェンティックAI）
  - GLM 4.7、MiniMax M2.1（自律コーディング）
  - Qwen3 Coder Next、GLM 4.7 Flash（本番環境向け）

- **Project Mantle による革新的な推論基盤**
  - 迅速なモデル統合
  - 安定したサーバーレス推論
  - OpenAI API 互換性

### 次のステップ
1. 自社のユースケースに応じたモデル選定
2. パイロットプロジェクトでの評価開始
3. 本番環境への段階的展開

---

## 参考リソース

### 公式ドキュメント
- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-adds-support-six-open-weights-models/
- **Amazon Bedrock コンソール**: https://console.aws.amazon.com/bedrock/
- **Amazon Bedrock ドキュメント**: https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html
- **Project Mantle 詳細**: https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-mantle.html

### 関連情報
- **18モデル追加（2025年12月）**: https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-bedrock-fully-managed-open-weight-models/
- **AWS AI/ML 最新情報**: https://aws.amazon.com/ai/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**