---
marp: true
theme: default
paginate: true
---

# Amazon EC2 for SQL Server HA now supports health notifications

**What's New** | 2026-04-22T15:00:00

---

## 概要

- 本更新は、Amazon EC2 for SQL Server HA において AWS Health Dashboard を通じた健全性通知機能が新たに追加されたもので、SQL Server HA のステータス検出に問題が生じた場合に複数のチャネルで通知を受け取ることができるようになりました。
- この機能は、ライセンス込みコストの削減を目指す CloudFormation 自動化ユーザーに特に有用であり、予期しない請求コストを回避するための迅速な対応を支援します。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EC2 for SQL Server HA now supports health notifications**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-sql-ha-health-notifications/)

- **Service health - Apr 21, 2026 | AWS Health Dashboard | Global**
  [詳細](https://health.aws.amazon.com/)

- **How to Use AWS Health Dashboard for Service Status - OneUptime**
  [詳細](https://oneuptime.com/blog/post/2026-02-12-aws-health-dashboard-service-status/view)

---

## 変更内容・新機能

- Amazon EC2 for SQL Server HA が AWS Health Dashboard を通じた健全性通知をサポートするようになりました。
- SQL Server High Availability（HA）のステータスが検出できない場合に通知を受け取ることができます。
- AWS Console または CloudFormation 自動化を通じて EC2 SQL HA クラスターを登録するお客様に特に有用です。
- ライセンス込みコストを削減したいお客様に価値があります。
- AWS Health、Amazon EventBridge イベント、メールなど複数のチャネルを通じて通知を受け取ることができます。
- これらの通知により、迅速な対応が可能になり、予期しない請求コストを回避できます。
- この機能は Amazon EC2 SQL HA が利用可能なすべての AWS リージョンおよび AWS GovCloud（US）リージョンでアクセス可能です。

---

## 効果・メリット

- Amazon EC2 for SQL Server HA が AWS Health Dashboard を通じた健全性通知をサポートするようになりました。
- SQL Server High Availability（HA）のステータスが検出できない場合に通知を受け取ることができます。
- AWS Console または CloudFormation 自動化を通じて EC2 SQL HA クラスターを登録するお客様に特に有用です。

---

## まとめ

- Amazon EC2 for SQL Server HA now supports health notifications について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-sql-ha-health-notifications/)

### 関連情報

- [Amazon EC2 for SQL Server HA now supports health notifications](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-sql-ha-health-notifications/)
- [Service health - Apr 21, 2026 | AWS Health Dashboard | Global](https://health.aws.amazon.com/)
- [How to Use AWS Health Dashboard for Service Status - OneUptime](https://oneuptime.com/blog/post/2026-02-12-aws-health-dashboard-service-status/view)