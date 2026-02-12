# AWS Backup adds cross-Region database snapshot copy to logically air-gapped vaults

**カテゴリ:** What's New
**公開日:** 2026-02-12T11:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/aws-backup-adds-cross-region-database-snapshot-logically-air-gapped-vaults/](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-backup-adds-cross-region-database-snapshot-logically-air-gapped-vaults/)

---

## 要約

AWS Backupは、Amazon Aurora、Neptune、DocumentDBのスナップショットについて、クロスリージョンの論理的にエアギャップされたコンテナへの単一ステップでのコピー機能を提供するようになりました。この機能により、復旧時間目標の短縮、中間コピーコストの削減、およびカスタムスクリプトの不要化が実現されます。

## 詳細

- AWS Backupは、Amazon Aurora、Amazon Neptune、およびAmazon DocumentDBのスナップショットについて、AWSリージョン全体にわたる論理的にエアギャップされたコンテナへの単一アクション型のクロスリージョンデータベーススナップショットコピー機能をサポートするようになりました。

- この新機能により、ターゲットリージョンでの中間的なコピーステップが不要になり、ユーザーはランサムウェアイベントやリージョン障害などのインシデントから本番環境を保護できるようになりました。

- 従来は2ステップのプロセス（まずターゲットリージョンのバックアップコンテナにスナップショットをコピーし、その後同じリージョン内の論理的にエアギャップされたコンテナにコピー）が必要でしたが、現在は1ステップで完了できます。

- この改善により、復旧時間目標（RPO）がより短くなり、中間コピーに関連するコストが削減され、中間コピーステータスを監視するためのカスタムスクリプトやAWS Lambda関数の必要性が排除されます。

- この機能はAWS Management Console、AWS Command Line Interface（CLI）、またはAWS SDKsを通じて本日から利用可能です。