---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Lambda now supports Availability Zone metadata
新しいメタデータエンドポイントでAZ対応のルーティングが可能に

**発表日: 2026年3月19日**

---

## 概要

### AWS Lambdaの3つの新機能

- **Availability Zoneメタデータ**: Lambda実行環境がAZ IDをメタデータエンドポイント経由で提供
- **AZ対応ルーティング**: Lambda関数が実行されているAZを判定し、同一AZエンドポイントを優先可能
- **レジリエンス向上**: AZ対応のレジリエンスパターンとフォルトインジェクションテストに対応

### 利用方法と対応範囲

- Powertools for AWS Lambdaメタデータユーティリティで簡単に実装可能
- すべてのLambdaランタイム（カスタムランタイムとコンテナイメージを含む）で対応
- VPC対応有無にかかわらず利用可能
- **追加コストなし**で全商用AWSリージョンで利用可能

---

## 前提・背景

### Lambda実行環境の課題

- **AZ情報の欠落**: Lambdaが複数AZで実行されるが、関数がどのAZにいるか判定できない
- **クロスAZ遅延**: 別のAZのエンドポイントを呼び出すとレイテンシーが増加
- **ルーティング最適化不可**: ElastiCacheやRDSなどのAZ固有エンドポイントを活用できない

### 関連動向

- マイクロサービスアーキテクチャでのレイテンシー削減の重要性向上
- マルチAZ設計によるHigh Availability要件の普及
- データベース・キャッシュレイヤーのAZ対応エンドポイント提供の一般化

---

## 主な機能と改善

### 1. メタデータエンドポイントの実装

- Lambda実行環境で自動的にメタデータエンドポイントが利用可能
- 環境変数 `AWS_LAMBDA_METADATA_TOKEN` で認証情報を自動設定
- JSON形式でAZ IDを返す（例：`{"AvailabilityZoneID": "use1-az1"}`）

### 2. 利用方法（2パターン）

**Powertools for AWS Lambdaを使用**
```typescript
import { getMetadata } from '@aws-lambda-powertools/commons/utils/metadata';
const metadata = await getMetadata();
const { AvailabilityZoneID: azId } = metadata;
```

**直接API呼び出し**
- 環境変数で設定されたエンドポイントにHTTP GET要求
- 環境変数を使用してトークンを含める

---

## パフォーマンス・効果指標

### ビジネス効果

| 効果 | 説明 |
|------|------|
| **クロスAZレイテンシー削減** | 同一AZエンドポイントを優先することで遅延低減 |
| **コスト削減** | クロスAZ通信の削減により転送コストを削減 |
| **可用性向上** | AZ対応レジリエンスパターン実装が容易に |
| **テスト品質向上** | AZ固有のフォルトインジェクションテストが実現 |

### 技術的特性

- **即座に利用可能**: SnapStart、プロビジョニング済み同時実行数に統合
- **低オーバーヘッド**: メタデータはキャッシュ可能で効率的
- **キャッシング**: Cache-Control: max-age=43200で24時間キャッシュ

---

## ユースケース

### 1. ElastiCache・RDSのAZ対応ルーティング

Lambda関数がElastiCacheやRDSのAZ固有エンドポイントを優先して使用

### 2. マイクロサービス間のAZ親和性

サービス間通信でレイテンシーを最小化

### 3. AZ固有のフォルトインジェクションテスト

特定のAZの障害をシミュレートし、レジリエンスパターンを検証

### 4. 高可用性アーキテクチャの構築

マルチAZ構成で効率的なリソース利用を実現

---

## まとめ

### AWS Lambda Availability Zoneメタデータの位置づけ

- Lambdaでの**AZ対応開発が初めて可能に**
- **パフォーマンスとコスト最適化**を同時に実現
- **追加コストなし**で全リージョン対応
- SnapStart、プロビジョニング済み同時実行数と**シームレスに統合**

### 次のステップ

1. 既存Lambda関数でAZ対応ルーティングの効果を測定
2. Powertools for AWS Lambdaを組み込んだ実装検証
3. 本番環境でのAZ親和性テストと導入

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-availability-zone-metadata/
- **Lambda メタデータエンドポイント**: https://docs.aws.amazon.com/lambda/latest/dg/configuration-metadata-endpoint.html
- **Powertools for AWS Lambda**: https://docs.powertools.aws.dev/lambda/
- **AWS Lambda ドキュメント**: https://docs.aws.amazon.com/lambda/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**