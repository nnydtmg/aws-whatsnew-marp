# AWS Entity Resolution がリアルタイムマッチングに対応

AWS Entity Resolution now supports advanced real-time matching

**カテゴリ:** What's New
**公開日:** 2026-07-22
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-entity-resolution/)

このページでは、AWS What's Newで発表された「AWS Entity Resolution now supports advanced real-time matching」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Entity Resolutionは、GenerateMatchId APIを通じて複雑なルールセットを使用したリアルタイムマッチングをミリ秒単位で実現する高度なマッチング機能をサポートするようになりました。この更新により、不正検出やリアルタイムアカウントルックアップなどが必要な顧客は、インフラストラクチャの維持やアプリケーションの再構築を行うことなく、高度なマッチングロジックをリアルタイムで実装できるようになりました。

## このアップデートで何が変わったか

AWS Entity Resolutionが高度なリアルタイムマッチング機能をサポートするようになりました。GenerateMatchId APIを使用して、複雑なルールセットに基づいてミリ秒単位でレコードをマッチングできるようになりました。これまでは、リアルタイムマッチングは単純なルールベースのワークフローに限定されていました。高度なルールセット（ExactおよびExactManyToManyなどのオペレーターとAND/OR論理を組み合わせたもの）は、数分から数時間かかるバッチ処理でのみ使用可能でした。顧客は、enableRealTimeMatchingパラメーターをtrueに設定してマッチングワークフローを構成するだけで、新しいエンドポイントやアプリケーションの再構築は不要です。この機能は、不正検出、リアルタイムアカウントルックアップ、ウェブサイトパーソナライゼーションを実行する顧客に適しています。AWS Entity Resolutionが利用可能なすべてのAWSリージョンで利用できます。

## 詳細

AWS Entity Resolutionが高度なリアルタイムマッチング機能をサポートするようになりました。GenerateMatchId APIを使用して、複雑なルールセットに基づいてミリ秒単位でレコードをマッチングできるようになりました。これまでは、リアルタイムマッチングは単純なルールベースのワークフローに限定されていました。高度なルールセット（ExactおよびExactManyToManyなどのオペレーターとAND/OR論理を組み合わせたもの）は、数分から数時間かかるバッチ処理でのみ使用可能でした。顧客は、enableRealTimeMatchingパラメーターをtrueに設定してマッチングワークフローを構成するだけで、新しいエンドポイントやアプリケーションの再構築は不要です。この機能は、不正検出、リアルタイムアカウントルックアップ、ウェブサイトパーソナライゼーションを実行する顧客に適しています。AWS Entity Resolutionが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-entity-resolution/)
- [AWS Entity Resolution フィーチャー](https://aws.amazon.com/entity-resolution/features)
- [GenerateMatchId APIドキュメント](https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GenerateMatchId.html)