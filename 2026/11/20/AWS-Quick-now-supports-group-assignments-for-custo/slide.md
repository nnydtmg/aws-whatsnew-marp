---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Quickがカスタム権限と制限プロファイルのグループ割り当てに対応

AWS Quick now supports group assignments for custom permissions and limit profiles

**What's New** | 2026-11-20T20:42:00

---

## 概要

- AWS Quickは、カスタム権限と制限プロファイルのグループ割り当てに対応し、管理者はIdPグループ単位で機能制限とリソース制限を適用できるようになりました。
- 本機能は、エンタープライズのID構造に合わせてガバナンスを整えたいProfessionalおよびEnterpriseプランの組織に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Assigning custom permissions profiles - AWS Quick**
  [詳細](https://docs.aws.amazon.com/quick/latest/userguide/custom-permissions-assign.html)

- **Automate user-level custom permissions for AWS Quick**
  [詳細](https://aws.amazon.com/blogs/machine-learning/automate-user-level-custom-permissions-for-amazon-quick)

- **Establishing enterprise governance in Amazon Quick using custom ...

---

## 変更内容・新機能

AWS Quickは、カスタム権限および制限プロファイルをエンタープライズIdPのグループへ割り当てる機能を新たにサポートしました。管理者は、ユーザー、ロール、アカウントに加え、グループ単位で機能制限およびユーザーごとのリソース制限を適用できるようになりました。組織は個別ユーザーへの割り当てを維持せずに、エンタープライズのID構造に合わせてガバナンスを運用できます。管理者はQuick管理コンソールまたは新しいポリシー割り当てAPIで、ユーザー・アカウント・グループへの割り当てを管理できます。例えば、財務グループにエージェント作成を禁止するカスタム権限プロファイルを割り当てたり、Deny by Defaultを適用して管理者が明示的に許可した機能のみ使えるようにできます。また、グループに制限プロファイルを割り当て、各メンバーのインデックス容量とエージェント時間を設定できます。複数グループに所属するユーザーの重複割り当ては、カスタム権限ではいずれかのグループが拒否した機能は拒否のまま、制限プロファイルでは各制限種別の最大値が適用されます。ProfessionalプランおよびEnterpri

---

## ユースケース

AWS Quickは、カスタム権限および制限プロファイルをエンタープライズIdPのグループへ割り当てる機能を新たにサポートしました。管理者は、ユーザー、ロール、アカウントに加え、グループ単位で機能制限およびユーザーごとのリソース制限を適用できるようになりました。組織は個別ユーザーへの割り当てを維持せずに、エンタープライズのID構造に合わせてガバナンスを運用できます。管理者はQuick管理コンソールまたは新しいポリシー割り当てAPIで、ユーザー・アカウント・グループへの割り当てを管理できます。例えば、財務グループにエージェント作成を禁止するカスタム権限プロファイルを割り当てたり、Deny by 

---

## まとめ

- AWS Quick now supports group assignments for custom permissions and limit profiles について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-group-assignments-custom-permissions-limit-profiles/)

### 関連情報

- [Assigning custom permissions profiles - AWS Quick](https://docs.aws.amazon.com/quick/latest/userguide/custom-permissions-assign.html)
- [Automate user-level custom permissions for AWS Quick](https://aws.amazon.com/blogs/machine-learning/automate-user-level-custom-permissions-for-amazon-quick)
- [Establishing enterprise governance in Amazon Quick using custom permissions](https://aws.amazon.com/blogs/business-intelligence/establishing-enterprise-governance-in-amazon-quick-using-custom-permissions)
- [Custom permissions - AWS Quick](https://docs.aws.amazon.com/quick/latest/userguide/custom-permissions.html)
- [Creating custom permissions profiles - AWS Quick](https://docs.aws.amazon.com/quick/latest/userguide/custom-permissions-create.html)