---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront Announces WebSocket Support for VPC Origins

**What's New** | 2026-05-01T19:30:00

---

## 概要

- Amazon CloudFrontがVPC オリジンを通じたWebSocketsトラフィックのサポートを開始し、プライベートサブネットでホストされるリアルタイムアプリケーション（チャット、協調編集ツール、ライブダッシュボード、IoTデバイス管理など）に対して、CloudFrontを単一のエントリーポイントとして利用できるようになりました。
- これにより、セキュリティ管理が簡素化され、攻撃面が削減され、追加コストなしでDDoS保護が提供されます。

---

## 前提・背景

### これまでの課題

- これまでは、WebSocketsを使用するリアルタイムアプリケーションを実行する顧客は、オリジンをパブリックサブネットに配置し、アクセス制御リストなどのメカニズムを使用してアクセスを制限する必要がありました。

---

### 関連する最近の動向

- **Amazon CloudFront Announces WebSocket Support for VPC Origins - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-websockets-vpc-origins/)

---

## 変更内容・新機能

- Amazon CloudFrontがVPC オリジンを通じたWebSocketsトラフィックのサポートを発表いたしました。

- WebSocketsサポートはVPC オリジンがサポートされているすべてのAWSコマーシャルリージョンで利用可能です。

---

## 効果・メリット

- - CloudFrontは従来のHTTPトラフィックとリアルタイムWebSocket接続の両方に対応する単一のフロントドアとして機能し、攻撃面を削減し、セキュリティ管理を簡素化し、組み込みのDDoS保護を提供いたします。

---

## まとめ

- Amazon CloudFront Announces WebSocket Support for VPC Origins について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-websockets-vpc-origins/)

### 関連情報

- [Amazon CloudFront Announces WebSocket Support for VPC Origins - AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-websockets-vpc-origins/)