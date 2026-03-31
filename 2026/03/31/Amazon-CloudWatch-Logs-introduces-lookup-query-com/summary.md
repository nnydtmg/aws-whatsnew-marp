# Amazon CloudWatch Logs introduces lookup query command

**カテゴリ:** What's New
**公開日:** 2026-03-31
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-lookup-query-command/](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-lookup-query-command/)

---

## 要約

Amazon CloudWatch Logs Insightsの新しいlookupコマンドにより、ログクエリの結果をリファレンステーブルのデータで充実させることができるようになりました。このコマンドは、開発者、DevOps エンジニア、SREが複雑な分散システムで作業する際に、GUIDs、IPアドレス、内部リソースIDなどの不透明な識別子を意味のある値に変換し、事前処理パイプラインなしでログ分析をより高速で直感的にすることができます。

## 詳細

Amazon CloudWatch Logs Insightsに新しいlookupコマンドが導入されました。このコマンドは、ログクエリの結果をリファレンステーブルのデータで充実させることができます。

### 主な課題
GUIDs、IPアドレス、内部リソースIDなどの不透明な識別子を含むログを、追加のコンテキストなしで解釈することが困難でした。

### 解決方法
lookupコマンドを使用することで、クエリ時にログデータをルックアップテーブルと結合し、結果に意味のある値を自動的に追加することができます。

### 具体的な使用例
- 顧客IDを顧客名に変換
- 内部IPアドレスをそれを所有するチームにマッピング
- リソースIDをリソースの説明に置き換え

### メリット
- 事前処理パイプラインを必要とせず、ログ分析がより高速で直感的になります
- 新機能は現在、すべての商用AWSリージョンで利用可能です
- CSVデータはCloudWatch Logs Insightsのスキャン対象ギガバイト単位のクエリ料金にはカウントされません

### セットアップ
使用開始するには、CloudWatch → Settings → LogsでCSVファイルをアップロードします。Logs Insightsクエリでlookupコマンドを使用する際は、ログフィールド、ルックアップテーブル名、および1つ以上の列を指定します。