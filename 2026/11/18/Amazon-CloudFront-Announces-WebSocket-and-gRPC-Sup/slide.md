---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFrontがOrigin mTLSでWebSocketとgRPCのサポートを発表

Amazon CloudFront Announces WebSocket and gRPC Support for Origin Mutual TLS

**What's New** | 2026-11-18T18:00:00

---

## 概要

- Amazon CloudFrontは、オリジン相互TLS認証を用いたWebSocketおよびgRPCトラフィックのサポートを開始いたしました。
- 本機能は、強力な認証を必要とする永続的な双方向接続アプリケーションをご利用のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Enable origin mutual TLS for CloudFront distributions - Amazon CloudFront**
  [詳細](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-enable-mtls-distributions.html)

- **Amazon CloudFront announces mutual TLS support for origins - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-cloudfront-mutual-tls-for-origins)

- **CloudFront Adds...

---

## 変更内容・新機能

-
新機能は、Amazon CloudFrontがAWSリージョン内のアプリケーションオリジンへのWebSocketおよびgRPCトラフィックをオリジン相互TLS認証付きでサポートすることです。
-
お客様はTLS証明書を使用してCloudFrontからのリクエストを認証しながら、オリジンへのWebSocketまたはgRPC接続を設定できます。
-
オリジン相互TLSは、永続的で双方向またはストリーミング接続を必要とするインターネット向けアプリケーションを未認証リクエストから保護します。
-
追加料金は発生せず、従量課金およびビジネスとプレミアムの定額料金プランでご利用いただけます。
-
本アップデートは、チャットプラットフォーム、共同編集ツール、ライブダッシュボードをご利用のお客様に適しております。
-
Application Load BalancerやAPI Gateway、オンプレミスおよびAWS外のオリジンをご利用のお客様にも有益です。

---

## まとめ

- Amazon CloudFront Announces WebSocket and gRPC Support for Origin Mutual TLS について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudfront-origin-mtls-websockets-grpc/)

### 関連情報

- [Enable origin mutual TLS for CloudFront distributions - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-enable-mtls-distributions.html)
- [Amazon CloudFront announces mutual TLS support for origins - AWS](https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-cloudfront-mutual-tls-for-origins)
- [CloudFront Adds Origin mTLS Authentication for End-to-End Zero Trust - InfoQ](https://www.infoq.com/news/2026/02/amazon-cloudfront-mtls-origins)
- [Amazon CloudFront Announces WebSocket Support for VPC Origins - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-websockets-vpc-origins)
- [Mutual TLS authentication with CloudFront (Viewer mTLS) - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/mtls-authentication.html)