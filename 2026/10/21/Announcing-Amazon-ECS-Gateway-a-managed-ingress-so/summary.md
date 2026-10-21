# Amazon ECS Gatewayを発表 — ECS向けマネージドイングレス

Announcing Amazon ECS Gateway, a managed ingress solution for your ECS services

**カテゴリ:** What's New
**公開日:** 2026-10-20T23:26:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/announcing-amazon-ecs-gateway/)

このページでは、AWS What's Newで発表された「Announcing Amazon ECS Gateway, a managed ingress solution for your ECS services」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECS Gatewayは、Application Load Balancerを動的にプロビジョニングおよび管理するECS向けの新しいマネージドイングレスソリューションです。プラットフォームチームによる中央集権的なガバナンスと、アプリケーションチームの簡易な利用の両方に適しています。ホストベースルーティングにより最大25サービスが1つのALBを共有でき、各サービスに一意のDNSホスト名が付与されます。すべての商用AWSリージョンで追加料金なしで利用可能です。

## このアップデートで何が変わったか

ホストベースルーティングを提供し、最大25のサービスが1つのALBを共有でき、各サービスに一意のHTTPS DNSホスト名（https://<id>.ecs.<region>.on.aws）を付与します。ECSは基盤インフラのライフサイクルを完全に管理し、最初のサービス接続時にALBをプロビジョニングし、容量到達時に追加し、不要時に削除します。

プラットフォームチームはゲートウェイ上で組織のネットワーキング標準（スキーム、サブネット、AWS WAF Web ACL、セキュリティグループ等）を一度定義し、複数クラスタに関連付けます。アプリケーションチームはネットワーキングの専門知識なしにgateway connectorパラメータを追加するだけでそれらの標準を継承できます。

## 対象ユーザー

Amazon ECS Gatewayは、ECSサービス向けのマネージドイングレスソリューションです。Application Load Balancerとそのサポートリソース（ACM証明書、セキュリティグループ、リスナールール、ターゲットグループ、DNSホスト名）をアカウント内で動的にプロビジョニングおよび管理します。

## 詳細

Amazon ECS Gatewayは、ECSサービス向けのマネージドイングレスソリューションです。Application Load Balancerとそのサポートリソース（ACM証明書、セキュリティグループ、リスナールール、ターゲットグループ、DNSホスト名）をアカウント内で動的にプロビジョニングおよび管理します。

ホストベースルーティングを提供し、最大25のサービスが1つのALBを共有でき、各サービスに一意のHTTPS DNSホスト名（https://<id>.ecs.<region>.on.aws）を付与します。ECSは基盤インフラのライフサイクルを完全に管理し、最初のサービス接続時にALBをプロビジョニングし、容量到達時に追加し、不要時に削除します。

プラットフォームチームはゲートウェイ上で組織のネットワーキング標準（スキーム、サブネット、AWS WAF Web ACL、セキュリティグループ等）を一度定義し、複数クラスタに関連付けます。アプリケーションチームはネットワーキングの専門知識なしにgateway connectorパラメータを追加するだけでそれらの標準を継承できます。

ゲートウェイは最大10,000クラスタと関連可能で、1クラスタあたり最大5ゲートウェイを関連できます。ALBは1ゲートウェイあたり最大200台まで拡張可能です。awsvpcネットワークモードを使用するECSサービスで利用可能で、EC2、Fargate、ECS Managed Instancesのすべてのロンチタイプに対応します。HTTPS（ポート443）のみサポートします。

モニタリングにはAmazon CloudWatchの標準ALBメトリクスとElastic Load Balancingのターゲットヘルス情報を利用できます。既存サービスはUpdateServiceでゲートウェイコネクタを追加し、既存ロードバランサーと並行運用しながら歩進的に移行できます。

すべての商用AWSリージョンで利用可能。追加料金はなく、サービス接続時にプロビジョニングされるALB、CloudWatchログ/メトリクス、ACM証明書、データ転送料金のみ課金されます。AWS Management Console、AWS CLI、API、SDK、CloudFormationで作成・管理できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/announcing-amazon-ecs-gateway/)