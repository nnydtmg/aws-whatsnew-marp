---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Organizations
API応答で組織パスを直接提供

**発表日: 2026年3月31日**

---

## 概要

### 3つの主要な改善点

- **組織パスの直接提供**: DescribeAccountやListAccountsなどのAPI応答に組織パスを直接含める
- **複数API呼び出しの廃止**: 単一の呼び出しで完全なパス（例：o-{orgId}/r-{rootId}/ou-{ouId}/{accountId}）を取得
- **ネストされたOU構造への対応**: 複雑にネストされたOU構造を持つ大規模組織に対応

### 対応API

- DescribeAccount
- ListAccounts
- DescribeOrganizationalUnit

---

## 前提・背景

### これまでの課題

- **複数API呼び出しが必要**: アカウントとOU位置を理解するために複数回のAPI呼び出しが必須
- **パフォーマンス低下**: 不要なAPI呼び出しにより処理時間が増加
- **管理の複雑化**: 複雑にネストされたOU構造では管理負荷が増大

### 市場の動向

- 大規模エンタープライズのマルチアカウント管理の複雑化
- API効率化によるコスト削減の要求
- クラウドガバナンスの自動化ニーズの増加

---

## 主な機能と改善

### 1. 組織パスの直接取得

```
API応答に含まれる組織パスの形式
o-{orgId}/r-{rootId}/ou-{ouId}/{accountId}
```

- 組織ID（Organization ID）
- ルートID（Root ID）
- OU ID（複数レベルのネスト対応）
- アカウントID

### 2. 複数API呼び出しの削減

**従来方式**
- ListAccounts → DescribeAccount → ListOrganizationalUnitsForParent → ...

**新方式**
- ListAccounts + 組織パス情報を一度に取得

---

<!-- _class: small -->

## 効果・メリット

### 運用効率の向上

- **API呼び出し回数の削減**: 複数回の呼び出しが1回に集約
- **レイテンシの低減**: 単一呼び出しで完全なコンテキスト取得
- **運用オーバーヘッドの削減**: スクリプト・アプリケーション実装の簡素化

### 自動化の強化

- **サービスコントロールポリシー（SCP）の影響分析が効率化**: 組織階層全体の把握が容易
- **権限境界の評価**: より詳細な権限管理が可能に
- **アカウント移動の評価**: 複雑な組織階層全体での移動検討が実現

### AI・LLM統合

- **LLM活用ツール**: 正確なガイダンスのために完全な組織コンテキストを取得可能
- **自動化ツール開発**: より効果的なオートメーション構築が容易

---

## ユースケース

### 1. 複雑な組織階層の管理

- 複数レベルのOUを持つ大規模組織
- 各部門・チーム・プロジェクト毎のOU設計
- 1回のAPI呼び出しで全体構造を把握

### 2. セキュリティ・コンプライアンス

- SCPの影響範囲を迅速に分析
- 権限設定のレビューと最適化
- 監査ログの効率的な追跡

### 3. クラウド運用の自動化

- アカウントプロビジョニングの自動化
- リソース配置の最適化
- ガバナンスルールの自動適用

---

## 利用可能なリージョン

### サポート対象

- ✅ **すべての商用AWSリージョン**: 全世界のAWSリージョン
- ✅ **AWS GovCloud（US）**: 米国政府向けクラウド環境

### すぐに利用開始可能

- 追加の設定不要
- 既存のAWS Organizationsで自動適用

---

## まとめ

### AWS Organizations の進化

- API効率化により、複雑な組織階層管理が大幅に簡素化
- 単一のAPI呼び出しで完全な組織コンテキストを取得
- 運用オーバーヘッドを削減し、ガバナンスの強化に貢献

### 推奨される対応

1. 既存のAPI呼び出しパターンを見直し
2. 新しい組織パス機能の利用を検討
3. 自動化ツール・スクリプトの最適化を実施

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-organizations-paths-api-responses/
- **ListAccounts API**: https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html
- **AWS Organizations ドキュメント**: https://docs.aws.amazon.com/organizations/
- **AWS Organizations ガイド**: https://towardsthecloud.com/blog/aws-organizations

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**