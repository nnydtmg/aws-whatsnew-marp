---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Quick が VPC 接続での MCP 接続をサポート

プライベートネットワーク上のホストサーバーと安全に統合

**発表日: 2026年6月1日**

---

## 概要

### Amazon Quick の VPC 接続機能

- **VPC 対応**: プライベートネットワーク上でホストされている MCP サーバーへの VPC 接続をサポート
- **セキュアな統合**: インターネットに公開することなく、安全に AI ワークフローに統合
- **エンタープライズ対応**: 独自アプリケーションやカスタムデータソースを接続可能

### 主なメリット

- 機密データをインターネットに公開しない
- プライベートホスト MCP サーバーの完全サポート
- 全 AWS リージョンで利用可能

---

## 前提・背景

### これまでの課題

- MCP 対応は公開インターネット経由のみ
- サードパーティホスト型サーバーに限定
- プライベートなデータソースの統合が困難
- セキュリティとプライバシーのリスク

### 市場の動向

- エンタープライズの AI 活用拡大
- プライベートデータの安全な活用ニーズ
- Model Context Protocol (MCP) の採用増加
- クラウドセキュリティ要件の厳格化

---

## 変更内容・新機能

### 1. VPC 接続対応

- Amazon EC2 でのホスト対応
- AWS Fargate でのコンテナ実行対応
- AWS Agentcore 統合
- その他プライベートネットワーク内のコンピュート対応

### 2. シンプルな設定

- **VPC 接続の選択**: MCP コネクター作成時に VPC 接続を選択
- **URL 指定**: MCP サーバーの URL を指定するだけで完成
- **自動ルーティング**: すべてのトラフィックが VPC 経由で安全にルーティング

### 3. 自然言語インタラクション

- Amazon Quick 内で自然言語を使用
- プライベート MCP サーバーと直接対話
- VPC 経由の安全な通信

---

## 効果・メリット

### セキュリティと プライバシー

- **VPC 内の完全な隔離**: データが公開インターネットを経由しない
- **コンプライアンス対応**: 規制要件の厳しい業界に対応
- **プライベートデータ保護**: 機密情報を安全に処理

### ビジネス価値

- **新しいユースケース対応**: 独自アプリケーション、カスタムデータソースの統合
- **内部ツール連携**: 内部システムとの無制限な連携
- **拡張性**: AI ワークフローの自由度が大幅に向上

### 運用効率

- **シンプルな設定**: VPC 接続の選択と URL 指定のみ
- **管理の容易性**: 既存の VPC インフラを活用
- **グローバル対応**: すべての AWS リージョンで利用可能

---

## ユースケース

### 金融・保険業界

- 社内の独自取引システムと AI の統合
- 顧客データの安全な分析と予測
- コンプライアンス要件を満たしながらの AI 活用

### 製造業

- 工場システムと AI の連携
- IoT データのリアルタイム分析
- セキュアな生産管理システムの構築

### ヘルスケア

- 医療データの機密保護を保ちながら AI 分析
- 患者情報の厳格な管理
- 規制環境への対応

---

## まとめ

### Amazon Quick VPC 接続の位置づけ

- エンタープライズ向けの重要なアップデート
- プライベートデータを安全に AI 活用
- セキュリティとビジネス価値の両立
- VPC 内での完全な隔離と制御

### 次のステップ

1. **評価の開始**: 自社のユースケースに適合を確認
2. **パイロット実装**: テスト環境での MCP サーバー統合
3. **本番展開**: 段階的な運用環境への移行

### 推奨リソース

- AWS ドキュメント: MCP 統合ガイド
- AWS ブログ: Enterprise integration patterns
- AWS Support: VPC 接続設定サポート

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick-vpc-mcp/

### 関連ドキュメント

- **Model Context Protocol (MCP) integration**: https://docs.aws.amazon.com/quick/latest/userguide/mcp-integration.html
- **Amazon Quick Suite with MCP**: https://aws.amazon.com/blogs/machine-learning/connect-amazon-quick-suite-to-enterprise-apps-and-agents-with-mcp
- **Time-series databases integration**: https://aws.amazon.com/blogs/machine-learning/amazon-quick-integration-with-time-series-databases-for-market-intelligence-using-mcp

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**