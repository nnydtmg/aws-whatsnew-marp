---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS DevOps Agent がエージェントサンドボックスを追加

AWS DevOps Agent adds agent sandboxes

**What's New** | 2026-11-20T08:00:00

---

## 概要

- AWS DevOps Agentにエージェントサンドボックスが追加され、チームの診断スクリプトやエージェントが作成したスクリプトを実行できるようになりました。
- 本機能は既存のスクリプトをお持ちのチームや、効率的なログ分析を求める利用者に適しています。

---

## 前提・背景

### 関連する最近の動向

- **What's new - AWS DevOps Agent**
  [詳細](https://docs.aws.amazon.com/devopsagent/latest/userguide/whats-new.html)

- **This Month in AWS DevOps Agent: November 2026**
  [詳細](https://aws.amazon.com/blogs/mt/this-month-in-aws-devops-agent-november-2026)

- **AWS DevOps Agent adds agent sandboxes**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-devops-agent-adds-agent-...

---

## 変更内容・新機能

新機能は、AWS DevOps Agentに追加されたエージェントサンドボックスです。スキルにスクリプトを含めて、エージェントがサンドボックス内で実行できるようになりました。エージェント自身がスクリプトを作成して実行することも可能になりました。本アップデートは、既存の診断スクリプトをお持ちのチームに適しています。ログやメトリクスの分析を効率的に行いたい利用者にも有用です。サンドボックスなしでは、スキルにスクリプトを説明するだけでエージェントが正しく再構築することを期待するしかありませんでした。サンドボックスがあれば、スキルにスクリプトを直接含め、エージェントはチーム独自の診断スクリプトを実行し、数値の意味の解釈に推論を集中できます。例えば、サンドボックスを使えばエージェントは4つのログクエリをリクエストフローの各ステップごとに並列実行し、結合して各ステップの時間を計測し、過去のリクエストフローでも同じ分析を再生するスクリプトを作成・実行できます。サンドボックスは分離されたLambda MicroVMで実行され、AWS CLI/SDK呼び出しは読み取り専用に制限されます。各サンドボックス

---

## ユースケース

新機能は、AWS DevOps Agentに追加されたエージェントサンドボックスです。スキルにスクリプトを含めて、エージェントがサンドボックス内で実行できるようになりました。エージェント自身がスクリプトを作成して実行することも可能になりました。本アップデートは、既存の診断スクリプトをお持ちのチームに適しています。ログやメトリクスの分析を効率的に行いたい利用者にも有用です。サンドボックスなしでは、スキルにスクリプトを説明するだけでエージェントが正しく再構築することを期待するしかありませんでした。サンドボックスがあれば、スキルにスクリプトを直接含め、エージェントはチーム独自の診断スクリプトを実行し

---

## まとめ

- AWS DevOps Agent adds agent sandboxes について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-devops-agent-adds-agent-sandboxes/)

### 関連情報

- [What's new - AWS DevOps Agent](https://docs.aws.amazon.com/devopsagent/latest/userguide/whats-new.html)
- [This Month in AWS DevOps Agent: November 2026](https://aws.amazon.com/blogs/mt/this-month-in-aws-devops-agent-november-2026)
- [AWS DevOps Agent adds agent sandboxes](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-devops-agent-adds-agent-sandboxes/)