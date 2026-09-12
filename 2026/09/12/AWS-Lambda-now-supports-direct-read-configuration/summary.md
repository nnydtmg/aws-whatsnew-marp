# AWS LambdaがAmazon S3 Filesのダイレクトリード設定をサポート

AWS Lambda now supports direct read configuration for Amazon S3 Files

**カテゴリ:** What's New
**公開日:** 2026-09-11T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-direct-read-s3files/)

このページでは、AWS What's Newで発表された「AWS Lambda now supports direct read configuration for Amazon S3 Files」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS LambdaがAmazon S3 Filesのダイレクトリード設定をサポートし、メモリサイズに依存せず読み取り性能を最適化できるようになりました。スケーラブルなデータ処理やエージェントワークロードを構築するお客様に適しています。

## このアップデートで何が変わったか

AWS LambdaがAmazon S3 Filesのダイレクトリード設定を新たにサポートしました。関数のメモリサイズに関係なく、高性能ストレージまたはS3バケットからの読み取りを明示的に設定できます。本更新は、スケーラブルなデータ処理パイプラインやステートフルなエージェントワークロードを構築されるお客様に適しています。ファイル読み取りのスループットとレイテンシをアプリケーション要件に応じて最適化したいお客様にとって有益です。DirectS3Read設定はAUTO（デフォルト：512MB以上で有効）、ENABLED（メモリサイズに関係なく有効化）、DISABLED（高性能ストレージ経由）の3値を受け付けます。有効時は1MB以上のファイルをS3バケットから直接ストリーミングし、小さいファイルは高性能ストレージから提供されます。すべてのAWSコマーシャルリージョン、AWS GovCloud (US-East/US-West)で利用可能（Asia Pacific (New Zealand)、Middle East (Bahrain/UAE)を除く）。追加料金なし。

## 詳細

AWS LambdaがAmazon S3 Filesのダイレクトリード設定を新たにサポートしました。関数のメモリサイズに関係なく、高性能ストレージまたはS3バケットからの読み取りを明示的に設定できます。本更新は、スケーラブルなデータ処理パイプラインやステートフルなエージェントワークロードを構築されるお客様に適しています。ファイル読み取りのスループットとレイテンシをアプリケーション要件に応じて最適化したいお客様にとって有益です。DirectS3Read設定はAUTO（デフォルト：512MB以上で有効）、ENABLED（メモリサイズに関係なく有効化）、DISABLED（高性能ストレージ経由）の3値を受け付けます。有効時は1MB以上のファイルをS3バケットから直接ストリーミングし、小さいファイルは高性能ストレージから提供されます。すべてのAWSコマーシャルリージョン、AWS GovCloud (US-East/US-West)で利用可能（Asia Pacific (New Zealand)、Middle East (Bahrain/UAE)を除く）。追加料金なし。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-direct-read-s3files/)