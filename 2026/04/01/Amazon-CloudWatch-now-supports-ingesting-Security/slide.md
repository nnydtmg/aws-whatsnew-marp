---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch
Security Hub CSPM検出結果の取り込みに対応

**発表日: 2026年3月31日**

---

## 概要

### このアップデートの3つの主要な変更

- **CloudWatch Logs への統合**: Security Hub CSPM 検出結果を CloudWatch Logs に直接集約可能
- **Organization 全体の自動化**: CloudWatch enablement rules で組織全体のセキュリティ監視を標準化
- **標準フォーマット対応**: ASFF および OCSF 形式でセキュリティデータを取り込み

### セキュリティ態勢の向上

- AWS 環境全体のセキュリティ脅威をより迅速に特定・対応
- セキュリティ検出結果を一元的に分析・監視
- すべてのコマーシャルリージョンで利用可能

---

<!-- _class: section -->

# 背景・課題

なぜこの機能が必要だったのか

---

## 前提・背景

### セキュリティ監視の課題

- **分散したセキュリティ検出**: Security Hub の CSPM 検出結果が CloudWatch と独立して管理されていた
- **手動による組織化**: 複数アカウント環境での検出結果配信が手動設定が必要
- **統合分析の困難さ**: セキュリティデータが複数の場所に分散し、相関分析が複雑

### エンタープライズの要求

- セキュリティ検出結果の **一元化と自動化**
- 組織全体での **統一されたセキュリティ基準** の適用
- **迅速な脅威検出と対応** 能力の向上

### 関連動向

- AWS Security Hub CSPM の機能拡充
- CloudWatch の統合プラットフォーム化
- コンプライアンス管理の自動化ニーズ

---

## 主な機能と改善

### 1. CloudWatch Logs への直接統合

- **Security Hub CSPM 検出結果** を CloudWatch Logs に集約
- セキュリティ検出結果を CloudWatch 環境で一元管理
- 既存の CloudWatch ワークフローとの統合

### 2. 標準化されたデータ形式

- **AWS Security Finding Format (ASFF)**
- **Open Cybersecurity Schema Framework (OCSF)**
- 業界標準フォーマットでのセキュリティデータ取り込み

### 3. CloudWatch Logs Insights での分析

- 検出結果をクエリして高度な分析を実施
- メトリクスフィルターで監視ルール作成
- カスタムダッシュボード構築が可能

---

## 主な機能と改善（続き）

### 4. Organization 全体の自動化

- **CloudWatch enablement rules** を使用
- 組織全体または特定のアカウントに対して自動配信
- 本番環境アカウントへの自動設定が可能

### 5. 高度な分析

- **Amazon S3 Tables** との統合
- セキュリティデータの長期保存と大規模分析
- コンプライアンスレポート作成の自動化

### 6. スケーラブルな価格設定

- 段階的な料金体系
- 検出結果の配信量に応じた課金
- コスト最適化が可能

---

## 利用シナリオ

### シナリオ1: 組織全体のセキュリティ監視

本番環境アカウントに対して Security Hub 検出結果を CloudWatch Logs に自動送信

```
本社: CloudWatch enablement rule
     ↓
全本番環境アカウント: 自動配信
     ↓
CloudWatch Logs: 一元的な監視
```

### シナリオ2: セキュリティ脅威の迅速な検出

- 検出結果をリアルタイムで監視
- メトリクスフィルターでアラート設定
- CloudWatch アラームで自動対応トリガー

### シナリオ3: コンプライアンス管理

- セキュリティ検出結果を S3 に保存
- 監査ログとして長期保管
- 法的要件への対応を自動化

---

## 効果・メリット

### 🎯 セキュリティ体制の強化

- セキュリティ脅威をより **迅速に特定**
- 対応プロセスの **高速化**
- AWS 環境全体の **脅威可視性向上**

### 🔄 運用の自動化と標準化

- 組織全体での **統一されたセキュリティ監視**
- 手動作業の削減
- ヒューマンエラーの排除

### 📊 データ分析の高度化

- CloudWatch Logs Insights で **複雑な分析**
- S3 Tables との統合で **大規模データ処理**
- カスタムメトリクスの自由な定義

### 💰 コスト最適化

- スケーラブルな価格設定
- 必要な検出結果のみ配信
- 不要な監視の削減

---

## 実装上の注意点

### 必須要件

- AWS Security Hub が有効化されていること
- CloudWatch が有効化されていること
- IAM 権限の適切な設定

### 推奨構成

| 項目 | 推奨値 |
|-----|--------|
| **データ保持期間** | 90日以上 |
| **メトリクスフィルター** | 重要度別に設定 |
| **アラーム設定** | Critical/High レベル以上 |
| **S3 保存** | 監査目的で長期保管 |

### 段階的な展開

1. テスト環境での検証（1-2週間）
2. 非本番環境での試行運用（2-4週間）
3. 本番環境への段階的展開
4. 監視・最適化フェーズ

---

## まとめ

### Amazon CloudWatch の新しい位置づけ

- **統合セキュリティプラットフォーム** として進化
- Security Hub との深い統合
- 組織全体のセキュリティ管理を集約

### 主なメリット再確認

✅ セキュリティ検出結果の **一元化**
✅ 組織全体での **自動化と標準化**
✅ セキュリティ脅威への **迅速な対応**
✅ コンプライアンス要件への **自動対応**

### 次のステップ

1. 現在のセキュリティ監視体制を評価
2. CloudWatch enablement rules の設計
3. パイロット環境での試行
4. 本番環境への展開計画

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-securityhub-findings/
- **Security Hub ドキュメント**: https://docs.aws.amazon.com/securityhub/latest/userguide/
- **CloudWatch ドキュメント**: https://docs.aws.amazon.com/cloudwatch/
- **CloudWatch enablement rules**: https://docs.aws.amazon.com/cloudwatch/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**