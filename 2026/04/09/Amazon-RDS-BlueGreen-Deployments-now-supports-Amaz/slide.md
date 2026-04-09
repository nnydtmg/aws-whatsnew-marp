---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon RDS Blue/Green Deployments now supports Amazon RDS Proxy

**発表日: 2026年4月9日**

---

## 概要

### 3つの主要な改善点

- **DNS伝播遅延の排除**: RDS Proxyが自動的に接続をリダイレクトし、高速に切り替え
- **アプリケーション復旧の高速化**: スイッチオーバー時の復旧時間が大幅に短縮
- **設定変更不要**: 既存アプリケーションの設定やドライバー変更は一切不要

---

## 前提・背景

### Blue/Green Deployments の進化

- Amazon RDS Blue/Green Deployments は、本番環境の安全な変更をテストするための機能
- 2022年11月の初版リリース以来、継続的に機能改善を実施
- 2026年1月には、スイッチオーバー時間を5秒以下に短縮する改善を実施

### 市場の課題

- データベース更新時のダウンタイムを最小化することが重要
- DNS伝播遅延により、スイッチオーバー後のアプリケーション復旧に遅延が発生
- 本番環境への安全で迅速な切り替え手段の需要が高まっている

---

## 変更内容・新機能

### RDS Proxy との連携

- **自動監視機能**: RDS Proxyがデータベースインスタンスを監視
- **接続リダイレクト**: Green環境が新しい本番環境になったことを検出し、即座にリダイレクト
- **DNS伝播の回避**: 従来の DNS 伝播を待つプロセスをスキップ

### Blue/Green Deployments の基本機能

- **Green 環境の作成**: 本番環境の完全に管理されたステージング環境を作成
- **安全なテスト**: 現在の本番DB（Blue）を安全に保ったまま、Green で変更をテスト
- **シームレスな切り替え**: 準備完了後、Green 環境に切り替え

---

## 対応データベースエンジン

### サポート対象

- Amazon Aurora with MySQL 互換性
- Amazon Aurora with PostgreSQL 互換性
- Amazon RDS for MySQL
- Amazon RDS for PostgreSQL
- Amazon RDS for MariaDB

### 利用可能なリージョン

- RDS Proxy が利用可能なすべての AWS 商用リージョン

---

## 効果・メリット

### パフォーマンス向上

- **ダウンタイムの短縮**: スイッチオーバー時のアプリケーション復旧を大幅に高速化
- **ビジネス影響の最小化**: ユーザーへの影響を最小限に抑制
- **信頼性向上**: 安全で予測可能な本番環境の更新

### 運用効率化

- **シンプルな操作**: RDS コンソールまたは CLI で数クリックで実施
- **変更不要**: ドライバー変更やアプリケーション設定変更は一切不要
- **スケーラビリティ**: 複数のデータベースエンジンに対応

---

## ユースケース

### 活用シーン1: メジャーバージョンアップグレード

- MySQL 5.7 → 8.0、PostgreSQL 13 → 14 などのアップグレード
- Blue/Green で先にテスト環境でテスト実施
- RDS Proxy により、本番への切り替え時間を最小化

### 活用シーン2: インスタンスクラスの変更

- 負荷増加に対応するための、より大きなインスタンスへのスケールアップ
- Green 環境で新しいインスタンスクラスの性能をテスト
- RDS Proxy により、ダウンタイムなし（または最小）での切り替え

### 活用シーン3: パラメータグループの変更

- データベースパラメータの最適化（チューニング）
- Green 環境でテスト後、本番への適用
- RDS Proxy により、アプリケーションを継続稼働させながら変更

---

## まとめ

### Amazon RDS Blue/Green Deployments の位置づけ

- **エンタープライズ対応**: 本番環境の安全な変更をサポート
- **ハイアベイラビリティ**: RDS Proxy による高速な接続リダイレクト
- **運用効率**: コンソール/CLI から簡単に実施可能

### 次のステップ

1. RDS Proxy を有効化し、既存データベースに接続
2. Blue/Green Deployments の試験運用を開始
3. 本番環境への段階的適用

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/rds-proxy-blue-green/
- **Blue/Green Deployments 概要**: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments-overview.html
- **RDS Blue/Green Deployments ダウンタイム短縮（2026年1月）**: https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-rds-blue-green-deployments-reduces-downtime/
- **Amazon RDS ドキュメント**: https://docs.aws.amazon.com/AmazonRDS/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
