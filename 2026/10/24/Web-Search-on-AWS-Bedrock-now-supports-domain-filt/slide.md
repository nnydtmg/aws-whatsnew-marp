---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon BedrockのWeb Searchがドメインフィルタとユーザーロケーションに対応

Web Search on AWS Bedrock now supports domain filtering and user location controls

**What's New** | 2026-10-23T21:04:00

---

## 概要

- Amazon BedrockのWeb Searchにドメインフィルタリングとユーザーロケーション機能が追加され、検索結果をより精密に制御できるようになりました。
- 特定のドメインに制限したいお客様や、地域に関連した回答を必要とするお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Web Search on AWS Bedrock now supports domain filtering and user location controls - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-web-search-domain-user-location)

- **Web Search - Amazon Bedrock**
  [詳細](https://docs.aws.amazon.com/bedrock/latest/userguide/web-search.html)

- **Web Search in Amazon Bedrock AgentCore adds domain and published date filt...

---

## 変更内容・新機能

Amazon BedrockのWeb Searchに、モデルの回答の根拠となる検索結果をより精密に制御できる2つの新機能、ドメインフィルタリングとユーザーロケーションが追加されました。両方とも既存のOpenAI Responses APIリクエスト内のweb_searchツールに直接設定できます。

ユーザーロケーションでは、任意で位置パラメータを指定し、その地理位置に関連する検索結果を取得できます。地域毎の利用可能性やローカルサービスなど、地域依存の質問に役立ちます。countryはISO 3166-1 alpha-2コード、regionとcityは自由形式文字列、timezoneはIANAタイムゾーン識別子で指定します。未設定時のデフォルトはアメリカ合衆国です。

---

## まとめ

- Web Search on AWS Bedrock now supports domain filtering and user location controls について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-web-search-domain-user-location/)

### 関連情報

- [Web Search on AWS Bedrock now supports domain filtering and user location controls - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-web-search-domain-user-location)
- [Web Search - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/web-search.html)
- [Web Search in Amazon Bedrock AgentCore adds domain and published date filtering, expands to Europe and Asia Pacific - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/web-search-amazon-bedrock)