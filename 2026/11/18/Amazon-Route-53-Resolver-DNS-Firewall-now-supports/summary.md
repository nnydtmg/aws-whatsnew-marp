# Amazon Route 53 Resolver DNS Firewallが許可リストの自動生成をサポート

Amazon Route 53 Resolver DNS Firewall now supports automated allow-list generation

**カテゴリ:** What's New
**公開日:** 2026-11-17T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-dns-firewall-auto-allowlists/)

このページでは、AWS What's Newで発表された「Amazon Route 53 Resolver DNS Firewall now supports automated allow-list generation」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Route 53 Resolver DNS Firewallに観測トラフィックからの許可リスト自動生成機能が追加され、セキュリティチームの運用負荷を軽減いたします。DNS Firewall Advancedのお客様は追加費用なしでご利用いただけます。

## このアップデートで何が変わったか

Amazon Route 53 Resolver DNS Firewallは、VPCの観測されたDNSクエリトラフィックからドメイン許可リストを自動生成する機能をサポートしました。この機能は最小権限のDNSアクセスを強制し、DNSベースのデータ流出リスクを低減するのに役立ちます。ルックバックウィンドウは1時間から7日間で設定可能で、新たに観測されたドメインをフラグします。従来、最小権限モデルの実装にはセキュリティチームがDNSクエリログを手動分析し、VPCが依存するドメインを特定してから許可リストルールをデプロイする必要がありました。これにより運用負荷が発生し、deny-by-default（walled-garden）姿勢の適用が遅れていました。自動許可リスト生成では、DNS Firewallがルックバックウィンドウ（1時間〜7日間）でDNSクエリトラフィックを分析し、観測されたドメインの許可リストを作成します。その後、継続的にDNSクエリを監視し、新たに観測されたドメインにフラグを立てるため、許可リストに追加する前にレビューできます。AWS Firewall ManagerまたはR

## 詳細

Amazon Route 53 Resolver DNS Firewallは、VPCの観測されたDNSクエリトラフィックからドメイン許可リストを自動生成する機能をサポートしました。この機能は最小権限のDNSアクセスを強制し、DNSベースのデータ流出リスクを低減するのに役立ちます。ルックバックウィンドウは1時間から7日間で設定可能で、新たに観測されたドメインをフラグします。従来、最小権限モデルの実装にはセキュリティチームがDNSクエリログを手動分析し、VPCが依存するドメインを特定してから許可リストルールをデプロイする必要がありました。これにより運用負荷が発生し、deny-by-default（walled-garden）姿勢の適用が遅れていました。自動許可リスト生成では、DNS Firewallがルックバックウィンドウ（1時間〜7日間）でDNSクエリトラフィックを分析し、観測されたドメインの許可リストを作成します。その後、継続的にDNSクエリを監視し、新たに観測されたドメインにフラグを立てるため、許可リストに追加する前にレビューできます。AWS Firewall ManagerまたはRoute 53 Profilesを使用して、複数のVPCおよびアカウントにルールをデプロイできます。この機能はDNS Firewall Advancedのお客様に追加料金なしで提供され、Route 53 DNS FirewallがサポートされているすべてのAWSリージョン（AWS GovCloud (US)およびAmazon Web Services Chinaリージョンを除く）で利用可能です。Route 53 DNS Firewallコンソール、AWS CLI、またはAPIから開始できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-dns-firewall-auto-allowlists/)