# Amazon S3 がアクセス拒否エラーメッセージにポリシー詳細を追加

Amazon S3 adds additional policy details to access denied error messages

**カテゴリ:** What's New
**公開日:** 2026-08-13
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/s3-additional-policy-details-access-denied-error-messages/)

このページでは、AWS What's Newで発表された「Amazon S3 adds additional policy details to access denied error messages」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3のアクセス拒否エラーメッセージに特定のIAMおよびAWS Organizationsポリシーの ARNが表示されるようになり、アクセス拒除の原因となっているポリシーを迅速に特定できるようになりました。この機能は全AWSリージョンで利用可能であり、トラブルシューティングの効率性を大幅に向上させます。

## このアップデートで何が変わったか

Amazon S3のアクセス拒否エラーメッセージに、IAMおよびAWS Organizationsポリシーの特定のAmazon Resource Name（ARN）が含まれるようになりました。この機能は、同一アカウント内および同一組織内のリクエストに対して適用されます。エラーメッセージに特定のポリシーARNが表示されることで、アクセス拒否の原因となっているポリシーを迅速に特定できるようになりました。Service Control Policies（SCP）、Resource Control Policies（RCP）、アイデンティティベースのポリシー、セッションポリシー、および権限の境界を含む、明示的な拒否ケースをカバーしています。以前は、同じタイプの複数のポリシーが存在する場合、各ポリシーを手動で検査する必要がありました。この機能は、すべてのAWSリージョン、AWS GovCloud（US）リージョン、およびAWSチャイナリージョンで利用可能です。トラブルシューティングの効率が大幅に向上し、問題解決にかかる時間が短縮されます。

## 詳細

Amazon S3のアクセス拒否エラーメッセージに、IAMおよびAWS Organizationsポリシーの特定のAmazon Resource Name（ARN）が含まれるようになりました。この機能は、同一アカウント内および同一組織内のリクエストに対して適用されます。エラーメッセージに特定のポリシーARNが表示されることで、アクセス拒否の原因となっているポリシーを迅速に特定できるようになりました。Service Control Policies（SCP）、Resource Control Policies（RCP）、アイデンティティベースのポリシー、セッションポリシー、および権限の境界を含む、明示的な拒否ケースをカバーしています。以前は、同じタイプの複数のポリシーが存在する場合、各ポリシーを手動で検査する必要がありました。この機能は、すべてのAWSリージョン、AWS GovCloud（US）リージョン、およびAWSチャイナリージョンで利用可能です。トラブルシューティングの効率が大幅に向上し、問題解決にかかる時間が短縮されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/s3-additional-policy-details-access-denied-error-messages/)