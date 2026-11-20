---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAM Roles Anywhere がエイリアスをサポートしワークロード設定を簡素化

IAM Roles Anywhere now supports aliases to simplify workload configuration

**What's New** | 2026-11-19T19:23:00

---

## 概要

- IAM Roles Anywhereがエイリアスに対応し、読みやすい名前で設定を簡素化できるようになりました。
- 複数アカウントやリージョンで同一テンプレートを利用したいお客様に適しております。

---

## 前提・背景

### これまでの課題

IAM Roles Anywhere がトラストアンカー、プロファイル、CRL にエイリアスを割り当てられるようになりました。エイリアスARNを用いることで、システム生成IDではなく読みやすい名前で一時認証情報をリクエストできます。各アカウントとリージョンで同じエイリアスを設定できるため、一つの設定テンプレートを横断的にご利用いただけます。本更新は、複数アカウントやリージョンでワークロード設定を管理されるお客様に適しております。マシンイメージや構成管理テンプレートで認証情報ヘルパーをご利用のお客

---

### 関連する最近の動向

- **Document history for the AWS Identity and Access Management Roles Anywhere User Guide**
  [詳細](https://docs.aws...

---

## 変更内容・新機能

IAM Roles Anywhere がトラストアンカー、プロファイル、CRL にエイリアスを割り当てられるようになりました。エイリアスARNを用いることで、システム生成IDではなく読みやすい名前で一時認証情報をリクエストできます。各アカウントとリージョンで同じエイリアスを設定できるため、一つの設定テンプレートを横断的にご利用いただけます。本更新は、複数アカウントやリージョンでワークロード設定を管理されるお客様に適しております。マシンイメージや構成管理テンプレートで認証情報ヘルパーをご利用のお客様にも有益です。AWS Identity and Access Management (IAM) Roles Anywhere now supports aliases, which are readable names that you assign to trust anchors, profiles, and certificate revocation lists (CRLs). Your workloads can request temporary credentials using

---

## ユースケース

IAM Roles Anywhere がトラストアンカー、プロファイル、CRL にエイリアスを割り当てられるようになりました。エイリアスARNを用いることで、システム生成IDではなく読みやすい名前で一時認証情報をリクエストできます。各アカウントとリージョンで同じエイリアスを設定できるため、一つの設定テンプレートを横断的にご利用いただけます。本更新は、複数アカウントやリージョンでワークロード設定を管理されるお客様に適しております。マシンイメージや構成管理テンプレートで認証情報ヘルパーをご利用のお客様にも有益です。AWS Identity and Access Management (IAM) R

---

## まとめ

- IAM Roles Anywhere now supports aliases to simplify workload configuration について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-roles-anywhere-alias/)

### 関連情報

- [Document history for the AWS Identity and Access Management Roles Anywhere User Guide](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/doc-history.html)
- [Extend IAM roles to workloads in multicloud with AWS IAM Roles Anywhere](https://aws.amazon.com/iam/roles-anywhere)
- [Using aliases for trust anchors, profiles, and CRLs](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/resource-aliases.html)