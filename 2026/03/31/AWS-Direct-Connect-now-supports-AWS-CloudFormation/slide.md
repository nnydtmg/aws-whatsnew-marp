---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Direct Connect が CloudFormation に対応

インフラストラクチャをコードで管理

**発表日: 2026年3月31日**

---

## 概要

### AWS Direct Connect × CloudFormation の統合

- **Infrastructure-as-Code 対応**: Direct Connect リソースを CloudFormation テンプレートで定義可能
- **バージョン管理**: テンプレートによる履歴管理と変更追跡
- **ドリフト検出**: 実際のリソース設定と期待値のズレを自動検出
- **グローバル利用**: 全 AWS リージョンで利用可能

---

## 前提・背景

### Direct Connect 利用の課題

- オンプレミスと AWS を接続する重要なサービス
- 複数リージョン・複数接続の一元管理が困難
- 設定変更の追跡やドキュメント化の手間
- 新しいリージョン展開時の手作業が多い

### CloudFormation の利点

- 全 AWS リソースの Infrastructure-as-Code 化
- スタックセットによる複数リージョン・複数アカウント管理
- 変更セットによる事前確認
- ドリフト検出による構成管理

---

## 主な機能と対応リソース

### 自動化できるリソース

- **接続（Connections）**: オンプレミスから AWS への物理接続
- **仮想インターフェース（Virtual Interfaces）**: ネットワークトラフィックの送受信
- **Direct Connect ゲートウェイ**: 複数 VPC への統一的な接続
- **Link Aggregation Group（LAG）**: 複数接続の集約
- **BGP ピアリング設定**: ルーティング設定の自動化

---

## 効果・メリット

### インフラ運用の効率化

- ✅ **手作業の削減**: 接続設定の自動化により人的ミスを削減
- ✅ **一元管理**: 全リージョンの Direct Connect トポロジを単一の CloudFormation テンプレートで管理
- ✅ **再現性**: 変更履歴が記録され、同じ構成を簡単に再現可能
- ✅ **スケーラビリティ**: 新しいリージョン展開が迅速に実施可能

### ガバナンスの強化

- 📋 **変更管理**: 変更セットで事前に影響範囲を確認
- 🔍 **構成管理**: ドリフト検出で意図しない変更を検出
- 📊 **監査対応**: テンプレートとスタック履歴により監査ログを自動生成

---

## ユースケース

### エンタープライズ向け

- **グローバル展開企業**: 複数リージョンの Direct Connect 接続を一元管理
- **ハイブリッド環境**: オンプレミスと AWS の統合ネットワーク設定の自動化
- **災害復旧**: 災害復旧サイトへの Direct Connect 接続を自動デプロイ

### 運用チーム向け

- **DevOps チーム**: 基盤構築の自動化により開発チームへの対応スピード向上
- **ネットワークエンジニア**: Infrastructure-as-Code によるテンプレート化と再利用

---

## まとめ

### AWS Direct Connect × CloudFormation の価値

| 項目 | メリット |
|------|----------|
| **自動化** | 接続設定の手作業を排除 |
| **管理** | 複数リージョンを単一テンプレートで管理 |
| **信頼性** | バージョン管理とドリフト検出 |
| **スケール** | グローバル展開を高速化 |

### 次のステップ

1. 既存の Direct Connect トポロジを CloudFormation テンプレートに移行
2. テンプレートベースの新規接続設定を実施
3. StackSets で複数リージョンの一元管理を検討

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-direct-connect-supports-aws-cloudformation/
- **AWS CloudFormation ドキュメント**: https://docs.aws.amazon.com/cloudformation/
- **AWS Direct Connect ドキュメント**: https://docs.aws.amazon.com/directconnect/
- **CloudFormation StackSets**: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**