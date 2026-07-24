---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda、Managed Instances キャパシティプロバイダーのログ発行機能を追加

**発表日: 2026年7月24日**

---

## 概要

### 何が変わったか

- AWS Lambda Managed Instances のキャパシティプロバイダーがログ発行機能をサポート
- CloudWatch Logs にシステムログを自動配信
- インスタンスのライフサイクルイベントを可視化

---

## 前提・背景

### Lambda Managed Instances の課題

- EC2 インスタンス上でLambda関数を実行する場合、キャパシティ管理が複雑
- スケーリング動作やインスタンスの状態を把握しにくい
- トラブルシューティング時に十分な情報が得られない

### 市場の動向

- エンタープライズ向けサーバーレス化の進展
- 高容量・予測可能なワークロードのニーズ増加
- コスト最適化（Savings Plans、Reserved Instances）への関心

---

## 主な機能・変更内容

### キャパシティプロバイダーログ

- **ログ対象**: インスタンス起動、終了、ヘルスチェック等のライフサイクルイベント
- **ログ形式**: JSON 形式で構造化
- **ログ宛先**: Amazon CloudWatch Logs（デフォルト）
- **有効化**: すべてのキャパシティプロバイダーでデフォルト有効

### ログの活用

- CloudWatch Logs フィルタリング機能で失敗操作を特定
- プロビジョニングエラーを検出・解析
- スケーリング動作のトラブルシューティングに活用

---

## 設定・管理方法

### ログ設定の変更

以下のツールで設定が可能:

- **AWS Lambda Console**
- **AWS Lambda API**
- **AWS CLI**
- **AWS SAM**
- **AWS CloudFormation**

### ログ レベルの制御

システムログレベルを設定して、送信するログを制御可能

---

## 効果・メリット

### 運用効率の向上

- インスタンス動作の完全な可視化
- 問題検出と原因特定の迅速化
- スケーリング最適化のための情報取得

### コスト効率

- EC2 Savings Plans や Reserved Instances と組み合わせで最適化
- 予測可能なワークロードに適した構成
- CloudWatch Logs 標準料金のみ適用

### トラブルシューティング

- ログベースの問題診断
- パフォーマンス最適化への活用
- 監査・コンプライアンス要件への対応

---

## ユースケース

### エンタープライズ向け用途

- **金融機関**: 高容量トランザクション処理
- **e コマース**: ピーク時のスケーリング管理
- **IoT プラットフォーム**: 予測可能なイベント処理

### 適用条件

- 高容量で予測可能なワークロード
- EC2 インスタンスでの実行
- スケーリング活動の可視化が必要

---

## 利用可能なリージョン

- Lambda Managed Instances が利用可能なすべての AWS コマーシャルリージョン
- 2026年6月時点で、ほぼすべてのリージョンで利用可能
  - 例外: イスラエル（テルアビブ）、中東（バーレーン）、中東（UAE）、アジア太平洋（オークランド）

---

## まとめ

### 主要なポイント

1. **ログ可視化**: キャパシティプロバイダーのシステムログを CloudWatch Logs で一元管理
2. **デフォルト有効**: 新規作成時から自動的にログ発行開始
3. **柔軟な制御**: ログレベルや宛先を カスタマイズ可能
4. **エンタープライズ対応**: 高容量ワークロードの運用効率を向上

### 次のステップ

1. Lambda Managed Instances の キャパシティプロバイダーを作成
2. CloudWatch Logs でログを確認
3. ログレベルを最適化してコスト・可視性をバランス

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-lambda-managed-instances-logs/
- **AWS Lambda Managed Instances ドキュメント**: https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances.html
- **CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- **Lambda キャパシティプロバイダーのログ設定**: https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-monitoring-cwl.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**