# Amazon CloudFront Announces WebSocket Support for VPC Origins

**カテゴリ:** What's New
**公開日:** 2026-05-01T19:30:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-websockets-vpc-origins/](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-websockets-vpc-origins/)

---

## 要約

Amazon CloudFrontがVPC オリジンを通じたWebSocketsトラフィックのサポートを開始し、プライベートサブネットでホストされるリアルタイムアプリケーション（チャット、協調編集ツール、ライブダッシュボード、IoTデバイス管理など）に対して、CloudFrontを単一のエントリーポイントとして利用できるようになりました。これにより、セキュリティ管理が簡素化され、攻撃面が削減され、追加コストなしでDDoS保護が提供されます。

## 詳細

- Amazon CloudFrontがVPC オリジンを通じたWebSocketsトラフィックのサポートを発表いたしました。

- プライベートサブネットにホストされたリアルタイムアプリケーションに対して、CloudFrontを単一のエントリーポイントとして利用できるようになりました。

- チャットプラットフォーム、協調編集ツール、ライブダッシュボード、IoTデバイス管理システムなど、クライアントとサーバー間の永続的な双方向接続が必要なアプリケーションに対応しています。

- これまでは、WebSocketsを使用するリアルタイムアプリケーションを実行する顧客は、オリジンをパブリックサブネットに配置し、アクセス制御リストなどのメカニズムを使用してアクセスを制限する必要がありました。

- 現在では、Application Load Balancer（ALB）、Network Load Balancer（NLB）、およびEC2インスタンスをプライベートサブネットに配置でき、CloudFront経由でのみアクセス可能にすることができます。

- CloudFrontは従来のHTTPトラフィックとリアルタイムWebSocket接続の両方に対応する単一のフロントドアとして機能し、攻撃面を削減し、セキュリティ管理を簡素化し、組み込みのDDoS保護を提供いたします。

- WebSocketsサポートはVPC オリジンがサポートされているすべてのAWSコマーシャルリージョンで利用可能です。

- VPC オリジンを通じたWebSocketsトラフィックに対する追加コストはございません。