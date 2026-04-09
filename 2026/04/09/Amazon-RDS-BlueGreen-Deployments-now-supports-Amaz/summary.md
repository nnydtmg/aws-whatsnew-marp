# Amazon RDS Blue/Green Deployments now supports Amazon RDS Proxy

**カテゴリ:** What's New
**公開日:** 2026-04-09
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/rds-proxy-blue-green/](https://aws.amazon.com/about-aws/whats-new/2026/04/rds-proxy-blue-green/)

---

## 要約

Amazon RDS Blue/Green DeploymentsがAmazon RDS Proxyに対応し、DNS伝播遅延を排除することでスイッチオーバー時のアプリケーション復旧が高速化されました。この機能により、アプリケーション設定の変更なしに、本番環境への迅速な切り替えが可能になります。

## 詳細

Amazon RDS Blue/Green DeploymentsがAmazon RDS Proxyに対応しました。この機能により、DNS伝播遅延を排除することで、スイッチオーバー時のアプリケーション復旧が高速化されます。Blue/Green Deploymentsは、本番環境の変更をテストするための完全に管理されたステージング環境（Green）を作成します。現在の本番データベース（Blue）は安全に保たれたまま、準備ができたらGreen環境に切り替えることができます。スイッチオーバー時に、RDS Proxyはデータベースインスタンスを監視し、Green環境が新しい本番環境になったことを検出します。RDS Proxyが素早くGreen環境への接続をリダイレクトするため、アプリケーション復旧が高速化されます。ドライバーの変更や既存アプリケーション設定の変更は不要です。この機能はAmazon Aurora with MySQL互換性、Amazon Aurora with PostgreSQL互換性、Amazon RDS for MySQL、Amazon RDS for PostgreSQL、Amazon RDS for MariaDBで利用可能です。RDS Proxyが利用可能なすべてのAWS商用リージョンでサポートされています。Amazon RDSコンソールまたはAmazon CLIを使用して、数クリックでデータベースを更新できます。
