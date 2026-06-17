# AWS Secrets Manager、Agent Toolkit for AWS で秘密情報の安全な取り扱いに対応

AWS Secrets Manager introduces safe secrets handling in the Agent Toolkit for AWS

**カテゴリ:** What's New
**公開日:** 2026-06-17T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/safe-secrets-handling-in-agent-toolkit-for-aws/)

このページでは、AWS What's Newで発表された「AWS Secrets Manager introduces safe secrets handling in the Agent Toolkit for AWS」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Secrets Manager は Agent Toolkit for AWS に秘密情報安全スキルを導入し、開発者がモデルコンテキストやログに秘密値を公開することなく、セキュアにエージェントワークフロー内で秘密情報を取り扱えるようになりました。この機能は Claude Code、Codex、Cursor などすべてのサポート対象エージェントハーネスで、すべての AWS リージョンにおいて本日より利用可能でございます。

## このアップデートで何が変わったか

- AWS Secrets Manager が Agent Toolkit for AWS の aws-core プラグインに秘密情報の安全な取り扱いスキルを導入いたしました。
- このスキルにより、開発者は秘密情報の値を基盤となるモデルやセッションログに公開することなく、エージェントワークフロー内で秘密情報を使用できるようになりました。
- 二層アプローチを採用しており、第一層ではモデルが生の秘密情報を要求または受け取らないよう制御し、第二層では子プロセスが実行時に秘密情報参照を実際の値に解決いたします。
- この機能により、平文の秘密情報がモデルコンテキスト、セッションログ、またはエージェントメモリに表示されることはございません。
- Claude Code、Codex、Cursor を含む Agent Toolkit for AWS がサポートするすべてのエージェントハーネスで利用可能です。
- Secrets Manager が利用可能なすべての AWS リージョンで本日より提供開始されております。

## 対象ユーザー

- AWS Secrets Manager が Agent Toolkit for AWS の aws-core プラグインに秘密情報の安全な取り扱いスキルを導入いたしました。
- このスキルにより、開発者は秘密情報の値を基盤となるモデルやセッションログに公開することなく、エージェントワークフロー内で秘密情報を使用できるようになりました。
- 二層アプローチを採用しており、第一層ではモデルが生の秘密情報を要求または受け取らないよう制御し、第二層では子プロセスが実行時に秘密情報参照を実際の値に解決いたします。
- この機能により、平文の秘密情報がモデルコンテキスト、セッションログ、またはエージェントメモリに表示されることはございません。

## 詳細

- AWS Secrets Manager が Agent Toolkit for AWS の aws-core プラグインに秘密情報の安全な取り扱いスキルを導入いたしました。
- このスキルにより、開発者は秘密情報の値を基盤となるモデルやセッションログに公開することなく、エージェントワークフロー内で秘密情報を使用できるようになりました。
- 二層アプローチを採用しており、第一層ではモデルが生の秘密情報を要求または受け取らないよう制御し、第二層では子プロセスが実行時に秘密情報参照を実際の値に解決いたします。
- この機能により、平文の秘密情報がモデルコンテキスト、セッションログ、またはエージェントメモリに表示されることはございません。
- Claude Code、Codex、Cursor を含む Agent Toolkit for AWS がサポートするすべてのエージェントハーネスで利用可能です。
- Secrets Manager が利用可能なすべての AWS リージョンで本日より提供開始されております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/safe-secrets-handling-in-agent-toolkit-for-aws/)
