---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECSがサービスデプロイ向けEarly Success Criteriaを導入

Amazon ECS introduces Early Success Criteria for service deployments

**What's New** | 2026-09-04T17:00:00

---

## 概要

- Amazon ECSが早期成功基準（Early Success Criteria）を導入し、健全なタスクの割合に基づいてデプロイメント成功を定義できるようになりました。
- 本機能は特殊キャパシティのワークロードや長寿命接続を持つサービスに適しています。

---

## 前提・背景

### 関連する最近の動向

- **Amazon ECS introduces Early Success Criteria for service deployments - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-deployments-early-success/)

- **Amazon ECS improves Service Availability during Rolling deployments**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/11/amazon-ecs-service-availability-rolling-deployments)

- **Early Success Cr...

---

## 変更内容・新機能

Amazon ECSは、ローリングサービスデプロイメント向けのEarly Success Criteriaを新たにサポートしました。healthy percent（健全パーセント）を設定することで、希望タスク数の指定割合が健全になった時点でデプロイメントを成功とみなすことができます。例えば、desired countが100、healthy percentが90%の場合、90タスクが健全になった時点でデプロイを成功とし、残りのタスクは通常のサービススケーリングで起動します。ソースリビジョンのクリーンアップはBLOCKINGまたはDEFERREDから選択でき、AWS Management Console、CLI、SDK、IaCで設定可能です。GPU加速推論など特殊または制約のあるキャパシティで稼働するワークロードや、長寿命接続やタスクスケールイン保護を持つサービス、デプロイの早期完了を求めるお客様に有益です。AWS CommercialおよびAWS GovCloud (US) の全リージョンで利用可能です。

---

## ユースケース

Amazon ECSは、ローリングサービスデプロイメント向けのEarly Success Criteriaを新たにサポートしました。healthy percent（健全パーセント）を設定することで、希望タスク数の指定割合が健全になった時点でデプロイメントを成功とみなすことができます。例えば、desired countが100、healthy percentが90%の場合、90タスクが健全になった時点でデプロイを成功とし、残りのタスクは通常のサービススケーリングで起動します。ソースリビジョンのクリーンアップはBLOCKINGまたはDEFERREDから選択でき、AWS Management Con

---

## まとめ

- Amazon ECS introduces Early Success Criteria for service deployments について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-deployments-early-success/)

### 関連情報

- [Amazon ECS introduces Early Success Criteria for service deployments - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-deployments-early-success/)
- [Amazon ECS improves Service Availability during Rolling deployments](https://aws.amazon.com/about-aws/whats-new/2025/11/amazon-ecs-service-availability-rolling-deployments)
- [Early Success Criteria documentation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/early-success-criteria.html)