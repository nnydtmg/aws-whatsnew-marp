---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Logs
同時クエリ数とAPI制限の大幅引き上げ

**発表日: 2026年3月9日**

---

## 概要

### CloudWatch Logs の大幅な制限引き上げ

- **同時クエリ数**: 30 → **100** に増加（3倍以上）
- **StartQuery API**: 毎秒 **10 呼び出し**（アカウント/リージョン単位）
- **GetQueryResults API**: 毎秒 **10 呼び出し**（アカウント/リージョン単位）
- **対応範囲**: 30以上のリージョンで利用可能

---

## 前提・背景

### 従来の課題

- CloudWatch Logs Insightsを複数ユーザーが同時利用する際の制限
- 30 の同時クエリ制限により、スロットリング発生
- ダッシュボード構築時のボトルネック
- APIベースのアプリケーション統合での制約

### 市場背景

- ログ分析・監視の需要増加
- マルチテナント・分散環境の普及
- リアルタイム分析への期待の高まり
- 自動化・APIドリブン運用の拡大

---

## 主な機能と改善

### 1. クエリ同時実行数の拡大

- **従来**: 30 個の同時クエリ
- **新規**: 100 個の同時クエリ
- **効果**: より多くのユーザーが同時にダッシュボード、分析を実行可能

### 2. API 呼び出し制限の引き上げ

- **StartQuery API**: 毎秒 10 呼び出し
- **GetQueryResults API**: 毎秒 10 呼び出し
- **スコープ**: アカウント/リージョン単位
- **効果**: スロットリングなしでアプリケーション統合が可能

---

## パフォーマンス・影響

### 改善前後の比較

| 項目 | 従来 | 新規 | 改善率 |
|------|------|------|--------|
| 同時クエリ数 | 30 | 100 | +233% |
| StartQuery API | - | 10/秒 | 新設 |
| GetQueryResults API | - | 10/秒 | 新設 |

### ユースケース別の活用

- **ダッシュボード**: 複数ユーザーの同時アクセス対応
- **自動化**: API統合アプリケーションのスケーリング
- **監視**: マルチテナント環境での並行分析

---

## 効果・メリット

### 運用面でのメリット

- **スロットリング削減**: API呼び出しのスロットリングが大幅削減
- **リアルタイム性向上**: 複数ユーザーの分析実行時間の短縮
- **スケーラビリティ**: 組織規模の拡大に対応
- **開発効率化**: APIドリブン開発の自由度向上

### ビジネス面でのメリット

- **コスト効率**: 既存インフラで対応、追加コスト削減
- **生産性向上**: データ分析者の並行作業が効率化
- **インサイト取得の高速化**: スロットリング回避で即座の分析実行

---

## 利用対象

### このアップデートが適している対象者

- **複数ユーザーが CloudWatch Logs を同時利用**: 組織内でダッシュボードを共有
- **Logs Insights QL 活用**: クエリ言語による分析・調査
- **API ドリブン統合**: StartQuery/GetQueryResults を呼び出すアプリケーション運用
- **大規模データ分析**: ダッシュボード、アラート、自動化スクリプト

### 推奨される構成

- エンタープライズ規模の運用組織
- SaaS プロバイダー（ログ集約・分析機能提供）
- DevOps チーム（複数プロジェクト管理）
- セキュリティ・監視チーム

---

## 対応リージョン

### グローバル対応

30以上のリージョンで利用可能

**北米**: US East (N. Virginia, Ohio), US West (N. California, Oregon), Canada (Central, Calgary)

**南米**: South America (São Paulo)

**ヨーロッパ**: Europe (Frankfurt, Ireland, London, Paris, Stockholm, Milan, Zurich, Spain)

**アフリカ・中東**: Africa (Cape Town), Middle East (Tel Aviv)

**アジア太平洋**: Asia Pacific (Mumbai, Hyderabad, Singapore, Sydney, Melbourne, Tokyo, Osaka, Seoul, Hong Kong, Jakarta, Bangkok, Malaysia, Auckland, Taipei)

---

## まとめ

### CloudWatch Logs の進化

- **同時クエリ数 3倍以上**: 100 個への引き上げ
- **API 呼び出し制限 10/秒**: アプリケーション統合のボトルネック解消
- **30+ リージョン対応**: グローバル利用環境の整備
- **スロットリング軽減**: より円滑な運用と分析が実現

### 次のステップ

1. **現在の利用状況確認**: 同時クエリ数、API呼び出し頻度の把握
2. **ダッシュボード拡張**: 複数ユーザー同時アクセスの活用
3. **自動化の検討**: StartQuery API 統合アプリケーション開発
4. **パフォーマンス測定**: 改善効果の定量化

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-logs-increased-limits/
- **CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- **API リファレンス (StartQuery)**: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
- **エンドポイント・クォータ**: https://docs.aws.amazon.com/general/latest/gr/cwl_region.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**