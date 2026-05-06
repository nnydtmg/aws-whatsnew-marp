# AWS Elastic Beanstalk now supports TLS listeners for Network Load Balancers

**カテゴリ:** What's New
**公開日:** 2026-05-06T16:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/elastic-beanstalk-tls-support/](https://aws.amazon.com/about-aws/whats-new/2026/04/elastic-beanstalk-tls-support/)

---

## 要約

AWS Elastic Beanstalkが、Network Load Balancer環境向けのTLSリスナーのサポートを開始いたしました。これにより、SSL証明書とセキュリティポリシーを設定して、ロードバランサーで安全な接続を処理できるようになります。本機能は、セキュアな通信を必要とするアプリケーションを運用されているお客様に特に有益です。

## 詳細

- AWS Elastic Beanstalkが、Network Load Balancer環境向けのTLSリスナーのサポートを開始いたしました。

- TLSリスナーはSSL証明書とセキュリティポリシーを設定でき、ロードバランサーが安全な接続を処理し、復号化されたトラフィックをインスタンスに転送することができます。

- TLSリスナーの設定は、Elastic Beanstalkコンソールまたはコマンドラインインターフェース（CLI）を通じて実施できます。

- これまで、Elastic BeanstalkはNLB環境向けのTLSリスナーをマネージド設定オプションとしてサポートしていませんでした。

- 本機能はElastic Beanstalkおよび Network Load BalancersをサポートするすべてのAWSリージョンで利用可能です。

- このアップデートは、セキュアな通信が必要なアプリケーションをNetwork Load Balancerで運用しているお客様に適しています。

- Elastic Beanstalkの管理画面またはCLIから直接TLSリスナー設定を構成したいお客様に有益です。