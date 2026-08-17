# Amazon Quick にカスタム権限のデフォルト拒否機能を追加

Amazon Quick adds deny by default for custom permissions

**カテゴリ:** What's New
**公開日:** 2026-08-14
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick-deny-by-default-permissions/)

---

## 要約

Amazon Quickのカスタム権限に「デフォルト拒否」機能が追加され、管理者が新しいAI機能をリリース前に制限し、準備完了後に明示的に許可することが可能になりました。この更新は、セキュリティとガバナンスを重視する組織に対して、AIの新機能に対するより厳格な制御を提供します。

## このアップデートで何が変わったか

### 主な変更点

1. **デフォルト拒否設定の追加**
   - Amazon Quickのカスタム権限に「デフォルト拒否」という新しいガバナンス設定が追加
   - 新しいAI機能がユーザーに到達する前に自動的に制限

2. **段階的な許可メカニズム**
   - 従来: 新しいAI機能がリリース時にすべてのユーザーが自動的に利用可能 → 管理者が事後対応
   - 新方式: 新機能が自動的に制限 → 管理者が準備完了後に明示的に許可

3. **柔軟な適用範囲**
   - カスタム権限プロファイルでAI機能カテゴリを制限
   - ユーザー、ロール、またはアカウント全体に割り当て可能

4. **きめ細かい制御**
   - Quickは割り当てられたユーザーに対して、起動時に新しいAI機能を自動的に拒否
   - カテゴリを制限すると、そのカテゴリ内の既存機能も制限
   - 管理者は準備ができた時点で、各機能を明示的に許可
   - 制限は設定したプロファイルにのみ適用

## 設定方法

### 設定が可能な場所

- **Amazon Quick アカウント管理**: UIから直感的に設定
- **AWS CLI**: プログラマティックな管理が可能

### 設定例（AWS CLI）

```bash
aws quicksight update-custom-permissions \
--aws-account-id AWSACCOUNTID \
--custom-permissions-name "RestrictAI-Finance" \
--governance '{"DefaultCategoryEffects": {"AI": "DENY_BY_DEFAULT"}}'
```

## 主なメリット

### セキュリティとコンプライアンス

- **事前検証可能**: AI機能をリリース前に検証・評価できる
- **段階的な導入**: リスクを最小化して段階的にロールアウト可能
- **規制対応**: コンプライアンス要件（HIPAA、SOC2等）への対応が容易

### 運用効率化

- **計画的な管理**: 準備完了後に意図的に機能を有効化
- **監査トレーサビリティ**: どのタイミングで誰が機能を許可したかを追跡可能
- **ガバナンスの強化**: AIの利用に対する明示的なコントロール

## ユースケース

### 金融機関
- **課題**: 新しいAI機能のセキュリティ検証が必須
- **ソリューション**: デフォルト拒否でセキュリティチームが検証してから許可

### ヘルスケア
- **課題**: HIPAA等の規制対応が必要
- **ソリューション**: 新機能がリリース時に自動拒否、コンプライアンスチームが審査後に許可

### 大規模エンタープライズ
- **課題**: 複数の部門・ロールで異なる要件がある
- **ソリューション**: 部門ごとに異なるカスタム権限プロファイルを作成

## 利用可能な地域

この機能はAmazon Quickが利用可能なすべてのAWSリージョンで利用可能です。

## 権限の階層構造

Amazon Quickのカスタム権限は以下の優先順序で適用されます:

1. **ユーザー個別レベル（最優先）**: 特定ユーザー向けの設定
2. **ロールベース**: 職務ロール単位での設定
3. **アカウント全体（最下位）**: すべてのユーザーへの一括設定

## 参考リソース

- [AWS What's New - Amazon Quick adds deny by default for custom permissions](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick-deny-by-default-permissions/)
- [Amazon Quick ドキュメント - Deny by Default](https://docs.aws.amazon.com/quick/latest/userguide/custom-permissions-governance.html)
- [Amazon Quick - AI and Agent Security](https://docs.aws.amazon.com/quick/latest/userguide/sec-agentic-security.html)
- [Enterprise Governance in Amazon Quick](https://aws.amazon.com/blogs/business-intelligence/establishing-enterprise-governance-in-amazon-quick-using-custom-permissions)

---

**最終更新:** 2026年8月14日