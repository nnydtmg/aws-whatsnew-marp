# Amazon Route 53 Resolver DNS Firewall が Palo Alto Networks Advanced DNS Security をサポート（プレビュー）

Amazon Route 53 Resolver DNS Firewall now supports Palo Alto Networks Advanced DNS Security (Preview)

**カテゴリ:** What's New
**公開日:** 2026-06-15T17:06:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-route-53-resolver-dns/)

このページでは、AWS What's Newで発表された「Amazon Route 53 Resolver DNS Firewall now supports Palo Alto Networks Advanced DNS Security (Preview)」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Route 53 Resolver DNS FirewallがPalo Alto Networks Advanced DNS Securityをサポートするようになり、別途ファイアウォールをデプロイすることなく、DNS脅威対策を統一的に実行できるようになりました。このアップデートは、セキュリティ運用を簡素化し、AWS VPCとハイブリッドクラウド環境全体にわたって一元化されたDNS脅威保護を必要とする組織に特に有益です。

## このアップデートで何が変わったか

- 米国東部（オハイオ）、米国西部（北カリフォルニア）、ヨーロッパ（ロンドン）、ヨーロッパ（フランクフルト）、アジアパシフィック（東京）、アジアパシフィック（ムンバイ）、アジアパシフィック（シンガポール）、アフリカ（ケープタウン）で利用可能です。

- DNS Firewall Advancedのお客様は、既存のルールグループにPaloAltoNetworksルールを追加でき、DNS Firewallの追加料金は発生しません。

## 対象ユーザー

このアップデートは、セキュリティ管理者やクラウドアーキテクト、複数のVPCやハイブリッド環境を管理する組織に適しています。

## 詳細

- Amazon Route 53 Resolver DNS Firewallが、Palo Alto Networks Advanced DNS Securityをサポートすることになりました。

- 別途ファイアウォールをデプロイしたり、VPC設定を変更したりすることなく、DNS脅威対策をRoute 53 DNS Firewallルール内で直接実行できるようになりました。

- Command and Control、Malware、Phishing、Newly Registered Domainsなど、複数のセキュリティカテゴリをDNS Firewallルール作成ワークフロー内で適用できます。

- AWS VPCおよびハイブリッドクラウド環境のDNSクエリトラフィックに対して、統一されたDNS脅威対策を提供できるようになりました。

- Fast-flux保護、DNSトンネリング検出、DNSリバインディング保護、DGA検出などのPalo Alto Networks脅威インテリジェンスが利用できます。

- 複数のVPCやアカウントごとに別途PaloAltoNetworksファイアウォールをデプロイする必要がなくなり、セキュリティ運用が簡素化されます。

- AWS Resource Access Manager、Route 53 Profiles、AWS Firewall Managerを通じた複数アカウント管理に対応しています。

- AWS Security Hubの検出結果とクエリログ（Amazon S3、Amazon Data Firehose、Amazon CloudWatch Logsに保存）により、一元化された可視性が得られます。

- 米国東部（オハイオ）、米国西部（北カリフォルニア）、ヨーロッパ（ロンドン）、ヨーロッパ（フランクフルト）、アジアパシフィック（東京）、アジアパシフィック（ムンバイ）、アジアパシフィック（シンガポール）、アフリカ（ケープタウン）で利用可能です。

- DNS Firewall Advancedのお客様は、既存のルールグループにPaloAltoNetworksルールを追加でき、DNS Firewallの追加料金は発生しません。

- プレビュー期間中、Palo Alto Networks Advanced DNS SecurityのMarketplace購読は無料です。

このアップデートは、セキュリティ管理者やクラウドアーキテクト、複数のVPCやハイブリッド環境を管理する組織に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-route-53-resolver-dns/)