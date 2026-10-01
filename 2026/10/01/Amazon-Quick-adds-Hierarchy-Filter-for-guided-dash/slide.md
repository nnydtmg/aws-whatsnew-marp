---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon QuickがHierarchy Filterを追加、ダッシュボードのドリルダウンが容易に

Amazon Quick adds Hierarchy Filter for guided dashboard drill-down

**What's New** | 2026-09-30T15:00:00

---

## 概要

- Amazon Quickに階層フィルター（Hierarchy Filter）が追加され、ダッシュボードのドリルダウンが容易になりました。
- 読者が関連する次元（Region、Country、Cityなど）を単一のコントロールでドリルスルーできるようになり、複数の積み上げフィルターを置き換えてダッシュボードの乱雑さを減らし、少ないクリックでデータを案内します。
- 最大5階層までの次元を広い順から詳細な順に配置でき、選択するごとに次のレベルが絞り込まれ、親チェーンが自動選択されます。
- 地...

---

## 前提・背景

### 関連する最近の動向

- **Simplify dashboard drill-down with the Amazon Quick Sight hierarchy filter**
  [詳細](https://aws.amazon.com/blogs/machine-learning/simplify-dashboard-drill-down-with-the-amazon-quick-sight-hierarchy-filter)

- **Hierarchy filters - Amazon Quick**
  [詳細](https://docs.aws.amazon.com/quick/latest/userguide/hierarchy-filter.html)

- **Amazon Quick adds Hierarchy Filter for guided das...

---

## 変更内容・新機能

Amazon Quickに階層フィルター（Hierarchy Filter）が追加されました。この機能は、読者がRegion、Country、Cityなどの関連する次元をドリルスルーできる単一のコントロールを提供します。複数の積み上げフィルターを置き換え、ダッシュボードの乱雑さを減らし、少ないクリックでデータを案内します。

主な特徴:
- 最大5階層までの次元を単一コントロールに集約（例: Region → Subregion → Country → City → Town）
- 読者は1つのドロップダウンを開き、各レベルを順に展開。選択するごとに次のレベルが絞り込まれ、親チェーンが自動選択される
- Mix-and-match選択: 例えば国全体（日本）と単一の都市（ニューヨーク）を同じコントロールで組み合わせて選択可能
- 地理的次元に限定されず、Product Category → Product などの親子関係がある次元で利用可能
- 作成者はフィルターを追加し、タイプをHierarchy filterに設定し、フィールドを親から子の順に並べるだけで作成可能

---

## ユースケース

主な特徴:
- 最大5階層までの次元を単一コントロールに集約（例: Region → Subregion → Country → City → Town）
- 読者は1つのドロップダウンを開き、各レベルを順に展開。選択するごとに次のレベルが絞り込まれ、親チェーンが自動選択される
- Mix-and-match選択: 例えば国全体（日本）と単一の都市（ニューヨーク）を同じコントロールで組み合わせて選択可能
- 地理的次元に限定されず、Product Category → Product などの親子関係がある次元で利用可能
- 作成者はフィルターを追加し、タイプをHierarchy filterに

---

## まとめ

- Amazon Quick adds Hierarchy Filter for guided dashboard drill-down について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/quick-hierarchy-filter)

### 関連情報

- [Simplify dashboard drill-down with the Amazon Quick Sight hierarchy filter](https://aws.amazon.com/blogs/machine-learning/simplify-dashboard-drill-down-with-the-amazon-quick-sight-hierarchy-filter)
- [Hierarchy filters - Amazon Quick](https://docs.aws.amazon.com/quick/latest/userguide/hierarchy-filter.html)
- [Amazon Quick adds Hierarchy Filter for guided dashboard drill-down](https://aws.amazon.com/about-aws/whats-new/2026/09/quick-hierarchy-filter)