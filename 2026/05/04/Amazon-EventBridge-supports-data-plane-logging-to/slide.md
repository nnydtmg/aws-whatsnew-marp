---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EventBridge supports data plane logging to AWS CloudTrail

CloudTrailへのデータプレーンログ記録がサポート

**発表日: 2026年5月4日**

---

## 概要

### 3つの主要な変更点

- **データプレーンログ対応**: EventBridge PutEvents APIの呼び出しがCloudTrailに記録
- **イベントバス活動の可視性向上**: API呼び出し、リクエスター情報、IPアドレス、タイムスタンプを追跡
- **セキュリティと運用効率**: 監査、コンプライアンス、トラブルシューティングを強化

---

## 前提・背景

### 背景：CloudTrailのコントロールプレーン vs データプレーン

- **従来のサポート**: EventBridge管理APIのみ（作成、削除など）
- **新機能**: データプレーン操作（PutEvents）も対象に拡大
- **ニーズ**: イベント駆動型アプリケーションの完全な監査証跡が必要

### 対応シーン

- セキュリティ監査とコンプライアンス要件
- 運用トラブルシューティングと問題調査
- ガバナンスとアクセス制御の検証

---

## 主な機能

### 1. CloudTrailに記録される情報

- **API呼び出し**: EventBridge APIの実行状況
- **リクエスター情報**: 誰が、いつ、どのような操作を実行したか
- **IPアドレス**: リクエスト元のIPアドレス
- **タイムスタンプ**: 正確な実行時刻

### 2. 設定方法

- AWS CloudTrail Console から設定
- CloudTrail APIs を使用した自動化設定
- イベントバス単位での有効・無効切り替え

---

## 利用可能リージョン

- ✅ すべての商用AWSリージョン
- ✅ AWS GovCloud (US) リージョン
- ✅ AWS中国 (北京) リージョン（Sinnet運営）
- ✅ AWS中国 (寧夏) リージョン（NWCD運営）

---

## 効果・メリット

### セキュリティと監査

- EventBridge経由のデータ処理を完全に追跡可能
- 不正アクセスや異常操作の検出
- コンプライアンス要件への対応

### 運用効率

- PutEvents APIの失敗原因をCloudTrailで追跡
- 本番環境のトラブルシューティング時間を短縮
- イベント配信の信頼性向上

### ガバナンス

- IAMベースのアクセス制御を可視化
- API使用パターンの分析
- 利用状況のレポーティング

---

## ユースケース

### 1. 金融機関のコンプライアンス対応

トランザクション処理のすべてのステップを監査証跡として記録

### 2. SaaS企業の問題調査

カスタマーのイベント処理が失敗した場合の根本原因分析

### 3. エンタープライズのセキュリティ監視

EventBridgeを使用したデータパイプラインへのアクセス管理

---

## 実装のポイント

### 必要な準備

1. CloudTrailトレイルが作成されている
2. CloudTrail S3バケットの権限設定
3. EventBridgeイベントバスへのCloudTrail設定権限

### 注意事項

- CloudTrailの費用が増加する可能性
- S3ストレージの容量計画が必要
- ログの保持期間ポリシーの設定

---

## まとめ

### EventBridge × CloudTrail統合の意義

- イベント駆動アーキテクチャの完全な可視性を実現
- エンタープライズグレードの監査とコンプライアンス対応
- セキュリティと運用効率の両立

### 次のステップ

1. 現在のEventBridge使用環境を確認
2. CloudTrail設定の有効化を検討
3. ログ分析と監視体制の構築

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-eventbridge-data-aws-cloudtrail/
- **EventBridge × CloudTrail ドキュメント**: https://docs.aws.amazon.com/eventbridge/latest/userguide/logging-using-cloudtrail.html
- **CloudTrail ユーザーガイド**: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/
- **Amazon EventBridge ドキュメント**: https://docs.aws.amazon.com/eventbridge/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
