# Amazon EventBridge supports data plane logging to AWS CloudTrail

**カテゴリ:** What's New
**公開日:** 2026-05-04
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-eventbridge-data-aws-cloudtrail/](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-eventbridge-data-aws-cloudtrail/)

---

## 要約

Amazon EventBridgeがAWS CloudTrailのデータプレーンログ記録に対応し、PutEvents APIの呼び出しを含むイベントバス活動の詳細な可視化が可能になりました。このアップデートは、セキュリティ監査、コンプライアンス管理、運用トラブルシューティングを強化する必要があるすべての組織に有益です。

## 詳細

### 主な変更内容

- Amazon EventBridgeがAWS CloudTrailへのデータプレーンログ記録に対応しました
- イベントバス活動の可視性が向上し、セキュリティと運用トラブルシューティングのベストプラクティスが実現されます
- CloudTrailはEventBridge APIの呼び出し、リクエスター情報、IPアドレス、リクエスト日時などを記録します
- PutEvents APIがCloudTrailに記録されるようになりました

### 設定と利用方法

- CloudTrail ConsoleまたはCloudTrail APIを使用してイベントバスのログ記録を設定できます
- すべての商用AWSリージョン、AWS GovCloud、中国リージョンで利用可能です

### 利用メリット

- 運用監査、リスク監査、ガバナンス、コンプライアンスの向上
- イベント駆動型アプリケーションの完全な監査証跡
- セキュリティ監査と問題調査の効率化

### 対象ユーザー

- セキュリティとコンプライアンスを重視する企業
- EventBridge APIの活動を監査・追跡する必要がある組織
- イベント駆動型アプリケーションの運用トラブルシューティングを行う開発チーム
- 規制要件に対応する必要があるエンタープライズ顧客

## 関連情報

- [Logging Amazon EventBridge API calls using AWS CloudTrail](https://docs.aws.amazon.com/eventbridge/latest/userguide/logging-using-cloudtrail.html)
- [Logging data events - AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html)
