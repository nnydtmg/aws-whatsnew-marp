# Amazon CloudFront が SaaS Manager に IPベースルーティングと接続ログを追加

Amazon CloudFront adds IP based routing and connection logs to SaaS Manager

**カテゴリ:** What's New
**公開日:** 2026-11-19T20:26:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-ip-based-routing-connection-logging)

このページでは、AWS What's Newで発表された「Amazon CloudFront adds IP based routing and connection logs to SaaS Manager」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudFrontは、同一ワイルドカードドメイン上でIPアドレスに基づくルーティングと接続ログをSaaS Managerに追加しました。Web開発およびSaaSプラットフォームは、同一ワイルドカードドメイン上で、IPアドレスを使って異なる顧客層を適切な設定へルーティングできます。たとえば、プレミアム・プロ顧客は専用のAnycast静的IPアドレスリストから、無料ティアの顧客は共有CloudFront IPから、すべて*.example.com下で配信できます。さらに、接続ログによりビューワー接続の可視性も提供されます。

## このアップデートで何が変わったか

Amazon CloudFrontがSaaS ManagerにIPベースのルーティングと接続ログを追加しました。同一のワイルドカードドメイン上で、IPアドレスによりプレミアム層や無料層などの顧客を適切な設定へルーティングできます。以前はCloudFrontがドメイン名だけから設定を選択していたため、同一ドメインは常に同じ設定に到達していました。Address-based selectionにより、同じワイルドカードドメインを複数のIPリストへ登録し、各リストを独自のテナントへ送信できます。どのクライアントがどのIPリストに解決されるかを制御できるため、顧客側の変更なしでサービスタイア間のトラフィック移行が可能です。SNI（Server Name Indication）なしでIPアドレスに接続するIoTデバイス、埋め込みSDK、古いTLSクライアントにも対応できます。Viewer fallbackでこれらの接続を受け入れるディストリビューションを選択すると、CloudFrontが各リクエストのHostヘッダーを使って適切なコンテンツを配信します。接続ログはこれらのテナントへのHTTPS接

## 詳細

Amazon CloudFrontがSaaS ManagerにIPベースのルーティングと接続ログを追加しました。同一のワイルドカードドメイン上で、IPアドレスによりプレミアム層や無料層などの顧客を適切な設定へルーティングできます。以前はCloudFrontがドメイン名だけから設定を選択していたため、同一ドメインは常に同じ設定に到達していました。Address-based selectionにより、同じワイルドカードドメインを複数のIPリストへ登録し、各リストを独自のテナントへ送信できます。どのクライアントがどのIPリストに解決されるかを制御できるため、顧客側の変更なしでサービスタイア間のトラフィック移行が可能です。SNI（Server Name Indication）なしでIPアドレスに接続するIoTデバイス、埋め込みSDK、古いTLSクライアントにも対応できます。Viewer fallbackでこれらの接続を受け入れるディストリビューションを選択すると、CloudFrontが各リクエストのHostヘッダーを使って適切なコンテンツを配信します。接続ログはこれらのテナントへのHTTPS接続を記録し、クライアントの接続方法のトラブルシューティングを支援します。これらの機能はすべてのCloudFrontエッジロケーションで利用可能です。詳細はAmazon CloudFront Developer GuideのAddress-based selectionおよびConnection Logsを参照してください。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-ip-based-routing-connection-logging)