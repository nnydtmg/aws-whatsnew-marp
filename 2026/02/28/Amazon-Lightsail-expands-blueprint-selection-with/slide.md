---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Lightsail WordPress ブループリント
WordPressサイトを数分で構築

**発表日: 2026年2月27日**

---

## 概要

Amazon Lightsailの新しいWordPressブループリントにより、セキュリティが強化された状態で、わずか数分でクラウド上にWordPressサイトを立ち上げることができるようになりました。

### 3つの主要なポイント

- **ワンクリック起動**: 数分でWordPressがプリインストールされたVPSが起動
- **強化されたセキュリティ**: IMDSv2がデフォルトで強制される
- **包括的なセットアップウィザード**: ドメイン、DNS、HTTPS設定を自動化

---

## 前提・背景

### 既存の課題

- WordPressをAWSで構築するには複雑な手動設定が必要
- セキュリティ設定に手間がかかる
- ドメイン接続やHTTPS暗号化の設定が複雑

### Amazon Lightsail の立場

- AWS初心者向けのシンプルなクラウドサービス
- VPS、ストレージ、DNS を予測可能な月額料金で提供
- ブループリント機能により、事前構成済みアプリケーションを提供

---

## 主な機能

### WordPress ブループリントの特徴

- **事前インストール**: WordPress、OSがプリインストール済み
- **Instance Metadata Service Version 2 (IMDSv2) 強制**: デフォルトでセキュリティ強化
- **ガイド付きセットアップウィザード**: 以下を自動処理
  - カスタムドメイン接続
  - DNS設定
  - 静的IPアドレス割り当て
  - Let's Encrypt による HTTPS 暗号化

### インスタンスバンドル

| 要素 | 内容 |
|------|------|
| OS | Linux（複数オプション） |
| ストレージ | SSD搭載 |
| データ転送 | 月間制限付き |
| 価格 | 予測可能な月額料金 |

---

## 利用シーン

### 適用対象ユーザー

- **クラウド初心者**: AWSの複雑さを回避したいユーザー
- **WordPress開発者**: 迅速なサイト構築が必要な開発者
- **小〜中規模企業**: コスト効率的なWordPress運用を求める組織
- **ブロガー・パブリッシャー**: オウンドメディア構築を検討中

### ユースケース

1. **コーポレートサイト**: 中小企業の公式ウェブサイト
2. **ブログ・メディア**: オウンドメディア運営
3. **ECサイト**: WooCommerceによるオンラインストア
4. **ポートフォリオサイト**: 個人・フリーランスのポートフォリオ

---

## 効果・メリット

### ユーザーのメリット

- **時間短縮**: セットアップが数分で完了
- **複雑さの軽減**: 手動設定が不要（Lightsail コンソール内で完結）
- **セキュリティ向上**: IMDSv2 が自動適用される
- **コスト削減**: 予測可能な固定料金（従量課金なし）
- **スケーラビリティ**: 必要に応じてインスタンスをアップグレード
- **全リージョン対応**: Lightsail が利用可能な全 AWS リージョンで利用可能

### AWS・企業側のメリット

- **ユーザー拡大**: AWS初心者の入口としての役割強化
- **WordPress採用促進**: クラウドでのWordPress普及加速
- **顧客満足度向上**: 簡単・安全なデプロイメント

---

## まとめ

### Amazon Lightsail WordPress ブループリントの位置づけ

- **シンプル**: ワンクリックでWordPress環境を起動
- **安全**: IMDSv2 強制によるセキュリティ強化
- **包括的**: ドメイン〜HTTPS設定まで自動化
- **経済的**: 予測可能な月額料金で運用

### 次のステップ

1. Amazon Lightsail コンソールにアクセス
2. WordPress ブループリントを選択
3. インスタンスバンドルを選択
4. ガイド付きセットアップを完了
5. WordPressサイトの運用開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/wordpress-blueprint-lightsail/
- **Amazon Lightsail ドキュメント**: https://docs.aws.amazon.com/lightsail/
- **Lightsail ブループリント一覧**: https://docs.aws.amazon.com/lightsail/latest/userguide/compare-options-choose-lightsail-instance-image.html
- **WordPress 公式サイト**: https://wordpress.org/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**