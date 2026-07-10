---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Organizations で新規組織向けのセキュリティ制御がデフォルト適用に

AWS Organizations now applies account departure security controls by default for new organizations created via AWS Organizations console

**発表日: 2026年7月10日**

---

## 概要

### このアップデートの3つのポイント

- **自動適用**: 新規組織作成時にセキュリティ制御がデフォルトで有効化
- **メンバー保護**: メンバーアカウントの意図しない離脱・閉鎖を防止
- **即座の保護**: 初日からセキュリティ専門知識なしで強力なガバナンスを確立

---

## 前提・背景

### 企業が直面する課題

- **セキュリティリスク**: メンバーアカウントが意図しない離脱をする危険性
- **ガバナンスの複雑化**: 組織ポリシーを手動で設定・管理する負担
- **セキュリティ専門知識**: クラウドセキュリティ初心者には難しいポリシー設定

### AWSの対応方針

- Cloud security at AWS is the highest priority（AWSセキュリティ）
- セキュリティのデフォルト化により、ユーザー負担を削減
- 組織レベルの一元的なセキュリティ管理を実現

---

## 変更内容・新機能

### メイン機能：アカウント離脱セキュリティ制御

- **自動適用されるSCP**: サービスコントロールポリシー（SCP）が自動設定
  - メンバーアカウントの組織からの離脱を防止
  - アカウントの自己閉鎖を防止
  
### セキュリティデフォルトの特徴

- **軽量設計**: 正当な運用を妨げない最小限のポリシー
- **完全な制御**: ユーザーはいつでも設定を変更・無効化可能
- **段階的対応**: 組織成長に合わせてカスタマイズ可能

---

## 利用可能リージョン

### AWS リージョン対応

<div class="columns">
<div>

### 標準リージョン

- US East（N. Virginia）
- その他標準リージョン対応

</div>
<div>

### GovCloud

- AWS GovCloud（US-East）
- AWS GovCloud（US-West）

</div>
<div>

### China リージョン

- China（Beijing）
- China（Ningxia）

</div>
</div>

---

## 効果・メリット

### CloudOps管理者向け

- **初日からの保護**: 新規組織作成後すぐにセキュリティが有効
- **手作業の削減**: SCPの手動設定が不要
- **セキュリティ標準化**: 組織全体での統一されたポリシー適用

### 中央セキュリティチーム向け

- **一元管理**: 複数の新規組織を統一ポリシーで管理
- **コンプライアンス**: セキュリティ要件の自動充足
- **監査対応**: デフォルトポリシーにより監査トレイルが明確

### 新規組織向け

- **セキュリティ専門知識不要**: 初心者でも強力なガバナンスを確立
- **ベストプラクティス適用**: AWSが推奨するポリシーが自動適用
- **柔軟な拡張**: ビジネス成長に合わせたカスタマイズ可能

---

## ユースケース

### 1. AWS への大規模移行

- 複数の新規組織を一括作成する際に、すべての組織に統一セキュリティを適用
- 移行初期段階でのセキュリティ体制を自動化

### 2. スタートアップの急速な成長

- セキュリティ人員が限定的な新興企業が、最初からセキュリティ要件を満たす組織構造を構築

### 3. 子会社・グループ企業の独立

- 親企業から独立する際に、セキュリティポリシーを親企業の基準で初期設定

---

## まとめ

### このアップデートの主要な変化

- AWS Organizations の新規組織作成時に、セキュリティ制御がデフォルト適用される新時代へ
- セキュリティ専門知識がなくても、初日から強力なガバナンスを確立可能
- CloudOps管理者・セキュリティチームの負担を大幅に軽減

### 推奨される次のステップ

1. 現在の AWS Organizations の構成と既存ポリシーの確認
2. 新規組織作成時のセキュリティ制御の動作確認
3. 既存組織へのセキュリティ制御の適用検討

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-organizations-security-controls-new-orgs-console
- **AWS Organizations ドキュメント**: https://docs.aws.amazon.com/organizations/
- **AWS Organizations セキュリティ**: https://docs.aws.amazon.com/organizations/latest/userguide/security.html
- **AWS Security Blog**: https://aws.amazon.com/blogs/security/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**