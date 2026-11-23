---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFrontがオリジンへのHTTP/2接続をサポート

Amazon CloudFront Announces HTTP/2 Support for Connections to Origins

**What's New** | 2026-11-23T17:00:00

---

## 概要

- Amazon CloudFrontはカスタムオリジンおよびVPCオリジンへのHTTP/2接続を新たにサポートし、APIやAIエージェントなどのワークロードのパフォーマンスを向上いたします。
- 追加料金はなく、すべてのエッジロケーションでご利用いただけます。

---

## 前提・背景

### これまでの課題

新機能として、Amazon CloudFrontはカスタムオリジンおよびVPCオリジンへのHTTP/2接続をサポートいたします。HTTP/2により、より少ない接続で多数のリクエストを送信でき、オリジンの接続数とTLSハンドシェイクが減少いたします。オリジンが非対応の場合は自動的にHTTP/1.1へフォールバックし、追加料金は発生いたしません。本アップデートは、APIおよびエージェンティックワークロード、MCPサーバーを呼び出すAIエージェント、バックエンドAPIを呼び出すモバイルおよびWebアプ

---

### 関連する最近の動向

- **Why is Cloudfront using https (http over tls) to origin instead of http2 ? | AWS re:Post**
  [詳細](https://repos...

---

## 変更内容・新機能

新機能として、Amazon CloudFrontはカスタムオリジンおよびVPCオリジンへのHTTP/2接続をサポートいたします。HTTP/2により、より少ない接続で多数のリクエストを送信でき、オリジンの接続数とTLSハンドシェイクが減少いたします。オリジンが非対応の場合は自動的にHTTP/1.1へフォールバックし、追加料金は発生いたしません。本アップデートは、APIおよびエージェンティックワークロード、MCPサーバーを呼び出すAIエージェント、バックエンドAPIを呼び出すモバイルおよびWebアプリケーションに適しております。これまでCloudFrontはオリジンへの接続にHTTP/1.1のみを使用しており、1接続あたり1リクエストしか処理できませんでした。トラフィックが急増した場合、例えばAIエージェントが同時に多数のツール呼び出しを行うと、CloudFrontはより多くのオリジン接続を開く必要があり、各新規接続がレイテンシと負荷を増加させていました。HTTP/2ではこれらのリクエストが接続を共有するため、オリジンの負荷が軽減され、応答が高速化します。HTTP/2はextended C

---

## 効果・メリット

- Amazon CloudFrontはカスタムオリジンおよびVPCオリジンへのHTTP/2接続を新たにサポートし、APIやAIエージェントなどのワークロードのパフォーマンスを向上いたします。
- 追加料金はなく、すべてのエッジロケーションでご利用いただけます。

---

## ユースケース

新機能として、Amazon CloudFrontはカスタムオリジンおよびVPCオリジンへのHTTP/2接続をサポートいたします。HTTP/2により、より少ない接続で多数のリクエストを送信でき、オリジンの接続数とTLSハンドシェイクが減少いたします。オリジンが非対応の場合は自動的にHTTP/1.1へフォールバックし、追加料金は発生いたしません。本アップデートは、APIおよびエージェンティックワークロード、MCPサーバーを呼び出すAIエージェント、バックエンドAPIを呼び出すモバイルおよびWebアプリケーションに適しております。これまでCloudFrontはオリジンへの接続にHTTP/1.1のみを

---

## まとめ

- Amazon CloudFront Announces HTTP/2 Support for Connections to Origins について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-cloudfront-http2-origins/)

### 関連情報

- [Why is Cloudfront using https (http over tls) to origin instead of http2 ? | AWS re:Post](https://repost.aws/questions/QU0U8E_N5XQoC7Z0fpC5Q-OQ/why-is-cloudfront-using-https-http-over-tls-to-origin-instead-of-http2)
- [New – HTTP/2 Support for Amazon CloudFront | AWS News Blog](https://aws.amazon.com/blogs/aws/new-http2-support-for-cloudfront)
- [New – HTTP/3 Support for Amazon CloudFront | AWS News Blog](https://aws.amazon.com/blogs/aws/new-http-3-support-for-amazon-cloudfront)
- [Amazon CloudFront announces mutual TLS support for origins - AWS](https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-cloudfront-mutual-tls-for-origins)