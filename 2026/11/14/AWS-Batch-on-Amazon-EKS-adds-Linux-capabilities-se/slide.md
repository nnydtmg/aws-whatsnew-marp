---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Batch on Amazon EKSがLinux capabilitiesとseccompをサポート

AWS Batch on Amazon EKS adds Linux capabilities, seccomp, and pod-level settings

**What's New** | 2026-11-13T08:00:00

---

## 概要

- AWS Batch on Amazon EKSが追加のセキュリティコンテキスト設定をサポートし、restrictedプロファイル適用環境でも必要最小限の権限でジョブを実行できるようになりました。

---

## 前提・背景

### 関連する最近の動向

- **AWS Batch on Amazon EKS adds Linux capabilities, seccomp, and pod-level settings - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-batch-eks-security-context)

- **(batch): support EKS pod security context, Linux capabilities and seccomp profile on EKS job definitions**
  [詳細](https://github.com/aws/aws-cdk/issues/39702)

- **EksContainerSecurityContext - AWS...

---

## 変更内容・新機能

- 新機能は、AWS Batch on Amazon EKSでのLinux capabilities、seccompプロファイル、ポッドレベル設定を含むKubernetesセキュリティコンテキストの追加サポートです。
- RegisterJobDefinition APIにより、コンテナのsecurityContextへcapabilitiesとseccompProfileを設定できます。
- podPropertiesのsecurityContextでfsGroupなどのポッド全体設定を定義でき、コンテナレベル設定が上書きします。
- AWSマネジメントコンソール、AWS CLI、AWS SDK、AWS CloudFormationから設定できます。
- Kubernetes Pod Security Standardsのrestrictedプロファイルを適用するEKSクラスターに適しています。
- 必要な権限とシステムコールのみでAWS Batchジョブを実行したいお客様に有益です。
- AWS Batchが利用可能な全てのAWSリージョンで対応しています。

---

## まとめ

- AWS Batch on Amazon EKS adds Linux capabilities, seccomp, and pod-level settings について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-batch-eks-security-context/)

### 関連情報

- [AWS Batch on Amazon EKS adds Linux capabilities, seccomp, and pod-level settings - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-batch-eks-security-context)
- [(batch): support EKS pod security context, Linux capabilities and seccomp profile on EKS job definitions](https://github.com/aws/aws-cdk/issues/39702)
- [EksContainerSecurityContext - AWS Batch](https://docs.aws.amazon.com/batch/latest/APIReference/API_EksContainerSecurityContext.html)
- [Runtime security - Amazon EKS](https://docs.aws.amazon.com/eks/latest/best-practices/runtime-security.html)
- [Enforce Pod Security Standards on Amazon EKS](https://skundunotes.com/2026/07/07/enforce-pod-security-standards-on-amazon-eks)