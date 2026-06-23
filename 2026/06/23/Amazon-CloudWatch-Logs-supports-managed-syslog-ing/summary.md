# Amazon CloudWatch Logs が管理型 syslog インジェストに対応

Amazon CloudWatch Logs supports managed syslog ingestion

**カテゴリ:** What's New
**公開日:** 2026-06-23T20:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-syslog-ingestion/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Logs supports managed syslog ingestion」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Logsが管理型syslogインジェスト機能に対応し、ネットワークデバイスやLinuxサーバーからのsyslogメッセージをエージェント不要で直接取り込めるようになりました。自動的な構造化フィールド抽出により、インフラストラクチャログの一元管理と運用効率の向上が実現できます。

## このアップデートで何が変わったか

- 中東（UAE）、中東（バーレーン）、イスラエル（テルアビブ）を除く全ての商用AWSリージョンで利用可能です。

## 詳細

- Amazon CloudWatch Logsが管理型syslogインジェストに対応しました。ファイアウォール、ルーター、スイッチ、Linuxサーバーからのsyslogメッセージを直接CloudWatch Logsに送信できるようになりました。

- エージェントのインストールや管理が不要で、TCP、TCP+TLS、またはUDPプロトコルを使用してVPCエンドポイント経由でsyslogメッセージを送信できます。

- RFC 5424、RFC 3164、Cisco FTD/ASA形式のsyslogに対応しており、幅広いインフラストラクチャとの互換性があります。

- CloudWatch Logsが受信したsyslogメッセージを自動的に解析し、facility、severity、hostname、application nameなどの構造化フィールドを抽出します。

- カスタム解析パイプラインが不要になり、Logs Analyticsを使用してseverityやhostnameで即座にクエリを実行できます。

- セキュリティイベントの調査や接続問題のトラブルシューティングが容易になります。

- インフラストラクチャログの可視化を一元化し、運用ワークフローを簡素化し、分散環境全体でのログ収集エージェントのデプロイと保守のオーバーヘッドを削減できます。

- 中東（UAE）、中東（バーレーン）、イスラエル（テルアビブ）を除く全ての商用AWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-syslog-ingestion/)