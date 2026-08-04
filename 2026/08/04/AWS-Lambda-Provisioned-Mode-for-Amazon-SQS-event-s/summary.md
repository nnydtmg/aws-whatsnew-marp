# AWS Lambda プロビジョニングモード向け Amazon SQS イベントソースマッピングが最大10,000ポーラーをサポート

AWS Lambda Provisioned Mode for Amazon SQS event source mappings now supports up to 10,000 event pollers

**カテゴリ:** What's New
**公開日:** 2026-08-03T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-Lambda-provisioned-sqs-esm-max-pollers/)

---

## 要約

AWS Lambda のプロビジョニングモード向け Amazon SQS イベントソースマッピングが、イベントポーラーの上限を 2,000 個から 10,000 個に拡大し、ESM あたり最大 100,000 個の同時実行をサポートするようになりました。これにより、リアルタイム処理や大規模ワークロードなど、厳密なレイテンシーとスループット要件を持つミッションクリティカルなアプリケーションの構築が可能になります。

---

## このアップデートで何が変わったか

### 主な変更

- **イベントポーラー上限**: 2,000個 → **10,000個**（5倍拡大）
- **同時実行数**: ESM あたり最大 **100,000個**
- **アーキテクチャ**: 複数 ESM への分散が不要に

### パフォーマンス指標

| 項目 | 従来 | 新機能 | 改善率 |
|------|------|--------|--------|
| 最大ポーラー数 | 2,000個 | 10,000個 | 5倍 |
| 最大同時実行数 | 20,000個 | 100,000個 | 5倍 |
| スケーリング速度 | 基準値 | 3倍高速 | 3倍 |

---

## 対象ユーザー

### このアップデートが有効なユースケース

- **リアルタイム注文処理**: e-commerce プラットフォームの決済処理
- **金融取引パイプライン**: 取引システムとの連携
- **IoT テレメトリ取り込み**: 大規模なセンサーデータストリーム
- **大規模ファンアウトワークロード**: バッチ処理の並列実行
- **ミッションクリティカルなアプリケーション**: 高可用性と信頼性が必須

---

## 詳細情報

### 背景

AWS Lambda の Provisioned Mode for SQS ESM は 2025年11月にリリースされ、以下の特徴を提供していました：

- **3倍高速なスケーリング**: 自動スケーリングが従来比3倍高速
- **16倍高い同時実行性**: 最大20,000 concurrent executions
- **予測可能なレイテンシ**: 最小・最大ポーラー設定で制御

しかし、最大 2,000 個のポーラー数に制限されていたため、さらに大規模なワークロードには複数の ESM に分散する必要がありました。

### 今回の拡大内容

#### 1. 最大ポーラー数の拡大（2,000個 → 10,000個）

- **5倍の増加**により、単一 ESM で大規模ワークロード処理が可能
- 複数 ESM への分散が不要になり、アーキテクチャが簡素化
- 管理ポイントが減少し、運用コストを削減

#### 2. 最大同時実行数の向上（100,000 concurrent invocations per ESM）

- **スループット**: 最大 2 GBps の集約トラフィック対応
- **レイテンシ**: ミリ秒単位での予測可能な処理遅延
- **信頼性**: ミッションクリティカルなアプリケーションに対応

#### 3. 動的スケーリング

- **最小・最大ポーラー設定**: スループット最適化が可能
- **自動スケーリング**: トラフィック変動に応じた自動調整
- **コスト最適化**: 必要なリソースのみをプロビジョニング

### 実装方法

以下のツールで Provisioned Mode を有効化可能：

- **ESM API**: プログラマティックな設定
- **AWS Management Console**: ウェブUIでの直感的操作
- **AWS CLI**: コマンドラインツール
- **AWS SDK**: 各種言語の SDK
- **AWS CloudFormation**: インフラストラクチャコード化
- **AWS SAM**: Serverless Application Model

### 課金モデル

- **課金単位**: EPU (Event Poller Unit)
- **料金体系**: ポーラーの使用量ベースの従量制課金
- **詳細**: [AWS Lambda Pricing](https://aws.amazon.com/lambda/pricing/) を参照

### 提供地域

- **一般提供**: AWS のすべてのコマーシャルリージョン

---

## メリットと効果

### 1. アーキテクチャの簡素化

- **単一 ESM 構成**: 複数 ESM への分散が不要
- **管理コスト削減**: 分散管理の複雑性を低減
- **一元管理**: 単一ポイントでのモニタリングと制御

### 2. パフォーマンス向上

- **高速スケーリング**: 3倍高速な自動スケーリング
- **高い同時実行性**: 100,000 concurrent invocations
- **予測可能なレイテンシ**: 設定による制御可能性

### 3. ビジネスメリット

- **ダウンタイム削減**: 信頼性の高いイベント処理
- **顧客体験向上**: リアルタイム処理による即座の応答
- **ビジネス成長対応**: スケーラビリティの確保

---

## 利用開始ガイド

### 基本的なステップ

1. **ドキュメント確認**: [Lambda ESM Documentation](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#sqs-provisioned-mode) で詳細を確認
2. **設定**: AWS Console または CLI で最小・最大ポーラー数を指定
3. **テスト**: 本番環境前に十分なテストを実施
4. **モニタリング**: CloudWatch でパフォーマンスを監視
5. **最適化**: 設定値の調整とチューニング

### 推奨リソース

- [Lambda ESM Documentation](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#sqs-provisioned-mode)
- [AWS Lambda Pricing](https://aws.amazon.com/lambda/pricing/)
- [AWS Serverless Documentation](https://docs.aws.amazon.com/serverless-application-model/)
- [AWS Serverless Office Hours Video](https://www.youtube.com/watch?v=uwtOT_7I-fc)

---

## 関連アップデート

### 前回の Provisioned Mode リリース (2025年11月)

- [AWS Lambda announces Provisioned Mode for SQS event source mapping (ESM)](https://aws.amazon.com/about-aws/whats-new/2025/11/aws-lambda-provisioned-mode-sqs-esm)

### 関連技術

- Amazon SQS: メッセージキューイングサービス
- AWS Lambda: サーバーレスコンピュートサービス
- イベントソースマッピング (ESM): Lambda とイベントソースの統合

---

## 参考リンク

- **AWS What's New** (元記事): https://aws.amazon.com/about-aws/whats-new/2026/08/aws-Lambda-provisioned-sqs-esm-max-pollers/
- **Lambda ESM ドキュメント**: https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
- **AWS Lambda Pricing**: https://aws.amazon.com/lambda/pricing/
- **AWS Serverless**: https://aws.amazon.com/serverless/
- **Serverless Office Hours**: https://www.youtube.com/watch?v=uwtOT_7I-fc

---

*このサマリーは AWS What's New の発表内容に基づいており、2026年8月3日時点の情報です。*