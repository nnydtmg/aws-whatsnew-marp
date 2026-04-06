# Amazon WorkSpaces Personal now supports unique DNS names for PrivateLink

**カテゴリ:** What's New
**公開日:** 2026-04-06T17:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-workspaces-personal-privatelink/](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-workspaces-personal-privatelink/)

---

## 要約

Amazon WorkSpaces Personalが、PrivateLink VPCエンドポイント用に一意のグローバルDNS名をサポートするようになり、複数のAWSアカウントおよびVPC環境でのDNS解決の競合を排除しました。

## 詳細

- Amazon WorkSpaces Personalが、AWS PrivateLink VPCエンドポイント用に一意のDNS名をサポートするようになりました。
- 各インターフェースVPCエンドポイントは、グローバルに一意なAWS管理のDNS名を取得し、複数のAWS VPCおよびアカウント間でのデプロイメントが可能になります。
- DNS解決の競合を排除し、複数アカウント環境での集中管理型DNSインフラストラクチャでのトラフィックルーティングが適切に機能するようになりました。
- 公開解決可能なDNS名は、それぞれのVPC内からのみアクセス可能なプライベートIPアドレスに解決されるため、セキュリティ分離を維持しながら設定が簡素化されます。
- 一意のDNS名はAWSによって自動的に管理されており、Route 53の追加設定やカスタムDNS管理は不要です。
- この機能は、Amazon WorkSpaces PersonalでPrivateLinkが利用可能なすべてのAWSリージョンで利用できます。
- 既存のお客様は自動的にこの機能の恩恵を受けることができ、システムは以前のDNS設定との後方互換性を維持しています。