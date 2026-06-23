---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Logs が管理型 syslog インジェストに対応

Amazon CloudWatch Logs supports managed syslog ingestion

**What's New** | 2026-06-23T20:30:00

---

## 概要

- Amazon CloudWatch Logsが管理型syslogインジェスト機能に対応し、ネットワークデバイスやLinuxサーバーからのsyslogメッセージをエージェント不要で直接取り込めるようになりました。
- 自動的な構造化フィールド抽出により、インフラストラクチャログの一元管理と運用効率の向上が実現できます。

---

## 前提・背景

### これまでの課題

- セキュリティイベントの調査や接続問題のトラブルシューティングが容易になります。

---

### 関連する最近の動向

- **Everything New in Amazon CloudWatch Logs Explained - LinkedIn**
  [詳細](https://www.linkedin.com/posts/silvax_everything-new-in-amazon-cloudwatch-logs-activity-7457461597079326720-2wbP)

- **Amazon CloudWatch Logs now supports log ingestion using HTTP-based protocol**
  [詳細](https://aws.amazon.com/about-aws/whats-new/20...

---

## 変更内容・新機能

- 中東（UAE）、中東（バーレーン）、イスラエル（テルアビブ）を除く全ての商用AWSリージョンで利用可能です。

---

## 効果・メリット

- - インフラストラクチャログの可視化を一元化し、運用ワークフローを簡素化し、分散環境全体でのログ収集エージェントのデプロイと保守のオーバーヘッドを削減できます。

---

## まとめ

- Amazon CloudWatch Logs supports managed syslog ingestion について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-syslog-ingestion/)

### 関連情報

- [Everything New in Amazon CloudWatch Logs Explained - LinkedIn](https://www.linkedin.com/posts/silvax_everything-new-in-amazon-cloudwatch-logs-activity-7457461597079326720-2wbP)
- [Amazon CloudWatch Logs now supports log ingestion using HTTP-based protocol](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-http-log-collector)
- [Setting up syslog ingestion - Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_Syslog_Setup.html)
- [AWS CloudWatch Logs Just Changed: The New HTTP Protocol You Need to Know 2026](https://medium.com/codetodeploy/aws-cloudwatch-logs-just-changed-the-new-http-protocol-you-need-to-know-2026-a3ea4a9d17ed)