# Amazon EKS に Kubernetes バージョンロールバック機能

Amazon EKS now supports Kubernetes version rollback

**カテゴリ:** What's New
**公開日:** 2026-07-01T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-version-rollback)

このページでは、AWS What's Newで発表された「Amazon EKS now supports Kubernetes version rollback」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKS が Kubernetes バージョンのロールバック機能をサポートするようになり、アップグレード後 7 日以内に前のマイナーバージョンに戻すことが可能になりました。本機能は自動互換性チェックを含み、すべての AWS リージョンで追加費用なしで利用できます。

## このアップデートで何が変わったか

- この機能は、Amazon EKS が利用可能なすべての AWS リージョンで追加費用なしで提供されます。

- 本機能は、本番環境の実際の条件下で新しいバージョンを検証し、必要に応じてロールバックできるため、アップグレードワークフローに対する追加的なセーフティネットを提供します。

## 詳細

- Amazon EKS は Kubernetes バージョンのロールバック機能をサポートするようになりました。

- アップグレード後に問題が発生した場合、7 日以内に前の Kubernetes マイナーバージョンに戻すことができます。

- Amazon EKS コンソール、AWS CLI、または AWS SDK を使用してロールバックを実行できます。

- ロールバック前に、API 互換性、バージョンスキュー、アドオン互換性、クラスタヘルスなどの自動チェックを含むロールバック準備状況の確認が行われます。

- EKS Auto Mode を実行しているクラスタの場合、EKS は設定された中断制御を遵守しながら、ワーカーノードのロールバックを自動的に管理してからコントロールプレーンを戻します。

- この機能は、Amazon EKS が利用可能なすべての AWS リージョンで追加費用なしで提供されます。

- 本機能は、本番環境の実際の条件下で新しいバージョンを検証し、必要に応じてロールバックできるため、アップグレードワークフローに対する追加的なセーフティネットを提供します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-version-rollback)