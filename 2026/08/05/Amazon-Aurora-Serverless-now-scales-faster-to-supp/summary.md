# Amazon Aurora Serverless がエージェンティック AI をサポートするために高速スケーリングに対応

Amazon Aurora Serverless now scales faster to support agentic AI and other bursty workloads

**カテゴリ:** What's New
**公開日:** 2026-08-05
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-serverless-instant-12-acu-scaling)

このページでは、AWS What's Newで発表された「Amazon Aurora Serverless now scales faster to support agentic AI and other bursty workloads」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Aurora Serverlessは、1秒以内に最大12 ACUまでスケールアップし、最大256 ACUまで継続的にスケール可能になり、ワークロード完了時には自動的にゼロまでスケールダウンする新機能を提供いたしました。この機能は、バースト的なアクティビティと予測不可能なトラフィックパターンを持つエージェンティックAIアプリケーションに特に適しており、使用した分だけの料金を支払う効率的なソリューションとなっております。

## このアップデートで何が変わったか

Amazon Aurora Serverlessは、1秒以内に最大12 ACUまでスケールアップし、最大256 ACUまで継続的にスケール可能になり、ワークロード完了時には自動的にゼロまでスケールダウンする新機能を提供いたしました。この機能は、バースト的なアクティビティと予測不可能なトラフィックパターンを持つエージェンティックAIアプリケーションに特に適しており、使用した分だけの料金を支払う効率的なソリューションとなっております。

## 詳細

- Amazon Aurora Serverlessは、スケールアップイベント中により高い初期容量を提供し、1秒以内に最大12 ACUに到達し、ワークロードの成長に応じて256 ACUまでスケールアップし続けることができるようになりました。
- ワークロードが完了すると、Aurora Serverlessは自動的にゼロまでスケールダウンします。
- この機能は、バースト的なアクティビティ、長いアイドル期間、および予測不可能なトラフィックパターンを持つエージェンティックAIアプリケーションに特に適しており、使用した分だけの料金を支払うことができます。
- この改善は、プラットフォームバージョン3または4を実行しているすべてのAurora Serverlessクラスターでデフォルトで有効になっており、設定変更は不要です。
- プラットフォームバージョン1および2の既存クラスターは、これらの改善の恩恵を受けるために、直接最新のプラットフォームバージョン4にアップグレードできます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-serverless-instant-12-acu-scaling)