---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon QuickSightがAmazon Athenのクロスアカウントアクセス機能をサポート

IAMロールチェーニングで複数のAWSアカウント間のデータ共有が可能に

**発表日: 2026年5月8日**

---

## 概要

### 新機能の主要ポイント

- **クロスアカウントアクセス**: Amazon QuickSightが異なるAWSアカウント内のAmazon Athenデータに直接アクセス可能に
- **IAMロールチェーニング**: セキュアなロール引き継ぎメカニズムでクレデンシャルを共有しない
- **細粒度なアクセス制御**: 複数のロール設定により、チーム間でのアクセス権限を柔軟に管理
- **コスト最適化**: Athenのクエリコストがデータ所在アカウントに課金される

---

## 前提・背景

### 市場の課題

- **データサイロ化**: 複数のAWSアカウント間でデータが分散し、統合分析が困難
- **セキュリティリスク**: クロスアカウントアクセスでのクレデンシャル共有による情報漏洩リスク
- **運用コスト**: アカウント間でのデータ複製による冗長性と管理コストの増加

### Amazon Athenの進化

- 分析基盤としてのニーズの高まり
- エンタープライズ環境での複数アカウント構成の一般化
- AWS GLUEデータカタログとの統合による統一的なメタデータ管理

---

## 主な機能と改善

### 1. IAMロールチェーニングメカニズム

- **Publisher Account** (QuickSight): RunAsRoleを管理
- **Consumer Account** (Athen): ConsumerAccountRoleArnを指定
- QuickSightが段階的にロールを引き受けてクエリを実行
- 長期クレデンシャルの共有なしでセキュアにアクセス

### 2. 複数ロール設定

- 単一アカウント内のチーム間での細粒度なアクセス制御
- 異なるロール設定による柔軟な権限管理
- 部門・チーム単位でのデータアクセス制限が可能

---

## 利用方法

### セットアップ手順

```
1. QuickSightアカウント内でRunAsRoleを構成
2. Athenが存在するアカウント内でConsumerAccountRoleArnを指定
3. Athenデータソースを新規作成
4. ロールチェーニング経由でクエリ実行
```

### コスト配分

- Athenのクエリコストは**データ所在アカウント**に課金
- アカウント間でのコスト追跡が容易に
- チャージバック・コスト配分モデルの実装が簡素化

---

## 効果・メリット

### セキュリティ面

- ✅ **クレデンシャル非共有**: IAMロールチェーニングによるセキュアなアクセス
- ✅ **監査追跡**: 各操作をIAM CloudTrailで記録可能
- ✅ **最小権限の原則**: 必要最小限の権限設定が実現

### 運用面

- ✅ **一元管理**: QuickSightから複数アカウントのAthenデータに一括アクセス
- ✅ **スケーラビリティ**: アカウント数の増加に柔軟に対応
- ✅ **コスト可視化**: 利用部門別のコスト追跡が容易

---

## ユースケース

### ケース1: 複数事業部ごとのアカウント分離

```
本社QuickSight    → 営業部Athen
                 → マーケティング部Athen
                 → 企画部Athen
```

統一されたダッシュボードで各部門データを可視化

### ケース2: 開発・本番環境の分離

```
本番QuickSight    → 本番Athen
開発QuickSight    → 開発Athen
```

環境間でのデータアクセスを厳密に分離

---

## まとめ

### このアップデートの意義

- Amazon QuickSightが、Amazon Athenのクロスアカウントアクセス機能をサポート
- IAMロールチェーニングでセキュアかつ柔軟なアクセス制御を実現
- マルチアカウント構成での分析基盤の統一化が加速

### 推奨される次のステップ

1. **現在のアーキテクチャ評価**: 自社のアカウント構成を確認
2. **パイロットプロジェクト実施**: 小規模での動作確認
3. **本番環境への段階的展開**: 既存ダッシュボードの移行計画
4. **コスト配分ルール整備**: チャージバック体制の構築

---

## 対応リージョン・料金

### 利用可能なリージョン

- Amazon QuickSightがサポートするすべてのリージョンで利用可能
- 追加の料金は不要（QuickSightとAthenの既存料金で提供）

### 必要な権限

- QuickSight Administrator権限
- 各アカウントのIAM権限設定権限
- Athen管理権限

---

## 参考リソース

### 公式ドキュメント

- [AWS What's New: Amazon QuickSight supports cross-account Athena access](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-quick-athena/)
- [From siloed data to unified insights: Cross-account Athena Access](https://aws.amazon.com/blogs/machine-learning/from-siloed-data-to-unified-insights-cross-account-athena-access-for-amazon-quick/)
- [Use Amazon Athena and Amazon QuickSight in a cross-account environment](https://aws.amazon.com/blogs/big-data/use-amazon-athena-and-amazon-quicksight-in-a-cross-account-environment/)

### 関連サービス

- Amazon QuickSight
- Amazon Athena
- AWS Glue Data Catalog
- AWS IAM

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**