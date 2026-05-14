# Amazon Aurora DSQLがChange Data Capture（CDC）をサポート

Amazon Aurora DSQL now supports change data capture (Preview)

**カテゴリ:** What's New
**公開日:** 2026-05-14
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-aurora-dsql-change-data-capture-preview/)

このページでは、AWS What's Newで発表された「Amazon Aurora DSQL now supports change data capture (Preview)」の内容を日本語で要約しています。

---

## 要約

Amazon Aurora DSQLのChange Data Capture（CDC）機能により、データベースの変更をリアルタイムでAmazon Kinesis Data Streamsにストリーミングできるようになりました。このアップデートにより、カスタムパイプラインの構築が不要になり、イベント駆動型アプリケーション、リアルタイム分析パイプライン、マイクロサービス間のデータ同期を実現する組織に最適なソリューションです。

---

## このアップデートで何が変わったか

### 新機能：Change Data Capture

- **リアルタイムストリーミング**: Insert、Update、Delete操作を自動的にキャプチャし、変更イベントとして配信
- **マネージド型**: インフラストラクチャのセットアップが不要で、データベースのワークロードへの影響がゼロに設計
- **統合の容易さ**: Amazon Kinesis Data Streamsへ直接ストリーミング可能

### ダウンストリーム処理の活用

- **マイクロサービス間データ同期**: 複数サービス間でリアルタイムにデータを同期
- **Lambda統合**: AWS Lambdaでのカスタムダウンストリーム処理
- **分析パイプライン**: Amazon Data Firehose経由で以下へ配信
  - Amazon S3（データレイク）
  - Amazon Redshift（データウェアハウス）
  - Amazon OpenSearch Service（検索・分析）

---

## 技術詳細

### 対応操作

- **INSERT**: 新規レコード追加がキャプチャされ、変更イベントとして配信
- **UPDATE**: 既存レコード変更が追跡され、変更前後の状態を記録
- **DELETE**: レコード削除が記録され、削除前の状態を保持

### 利用可能な地域

- Aurora DSQLが利用可能なすべてのAWSリージョンで利用可能
- マルチリージョンクラスタへの対応も計画中

### 課金モデル

- **DPU（Distributed Processing Units）ベース**: キャプチャされたデータ量に基づいて課金
- **Kinesis Data Streams別途**: ストリーミングサービス自体の料金は別途適用
- **プレビュー価格**: 将来的に確定する予定

### 現在のステータス

- **プレビュー段階**: 継続的な改善と機能追加が予定されている
- **本番提供予定**: GA（General Availability）への遷移待機中

---

## ユースケース

### 1. マイクロサービスアーキテクチャ

**課題**: 複数のマイクロサービス間でのデータ同期が複雑

**解決策**: CDCにより、データベース変更を自動的に他のサービスに配信

- 強い依存関係を排除
- イベント駆動型アーキテクチャが実現
- スケーラブルなシステム設計が可能

### 2. リアルタイム分析パイプライン

**課題**: 分析データベースの鮮度が低い、バッチ処理のレイテンシ

**解決策**: CDCでRedshiftやOpenSearchにリアルタイムでデータ配信

- ダッシュボード・検索結果の即時性向上
- ビジネスインテリジェンスの精度向上
- 意思決定の質が改善

### 3. イベント駆動型アプリケーション

**課題**: 複雑なイベントハンドリング、複数システムへの同期通知

**解決策**: Lambdaでカスタム処理をトリガー、複数サービスへ配信

- 柔軟なパイプライン構築
- 拡張性の高いアーキテクチャ
- メンテナンス性の向上

---

## メリット

### 開発効率

✅ カスタムストリーミングパイプラインの構築が不要
✅ AWS SDKを使用した標準化されたアプローチ
✅ 既存PostgreSQLスキルの活用

### 運用効率

✅ インフラストラクチャの管理が不要（フルマネージド）
✅ 自動スケーリング対応
✅ AWS統合監視・ログ機能の活用

### パフォーマンス

✅ ゼロインパクト設計：ワークロードへの影響なし
✅ リアルタイムストリーミング：低レイテンシ
✅ スケーラビリティ：DPUベースの自動スケーリング

### コスト最適化

✅ 使用量ベースの課金（DPU）
✅ インフラ管理コストの削減
✅ 不要なカスタム開発の回避

---

## 注意事項

### プレビュー段階での制限

- 本番環境での使用は検証後に推奨
- API・料金は変更される可能性あり
- サポート対象は段階的に拡大予定

### 今後の改善予定

- マルチリージョンクラスタへの対応拡張
- 追加のフィルタリング・変換機能
- 料金体系の最適化

---

## 参考リソース

### AWS公式ドキュメント

- **AWS What's New記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-aurora-dsql-change-data-capture-preview/
- **Getting Started（セットアップ）**: https://docs.aws.amazon.com/aurora-dsql/latest/userguide/cdc-setup.html
- **AWS Database Blog（詳細解説）**: https://aws.amazon.com/blogs/database/getting-started-with-change-data-capture-in-amazon-aurora-dsql/

### 関連AWS サービス

- **Amazon Aurora DSQL**: https://docs.aws.amazon.com/aurora-dsql/latest/userguide/what-is-aurora-dsql.html
- **Amazon Kinesis Data Streams**: https://aws.amazon.com/kinesis/data-streams/
- **AWS Lambda**: https://aws.amazon.com/lambda/
- **Amazon Data Firehose**: https://aws.amazon.com/kinesis/data-firehose/
- **Amazon Redshift**: https://aws.amazon.com/redshift/
- **Amazon OpenSearch Service**: https://aws.amazon.com/opensearch-service/

---

## 関連トピック

- Amazon Aurora DSQL の基本機能
- PostgreSQL互換性とのギャップ分析
- マルチリージョン構成の設計
- イベント駆動型アーキテクチャのベストプラクティス
- AWS Lambda との統合パターン

---

*このドキュメントは AWS What's New の情報を基に作成されました。*
*最新情報は公式ドキュメントをご確認ください。*