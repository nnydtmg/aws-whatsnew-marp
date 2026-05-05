---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Logs Insights
ロググループのタグベースクエリに対応

**発表日: 2026年5月4日**

---

## 概要

### CloudWatch Logs Insightsの新機能

- **タグベースのクエリ対応**: ロググループ名に加えて、タグを使用したクエリが可能に
- **自動マッチング**: タグの追加・削除時にクエリが自動的に対応ロググループを反映
- **運用効率化**: 環境の成長に伴う運用オーバーヘッドを大幅に削減

---

<!-- _class: section -->

# 背景・課題

ログ管理の複雑化と運用負荷の増加

---

## 従来の課題

### ロググループ管理の課題

- **明示的な指定が必要**: クエリ実行時にロググループ名を明示的に指定する必要があり、手間がかかる
- **環境成長による負荷**: アプリケーション・マイクロサービスが増加するにつれて管理が複雑化
- **タグの活用ができない**: 既にロググループに設定されているタグがクエリ機能では利用できない

### タグの現状

- **Environment**: Production、Staging、Development など
- **Application**: PaymentService、UserService など
- **Team**: Platform、Analytics など

---

<!-- _class: section -->

# 新機能詳細

タグベースのクエリ機能

---

## 主な機能

### 1. タグを使用したクエリ方法

- **既存のクエリ条件**: ロググループ名、データソース、ファセット
- **新機能**: タグキーバリューペアを使用したクエリ
- **柔軟性**: 複数のタグを組み合わせた条件指定も可能

### 2. 自動マッチング機能

- **動的更新**: ロググループにタグを追加するとクエリ対象が自動的に拡張
- **タグ削除対応**: タグを削除したロググループは自動的にクエリ対象から除外
- **一貫性**: ロググループの作成・削除時も即座に反映

### 3. 利用可能範囲

- **対応リージョン**: すべての商用AWSリージョン
- **既存ロググループ**: 既に作成されているロググループに即座に適用可能

---

## 具体的な使用例

### シナリオ: マイクロサービスのログ分析

```
【従来の方法】
ロググループ明示: /app/payment-service, /app/user-service, /app/order-service
→ 新しいサービスが増えるたびにクエリを更新

【新しい方法】
タグベースクエリ: Environment=Production AND Application=*Service
→ タグを付与すれば自動的にクエリ対象に含まれる
```

---

<!-- _class: section -->

# メリット・効果

運用効率化と管理の簡素化

---

## ビジネス上の効果

### 1. 運用効率の向上

- **手作業の削減**: ロググループの追加・削除時に手動でクエリを更新する作業が不要
- **スケーラビリティ**: 数百、数千のロググループを効率的に管理
- **開発速度の向上**: 新機能のデプロイ時にログ分析の設定変更が最小化

### 2. コスト最適化

- **管理時間の削減**: 運用チームの工数削減
- **自動化促進**: IaC（インフラストラクチャアズコード）と組み合わせた全自動化が実現
- **エラー率低下**: 手動ミスによるクエリ設定の誤りが減少

### 3. セキュリティと可視性

- **タグベースのアクセス制御**: IAMポリシーとのシナジー
- **監査追跡の強化**: タグによる論理的グループ分けが可能
- **環境別分析**: Production と Staging を簡単に区分

---

## 技術的な効果

### 1. クエリの柔軟性向上

- ロググループ数に依存しない強力なフィルタリング
- 複数の分類軸（環境、アプリケーション、チーム）による組み合わせ検索
- 既存のSQL風クエリ言語との完全互換性

### 2. 自動化の容易化

- Lambda、EventBridge と組み合わせた自動トリガー実装
- CloudFormation / Terraform による IaC の整合性
- CI/CD パイプラインへの統合が简单化

---

<!-- _class: section -->

# ユースケース

実装パターンと活用シーン

---

## ユースケース1: マルチテナント環境での分析

### 課題
顧客ごとに複数のロググループを管理し、顧客別のログ分析が必要

### 解決
```
タグ: Customer=customer-a, Environment=Production
クエリ: fields @timestamp, @message | filter Customer="customer-a"
```
- 新規顧客追加時の自動対応
- 顧客ごとのダッシュボードを自動生成

---

## ユースケース2: マイクロサービスアーキテクチャの運用

### 課題
数十のマイクロサービスのログを効率的に監視・分析

### 解決
```
タグ: Application=payment-service, Team=backend
クエリ: fields @timestamp, @duration | filter @duration > 1000
```
- サービス横断的なパフォーマンス監視
- サービスデプロイ時の自動ログ統合

---

## ユースケース3: 開発環境と本番環境の切り替え

### 課題
環境の切り替わりに応じた柔軟なログ分析

### 解決
```
タグ: Environment=Staging
クエリ: fields @timestamp, @level | filter @level="ERROR"
```
- 環境別のアラート設定
- ステージング環境でのテスト実施時のみログ収集

---

<!-- _class: section -->

# 実装のポイント

導入時の注意点と活用方法

---

## タグ戦略の立案

### タグ設計のベストプラクティス

| タグキー | 例 | 用途 |
|---------|-----|------|
| Environment | Production, Staging, Development | 環境の区分 |
| Application | payment-service, user-service | サービス・アプリケーションの特定 |
| Team | backend, frontend, platform | チーム・組織の識別 |
| CostCenter | cc-001, cc-002 | コスト配分 |
| Compliance | pci, sox | コンプライアンス要件 |

### 命名規約の統一

- **キー**: キャメルケースまたはスネークケースで統一
- **値**: 小文字、ハイフン区切りで統一
- **例**: `Environment: production`, `Team: backend-team`

---

## クエリの実装例

### 基本的なタグクエリ

```
# 単一タグでのフィルタリング
fields @timestamp, @message | filter Environment="production"

# 複数タグの組み合わせ
fields @timestamp, @duration | filter Environment="production" AND Team="backend"

# OR条件での検索
fields @timestamp | filter Environment="production" OR Environment="staging"

# パターンマッチング
fields @timestamp | filter Application like "payment.*"
```

---

## 既存環境への適用

### 段階的な導入

1. **第1段階**: 新規ロググループからタグを付与開始
2. **第2段階**: 既存の主要ロググループにタグを遡及適用
3. **第3段階**: 全ロググループへの適用完了
4. **第4段階**: クエリおよび自動化の本格展開

### 自動化の実装

- CloudFormation で新しいロググループ作成時に自動タグ付与
- Lambda 関数で既存ロググループのタグを一括更新
- EventBridge で新規サービスデプロイ時にタグ付与

---

<!-- _class: section -->

# まとめ

CloudWatch Logs Insights のタグベースクエリ機能

---

## 主な成果

### 1. 機能面

- ✅ タグを使用した柔軟で強力なロググループクエリが実現
- ✅ 自動マッチング機能による動的な対応
- ✅ すべての商用リージョンで利用可能

### 2. 運用面

- ✅ 手作業の大幅削減
- ✅ スケーラビリティの向上
- ✅ 自動化の容易化

### 3. ビジネス面

- ✅ 運用コストの削減
- ✅ 開発速度の向上
- ✅ エラー率の低下

---

## 次のステップ

### 推奨される行動

1. **現状評価**: 既存のロググループ数とタグ付けの状況を把握
2. **タグ戦略の立案**: チーム内でタグの命名規約を統一
3. **パイロット導入**: テスト環境で新機能を試験
4. **本格展開**: 段階的に本番環境へ展開
5. **自動化の実装**: IaC を使用した自動タグ付与の構築

---

## 参考リソース

### AWS 公式ドキュメント

- **AWS What's New**: [Amazon CloudWatch Logs Insights supports querying by log group tags](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudwatch-logs-query-by-tags/)
- **CloudWatch Logs Insights ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html
- **CloudWatch Logs Insights クエリ構文**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html
- **ロググループタグ付けのベストプラクティス**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/tagging-log-groups.html

### 関連情報

- [Alarm data queries - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-data-queries.html)
- [CloudWatch Logs Insights の料金](https://aws.amazon.com/jp/cloudwatch/pricing/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**