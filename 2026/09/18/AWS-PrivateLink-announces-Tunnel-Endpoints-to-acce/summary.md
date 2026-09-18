# AWS PrivateLink、ネットワークセグメントへのアクセスを実現するトンネルエンドポイントを発表

AWS PrivateLink announces Tunnel Endpoints to access network segments

**カテゴリ:** What's New
**公開日:** 2026-09-18
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/9/privatelink-tunnel-endpoint/)

このページでは、AWS What's Newで発表された「AWS PrivateLink announces Tunnel Endpoints to access network segments」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS PrivateLinkにトンネルエンドポイントが追加され、ネットワークセグメントへのプライベートかつセキュアなアクセスが可能になりました。この機能はリソースを効率的に共有したいお客様に適しています。

## このアップデートで何が変わったか

AWS PrivateLinkのお客様は、新しいタイプのVPCエンドポイントであるトンネルエンドポイントを使用して、別のVPCやアカウントのネットワークセグメントにプライベートかつ安全にアクセスできるようになりました。お客様はネットワーク内のCIDR範囲を表すリソース設定を作成し、AWS Resource Access Managerを通じてベンダーと共有することができます。ベンダーはトンネルエンドポイントを作成し、GENEVEカプセル化を使用して顧客のVPCにトンネルし、指定されたCIDR範囲内のリソースにアクセスすることができます。このアップデートは、外部ベンダーなどの別の当事者とリソースを共有したいAWS PrivateLinkのお客様に適しています。

## 詳細

AWS PrivateLinkのお客様は、新しいタイプのVPCエンドポイントであるトンネルエンドポイントを使用して、別のVPCやアカウントのネットワークセグメントにプライベートかつ安全にアクセスできるようになりました。お客様はネットワーク内のCIDR範囲を表すリソース設定を作成し、AWS Resource Access Managerを通じてベンダーと共有することができます。ベンダーはトンネルエンドポイントを作成し、GENEVEカプセル化を使用して顧客のVPCにトンネルし、指定されたCIDR範囲内のリソースにアクセスすることができます。このアップデートは、外部ベンダーなどの別の当事者とリソースを共有したいAWS PrivateLinkのお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/9/privatelink-tunnel-endpoint/)