---
marp: true
theme: aws-whatsnew
paginate: true
---

# ARC Region switch に4つの新機能が追加、フェイルオーバーを強化

ARC Region switch adds four new capabilities

**What's New** | 2026-10-14T17:38:00

---

## 概要

- ARC Region switchに4つの新機能が追加され、マルチリージョンアプリケーションのフェイルオーバーをより確実にオーケストレーションできるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **ARC Region switch adds three new capabilities: post-recovery workflows, RDS orchestration and AWS provider support for Terraform**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/02/arc-region-switch-post-recovery-rdsblock)

- **ARC Region switch adds Lambda event source mapping execution block**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/05/region-switch-lamb...

---

## 変更内容・新機能

- ARC Region switchに4つの新機能が追加されました。
- AWS Systems Manager Run Command実行ブロックにより、フェイルオーバー中にマネージドインスタンス上でコマンドを実行できます。
- カスタムアクションLambda実行ブロックにペイロードを渡せるようになり、Lambda関数をリカバリプラン間で再利用できます。
- サービスクォータチェックにより、プライマリとスタンバイリージョン間のクォータ同等性を検証し、上限引き上げを自動申請します。
- ターゲットグループヘルスの待機機能により、プロビジョニングされたキャパシティがトラフィックを処理できる状態かを確認します。
- 本アップデートは、マルチリージョンアプリケーションのフェイルオーバーをオーケストレーションするお客様に適しています。
- リージョン障害時に限定されたリカバリ時間を実現したいお客様に有用です。

---

## まとめ

- ARC Region switch adds four new capabilities について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/region-switch-target-health-ssm-lambda/)

### 関連情報

- [ARC Region switch adds three new capabilities: post-recovery workflows, RDS orchestration and AWS provider support for Terraform](https://aws.amazon.com/about-aws/whats-new/2026/02/arc-region-switch-post-recovery-rdsblock)
- [ARC Region switch adds Lambda event source mapping execution block](https://aws.amazon.com/about-aws/whats-new/2026/05/region-switch-lambda-esm-execution-block)
- [Introducing Amazon Application Recovery Controller Region switch](https://aws.amazon.com/blogs/aws/introducing-amazon-application-recovery-controller-region-switch-a-multi-region-application-recovery-service)
- [About Region switch - Amazon Application Recovery Controller](https://docs.aws.amazon.com/r53recovery/latest/dg/region-switch-plans.html)