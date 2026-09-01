---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Elastic Beanstalk が Windows Server 環境の Active Directory ドメイン参加に対応

AWS Elastic Beanstalk now supports Active Directory domain join for Windows Server environments

**What's New** | 2026-08-31T04:00:00

---

## 概要

- AWS Elastic Beanstalkは、Windows Server環境のインスタンスをActive Directoryドメインへ自動参加させる機能を提供いたします。
- これにより、カスタムスクリプトなしでドメイン参加したWindowsワークロードを実行できます。

---

## 前提・背景

### これまでの課題

新機能は、AWS Elastic BeanstalkがWindows ServerインスタンスをAWS Directory Serviceで管理するActive Directoryドメインへ自動参加させることです。設定オプションを指定するだけで、オートスケーリングにより後から起動したインスタンスも含め、起動時にアプリケーションのデプロイ前にドメインへ参加します。ドメイン参加後は、Windows統合認証の利用、グループポリシーの適用、ファイル共有やWindows認証のSQL Serverなどのドメ

---

### 関連する最近の動向

- **AWS Elastic Beanstalk now supports Active Directory domain join for Windows Server environments - AWS**
  [詳細](...

---

## 変更内容・新機能

新機能は、AWS Elastic BeanstalkがWindows ServerインスタンスをAWS Directory Serviceで管理するActive Directoryドメインへ自動参加させることです。設定オプションを指定するだけで、オートスケーリングにより後から起動したインスタンスも含め、起動時にアプリケーションのデプロイ前にドメインへ参加します。ドメイン参加後は、Windows統合認証の利用、グループポリシーの適用、ファイル共有やWindows認証のSQL Serverなどのドメインリソースへのアクセスが可能です。ドメイン参加に失敗してもデプロイは完了し、環境が問題を報告します。本アップデートは、Elastic Beanstalk上でドメイン参加したWindowsワークロードを実行するお客様に適しています。

---

## まとめ

- AWS Elastic Beanstalk now supports Active Directory domain join for Windows Server environments について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/elastic-beanstalk-active-directory-domain-join/)

### 関連情報

- [AWS Elastic Beanstalk now supports Active Directory domain join for Windows Server environments - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/elastic-beanstalk-active-directory-domain-join)
- [Joining an Amazon EC2 Windows instance to your Simple AD Active Directory - AWS Directory Service](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/simple_ad_launching_instance.html)
- [Simplifying Active Directory domain join with AWS Systems Manager | Microsoft Workloads on AWS](https://aws.amazon.com/blogs/modernizing-with-aws/simplifying-active-directory-domain-join-with-aws-systems-manager-2)