---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS DataSync EnhancedモードがGoogle CloudとAzure向けOIDC認証をサポート

AWS DataSync Enhanced mode supports OpenID Connect (OIDC) for Google Cloud and Microsoft Azure

**What's New** | 2026-11-04T08:00:00

---

## 概要

- AWS DataSync EnhancedモードがGoogle Cloud StorageとMicrosoft Azure Blob Storage向けのOIDC認証をサポートいたしました。
- 長期認証情報を使用せずにセキュリティポリシーへ準拠したクラウド間データ転送が可能になります。

---

## 前提・背景

### 関連する最近の動向

- **AWS DataSync Enhanced mode supports OpenID Connect (OIDC) for Google Cloud and Microsoft Azure**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/datasync-enhanced-oidc-google-azure/)

- **AWS DataSync simplifies and accelerates cross-cloud data transfers**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/05/aws-datasync-accelerates-cross-cloud-data-transfers)

- ...

---

## 変更内容・新機能

AWS DataSync Enhancedモードは、Google Cloud StorageおよびMicrosoft Azure Blob Storageのロケーションに対してOpenID Connect（OIDC）認証を新たにサポートいたしました。DataSyncはIAMロールを用いてGoogle CloudまたはMicrosoft Entra IDから短期間の認証情報を取得し、自動的に更新いたします。HMACキーやSASトークンなどの長期認証情報を使用せずに対象ストレージへアクセスできるようになりました。本アップデートは、クラウド間でデータを移動しつつ長期認証情報の使用を禁止するセキュリティポリシーに準拠する必要があるお客様に適しております。IAMロールをAWS CLI、API、またはAWS CloudFormationでDataSyncロケーションに追加することで開始できます。本機能はDataSync EnhancedモードがサポートされているすべてのAWSリージョンで利用可能です。

---

## まとめ

- AWS DataSync Enhanced mode supports OpenID Connect (OIDC) for Google Cloud and Microsoft Azure について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/datasync-enhanced-oidc-google-azure/)

### 関連情報

- [AWS DataSync Enhanced mode supports OpenID Connect (OIDC) for Google Cloud and Microsoft Azure](https://aws.amazon.com/about-aws/whats-new/2026/11/datasync-enhanced-oidc-google-azure/)
- [AWS DataSync simplifies and accelerates cross-cloud data transfers](https://aws.amazon.com/about-aws/whats-new/2025/05/aws-datasync-accelerates-cross-cloud-data-transfers)
- [New for AWS DataSync – Move Data Between AWS and Other Public Locations](https://aws.amazon.com/blogs/aws/new-for-aws-datasync-move-data-between-aws-and-google-cloud-storage-or-aws-and-microsoft-azure-files)
- [Configuring AWS DataSync transfers with Google Cloud Storage](https://docs.aws.amazon.com/datasync/latest/userguide/tutorial_transfer-google-cloud-storage.html)
- [AWS DataSync Enhanced mode adds HDFS, Azure Blob, and object storage locations with Hyper-V agent support](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-datasync-hdfs-azure-blob-hyper-v)