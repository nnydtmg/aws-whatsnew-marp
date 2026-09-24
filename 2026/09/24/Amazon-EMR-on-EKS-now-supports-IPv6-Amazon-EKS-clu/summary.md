# Amazon EMR on EKS が IPv6 対応の Amazon EKS クラスターをサポート

Amazon EMR on EKS now supports IPv6 Amazon EKS clusters

**カテゴリ:** What's New
**公開日:** 2026-09-23T15:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-emr-eks-ipv6-support)

このページでは、AWS What's Newで発表された「Amazon EMR on EKS now supports IPv6 Amazon EKS clusters」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EMR on EKSがIPv6対応のAmazon EKSクラスターでのワークロード実行をサポートいたしました。本機能は、大規模なSparkおよびFlinkワークロードを運用するデータプラットフォームチームに適しております。

## このアップデートで何が変わったか

- 新機能は、Amazon EMR on EKSがIPv6対応のAmazon EKSクラスター上でApache SparkおよびApache Flinkを実行できるようになったことです。
- IPv6の広大なアドレス空間により、大規模ジョブをアドレス制限なく同時実行できます。
- 追加設定や追加料金なしで、emr-7.14.0およびemr-spark-8.0.0以降からご利用いただけます。
- 本更新は、大規模な分析ワークロードを運用するデータプラットフォームおよび分析チームに適しております。
- StartJobRun、Spark Connect Interactive Endpoints、Amazon SageMaker Unified Studioで追加設定なしにワークロードを投入可能。Flink、Livy、Spark Operatorsもサポート。
- 500エグゼキューター規模のSparkジョブをアドレス制限を気にせず同時実行可能。
- IPv4節約のためのセカンダリCIDRやプレフィックス委任などの回避策が不要に。
- Amazon EMR on EKSおよびIPv6 Am

## 詳細

- 新機能は、Amazon EMR on EKSがIPv6対応のAmazon EKSクラスター上でApache SparkおよびApache Flinkを実行できるようになったことです。
- IPv6の広大なアドレス空間により、大規模ジョブをアドレス制限なく同時実行できます。
- 追加設定や追加料金なしで、emr-7.14.0およびemr-spark-8.0.0以降からご利用いただけます。
- 本更新は、大規模な分析ワークロードを運用するデータプラットフォームおよび分析チームに適しております。
- StartJobRun、Spark Connect Interactive Endpoints、Amazon SageMaker Unified Studioで追加設定なしにワークロードを投入可能。Flink、Livy、Spark Operatorsもサポート。
- 500エグゼキューター規模のSparkジョブをアドレス制限を気にせず同時実行可能。
- IPv4節約のためのセカンダリCIDRやプレフィックス委任などの回避策が不要に。
- Amazon EMR on EKSおよびIPv6 Amazon EKSクラスターが利用可能なすべてのAWSリージョンで利用可能。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-emr-eks-ipv6-support)