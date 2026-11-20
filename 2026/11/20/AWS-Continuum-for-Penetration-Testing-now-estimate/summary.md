# AWS Continuum for Penetration Testingがテスト実行前のタスク時間見積もりに対応

AWS Continuum for Penetration Testing now estimates task hours before you run a test

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/continuum-pentest-cost-estimates/)

このページでは、AWS What's Newで発表された「AWS Continuum for Penetration Testing now estimates task hours before you run a test」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Continuum for Penetration Testing（旧AWS Security Agent）は、ペネトレーションテスト実行前に課金対象のタスク時間（task hours）を無料で見積もる機能を追加しました。開発者とセキュリティチームが予算計画と使用制限（最大タスク時間上限）の設定を行いやすくなります。以前は実際にテストを実行しなければ所要時間がわからず、予算計画や上限設定が難しかった課題がありました。

## このアップデートで何が変わったか

AWS Continuum for Penetration Testing（旧AWS Security Agent）は、WebアプリケーションおよびAPIに対してオンデマンドのAI駆動ペネトレーションテストを実行するサービスです。新機能では、テスト実行前にタスク時間を見積もれます。利用方法: ペネトレーションテストを開き、Pentest cost estimateタブを選択して見積もりを依頼します。AWS Continuumがアプリケーションのスコープを短時間で予備分析し、過去のペネトレーションテストの実績を基に、類似アプリケーションが完了するタスク時間と一部が必要とする高い範囲を表示します。見積もりの依頼は無料であり、見積もりはガイドであって見積もり書や上限ではありません。実際のタスク時間は増減する可能性があり、使用量をキャップするのは最大タスク時間上限のみです。本機能はAWS Continuum for Penetration Testingが利用可能なすべてのAWSリージョンで利用できます。価格はタスク時間あたり$50（秒単位計量）。タスク時間はエージェントが推論・動作した累積時

## 対象ユーザー

AWS Continuum for Penetration Testing（旧AWS Security Agent）は、WebアプリケーションおよびAPIに対してオンデマンドのAI駆動ペネトレーションテストを実行するサービスです。新機能では、テスト実行前にタスク時間を見積もれます。利用方法: ペネトレーションテストを開き、Pentest cost estimateタブを選択して見積もりを依頼します。AWS Continuumがアプリケーションのスコープを短時間で予備分析し、過去のペネトレーションテストの実績を基に、類似アプリケーションが完了するタスク時間と一部が必要とする高い範囲を表示します。

## 詳細

AWS Continuum for Penetration Testing（旧AWS Security Agent）は、WebアプリケーションおよびAPIに対してオンデマンドのAI駆動ペネトレーションテストを実行するサービスです。新機能では、テスト実行前にタスク時間を見積もれます。利用方法: ペネトレーションテストを開き、Pentest cost estimateタブを選択して見積もりを依頼します。AWS Continuumがアプリケーションのスコープを短時間で予備分析し、過去のペネトレーションテストの実績を基に、類似アプリケーションが完了するタスク時間と一部が必要とする高い範囲を表示します。見積もりの依頼は無料であり、見積もりはガイドであって見積もり書や上限ではありません。実際のタスク時間は増減する可能性があり、使用量をキャップするのは最大タスク時間上限のみです。本機能はAWS Continuum for Penetration Testingが利用可能なすべてのAWSリージョンで利用できます。価格はタスク時間あたり$50（秒単位計量）。タスク時間はエージェントが推論・動作した累積時間であり、実行経過時間とは異なります。平均的なアプリテストは約24タスク時間（約$1,200）。新規顧客トライアルは最初のペネトレーションテストから2ヶ月間、毎月400タスク時間まで。ドキュメント: https://docs.aws.amazon.com/securityagent/latest/userguide/perform-penetration-test.html#task-hour-estimate

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/continuum-pentest-cost-estimates/)