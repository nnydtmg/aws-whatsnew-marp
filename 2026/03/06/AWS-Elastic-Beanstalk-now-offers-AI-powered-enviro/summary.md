# AWS Elastic Beanstalk now offers AI-powered environment analysis

**カテゴリ:** What's New
**公開日:** 2026-03-05T16:55:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/elastic-beanstalk-ai-analysis/](https://aws.amazon.com/about-aws/whats-new/2026/03/elastic-beanstalk-ai-analysis/)

---

## 要約

AWS Elastic Beanstalkの新しいAI駆動型環境分析機能により、開発者とオペレーションチームは環境のヘルス問題の根本原因を迅速に特定し、Amazon Bedrockによるカスタマイズされたトラブルシューティング推奨事項を得ることができるようになりました。この機能はコンソールまたはAWS CLIから利用でき、平均復旧時間の短縮に貢献します。

## 詳細

- AWS Elastic Beanstalkは、AI駆動型環境分析機能を新たに提供するようになりました。
- この機能は、環境のヘルス問題の根本原因を迅速に特定し、推奨ソリューションを提供するものです。
- Elastic Beanstalkは環境の最近のイベント、インスタンスヘルス、ログを収集してAmazon Bedrockに送信し分析を行います。
- 環境のヘルスステータスが警告、低下、または重大な場合、Elastic BeanstalkコンソールのAI分析ボタンから直接分析をリクエストできます。
- AWS CLIのRequestEnvironmentInfoおよびRetrieveEnvironmentInfo APIオペレーションでも利用可能です。
- 分析結果は環境の現在の状態に合わせたステップバイステップのトラブルシューティング推奨事項を提供します。
- 平均復旧時間の短縮に役立つ機能です。
- この機能はAWS Elastic BeanstalkとAmazon Bedrockの両方が利用可能なすべてのAWSリージョンで利用できます。
- この更新は、環境の問題を診断・解決する必要があり、ログやイベントを手動で確認することなく迅速に対応したい開発者とオペレーションチームに適しています。