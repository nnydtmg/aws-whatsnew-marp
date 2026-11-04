# AWS DataSync EnhancedモードがGoogle CloudとAzure向けOIDC認証をサポート

AWS DataSync Enhanced mode supports OpenID Connect (OIDC) for Google Cloud and Microsoft Azure

**カテゴリ:** What's New
**公開日:** 2026-11-04T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/datasync-enhanced-oidc-google-azure/)

このページでは、AWS What's Newで発表された「AWS DataSync Enhanced mode supports OpenID Connect (OIDC) for Google Cloud and Microsoft Azure」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS DataSync EnhancedモードがGoogle Cloud StorageとMicrosoft Azure Blob Storage向けのOIDC認証をサポートいたしました。長期認証情報を使用せずにセキュリティポリシーへ準拠したクラウド間データ転送が可能になります。

## このアップデートで何が変わったか

AWS DataSync Enhancedモードは、Google Cloud StorageおよびMicrosoft Azure Blob Storageのロケーションに対してOpenID Connect（OIDC）認証を新たにサポートいたしました。DataSyncはIAMロールを用いてGoogle CloudまたはMicrosoft Entra IDから短期間の認証情報を取得し、自動的に更新いたします。HMACキーやSASトークンなどの長期認証情報を使用せずに対象ストレージへアクセスできるようになりました。本アップデートは、クラウド間でデータを移動しつつ長期認証情報の使用を禁止するセキュリティポリシーに準拠する必要があるお客様に適しております。IAMロールをAWS CLI、API、またはAWS CloudFormationでDataSyncロケーションに追加することで開始できます。本機能はDataSync EnhancedモードがサポートされているすべてのAWSリージョンで利用可能です。

## 対象ユーザー

AWS DataSync Enhancedモードは、Google Cloud StorageおよびMicrosoft Azure Blob Storageのロケーションに対してOpenID Connect（OIDC）認証を新たにサポートいたしました。DataSyncはIAMロールを用いてGoogle CloudまたはMicrosoft Entra IDから短期間の認証情報を取得し、自動的に更新いたします。HMACキーやSASトークンなどの長期認証情報を使用せずに対象ストレージへアクセスできるようになりました。本アップデートは、クラウド間でデータを移動しつつ長期認証情報の使用を禁止するセキュリテ

## 詳細

AWS DataSync Enhancedモードは、Google Cloud StorageおよびMicrosoft Azure Blob Storageのロケーションに対してOpenID Connect（OIDC）認証を新たにサポートいたしました。DataSyncはIAMロールを用いてGoogle CloudまたはMicrosoft Entra IDから短期間の認証情報を取得し、自動的に更新いたします。HMACキーやSASトークンなどの長期認証情報を使用せずに対象ストレージへアクセスできるようになりました。本アップデートは、クラウド間でデータを移動しつつ長期認証情報の使用を禁止するセキュリティポリシーに準拠する必要があるお客様に適しております。IAMロールをAWS CLI、API、またはAWS CloudFormationでDataSyncロケーションに追加することで開始できます。本機能はDataSync EnhancedモードがサポートされているすべてのAWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/datasync-enhanced-oidc-google-azure/)