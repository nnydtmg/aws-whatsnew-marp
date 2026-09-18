---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Continuumが認証情報テストとアクセス可能ドメイン提案をサポート

AWS Continuum now supports credential testing and accessible domain suggestions

**What's New** | 2026-09-18T18:34:00

---

## 概要

- AWS Continuumの新機能により、開発者とセキュリティチームはテスト開始前に認証情報の検証とアクセス可能なドメインの提案を受けられるようになりました。
- これにより、正確なスコープ設定が可能となり、無駄なテストサイクルを削減できます。

---

## 前提・背景

### 関連する最近の動向

- **[PDF] AWS Security Agent (now part of AWS Continuum) - User Guide**
  [詳細](https://docs.aws.amazon.com/pdfs/securityagent/latest/userguide/securityagent.pdf)

- **Introducing AWS Continuum for security at machine speed - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-continuum)

- **AWS launches Continuum to find and fix code vulnerabilities at machine speed...

---

## 変更内容・新機能

- AWS Continuumは認証情報のテストとアクセス可能なドメインの提案機能を新たにサポートします。
- ログイン認証情報を追加すると、実際のユーザーと同様に認証を行い、到達したドメインをスコープ内URLとして提案します。
- 実際のテスト開始前にドメインの確認と認証情報の検証が可能です。
- 本アップデートは開発者とセキュリティチームに適しています。
- 正確なネットワークスコープの設定が容易になり、設定ミスと無駄なテストサイクルを削減できます。

---

## 効果・メリット

- - AWS Continuumは認証情報のテストとアクセス可能なドメインの提案機能を新たにサポートします。
- - ログイン認証情報を追加すると、実際のユーザーと同様に認証を行い、到達したドメインをスコープ内URLとして提案します。
- - 実際のテスト開始前にドメインの確認と認証情報の検証が可能です。

---

## まとめ

- AWS Continuum now supports credential testing and accessible domain suggestions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-security-agent/)

### 関連情報

- [[PDF] AWS Security Agent (now part of AWS Continuum) - User Guide](https://docs.aws.amazon.com/pdfs/securityagent/latest/userguide/securityagent.pdf)
- [Introducing AWS Continuum for security at machine speed - AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-continuum)
- [AWS launches Continuum to find and fix code vulnerabilities at machine speed - SiliconANGLE](https://siliconangle.com/2026/06/17/aws-launches-continuum-find-fix-code-vulnerabilities-machine-speed)
- [AWS Continuum to Enable Agentic Code Security for Enterprises - InfoQ](https://www.infoq.com/news/2026/07/aws-continuum-code-security)