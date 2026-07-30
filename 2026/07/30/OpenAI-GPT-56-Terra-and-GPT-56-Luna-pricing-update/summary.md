# Amazon Bedrock上でOpenAI GPT-5.6 TerraとLunaの価格が更新

OpenAI GPT-5.6 Terra and GPT-5.6 Luna pricing update on Amazon Bedrock

**カテゴリ:** What's New  
**公開日:** 2026年7月30日  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/openai-gpt-terra-luna-pricing-bedrock/)

---

## 概要

Amazon Bedrock上でOpenAIのGPT-5.6 TerraおよびGPT-5.6 Lunaの価格が更新されました。バランスの取れたモデル（Terra）と高速な低コストモデル（Luna）がそれぞれ複数のリージョンで利用可能になり、コスト効率と性能のバランスを求める企業、および大量推論タスクでレイテンシーとコストを最適化したい組織に最適なソリューションとなっています。

---

## このアップデートで何が変わったか

### 価格の更新

- **GPT-5.6 Terra**: 日常的な本番環境の作業向けにバランスの取れたモデルとして、GPT-5.5レベルのパフォーマンスをより低いコストで提供
- **GPT-5.6 Luna**: 高速で手頃な価格のモデルとして、レイテンシーとトークンあたりのコストが重要な大量推論タスク向けに設計
- **GPT-5.6 Sol**: 価格は変更されていません

### リージョン展開

- **GPT-5.6 Sol**: US East（N. Virginia）、US East（Ohio）
- **GPT-5.6 Terra と Luna**: US East（N. Virginia）、US East（Ohio）、US West（Oregon）

### 価格体系

#### 2026年7月30日の更新価格

| モデル | 入力トークン/1M | キャッシュ書き込み/1M | キャッシュ読み取り/1M | 出力トークン/1M |
|--------|-----------------|----------------------|----------------------|------------------|
| GPT-5.6 Sol | $5.50 | $6.88 | $0.55 | $33.00 |
| GPT-5.6 Terra | $2.75 | $3.44 | $0.28 | $16.50 |
| GPT-5.6 Luna | $1.10 | $1.38 | $0.11 | $6.60 |

---

## 対象ユーザーと利用シーン

### GPT-5.6 Terra の推奨利用シーン

- **カスタマーサポート**: 自動応答システムとして高度な理解が必要な場合
- **ドキュメント処理**: テキスト分類、要約、翻訳などの複雑なタスク
- **データ分析**: ビジネスインサイト生成、レポート作成
- **Web/アプリケーション統合**: AI機能を組み込んだシステムの構築

### GPT-5.6 Luna の推奨利用シーン

- **テキスト分類**: 大量のテキストの高速な感情分析やカテゴリ分類
- **リアルタイムチャットボット**: 低レイテンシーが必須のチャットシステム
- **API応答**: 自動要約、シンプルなテキスト処理
- **バッチ処理**: 大規模な推論ジョブの経済的な実行

---

## 主な利点

### エンタープライズ向け

1. **コスト最適化**: 用途に応じてモデルを選択でき、不要な高コスト負荷を回避
2. **AWSコミットメント統合**: 使用量が既存のAWSコミットメントにカウント、決算管理が簡素化
3. **セキュリティ**: Amazon Bedrockのエンタープライズセキュリティ機能（VPC統合、監査ログ等）を活用可能
4. **OpenAI価格と一致**: 第一者価格と同じため、別途API契約が不要

### 開発者向け

1. **統一インターフェース**: Amazon Bedrock Converse APIで複数モデルを同じインターフェースで利用
2. **プロンプトキャッシング**: 長文入力時のコスト削減（キャッシュ読み取り時90%割引、最低30分保持）
3. **柔軟な選択**: ユースケース別に最適なモデルを段階的に切り替え可能
4. **簡単な統合**: 既存のAWS環境への統合が容易

---

## プロンプトキャッシングによるコスト削減

### キャッシング機能の特徴

- **キャッシュ読み取り割引**: 従来価格の10%で利用可能（90%削減）
- **保持時間**: 30分以上（複数呼び出しの間に十分な時間）
- **エージェント実行**: 単一エージェント実行時の複数APIコールに適用可能
- **スケーリング効果**: ワークロード拡大時のコスト圧増を抑制

---

## 技術仕様

### GPT-5.6 モデルの共通仕様

| 項目 | 仕様 |
|------|------|
| コンテキストウィンドウ | 272,000トークン |
| 最大出力トークン | 128,000トークン |
| API インターフェース | Amazon Bedrock Converse API |
| セキュリティ | ハードウェア実装セキュリティ、ゼロオペレータアクセス |
| データ処理 | インリージョン処理 |

---

## 導入のステップ

### 1. 準備段階

- 自社のAI活用シーンを整理
  - 推論精度重視のシーン → Terra検討
  - コスト・レイテンシー重視のシーン → Luna検討
- 現在のOpenAI API利用状況をレビュー

### 2. 評価段階

- AWS Bedrockコンソールで各モデルの無料試用を実施
- 自社のプロンプトやデータでのパフォーマンス検証
- レイテンシーとコストの測定

### 3. 移行段階

- パイロットプロジェクトの実施（小規模本番環境で検証）
- 本番環境への段階的展開
- 既存AWSコミットメントとの統合

### 4. 最適化段階

- プロンプトキャッシング機能の活用
- モデル間の切り替え最適化
- コスト監視とチューニング

---

## よくある質問

### Q: GPT-5.6 Sol と Terra の使い分けは？

**A:** Sol は高度な推論（コーディング、研究、セキュリティ分析）向け、Terra は日常的なテキスト処理向けです。コスト面では Terra が約50%安いため、用途に応じて選択してください。

### Q: Luna はどのような場合に使うべき？

**A:** テキスト分類、感情分析、リアルタイムチャットなど、低レイテンシーと低コストが重要なタスクに最適です。推論精度が Terra や Sol ほど高くない点はご理解ください。

### Q: 既存の OpenAI API 契約は継続？

**A:** Amazon Bedrock 経由の利用に切り替えることで、AWSコミットメントの活用とエンタープライズセキュリティを得られます。段階的な移行をお勧めします。

---

## 参考リンク

- **元記事**: [OpenAI GPT-5.6 Terra and GPT-5.6 Luna pricing update on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/07/openai-gpt-terra-luna-pricing-bedrock/)
- **AWS Blog**: [OpenAI GPT-5.6 Sol, Terra, and Luna are now generally available on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/openai-gpt-5-6-sol-terra-and-luna-are-now-generally-available-on-amazon-bedrock)
- **Amazon Bedrock Pricing**: [https://aws.amazon.com/bedrock/pricing](https://aws.amazon.com/bedrock/pricing)
- **Amazon Bedrock Documentation**: [https://docs.aws.amazon.com/bedrock/](https://docs.aws.amazon.com/bedrock/)
- **GPT-5.6 Luna Model Card**: [https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-56-luna.html](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-56-luna.html)

---

**作成日**: 2026年7月30日  
**最終更新**: 2026年7月31日
