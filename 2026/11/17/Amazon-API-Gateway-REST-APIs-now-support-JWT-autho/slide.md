---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon API Gateway REST APIがJWT認可をサポート

Amazon API Gateway REST APIs now support JWT authorizers

**What's New** | 2026-11-17T15:00:00

---

## 概要

- Amazon API Gateway REST API向けのネイティブJWTオーソライザーにより、トークン検証がゲートウェイで直接行えるようになりました。
- この更新はマシン間APIやマルチテナントAPIに適しております。

---

## 前提・背景

### 関連する最近の動向

- **Control access to HTTP APIs with JWT authorizers in API Gateway - Amazon API Gateway**
  [詳細](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-jwt-authorizer.html)

- **Amazon API Gateway Decision Guide**
  [詳細](https://hidekazu-konishi.com/entry/amazon_api_gateway_decision_guide.html)

- **Evaluating access control methods to secure Amazon API Gateway APIs*...

---

## 変更内容・新機能

- Amazon API GatewayのREST APIがネイティブJWTオーソライザーをサポートいたします。
- ゲートウェイ内でJSON Webトークンを直接検証し、コード作成が不要になります。
- 発行者、オーディエンス、署名アルゴリズム、追加クレームを定義できます。
- 1つのオーソライザーを複数のメソッドにアタッチし異なるスコープを設定できます。
- マシンツーマシンAPI、モバイルおよびWebバックエンド、マルチテナントAPIに適しております。

---

## まとめ

- Amazon API Gateway REST APIs now support JWT authorizers について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-rest-jwt-authorizers/)

### 関連情報

- [Control access to HTTP APIs with JWT authorizers in API Gateway - Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-jwt-authorizer.html)
- [Amazon API Gateway Decision Guide](https://hidekazu-konishi.com/entry/amazon_api_gateway_decision_guide.html)
- [Evaluating access control methods to secure Amazon API Gateway APIs](https://aws.amazon.com/blogs/compute/evaluating-access-control-methods-to-secure-amazon-api-gateway-apis)