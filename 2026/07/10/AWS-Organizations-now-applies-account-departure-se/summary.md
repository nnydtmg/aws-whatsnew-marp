# AWS Organizations で新規組織向けのセキュリティ制御がデフォルト適用に

AWS Organizations now applies account departure security controls by default for new organizations created via AWS Organizations console

**カテゴリ:** What's New
**公開日:** 2026-07-10T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-organizations-security-controls-new-orgs-console)

このページでは、AWS What's Newで発表された「AWS Organizations now applies account departure security controls by default for new organizations created via AWS Organizations console」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Organizationsは、新規組織作成時にデフォルトでセキュリティ制御を自動適用し、メンバーアカウントの意図しない離脱から保護する機能を提供するようになりました。このアップデートは、セキュリティ専門知識がなくても強力なガバナンスを確立したいCloudOps管理者と中央セキュリティチームに特に有益です。

## このアップデートで何が変わったか

### 主な変更点

1. **セキュリティ制御の自動適用**
   - AWS Organizations コンソール経由で新規作成された組織に、デフォルトでアカウント離脱セキュリティ制御が自動的に適用される
   - サービスコントロールポリシー（SCP）が自動的に設定される

2. **メンバーアカウント保護**
   - メンバーアカウントが組織から離脱することを防止
   - アカウントの自己閉鎖を防止

3. **軽量なセキュリティデフォルト**
   - 正当な運用を妨げない最小限のポリシーで設計
   - ユーザーは完全な制御を維持し、いつでも設定を変更・無効化可能

## 対象ユーザー

- **CloudOps管理者**: 新規組織作成時に即座にセキュリティ保護を得られる
- **中央セキュリティチーム**: 複数の新規組織を統一ポリシーで一元管理できる
- **セキュリティ初心者**: 専門知識がなくても強力なガバナンスパターンを確立できる
- **AWS へ移行中の企業**: 移行初期段階でのセキュリティ体制を自動化できる

## 利用可能リージョン

- US East（N. Virginia）
- AWS GovCloud（US-East）
- AWS GovCloud（US-West）
- China（Beijing）
- China（Ningxia）

## このアップデートの効果・メリット

### 即座のセキュリティ保護
- 初日から新しい組織に対してセキュリティ制御が有効
- SCPの手動設定が不要で運用負荷を削減

### 一元的なガバナンス
- 複数の新規組織に対して統一されたセキュリティポリシーを適用
- コンプライアンス要件の自動充足

### セキュリティベストプラクティスの標準化
- AWSが推奨するセキュリティパターンを自動適用
- ビジネス成長に合わせたカスタマイズも可能

### 運用コストの削減
- セキュリティ専門知識がなくても強力な組織体制を構築
- セキュリティ設定のデフォルト化により手作業を削減

## ユースケース

### 1. AWS への大規模移行シナリオ
複数の新規組織を一括作成する際に、すべての組織に統一セキュリティを自動適用。移行初期段階でのセキュリティ体制を効率化

### 2. スタートアップの急速な成長
セキュリティ人員が限定的な新興企業が、最初からセキュリティ要件を満たす組織構造を構築可能

### 3. 子会社・グループ企業の独立
親企業から独立する際に、セキュリティポリシーを親企業の基準で初期設定できる

### 4. 新しいプロジェクトの立ち上げ
新規プロジェクト用の独立した組織を立ち上げる際に、自動的にセキュリティ体制が整備される

## 詳細情報

### セキュリティ制御の内容

- AWS Organizationsコンソール経由で新規に作成された組織に対してのみ自動適用
- アカウント離脱セキュリティ制御が含まれる
- API 経由で作成された組織には影響しない

### ユーザーの制御

- デフォルト設定は変更可能
- セキュリティ制御はいつでも無効化できる
- 段階的なカスタマイズが可能

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-organizations-security-controls-new-orgs-console)
- [AWS Organizations ドキュメント](https://docs.aws.amazon.com/organizations/)
- [AWS Organizations セキュリティ](https://docs.aws.amazon.com/organizations/latest/userguide/security.html)
- [AWS Security Blog](https://aws.amazon.com/blogs/security/)
