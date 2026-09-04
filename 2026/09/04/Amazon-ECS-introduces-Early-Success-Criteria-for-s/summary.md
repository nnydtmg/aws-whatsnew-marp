# Amazon ECSがサービスデプロイ向けEarly Success Criteriaを導入

Amazon ECS introduces Early Success Criteria for service deployments

**カテゴリ:** What's New
**公開日:** 2026-09-04T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-deployments-early-success/)

このページでは、AWS What's Newで発表された「Amazon ECS introduces Early Success Criteria for service deployments」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ECSが早期成功基準（Early Success Criteria）を導入し、健全なタスクの割合に基づいてデプロイメント成功を定義できるようになりました。本機能は特殊キャパシティのワークロードや長寿命接続を持つサービスに適しています。

## このアップデートで何が変わったか

Amazon ECSは、ローリングサービスデプロイメント向けのEarly Success Criteriaを新たにサポートしました。healthy percent（健全パーセント）を設定することで、希望タスク数の指定割合が健全になった時点でデプロイメントを成功とみなすことができます。例えば、desired countが100、healthy percentが90%の場合、90タスクが健全になった時点でデプロイを成功とし、残りのタスクは通常のサービススケーリングで起動します。ソースリビジョンのクリーンアップはBLOCKINGまたはDEFERREDから選択でき、AWS Management Console、CLI、SDK、IaCで設定可能です。GPU加速推論など特殊または制約のあるキャパシティで稼働するワークロードや、長寿命接続やタスクスケールイン保護を持つサービス、デプロイの早期完了を求めるお客様に有益です。AWS CommercialおよびAWS GovCloud (US) の全リージョンで利用可能です。

## 対象ユーザー

Amazon ECSは、ローリングサービスデプロイメント向けのEarly Success Criteriaを新たにサポートしました。healthy percent（健全パーセント）を設定することで、希望タスク数の指定割合が健全になった時点でデプロイメントを成功とみなすことができます。例えば、desired countが100、healthy percentが90%の場合、90タスクが健全になった時点でデプロイを成功とし、残りのタスクは通常のサービススケーリングで起動します。ソースリビジョンのクリーンアップはBLOCKINGまたはDEFERREDから選択でき、AWS Management Con

## 活用シーン

Amazon ECSは、ローリングサービスデプロイメント向けのEarly Success Criteriaを新たにサポートしました。healthy percent（健全パーセント）を設定することで、希望タスク数の指定割合が健全になった時点でデプロイメントを成功とみなすことができます。例えば、desired countが100、healthy percentが90%の場合、90タスクが健全になった時点でデプロイを成功とし、残りのタスクは通常のサービススケーリングで起動します。ソースリビジョンのクリーンアップはBLOCKINGまたはDEFERREDから選択でき、AWS Management Con

## 詳細

Amazon ECSは、ローリングサービスデプロイメント向けのEarly Success Criteriaを新たにサポートしました。healthy percent（健全パーセント）を設定することで、希望タスク数の指定割合が健全になった時点でデプロイメントを成功とみなすことができます。例えば、desired countが100、healthy percentが90%の場合、90タスクが健全になった時点でデプロイを成功とし、残りのタスクは通常のサービススケーリングで起動します。ソースリビジョンのクリーンアップはBLOCKINGまたはDEFERREDから選択でき、AWS Management Console、CLI、SDK、IaCで設定可能です。GPU加速推論など特殊または制約のあるキャパシティで稼働するワークロードや、長寿命接続やタスクスケールイン保護を持つサービス、デプロイの早期完了を求めるお客様に有益です。AWS CommercialおよびAWS GovCloud (US) の全リージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-deployments-early-success/)