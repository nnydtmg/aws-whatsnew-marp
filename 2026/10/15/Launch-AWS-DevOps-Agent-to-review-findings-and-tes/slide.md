---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Resilience HubがAWS DevOps Agentと連携し障害評価とテスト結果の分析が可能に

Launch AWS DevOps Agent to review findings and test results from AWS Resilience Hub

**What's New** | 2026-10-15T07:00:00

---

## 概要

- 次世代のAWS Resilience HubがAWS DevOps Agentと統合され、障害モード評価の調査結果の確認・緩和策の実装、およびレジリエンステスト結果の分析が可能になりました。
- プラットフォームエンジニアリングおよびサイト信頼性チーム向けの機能です。

---

## 前提・背景

### 関連する最近の動向

- **Viewing an AWS Resilience Hub application summary**
  [詳細](https://docs.aws.amazon.com/resilience-hub/latest/userguide/view-app-summary.html)

- **Key capabilities at a glance - AWS Resilience Hub**
  [詳細](https://docs.aws.amazon.com/resilience-hub/latest/userguide/next-gen-key-capabilities.html)

- **AWS Resilience Hub now provides recommended resilience tests**
  [詳細](https://...

---

## 変更内容・新機能

次世代のAWS Resilience HubがAWS DevOps Agentと統合されました。レジリエンステスト実行時にAWS DevOps Agentの調査が自動起動され、症状・根本原因・影響・復旧アクション（ARC Region switchなど）を構造化分析として確認できます。障害モード評価の調査結果からオンデマンドでDevOps Agentを起動し、コンテキストを引き継いだ状態で質問・調査・緩和計画の作成が可能です。AWS Resilience Hubは、依存関係の自動検出、生成AIによる障害モード分析、モジュール型レジリエンシーポリシー、レジリエンステスト、組織全体のレジリエンシーポスチャレポートを提供します。利用開始はResilience Hubコンソールでサービスを選択し、DevOps Agentを設定したうえで、障害モード評価の調査結果またはレジリエンステストから起動します。利用可能リージョンは米国東部（バージニア北部）、米国東部（オハイオ）、米国西部（オレゴン）、カナダ（中部）、欧州（アイルランド、ロンドン、フランクフルト、パリ、ストックホルム）、アジアパシフィック

---

## まとめ

- Launch AWS DevOps Agent to review findings and test results from AWS Resilience Hub について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-devops-agent-test-results-aws-resilience-hub/)

### 関連情報

- [Viewing an AWS Resilience Hub application summary](https://docs.aws.amazon.com/resilience-hub/latest/userguide/view-app-summary.html)
- [Key capabilities at a glance - AWS Resilience Hub](https://docs.aws.amazon.com/resilience-hub/latest/userguide/next-gen-key-capabilities.html)
- [AWS Resilience Hub now provides recommended resilience tests](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-resilience-hub)
- [Introducing the next generation of AWS Resilience Hub for generative AI-based SRE resilience journey](https://aws.amazon.com/blogs/aws/introducing-the-next-generation-of-aws-resilience-hub-for-generative-ai-based-sre-resilience-journey)
- [Launch AWS DevOps Agent to review findings and test results from AWS Resilience Hub](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-devops-agent-test-results-aws-resilience-hub/)