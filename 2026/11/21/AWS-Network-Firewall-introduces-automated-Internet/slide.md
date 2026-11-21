---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Network Firewallが自動化Internetファイアウォールのパブリックプレビューを開始

AWS Network Firewall introduces automated Internet firewall in public preview

**What's New** | 2026-11-20T22:38:00

---

## 概要

- AWS Network Firewallはルーティング変更なしでインターネットゲートウェイにファイアウォールとNATを適用する自動化機能のパブリックプレビューを開始いたしました。
- これは複数VPCの中央集権的なセキュリティ管理を求めるお客様に適しております。

---

## 前提・背景

### これまでの課題

- AWS Network Firewallは自動化されたインターネットファイアウォールのパブリックプレビューを発表いたしました。
- この新機能はすべてのVPCのインターネットゲートウェイ上でネイティブNAT機能付きNetwork Firewallを中央で構成できます。
- ルーティングやアーキテクチャの変更なしに選択したVPCやアカウント、組織全体に展開できます。
- すべてのインバウンドおよびアウトバウンドトラフィックを検査し組み込みNATで出力専用接続をサポートいたします。
- デフォル

---

### 関連する最近の動向

- **AWS Network Firewall introduces automated Internet firewall in public preview - AWS**
  [詳細](https://aws.amazon...

---

## 変更内容・新機能

- AWS Network Firewallは自動化されたインターネットファイアウォールのパブリックプレビューを発表いたしました。
- この新機能はすべてのVPCのインターネットゲートウェイ上でネイティブNAT機能付きNetwork Firewallを中央で構成できます。
- ルーティングやアーキテクチャの変更なしに選択したVPCやアカウント、組織全体に展開できます。
- すべてのインバウンドおよびアウトバウンドトラフィックを検査し組み込みNATで出力専用接続をサポートいたします。
- デフォルトのセキュリティポリシーとAmazon管理ルールグループが付属し将来のVPCにも自動拡張できます。
- この更新は従来VPC内でファイアウォールを手動展開しルート更新や監視が必要だったお客様に適しております。
- 中央でセキュリティポリシーを定義しすべてのインターネットゲートウェイで検査を確実にしたい組織に役立ちます。

---

## まとめ

- AWS Network Firewall introduces automated Internet firewall in public preview について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-automated-internet/)

### 関連情報

- [AWS Network Firewall introduces automated Internet firewall in public preview - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-automated-internet)
- [What is AWS Network Firewall?](https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html)