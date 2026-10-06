---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Continuum for Penetration TestingがCI/CDへの継続的ペネトレーションテスト統合を提供

AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline

**What's New** | 2026-10-05T18:32:00

---

## 概要

- AWS Continuum for Penetration TestingはCI/CDパイプラインへの継続的なペネトレーションテスト統合をパブリックプレビューで提供します。
- 開発チームはセキュリティの所見（重大度・影響エンドポイント・修復ガイダンス）をパイプライン出力で直接受け取れます。
- 開始にはセキュリティの専門知識が不要で、自動生成スニペットを既存パイプラインに貼り付けるだけで5分以内で完了します。
- この更新は毎日コードを出荷する開発チームにとって有益です。

---

## 前提・背景

### 関連する最近の動向

- **Run penetration tests from your CI/CD pipeline - AWS Security Agent (now part of AWS Continuum)**
  [詳細](https://docs.aws.amazon.com/securityagent/latest/userguide/cicd-pentest.html)

- **Features | AWS Continuum | Amazon Web Services**
  [詳細](https://aws.amazon.com/continuum/features)

- **Tutorial: Gate a GitLab CI/CD deployment with a scoped penetration test - AWS Security Ag...

---

## 変更内容・新機能

開発チームは毎日コードを出荷していますが、オンデマンドのペネトレーションテストが利用可能でも、セキュリティ検証はデプロイワークフローの外側で行われることが多いでした。CI/CD統合によりこのギャップが解消されます。

この更新は毎日コードを出荷する開発チームにとって有益です。CI/CDシステムを使用しセキュリティ検証をデプロイワークフローに組み込みたいチームに適しています。

---

## まとめ

- AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing/)

### 関連情報

- [Run penetration tests from your CI/CD pipeline - AWS Security Agent (now part of AWS Continuum)](https://docs.aws.amazon.com/securityagent/latest/userguide/cicd-pentest.html)
- [Features | AWS Continuum | Amazon Web Services](https://aws.amazon.com/continuum/features)
- [Tutorial: Gate a GitLab CI/CD deployment with a scoped penetration test - AWS Security Agent (now part of AWS Continuum)](https://docs.aws.amazon.com/securityagent/latest/userguide/sample-cicd-gitlab.html)
- [AWS Continuum now supports credential testing and accessible domain suggestions](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-security-agent)
- [AWS Continuum to Enable Agentic Code Security for Enterprises - InfoQ](https://www.infoq.com/news/2026/07/aws-continuum-code-security)