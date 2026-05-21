# AWS Security Hubが未使用アクセスの識別リスク検出に対応

AWS Security Hub now uncovers identity risks from unused access

**カテゴリ:** What's New
**公開日:** 2026-05-20
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-security-hub-unused-access/)

このページでは、AWS What's Newで発表された「AWS Security Hub now uncovers identity risks from unused access」の内容を日本語で要約しています。

---

## 要約

AWS Security Hubは、未使用のIAMアクセス権限を検出し、統一されたコンソールで脅威や露出と共に識別リスクを管理できる新機能を提供するようになりました。この更新により、中央セキュリティチームは組織全体の識別リスクを効率的に把握し、最小権限ポリシーの生成を通じて攻撃面を削減することができます。

## 主な変更点

### 1. 未使用アクセスの自動検出
- AWS Security Hubが未使用のアクセス権限、ロール、認証情報を検出する新機能を提供
- 過去90日間の実際のアクセスアクティビティに基づいてIAMプリンシパルを評価
- 実装による誤検知を最小化

### 2. 統一コンソール
- 複数のツールを切り替える必要がなく、統一されたコンソールで脅威、露出、体勢に関する調査結果と共に識別リスクを管理可能
- セキュリティチームが優先順位付けしやすい構成

### 3. 自動セットアップ
- Security Hubを有効にすると、サービスリンクIAM Access Analyzerが各メンバーアカウントに自動的に作成される
- 追加の設定は不要

### 4. 最小権限ポリシーの生成
- 実際の使用パターンに基づいて推奨される最小権限ポリシーをオンデマンドで生成
- IAM権限を調整して攻撃面を削減可能

### 5. コストメリット
- これらの機能はSecurity Hub Essentialsに追加費用なしで含まれています
- ライセンスの効率化が実現

## 技術的背景

### Identity is the new perimeter
セキュリティ業界では、アイデンティティがセキュリティの最前線（新しいペリメータ）と認識されています。IAMセキュリティは企業のセキュリティ戦略の中核です。

### 未使用アクセスのリスク
- 90日以上未使用の認証情報は重大なセキュリティリスク
- 権限の集約化による脆弱性の温床
- 規制要件（HIPAA, SOC2等）への不適合

## 利用シーン

### セキュリティ運用
- 複数ツール管理の必要性がなくなり運用工数が削減
- セキュリティインシデント対応の迅速化
- 攻撃面の効果的な削減

### 規制対応
- 未使用アクセスの即時排除による監査対応
- アクセス権限管理の可視化と記録

### 定期的なアクセス監査
- 四半期ごとのアクセス権限見直しを自動化
- 部門異動に伴う権限変更の自動検出

## 対応地域

AWS Security Hubが利用可能なすべてのリージョンで利用可能です。詳細は[AWS Regional Services List](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/)を参照してください。

## 次のステップ

1. **今すぐ**: AWS ConsoleからSecurity Hubを有効化
2. **初期構築**: 自動作成されるサービスリンクIAM Access Analyzerを確認
3. **初期実行**: 検出結果をレビューし優先度を判定
4. **ポリシー調整**: 推奨ポリシーを基にIAM権限を段階的に調整
5. **継続管理**: 四半期ごとのアクセス監査と権限クリーニング

## 参考リソース

- [AWS Security Hub User Guide](https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub-v2.html)
- [AWS Security Hub Product Page](https://aws.amazon.com/security-hub/)
- [IAM Access Analyzer Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-securityhub-integration.html)
- [AWS IAM Security Best Practices in 2026](https://dev.to/karaniph/aws-iam-security-best-practices-in-2026-a-complete-guide-o14)

---

**作成日**: 2026-05-21
**更新日**: 2026-05-21