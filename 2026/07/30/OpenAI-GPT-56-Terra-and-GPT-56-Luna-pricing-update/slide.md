---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock上でOpenAI GPT-5.6 TerraとLunaの価格が更新

**発表日: 2026年7月30日**

---

## 概要

### 3つの主な変更点

- **GPT-5.6 Terraの価格更新**: 日常的な本番環境の作業向けにバランスの取れたモデルとして提供
- **GPT-5.6 Lunaの価格更新**: 高速で手頃な価格のモデルとして大量推論タスク向けに最適化
- **複数リージョンでの利用可能化**: US East（N. Virginia）、US East（Ohio）、US West（Oregon）で利用可能

---

## 前提・背景

### 市場の背景

- 生成AI活用企業の増加により、多様なユースケースに対応するモデルの需要が高まる
- コスト効率とパフォーマンスのバランスを求める企業ニーズの増加
- 大量推論タスクでのレイテンシーとコスト最適化への要求

### OpenAIとAWSの提携の進展

- 2026年7月9日: GPT-5.6 Sol、Terra、Lunaが一般提供開始
- 2026年7月30日: Terra と Luna の価格が更新され、より競争力のある価格設定に
- Amazon Bedrock上の価格がOpenAI第一者価格と一致

---

## GPT-5.6 モデルファミリーの比較

### モデル特性

| モデル | 用途 | 特徴 | 位置づけ |
|--------|------|------|----------|
| **GPT-5.6 Sol** | 高度な推論タスク | 推論能力が最も高い | エンタープライズ向け |
| **GPT-5.6 Terra** | 本番環境の日常作業 | GPT-5.5レベルの性能をより低コストで | バランス型 |
| **GPT-5.6 Luna** | 大量推論・リアルタイムアプリ | 低レイテンシー・低コスト | コスト最適化型 |

---

## 価格設定の詳細

<!-- _class: small -->

### Amazon Bedrock上のGPT-5.6モデル価格（2026年7月30日更新）

| モデル | 入力トークン/1M | キャッシュ書き込み/1M | キャッシュ読み取り/1M | 出力トークン/1M |
|--------|-----------------|----------------------|----------------------|------------------|
| **GPT-5.6 Sol** | $5.50 | $6.88 | $0.55 | $33.00 |
| **GPT-5.6 Terra** | $2.75 | $3.44 | $0.28 | $16.50 |
| **GPT-5.6 Luna** | $1.10 | $1.38 | $0.11 | $6.60 |

### プロンプトキャッシングのメリット

- キャッシュ読み取り時の割引: **90%減**
- キャッシュ保持期間: 最低30分
- エージェント実行時のコスト効率大幅向上

---

## 利用可能リージョン

### リージョン展開状況

<div class="columns">
<div>

### GPT-5.6 Sol

- **US East (N. Virginia)**
- **US East (Ohio)**

</div>
<div>

### GPT-5.6 Terra

- **US East (N. Virginia)**
- **US East (Ohio)**
- **US West (Oregon)**

</div>
<div>

### GPT-5.6 Luna

- **US East (N. Virginia)**
- **US East (Ohio)**
- **US West (Oregon)**

</div>
</div>

---

## 主な利点とメリット

### エンタープライズ向けのメリット

- **コスト最適化**: 利用場面に応じてモデルを選択可能
- **AWSコミットメント統合**: 使用量が既存AWSコミットメントにカウント
- **セキュリティ**: Bedrockのエンタープライズセキュリティ機能を活用

### 開発者向けの利点

- **シンプルなAPI**: Amazon Bedrock Converse APIで統一インターフェース
- **プロンプトキャッシング**: 長文入力のコスト削減（90%割引）
- **柔軟な選択**: ユースケース別の最適なモデル選定が可能

---

## ユースケース

### GPT-5.6 Terra の活用例

- カスタマーサポートの自動応答システム
- ドキュメント処理・分類業務
- データ分析・ビジネスインサイト生成
- Webアプリケーション内のAI機能統合

### GPT-5.6 Luna の活用例

- 大規模テキスト分類（画像タグ付け、感情分析）
- リアルタイムチャットボット
- API応答の自動要約
- バッチ処理による大量推論

---

## まとめ

### このアップデートが重要な理由

1. **多層的なモデル選択肢**: 異なるユースケースに対応した3つのモデル
2. **コスト競争力**: OpenAI第一者価格と同等の価格設定
3. **エンタープライズ統合**: AWSコミットメントとの統合により企業導入が容易
4. **グローバル対応**: 複数リージョンでの利用が可能

### 推奨される次のステップ

1. 自社のAI活用シーンを整理（推論精度重視 vs コスト重視）
2. Bedrockコンソールで各モデルの無料試用を実施
3. 適切なモデルの選択と本番環境への段階的展開
4. プロンプトキャッシング機能の活用でコスト最適化

---

## 参考リソース

- **AWS What's New**: [OpenAI GPT-5.6 Terra and GPT-5.6 Luna pricing update on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/07/openai-gpt-terra-luna-pricing-bedrock/)
- **AWS Blog**: [OpenAI GPT-5.6 Sol, Terra, and Luna are now generally available on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/openai-gpt-5-6-sol-terra-and-luna-are-now-generally-available-on-amazon-bedrock)
- **Amazon Bedrock ドキュメント**: [Amazon Bedrock Pricing](https://aws.amazon.com/bedrock/pricing)
- **モデルカード**: [GPT-5.6 Luna - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-56-luna.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
