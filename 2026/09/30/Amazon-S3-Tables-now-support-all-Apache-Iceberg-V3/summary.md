# Amazon S3 TablesがApache Iceberg V3の全データ型をサポート

Amazon S3 Tables now support all Apache Iceberg V3 data types

**カテゴリ:** What's New
**公開日:** 2026-09-30T04:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-s3-tables-iceberg-v3-data-types)

このページでは、AWS What's Newで発表された「Amazon S3 Tables now support all Apache Iceberg V3 data types」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3 TablesがApache Iceberg V3の全データ型をサポートし、地理空間データやナノ秒精度タイムスタンプをネイティブに扱えるようになりました。フリート追跡、資産マッピング、テレメトリ、金融ワークロードに適しております。

## このアップデートで何が変わったか

Amazon S3 TablesがApache Iceberg Version 3 (V3)仕様で定義されたgeometry、geography、unknown、ナノ秒タイムスタンプのデータ型、および列のデフォルト値をサポートするようになりました。地理空間座標やナノ秒精度のイベント時刻を文字列や整数にエンコードせずにネイティブに保存でき、データアーキテクチャを簡素化しながらストレージ効率とパフォーマンスを向上させます。本発表により、S3 TablesはV3で導入されたすべてのデータ型をサポートし、既存のVariantデータ型、deletion vectors、row lineageのサポートに加わります。geometryおよびgeography列はポイント、ライン、ポリゴンをネイティブに保存するため、フリート追跡や資産マッピングのワークロードでクエリ時に位置でフィルタリングできます。ナノ秒タイムスタンプにより、テレメトリや金融ワークロードがソース精度でイベント時刻を記録できます。列のデフォルト値は、既存行への新列追加時にバックフィル不要で値を設定します。S3 TablesはApache

## 詳細

Amazon S3 TablesがApache Iceberg Version 3 (V3)仕様で定義されたgeometry、geography、unknown、ナノ秒タイムスタンプのデータ型、および列のデフォルト値をサポートするようになりました。地理空間座標やナノ秒精度のイベント時刻を文字列や整数にエンコードせずにネイティブに保存でき、データアーキテクチャを簡素化しながらストレージ効率とパフォーマンスを向上させます。本発表により、S3 TablesはV3で導入されたすべてのデータ型をサポートし、既存のVariantデータ型、deletion vectors、row lineageのサポートに加わります。geometryおよびgeography列はポイント、ライン、ポリゴンをネイティブに保存するため、フリート追跡や資産マッピングのワークロードでクエリ時に位置でフィルタリングできます。ナノ秒タイムスタンプにより、テレメトリや金融ワークロードがソース精度でイベント時刻を記録できます。列のデフォルト値は、既存行への新列追加時にバックフィル不要で値を設定します。S3 TablesはApache Icebergテーブルの自動メンテナンスとコンパクションを提供し、V3データ型を使用するテーブルもデータ規模の拡大に応じてパフォーマンスとコスト効率を維持します。これらのデータ型のサポートは、S3 Tablesが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-s3-tables-iceberg-v3-data-types)