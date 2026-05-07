---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Capabilities by Region now supports availability notifications

**What's New** | 2026-05-07

---

## 概要

- AWS Capabilities by Regionに新しく可用性通知機能が追加されました。
- これにより、AWSサービスと機能が対象リージョンで利用可能になった際に、自動的にアラート通知を受け取ることができるようになります。
- このアップデートは、インフラストラクチャ計画、リージョン拡張準備、およびサービスパリティ監視を行う必要があるソリューションアーキテクトやビルダーにとって、特に有用です。

---

## 前提・背景

### グローバルインフラの課題

- 1,500以上のAWSサービスと機能が37のリージョンで展開
- サービスパリティの監視が複雑
- リージョン拡張時の事前準備が困難
- 機能利用可能性の把握が手動的

### 従来の課題

- AWS Services by Regionでの情報確認が受動的
- 新しい機能のローンチ情報を逃す可能性
- マルチリージョンデプロイメント計画の効率性低下

---

## 変更内容・新機能

### 可用性通知機能

- **リアルタイム通知**: AWSサービスと機能が対象リージョンで利用可能になった際に自動アラート
- **サービスレベルのサブスクリプション**: AWS Builder Center UIから簡単に登録
- **自動カバレッジ**: 選択したリージョン全体の基盤機能が自動的にカバーされる
- **個別機能追跡不要**: 親サービスにサブスクライブで全機能をカバー

### 通知配信チャネル

- **インスタント アラート**: AWS Builder Center内での即時通知
- **週次メールダイジェスト**: 統合されたメール配信

### 管理画面

- **Settings > Notifications**: AWS Builder Centerで一元管理
- **グローバル提供**: Builder ID保有者なら誰でも無料で利用可能

---

## 効果・メリット

- **計画の加速**: インフラストラクチャ計画とデプロイメント決定がスピードアップ
- **追跡の簡素化**: 手動確認が不要に、自動的に必要情報を受取
- **リージョン拡張対応**: マイグレーションやリージョン拡張に事前準備が可能
- **サービスパリティ監視**: AWS間のサービス利用可能性を効率的に監視
- **無料提供**: 追加コスト不要でグローバルユーザーが利用可能

---

## ユースケース

### 1. 生成AIアプリケーションのリージョン拡張

- **例**: Amazon Bedrock（Knowledge Bases、Guardrailsなど）にサブスクライブ
- **効果**: 新リージョンでの機能利用可能化を即座に把握
- **対応**: 迅速にリージョン拡張計画を実行

### 2. 特定機能ローンチの追跡

- 新機能のリージョン別展開状況を一元監視
- 顧客要求への対応準備を前倒し

### 3. マルチリージョンアーキテクチャ設計

- 複数リージョンでのサービスパリティ確認
- グローバルデプロイメント計画の最適化

---

## まとめ

### AWS Capabilities by Regionの進化

- **通知機能の追加**: 受動的な確認から主動的な通知へ
- **運用効率向上**: グローバルインフラストラクチャ計画を自動化
- **迅速な対応**: サービス拡張や新機能対応を加速

### 推奨アクション

1. AWS Builder Centerにアクセス
2. AWS Capabilities by Regionで重要なサービスをサブスクライブ
3. Settings > Notificationsで通知設定を構成
4. 定期的にメールダイジェストを確認

---

## 参考URL

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-regional-planning-tool-notification
- **Introducing AWS Capabilities by Region**: https://aws.amazon.com/blogs/aws/introducing-aws-capabilities-by-region-for-easier-regional-planning-and-faster-global-deployments/
- **AWS Services by Region**: https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/
- **AWS Regions & Availability Zones**: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**