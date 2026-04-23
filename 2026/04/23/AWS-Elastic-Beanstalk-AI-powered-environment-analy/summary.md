# AWS Elastic Beanstalk AI-powered environment analysis now supports Windows

**カテゴリ:** What's New
**公開日:** 2026-04-23T16:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/elastic-beanstalk-ai-analysis-windows/](https://aws.amazon.com/about-aws/whats-new/2026/04/elastic-beanstalk-ai-analysis-windows/)

---

## 要約

AWS Elastic Beanstalk の AI 駆動型環境分析機能が Windows Server プラットフォームに対応し、.NET アプリケーションを実行する開発者と運用チームが、ログの手動確認なしに環境の問題を迅速に診断・解決できるようになりました。この機能は AWS Elastic Beanstalk と Amazon Bedrock が利用可能なすべてのリージョンで提供されます。

## 詳細

- AWS Elastic Beanstalk の AI 駆動型環境分析機能が、Windows Server プラットフォームで利用可能になりました。

- 従来は Amazon Linux 2 と AL2023 でのみ利用可能でしたが、今回 Windows ベースの環境にも拡張されました。

- この機能により、環境のヘルスに関する問題の根本原因を迅速に特定し、推奨ソリューションを取得できます。

- Elastic Beanstalk は Windows 環境から最近のイベント、インスタンスのヘルス情報、ログを収集し、Amazon Bedrock に分析を送信します。

- .NET アプリケーションおよびその他の Windows ワークロードを実行している開発者と運用チームが対象です。

- Elastic Beanstalk コンソールの AI Analysis ボタンまたは AWS CLI の RequestEnvironmentInfo と RetrieveEnvironmentInfo API 操作を使用して分析をリクエストできます。

- 分析は Windows 環境の現在の状態に合わせたステップバイステップのトラブルシューティング推奨事項を提供します。

- この機能は、AWS Elastic Beanstalk と Amazon Bedrock の両方が利用可能なすべての AWS リージョンで利用できます。