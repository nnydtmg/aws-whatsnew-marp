---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon API Gatewayがバックエンド統合で相互TLSをサポート

Amazon API Gateway now supports mutual TLS for backend integrations

**What's New** | 2026-09-08T19:16:00

---

## 概要

- Amazon API Gateway REST APIのバックエンド統合で相互TLSがサポートされ、信頼できる証明書を使用できるようになりました。
- 金融サービスやヘルスケアなどの規制業界のお客様に有益です。

---

## 前提・背景

### これまでの課題

- Amazon API GatewayのREST APIにおいて、TLSハンドシェイク中にバックエンドへACM証明書を提示して相互TLSを有効にする設定が可能になりました。
- 以前は生成された自己署名証明書のみでしたが、信頼する認証局が署名した証明書を使用できるようになりました。
- 既存のPKIからACMへ証明書をインポートするか、AWS Private Certificate Authorityを通じて発行および管理できます。
- ACMで証明書が再インポートまたは更新されると、API 

---

### 関連する最近の動向

- **Use your own ACM certificate for backend mutual TLS in API Gateway - Amazon API Gateway**
  [詳細](https://docs.a...

---

## 変更内容・新機能

- Amazon API GatewayのREST APIにおいて、TLSハンドシェイク中にバックエンドへACM証明書を提示して相互TLSを有効にする設定が可能になりました。
- 以前は生成された自己署名証明書のみでしたが、信頼する認証局が署名した証明書を使用できるようになりました。
- 既存のPKIからACMへ証明書をインポートするか、AWS Private Certificate Authorityを通じて発行および管理できます。
- ACMで証明書が再インポートまたは更新されると、API Gatewayが自動的に更新を伝播し、再デプロイやダウンタイムは発生しません。
- この更新は、金融サービス、ヘルスケア、その他の規制された環境やゼロトラスト環境のお客様に適しています。

---

## まとめ

- Amazon API Gateway now supports mutual TLS for backend integrations について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-api-gateway-mutual-tls-backend/)

### 関連情報

- [Use your own ACM certificate for backend mutual TLS in API Gateway - Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-acm-client-certificates.html)
- [How to turn on mutual TLS authentication for your HTTP APIs in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-mutual-tls.html)
- [Introducing mutual TLS authentication for Amazon API Gateway](https://aws.amazon.com/blogs/compute/introducing-mutual-tls-authentication-for-amazon-api-gateway)