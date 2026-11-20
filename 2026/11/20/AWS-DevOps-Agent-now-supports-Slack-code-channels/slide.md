---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS DevOps AgentがSlackコードチャネルとTeams双方向会話をサポート

AWS DevOps Agent now supports Slack code channels and Microsoft Teams two-way conversations

**What's New** | 2026-11-19T22:30:00

---

## 概要

- AWS DevOps AgentはSlackコードチャネルとMicrosoft Teams双方向会話を新たにサポートし、オンコールエンジニアとDevOpsチームが日常の協働ツール上でインシデントを調査・解決できるようになりました。
- AWS DevOps AgentはAWS、マルチクラウド、オンプレミス環境にまたがってインシデントを調査します。

---

## 前提・背景

### これまでの課題

Slackコードチャネルは調査ごとに専用チャネルを付与します。調査カードで「Open in code channel」を選択すると、チームとエージェントがそのチャネル上で協働できます。追加質問は@メンションなしで投稿できます。この発表前にSlackワークスペースを登録済みの場合は、コードチャネル利用のためにSlack権限の更新が必要です。Microsoft Teamsでは、以前はAWS DevOps Agentからの一方向通知のみでしたが、接続済みのプライベート/共有チャネルでAWS DevOp

---

### 関連する最近の動向

- **[Update] AWS DevOps Agent's Slack integration now features two-way communication functionality | DevelopersIO**...

---

## 変更内容・新機能

Slackコードチャネルは調査ごとに専用チャネルを付与します。調査カードで「Open in code channel」を選択すると、チームとエージェントがそのチャネル上で協働できます。追加質問は@メンションなしで投稿できます。この発表前にSlackワークスペースを登録済みの場合は、コードチャネル利用のためにSlack権限の更新が必要です。Microsoft Teamsでは、以前はAWS DevOps Agentからの一方向通知のみでしたが、接続済みのプライベート/共有チャネルでAWS DevOps Agentをメンションすると、質問、AWSリソースの探索、調査の操作が可能になりました。エージェントはメッセージ配下のスレッドで返信します。開始には、チャネルをAgent Spaceに関連付ける際にBidirectional modeを有効化します。チャネルメンバーが関連付けを認可した後にエージェントが投稿します。これらの機能はAWS DevOps Agentが対応しているすべての商用AWSリージョンで利用可能です。対象はオンコールエンジニアおよびDevOpsチームです。

---

## まとめ

- AWS DevOps Agent now supports Slack code channels and Microsoft Teams two-way conversations について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-devops-agent-slack-code-channels-teams-two-way/)

### 関連情報

- [[Update] AWS DevOps Agent's Slack integration now features two-way communication functionality | DevelopersIO](https://dev.classmethod.jp/en/articles/devops-agent-slack-bidirectional-communication)
- [Connecting Slack - AWS DevOps Agent](https://docs.aws.amazon.com/devopsagent/latest/userguide/connecting-to-ticketing-and-chat-connecting-slack.html)
- [Using Slack code channels](https://docs.aws.amazon.com/devopsagent/latest/userguide/connecting-to-ticketing-and-chat-using-slack-code-channels.html)
- [Connecting Microsoft Teams](https://docs.aws.amazon.com/devopsagent/latest/userguide/connecting-to-ticketing-and-chat-connecting-microsoft-teams.html)
- [AWS DevOps Agent product page](https://aws.amazon.com/devops-agent/)