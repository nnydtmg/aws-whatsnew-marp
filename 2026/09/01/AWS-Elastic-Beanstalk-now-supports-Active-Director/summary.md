# AWS Elastic Beanstalk が Windows Server 環境の Active Directory ドメイン参加に対応

AWS Elastic Beanstalk now supports Active Directory domain join for Windows Server environments

**カテゴリ:** What's New
**公開日:** 2026-08-31T04:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/elastic-beanstalk-active-directory-domain-join/)

このページでは、AWS What's Newで発表された「AWS Elastic Beanstalk now supports Active Directory domain join for Windows Server environments」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Elastic Beanstalkは、Windows Server環境のインスタンスをActive Directoryドメインへ自動参加させる機能を提供いたします。これにより、カスタムスクリプトなしでドメイン参加したWindowsワークロードを実行できます。

## このアップデートで何が変わったか

新機能は、AWS Elastic BeanstalkがWindows ServerインスタンスをAWS Directory Serviceで管理するActive Directoryドメインへ自動参加させることです。設定オプションを指定するだけで、オートスケーリングにより後から起動したインスタンスも含め、起動時にアプリケーションのデプロイ前にドメインへ参加します。ドメイン参加後は、Windows統合認証の利用、グループポリシーの適用、ファイル共有やWindows認証のSQL Serverなどのドメインリソースへのアクセスが可能です。ドメイン参加に失敗してもデプロイは完了し、環境が問題を報告します。本アップデートは、Elastic Beanstalk上でドメイン参加したWindowsワークロードを実行するお客様に適しています。

## 詳細

新機能は、AWS Elastic BeanstalkがWindows ServerインスタンスをAWS Directory Serviceで管理するActive Directoryドメインへ自動参加させることです。設定オプションを指定するだけで、オートスケーリングにより後から起動したインスタンスも含め、起動時にアプリケーションのデプロイ前にドメインへ参加します。ドメイン参加後は、Windows統合認証の利用、グループポリシーの適用、ファイル共有やWindows認証のSQL Serverなどのドメインリソースへのアクセスが可能です。ドメイン参加に失敗してもデプロイは完了し、環境が問題を報告します。本アップデートは、Elastic Beanstalk上でドメイン参加したWindowsワークロードを実行するお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/elastic-beanstalk-active-directory-domain-join/)