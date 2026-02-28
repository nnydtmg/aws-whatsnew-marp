---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Network Firewall
ファイアウォール状態変化通知機能
Amazon EventBridge統合

**発表日: 2026年2月27日**

---

## 概要

### AWS Network Firewall の新機能

- **EventBridge 統合**: ファイアウォール状態変化とコンフィグレーション更新のリアルタイム通知
- **リアルタイム可視化**: ネットワークセキュリティインフラストラクチャの運用状況を即座に把握
- **自動化ワークフロー**: SNS、ITSM、SIEM システムとの統合による自動運用

### 対応イベントタイプ

- ファイアウォールコンフィグレーション変更
- エンドポイント状態修正
- AWS Managed Rules 変更
- Partner Managed Rules 変更

---

## 前提・背景

### ネットワークセキュリティの課題

- 従来: ファイアウォール操作をリアルタイムで監視できない
- 課題: コンフィグレーション変更への対応遅延
- 問題: セキュリティインシデント検出の遅れ

### 市場動向

- クラウド環境のセキュリティ監視ニーズの増加
- ITSM / SIEM との統合による運用効率化
- リアルタイムイベント駆動型アーキテクチャの普及

---

## 変更内容・新機能

### 1. EventBridge 統合

- AWS Network Firewall が直接 EventBridge に service events を送信
- イベントパターン: `source: aws.network-firewall`
- 対応イベント:
  - **Firewall Configuration Changed**: ファイアウォール設定変更
  - **Firewall Attachment Status Changed**: ファイアウォール接続状態変更
  - **Firewall Transit Gateway Attachment Status Changed**: TGW 接続状態変更

### 2. 自動化ワークフロー構築

- Amazon SNS による通知送信
- ITSM システムへのチケット自動作成
- SIEM ソリューションとの統合
- Lambda 関数による カスタム処理

---

## 効果・メリット

### セキュリティ運用の強化

- ✅ ファイアウォール操作を **リアルタイム監視**
- ✅ セキュリティインシデント対応の **迅速化**
- ✅ コンプライアンス要件への **対応強化**

### 運用効率化

- ✅ 手動監視作業の **自動化**
- ✅ チーム間連携の **効率化**
- ✅ インシデント対応時間の **短縮**

### 可視性向上

- ✅ セキュリティ構成の **完全な可視化**
- ✅ 変更履歴の **中央管理**
- ✅ ネットワークセキュリティ体制の **透明性**

---

## ユースケース

### エンタープライズ環境

- **金融機関**: コンプライアンス要件に基づくセキュリティ監視
- **医療機関**: 規制対応とセキュリティインシデント検知
- **製造業**: ネットワークセキュリティ体制の強化

### セキュリティ運用チーム

- SIEM システムへの自動ログ送信による一元管理
- ITSM システムとの統合による自動チケット作成
- Slack / Teams 等への通知送信による即座の報告

---

## まとめ

### AWS Network Firewall の進化

- EventBridge 統合により **リアルタイムセキュリティ監視** を実現
- ファイアウォール操作の **完全な可視化** が可能に
- **自動化ワークフロー** による運用効率化

### 導入時のポイント

1. EventBridge ルール定義の計画
2. 既存 ITSM / SIEM システムとの連携確認
3. 運用フローの構築と自動化スクリプト開発
4. セキュリティポリシーへの組み込み

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/firewall-state-change-notifications/
- **AWS Network Firewall Documentation**: https://docs.aws.amazon.com/network-firewall/
- **Amazon EventBridge Reference**: https://docs.aws.amazon.com/eventbridge/latest/ref/events-ref-network-firewall.html
- **EventBridge Events**: https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-integration.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
