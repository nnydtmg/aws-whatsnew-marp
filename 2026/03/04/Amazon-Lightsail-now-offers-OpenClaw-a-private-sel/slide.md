---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Lightsail
OpenClaw プライベート自己ホスト型 AI アシスタント対応

**発表日: 2026年3月4日**

---

## 概要

### Amazon Lightsail に OpenClaw が統合

- **OpenClaw**: プライベート自己ホスト型 AI アシスタント
- **デプロイ**: クラウドインフラで簡単かつセキュアにデプロイ
- **セキュリティ**: 組み込みセキュリティコントロールで保護
- **対応リージョン**: AWS 15 リージョンで利用可能

---

## 前提・背景

### 市場の課題

- エンタープライズAIアシスタントの需要が拡大
- セキュリティ・プライバシーを重視する組織が増加
- 自社インフラ上での AI 実行を望む企業が増加

### OpenClaw の台頭

- GitHub 68,000+ スター獲得
- オープンソース AI エージェントとして注目
- ローカル実行でコンテキスト保持・自動化機能を実現

---

## 主な機能と改善

### セキュリティ機能（組み込み）

- **サンドボックス機能**: 各エージェントセッションを分離
- **ワンクリック HTTPS**: 自動 TLS 設定で安全なアクセス
- **デバイスペアリング認証**: 認可デバイスのみ接続可能
- **自動スナップショット**: 設定を継続的にバックアップ

### 統合機能

- **Amazon Bedrock デフォルト対応**: AI モデルプロバイダー
- **モデル切り替え**: 複数の AI モデルをサポート
- **チャネル連携**: Slack、Telegram、WhatsApp、Discord に接続

---

<!-- _class: small -->

## デプロイの特徴

### セットアップの簡素化

| 項目 | 従来の方法 | OpenClaw on Lightsail |
|------|----------|---------------------|
| セキュリティ設定 | 手動で複数設定 | **事前設定済み** |
| HTTPS 設定 | 手動 TLS 証明書管理 | **ワンクリック** |
| バックアップ | 手動管理 | **自動スナップショット** |
| インフラ管理 | 複雑 | **Amazon Lightsail が管理** |

---

## 効果・メリット

### セキュリティと管理性の向上

- 組み込みセキュリティコントロール → 実装負荷を削減
- サンドボックス隔離 → セッションごとの安全性確保
- 自動バックアップ → データ損失リスクを排除

### スケーラビリティと柔軟性

- Amazon Bedrock の豊富なモデルラインアップ
- 複数チャネルへの同時接続
- プライベート環境での AI エージェント運用

### 導入の容易性

- AWS 15 リージョンで即座に利用可能
- 開発者が迅速にパイロットプロジェクト開始可能
- 運用コストを最適化

---

## ユースケース

### 適用シーン

- **エンタープライズ**: 内部用 AI アシスタント（機密情報保護）
- **カスタマーサポート**: セキュアな自動応答システム
- **営業支援**: プライベート AI エージェント
- **研究開発**: 社内データを使用した AI 実験

### 業界別活用

- **金融**: 規制対応が必要な環境
- **医療**: HIPAA 等のコンプライアンス要件
- **政府機関**: セキュリティ第一の AI 運用
- **製造業**: 工場内での AI 支援システム

---

## まとめ

### Amazon Lightsail OpenClaw の位置づけ

- エンタープライズグレードのセキュリティと管理性
- OpenClaw の柔軟性と拡張性を AWS で実現
- 迅速な導入と運用コスト最適化

### 次のステップ

1. AWS Lightsail コンソールでインスタンスを作成
2. Amazon Bedrock での AI モデル設定
3. 自社チャネル（Slack など）との統合
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-lightsail-openclaw/
- **OpenClaw 公式ガイド**: https://o-mega.ai/articles/openclaw-creating-the-ai-agent-workforce-ultimate-guide-2026
- **AWS Lightsail クイックスタート**: https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-quick-start-guide-openclaw.html
- **What is OpenClaw**: https://www.digitalocean.com/resources/articles/what-is-openclaw
- **AWS Marketplace**: https://aws.amazon.com/marketplace/pp/prodview-aoig6y3qalhsi

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**