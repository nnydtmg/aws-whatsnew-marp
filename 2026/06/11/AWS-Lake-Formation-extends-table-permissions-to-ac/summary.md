# AWS Lake Formation、Amazon S3の基盤データへのアクセス権限を拡張

AWS Lake Formation extends table permissions to access underlying data in Amazon S3

**カテゴリ:** What's New
**公開日:** 2026-06-11
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lake-formation-access-data-amazon-s3)

---

## 要約

AWS Lake Formationが更新され、テーブル権限に基づいてAmazon S3の基盤となるデータファイルへの読み書きアクセスが可能になりました。これにより、SQLクエリとファイルベースのアクセスに対して単一の権限セットが提供され、モデルトレーニングやデータ品質デバッグなどのファイルレベルのアクセスが必要なタスクに対応できるようになります。

---

## このアップデートで何が変わったか

### 主要な改善点

1. **AWS Lake Formationが、AWS Glue Data Catalogに登録されたテーブルの基盤となるAmazon S3のデータファイルに対する読み書きアクセスを可能にしました。**
   - 以前は SQL クエリのみが Lake Formation 権限の対象でしたが、ファイルレベルのアクセスも権限制御下に置くことが可能になりました。

2. **SQLクエリと直接ファイルアクセスの両方に対して、単一の権限セットを提供することができます。**
   - 複数の権限体系を管理する必要がなくなり、ガバナンスが簡素化されます。

3. **Lake Formationのテーブル権限に基づいて、登録されたS3ロケーションに対する一時的でスコープされた認証情報を提供します。**
   - セキュリティベストプラクティスに従い、最小限の期間と範囲に限定された認証情報を自動生成します。

4. **SELECT権限は読み取りアクセスを付与し、SUPER権限はそのロケーションのデータに対する読み取りおよび書き込みアクセスを付与します。**
   - 既存の Lake Formation 権限モデルがそのまま適用されます。

5. **この機能はAmazon EMR 7.13以降に組み込まれています。**
   - Amazon EMR 7.13以降を使用している場合、追加の設定なしで自動的に機能が有効になります。

6. **Apache SparkおよびTrinoアプリケーションは、APIまたはAWSが提供するオープンソースプラグインを通じて統合できます。**
   - EMR 以外の環境での利用も可能です。

7. **モデルトレーニング、特徴エンジニアリング、データ品質問題のデバッグなど、ファイルレベルのアクセスが必要なタスクに対して、Sparkジョブから直接データファイルにアクセスできます。**
   - 以前は S3 API の直接呼び出しや一時的なクレデンシャルの管理が必要でしたが、自動化されます。

8. **すべてのアクセスはAWS CloudTrailに記録され、テーブル上のSQLおよびファイルベースの操作全体にわたって統合された監査証跡を提供します。**
   - コンプライアンスと監査が簡素化されます。

9. **この機能はAWS Lake Formationが利用可能なすべてのAWSリージョンで追加料金なしで利用できます。**
   - 追加のコスト負担なしに利用可能です。

---

## 技術的な詳細

### 権限フロー

1. ユーザー/アプリケーションが Spark または Trino から Lake Formation テーブルにアクセスをリクエスト
2. Lake Formation が テーブル権限をチェック
3. 権限に応じて、一時的な S3 認証情報（一時的な IAM クレデンシャル）を生成
4. アプリケーションが S3 の基盤データに対してアクセス
5. すべてのアクセスが CloudTrail に記録

### 対応プラットフォーム

- **Amazon EMR 7.13以降**: ネイティブサポート（追加設定不要）
- **Apache Spark**: API 経由での統合
- **Trino**: オープンソースプラグイン経由での統合
- **その他のフレームワーク**: API 経由での統合も検討可能

### セキュリティ機能

- **一時的な認証情報**: S3 アクセスキーが有効期限付きで自動発行
- **スコープ限定**: アクセス対象は Lake Formation で定義されたテーブルに限定
- **ロールベースアクセス制御**: Lake Formation テーブル権限をベースに制御
- **監査ログ**: CloudTrail に全アクセスが記録

---

## 対象ユーザー・ユースケース

### 主なユースケース

1. **ML/データサイエンスチーム**
   - モデルトレーニングやデータ前処理で、権限管理を簡素化
   - 複数のデータセットの統合管理が可能

2. **データエンジニア**
   - データパイプラインにおいて、統一された権限管理を実現
   - 権限に基づいた自動認証情報の配布が可能

3. **ビジネスアナリスト**
   - Trino などのクエリツールから、Lake Formation 権限に基づいたデータアクセスが可能

4. **コンプライアンス・セキュリティチーム**
   - SQL とファイルアクセスの監査証跡が統一され、コンプライアンス対応が簡素化

---

## 参考リンク

- [AWS What's New - AWS Lake Formation extends table permissions to access underlying data in Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lake-formation-access-data-amazon-s3)
- [AWS Lake Formation ドキュメント](https://docs.aws.amazon.com/lake-formation/latest/dg/accessing-s3-locations.html)
- [Amazon EMR ドキュメント](https://docs.aws.amazon.com/emr/latest/ManagementGuide/lake-formation-path-based-credential-vending.html)
- [API リファレンス](https://docs.aws.amazon.com/boto3/latest/reference/services/lakeformation/client/get_temporary_data_location_credentials.html)
- [AWS オープンソースプラグイン](https://github.com/aws/aws-lakeformation-accessgrants-plugin-java-v2)