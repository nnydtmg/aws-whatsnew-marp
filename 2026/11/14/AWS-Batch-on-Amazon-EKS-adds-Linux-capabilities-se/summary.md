# AWS Batch on Amazon EKSがLinux capabilitiesとseccompをサポート

AWS Batch on Amazon EKS adds Linux capabilities, seccomp, and pod-level settings

**カテゴリ:** What's New
**公開日:** 2026-11-13T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-batch-eks-security-context/)

このページでは、AWS What's Newで発表された「AWS Batch on Amazon EKS adds Linux capabilities, seccomp, and pod-level settings」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Batch on Amazon EKSが追加のセキュリティコンテキスト設定をサポートし、restrictedプロファイル適用環境でも必要最小限の権限でジョブを実行できるようになりました。

## このアップデートで何が変わったか

- 新機能は、AWS Batch on Amazon EKSでのLinux capabilities、seccompプロファイル、ポッドレベル設定を含むKubernetesセキュリティコンテキストの追加サポートです。
- RegisterJobDefinition APIにより、コンテナのsecurityContextへcapabilitiesとseccompProfileを設定できます。
- podPropertiesのsecurityContextでfsGroupなどのポッド全体設定を定義でき、コンテナレベル設定が上書きします。
- AWSマネジメントコンソール、AWS CLI、AWS SDK、AWS CloudFormationから設定できます。
- Kubernetes Pod Security Standardsのrestrictedプロファイルを適用するEKSクラスターに適しています。
- 必要な権限とシステムコールのみでAWS Batchジョブを実行したいお客様に有益です。
- AWS Batchが利用可能な全てのAWSリージョンで対応しています。

## 対象ユーザー

- 新機能は、AWS Batch on Amazon EKSでのLinux capabilities、seccompプロファイル、ポッドレベル設定を含むKubernetesセキュリティコンテキストの追加サポートです。
- RegisterJobDefinition APIにより、コンテナのsecurityContextへcapabilitiesとseccompProfileを設定できます。
- podPropertiesのsecurityContextでfsGroupなどのポッド全体設定を定義でき、コンテナレベル設定が上書きします。
- AWSマネジメントコンソール、AWS CLI、AWS S

## 詳細

- 新機能は、AWS Batch on Amazon EKSでのLinux capabilities、seccompプロファイル、ポッドレベル設定を含むKubernetesセキュリティコンテキストの追加サポートです。
- RegisterJobDefinition APIにより、コンテナのsecurityContextへcapabilitiesとseccompProfileを設定できます。
- podPropertiesのsecurityContextでfsGroupなどのポッド全体設定を定義でき、コンテナレベル設定が上書きします。
- AWSマネジメントコンソール、AWS CLI、AWS SDK、AWS CloudFormationから設定できます。
- Kubernetes Pod Security Standardsのrestrictedプロファイルを適用するEKSクラスターに適しています。
- 必要な権限とシステムコールのみでAWS Batchジョブを実行したいお客様に有益です。
- AWS Batchが利用可能な全てのAWSリージョンで対応しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-batch-eks-security-context/)