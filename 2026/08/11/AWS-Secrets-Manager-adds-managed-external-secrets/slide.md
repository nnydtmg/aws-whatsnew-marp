---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Secrets ManagerがJenkinsとSonarQube向けマネージド外部シークレットをサポート開始

AWS Secrets Manager adds managed external secrets support for Jenkins and SonarQube

**What's New** | 2026-08-11

---

## 概要

- AWS Secrets Manager が Jenkins API トークンと SonarQube トークンの自動ローテーション機能をサポートするようになり、カスタムコード不要でこれらのサードパーティ認証情報を安全に管理できるようになりました。
- このアップデートは、CI/CD パイプラインのセキュリティを強化し、運用負荷を軽減する必要がある組織に特に有用です。

---

## 前提・背景

### CI/CD パイプラインのセキュリティ課題

- Jenkins と SonarQube で使用されるトークンの管理が複雑化
- 手動でのトークンローテーションによる運用負荷
- セキュリティリスクの増加

### 既存統合サービス

- BigID、Confluent Cloud、Datadog、GitLab
- MongoDB Atlas、Okta、Paddle、Salesforce、Snowflake
- これらのサービス向けには既に管理外部シークレット機能がサポート済み

---

## 主な変更内容

### Jenkins 統合

- **自動トークンローテーション**: 新しいトークンを生成し、置き換えが検証されてアクティブになった後にのみ古いトークンを失効
- **CI/CD ジョブの中断なし**: トークン置き換え時に流れを中断しない設計
- **ローテーション方式**: 自己ローテーションとアドミン支援ローテーションの 2 つに対応

### SonarQube 統合

- **3 種類のトークンをサポート**:
  - ユーザートークン（自己ローテーション対応）
  - グローバル分析トークン
  - プロジェクト分析トークン
- **ローテーション方式**: 分析トークンはアドミントークンを使用してローテーション

---

## 主なメリット

- **セキュリティ向上**: カスタムコード不要で自動ローテーション実現
- **運用効率化**: AWS コンソールからの一元管理で手作業を削減
- **信頼性**: 無停止での認証情報更新
- **規模の拡張性**: すべての AWS リージョンで利用可能

---

## 利用可能性

- **対応リージョン**: AWS Secrets Manager 管理外部シークレットがサポートされているすべての AWS リージョン
- **対象ユーザー**:
  - DevOps チーム
  - セキュリティチーム
  - CI/CD パイプラインを管理する組織

---

## まとめ

- AWS Secrets Manager が Jenkins と SonarQube のトークン自動ローテーション機能をサポート開始
- カスタムコード不要でセキュアな認証情報管理を実現
- CI/CD パイプラインのセキュリティと運用効率を大幅に改善
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/secrets-manager-integration-jenkins-sonarqube/)
- [AWS Secrets Manager ドキュメント](https://docs.aws.amazon.com/secretsmanager/)
- [Jenkins プラグイン - AWS Secrets Manager Credentials Provider](https://plugins.jenkins.io/aws-secrets-manager-credentials-provider)
- [GitHub - AWS Secrets Manager Secret Source Plugin](https://github.com/jenkinsci/aws-secrets-manager-secret-source-plugin)
