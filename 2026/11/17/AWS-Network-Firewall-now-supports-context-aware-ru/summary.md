# AWS Network FirewallがTransit Gateway接続でコンテキスト対応ルールをサポート

AWS Network Firewall now supports context-aware rules with AWS Transit Gateway-attached firewalls

**カテゴリ:** What's New
**公開日:** 2026-11-16T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-context-aware-rules/)

このページでは、AWS What's Newで発表された「AWS Network Firewall now supports context-aware rules with AWS Transit Gateway-attached firewalls」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Transit Gateway接続のNetwork Firewallで、IPアドレスではなくVPCリソースのコンテキストを参照するルールがご利用いただけるようになりました。本更新は、組織の拡大に合わせて一貫したセキュリティ管理を自動化したいお客様に適しております。

## このアップデートで何が変わったか

AWS Transit Gatewayに接続されたAWS Network Firewallでコンテキスト対応ルール（context-aware rules）が利用可能になりました。コンテキスト対応ルールでは、IPアドレスではなくVPC、サブネット、セキュリティグループおよびTransit Gatewayアタッチメント識別子（コンテキスト識別子）を参照してトラフィックを照合できます。送信元コンテキストは全プロトコルで利用でき、宛先コンテキストはHTTP、TLS、SSHなどのTCPベースプロトコルで利用できます。既存のルールが新しいワークロードを自動的にカバーするため、ルールを手動で更新する必要がありません。FlowログとAlertログにはコンテキスト識別子が含まれるため、コンテキストに基づいた調査が可能です。本機能は追加料金なしで、すべての商用リージョンおよびAWS GovCloud (US)リージョンで利用できます。Transit Gateway接続ファイアウォールでのみサポートされ、Transit Gatewayに関連付けられたコンテキストストアが必要です。組織の成長に伴い一貫したセ

## 詳細

AWS Transit Gatewayに接続されたAWS Network Firewallでコンテキスト対応ルール（context-aware rules）が利用可能になりました。コンテキスト対応ルールでは、IPアドレスではなくVPC、サブネット、セキュリティグループおよびTransit Gatewayアタッチメント識別子（コンテキスト識別子）を参照してトラフィックを照合できます。送信元コンテキストは全プロトコルで利用でき、宛先コンテキストはHTTP、TLS、SSHなどのTCPベースプロトコルで利用できます。既存のルールが新しいワークロードを自動的にカバーするため、ルールを手動で更新する必要がありません。FlowログとAlertログにはコンテキスト識別子が含まれるため、コンテキストに基づいた調査が可能です。本機能は追加料金なしで、すべての商用リージョンおよびAWS GovCloud (US)リージョンで利用できます。Transit Gateway接続ファイアウォールでのみサポートされ、Transit Gatewayに関連付けられたコンテキストストアが必要です。組織の成長に伴い一貫したセキュリティ管理を適用したいお客様、VPCリソースのコンテキストに基づいてファイアウォールポリシーを運用されたいお客様にとって有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-context-aware-rules/)