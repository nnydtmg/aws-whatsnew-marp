# AWS DevOps AgentがSlackコードチャネルとTeams双方向会話をサポート

AWS DevOps Agent now supports Slack code channels and Microsoft Teams two-way conversations

**カテゴリ:** What's New
**公開日:** 2026-11-19T22:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-devops-agent-slack-code-channels-teams-two-way/)

このページでは、AWS What's Newで発表された「AWS DevOps Agent now supports Slack code channels and Microsoft Teams two-way conversations」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS DevOps AgentはSlackコードチャネルとMicrosoft Teams双方向会話を新たにサポートし、オンコールエンジニアとDevOpsチームが日常の協働ツール上でインシデントを調査・解決できるようになりました。AWS DevOps AgentはAWS、マルチクラウド、オンプレミス環境にまたがってインシデントを調査します。

## このアップデートで何が変わったか

Slackコードチャネルは調査ごとに専用チャネルを付与します。調査カードで「Open in code channel」を選択すると、チームとエージェントがそのチャネル上で協働できます。追加質問は@メンションなしで投稿できます。この発表前にSlackワークスペースを登録済みの場合は、コードチャネル利用のためにSlack権限の更新が必要です。Microsoft Teamsでは、以前はAWS DevOps Agentからの一方向通知のみでしたが、接続済みのプライベート/共有チャネルでAWS DevOps Agentをメンションすると、質問、AWSリソースの探索、調査の操作が可能になりました。エージェントはメッセージ配下のスレッドで返信します。開始には、チャネルをAgent Spaceに関連付ける際にBidirectional modeを有効化します。チャネルメンバーが関連付けを認可した後にエージェントが投稿します。これらの機能はAWS DevOps Agentが対応しているすべての商用AWSリージョンで利用可能です。対象はオンコールエンジニアおよびDevOpsチームです。

## 対象ユーザー

Slackコードチャネルは調査ごとに専用チャネルを付与します。調査カードで「Open in code channel」を選択すると、チームとエージェントがそのチャネル上で協働できます。追加質問は@メンションなしで投稿できます。この発表前にSlackワークスペースを登録済みの場合は、コードチャネル利用のためにSlack権限の更新が必要です。Microsoft Teamsでは、以前はAWS DevOps Agentからの一方向通知のみでしたが、接続済みのプライベート/共有チャネルでAWS DevOps Agentをメンションすると、質問、AWSリソースの探索、調査の操作が可能になりました。エージェ

## 詳細

Slackコードチャネルは調査ごとに専用チャネルを付与します。調査カードで「Open in code channel」を選択すると、チームとエージェントがそのチャネル上で協働できます。追加質問は@メンションなしで投稿できます。この発表前にSlackワークスペースを登録済みの場合は、コードチャネル利用のためにSlack権限の更新が必要です。Microsoft Teamsでは、以前はAWS DevOps Agentからの一方向通知のみでしたが、接続済みのプライベート/共有チャネルでAWS DevOps Agentをメンションすると、質問、AWSリソースの探索、調査の操作が可能になりました。エージェントはメッセージ配下のスレッドで返信します。開始には、チャネルをAgent Spaceに関連付ける際にBidirectional modeを有効化します。チャネルメンバーが関連付けを認可した後にエージェントが投稿します。これらの機能はAWS DevOps Agentが対応しているすべての商用AWSリージョンで利用可能です。対象はオンコールエンジニアおよびDevOpsチームです。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-devops-agent-slack-code-channels-teams-two-way/)