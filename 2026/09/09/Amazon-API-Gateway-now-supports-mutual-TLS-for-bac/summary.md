# Amazon API Gatewayがバックエンド統合で相互TLSをサポート

Amazon API Gateway now supports mutual TLS for backend integrations

**カテゴリ:** What's New
**公開日:** 2026-09-08T19:16:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-api-gateway-mutual-tls-backend/)

このページでは、AWS What's Newで発表された「Amazon API Gateway now supports mutual TLS for backend integrations」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon API Gateway REST APIのバックエンド統合で相互TLSがサポートされ、信頼できる証明書を使用できるようになりました。金融サービスやヘルスケアなどの規制業界のお客様に有益です。

## このアップデートで何が変わったか

- Amazon API GatewayのREST APIにおいて、TLSハンドシェイク中にバックエンドへACM証明書を提示して相互TLSを有効にする設定が可能になりました。
- 以前は生成された自己署名証明書のみでしたが、信頼する認証局が署名した証明書を使用できるようになりました。
- 既存のPKIからACMへ証明書をインポートするか、AWS Private Certificate Authorityを通じて発行および管理できます。
- ACMで証明書が再インポートまたは更新されると、API Gatewayが自動的に更新を伝播し、再デプロイやダウンタイムは発生しません。
- この更新は、金融サービス、ヘルスケア、その他の規制された環境やゼロトラスト環境のお客様に適しています。

## 詳細

- Amazon API GatewayのREST APIにおいて、TLSハンドシェイク中にバックエンドへACM証明書を提示して相互TLSを有効にする設定が可能になりました。
- 以前は生成された自己署名証明書のみでしたが、信頼する認証局が署名した証明書を使用できるようになりました。
- 既存のPKIからACMへ証明書をインポートするか、AWS Private Certificate Authorityを通じて発行および管理できます。
- ACMで証明書が再インポートまたは更新されると、API Gatewayが自動的に更新を伝播し、再デプロイやダウンタイムは発生しません。
- この更新は、金融サービス、ヘルスケア、その他の規制された環境やゼロトラスト環境のお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-api-gateway-mutual-tls-backend/)