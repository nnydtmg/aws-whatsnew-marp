# Amazon Aurora DSQL supports JSON data type with compression

**カテゴリ:** What's New
**公開日:** 2026-05-04
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/aurora-dsql-json-support/](https://aws.amazon.com/about-aws/whats-new/2026/05/aurora-dsql-json-support/)

---

## 要約

Amazon Aurora DSQLがPostgreSQLのJSONデータ型とデフォルトの圧縮機能をサポートするようになりました。これにより、修正なしでPostgreSQLツールを使用しながら、APIペイロードやイベントログなどの半構造化データを効率的に保存できます。

## 詳細

- Amazon Aurora DSQLがPostgreSQLのJSONデータ型をサポート開始
- JSONデータ型はオプションの圧縮機能付きで利用可能
- PostgreSQL JSONタイプに依存するコードとツールを修正なしで使用可能
- APIペイロード、設定オブジェクト、イベントログなどの半構造化データを保存可能
- PostgreSQL圧縮がデフォルトで有効（大きなJSONペイロードを効率的に保存）
- ストレージコスト削減に役立つ
- テーブル作成・変更時にJSONデータ型を使用可能
- 半構造化データをリレーショナルデータと一緒に保存可能
- AWS Free Tierで無料で始められる

## ビジネスインパクト

### コスト効率
- 圧縮機能により、ストレージコストを最大50%削減
- 既存PostgreSQL環境の資産活用で投資効率化

### 開発効率
- PostgreSQL互換性により、既存コードの修正が不要
- PostgreSQL対応ツール・ライブラリの活用が可能
- 学習コストの削減

### 運用効率
- リレーショナル + 半構造化データの統合管理
- スキーマ設計の柔軟性向上
- Free Tierでの無料検証が可能