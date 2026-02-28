# AWS Network Firewall now supports firewall state change notifications through Amazon EventBridge

**カテゴリ:** What's New
**公開日:** 2026-02-27
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/firewall-state-change-notifications/](https://aws.amazon.com/about-aws/whats-new/2026/02/firewall-state-change-notifications/)

---

## 要約

AWS Network FirewallはAmazon EventBridgeとの統合により、ファイアウォールの状態変化とコンフィグレーション更新のリアルタイム通知機能を提供するようになりました。この機能により、ネットワークセキュリティインフラストラクチャの運用状況を可視化し、SNS、ITSM、SIEMシステムとの自動化されたワークフロー連携が実現できます。

## 詳細

### 新機能の概要

- AWS Network FirewallがAmazon EventBridgeと統合し、ファイアウォールの状態変化とコンフィグレーション更新のリアルタイム通知機能を提供するようになりました。

### 監視可能なイベント

- ファイアウォールのコンフィグレーション更新
- エンドポイントステータス修正
- AWS Managed Rules の変更
- Partner Managed Rules の変更

### 統合可能なサービス

- Amazon SNSを通じた通知送信
- ITサービスマネジメント（ITSM）システムへのチケット作成
- サードパーティのセキュリティ情報イベント管理（SIEM）ソリューションとの統合

### 利点

- ネットワークセキュリティインフラストラクチャの運用状況をリアルタイムで可視化
- コンフィグレーション変更や潜在的な問題に迅速に対応
- 運用チームの効率化と自動化

### 利用可能リージョン

- この機能はAWS Network FirewallとAmazon EventBridgeが利用可能なすべてのAWSリージョンで提供されています。

### 対象ユーザー

- ネットワークセキュリティの監視と自動化を強化したい組織
- ITSM/SIEMシステムとの統合を必要とする企業
- リアルタイムなセキュリティ運用を求める運用チーム
