# Amazon OpenSearch Service now supports VPC egress for private connectivity to resources in your VPC

**カテゴリ:** What's New
**公開日:** 2026-05-07
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-opensearch-service-vpc](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-opensearch-service-vpc)

---

## 要約

Amazon OpenSearch Service が VPC egress オプションをサポート開始し、VPC ドメインがインターネットにトラフィックを公開することなく VPC 内のリソースとプライベート接続を確立できるようになりました。このアップデートは、セキュリティ要件が厳しく VPC 内のリソースとの安全な通信が必要なお客様に適しています。

## 詳細

- Amazon OpenSearch Service が VPC egress オプションをサポートするようになりました。
- VPC egress オプションにより、VPC ドメインが VPC 内のリソース（ML モデル、AWS サービス、カスタムアプリケーションなど）とのプライベートネットワーク接続を確立できます。
- このオプションを有効にすると、インターネットにトラフィックを公開することなく通信が実現されます。
- VPC egress オプションは Amazon OpenSearch Service console、AWS CLI、CreateDomain および UpdateDomainConfig API 操作を使用して有効または無効にできます。
- VPC egress は Amazon OpenSearch Service が利用可能なすべての AWS リージョンでサポートされています。