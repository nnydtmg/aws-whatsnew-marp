# Amazon InspectorがECRとEC2の検出結果にランタイム到達可能性分析を拡張

Amazon Inspector expands runtime reachability analysis for ECR and EC2 findings

**カテゴリ:** What's New
**公開日:** 2026-11-23T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/inspector-runtime-reachability/)

このページでは、AWS What's Newで発表された「Amazon Inspector expands runtime reachability analysis for ECR and EC2 findings」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Inspectorは、ECRおよびEC2の検出結果に対するランタイム到達可能性分析を追加料金なしで提供し、到達可能な脆弱性の優先修復を可能にいたします。本機能は、Inspectorが利用可能なすべてのAWSリージョンでご利用いただけます。

## このアップデートで何が変わったか

-新機能は、Amazon InspectorがAmazon ECRおよびAmazon EC2の検出結果に対するランタイム到達可能性分析を拡張したことでございます。
-本機能は、コンテナイメージ内のパッケージ配置とEC2インスタンス上のプロセス活動を分析し、潜在的に到達可能な脆弱性を自動的に特定いたします。
-コンテナイメージではWORKDIR、ENTRYPOINT、またはCMD命令に基づき判定し、EC2では直近のスキャン中に脆弱なパッケージがプロセスとして実行されていたかを確認いたします。
- EC2では、エージェントベースのスキャンのためにInspector VM Scannerをご利用いただく必要がございます。
-本アップデートは、大規模なコンテナフリートや複雑なアプリケーションを管理する組織に適しております。
-セキュリティチームと開発チームは、到達可能な脆弱性と未使用の依存関係を区別し、修復作業をより効率的に進められるようになります。

## 詳細

-新機能は、Amazon InspectorがAmazon ECRおよびAmazon EC2の検出結果に対するランタイム到達可能性分析を拡張したことでございます。
-本機能は、コンテナイメージ内のパッケージ配置とEC2インスタンス上のプロセス活動を分析し、潜在的に到達可能な脆弱性を自動的に特定いたします。
-コンテナイメージではWORKDIR、ENTRYPOINT、またはCMD命令に基づき判定し、EC2では直近のスキャン中に脆弱なパッケージがプロセスとして実行されていたかを確認いたします。
- EC2では、エージェントベースのスキャンのためにInspector VM Scannerをご利用いただく必要がございます。
-本アップデートは、大規模なコンテナフリートや複雑なアプリケーションを管理する組織に適しております。
-セキュリティチームと開発チームは、到達可能な脆弱性と未使用の依存関係を区別し、修復作業をより効率的に進められるようになります。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/inspector-runtime-reachability/)