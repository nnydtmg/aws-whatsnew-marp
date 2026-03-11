---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock
新しい可視性機能がもたらす推論パフォーマンスの監視

**発表日: 2026年3月10日**

---

## 概要

### 2つの新しいCloudWatchメトリクスが追加

- **TimeToFirstToken**: ストリーミングAPIのレイテンシを測定
- **EstimatedTPMQuotaUsage**: トークン/分（TPM）のクォータ消費量を追跡

### 何が変わったか

- 推論パフォーマンスとクォータ消費に対する可視性が向上
- クライアント側のインストルメンテーション不要
- すべての商用Bedrockリージョンでサポート
- APIの変更やオプトインは不要

---

## 前提・背景

### Amazon Bedrockの課題

- 推論パフォーマンスの可視性が限定的
- クォータ制限に達する前にアラーム設定が困難
- レイテンシの監視にクライアント側のコード実装が必要
- SLAベースラインの確立が複雑

### 市場の要求

- LLM応用の本番環境での信頼性向上
- マルチテナント環境でのレイテンシ変動への対応
- クォータ管理の最適化と予測可能性の向上

---

## 新機能1: TimeToFirstToken メトリクス

### 測定内容

- **対象API**: ConverseStream / InvokeModelWithResponseStream
- **測定対象**: リクエスト送信から最初のトークン受信までのレイテンシ
- **更新頻度**: 1分ごと

### 利用方法

- CloudWatchアラームを直接設定可能
- レイテンシ低下の監視が自動化
- SLAベースラインの確立が容易
- クライアント側のインストルメンテーション不要

---

## 新機能2: EstimatedTPMQuotaUsage メトリクス

### 追跡内容

- **計算対象**: 全推論API（Converse、InvokeModel、ConverseStream、InvokeModelWithResponseStream）
- **含まれる要素**: 
  - キャッシュ書き込みトークン
  - 出力バーンダウン乗数
- **更新頻度**: 1分ごと（正常に完了したリクエスト）

### 利用方法

- クォータ制限前のプロアクティブなアラーム設定
- モデル全体のクォータ消費量を追跡
- 使用率制限前にクォータ増加をリクエスト

---

## 効果・メリット

### パフォーマンス監視の向上

- リアルタイムのレイテンシ把握が可能
- SLA達成状況の可視化
- パフォーマンス低下の早期検知

### クォータ管理の最適化

- クォータ枯渇を事前回避
- コスト予測の精度向上
- 使用率の予測可能性が向上

### 運用効率の向上

- 追加のクライアント側実装が不要
- CloudWatch統合により既存ツールで即座に利用可能
- 追加費用なし（基盤となるモデル推論のみ課金）

---

## ユースケース

### 1. 高レイテンシ環境での品質管理

- リアルタイムチャットアプリケーションで応答時間を監視
- ユーザー体験を維持するためのSLA基準値を設定
- パフォーマンス低下時の自動アラーム

### 2. マルチモデル推論の最適化

- 複数モデルの同時利用時にクォータバランスを監視
- 各モデルのクォータ消費パターンを分析
- リソースの効率的な配分

### 3. エンタープライズ向け大規模デプロイ

- 複数チーム・プロジェクトのクォータ管理を一元化
- チャージバック・リソース配分の効率化
- クォータ増加のタイミングを予測

---

## 対応リージョンと仕様

### 対応範囲

- すべての商用Bedrockリージョンでサポート
- クロスリージョン推論プロファイル経由の利用も対応
- リージョン内推論も対応

### メトリクスの更新

- **更新間隔**: 1分
- **対象**: 正常に完了したリクエスト
- **計算方式**: 
  - TimeToFirstToken: ストリーミングレスポンス
  - EstimatedTPMQuotaUsage: すべての推論トークン

### 料金体系

- **追加費用**: なし
- **課金対象**: 消費する基盤となるモデル推論のみ
- **設定コスト**: APIの変更なし、オプトイン不要

---

## 設定・利用開始

### CloudWatch内で即座に利用可能

- 新しいメトリクスはCloudWatch内に自動で表示
- 追加の設定や有効化は不要
- カスタムダッシュボードで可視化可能

### アラーム設定の例

- **TimeToFirstToken**: 1000msを超えた場合にアラーム
- **EstimatedTPMQuotaUsage**: クォータの80%に達した場合にアラーム
- Amazon SNSとの連携で通知を自動化

---

## まとめ

### Amazon Bedrock の可視性が大幅に向上

- 推論パフォーマンスの詳細な監視が可能に
- クォータ管理の予測可能性が向上
- 本番環境での信頼性が強化

### 今すぐ活用できる

- APIの変更不要で即座に利用開始
- CloudWatchの既存スキルを活用
- コストの追加負担なし

### 次のステップ

1. CloudWatchダッシュボードで新メトリクスを確認
2. 自社のSLA基準値に合わせてアラーム設定
3. クォータ管理戦略の再検討と最適化

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-observability-ttft-quota/
- **Monitoring Amazon Bedrock ドキュメント**: https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring.html
- **Monitor Amazon Bedrock Agents using CloudWatch Metrics**: https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-agents-cw-metrics.html
- **Optimize your applications for scale and reliability on Amazon Bedrock**: https://aws.amazon.com/blogs/machine-learning/optimize-your-applications-for-scale-and-reliability-on-amazon-bedrock/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**