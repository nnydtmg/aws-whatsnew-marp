---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Logs のインテリジェント・ストレージ・ティアリング機能

ログデータを3層に自動分類して低コスト化

**発表日: 2026年7月15日**

---

## 概要

### 3つの主要な特徴

- **自動ティアリング**: ログデータを3つの層に自動的に分類
- **運用負荷軽減**: アクセスパターンに基づいた自動管理で手動作業不要
- **低コスト化**: 長期保存でストレージコストを大幅削減

### 対象ストレージ層

- **Standard**: 頻繁にアクセスされるログ
- **Infrequent Access**: 30日間アクセスなし
- **Archive Instant Access**: 90日間アクセスなし

---

## 前提・背景

### 従来の課題

- ログストレージ管理の複雑化
- 長期保存にかかる高いコスト
- 複数ストレージソリューション管理のオーバーヘッド
- 古いログへのアクセス速度とコストのトレードオフ

### 市場の動向

- クラウドログ量の増加傾向
- ストレージコスト最適化の重要性向上
- AWS S3 Intelligent Tieringの成功事例（顧客総費用削減60%以上）

---

## インテリジェント・ストレージ・ティアリング機能

### ティアリングのロジック

| ストレージ層 | アクセス頻度 | 移行条件 |
|-----------|----------|--------|
| Standard | 頻繁 | 初期状態 |
| Infrequent Access | 低頻度 | 30日間アクセスなし |
| Archive Instant Access | 稀 | 90日間アクセスなし |

### 自動昇格機能

- 低コスト層のデータにアクセス時
- 自動的にStandard層に昇格
- 30日間その状態が保持される

---

## ランタイムと有効化方法

### 対応リージョン

- すべてのAWSコマーシャルリージョンで利用可能
- ※ Middle East（Bahrain）と Middle East（UAE）を除く

### 有効化方法

- **AWS Management Console**: 設定画面から有効化
- **AWS CLI**: `put-storage-tier-policy` コマンド
- **AWS SDK**: プログラマティック有効化

### 必要な権限

```
- logs:PutStorageTierPolicy
- logs:GetStorageTierPolicy
```

---

## 主な効果・メリット

### コスト最適化

- **運用コスト削減**: 複数ストレージ管理の不要化
- **ストレージコスト削減**: 低コスト層への自動移行
- **ライセンス管理簡素化**: 単一ツール化による管理効率化

### 運用効率

- **MTTR短縮**: 単一ツールでのログ検索・分析
- **運用負荷軽減**: 手動ライフサイクル管理の不要化
- **パフォーマンス維持**: アクセス時の自動昇格で速度低下なし

### ビジネス価値

- **コンプライアンス対応**: 長期ログ保存の容易化
- **セキュリティ**: 一元管理による可視性向上
- **スケーラビリティ**: 大容量ログの低コスト保存

---

## ユースケース

### 適用対象

- **高容量ログ環境**: 大規模アプリケーションのログ
- **長期保存要件**: 監査・コンプライアンス対応
- **複数層管理**: 既存複数ストレージ統合

### 最適な適用例

1. **マイクロサービスアーキテクチャ**: 各サービスのログを一元管理
2. **IoTデバイスログ**: 時系列で減少するアクセス確度
3. **セキュリティログ**: 古いイベントは参照少なくコスト最適化

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-intelligent-tiering/
- **CloudWatch Logs Intelligent Tiering**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/cwl_intelligent_tier.html
- **Amazon CloudWatch Logs 料金**: https://aws.amazon.com/cloudwatch/pricing/

### 関連情報

- **S3 Intelligent Tiering Guide**: ストレージティアリングの基本概念
- **AWS FinOps**: クラウドコスト最適化の実践

---

## まとめ

### Amazon CloudWatch Logs Intelligent Tiering の3つのポイント

1. **自動管理**: アクセスパターンに基づく3層への自動分類
2. **コスト削減**: 手動管理不要で運用・ストレージコストを削減
3. **シンプル運用**: 単一ツールですべてのログを管理

### 次のステップ

- 現在のCloudWatch Logs使用量を確認
- Intelligent Tiering有効化による削減コストを試算
- パイロット環境で検証後、本番展開

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**