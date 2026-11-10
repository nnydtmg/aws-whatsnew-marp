# Amazon Bedrock AgentCore が Web Search API の一般提供を開始

Amazon Bedrock AgentCore now offers a Web Search API

**カテゴリ:** What's New
**公開日:** 2026-11-10T00:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-web-search-api/)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore now offers a Web Search API」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCoreにて、単一のAPI呼び出しでウェブ検索を実行できるInvokeWebSearch APIが一般提供されました。本機能は、リソースを作成せずに検索結果を取得したいアプリケーション、カスタムエージェントループ、データパイプラインに適しております。

## このアップデートで何が変わったか

AWSはAmazon Bedrock AgentCore上のWeb Search APIの一般提供を発表しました。InvokeWebSearch APIにより、単一のAPI呼び出しでウェブ検索が可能になります。これまでWeb Search on AgentCoreはAgentCore Gateway経由のMCPツールとして提供されていましたが、新しいAPIはアプリケーション、カスタムエージェントループ、データパイプラインがリソースを作成せずに検索結果を取得できるようにします。APIはAmazonが運用するウェブインデックスから順位付けされた結果を返し、各結果にはテキスト抜粋、ページタイトル、URL、公開時刻が含まれます。ドメインと公開時刻でフィルタリング可能です。AWS SDKまたはAWS CLIから呼び出し、IAMで認可します。VPCからはAWS PrivateLink経由で呼び出せ、リクエストはAWS CloudTrailデータイベントとして記録できます。料金は1,000クエリあたり$7で、AgentCore Gateway経由のWeb Searchと同額、ゲートウェイ料金はかかり

## 詳細

AWSはAmazon Bedrock AgentCore上のWeb Search APIの一般提供を発表しました。InvokeWebSearch APIにより、単一のAPI呼び出しでウェブ検索が可能になります。これまでWeb Search on AgentCoreはAgentCore Gateway経由のMCPツールとして提供されていましたが、新しいAPIはアプリケーション、カスタムエージェントループ、データパイプラインがリソースを作成せずに検索結果を取得できるようにします。APIはAmazonが運用するウェブインデックスから順位付けされた結果を返し、各結果にはテキスト抜粋、ページタイトル、URL、公開時刻が含まれます。ドメインと公開時刻でフィルタリング可能です。AWS SDKまたはAWS CLIから呼び出し、IAMで認可します。VPCからはAWS PrivateLink経由で呼び出せ、リクエストはAWS CloudTrailデータイベントとして記録できます。料金は1,000クエリあたり$7で、AgentCore Gateway経由のWeb Searchと同額、ゲートウェイ料金はかかりません。利用可能リージョンはUS East (N. Virginia)、US East (Ohio)、US West (Oregon)、Asia Pacific (Sydney)、Asia Pacific (Tokyo)、Europe (Ireland)です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-web-search-api/)