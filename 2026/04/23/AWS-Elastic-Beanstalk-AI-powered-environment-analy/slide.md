---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Elastic Beanstalk
AI 駆動型環境分析が Windows に対応

**発表日: 2026年4月23日**

---

## 概要

### AWS Elastic Beanstalk AI 分析機能が Windows に対応

- **Windows Server プラットフォームで AI 駆動型環境分析が利用可能に**
- ログの手動確認が不要に
- .NET アプリケーションの問題診断が迅速化
- 推奨ソリューションの自動提示
- 利用可能な全リージョンで提供開始

---

## 前提・背景

### これまでの制限事項

- **従来対応プラットフォーム**: Amazon Linux 2、AL2023 のみ
- **対応外だった環境**: Windows Server ベースの環境
- **影響を受ける開発チーム**: .NET アプリケーション開発者・運用チーム

### エンタープライズ環境での課題

- Windows 環境でのトラブルシューティングが手作業が多い
- ログ確認による問題診断に時間がかかる
- 根本原因の特定が困難

### 市場動向

- AI 活用による自動診断・最適化の需要が増加
- Amazon Bedrock による AI サービスの拡充
- クラウドネイティブ環境での運用効率化の重要性

---

## 主な機能・変更点

### 1. Windows Server 対応開始

- **リリース日**: 2026年4月22日以降のプラットフォームバージョン
- **対応環境**: Windows Server ベースの Elastic Beanstalk 環境
- **.NET アプリケーション対応**: .NET ワークロード実行環境をサポート

### 2. AI 分析の動作フロー

- Elastic Beanstalk が Windows 環境から以下を収集:
  - 最近のイベント
  - インスタンスのヘルス情報
  - システムログ
- Amazon Bedrock に分析を送信
- AI が根本原因を特定して推奨事項を提示

### 3. 利用方法

- **Elastic Beanstalk コンソール**: AI Analysis ボタンをクリック
- **AWS CLI**: 以下の API 操作を使用
  - `RequestEnvironmentInfo`: 分析リクエスト
  - `RetrieveEnvironmentInfo`: 分析結果取得

---

## パフォーマンス・利点

### 効率性の向上

- **診断時間の短縮**: 手動ログ確認が不要に
- **自動化**: ステップバイステップのトラブルシューティング推奨事項を自動提示
- **精度向上**: AI による根本原因分析

### 対象者

- .NET アプリケーション開発者
- クラウド運用エンジニア
- DevOps チーム
- エンタープライズ環境の管理者

### 利用可能な地域

- AWS Elastic Beanstalk と Amazon Bedrock の両方が利用可能な全リージョン
- グローバルでの利用が可能

---

## ユースケース

### ユースケース1: .NET アプリケーションのトラブルシューティング

本番環境の .NET アプリケーションが障害時:
1. Elastic Beanstalk コンソールから AI Analysis ボタンをクリック
2. AI が環境情報を分析
3. 根本原因と解決策を提示
4. 推奨されたステップを実行

### ユースケース2: パフォーマンス問題の診断

アプリケーションのレスポンス遅延が発生した際:
- インスタンスのリソース使用状況を自動診断
- スケーリングの必要性を提案
- 設定の最適化ポイントを指摘

### ユースケース3: 環境ヘルスチェック

定期的な環境監視:
- 潜在的な問題を事前に検出
- 予防的な対応が可能に

---

## まとめ

### 主な成果

- **プラットフォーム拡大**: Windows Server 環境に AI 分析機能を提供
- **開発生産性向上**: 診断・トラブルシューティング時間の短縮
- **運用効率化**: 自動化による運用コスト削減
- **エンタープライズ対応**: .NET ワークロードの最適な運用をサポート

### 次のステップ

1. **アップデート**: Elastic Beanstalk 環境を最新プラットフォームバージョンに更新
2. **試行**: 開発環境で AI Analysis 機能を試す
3. **導入**: 本番環境での運用に組み込む
4. **活用**: AWS CLI による自動化を検討

---

## 参考リソース

### 公式ドキュメント

- [AI-powered environment analysis - AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-ai-analysis.html)
- [Elastic Beanstalk Windows Server platform update - April 22, 2026](https://docs.aws.amazon.com/elasticbeanstalk/latest/relnotes/release-2026-04-22-windows.html)
- [AWS Elastic Beanstalk - AI-powered environment analysis（2026年3月発表）](https://aws.amazon.com/about-aws/whats-new/2026/03/elastic-beanstalk-ai-analysis/)

### 元記事

- [AWS What's New - Elastic Beanstalk AI analysis Windows](https://aws.amazon.com/about-aws/whats-new/2026/04/elastic-beanstalk-ai-analysis-windows/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**