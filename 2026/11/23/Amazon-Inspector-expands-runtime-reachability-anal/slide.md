---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon InspectorがECRとEC2の検出結果にランタイム到達可能性分析を拡張

Amazon Inspector expands runtime reachability analysis for ECR and EC2 findings

**What's New** | 2026-11-23T08:00:00

---

## 概要

- Amazon Inspectorは、ECRおよびEC2の検出結果に対するランタイム到達可能性分析を追加料金なしで提供し、到達可能な脆弱性の優先修復を可能にいたします。
- 本機能は、Inspectorが利用可能なすべてのAWSリージョンでご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **Document history - Amazon Inspector**
  [詳細](https://docs.aws.amazon.com/inspector/latest/user/doc-history.html)

- **Scanning Amazon EC2 instances with Amazon Inspector**
  [詳細](https://docs.aws.amazon.com/inspector/latest/user/scanning-ec2.html)

- **Amazon Inspector: Continuous CVE Detection and Vulnerability Management on AWS**
  [詳細](https://builder.aws.com/content/3LU9UT7k...

---

## 変更内容・新機能

-新機能は、Amazon InspectorがAmazon ECRおよびAmazon EC2の検出結果に対するランタイム到達可能性分析を拡張したことでございます。
-本機能は、コンテナイメージ内のパッケージ配置とEC2インスタンス上のプロセス活動を分析し、潜在的に到達可能な脆弱性を自動的に特定いたします。
-コンテナイメージではWORKDIR、ENTRYPOINT、またはCMD命令に基づき判定し、EC2では直近のスキャン中に脆弱なパッケージがプロセスとして実行されていたかを確認いたします。
- EC2では、エージェントベースのスキャンのためにInspector VM Scannerをご利用いただく必要がございます。
-本アップデートは、大規模なコンテナフリートや複雑なアプリケーションを管理する組織に適しております。
-セキュリティチームと開発チームは、到達可能な脆弱性と未使用の依存関係を区別し、修復作業をより効率的に進められるようになります。

---

## まとめ

- Amazon Inspector expands runtime reachability analysis for ECR and EC2 findings について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/inspector-runtime-reachability/)

### 関連情報

- [Document history - Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/doc-history.html)
- [Scanning Amazon EC2 instances with Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/scanning-ec2.html)
- [Amazon Inspector: Continuous CVE Detection and Vulnerability Management on AWS](https://builder.aws.com/content/3LU9UT7kAiNWvpPAawEebOODCtv/amazon-inspector-continuous-cve-detection-and-vulnerability-management-on-aws)
- [Vulnerability Management Best Practices Framework Using Amazon Inspector](https://repost.aws/articles/ARK-dJPIqBQReyqYWhiGHhcw/vulnerability-management-best-practices-framework-using-amazon-inspector)