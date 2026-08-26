---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda MicroVMs が AWS PrivateLink をサポート

AWS Lambda MicroVMs now supports AWS PrivateLink

**What's New** | 2026-08-25T16:34:00

---

## 概要

- AWS Lambda MicroVMsがAWS PrivateLinkに対応し、VPC内からパブリックインターネットを経由せずにプライベートにLambda MicroVMs APIおよびHTTPエンドポイントにアクセスできるようになりました。
- この機能は、金融サービス、医療、政府機関などの規制対象ワークロードにおいて、厳格なネットワーク分離要件を満たす必要がある開発者とITチームに特に有用です。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda MicroVMs for AI Agents: When to Use Them | Elevata**
  [詳細](https://elevata.io/en/aws-lambda-microvms-isolated-execution-ai-agents)

- **AWS Lambda MicroVMs - AWS Lambda**
  [詳細](https://docs.aws.amazon.com/lambda/latest/dg/lambda-microvms-guide.html)

---

## 変更内容・新機能

- Lambda MicroVMsが利用可能なすべてのリージョンでこの機能がサポートされています。

---

## ユースケース

- パブリックインターネットを経由せずにLambda MicroVMs APIにアクセスできるようになりました。例えば、MicroVMイメージの作成やMicroVMの起動、各MicroVMのHTTPエンドポイントへの接続が可能です。

---

## まとめ

- AWS Lambda MicroVMs now supports AWS PrivateLink について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/lambda-microvms-supports-privatelink)

### 関連情報

- [AWS Lambda MicroVMs for AI Agents: When to Use Them | Elevata](https://elevata.io/en/aws-lambda-microvms-isolated-execution-ai-agents)
- [AWS Lambda MicroVMs - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-microvms-guide.html)