---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Observability
Kiro Power として利用開始

**発表日: 2026年2月24日**

---

## 概要

### 3つの主な変更点

- **Kiro Power の統合**: AWS Observability が Kiro Power として利用可能に
- **4つの MCP サーバー統合**: CloudWatch、Application Signals、CloudTrail、AWS Documentation
- **AI エージェント支援**: インシデント対応時間（MTTR）を短縮

### このアップデートが適する対象者

- 分散アプリケーションのトラブルシューティングを高速化したい開発者
- インシデント対応時間を短縮したいオペレーター
- オブザーバビリティスタックをプロアクティブに改善したい組織

---

## 前提・背景

### オブザーバビリティの課題

- 分散アプリケーションの問題原因特定に時間がかかる
- インシデント対応（MTTR）が長期化する傾向
- 複数のモニタリングツール間の連携が複雑
- オブザーバビリティスタックのギャップが見過ごされやすい

### Kiro Power エコシステムの拡大

- CloudWatch Application Signals が Kiro Powers に統合（2026年1月）
- Aurora DSQL、IAM Policy Autopilot など、複数のサービスが Kiro Power 化
- AI エージェント統合による開発効率化の強化

---

## 変更内容・新機能

### 統合された 4つの MCP サーバー

- **CloudWatch**: メトリクス、ログ、アラーム管理
- **Application Signals**: アプリケーションパフォーマンス監視
- **CloudTrail**: API ログと監査データ
- **AWS Documentation**: 公式ドキュメントへのアクセス

### AI エージェント対応ワークフロー

- アラーム対応の自動化
- 異常検知による早期発見
- 分散トレーシングによる根本原因分析
- SLO コンプライアンス監視
- セキュリティ調査の効率化

---

## 主な機能

### 自動ギャップ分析

- 不足しているインストルメンテーションを自動検出
- 修復提案の自動生成
- オブザーバビリティスタックの最適化

### 8つの包括的なステアリングガイド

1. インシデント対応
2. アラート管理
3. パフォーマンス監視
4. セキュリティ監査
5. ギャップ分析
6. トレーシング分析
7. ログ分析
8. SLO 管理

### 簡単なインストール

- Kiro IDE から 1 クリックでインストール可能
- Kiro Powers Web ページからも利用可能
- すぐに使用開始できる設定済みワークフロー

---

## 効果・メリット

### 運用効率の向上

- **MTTR の短縮**: AI エージェントが迅速に根本原因を特定
- **労力削減**: 反復的な調査タスクの自動化
- **スケーラビリティ**: 複雑な分散システムの監視が容易に

### オブザーバビリティの改善

- **360度の可視性**: CloudWatch、CloudTrail、Application Signals を統合
- **ギャップ解消**: 自動ギャップ分析による網羅的な監視
- **プロアクティブ対応**: 異常検知による事前対応

### コスト最適化

- 不要なインストルメンテーションの削減
- 効率的なログ・メトリクス収集
- オブザーバビリティへの投資 ROI 向上

---

## ユースケース

### マイクロサービス環境での障害対応

複雑なマイクロサービス間の依存関係を可視化し、障害の伝播経路を迅速に特定して対応時間を短縮。

### コンプライアンス・監査

CloudTrail ログと Application Signals を組み合わせて、セキュリティイベントと性能問題を同時に分析。

### SLO 管理と改善

継続的に SLO コンプライアンスを監視し、改善施策を AI エージェントが提案。

---

## まとめ

### AWS Observability Kiro Power の位置づけ

- AWS のオブザーバビリティソリューションの AI エージェント統合版
- 開発チームとオペレーションチームの双方に価値提供
- インシデント対応の高速化と継続的改善を実現

### 次のステップ

1. Kiro IDE で AWS Observability Kiro Power をインストール
2. 既存の CloudWatch、CloudTrail 設定と統合
3. AI エージェント対応ワークフローの試行開始
4. オブザーバビリティスタックの段階的最適化

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-observability-kiro-power/
- **CloudWatch Application Signals with Kiro Powers**: https://aws.amazon.com/about-aws/whats-new/2026/01/cloudwatch-application-signals-kiro-powers/
- **Amazon Aurora DSQL Kiro Integration**: https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-aurora-dsql-integrates-with-kiro-powers-and-agent-skills/
- **AWS IAM Policy Autopilot**: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-iam-policy-autopilot-kiro-power/
- **AWS CloudWatch Documentation**: https://docs.aws.amazon.com/cloudwatch/
- **Kiro IDE**: https://aws.amazon.com/kiro/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**