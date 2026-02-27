# Amazon CloudWatch lock contention diagnostics for RDS PostgreSQL

カテゴリ: What's New
公開日: 2026-02-26
元記事: https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-cloudwatch-lock-contention-diagnostics-rds-postgresql/

## 要約

Amazon CloudWatch Database InsightsがRDS for PostgreSQLのロック競合診断機能を提供開始しました。ユーザーは数分以内にロック競合の根本原因を特定できるようになりました。この機能はAdvanced modeで利用可能であり、15ヶ月間の履歴データ保持により、手動クエリやログ分析なしにトラブルシューティングが簡素化されます。

## 詳細

Amazon CloudWatch Database Insightsが、Amazon RDS for PostgreSQLインスタンスに対するロック競合診断機能を提供するようになりました。この機能により、ユーザーは数分以内に進行中および過去のロック競合問題の根本原因を特定することができます。ロック競合診断機能はCloudWatch Database InsightsのAdvanced modeでのみ利用可能です。Database Insightsコンソールでロック状態を可視化でき、ブロッキングセッションと待機セッション間の関係を表示します。

## 主な機能

### ロック競合の可視化
- Database Insightsコンソールでロック状態を可視化
- ブロッキングセッションと待機セッション間の関係を表示
- ロック競合を引き起こしているセッション、クエリ、またはオブジェクトを迅速に特定

### 履歴データ保持
- 過去15ヶ月間のロック履歴データが保持される
- 歴史的なロック状態の分析と調査が可能
- トレンド分析や事後分析が容易

### トラブルシューティングの簡素化
- カスタムクエリの手動実行が不要
- アプリケーションログへの依存が削減
- 診断時間が数分に短縮

## 利用方法

- RDSコンソール、AWS API、またはAWS SDKを使用してAdvanced modeを有効化
- CloudWatch Database InsightsはすべてのパブリックなAWSリージョンで利用可能
- vCPUベースの価格設定が適用される
