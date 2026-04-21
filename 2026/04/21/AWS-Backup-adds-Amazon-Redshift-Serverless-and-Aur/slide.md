---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Backup
Amazon Redshift ServerlessおよびAmazon Aurora DSQLがAWS Organizationsバックアップポリシーに対応

**発表日: 2026年4月21日**

---

## 概要

### AWS Backupの拡張

- **Amazon Redshift Serverless**: ネームスペースがAWS Organizationsバックアップポリシーでサポート
- **Amazon Aurora DSQL**: クラスターがAWS Organizationsバックアップポリシーでサポート
- **正確なリソース制御**: タグベースの選択に頼らず、直接リソースタイプを指定可能
- **柔軟なポリシー定義**: 組織管理者がメンバーアカウント全体で細かなバックアップ制御を実施

---

## 前提・背景

### これまでの課題

- Redshift ServerlessおよびAurora DSQLをOrganizationsバックアップポリシーで保護する場合、タグベースの選択に依存
- または、メンバーアカウント内のすべてのリソースをバックアップする必要があった
- きめ細かいリソース選択ができず、不必要なバックアップコストが発生
- 組織規模での統一的なバックアップ戦略の実装が困難

### 業界動向

- クラウドコストの最適化がエンタープライズの最優先課題に
- 組織全体のデータ保護ポリシー統一への需要が高まる
- AWS Organizations機能の充実により、マルチアカウント管理がより効率化

---

## 主な機能

### 1. リソースタイプの直接指定

- **Amazon Redshift Serverless ネームスペース**
  - AWS Organizations バックアップポリシーで明示的に指定可能
  - 特定のネームスペースだけをターゲット化

- **Amazon Aurora DSQL クラスター**
  - 新しいリソースタイプとして追加
  - 分散SQLデータベースのバックアップ保護が容易に

### 2. きめ細かいバックアップ制御

- 特定のリソースを含める/除外する設定が可能
- タグ条件との組み合わせで更に柔軟な制御を実現
- メンバーアカウント全体での一括適用が可能

---

## 利用可能なリージョン

### 対応地域

- **AWS Commercial Regions**（商用リージョン全て）
- **AWS GovCloud Regions**（GovCloudリージョン全て）
- AWS Backupと各サービスが利用可能なリージョンでサポート

### 実装開始

1. AWS Organizations バックアップポリシーコンソールにアクセス
2. 新規または既存のバックアップポリシーでリソースタイプを選択
3. "Redshift Serverless Namespace" または "Aurora DSQL Cluster" を指定
4. ポリシーを対象のOU/メンバーアカウントに適用

---

## ユースケース

### ユースケース 1: マルチアカウント環境での統一バックアップ戦略

- 数十～数百のAWSアカウントを運用する大規模組織
- すべてのRedshift ServerlessおよびAurora DSQLリソースに対して統一的なバックアップポリシーを適用
- 結果: ポリシー運用の自動化、運用負荷の削減

### ユースケース 2: コスト最適化とコンプライアンス

- 不要なバックアップの削減により、ストレージコストを最適化
- RPO/RTOを満たす範囲でバックアップ頻度を調整
- 規制要件に基づくデータ保持ポリシーの自動適用

### ユースケース 3: 組織内の部門別バックアップ戦略

- 部門ごとにOrganizational Unit (OU) を分けて異なるバックアップポリシーを適用
- 本番環境と開発環境で異なるバックアップ設定が可能

---

## メリット

### 操作性の向上

- **タグ管理の簡素化**: タグベースに頼らず、リソースタイプで直接指定
- **ポリシー作成の容易性**: 複雑なタグ条件なしで明確なポリシー定義が可能
- **エラーリスク削減**: タグ付け漏れによるバックアップ漏洩を防止

### コスト効率

- **不要なバックアップの削減**: 必要なリソースのみをターゲット化
- **ストレージ最適化**: 精密なリソース選択でコストを削減
- **予測可能な費用**: ポリシー適用により、バックアップコストが可視化・最適化

### ガバナンス強化

- **一元的な制御**: 組織管理者がすべてのバックアップポリシーを一元管理
- **規制対応**: コンプライアンス要件に基づくポリシー統一
- **監査対応**: 組織レベルのバックアップ履歴追跡が容易

---

## まとめ

### この機能の重要性

- **簡潔性**: Redshift Serverless と Aurora DSQL をAWS Organizations バックアップポリシーで直接サポート
- **正確性**: タグ不要で、直接リソースタイプを指定可能な柔軟性
- **スケーラビリティ**: 数千のAWSアカウント環境でも管理負荷を軽減

### 次のステップ

1. AWS Organizations バックアップポリシーのドキュメントを確認
2. 既存のバックアップ戦略を見直し、新機能の活用を検討
3. パイロットプロジェクトで試験的に実装
4. 本番環境への段階的展開

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/04/backup-policies-aurora-dsql-redshift-serverless/
- **AWS Organizations バックアップポリシー ドキュメント**: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup_syntax.html
- **AWS Backup コンソール**: https://console.aws.amazon.com/backup
- **関連情報**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-backup-redshift-serverless-seven-regions/
- **Aurora DSQL バックアップ**: https://aws.amazon.com/about-aws/whats-new/2025/05/aws-backup-amazon-aurora-dsql/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**