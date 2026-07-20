# AWS CloudTrail で UserIdentity ベースのネットワークアクティビティイベントをフィルタリング

Selectively log network activity events by identity in AWS CloudTrail

**カテゴリ:** What's New
**公開日:** 2026-07-20
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-cloudtrail-filter-useridentity-advance-selectors/)

このページでは、AWS What's Newで発表された「Selectively log network activity events by identity in AWS CloudTrail」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS CloudTrailは、VPCエンドポイントのネットワークアクティビティイベントに対してUserIdentityベースのフィルタリング機能を新たに導入し、お客様がIAMユーザーアイデンティティに基づいて選択的にイベントをログ記録できるようにしました。この機能により、ロギングコストとノイズを削減しながら、セキュリティ上重要なアクセス拒否イベントや不正アクセス試行を効果的に検出することが可能になります。

## このアップデートで何が変わったか

- AWS CloudTrailは、VPCエンドポイントのネットワークアクティビティイベントに対して、IAMユーザーアイデンティティに基づいた選択的なイベントフィルタリング機能を新たに提供するようになりました。
- この新機能により、ユーザーはUserIdentityフィルタリングを使用して、信頼できるアイデンティティリストに含まれていないユーザーからのアクセス拒否イベントのみをログに記録するよう設定できるようになりました。
- ロギングコストの削減とノイズの低減を実現しながら、認可されていないアクセス試行を捕捉することが可能になりました。
- eventNameやvpcEndpointIdなどの既存フィールドとUserIdentity条件を組み合わせることで、ログに記録される内容をきめ細かく制御できるようになりました。
- 本機能はAWS Management Console、AWS Command Line Interface、およびAWS SDKを通じて利用可能です。
- CloudTrailネットワークアクティビティイベントがサポートされているすべてのAWSリージョンで利用可能

## 対象ユーザー

- AWS CloudTrailを使用している企業
- VPCエンドポイント経由のAPI呼び出しを監視したい組織
- ロギングコストを削減したい企業
- セキュリティ監視を強化したい組織
- データ境界戦略を実装する企業
- コンプライアンス要件を満たす必要がある組織

## 詳細

### UserIdentity ベースのフィルタリング

- AWS CloudTrailは、VPCエンドポイントのネットワークアクティビティイベントに対して、IAMユーザーアイデンティティに基づいた選択的なイベントフィルタリング機能を新たに提供するようになりました。
- この新機能により、ユーザーはUserIdentityフィルタリングを使用して、信頼できるアイデンティティリストに含まれていないユーザーからのアクセス拒否イベントのみをログに記録するよう設定できるようになりました。

### Advanced Event Selectors による細粒度制御

- ロギングコストの削減とノイズの低減を実現しながら、認可されていないアクセス試行を捕捉することが可能になりました。
- eventNameやvpcEndpointIdなどの既存フィールドとUserIdentity条件を組み合わせることで、ログに記録される内容をきめ細かく制御できるようになりました。

### 利用可能性

- 本機能はAWS Management Console、AWS Command Line Interface、およびAWS SDKを通じて利用可能です。
- CloudTrailネットワークアクティビティイベントがサポートされているすべてのAWSリージョンで利用可能です。

### ユースケース

- **データ境界戦略**: データ境界戦略を構築しているお客様は、セキュリティ上最も重要なシナリオに対してネットワークアクティビティイベントのログ記録に焦点を当てることができるようになりました。
- **セキュリティ監視**: VPCエンドポイントを通じた潜在的なデータ流出の試みを検出できるようになり、承認されたプリンシパルからのすべての成功したAPI呼び出しをログに記録するコストを回避できるようになりました。

## メリット

### コスト最適化

- 不要なログ記録を削減
- ストレージコストの削減
- CloudTrail Lake保存コストの最適化

### セキュリティ強化

- 認可されていないアクセス試行の効果的な検出
- データ流出の試みの識別
- VPCエンドポイントポリシー違反の検出

### 運用効率化

- ログノイズの低減
- 分析の容易化
- コンプライアンス監査の効率化

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-cloudtrail-filter-useridentity-advance-selectors/)
- [AWS CloudTrail ドキュメント](https://docs.aws.amazon.com/cloudtrail/)
- [CloudTrail Network Activity Events](https://docs.aws.amazon.com/cloudtrail/latest/userguide/network-activity-events.html)