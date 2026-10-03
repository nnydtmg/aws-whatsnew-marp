---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Aurora DSQLが部分インデックスをサポート、クエリ性能向上とコスト削減を実現

Amazon Aurora DSQL now supports partial indexes

**What's New** | 2026-10-02T17:30:00

---

## 概要

- Amazon Aurora DSQLが部分インデックスをサポートし、特定の行のみをインデックス化することでクエリ性能の向上とストレージコストの削減を実現いたします。
- 小さな作業セットと大きな履歴データを持つテーブルをご利用のお客様に適した機能でございます。

---

## 前提・背景

### 関連する最近の動向

- **Release notes for Aurora DSQL**
  [詳細](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/release-notes.html)

- **Amazon Aurora DSQL now supports partial indexes - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-dsql-partial-indexes)

- **Asynchronous indexes in Aurora DSQL**
  [詳細](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-wi...

---

## 変更内容・新機能

Amazon Aurora DSQLは部分インデックスを新たにサポートいたします。テーブルの特定のサブセットに対してインデックスを構築し、条件に合う行のみを保存いたします。CREATE INDEXにWHERE句を追加して作業セットのみをインデックス化できます。クエリパフォーマンスが向上し、インデックスのストレージコストが低減されます。この更新は小さな作業セットと大規模な履歴データを持つテーブルをご利用のお客様に適しております。対象となる行を絞り込むクエリを実行される方に有益でございます。Aurora DSQLはクエリのWHERE条件がインデックスの述語を包含することを証明できる場合に部分インデックスを使用します。部分インデックスはAurora DSQLが利用可能なすべてのAWSリージョンで利用できます。

---

## 効果・メリット

- Amazon Aurora DSQLは部分インデックスを新たにサポートいたします。
- テーブルの特定のサブセットに対してインデックスを構築し、条件に合う行のみを保存いたします。
- CREATE INDEXにWHERE句を追加して作業セットのみをインデックス化できます。
- クエリパフォーマンスが向上し、インデックスのストレージコストが低減されます。
- この更新は小さな作業セットと大規模な履歴データを持つテーブルをご利用のお客様に適しております。

---

## まとめ

- Amazon Aurora DSQL now supports partial indexes について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-dsql-partial-indexes/)

### 関連情報

- [Release notes for Aurora DSQL](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/release-notes.html)
- [Amazon Aurora DSQL now supports partial indexes - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-dsql-partial-indexes)
- [Asynchronous indexes in Aurora DSQL](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with-create-index-async.html)