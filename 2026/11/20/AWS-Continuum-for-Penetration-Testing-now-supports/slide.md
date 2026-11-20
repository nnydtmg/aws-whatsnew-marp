---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Continuum for Penetration Testing が一時停止と再開をサポート

AWS Continuum for Penetration Testing now supports pause and resume

**What's New** | 2026-11-19T08:00:00

---

## 概要

- AWS Continuum for Penetration Testingは、実行中のペネトレーションテストジョブの一時停止と再開をサポートするようになりました。
- この更新により、セキュリティチームは既存の作業を保持したままテストを継続できます。

---

## 前提・背景

### これまでの課題

AWS Continuum for Penetration Testing (formerly AWS Security Agent) now lets you pause a running penetration test job and resume it later from its last saved checkpoint. Continuum for Penetration Testing runs on-demand, AI-driven penetration tests ag

---

### 関連する最近の動向

- **AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your...

---

## 変更内容・新機能

When you resume a paused or failed pen test job, it keeps its findings and completed work and continues where it left off. You can pause a pen test job during a deployment or maintenance window, raise the task-hour limit of a pen test job that has reached it, or replace test credentials that expired mid-test. Before you resume, you can also update the network traffic settings or VPC configuration, while the pen test job's scope, including its target endpoints, stays the same.

- 新機能は、AWS Continu

---

## まとめ

- AWS Continuum for Penetration Testing now supports pause and resume について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/continuum-pentest-pause-resume/)

### 関連情報

- [AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing)
- [Shifting Security Left with AWS Continuum: From Reactive Scanning to Continuous Validation | AWS re:Post](https://repost.aws/articles/AR563wo1hiQtCrpo6VvDNknQ/shifting-security-left-with-aws-continuum-from-reactive-scanning-to-continuous-validation)
- [Penetration testing every deployment with AWS Continuum | AWS Security Blog](https://aws.amazon.com/blogs/security/penetration-testing-every-deployment-with-aws-continuum)
- [AWS Continuum for Penetration Testing now supports pause and resume - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/continuum-pentest-pause-resume/)