---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Lambda プロビジョニングモード向け Amazon SQS イベントソースマッピングが最大10,000ポーラーをサポート

イベントポーラー上限が5倍に拡大

**発表日: 2026年8月3日**

---

## 概要

### 主な変更ポイント

- **イベントポーラー上限**: 2,000個 → **10,000個**（5倍拡大）
- **同時実行数**: ESM あたり最大 **100,000個**をサポート
- **スケーラビリティ**: 複数 ESM への分散が不要に
- **対象**: AWS Lambda Provisioned Mode for Amazon SQS

### このアップデートで実現できること

- リアルタイム処理や大規模ワークロード対応
- 厳密なレイテンシー要件への対応
- ミッションクリティカルなアプリケーションの構築

---

## 前提・背景

### 従来の課題

- ESM（イベントソースマッピング）の最大ポーラー数が 2,000個に制限
- 大規模なワークロードは複数の ESM に分散する必要
- 管理の複雑性が増加

### 市場の動向

- **リアルタイム処理の需要増加**: 注文処理、金融取引など
- **スケーラビリティへの要求**: 予測不可能なトラフィック急増への対応
- **ミッションクリティカルなアプリケーション**: ダウンタイムや遅延が直接ビジネス影響

### Provisioned Mode の既知の利点

- **3倍高速なスケーリング**: 自動スケーリングが従来比 3倍高速
- **16倍高い同時実行数**: 最大 20,000 同時実行（デフォルト比）
- **予測可能なレイテンシ**: 最小・最大ポーラー設定で制御可能

---

## 変更内容・新機能

### 1. イベントポーラー上限の拡大

- **新上限**: 10,000個（従来: 2,000個）
- **増加率**: 5倍の拡大
- **効果**: 単一 ESM で大規模ワークロード処理が可能

### 2. 最大同時実行数の向上

- **新上限**: 100,000 concurrent invocations per ESM
- **スループット**: 最大 2 GBps の集約トラフィック対応
- **レイテンシ**: ミリ秒レベルの予測可能な遅延

### 3. 設定と管理

- **最小・最大ポーラー設定**: スループット最適化が可能
- **動的スケーリング**: トラフィック変動に自動対応

---

## 対象ユースケース

### ミッションクリティカルなアプリケーション

- **リアルタイム注文処理**: e-commerce プラットフォーム
- **金融取引パイプライン**: トランザクション処理システム
- **IoT テレメトリ取り込み**: 大規模センサーデータ処理
- **大規模ファンアウトワークロード**: バッチ処理の並列化

---

## 実装方法

### 設定方法

- **ESM API** を使用した API 呼び出し
- **AWS Management Console** でのコンソール設定
- **AWS CLI** コマンドラインツール
- **AWS SDK** のプログラマティック設定
- **AWS CloudFormation** によるインフラストラクチャコード化
- **AWS SAM** (Serverless Application Model)

### 課金

- **課金単位**: EPU (Event Poller Unit)
- **料金**: ポーラーの使用量ベースの従量制課金
- **詳細**: [AWS Lambda Pricing](https://aws.amazon.com/lambda/pricing/) 参照

---

## メリット・効果

### アーキテクチャの簡素化

- **複数 ESM 不要**: 単一 ESM で大規模ワークロード対応
- **管理コストの削減**: 分散管理の複雑性を低減
- **一元管理**: 単一ポイントでのモニタリングと制御

### パフォーマンス向上

- **高速スケーリング**: 3倍高速な自動スケーリング
- **高い同時実行性**: 100,000 concurrent invocations
- **予測可能なレイテンシ**: 設定による制御可能性

### ビジネスメリット

- **ダウンタイム削減**: 信頼性の高いイベント処理
- **顧客体験の向上**: リアルタイム処理による即座の応答
- **スケーラビリティ**: ビジネス成長に対応可能

---

## 利用開始

### 基本的なステップ

1. **AWS Lambda ESM ドキュメント確認**: Provisioned Mode の詳細
2. **設定** (最小・最大ポーラー数を指定)
3. **テスト**: 本番環境前の検証
4. **モニタリング**: CloudWatch でパフォーマンス監視
5. **最適化**: 設定値の調整とチューニング

### 推奨リソース

- [Lambda ESM Documentation](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#sqs-provisioned-mode)
- [AWS Lambda Pricing](https://aws.amazon.com/lambda/pricing/)
- [AWS Serverless Documentation](https://docs.aws.amazon.com/serverless-application-model/)

---

## まとめ

### キーポイント

- AWS Lambda の Provisioned Mode が **最大 10,000 イベントポーラー** に対応
- **ESM あたり 100,000 同時実行** が可能に
- **複数 ESM の分散が不要** → 管理の簡素化
- **ミッションクリティカルなアプリケーション** に最適

### 次のステップ

1. 既存のワークロードで ESM 構成を評価
2. Provisioned Mode への移行計画立案
3. テスト環境での検証実施
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-Lambda-provisioned-sqs-esm-max-pollers/
- **Lambda ESM ドキュメント**: https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
- **AWS Lambda Pricing**: https://aws.amazon.com/lambda/pricing/
- **AWS Serverless**: https://aws.amazon.com/serverless/

### 関連する最近の動向

- **AWS Lambda event source mappings**: https://www.youtube.com/watch?v=uwtOT_7I-fc
- **Provisioned Mode 発表** (2025年11月): https://aws.amazon.com/about-aws/whats-new/2025/11/aws-lambda-provisioned-mode-sqs-esm

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**