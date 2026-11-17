# Amazon API Gateway REST APIがJWT認可をサポート

Amazon API Gateway REST APIs now support JWT authorizers

**カテゴリ:** What's New
**公開日:** 2026-11-17T15:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-rest-jwt-authorizers/)

このページでは、AWS What's Newで発表された「Amazon API Gateway REST APIs now support JWT authorizers」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon API Gateway REST API向けのネイティブJWTオーソライザーにより、トークン検証がゲートウェイで直接行えるようになりました。この更新はマシン間APIやマルチテナントAPIに適しております。

## このアップデートで何が変わったか

- Amazon API GatewayのREST APIがネイティブJWTオーソライザーをサポートいたします。
- ゲートウェイ内でJSON Webトークンを直接検証し、コード作成が不要になります。
- 発行者、オーディエンス、署名アルゴリズム、追加クレームを定義できます。
- 1つのオーソライザーを複数のメソッドにアタッチし異なるスコープを設定できます。
- マシンツーマシンAPI、モバイルおよびWebバックエンド、マルチテナントAPIに適しております。

## 対象ユーザー

Amazon API Gateway REST API向けのネイティブJWTオーソライザーにより、トークン検証がゲートウェイで直接行えるようになりました。この更新はマシン間APIやマルチテナントAPIに適しております。

## 詳細

- Amazon API GatewayのREST APIがネイティブJWTオーソライザーをサポートいたします。
- ゲートウェイ内でJSON Webトークンを直接検証し、コード作成が不要になります。
- 発行者、オーディエンス、署名アルゴリズム、追加クレームを定義できます。
- 1つのオーソライザーを複数のメソッドにアタッチし異なるスコープを設定できます。
- マシンツーマシンAPI、モバイルおよびWebバックエンド、マルチテナントAPIに適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-rest-jwt-authorizers/)