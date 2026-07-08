# AWS Security Hub でネットワークスキャンが利用可能に

AWS Security Hub now offers Network Scanning to identify publicly reachable resources

**カテゴリ:** What's New
**公開日:** 2026-07-08T21:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-network-scanning/)

このページでは、AWS What's Newで発表された「AWS Security Hub now offers Network Scanning to identify publicly reachable resources」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Security Hubが新たに導入したNetwork Scanning機能により、インターネットから実際に到達可能なリソースを自動的に検出し、セキュリティリスクを可視化することが可能になりました。この機能はSecurity Hub Essentialsに含まれており、既存顧客および新規顧客の双方にとって追加費用なしで利用できるため、組織全体のセキュリティ体制の強化に貢献いたします。

## このアップデートで何が変わったか

- AWS Security Hubが新たにNetwork Scanningという機能を提供開始いたしました。
- この機能は、インターネットから公開されているリソースを特定することができます。
- セキュリティグループやルートテーブルの設定だけでなく、実際のインターネット到達可能性を検出いたします。
- パブリックIPアドレス、仮想マシン、ロードバランサーをAWSおよびAzure環境全体で発見できます。
- 到達可能なポートとそれらの背後で動作しているサービスを特定いたします。
- 各到達可能なポートに対してSecurity Hubのファインディングが生成されます。
- Security Hub Exposuresが他のファインディングとリソース設定を自動的に相関させ、より広範なリスクを判定いたします。
- 既存顧客は個別アカウント、リージョン、または組織全体でNetwork Scanningを有効化できます。
- 新規顧客の場合、Network Scanningはデフォルトで有効になっております。
- Security Hub Essentialsに含まれており、追加費用なしで利用できます。
- Security HubをサポートするすべてのAWSコマーシャルリージョンで利用可能です。

## 詳細

### 機能の詳細

- AWS Security Hubが新たにNetwork Scanningという機能を提供開始いたしました。
- この機能は、インターネットから公開されているリソースを特定することができます。
- セキュリティグループやルートテーブルの設定だけでなく、実際のインターネット到達可能性を検出いたします。
- パブリックIPアドレス、仮想マシン、ロードバランサーをAWSおよびAzure環境全体で発見できます。
- 到達可能なポートとそれらの背後で動作しているサービスを特定いたします。
- 各到達可能なポートに対してSecurity Hubのファインディングが生成されます。

### 相関分析機能

- Security Hub Exposuresが他のファインディングとリソース設定を自動的に相関させ、より広範なリスクを判定いたします。

### 利用方法

- 既存顧客は個別アカウント、リージョン、または組織全体でNetwork Scanningを有効化できます。
- 新規顧客の場合、Network Scanningはデフォルトで有効になっております。

### 利用可能範囲

- Security Hub Essentialsに含まれており、追加費用なしで利用できます。
- Security HubをサポートするすべてのAWSコマーシャルリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-network-scanning/)