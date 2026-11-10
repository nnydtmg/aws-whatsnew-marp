---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock AgentCore が Web Search API の一般提供を開始

Amazon Bedrock AgentCore now offers a Web Search API

**What's New** | 2026-11-10T00:00:00

---

## 概要

- Amazon Bedrock AgentCoreにて、単一のAPI呼び出しでウェブ検索を実行できるInvokeWebSearch APIが一般提供されました。
- 本機能は、リソースを作成せずに検索結果を取得したいアプリケーション、カスタムエージェントループ、データパイプラインに適しております。
- これまでWeb SearchはAgentCore Gateway経由のMCPツールとして利用可能でしたが、新しいInvokeWebSearch APIによりゲートウェイやリソースを作成せずに検索...

---

## 前提・背景

### これまでの課題

AWSはAmazon Bedrock AgentCore上のWeb Search APIの一般提供を発表しました。InvokeWebSearch APIにより、単一のAPI呼び出しでウェブ検索が可能になります。これまでWeb Search on AgentCoreはAgentCore Gateway経由のMCPツールとして提供されていましたが、新しいAPIはアプリケーション、カスタムエージェントループ、データパイプラインがリソースを作成せずに検索結果を取得できるようにします。APIはAmazon

---

### 関連する最近の動向

- **Release notes for Amazon Bedrock AgentCore**
  [詳細](https://docs.aws.amazon.com/bedrock-agentcore/latest/devgui...

---

## 変更内容・新機能

AWSはAmazon Bedrock AgentCore上のWeb Search APIの一般提供を発表しました。InvokeWebSearch APIにより、単一のAPI呼び出しでウェブ検索が可能になります。これまでWeb Search on AgentCoreはAgentCore Gateway経由のMCPツールとして提供されていましたが、新しいAPIはアプリケーション、カスタムエージェントループ、データパイプラインがリソースを作成せずに検索結果を取得できるようにします。APIはAmazonが運用するウェブインデックスから順位付けされた結果を返し、各結果にはテキスト抜粋、ページタイトル、URL、公開時刻が含まれます。ドメインと公開時刻でフィルタリング可能で、例えば直近の製品アナウンスを探す、信頼できるドメインに対して主張を確認するといった用途に役立ちます。AWS SDKまたはAWS CLIから呼び出し、IAMで認可します。VPCからはAWS PrivateLink経由で呼び出せ、リクエストはAWS CloudTrailデータイベントとして記録できます。料金は1,000クエリあたり$

---

## ユースケース

AWSはAmazon Bedrock AgentCore上のWeb Search APIの一般提供を発表しました。InvokeWebSearch APIにより、単一のAPI呼び出しでウェブ検索が可能になります。これまでWeb Search on AgentCoreはAgentCore Gateway経由のMCPツールとして提供されていましたが、新しいAPIはアプリケーション、カスタムエージェントループ、データパイプラインがリソースを作成せずに検索結果を取得できるようにします。APIはAmazonが運用するウェブインデックスから順位付けされた結果を返し、各結果にはテキスト抜粋、ページタイトル、U

---

## まとめ

- Amazon Bedrock AgentCore now offers a Web Search API について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-web-search-api/)

### 関連情報

- [Release notes for Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html)
- [Introducing Web Search on Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/introducing-web-search-on-amazon-bedrock-agentcore)
- [Domain and publish date filters for Web Search on AgentCore](https://aws.amazon.com/blogs/machine-learning/domain-and-publish-date-filters-for-web-search-on-agentcore)
- [Amazon Bedrock AgentCore now offers a Web Search API](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-web-search-api/)