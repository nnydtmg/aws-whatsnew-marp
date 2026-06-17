---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Secrets Manager、Agent Toolkit for AWS で秘密情報の安全な取り扱いに対応

AWS Secrets Manager introduces safe secrets handling in the Agent Toolkit for AWS

**What's New** | 2026-06-17T07:00:00

---

## 概要

- AWS Secrets Manager は Agent Toolkit for AWS に秘密情報安全スキルを導入し、開発者がモデルコンテキストやログに秘密値を公開することなく、セキュアにエージェントワークフロー内で秘密情報を取り扱えるようになりました。
- この機能は Claude Code、Codex、Cursor などすべてのサポート対象エージェントハーネスで、すべての AWS リージョンにおいて本日より利用可能でございます。

---

## 前提・背景

### 関連する最近の動向

- **Top 6 Secrets Management Tools for Devs in 2026 - DEV Community**
  [詳細](https://dev.to/thedailyagent/top-6-secrets-management-tools-for-devs-in-2026-4ahe)

- **Best Secrets Management Tools for 2026 | Cycode**
  [詳細](https://cycode.com/blog/best-secrets-management-tools)

- **A Deep Dive into AWS Secrets Manager Agent - Clutch Security**
  [詳細](https://www.clutch.security/blog/simplifying-secrets-management-but-at-a-cost-a-deep-dive-into-aws-secrets-manager-agent)

---

## 変更内容・新機能

- AWS Secrets Manager が Agent Toolkit for AWS の aws-core プラグインに秘密情報の安全な取り扱いスキルを導入いたしました。
- このスキルにより、開発者は秘密情報の値を基盤となるモデルやセッションログに公開することなく、エージェントワークフロー内で秘密情報を使用できるようになりました。
- 二層アプローチを採用しており、第一層ではモデルが生の秘密情報を要求または受け取らないよう制御し、第二層では子プロセスが実行時に秘密情報参照を実際の値に解決いたします。
- この機能により、平文の秘密情報がモデルコンテキスト、セッションログ、またはエージェントメモリに表示されることはございません。
- Claude Code、Codex、Cursor を含む Agent Toolkit for AWS がサポートするすべてのエージェントハーネスで利用可能です。
- Secrets Manager が利用可能なすべての AWS リージョンで本日より提供開始されております。

---

## まとめ

- AWS Secrets Manager introduces safe secrets handling in the Agent Toolkit for AWS について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/safe-secrets-handling-in-agent-toolkit-for-aws/)

### 関連情報

- [Top 6 Secrets Management Tools for Devs in 2026 - DEV Community](https://dev.to/thedailyagent/top-6-secrets-management-tools-for-devs-in-2026-4ahe)
- [Best Secrets Management Tools for 2026 | Cycode](https://cycode.com/blog/best-secrets-management-tools)
- [A Deep Dive into AWS Secrets Manager Agent - Clutch Security](https://www.clutch.security/blog/simplifying-secrets-management-but-at-a-cost-a-deep-dive-into-aws-secrets-manager-agent)
- [Why is Secrets Manager considered safe? : r/aws - Reddit](https://www.reddit.com/r/aws/comments/1fc2990/why_is_secrets_manager_considered_safe)
- [AWS Secrets Manager](https://aws.amazon.com/secrets-manager)
