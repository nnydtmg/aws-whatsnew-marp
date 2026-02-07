# Amazon Bedrock AgentCore Browser now supports browser profiles

**カテゴリ:** What's New
**公開日:** 2026-02-06
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-agentcore-browser-profiles](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-agentcore-browser-profiles)

---

## 要約

Amazon Bedrock AgentCore Browserのブラウザプロファイル機能により、複数のセッション間で認証状態を再利用でき、セットアップ時間を大幅に短縮することが可能になりました。この機能は、大規模な自動ブラウザセッション処理を行うエンタープライズ顧客に特に有益です。

## 詳細

Amazon Bedrock AgentCore Browserがブラウザプロファイル機能をサポートするようになりました。ブラウザプロファイルにより、複数のブラウザセッション間で認証状態を再利用できるようになりました。ログイン流程の繰り返しが不要になり、セッションセットアップ時間が数分から数十秒に短縮されます。ブラウザプロファイルはクッキーとローカルストレージを含むブラウザデータを永続化し、複数セッション間で再利用します。一度Webサイトに認証してプロファイルに保存すれば、次のセッションでも認証状態が保持されます。エージェントは手動ログイン介入なしで認証が必要なWebサイト上でタスクを実行できます。読み取り専用と永続的な操作の両方に対応した柔軟なセッションモードが利用可能です。複数セッションが同じプロファイルを同時に使用する並列処理が可能になります。この機能はAmazon Bedrock AgentCore Browserが利用可能な14のAWSリージョン全てで提供されます。対応リージョンは北米、アジア太平洋、ヨーロッパ、カナダを含みます。エンタープライズ顧客が1日に数百から数千の自動ブラウザセッションを処理する場合に特に有効です。