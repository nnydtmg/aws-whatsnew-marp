# Amazon Bedrock AgentCore Runtime now supports bring-your-own file system from Amazon S3 Files and Amazon EFS

**カテゴリ:** What's New  
**公開日:** 2026-05-06  
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-bedrock-agentcore-runtime/

---

## 要約

Amazon Bedrock AgentCore Runtimeは、Amazon S3 FilesおよびAmazon EFSからのファイルシステムの持ち込みをサポートするようになり、開発者はカスタムコードなしで複数のセッションやエージェント間でデータを共有・永続化できるようになりました。このアップデートは、共有リソースの管理を簡素化し、複数のエージェント間での協業パターンを実現したい開発者に適しています。

---

## 詳細

### 新機能について

- **Amazon Bedrock AgentCore Runtimeが、Amazon S3 FilesおよびAmazon EFSからのファイルシステムの持ち込みに対応**
  - 開発者がAmazon S3 FilesおよびAmazon EFSアクセスポイントをエージェントランタイムに直接アタッチできます

- **標準的なファイル操作でのアクセス**
  - ファイルシステムは指定されたパスにセッションごとにマウント
  - エージェントは標準的なファイル操作でファイルの読み書きが可能

- **セットアップの簡素化**
  - カスタムマウントコード不要
  - 特権コンテナ不要
  - エージェント起動前のダウンロードオーケストレーション不要

- **Amazon S3 Filesの特徴**
  - 標準的なファイル操作とS3 APIの両方でアクセス可能
  - 変更は自動的に同期される

- **Amazon EFSアクセスポイントの特徴**
  - 専定の共有NFSファイルシステムを提供
  - 複数セッション・エージェント間での共有に最適

- **パフォーマンス**
  - アクティブデータに対してsub-millisecondのレイテンシー
  - NFSクローズ・トゥ・オープン一貫性をサポート
  - マルチTB/sの読み込みスループット

### このアップデートが適している対象者

- **スキル・テンプレート・データセット読み込みが必要な開発者**
  - セッション開始時にスキル、プロンプトテンプレート、またはキュレーションされたデータセットを読み込みたい

- **複数セッション・エージェント間でのデータ共有が必要な開発者**
  - 複数のセッションやエージェント間でデータセットを共有・協業させたい

- **長時間ワークフローの状態保護が必要な開発者**
  - 長時間実行されるワークフローで中間結果を永続化
  - 将来のセッションで作業を再開したい

- **既存リソースの統一管理が必要な開発者**
  - 既存のスキル、ツールライブラリ、参照データセット、ナレッジベース、プロジェクトファイルをエージェント間で利用可能にしたい

---

## ユースケース

### 1. エンタープライズナレッジベースの共有
- 組織全体のナレッジベースを複数のエージェント間で共有
- セッション間でのナレッジアクセスの継続性を保証

### 2. RAG パイプラインの最適化
- S3 Files でデータレイクに直接アクセス
- ステージング処理を排除、低レイテンシー実現

### 3. マルチエージェント協業
- 複数エージェント間での状態共有
- 複雑なタスクの分散実行

### 4. 長期プロジェクト管理
- セッション終了後も進捗・成果物を保護
- 中断・再開の円滑な切り替え

---

## メリット

### 開発効率向上
- カスタムストレージコード不要
- 既存ツール（git、npm、pip など）との互換性
- プロトタイプから本番運用への移行が容易

### 運用コスト削減
- データ複製の排除
- ストレージ間の同期パイプライン廃止
- セッション終了時のデータロスト防止

### スケーラビリティ
- 数千の並行エージェント・セッション実行可能
- S3 バケットのスケーラビリティをフル活用
- 企業規模の AI エージェント環境構築

---

## 利用開始

### 必要な準備

1. **VPC 設定**: AgentCore Runtime を VPC 内で設定
2. **アクセスポイント準備**: S3 Files または EFS アクセスポイント ARN を用意
3. **IAM 権限**: 実行ロールに必要な権限を付与
   - s3files:ClientMount, s3files:ClientWrite, s3files:ClientRootAccess (S3 Files の場合)
   - elasticfilesystem:ClientMount, elasticfilesystem:ClientRootAccess (EFS の場合)
   - s3:GetObject, s3:ListBucket (S3 Files アクセス用)

### 対応リージョン

- **15 の AWS リージョン** で利用可能
- 詳細: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-regions.html

---

## 参考リソース

- **AWS What's New 記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-bedrock-agentcore-runtime/
- **AgentCore Runtime ドキュメント - ファイルシステム設定**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-filesystem-configurations.html
- **AgentCore Runtime 一般ドキュメント**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/
- **Amazon S3 Files**: https://aws.amazon.com/s3/s3-files/
- **AWS Builder Center - S3 Files with AgentCore Runtime**: https://builder.aws.com/content/2yHZdNBPpoWVzg0DbI3LeUcmreu/using-s3-files-with-agentcore-runtime-shared-persistent-storage-for-ai-agents
- **LinkedIn - Peiyao Li の投稿**: https://www.linkedin.com/posts/peiyaoli_amazonbedrock-agentcore-generativeai-activity-7442398962780708864-eSwB
