# Amazon EKS DashboardがCAローテーションのフリート全体可視化に対応

Amazon EKS Dashboard now provides fleet-wide visibility into certificate authority (CA) rotation

**カテゴリ:** What's New
**公開日:** 2026-10-28T18:07:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-dashboard-fleet-wide-visibility-certificate-authority-ca-rotation/)

このページでは、AWS What's Newで発表された「Amazon EKS Dashboard now provides fleet-wide visibility into certificate authority (CA) rotation」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKSダッシュボードにCAローテーションのフリート全体可視化が追加され、複数クラスターの証明書状況を一箇所で確認できるようになりました。多数のクラスターを運用するプラットフォームチームに適した更新です。

## このアップデートで何が変わったか

Amazon Elastic Kubernetes Service (Amazon EKS) は、Amazon EKS Dashboard に証明書認証局（CA）ローテーションの可視化機能を追加しました。これにより、複数クラスターにわたるCAローテーション状況を統合ビューで確認できます。Amazon EKS Dashboard はすでにAWSリージョンおよびアカウントを横断したクラスターの一元可視化を提供しており、今回CAローテーション情報が追加されたことで、クラスターごとに個別確認することなく、対応が必要な箇所を把握できます。各Amazon EKSクラスターには固有のCAがあり、2018年以降に作成されたクラスターのCAは10年の有効期限を持ち、ローテーション作業を開始すべき時期に近づいています。EKS Dashboardでは、クラスターごとのCAローテーション状況、有効期限が近づいているCA、今後の自動ローテーションイベントを一箇所で確認でき、多数のクラスターを運用するプラットフォームチームがフリート全体で対応を優先できます。Amazon EKS DashboardはAWS Org

## 詳細

Amazon Elastic Kubernetes Service (Amazon EKS) は、Amazon EKS Dashboard に証明書認証局（CA）ローテーションの可視化機能を追加しました。これにより、複数クラスターにわたるCAローテーション状況を統合ビューで確認できます。Amazon EKS Dashboard はすでにAWSリージョンおよびアカウントを横断したクラスターの一元可視化を提供しており、今回CAローテーション情報が追加されたことで、クラスターごとに個別確認することなく、対応が必要な箇所を把握できます。各Amazon EKSクラスターには固有のCAがあり、2018年以降に作成されたクラスターのCAは10年の有効期限を持ち、ローテーション作業を開始すべき時期に近づいています。EKS Dashboardでは、クラスターごとのCAローテーション状況、有効期限が近づいているCA、今後の自動ローテーションイベントを一箇所で確認でき、多数のクラスターを運用するプラットフォームチームがフリート全体で対応を優先できます。Amazon EKS DashboardはAWS Organizationsを通じてアカウントとリージョンを横断してデータを集約するため、組織の管理アカウントでダッシュボードの信頼されたアクセスを有効にする必要があります。ダッシュボードは米国東部リージョン（us-east-1）から閲覧でき、追加料金はかかりません。CAローテーション自体はすべての商用AWSリージョンでサポートされ、ダッシュボードがそのローテーション状況をフリート全体のビューにまとめます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-dashboard-fleet-wide-visibility-certificate-authority-ca-rotation/)