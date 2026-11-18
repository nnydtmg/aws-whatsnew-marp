# Amazon Aurora DSQLが監査ログ機能をサポート開始

Amazon Aurora DSQL now supports audit logging

**カテゴリ:** What's New
**公開日:** 2026-11-18T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-aurora-dsql-audit-logging/)

このページでは、AWS What's Newで発表された「Amazon Aurora DSQL now supports audit logging」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Aurora DSQLはデータベース内部の監査ログ機能を新たにサポートします。SQL文の実行内容をフルマネージドで記録し、金融機関や規制対象企業の本番環境コンプライアンス要件を満たせます。

## このアップデートで何が変わったか

Amazon Aurora DSQL now supports database-internal audit logging, a fully managed capability that captures SQL statements executed on your cluster. Previously, AWS CloudTrail recorded who connected to a DSQL cluster, but not what they did once inside it. Now, financial institutions and regulated enterprises can meet production compliance requirements by capturing DDL, DML, DCL, and SELECT statements with full statement text, bind parameters, acting principal (both PostgreSQL role and AWS IAM iden

## 対象ユーザー

Amazon Aurora DSQL now supports database-internal audit logging, a fully managed capability that captures SQL statements executed on your cluster. Previously, AWS CloudTrail recorded who connected to a DSQL cluster, but not what they did once inside it. Now, financial institutions and regulated ente

## 詳細

Amazon Aurora DSQL now supports database-internal audit logging, a fully managed capability that captures SQL statements executed on your cluster. Previously, AWS CloudTrail recorded who connected to a DSQL cluster, but not what they did once inside it. Now, financial institutions and regulated enterprises can meet production compliance requirements by capturing DDL, DML, DCL, and SELECT statements with full statement text, bind parameters, acting principal (both PostgreSQL role and AWS IAM identity), timestamp, table name, and transaction identifier. With audit logging, you can feed SIEM systems directly from Amazon S3, satisfy auditor requirements for change accountability, and reconstruct events after security incidents. Logs are delivered as structured JSON to your S3 bucket via CloudWatch Vended Logs. Configuration requires a single SQL setting—no extension to load and no log-shipping pipeline to build. Audit logging is available in all AWS Regions where Aurora DSQL is available. Audit logging will incur Aurora DSQL DPU charges, charges for log delivery through CloudWatch Logs, and charges for storing audit records in Amazon S3. Audit logging has two parts: Audit log delivery (CloudWatch Vended Logs to S3) and Audit settings (SQL to choose statement classes per database role). Audit logging complements AWS CloudTrail. In a multi-Region cluster, all clusters share the same audit settings. When you restore a backup, the new cluster has the audit settings of the backup but not its audit log delivery. Recommended to audit only ddl, role, and write classes to control costs.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-aurora-dsql-audit-logging/)