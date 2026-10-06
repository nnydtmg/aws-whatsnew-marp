# AWS Continuum for Penetration TestingがCI/CDへの継続的ペネトレーションテスト統合を提供

AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline

**カテゴリ:** What's New
**公開日:** 2026-10-05T18:32:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing/)

このページでは、AWS What's Newで発表された「AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Continuum for Penetration TestingはCI/CDパイプラインへの継続的なペネトレーションテスト統合をパブリックプレビューで提供します。開発チームはセキュリティの所見（重大度・影響エンドポイント・修復ガイダンス）をパイプライン出力で直接受け取れます。開始にはセキュリティの専門知識が不要で、自動生成スニペットを既存パイプラインに貼り付けるだけで5分以内で完了します。この更新は毎日コードを出荷する開発チームにとって有益です。

## このアップデートで何が変わったか

開発チームは毎日コードを出荷していますが、オンデマンドのペネトレーションテストが利用可能でも、セキュリティ検証はデプロイワークフローの外側で行われることが多いでした。CI/CD統合によりこのギャップが解消されます。

この更新は毎日コードを出荷する開発チームにとって有益です。CI/CDシステムを使用しセキュリティ検証をデプロイワークフローに組み込みたいチームに適しています。

## 対象ユーザー

AWS Continuum for Penetration Testing（旧AWS Security Agent）は、サードパーティのペネトレーションテストベンダーと契約せずに継続的およびオンデマンドのペネトレーションテストを提供していました。今回、パブリックプレビューとして、既存のCI/CDシステムに直接統合することでペネトレーションテストをデプロイ時のイベントとし、セキュリティテストをより左側に移動します。

## 詳細

AWS Continuum for Penetration Testing（旧AWS Security Agent）は、サードパーティのペネトレーションテストベンダーと契約せずに継続的およびオンデマンドのペネトレーションテストを提供していました。今回、パブリックプレビューとして、既存のCI/CDシステムに直接統合することでペネトレーションテストをデプロイ時のイベントとし、セキュリティテストをより左側に移動します。

開発チームは毎日コードを出荷していますが、オンデマンドのペネトレーションテストが利用可能でも、セキュリティ検証はデプロイワークフローの外側で行われることが多いでした。CI/CD統合によりこのギャップが解消されます。

主な機能:
- 開発者は重大度、影響を受けるエンドポイント、修復ガイダンスを含む所見をパイプライン出力で直接受け取れます
- 非セキュリティ変更は遅延なく完了し、修復後にパイプラインが自動再テストして検証します
- 開始にはセキュリティの専門知識が不要で、自動生成スニペットを既存パイプラインに貼り付けるだけで5分以内で完了します
- アプリケーションコンテキストは初回実行時に自動でブートストラップされ、事前の完全なペネトレーションテストは不要
- デプロイ後のゲートとして実行し、設定した重大度閾値以上の所見がある場合は次ステージ（例: プロダクション）へのプロモーションをブロック
- OIDCフェデレーションを使用し、長期有効なAWSアクセスキーは不要
- GitHub Actions、GitLab CI/CD、Bitbucket Pipelines、Azure DevOpsに対応
- OWASP Top 10の脆弱性およびビジネスロジックの欠陷を検出

この更新は毎日コードを出荷する開発チームにとって有益です。CI/CDシステムを使用しセキュリティ検証をデプロイワークフローに組み込みたいチームに適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing/)