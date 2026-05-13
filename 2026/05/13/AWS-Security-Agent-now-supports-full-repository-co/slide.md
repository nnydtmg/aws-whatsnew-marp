---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security Agent が全リポジトリのコードレビューに対応

AWS Security Agent now supports full repository code reviews

**What's New** | 2026-05-12T17:37:00

---

## 概要

- AWS Security Agent の全リポジトリコードレビュー機能により、従来のパターンマッチング手法では検出できないシステム的な脆弱性を深い文脈認識型の分析で発見し、具体的な修復コードを自動生成することが可能になりました。
- 本機能は既存顧客向けにプレビュー期間中は無料で提供されており、セキュリティチームが脆弱性の特定と修復を迅速に行うために特に有効です。

---

## 前提・背景

### これまでの課題

- 従来の静的分析ツールとは異なり、既知の脆弱性パターンとの照合ではなく、アプリケーションのアーキテクチャ、信頼境界、データフローを分析して、パターンマッチングツールでは検出できないシステム的な脆弱性を発見いたします。

---

### 関連する最近の動向

- **I ran AWS Security Agent's full pipeline on my personal project**
  [詳細](https://dev.to/aws-builders/i-ran-aws-security-agents-full-pipeline-on-my-personal-project-design-review-code-review-and-1cp2)

- **ICYMI: April 2026 @AWS Security**
  [詳細](https://aws.amazon.com/blogs/security/icymi-april-2026-aws-security/)

---

## 変更内容・新機能

- AWS Security Agent は、2026年5月12日に全リポジトリコードレビュー機能をリリースしたことを発表いたしました。

- この新機能は、コードベース全体に対して深い文脈認識型のセキュリティ分析を実行するものです。

---

## ユースケース

- 開発チームやセキュリティ運用チームが、AIドリブンのセキュリティ分析を活用して、システム的な脆弱性に対応したい場合に特に有効です。

---

## まとめ

- AWS Security Agent now supports full repository code reviews について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-security-agent-full-repository-code-review/)

### 関連情報

- [I ran AWS Security Agent's full pipeline on my personal project](https://dev.to/aws-builders/i-ran-aws-security-agents-full-pipeline-on-my-personal-project-design-review-code-review-and-1cp2)
- [ICYMI: April 2026 @AWS Security](https://aws.amazon.com/blogs/security/icymi-april-2026-aws-security/)
- [12 AWS Cloud Security Best Practices for 2026](https://blog.qualys.com/product-tech/2026/04/09/1aws-cloud-security-best-practices-guide)