# Amazon EMR on EKS がジョブ同時実行数制御に対応

Amazon EMR on EKS now supports job run concurrency controls

**カテゴリ:** What's New
**公開日:** 2026-08-28T17:08:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-emr-eks/)

このページでは、AWS What's Newで発表された「Amazon EMR on EKS now supports job run concurrency controls」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EMR on EKSは、仮想クラスター上のジョブ同時実行数とキュー深度を制御する新機能を提供いたします。本機能は、共有環境でクラスターを保護し、重要なワークロードを安定稼働させたいお客様に適しております。

## このアップデートで何が変わったか

- 新機能は、Amazon EMR on EKSのジョブラン同時実行制御と受付制御です。
- 仮想クラスターに同時実行数とキュー深度の上限を設定できます。
- キュー満杯時はStartJobRunがValidationExceptionを返し、トラフィックを制御できます。
- 本更新は、共有EKS環境で過負荷を防ぎたいお客様に適しております。
- 重要なワークロードを予測可能に実行したいマルチテナント利用者に有用です。

## 対象ユーザー

- 新機能は、Amazon EMR on EKSのジョブラン同時実行制御と受付制御です。
- 仮想クラスターに同時実行数とキュー深度の上限を設定できます。
- キュー満杯時はStartJobRunがValidationExceptionを返し、トラフィックを制御できます。
- 本更新は、共有EKS環境で過負荷を防ぎたいお客様に適しております。
- 重要なワークロードを予測可能に実行したいマルチテナント利用者に有用です。

## 詳細

- 新機能は、Amazon EMR on EKSのジョブラン同時実行制御と受付制御です。
- 仮想クラスターに同時実行数とキュー深度の上限を設定できます。
- キュー満杯時はStartJobRunがValidationExceptionを返し、トラフィックを制御できます。
- 本更新は、共有EKS環境で過負荷を防ぎたいお客様に適しております。
- 重要なワークロードを予測可能に実行したいマルチテナント利用者に有用です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-emr-eks/)