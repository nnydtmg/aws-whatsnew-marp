---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon MWAA ServerlessがAmazon EventBridgeへの通知機能をサポート

**発表日: 2026年6月11日**

---

## 概要

### 何が変わったか

- **Amazon MWAA Serverless が Amazon EventBridge への通知機能をサポート**
  - ワークフロー状態変化イベントをリアルタイムで送信
  - タスク状態変化イベントをリアルタイムで送信

- **ワークフロー状態遷移のキャプチャ**
  - 開始、実行中、成功、失敗の状態を検出

- **タスク状態変化のキャプチャ**
  - スケジュール済み、成功、失敗、再試行待ちを検出

---

## 前提・背景

### これまでの課題

- ワークフロー実行の監視には**カスタムポーリングロジック**が必要
- 手動観察による監視は非効率で**スケーラビリティに欠ける**
- リアルタイムアラートや自動対応が困難
- 監査ログの収集が複雑

### 市場の動向

- イベント駆動型アーキテクチャの需要増加
- ワークフロー自動化ニーズの高まり
- エンタープライズにおけるコンプライアンス要件の強化

---

## 主な変更内容と新機能

### EventBridge との統合

- **ワークフロー状態イベントの送信**
  - 各状態遷移を Amazon EventBridge に自動送信
  - リアルタイム通知で監視

- **タスク状態イベントの送信**
  - 個別タスクの状態変化を検出
  - 細粒度の制御が可能

### 対応する状態遷移

| 状態 | ワークフロー | タスク |
|------|----------|------|
| 開始 | ✅ | - |
| 実行中 | ✅ | - |
| スケジュール済み | - | ✅ |
| 成功 | ✅ | ✅ |
| 失敗 | ✅ | ✅ |
| 再試行待ち | - | ✅ |

---

## 利用可能なユースケース

### 1. 失敗時のアラート自動トリガー

- 本番ワークフロー失敗時に**自動通知**
- SNS、メール、Slack 連携
- 人的介入の遅れを削減

### 2. 依存パイプラインの自動再開

- 上流ワークフロー成功時に**自動連鎖実行**
- 複数ワークフロー間の依存関係を自動管理
- 手動トリガーが不要

### 3. コンプライアンスログの自動記録

- 状態遷移を **Amazon S3 に自動保存**
- 監査トレイルとしての証跡
- 規制要件への対応

---

## 効果・メリット

### 運用効率の向上

- ✅ ポーリングロジック不要 → **開発工数削減**
- ✅ 自動アラート → **対応時間短縮**
- ✅ 監査ログ自動収集 → **コンプライアンス対応簡素化**

### コスト最適化

- ✅ カスタム監視コード削減 → **開発・保守コスト低減**
- ✅ EventBridge の Pay-as-you-go モデル → **使用量ベースの課金**
- ✅ インフラ管理不要 → **運用コスト削減**

### 信頼性向上

- ✅ リアルタイム監視 → **問題検出速度向上**
- ✅ 自動復旧パイプライン → **ダウンタイム削減**
- ✅ 完全な監査証跡 → **信頼性と透明性向上**

---

## 技術仕様

### サポートリージョン

- Amazon MWAA Serverless が利用可能な**すべての AWS リージョン**
  - US East (N. Virginia): us-east-1
  - US East (Ohio): us-east-2
  - Europe (Ireland): eu-west-1
  - Europe (London): eu-west-2
  - Europe (Paris): eu-west-3
  - Europe (Frankfurt): eu-central-1
  - Europe (Stockholm): eu-north-1
  - その他多数

### イベント形式

- Amazon EventBridge 標準フォーマット
- JSON ペイロード
- JSON Schema 対応

---

<!-- _class: section -->

# 次のステップ

実装開始のポイント

---

## 実装の流れ

### ステップ1: EventBridge ルールの設定

1. AWS Management Console でアクセス
2. EventBridge コンソール → ルール作成
3. ソース: Amazon MWAA Serverless を選択
4. パターン: 必要な状態遷移をフィルタ

### ステップ2: ターゲット設定

- SNS、Lambda、SQS など選択
- カスタムアクション定義
- テスト実行

### ステップ3: 本番環境への展開

1. パイロット環境でテスト
2. 本番ワークフローに適用
3. 監視と調整

---

## ベストプラクティス

### セキュリティ

- ✅ IAM ポリシーで最小権限を設定
- ✅ EventBridge ルールのアクセス制御
- ✅ 機密情報はシークレッツマネージャーで管理

### 運用

- ✅ ルールの命名規則を統一
- ✅ CloudWatch で EventBridge メトリクス監視
- ✅ 定期的なログレビュー

### コスト最適化

- ✅ 不要なルールを定期削除
- ✅ EventBridge イベント数の監視
- ✅ 料金計画に基づいた ルール数調整

---

## まとめ

### Amazon MWAA Serverless EventBridge 統合のポイント

| 項目 | 概要 |
|------|------|
| **機能** | ワークフロー・タスク状態をリアルタイム送信 |
| **メリット** | 自動アラート、監査ログ、依存パイプライン自動化 |
| **対象ユーザー** | データエンジニアリングチーム、プラットフォームチーム |
| **提供開始** | 2026年6月11日 |
| **料金** | EventBridge 課金に基づく |

### 推奨アクション

1. **評価**: 既存ワークフローで活用可能なユースケースを特定
2. **パイロット**: 小規模環境で実装テスト
3. **展開**: 本番ワークフローへの段階的展開

---

## 参考リソース

### 公式ドキュメント

- [Amazon MWAA Serverless what's new](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-mwaa-serverless-eventbridge/)
- [Monitoring Amazon MWAA Serverless](https://docs.aws.amazon.com/mwaa/latest/mwaa-serverless-userguide/monitoring.html)
- [Amazon MWAA Serverless events](https://docs.aws.amazon.com/eventbridge/latest/ref/events-ref-airflow-serverless.html)
- [Amazon EventBridge ユーザーガイド](https://docs.aws.amazon.com/eventbridge/)

### 関連サービス

- [Amazon MWAA](https://aws.amazon.com/managed-workflows-for-apache-airflow/)
- [Amazon EventBridge](https://aws.amazon.com/eventbridge/)
- [Apache Airflow Documentation](https://airflow.apache.org/docs/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**