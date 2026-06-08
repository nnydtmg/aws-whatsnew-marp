---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Cost Anomaly Detection に Amazon Q による AI 駆動のコスト調査機能が追加

AWS now provides AI-powered cost investigations for cost anomalies

**What's New** | 2026-06-08

---

## 概要

- AWS Cost Anomaly Detection に Amazon Q による AI 駆動のコスト調査機能が追加され、FinOps 実務者とエンジニアリングチームが数時間要していた根本原因分析を数分で完了できるようになりました。
- この機能は全商用 AWS リージョンで追加料金なしで利用可能であり、CloudTrail と連携してコスト変化の詳細な原因を特定します。

---

## 前提・背景

### これまでの課題

- **コスト異常の原因特定に数時間を要していた**
  - FinOps 実務者とエンジニアリングチームが根本原因分析に多大な時間を消費
  - マニュアルの調査プロセスが複雑化

- **複数要因の判定が困難**
  - コスト変化が使用量駆動か料金駆動かの判定が必要
  - 関連するサービス、アカウント、リージョンの特定に手間

---

### 関連する最近の動向

- AWS Cost Explorer が Amazon Q による自然言語クエリ機能を搭載（2026年4月）
- Amazon Q Developer により、自然言語による AI 分析が AWS サービスに拡大
- FinOps とコスト最適化への企業の関心が高まり中

---

## 変更内容・新機能

### AI 駆動のコスト調査

- **Amazon Q による自動分析**
  - 検出されたコスト異常の根本原因を数分で平文説明として提供
  - 複雑な分析プロセスを自動化

- **コスト変化の判定**
  - 使用量駆動 vs 料金駆動の自動判定
  - 関連するサービス、アカウント、リージョンを特定

### CloudTrail との統合

- **API コールの追跡**
  - 使用量駆動の変化を具体的な API コールと IAM プリンシパルに帰属
  - 更に詳細な原因究明が可能に

- **組織全体の対応**
  - CloudTrail 組織証跡を使用すれば、すべてのメンバーアカウント全体で調査が機能
  - クロスアカウント分析が自動的に動作

---

## ユースケース

### FinOps チーム向け

- **コスト異常時の高速対応**
  - 検出直後に「Investigate with Amazon Q」を選択
  - 数分で根本原因を把握し、対応方針を決定

- **継続的な質問と探索**
  - フォローアップ質問で詳細パターンを探索
  - 特定のリソースについてさらに深く調べることが可能

### エンジニアリングチーム向け

- **自動化されたリソース監視**
  - 使用量駆動の異常を API レベルで特定
  - IAM プリンシパルまで追跡可能

- **組織運用の効率化**
  - 複数アカウント環境での一元的な分析
  - コスト増加への即座の対応が可能に

---

## 効果・メリット

### コスト削減

- ✅ 原因分析の時間を数時間から数分に短縮
- ✅ 手作業による誤分析を削減
- ✅ 迅速な対応によるコスト増加の抑制

### 運用効率化

- ✅ FinOps と開発チームのコラボレーション向上
- ✅ CloudTrail ログとの自動統合で作業が簡素化
- ✅ 組織全体で一貫した分析が可能

### 提供条件

- ✅ 追加料金なし（基本サービスに統合）
- ✅ すべての商用 AWS リージョンで利用可能
- ✅ 本日（2026年6月8日）から利用開始可能

---

## 注意点・コスト

### CloudWatch Logs の料金

- 組織全体の CloudTrail 証跡でクロスアカウント調査を実施する場合
- Amazon CloudWatch Logs Insights の標準料金がスキャンされたデータに基づいて発生する可能性あり

---

## まとめ

### 主なポイント

- 🎯 AWS Cost Anomaly Detection に Amazon Q による AI 駆動のコスト調査機能が追加
- ⚡ コスト異常の原因分析を数時間から数分に短縮
- 🔗 CloudTrail との統合で API レベルの詳細追跡が可能
- 💰 追加料金なしで全商用リージョンで利用可能

### 次のステップ

1. AWS Billing and Cost Management コンソールを確認
2. Cost Anomaly Detection の異常検出を設定
3. 「Investigate with Amazon Q」機能をテスト
4. 組織内での活用を検討

---

## 参考リソース

- **元記事**: [AWS now provides AI-powered cost investigations for cost anomalies](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-ai-powered-cost-investigations/)
- **AWS Cost Management**: [Billing and Cost Management Console](https://console.aws.amazon.com/cost-management/)
- **CloudTrail ドキュメント**: [AWS CloudTrail User Guide](https://docs.aws.amazon.com/awscloudtrail/)
- **Amazon Q Developer**: [Managing your costs using generative AI with Amazon Q Developer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-cost-analysis-q.html)
- **参考ガイド**: [AWS Cost Anomaly Detection: The Ultimate Guide](https://www.nops.io/blog/aws-cost-anomaly-detection)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**