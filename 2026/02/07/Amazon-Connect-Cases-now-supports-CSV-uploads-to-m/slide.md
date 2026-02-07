---
marp: true
theme: default
paginate: true
---

# Amazon Connect Cases CSV アップロード機能

**What's New** | 2026-02-06

---

## 概要

- Amazon Connect Cases が **CSV ファイルアップロード機能** に対応
- フィールド間の関係を一括定義可能
- 複雑な設定が簡素化され、管理者の設定時間が大幅削減

---

## 前提・背景

### 課題
- Amazon Connect Cases でフィールドオプション間の関係を手動で定義するのは手間
- 複雑なフィールド関係の設定に時間がかかる
- 管理者のオンボーディング作業が負担

### 関連動向
- AWS では継続的にコンタクトセンター機能を拡張中
- ビジネスロジックの自動化・効率化が重点領域

---

## 変更内容・新機能

### CSV ファイルアップロード機能

#### 主な特徴
- **依存フィールドオプション** の一括定義が可能
- CSV ファイル形式で field option mappings を提供
- 従来の手動定義が不要に

#### 具体的な例
- 製品カテゴリ別に適用可能な欠陥タイプを自動マッピング
- 親フィールド値に基づいて子フィールドオプションを動的表示

---

## 効果・メリット

### 管理者向け
- ✅ 設定時間の大幅削減
- ✅ 手動エラーの軽減
- ✅ オンボーディング作業の効率化

### ビジネス向け
- ✅ より使いやすいケース管理システム
- ✅ データの一貫性確保
- ✅ 運用コスト削減

---

## ユースケース

### カスタマーサポート
```
問い合わせ種類（親フィールド）
  ├─ 製品問い合わせ
  │  └─ 欠陥タイプ: バグ、仕様変更要望
  └─ 請求問い合わせ
     └─ 欠陥タイプ: 請求エラー、割引確認
```

### チケット管理
- プロジェクト → タスクタイプ のマッピング
- 優先度 → SLA の自動割り当て

---

## 利用可能リージョン

Amazon Connect Cases は 10 のAWSリージョンで利用可能：

- **北米:** US East (N. Virginia), US West (Oregon), Canada (Central)
- **ヨーロッパ:** EU (Frankfurt), EU (London)
- **アジア太平洋:** Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo)
- **アフリカ:** Africa (Cape Town)

---

## まとめ

- 🎯 **Amazon Connect Cases** に CSV アップロード機能が追加
- 📊 依存フィールドオプションの一括設定が実現
- ⚡ 管理者業務の効率化で運用コストを削減
- 🌍 10 リージョンで利用可能

---

## 参考URL

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-connect-cases-csv-related-field-options)
- [Amazon Connect Release Notes](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-release-notes.html)
- [CSV upload for dependent field options](https://docs.aws.amazon.com/connect/latest/adminguide/case-field-dependent-csv-upload.html)
- [Amazon Connect Cases Documentation](https://docs.aws.amazon.com/connect/latest/adminguide/cases.html)
