# AWS Elastic Beanstalk now supports GitHub Actions for automated application deployment

**カテゴリ:** What's New
**公開日:** 2026-02-11T19:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/aws-elastic-beanstalk-github-action](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-elastic-beanstalk-github-action)

---

## 要約

AWS Elastic Beanstalkは、GitHub Actionsを使用した自動デプロイメント機能をサポート開始し、デプロイメントパッケージ作成からS3アップロード、バージョン管理、環境監視までの一連のプロセスを自動化できるようになりました。このアップデートは、CI/CDパイプラインの効率化を目指す開発チームにとって、スケーラブルなWebアプリケーションのデプロイメント体験を大幅に改善するものです。

## 詳細

- AWS Elastic Beanstalkは、GitHubリポジトリへのコードまたは設定変更のプッシュ時に、Webアプリケーションを自動的にデプロイするGitHub Actionsのサポートを開始しました。

- この新機能により、デプロイメントパッケージの作成、S3へのアップロード、バージョン管理、環境監視が自動化されます。

- GitHub Actionsワークフローで「aws-elasticbeanstalk-deploy」アクションを使用することで、宣言的な設定によるシンプルなデプロイメントが可能になります。

- このアクションは、必要に応じてアプリケーションと環境を自動的に作成し、IAMとOpenID Connect（OIDC）認証でシームレスに統合します。

- デプロイメント設定、ヘルスモニタリング、デプロイメント検証、インテリジェントなリトライロジック、S3バケット管理などの機能がサポートされています。

- AWS Elastic Beanstalkが利用可能なすべてのコマーシャルAWSリージョンでこのGitHub Actionを使用できます。

- このアップデートは、CI/CDパイプラインの自動化を求める開発チームに適しており、スケーラブルなWebアプリケーションのデプロイメント効率を向上させます。