# AWS Lambda now supports Availability Zone metadata

**カテゴリ:** What's New
**公開日:** 2026-03-19
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-availability-zone-metadata/](https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-availability-zone-metadata/)

---

## 要約

AWS Lambdaが新しくAvailability Zoneのメタデータをメタデータエンドポイント経由で提供し、Lambda関数がAZ IDを取得してAZ対応のルーティング決定やレジリエンスパターン実装が可能になりました。この機能はすべてのLambdaランタイムで対応しており、追加コストなしで利用できます。

## 詳細

AWS Lambdaが新しくメタデータエンドポイントを通じて、実行環境内でAvailability Zone（AZ）のメタデータを提供するようになりました。Lambda関数が実行されているAZ ID（例：use1-az1）を判定できるようになり、AZ対応のルーティング決定が可能になりました。同一AZのエンドポイントを優先することで、ダウンストリームサービスへのクロスAZレイテンシーを削減できます。

AZ対応のレジリエンスパターン実装やAZ固有のフォルトインジェクションテストが実現できるようになりました。Powertools for AWS Lambdaメタデータユーティリティを使用するか、Lambda実行環境で自動設定される環境変数を使ってメタデータエンドポイントを直接呼び出すことで利用できます。

すべてのLambdaランタイム（カスタムランタイムやコンテナイメージを含む）で対応しており、SnapStartやプロビジョニング済み同時実行数などのLambda機能とシームレスに統合されます。VPC有効化の有無に関わらず、このAZメタデータサポートは利用可能です。Lambdaが利用可能なすべての商用AWSリージョンで、追加コストなしで利用できます。