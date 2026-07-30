# Amazon MSK Express ブローカーから Amazon S3 への Apache Kafka データ配信がサポート開始

**元の英語タイトル:** Amazon MSK Express brokers now delivers Apache Kafka data to Amazon S3

**カテゴリ:** What's New  
**公開日:** 2026-07-30  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-express-brokers-delivers-to-amazon-s3)

---

## 要約

Amazon MSK Express ブローカーに Apache Kafka データを Amazon S3 に自動配信する完全マネージド型機能が追加されました。このアップデートにより、自己管理型ソリューション比で最大 60% のコスト削減と大幅な運用負荷軽減が実現できるようになりました。

---

## このアップデートで何が変わったか

### 主な機能追加

- **完全マネージド型 S3 配信機能**: Apache Kafka データを Amazon S3 に直接配信
- **高スループット対応**: 毎秒最大 10 GB/s のスループットをサポート
- **自動スケーリング**: キャパシティ管理、リトライ、バックプレッシャー管理が自動処理
- **ルーチン操作の自動化**: バージョンアップグレードやキャパシティスケーリング中も配信ギャップなし

### 主な利点

- **コスト削減**: 自己管理型コネクタソリューション比で最大 60% 削減
- **運用負荷軽減**: コネクタフリートの管理が不要
- **インフラコスト削減**: 追加ブローカー出力スループットをプロビジョニング不要
- **信頼性向上**: ミッションクリティカルなワークロードにもエンドツーエンド信頼性
- **グローバル対応**: すべての AWS リージョンで利用可能

---

## 解決される課題

### 従来の問題点

1. **複雑な運用**: 自己管理型 S3 コネクタは、スケール時にコストと複雑性が増加
2. **プラグイン管理**: S3 コネクタプラグインの保守とセキュリティ承認が必要
3. **セキュリティ更新**: コネクタフリート全体でのパッチ適用が継続的に必要
4. **スケーリング負荷**: キャパシティ計画と管理の運用負担が大きい

### 新しいアプローチ

- すべてのスケーリング、リトライ、バックプレッシャー管理を AWS が自動処理
- チーム間の調整が不要、運用を完全に AWS に委譲
- 実ワークロード需要に応じた柔軟なスケーリング

---

## 活用シーン

### 1. ログアーカイブ・コンプライアンス保持

- Kafka トピックからのログを S3 に自動アーカイブ
- コンプライアンス規制要件への対応
- 監査ログの確実な保持

### 2. AI/ML モデルトレーニング

- リアルタイムストリーミングデータを S3 に配信
- SageMaker や他の ML サービスとの連携
- 大規模データセットの自動準備

### 3. Kafka データリプレイ

- 過去のデータを S3 から再処理
- トラブルシューティングと分析
- ディザスタリカバリー戦略の実装

### 4. データレイク・Lake House の構築

- リアルタイムデータの自動配信
- Lake Formation との統合
- エンタープライズデータガバナンスの実現

### 5. リアルタイムデータパイプライン

- 複数の Kafka クラスタからの統合配信
- ハイブリッド・マルチクラウド環境への対応
- ストリーミング ETL パイプラインの実装

---

## 詳細

### 技術仕様

#### パフォーマンス特性

- **最大スループット**: 毎秒 10 GB/s
- **信頼性**: エンドツーエンドの配信保証
- **ルーチン操作**: 配信ギャップなしで自動実行

#### 機能詳細

- **自動スケーリング**: キャパシティは需要に応じて自動調整
- **リトライメカニズム**: 失敗したデータ配信を自動的に再試行
- **バックプレッシャー管理**: 下流システムの負荷に対応する流量制御
- **プロアクティブな管理**: キャパシティスケーリング、バージョンアップ中も継続動作

#### アーキテクチャ利点

- 追加ブローカー出力スループット不要
  - 既存 MSK Express ブローカーの出力を直接利用
  - インフラストラクチャコストの増加がない
- 実需要ベースのスケーリング
  - ピーク予測ではなく、実ワークロードに応じて自動調整
  - コスト効率と柔軟性が両立

### コスト効率

#### コスト削減の主要要因

1. **運用コスト削減**: コネクタフリートの管理、メンテナンス、セキュリティ更新が不要
2. **インフラコスト削減**: 追加ブローカー出力スループットのプロビジョニング不要
3. **スケーリング効率**: 実需要に応じた柔軟なスケーリング
4. **人的リソース削減**: 自動化による運用工数の削減

#### 削減効果

- 自己管理型ソリューション比で **最大 60% のコスト削減**
- スケールが大きいほど削減効果が顕著

---

## 利用可能な地域

- **グローバル対応**: Amazon MSK Express ブローカーが提供されているすべての AWS リージョンで利用可能
- リージョン別のドキュメント: AWS グローバルインフラストラクチャページを参照

---

## 関連サービスとの統合

### Amazon MSK Replicator との連携

- 外部 Apache Kafka クラスタから MSK Express への複製と S3 配信のシームレス統合
- ハイブリッド環境やマルチクラウド環境での活用が拡大

### Apache Iceberg ストリーミングテーブルとの統合

- S3 に配信されたデータを自動的に Iceberg テーブル化
- 小ファイル問題の自動解決（intelligent inline compaction）
- 分析クエリのコスト最大 30% 削減
- 並行書き込みの自動調整

### AWS の他のサービスとの利用

- **Amazon Athena**: S3 データのクエリ
- **Amazon Redshift Spectrum**: 大規模な分析
- **AWS Glue**: データカタログとメタデータ管理
- **AWS Lake Formation**: データガバナンス
- **Amazon SageMaker**: ML モデルトレーニング

---

## 参考リンク

### 公式ドキュメント

- [AWS What's New - Amazon MSK Express brokers now delivers Apache Kafka data to Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-express-brokers-delivers-to-amazon-s3)
- [Amazon MSK Developer Guide - MSK Data Delivery](https://docs.aws.amazon.com/msk/latest/developerguide/msk-data-delivery.html)
- [Amazon MSK 料金ページ](https://aws.amazon.com/msk/pricing/)
- [Amazon MSK AI skills on GitHub](https://github.com/aws/agent-toolkit-for-aws/tree/main/skills/specialized-skills/analytics-skills/managing-amazon-msk)

### 関連ニュース

- [MSK Replicator now supports replication from external Apache Kafka clusters to MSK Express Brokers](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-msk-replicator-external-kafka-cluster-support) (2026年4月)
- [Amazon MSK Express Brokers adds support for Apache Kafka version 4.2](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-express-version-42) (2026年7月15日)
- [Amazon MSK Express brokers now deliver data to streaming tables for Apache Iceberg](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-streaming-tables-for-apache-iceberg) (2026年7月)

### 関連サービス

- [Amazon MSK (Managed Streaming for Apache Kafka)](https://aws.amazon.com/msk/)
- [Amazon MSK Express ブローカー](https://aws.amazon.com/msk/features/express-brokers-for-amazon-msk/)
- [Apache Kafka](https://kafka.apache.org/)
- [Amazon S3](https://aws.amazon.com/s3/)
- [Apache Iceberg](https://iceberg.apache.org/)

---

## 更新履歴

- **2026-07-30**: 初版公開