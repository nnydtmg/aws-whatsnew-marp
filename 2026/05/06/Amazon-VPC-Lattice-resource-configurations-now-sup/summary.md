# Amazon VPC Lattice resource configurations now support private domain-name targets

**カテゴリ:** What's New  
**公開日:** 2026-05-04  
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-vpc-lattice/](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-vpc-lattice/)

---

## 要約

Amazon VPC Latticeがプライベートドメイン名ターゲットをサポートするようになり、プライベートFQDNをリソース設定として定義して他のアカウントと安全に共有できるようになりました。リソースゲートウェイの「Resource Config DNS Resolution」を「IN_VPC」に設定することで、公開DNS エントリを必要とせずにクロスアカウントアクセスが可能になります。

## 詳細

- Amazon VPC Latticeのリソース設定が、プライベートドメイン名ターゲットに対応するようになりました。

- プライベートFQDNのリソース設定を定義して、他のアカウントと共有することが可能になりました。

- 以前は公開的に解決可能なドメイン名ターゲットのみがリソース設定を通じて共有できていました。

- プライベートDNSサーバーを使用している顧客は、このメカニズムを使用してFQDNを他のアカウントと共有できるようになりました。

- この機能を有効にするには、リソースゲートウェイの「Resource Config DNS Resolution」プロパティを「IN_VPC」に設定する必要があります。

- VPC LatticeはVPCのDNS設定を使用してFQDNを解決し、公開DNS エントリを必要とせずにトラフィックを正しいバックエンドにルーティングします。

- この機能はAWS Management Console、AWS CLI、AWS SDK、およびAWS APIを通じて有効にできます。

- この機能は、VPC Latticeが利用可能なすべてのAWSリージョンで追加コストなしで利用できます。