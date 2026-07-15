# Amazon CloudWatch Logs のインテリジェント・ストレージ・ティアリング機能

Amazon CloudWatch Logs announces intelligent tiering for storage

**カテゴリ:** What's New
**公開日:** 2026-07-15
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-intelligent-tiering/)

---

## 要約

Amazon CloudWatch Logsのインテリジェント・ストレージ・ティアリング機能により、ログデータがアクセスパターンに基づいて3つの層に自動分類され、運用負荷を軽減しながら低コストでの長期保存が可能になりました。この機能は、高容量ログの長期保存と一元管理による効率化を求めるお客様に特に有益です。

---

## このアップデートで何が変わったか

- Amazon CloudWatch Logs に**インテリジェント・ストレージ・ティアリング機能**が新たに実装されました
- ログデータを3つのストレージ層に**自動分類**する機能
- すべてのAWSコマーシャルリージョン（Bahrain、UAEを除く）で**利用可能**

---

## 詳細

### ストレージ層

**3つの自動ティアリング層:**

1. **Standard層**
   - 頻繁にアクセスされるログ
   - 初期状態のストレージ層

2. **Infrequent Access層**
   - 30日間アクセスがないデータは自動移行
   - 低コストのストレージ

3. **Archive Instant Access層**
   - 90日間アクセスがないデータは自動移行
   - 最低コストのストレージ

### 自動昇格機能

- 低コスト層のデータにアクセスした場合、自動的にStandard層に昇格
- 昇格後、30日間その状態が保持される
- 再度アクセスされれば、タイマーはリセット

### 有効化方法

- **AWS Management Console**: 設定画面から有効化
- **AWS CLI**: `put-storage-tier-policy` コマンドで有効化
- **AWS SDK**: プログラマティック有効化

### 必要な権限

```
- logs:PutStorageTierPolicy
- logs:GetStorageTierPolicy
```

### 対応リージョン

- Middle East（Bahrain）とMiddle East（UAE）を除く、すべてのAWSコマーシャルリージョンで利用可能

---

## 効果・メリット

### コスト面でのメリット

- **ストレージコスト削減**: 自動的に低コスト層へ移行することで大幅削減
- **運用コスト削減**: 複数ストレージソリューション管理の不要化
- **手動管理の排除**: ライフサイクルルール管理の自動化

### 運用面でのメリット

- **運用負荷軽減**: アクセスパターンに基づいた自動管理
- **MTTR短縮**: 単一のCloudWatch Logsツールですべてのログを分析・監視
- **スケーラビリティ向上**: 大容量ログの容易な長期保存
- **パフォーマンス維持**: アクセス時の自動昇格により速度低下なし

### ビジネス価値

- **コンプライアンス対応**: 長期ログ保存の容易化
- **セキュリティ向上**: 一元管理による可視性向上
- **監査対応**: すべてのログをCloudWatch内で統一管理

---

## ユースケース

### 適用対象

- 高容量の詳細ログを長期間低コストで保存する必要があるお客様
- ログデータの長期保存と運用効率化を同時に実現したいお客様
- 複数のストレージソリューション管理の運用負荷を軽減したいお客様

### 具体的な適用例

1. **マイクロサービスアーキテクチャ**
   - 各サービスのログを一元管理
   - 自動的にコスト最適化

2. **IoTデバイスログ**
   - 時系列でアクセス確度が低下するデータに最適
   - 古いデータの低コスト保存

3. **セキュリティログ・監査ログ**
   - 古いイベントログへのアクセス頻度が低い
   - コンプライアンス要件での長期保存に対応

---

## 関連情報

### AWS Intelligent Tiering のエコシステム

- AWS S3 Intelligent Tiering との相似性
- S3では顧客総費用が削減60%以上のケースも（2026年実績）
- CloudWatch Logs でも同様の効果が期待される

### 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-cloudwatch-intelligent-tiering/
- **CloudWatch Logs Intelligent Tiering**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/cwl_intelligent_tier.html
- **Amazon CloudWatch Logs 料金**: https://aws.amazon.com/cloudwatch/pricing/
- **AWS FinOps**: クラウドコスト最適化の実践

---

## 次のステップ

1. 現在のCloudWatch Logs使用量と保存期間を確認
2. Intelligent Tiering有効化による削減コストを試算
3. 検証環境でのパイロット実装
4. 本番環境への段階的展開

---

**最終更新: 2026年7月15日**