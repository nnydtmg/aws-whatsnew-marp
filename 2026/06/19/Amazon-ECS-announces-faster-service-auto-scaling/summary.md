# Amazon ECS が高速なサービスオートスケーリングを発表

Amazon ECS announces faster service auto scaling

**カテゴリ:** What's New
**公開日:** 2026-06-18T21:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ecs-faster-autoscaling/)

このページでは、AWS What's Newで発表された「Amazon ECS announces faster service auto scaling」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECS サービスのオートスケーリングが20秒単位の高解像度メトリクスに対応し、スケールアウトのトリガー時間を76%短縮できるようになりました。この更新は、ワークロード需要の変動に迅速に対応しながらコンピュート費用を削減したい企業に適しています。

## このアップデートで何が変わったか

- この機能は、AWS コンソール、CLI、CloudFormation、または AWS SDK を使用して設定でき、AWS Fargate、Amazon ECS マネージドインスタンス、Amazon EC2 のすべての ECS コンピュートオプションで利用可能です。

- この機能は、すべての AWS 商用リージョンおよび AWS GovCloud（US）リージョンで利用可能です。

## 対象ユーザー

- この機能は、AWS コンソール、CLI、CloudFormation、または AWS SDK を使用して設定でき、AWS Fargate、Amazon ECS マネージドインスタンス、Amazon EC2 のすべての ECS コンピュートオプションで利用可能です。

## 詳細

- Amazon ECS サービスのオートスケーリングが、20秒単位の高解像度メトリクスとメトリクス公開の最適化により、負荷変化への検出と対応が高速化されました。

- AWS のベンチマークテストでは、スケールアウトのトリガー時間が363秒から86秒に短縮され（76%高速化、4.2倍）、新しいタスクのスケーリングとプロビジョニングの総時間が386秒から109秒に短縮されました（72%高速化、3.5倍）。

- この高速なサービスオートスケーリングにより、ベースラインキャパシティを削減し、ワークロード需要の変動に対応しながらコンピュート費用を低減できます。

- CPU とメモリ使用率のターゲットトラッキングポリシーが、デフォルトの60秒解像度に加えて20秒メトリクス解像度をサポートするようになりました。

- この機能は、AWS コンソール、CLI、CloudFormation、または AWS SDK を使用して設定でき、AWS Fargate、Amazon ECS マネージドインスタンス、Amazon EC2 のすべての ECS コンピュートオプションで利用可能です。

- 高解像度メトリクスは標準的な CloudWatch 料金の対象となります。

- この機能は、すべての AWS 商用リージョンおよび AWS GovCloud（US）リージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ecs-faster-autoscaling/)