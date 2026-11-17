# Amazon ECR がリージョン・アカウント間でイメージ削除のレプリケーションをサポート

Amazon ECR now replicates image deletions across regions and accounts

**カテゴリ:** What's New
**公開日:** 2026-11-16T22:07:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/replication-deletes-amazon-ecr)

このページでは、AWS What's Newで発表された「Amazon ECR now replicates image deletions across regions and accounts」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECRはイメージの削除とタグの削除をレプリケーション先へ自動的に複製する機能を提供します。マルチリージョンおよびマルチアカウント環境のチームは、宛先リポジトリの一貫性を自動的に維持できます。

## このアップデートで何が変わったか

Amazon Elastic Container Registry (Amazon ECR) が、イメージの削除およびタグの削除をレプリケーション先へ複製する機能をサポートしました。以前はECRレプリケーションはイメージを宛先リージョン・アカウントへ複製するだけで、削除は複製されず各場所で個別に管理する必要がありました。ソースレジストリでイメージやタグを削除すると、ライフサイクルポリシー経由でも、ECRが各宛先に削除を伝播します。複製された削除はEventBridgeイベントを発行し、CloudTrailに記録されます。マルチリージョンまたはマルチアカウントアーキテクチャを運用するチームは、各宛先でイメージのクリーンアップをスクリプト化したり手動で追跡したりする必要がなくなります。この機能はAmazon ECRが利用できるすべてのAWSリージョンで追加コストなしで利用できます。Amazon ECRコンソールまたはAWS CLIでレプリケーション設定を更新して開始できます。

## 詳細

Amazon Elastic Container Registry (Amazon ECR) が、イメージの削除およびタグの削除をレプリケーション先へ複製する機能をサポートしました。以前はECRレプリケーションはイメージを宛先リージョン・アカウントへ複製するだけで、削除は複製されず各場所で個別に管理する必要がありました。ソースレジストリでイメージやタグを削除すると、ライフサイクルポリシー経由でも、ECRが各宛先に削除を伝播します。複製された削除はEventBridgeイベントを発行し、CloudTrailに記録されます。マルチリージョンまたはマルチアカウントアーキテクチャを運用するチームは、各宛先でイメージのクリーンアップをスクリプト化したり手動で追跡したりする必要がなくなります。この機能はAmazon ECRが利用できるすべてのAWSリージョンで追加コストなしで利用できます。Amazon ECRコンソールまたはAWS CLIでレプリケーション設定を更新して開始できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/replication-deletes-amazon-ecr)