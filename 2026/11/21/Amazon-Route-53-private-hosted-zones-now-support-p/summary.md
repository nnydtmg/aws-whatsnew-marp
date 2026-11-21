# Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポート

Amazon Route 53 private hosted zones now support public DNS fallback

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-public-dns-fallback/)

このページでは、AWS What's Newで発表された「Amazon Route 53 private hosted zones now support public DNS fallback」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックに対応し、ゾーンにない名前はパブリックDNSから解決されるようになりました。一部の名前のみをプライベートに解決したいお客様にとって、レコードの同期が不要になる更新です。

## このアップデートで何が変わったか

Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポートしました。ゾーン内に一致するレコードがないクエリに対して、NXDOMAINではなくパブリックDNSの回答を返すようになりました。本機能はAdvanced Hosted Zonesの一部です。この更新は、一部の名前のみをプライベートに解決したいお客様に適しています。お客様は必要な名前だけを追加すればよく、その他の名前は既存のパブリックDNSから解決されます。例えば、example.comのプライベートホストゾーンでexample.comをプライベートエンドポイントに向け、partner.example.comはパブリックDNSにのみ存在するケースでは、以前はpartner.example.comのルックアップがNXDOMAINを返していましたが、現在はパブリックDNSから解決されます。利用開始には、プライベートAdvanced Hosted Zoneを作成するか既存のプライベートホストゾーンをアップグレードし、パブリックDNSフォールバックを有効にします。Route 53コンソール、API、

## 対象ユーザー

Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポートしました。ゾーン内に一致するレコードがないクエリに対して、NXDOMAINではなくパブリックDNSの回答を返すようになりました。本機能はAdvanced Hosted Zonesの一部です。この更新は、一部の名前のみをプライベートに解決したいお客様に適しています。お客様は必要な名前だけを追加すればよく、その他の名前は既存のパブリックDNSから解決されます。例えば、example.comのプライベートホストゾーンでexample.comをプライベートエンドポイントに向け、partner.exampl

## 活用シーン

Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポートしました。ゾーン内に一致するレコードがないクエリに対して、NXDOMAINではなくパブリックDNSの回答を返すようになりました。本機能はAdvanced Hosted Zonesの一部です。この更新は、一部の名前のみをプライベートに解決したいお客様に適しています。お客様は必要な名前だけを追加すればよく、その他の名前は既存のパブリックDNSから解決されます。例えば、example.comのプライベートホストゾーンでexample.comをプライベートエンドポイントに向け、partner.exampl

## 詳細

Amazon Route 53のプライベートホストゾーンがパブリックDNSフォールバックをサポートしました。ゾーン内に一致するレコードがないクエリに対して、NXDOMAINではなくパブリックDNSの回答を返すようになりました。本機能はAdvanced Hosted Zonesの一部です。この更新は、一部の名前のみをプライベートに解決したいお客様に適しています。お客様は必要な名前だけを追加すればよく、その他の名前は既存のパブリックDNSから解決されます。例えば、example.comのプライベートホストゾーンでexample.comをプライベートエンドポイントに向け、partner.example.comはパブリックDNSにのみ存在するケースでは、以前はpartner.example.comのルックアップがNXDOMAINを返していましたが、現在はパブリックDNSから解決されます。利用開始には、プライベートAdvanced Hosted Zoneを作成するか既存のプライベートホストゾーンをアップグレードし、パブリックDNSフォールバックを有効にします。Route 53コンソール、API、AWS CLI、AWS SDKs、AWS CloudFormationから利用可能です。Route 53プライベートホストゾーンが利用可能なすべてのAWS商用リージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-public-dns-fallback/)