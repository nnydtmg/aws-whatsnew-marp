---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Security Agent
共有VPC環境でのペネトレーションテスト対応

**発表日: 2026年2月25日**

---

## 概要

### AWS Security Agentの新機能

- **マルチアカウント対応**: AWS Organization内の複数アカウント間で共有されたVPCリソースに対するペネトレーションテストに対応
- **AWS RAM統合**: AWS Resource Access Manager（RAM）を活用した安全なリソース共有
- **中央集約管理**: 中央アカウントからAgent Spaceを作成して、全体を一元管理
- **効率化**: 複雑なマルチアカウント環境全体にわたる包括的なセキュリティ評価を実施可能

---

## 前提・背景

### マルチアカウント環境の課題

- **分散アーキテクチャの複雑さ**: 複数のAWSアカウントにまたがる分散システムのセキュリティ検証が困難
- **スコープの拡張**: 従来は単一アカウント内のVPCリソースに限定されたテストが可能だった
- **セキュリティ体制の整備**: マルチアカウント構成を採用する大規模組織では統一的なセキュリティ評価が必須

### AWS Security Agentの進化

- AWS Security Agentが提供する3つの主要機能: Design Review、Code Review、Penetration Testing
- ペネトレーション機能の強化により、エンタープライズ環境での活用が拡大
- AWS Organization と AWS RAM による安全なマルチアカウント体制の実現

---

## 変更内容・新機能

### 1. 共有VPCリソースのペネトレーションテスト

- AWS Organization内の複数アカウント間で共有されたVPC（Virtual Private Cloud）リソースをテスト対象に
- セキュリティ専門家は中央アカウントにAgent Spaceを作成
- 接続されたサブアカウントのVPCリソースに安全にアクセス

### 2. AWS RAM統合

- AWS Resource Access Manager（RAM）を活用したセキュアなリソース共有
- サブアカウントから中央アカウントへVPCリソースを安全に共有
- アクセス権限の厳密な制御と管理

### 3. Agent Space の一元管理

- 中央アカウントから複数のサブアカウント環境を統一的に管理
- 複数のAWSアカウント環境を持つセキュリティチームが効率的に運用

---

## 効果・メリット

### セキュリティ態勢の向上

- **包括的なテスト**: 共有VPCリソースの包括的なテストが可能
- **組織全体の可視化**: 組織全体のセキュリティ態勢が向上
- **一貫性の確保**: マルチアカウント環境全体で統一的なセキュリティ基準を適用

### 運用効率の改善

- **中央集約管理**: 複雑なマルチアカウント構成を効率的に管理
- **スケーラビリティ**: 新規アカウント追加時の対応を簡素化
- **コスト削減**: テスト実施の効率化に伴う運用コストの削減

---

## ユースケース

### 金融機関

- 複数の子会社・支社のVPCをマルチアカウント構成で管理
- 中央のセキュリティチームが統一的なペネトレーションテストを実施

### 大規模SaaS企業

- テナント毎にアカウントを分離した環境
- 共有VPCリソースのセキュリティを一元的に評価

### エンタープライズ企業

- 各事業部門が個別のAWSアカウントを保有
- セキュリティ監査の効率化と一貫性の確保

---

## まとめ

### 主なポイント

- AWS Security Agentがマルチアカウント環境に対応
- AWS RAM統合による安全なリソース共有
- 中央集約型の効率的なセキュリティ管理が実現
- エンタープライズ向けセキュリティソリューションの強化

### 推奨される次のステップ

1. 自社のマルチアカウント構成を整理
2. AWS Security Agentの導入計画を策定
3. パイロットプロジェクトでの検証・評価
4. 本番環境への段階的な展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-security-agent-adds-penetration-tests-shared/
- **AWS Security Agent ドキュメント**: https://docs.aws.amazon.com/securityagent/latest/userguide/
- **AWS Resource Access Manager**: https://docs.aws.amazon.com/ram/latest/userguide/
- **AWS Organization**: https://docs.aws.amazon.com/organizations/latest/userguide/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**