# Amazon ElastiCache Serverlessがベクトル・全文・ハイブリッド検索と集計をサポート

Amazon ElastiCache Serverless now supports vector, full-text and hybrid searches plus aggregations

**カテゴリ:** What's New
**公開日:** 2026-11-10T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-elasticache-serverless-search-aggregations/)

このページでは、AWS What's Newで発表された「Amazon ElastiCache Serverless now supports vector, full-text and hybrid searches plus aggregations」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon ElastiCache Serverless for Valkeyは、ベクトル検索・全文検索・ハイブリッド検索および集計を新たにサポートします。マイクロ秒単位の低遅延でベクトル検索は最大99%のリコールを達成し、更新は書き込み完了直後から1日に最大十億件のクエリを処理可能です。予測不能なトラフィックを持つ低遅延アプリケーションや、検索を迅速に始めたいチームに適しています。

## このアップデートで何が変わったか

Amazon ElastiCache Serverless for Valkeyが、ベクトル検索、全文検索、ハイブリッド検索、およびサーバー側集計をサポートしました。ライブデータを検索するアプリケーションは、遅延とリコールのトレードオフや、更新が検索可能になるまでの遅れという課題を抱えていました。本機能により、マイクロ秒単位の低遅延でベクトル検索は最大99%のリコールを実現し、1日あたり最大十億件のクエリを処理できます。書き込み完了直後（マイクロ秒単位）に更新が検索可能になります。複数の検索タイプを単一クエリで組み合わせ、リコールを調整し、サーバー側集計で結果を分析できます。開発者はエージェント・セッション・タスクごとに独自のデータストアを秒単位で用意でき、パブリックエンドポイントでネットワーク設定なしに接続でき、使用分のみ課金されます。商品発見、レコメンデーション、RAGにも適しています。ElastiCache version 9 for Valkeyで、すべての商用AWSリージョン、AWS GovCloud (US)、AWS European Sovereign Cloudで利用可

## 対象ユーザー

Amazon ElastiCache Serverless for Valkeyが、ベクトル検索、全文検索、ハイブリッド検索、およびサーバー側集計をサポートしました。ライブデータを検索するアプリケーションは、遅延とリコールのトレードオフや、更新が検索可能になるまでの遅れという課題を抱えていました。本機能により、マイクロ秒単位の低遅延でベクトル検索は最大99%のリコールを実現し、1日あたり最大十億件のクエリを処理できます。書き込み完了直後（マイクロ秒単位）に更新が検索可能になります。複数の検索タイプを単一クエリで組み合わせ、リコールを調整し、サーバー側集計で結果を分析できます。開発者はエージェン

## 詳細

Amazon ElastiCache Serverless for Valkeyが、ベクトル検索、全文検索、ハイブリッド検索、およびサーバー側集計をサポートしました。ライブデータを検索するアプリケーションは、遅延とリコールのトレードオフや、更新が検索可能になるまでの遅れという課題を抱えていました。本機能により、マイクロ秒単位の低遅延でベクトル検索は最大99%のリコールを実現し、1日あたり最大十億件のクエリを処理できます。書き込み完了直後（マイクロ秒単位）に更新が検索可能になります。複数の検索タイプを単一クエリで組み合わせ、リコールを調整し、サーバー側集計で結果を分析できます。開発者はエージェント・セッション・タスクごとに独自のデータストアを秒単位で用意でき、パブリックエンドポイントでネットワーク設定なしに接続でき、使用分のみ課金されます。商品発見、レコメンデーション、RAGにも適しています。ElastiCache version 9 for Valkeyで、すべての商用AWSリージョン、AWS GovCloud (US)、AWS European Sovereign Cloudで利用可能です。ValkeyはRedisの最も容許的なオープンソース替わりで、ElastiCacheの推奨エンジンです。AWS Management Console、AWS SDK、AWS CLIで新規サーバレスキャッシュの作成または既存キャッシュのValkey 9へのアップグレードが可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-elasticache-serverless-search-aggregations/)