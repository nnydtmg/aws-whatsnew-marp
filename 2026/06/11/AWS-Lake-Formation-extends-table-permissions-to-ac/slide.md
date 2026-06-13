---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Lake Formation、Amazon S3の基盤データへのアクセス権限を拡張

**発表日: 2026年6月11日**

---

## 概要

### 主要な改善点

- **テーブル権限ベースのデータアクセス**: AWS Lake Formationが Amazon S3 の基盤となるデータファイルへの読み書きアクセスを実現
- **統一された権限管理**: SQL クエリとファイルベースアクセスに対して単一の権限セットを提供
- **複数のフレームワーク対応**: Apache Spark、Trino、Amazon EMR との統合をサポート
- **段階的ロールアウト**: Amazon EMR 7.13以降に組み込み

---

## 前提・背景

### 従来の課題

- **権限管理の複雑さ**: SQL クエリとファイルアクセスで異なる権限体系が存在
- **マルチアクセスの非効率性**: 複数のツール（Spark、Athena、Trino）で権限設定を個別に管理する必要があった
- **監査ログの分散**: アクセス操作が複数のサービスに分散して記録される

### マーケット動向

- 統一されたデータガバナンスへの需要が増加
- Apache Spark、Trino の採用拡大に伴う権限管理の複雑化
- データカタログと権限管理の統合が業界トレンド

---

## 主な機能と改善

### 1. テーブル権限ベースのアクセス制御

- **一時的でスコープされた認証情報**: Lake Formation テーブル権限に基づいて発行
- **SELECT 権限**: 読み取りアクセスを付与
- **SUPER 権限**: 読み取りおよび書き込みアクセスを付与

### 2. 複数のアプリケーションフレームワーク対応

- **Apache Spark**: ネイティブ統合（EMR 7.13以降）
- **Trino**: API またはオープンソースプラグイン経由で統合可能
- **AWS が提供するプラグイン**: カスタム実装を不要化

---

## ユースケース

### モデルトレーニングとML フローの効率化

- Spark ジョブから直接 S3 データファイルにアクセス可能
- Lake Formation 権限に基づいて、スコープされた認証情報を自動付与
- モデルトレーニング、特徴エンジニアリングが権限管理を簡素化

### データ品質デバッグ

- ファイルレベルのアクセスが必要な問題診断タスクに対応
- データの不整合や品質問題を直接ファイルで検証可能

### マルチテナント環境での統一ガバナンス

- Databricks、Trino など複数のプラットフォーム上で統一された権限ポリシーを適用
- AWS CloudTrail による統合監査証跡

---

## 効果・メリット

- **権限管理の統一化**: SQL + ファイルアクセスで単一の権限セットを使用
- **セキュリティ向上**: 一時的でスコープされた認証情報により過剰な権限付与を防止
- **監査・コンプライアンス**: AWS CloudTrail に全アクセスが記録され、統合された監査証跡を実現
- **開発効率の向上**: 複雑な認証ロジックの実装が不要化
- **コスト削減**: 追加料金なしで利用可能
- **エコシステム拡大**: Apache Spark、Trino などの主流フレームワークとの統合

---

## 技術的な詳細

### 認証フロー

1. ユーザー/アプリケーションが Lake Formation テーブル操作をリクエスト
2. Lake Formation が テーブル権限をチェック
3. 権限に応じた一時的な S3 認証情報を生成
4. S3 の基盤データに対してアクセス実行
5. すべてのアクセスが CloudTrail に記録

### 対応リージョン

- AWS Lake Formation が利用可能なすべての AWS リージョン
- 追加料金なし

---

## 実装のポイント

### Apache Spark との統合

- Amazon EMR 7.13以降に組み込み
- デフォルトで有効化（追加設定不要）

### Trino との統合

- 公開されている API を使用
- AWS が提供するオープンソースプラグイン: `aws-lakeformation-accessgrants-plugin-java-v2`

### 既存システムへの影響

- 既存の Lake Formation テーブル権限はそのまま使用可能
- SQL ベースのアクセスは変更なし

---

## まとめ

### AWS Lake Formation の進化

- SQL とファイルアクセスの権限を統一
- Apache Spark、Trino などのビッグデータツールとのシームレスな統合を実現
- エンタープライズレベルの監査・ガバナンス機能を強化

### 推奨される次のステップ

1. 既存 Lake Formation テーブル構成の確認
2. Amazon EMR 7.13以降へのアップグレード評価
3. Spark/Trino ジョブでのファイルレベルアクセス検証
4. セキュリティ・監査ポリシーの見直し

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lake-formation-access-data-amazon-s3
- **Lake Formation ドキュメント**: https://docs.aws.amazon.com/lake-formation/latest/dg/accessing-s3-locations.html
- **Amazon EMR ドキュメント**: https://docs.aws.amazon.com/emr/latest/ManagementGuide/lake-formation-path-based-credential-vending.html
- **API リファレンス**: https://docs.aws.amazon.com/boto3/latest/reference/services/lakeformation/client/get_temporary_data_location_credentials.html
- **オープンソースプラグイン**: https://github.com/aws/aws-lakeformation-accessgrants-plugin-java-v2

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**