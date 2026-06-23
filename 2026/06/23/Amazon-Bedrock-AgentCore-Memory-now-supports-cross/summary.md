# Amazon Bedrock AgentCore Memory がクロスアカウントアクセスに対応

Amazon Bedrock AgentCore Memory now supports cross-account access

**カテゴリ:** What's New
**公開日:** 2026-06-23T17:20:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-memory-cross-account-access)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Memory now supports cross-account access」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore Memoryがクロスアカウントアクセスに対応し、複数のAWSアカウント間でメモリリソースを共有できるようになりました。これにより、マルチアカウントアーキテクチャにおいて、リソースベースポリシーを通じたアクセス制御と、別アカウントへの配信先設定が可能になります。

## このアップデートで何が変わったか

- この機能はAmazon Bedrock AgentCore MemoryがサポートされているすべてのAWSリージョンで利用可能です。

## 詳細

- Amazon Bedrock AgentCore Memoryが複数のAWSアカウント間でのアクセスに対応するようになりました。

- メモリリソースと利用するエージェントが複数のAWSアカウントにまたがるマルチアカウントアーキテクチャの構築が可能になります。

- リソースベースのポリシーを使用して、あるアカウントのプリンシパルに別のアカウントのメモリデータプレーンAPIへのアクセス権限を付与できます。

- Amazon S3、Amazon SNS、Amazon Kinesis Data Streamsなどのメモリ配信先を別のアカウントに配置することができます。

- メモリリソースにリソースベースポリシーをアタッチすることで、クロスアカウントアクセスが設定されます。

- 利用するアカウントのプリンシパルは、メモリARNを参照することで、イベント作成、メモリレコード書き込み、レコード取得、セマンティック検索を実行できます。

- メモリリソースは、他のアカウント内のS3バケット、SNストピック、Kinesis Data Streamsにペイロードとストリームイベントを配信できます。

- この機能はAmazon Bedrock AgentCore MemoryがサポートされているすべてのAWSリージョンで利用可能です。

- 詳細な設定方法については、Amazon Bedrock AgentCore Developer Guideの「Cross-account memory access」を参照できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/agentcore-memory-cross-account-access)