---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Lambda adds support for Ruby 4.0

マネージドランタイムとコンテナイメージで Ruby 4.0 が利用可能に

**発表日: 2026年4月30日**

---

## 概要

### Ruby 4.0 サポートの3つのポイント

- **マネージドランタイムとコンテナイメージ**: 両方の方式で Ruby 4.0 が利用可能
- **長期サポート (LTS)**: 2029年3月までセキュリティサポートを提供
- **高度なログ制御**: JSON 構造化ログ、ログレベル設定、ターゲット指定が可能

### 自動更新と運用負荷の軽減

- AWS が自動的にランタイムとベースイメージの更新を適用
- 手動での更新作業が不要
- セキュリティパッチを自動で反映

---

## 前提・背景

### Ruby 言語の進化

- Ruby 4.0 は 2025年12月に正式リリース
- 2026年4月に Ruby 4.0.3 がセキュリティアップデート
- 最新の言語機能と改善が提供される

### Serverless 開発の課題

- 従来はレガシーランタイムに依存する必要があった
- 最新言語機能の利用が困難
- ログ管理と監視の複雑さ

### Lambda ランタイムの進化

- Ruby 3.3 (2027年4月30日まで) → Ruby 4.0 への移行
- Ruby 3.4 (2028年4月30日まで) も並行サポート
- Amazon Linux 2023 での統一

---

## 主な機能と改善

### 1. 2つのデプロイメント方式をサポート

- **マネージドランタイム** (`ruby4.0`)
  - AWS 管理のスケーラブルなランタイム
  - アップデートは自動適用
  - 最小限の構成で利用可能

- **コンテナベースイメージ**
  - Docker コンテナとして Ruby 4.0 を実行
  - より細かなカスタマイズが可能
  - ECR との統合

---

## 主な機能と改善（続き）

### 2. 高度なログ制御機能

- **JSON 構造化ログ**: 機械可読形式でのログ出力
- **設定可能なログレベル**: DEBUG, INFO, WARN, ERROR を選択可能
- **CloudWatch ターゲット指定**: ロググループを柔軟に設定
- より詳細な監視と分析が可能

### 3. 広範なリージョンサポート

- すべての AWS リージョン (中国を含む)
- AWS GovCloud (US) リージョンにも対応
- グローバルな Serverless 開発環境

---

## デプロイメント・運用方法

### サポートされるデプロイメント方法

<div class="columns">
<div>

### 標準ツール

- **AWS Lambda コンソール**
  - Web UI で直接編集・デプロイ

- **AWS CLI**
  - コマンドライン操作

</div>
<div>

### Infrastructure as Code

- **AWS SAM** (Serverless Application Model)
- **AWS CDK** (Cloud Development Kit)
- **AWS CloudFormation**
- **Terraform** (IaC)

</div>
</div>

---

## サポートスケジュール

### Lambda Runtime Lifecycle

| ランタイム | OS | 利用開始 | 廃止公告 | 廃止実施 |
|----------|-----|---------|---------|----------|
| Ruby 4.0 | AL2023 | 2026年4月 | 2029年3月31日 | 2029年5月31日 |
| Ruby 3.4 | AL2023 | 2023年 | 2028年3月31日 | 2028年5月31日 |
| Ruby 3.3 | AL2023 | 2023年 | 2027年3月31日 | 2027年5月31日 |

**AL2023**: Amazon Linux 2023

---

## ユースケース

### Ruby 4.0 が適している開発者

- **モダン Ruby 開発者**
  - 最新の言語機能（パターンマッチング、Fiber スケジューラなど）を活用したい

- **エンタープライズ開発**
  - 長期サポート (2029年3月まで) の安定性が必要
  - JSON ログによる統合監視

- **マイクロサービス・イベント駆動アーキテクチャ**
  - Rails、Sinatra、Rack ベースのアプリケーション
  - 非同期処理、Fiber による高度な制御

---

## 効果・メリット

### 開発効率の向上

- 最新の Ruby 言語機能（Ruby 4.0 の改善）が利用可能
- 自動更新により手動メンテナンスが不要
- デフォルトで高度なログ制御が装備

### 運用コストの削減

- AWS が自動でパッチ管理
- セキュリティアップデート自動適用
- インフラ管理作業が軽減

### 信頼性とセキュリティ

- 3年間の LTS サポート (2029年3月)
- セキュリティ脆弱性への迅速な対応
- CloudWatch との統合で可視化向上

---

## まとめ

### AWS Lambda と Ruby 4.0

- Ruby 4.0 がマネージドランタイムとコンテナイメージで利用可能に
- 2029年3月まで LTS サポートで安定性を確保
- JSON 構造化ログなど運用機能も強化
- すべての AWS リージョンでグローバル対応

### 次のステップ

1. 既存の Ruby 3.x アプリケーションを Ruby 4.0 への互換性チェック
2. 新規プロジェクトでは Ruby 4.0 を採用検討
3. ログレベル設定など運用機能の活用
4. AWS Lambda コンソールまたは SAM で環境構築

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-lambda-adds-ruby/
- **AWS Lambda Ruby Runtime**: https://docs.aws.amazon.com/lambda/latest/dg/lambda-ruby.html
- **Lambda Runtimes**: https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
- **Ruby 公式**: https://www.ruby-lang.org/
- **Ruby 4.0.3 Release**: https://www.ruby-lang.org/en/news/2026/04/21/ruby-4-0-3-released/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**