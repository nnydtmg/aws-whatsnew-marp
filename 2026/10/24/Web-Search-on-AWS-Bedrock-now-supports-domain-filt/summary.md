# Amazon BedrockのWeb Searchがドメインフィルタとユーザーロケーションに対応

Web Search on AWS Bedrock now supports domain filtering and user location controls

**カテゴリ:** What's New
**公開日:** 2026-10-23T21:04:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-web-search-domain-user-location/)

このページでは、AWS What's Newで発表された「Web Search on AWS Bedrock now supports domain filtering and user location controls」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon BedrockのWeb Searchにドメインフィルタリングとユーザーロケーション機能が追加され、検索結果をより精密に制御できるようになりました。特定のドメインに制限したいお客様や、地域に関連した回答を必要とするお客様に適しています。

## このアップデートで何が変わったか

Amazon BedrockのWeb Searchに、モデルの回答の根拠となる検索結果をより精密に制御できる2つの新機能、ドメインフィルタリングとユーザーロケーションが追加されました。両方とも既存のOpenAI Responses APIリクエスト内のweb_searchツールに直接設定できます。

ユーザーロケーションでは、任意で位置パラメータを指定し、その地理位置に関連する検索結果を取得できます。地域毎の利用可能性やローカルサービスなど、地域依存の質問に役立ちます。countryはISO 3166-1 alpha-2コード、regionとcityは自由形式文字列、timezoneはIANAタイムゾーン識別子で指定します。未設定時のデフォルトはアメリカ合衆国です。

## 対象ユーザー

Amazon BedrockのWeb Searchに、モデルの回答の根拠となる検索結果をより精密に制御できる2つの新機能、ドメインフィルタリングとユーザーロケーションが追加されました。両方とも既存のOpenAI Responses APIリクエスト内のweb_searchツールに直接設定できます。

## 詳細

Amazon BedrockのWeb Searchに、モデルの回答の根拠となる検索結果をより精密に制御できる2つの新機能、ドメインフィルタリングとユーザーロケーションが追加されました。両方とも既存のOpenAI Responses APIリクエスト内のweb_searchツールに直接設定できます。

ドメインフィルタリングではfiltersパラメータを使用し、allowed_domainsで信頼できるソースに結果を制限するか、blocked_domainsで不要なソースを除外できます。それぞれ最大100件のドメインを指定可能です。http://やhttps://の接頭辞は不要で、各ドメインはそのサブドメインも自動的にマッチします。信頼できる特定サイトのみで回答を根拠づけたい場合や、特定ドメインを結果から除外したい場合に有効です。

ユーザーロケーションでは、任意で位置パラメータを指定し、その地理位置に関連する検索結果を取得できます。地域毎の利用可能性やローカルサービスなど、地域依存の質問に役立ちます。countryはISO 3166-1 alpha-2コード、regionとcityは自由形式文字列、timezoneはIANAタイムゾーン識別子で指定します。未設定時のデフォルトはアメリカ合衆国です。

対応リージョンはUS East (N. Virginia)、US East (Ohio)、US West (Oregon)、AWS GovCloud (US-West)です。対応モデルはOpenAI GPT-5.4以降で、bedrock-mantleエンドポイントのResponses API経由で利用します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-web-search-domain-user-location/)