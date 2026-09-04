# Amazon Bedrock AgentCore Identityがマネージド同意ポータルを提供開始

Amazon Bedrock AgentCore Identity now offers a managed consent portal

**カテゴリ:** What's New
**公開日:** 2026-09-01T21:29:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-agentcore/)

このページでは、AWS What's Newで発表された「Amazon Bedrock AgentCore Identity now offers a managed consent portal」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore Identityは、カスタムOAuthインフラを不要にするマネージド同意ポータルを提供します。本機能はエージェント開発者、プラットフォーム管理者、およびエンドユーザーに適しています。

## このアップデートで何が変わったか

Amazon Bedrock AgentCore Identityがマネージド同意ポータルを提供開始。OAuth 2.0の3レッグ認可フローにおけるカスタムOAuthコールバックインフラストラクチャの構築・ホスト・維持が不要に。各AgentCore Gatewayに専用のホスト型Webクライアントと認証情報プロバイダーリストを備えた同意ポータルが割り当てられる。プラットフォーム管理者はセッション開始前にポータルURLをチームと共有し、エージェントが外部ツールを代理呼び出しするための同意を取得できる。エンドユーザーはセルフサービスインターフェースで接続状態をいつでも確認可能。エージェントIDEベースのクライアントを使用する開発者も、OAuth同意URLの表示や同意後のセッションバインディングをネイティブに処理できない場合に、専用の認可サーフェスとして利用できる。GitHub、Salesforce、Slackなどのサードパーティサービスへの接続に対応。Amazon Bedrock AgentCore Identityが利用可能なすべての商用リージョンで利用可能。

## 対象ユーザー

Amazon Bedrock AgentCore Identityがマネージド同意ポータルを提供開始。OAuth 2.0の3レッグ認可フローにおけるカスタムOAuthコールバックインフラストラクチャの構築・ホスト・維持が不要に。各AgentCore Gatewayに専用のホスト型Webクライアントと認証情報プロバイダーリストを備えた同意ポータルが割り当てられる。プラットフォーム管理者はセッション開始前にポータルURLをチームと共有し、エージェントが外部ツールを代理呼び出しするための同意を取得できる。エンドユーザーはセルフサービスインターフェースで接続状態をいつでも確認可能。エージェントIDEベ

## 詳細

Amazon Bedrock AgentCore Identityがマネージド同意ポータルを提供開始。OAuth 2.0の3レッグ認可フローにおけるカスタムOAuthコールバックインフラストラクチャの構築・ホスト・維持が不要に。各AgentCore Gatewayに専用のホスト型Webクライアントと認証情報プロバイダーリストを備えた同意ポータルが割り当てられる。プラットフォーム管理者はセッション開始前にポータルURLをチームと共有し、エージェントが外部ツールを代理呼び出しするための同意を取得できる。エンドユーザーはセルフサービスインターフェースで接続状態をいつでも確認可能。エージェントIDEベースのクライアントを使用する開発者も、OAuth同意URLの表示や同意後のセッションバインディングをネイティブに処理できない場合に、専用の認可サーフェスとして利用できる。GitHub、Salesforce、Slackなどのサードパーティサービスへの接続に対応。Amazon Bedrock AgentCore Identityが利用可能なすべての商用リージョンで利用可能。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-agentcore/)