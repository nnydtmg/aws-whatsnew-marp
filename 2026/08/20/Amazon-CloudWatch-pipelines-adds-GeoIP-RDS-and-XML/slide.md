---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch パイプラインに GeoIP、RDS、XML プロセッサが追加

ログデータの高度な解析とエンリッチメント機能が強化

**発表日: 2026年8月19日**

---

## 概要

### 3つの新しいプロセッサが追加

- **GeoIP エンリッチメントプロセッサ**: IP アドレスから地理的情報を抽出
- **RDS ログパーサー**: Aurora ログをネイティブ形式から構造化データに変換
- **XML パーサー**: XML フィールドを JSON に変換

### 主な特徴

- 追加費用なしで利用可能
- すべての AWS リージョンで展開
- CloudWatch パイプラインと完全統合

---

## 前提・背景

### ログ処理の課題

- ログデータは非構造化形式で取得されることが多い
- 構造化データへの変換に複雑な処理が必要
- 地理的情報の追加に外部ツールが必要だった
- RDS ログの解析に専門知識が必要

### 市場の動向

- ログベースのセキュリティ分析需要の増加
- コンプライアンス対応の自動化
- データ駆動な意思決定の重要性
- リアルタイムデータエンリッチメントへのニーズ

---

## GeoIP プロセッサ

### 機能

- **IP アドレスの地理的エンリッチメント**
  - MaxMind データベースを使用
  - 都市、国、大陸、座標情報を追加
  - ASN（自律システム番号）情報も対応

### 設定例

```
source: "client_ip"
target: "client_geo"
include_fields:
  - city_name
  - country_name
  - latitude
  - longitude
```

### ユースケース

- ネットワークトラフィック分析
- ユーザーロケーション追跡
- セキュリティインシデント調査

---

## RDS ログパーサー

### 機能

- **Aurora ログの自動解析**
  - ネイティブエンジン形式から構造化フィールドへ変換
  - 複数の RDS エンジンに対応

### サポート対象

- Amazon Aurora MySQL
- Amazon Aurora PostgreSQL
- その他の RDS エンジン

### ユースケース

- コンプライアンスレポーティング
- 監査ログの管理
- パフォーマンス分析

---

## XML パーサー

### 機能

- **XML から JSON への変換**
  - XML 文字列を含むフィールドを自動変換
  - 構造化クエリが可能に

### 対応

- 1パイプラインあたり最大5個のパーサー

### ユースケース

- Windows イベントログの処理
- 埋め込み XML ペイロードの抽出
- セキュリティ分析用データの準備

---

## 利用方法

### 設定方法

1. **AWS Management Console** で CloudWatch Logs を開く
2. **Pipelines** タブを選択
3. 新しいパイプラインを作成または既存パイプラインを編集
4. 対応するプロセッサを追加
5. パイプラインを有効化

### AWS CLI での設定

```bash
aws logs put-transformer --processor-config
```

### AWS SDK での設定

- Python Boto3、Java、Node.js などで対応可能

---

## 効果とメリット

### インジェスション時処理

- ログ取り込み時にリアルタイム変換
- 追加のツール不要で処理完結
- 運用複雑性を削減

### コスト効率

- 追加費用なし（既存の CloudWatch ログ料金のみ）
- インジェスション処理の簡素化
- 外部ツール排除による削減

### データ品質向上

- 構造化データによる検索精度向上
- コンプライアンス対応の自動化
- セキュリティ分析精度の向上

---

## ユースケース例

### 1. コンプライアンスレポーティング

Aurora 監査ログを RDS パーサーで自動解析
→ コンプライアンスレポート自動生成

### 2. セキュリティ分析

Windows イベントログの XML 部分を抽出
→ XML パーサーで JSON に変換
→ CloudWatch Insights でセキュリティパターン検出

### 3. トラフィック分析

Web アクセスログから Client IP を抽出
→ GeoIP プロセッサでエンリッチメント
→ ユーザーの地理的分布を分析

---

## 利用可能な地域

### 展開状況

- CloudWatch パイプラインが GA 提供されている**すべての AWS リージョン**で利用可能
- リージョン追加時に自動的に対応

### 制限事項

- 1アカウントあたり最大 330 ロググパイプライン
- 1パイプラインあたり最大 20 プロセッサ

---

## まとめ

### CloudWatch パイプラインの強化

GeoIP、RDS、XML プロセッサの追加により、ログデータの処理と分析が一層効率化されます。

### 次のステップ

1. 既存のログ処理ワークフローを確認
2. パイプラインへの適用可否を検討
3. パイロットプロジェクトで評価開始
4. 本番環境への段階的展開

### 参考リソース

- [AWS ドキュメント](https://docs.aws.amazon.com/AmazonCloudWatch/)
- [Transformation processors](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/transformation-processors.html)
- [CloudWatch pipelines](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html)

---

## 参考リソース

### 元記事

- [AWS What's New - CloudWatch pipelines adds GeoIP, RDS, and XML processors](https://aws.amazon.com/about-aws/whats-new/2026/08/cloudwatch-geoip-rds-xml/)

### 関連ドキュメント

- [Transformation processors - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/transformation-processors.html)
- [CloudWatch pipelines - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html)
- [Parser processors - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/parser-processors.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**