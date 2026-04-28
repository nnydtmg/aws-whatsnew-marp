---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Cost Optimization Hub が CSV ダウンロードに対応

コンソールから直接エクスポート可能に

**発表日: 2026年4月28日**

---

## 概要

### CSV ダウンロード機能とは

- **ワンクリックエクスポート**: AWS Cost Optimization Hub のコンソールから直接ローカルマシンへ CSV ファイルをダウンロード
- **既存機能との相補**: 自動エクスポート機能（Data Export）を補完する手動エクスポート機能
- **即座に分析開始**: ダウンロード完了後、スプレッドシートアプリケーションで即座に分析可能

### 主な特徴

- フィルター、ソート設定、グループ化設定を反映したデータをエクスポート
- コンソールアクセス権不要で推奨事項を共有
- オフライン環境での作業が可能

---

## 前提・背景

### コスト最適化の課題

- AWS環境のコスト削減は継続的な課題
- チーム内でのコスト最適化情報の共有が重要
- スプレッドシートでの分析・可視化ニーズ

### Cost Optimization Hub の位置付け

- AWS のコスト最適化機能の中核サービス
- 複数アカウント（Payer/Linked Accounts）に対応
- ベンチマーク・目標設定・推奨事項の提供

### 従来のデータ出力課題

- AWS コンソールアクセス権の管理が複雑
- オンデマンドでのデータ取得ニーズ
- 既存の Data Export 機能は S3 自動出力のみ

---

## 変更内容・新機能

### CSV ダウンロード機能の詳細

#### 主要機能

- **直感的なUI**: コンソール内のワンクリックダウンロードボタン
- **スマートエクスポート**: 現在のコンソール表示設定を反映
  - フィルター条件
  - ソート順序
  - グループ化設定

#### エクスポートできるデータ

- コスト最適化の推奨事項（全項目）
- 推定節約額
- 優先度情報
- リソース情報

### 提供範囲

- **利用可能リージョン**: AWS Cost Optimization Hub が提供されているすべてのリージョン
- **提供開始日**: 2026年4月28日

---

## 効果・メリット

### 業務効率の向上

- **ステークホルダー共有**: AWS コンソールアクセス権がない関係者へもデータ共有が容易
- **即座に分析開始**: ローカルマシンで好みのツールを使用した分析が可能
- **オフライン対応**: インターネット接続なしでの推奨事項の確認・検討

### 運用の柔軟性

- **既存ツール連携**: Excel、Google Sheets などのスプレッドシートアプリケーションと連携
- **手動・自動の併用**: Data Export（自動）と CSV Download（手動）を使い分け
- **スケーラビリティ**: 大規模なコスト最適化プログラムに対応

### コスト削減への加速

- 推奨事項の迅速な把握と共有
- チーム全体でのコスト最適化意識の醸成
- 推奨事項の実装ペースの加速

---

## ユースケース

### 1. 経営層への報告資料作成

- CFO / CTO への定期報告
- コスト削減予想額の可視化
- 優先度付きリストの共有

### 2. FinOps チームでの分析

- スプレッドシートでの詳細分析
- 社内ツール・システムへのデータ取り込み
- カスタムレポート作成

### 3. マルチアカウント管理

- Payer Account でのグローバルコスト分析
- 各 Linked Account の推奨事項把握
- 部門別・プロジェクト別の分析

### 4. オフライン環境での検討

- データセンターなど制限環境での利用
- オフライン会議での推奨事項検討
- オフラインでの優先順位付け

---

## AWS Cost Optimization Hub の主な機能

| 機能 | 説明 |
|-----|------|
| **コスト分析** | 複数アカウントのコスト状況を一元管理 |
| **推奨事項** | 実装可能なコスト最適化機会を自動提示 |
| **Data Export** | 推奨事項を S3 に自動出力 |
| **CSV Download** | コンソールから直接ダウンロード（新機能） |

---

## まとめ

### 主なポイント

- **簡単**: ワンクリックで CSV をエクスポート
- **柔軟**: 手動・自動の出力方法を選択可能
- **広範囲**: すべてのリージョンで利用可能
- **実用的**: スプレッドシートでの詳細分析に最適

### 推奨される活用方法

1. 現在の Cost Optimization Hub の推奨事項を確認
2. 関心のある推奨事項をフィルタリング
3. CSV ダウンロードで詳細分析
4. チーム内で共有・検討
5. 実装計画の策定

### 次のステップ

- Cost Optimization Hub へのアクセス確認
- CSV ダウンロード機能の試行
- 組織内での FinOps プロセスへの組み込み

---

## 参考リソース

- **元記事**: [AWS Cost Optimization Hub now supports CSV download](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-cost-optimization-hub-csv-download/)
- **Cost Optimization Hub**: [AWS Cost Optimization Hub](https://aws.amazon.com/aws-cost-management/cost-optimization-hub/)
- **ドキュメント**: [Identifying opportunities with Cost Optimization Hub](https://docs.aws.amazon.com/cost-management/latest/userguide/cost-optimization-hub.html)
- **ブログ**: [Generate your cost optimization reports with Data Exports for Cost Optimization Hub](https://aws.amazon.com/blogs/aws-cloud-financial-management/generate-your-cost-optimization-reports-with-data-exports-for-cost-optimization-hub/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**