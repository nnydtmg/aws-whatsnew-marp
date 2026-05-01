# Concurrency Scaling Support for auto-copy and zero-ETL

**カテゴリ:** What's New
**公開日:** 2026-05-01
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/concurrency-scaling-auto-copy-zero-ETL/](https://aws.amazon.com/about-aws/whats-new/2026/03/concurrency-scaling-auto-copy-zero-ETL/)

---

## 要約

Amazon Redshift は、auto-copy と zero-ETL に対する concurrency scaling サポートを一般提供開始いたしました。これにより、ピーク期間中でもパフォーマンスを損なうことなく、S3 からのデータ取り込みと運用データベースからのほぼリアルタイムのデータレプリケーションが高速化されます。本機能は、高容量で時間に敏感なデータ操作を行う組織に特に有用です。

## 詳細

Amazon Redshift は、auto-copy と zero-ETL に対する concurrency scaling サポートの一般提供を発表いたしました。この新機能は、Amazon S3 からのシームレスなデータ取り込みと、運用データベース、トランザクショナルデータベース、およびアプリケーションからのほぼリアルタイムのデータレプリケーションに、concurrency scaling の弾力性を組み合わせるものです。大容量で時間に敏感なデータ操作に対して、パフォーマンス向上の利点をもたらします。Auto-copy は S3 バケットを監視し、新しいデータファイルを自動的にロードいたします。Zero-ETL は運用データベースおよびトランザクショナルデータベースからのデータをほぼリアルタイムでレプリケートいたします。Concurrency scaling を有効にすると、読み取りおよび書き込みクエリの増加に対応するため、自動的にコンピュート容量が追加されます。ピーク期間中もパフォーマンスを損なうことなく、より高速なデータ取り込みが実現されます。この新機能は、Amazon Redshift が利用可能なすべての AWS 商用リージョンおよび AWS GovCloud (US) リージョンで利用可能です。Amazon Redshift Serverless および RA3 Provisioned データウェアハウスに対応しております。この機能は、データ取り込みワークフローを最適化するために即座に実装することができます。この更新は、高容量のデータ取り込みを行う組織や、ピーク時のパフォーマンス維持が重要な企業に適しております。