---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch RUM
AWS European Sovereign Cloud で利用開始

**発表日: 2026年4月16日**

---

## 概要

### 何が変わったか

- **Amazon CloudWatch RUM** が AWS European Sovereign Cloud で利用可能に
- EU Sovereign（eusc-de-east-1）リージョンで本日より提供開始
- 欧州のお客様がデータ主権要件を満たしながら **リアルユーザーモニタリング** を実施可能
- データレジデンシーコンプライアンスが必須の組織に対応

---

## 前提・背景

### 欧州でのデータ主権の重要性

- **GDPR（一般データ保護規則）** に対応した厳格なデータ保護が必須
- 欧州のお客様がデータの保存・処理場所を完全に管理する必要性
- 公共部門組織や規制対象産業の情報セキュリティ要求

### AWS European Sovereign Cloud の拡張

- 2026年1月に AWS European Sovereign Cloud が一般提供開始
- 継続的なサービス拡張により、より多くの機能がEU環境で利用可能に
- AWS Control Tower なども既にESCで提供開始

---

## CloudWatch RUM について

### リアルユーザーモニタリングとは

- **クライアント側のパフォーマンスデータ** をリアルタイムで収集・表示・分析
- エンドユーザーの実際の体験を可視化
- 本番環境の実ユーザーから得られるデータに基づく監視

### 監視対象メトリクス

- **ページロード時間** - Webアプリケーションの応答速度
- **JavaScriptエラー** - フロントエンドのエラー検出
- **HTTP障害** - API通信の失敗追跡
- **モバイルアプリのクラッシュレート** - アプリの安定性
- **ネットワーク遅延** - ネットワーク性能の可視化

---

## 主な機能と改善

### 1. データ主権対応

- データが EU Sovereign リージョン内で完全に保存・処理される
- EU Sovereign Cloud の厳格なセキュリティおよびコンプライアンス要件に準拠
- GDPR、NIS Directive 2.0 などの規制に対応

### 2. 対象組織

- **企業** - データ保護要件の厳しい業種（金融、医療など）
- **公共部門組織** - 市民向けサービスのパフォーマンス監視
- **規制対象産業** - 業界規制を遵守する必要がある組織

---

## ユースケース

### 1. 欧州の公共部門組織

- 市民向けウェブポータルのパフォーマンス監視
- モバイルアプリケーションの品質管理
- **データ主権コンプライアンスを維持しながら** 監視を実施

### 2. ウェブ・モバイルアプリケーション

- **パフォーマンスボトルネックの積極的な特定**
- ユーザー体験（UX）の継続的な改善
- エラー原因の迅速な解明と対応

### 3. ヨーロッパ圏のエンタープライズ

- 規制要件を満たしながら包括的な監視を実施
- 本番環境の実データに基づく意思決定
- サービス品質の向上に直結する改善活動

---

## 効果・メリット

### ビジネス側のメリット

- **規制コンプライアンスの達成** - GDPR、NIS 2.0 対応を実現
- **ユーザー体験の向上** - パフォーマンス問題を素早く発見・改善
- **リスク低減** - データ主権要件への完全準拠

### 運用側のメリット

- **リアルタイム監視** - エンドユーザーの実体験に基づく可視化
- **トラブルシューティングの迅速化** - エラー原因を詳細に把握
- **パフォーマンス最適化** - データ駆動型の改善が可能

### セキュリティ・ガバナンス

- **データローカル性の保証** - EU Sovereign リージョン内で完結
- **監査対応の容易化** - データ処理の完全なトレーサビリティ
- **規制当局への説明責任** - コンプライアンス対応を明確に示せる

---

## 利用開始方法

### 対象リージョン

- **EU Sovereign（eusc-de-east-1）**

### 利用資格

- AWS European Sovereign Cloud のアカウント保有者
- データ主権要件への対応が必要な組織

### 次のステップ

1. AWS コンソールで CloudWatch RUM を検索
2. EU Sovereign リージョンを選択
3. 監視対象アプリケーションの登録
4. リアルユーザーモニタリングの開始

---

## まとめ

### 重要なポイント

- Amazon CloudWatch RUM が AWS European Sovereign Cloud で一般提供開始
- 欧州のお客様が **データ主権を維持しながら** リアルユーザーモニタリングを実施可能に
- GDPR、NIS Directive 2.0 などの規制要件に完全対応
- ウェブ・モバイルアプリケーションのパフォーマンス監視を強化

### 期待される効果

- ヨーロッパにおける AWS 利用の選択肢拡大
- 規制対象産業での CloudWatch 活用が加速
- エンタープライズ向けの信頼性向上

---

## 参考リソース

- **AWS What's New（元記事）**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-rum-european-sovereign-cloud/
- **CloudWatch RUM ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM.html
- **AWS European Sovereign Cloud**: https://aws.amazon.com/eu/sovereign-cloud/
- **AWS Control Tower（ESC対応例）**: https://docs.aws.amazon.com/controltower/latest/userguide/2026-all.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**