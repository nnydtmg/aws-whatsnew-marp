---
marp: true
theme: aws-whatsnew
paginate: true
---

# Concurrency Scaling Support for auto-copy and zero-ETL

**What's New** | 2026-05-01

---

## 概要

- Amazon Redshift は、auto-copy と zero-ETL に対する concurrency scaling サポートを一般提供開始いたしました。
- これにより、ピーク期間中でもパフォーマンスを損なうことなく、S3 からのデータ取り込みと運用データベースからのほぼリアルタイムのデータレプリケーションが高速化されます。
- 本機能は、高容量で時間に敏感なデータ操作を行う組織に特に有用です。

---

## 前提・背景

### 関連する最近の動向

- **Cluster versions for Amazon Redshift - AWS Documentation**
  Concurrency Scaling is now generally available for read and write operations on zero-ETL tables.

- **Concurrency scaling - Amazon Redshift - AWS Documentation**
  When you turn on concurrency scaling, Amazon Redshift automatically adds additional cluster capacity to process an increase in both read and write queries.

- **Amazon Redshift Concurrency Scaling**
  With the Concurrency Scaling feature, you can easily support thousands of concurrent users and concurrent queries, with consistently fast query performance.

---

## 変更内容・新機能

### Auto-copy と Zero-ETL への Concurrency Scaling 対応

- **Auto-copy**: S3 バケットを監視し、新しいデータファイルを自動的にロード
- **Zero-ETL**: 運用データベースおよびトランザクショナルデータベースからのデータをほぼリアルタイムでレプリケート
- **Concurrency Scaling**: 読み取りおよび書き込みクエリの増加に対応するため、自動的にコンピュート容量が追加

---

## 効果・メリット

- ピーク期間中もパフォーマンスを損なうことなく、より高速なデータ取り込みが実現
- S3 からのシームレスなデータ取り込みと、ほぼリアルタイムのデータレプリケーションを統合
- 大容量で時間に敏感なデータ操作に対して、パフォーマンス向上の利点
- 読み取り・書き込みクエリの増加に自動的に対応

---

## 対応範囲

### 利用可能なリージョン

- Amazon Redshift が利用可能なすべての AWS 商用リージョン
- AWS GovCloud (US) リージョン

### サポート対象

- Amazon Redshift Serverless
- RA3 Provisioned データウェアハウス

---

## まとめ

### 主なポイント

- Amazon Redshift の auto-copy と zero-ETL が concurrency scaling に対応
- ピーク時のデータ取り込みパフォーマンスが大幅に向上
- 高容量のデータ操作を行う組織に最適
- データ取り込みワークフローを即座に最適化可能

---

## 参考URL

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/03/concurrency-scaling-auto-copy-zero-ETL/
- **AWS ドキュメント - Cluster versions**: https://docs.aws.amazon.com/redshift/latest/mgmt/cluster-versions.html
- **AWS ドキュメント - Concurrency scaling**: https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html
- **AWS - Amazon Redshift Concurrency Scaling**: https://aws.amazon.com/redshift/features/concurrency-scaling/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**