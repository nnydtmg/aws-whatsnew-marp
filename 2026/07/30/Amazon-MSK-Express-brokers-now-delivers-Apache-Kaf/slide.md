---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon MSK Express ブローカーから Amazon S3 への Apache Kafka データ配信がサポート開始

Amazon MSK Express brokers now delivers Apache Kafka data to Amazon S3

**発表日: 2026年7月30日**

---

## 概要

### Amazon MSK Express が Amazon S3 への直接配信に対応

- **完全マネージド型機能** が追加され、Apache Kafka データを Amazon S3 に自動配信
- 自己管理型ソリューション比で **最大 60% のコスト削減** を実現
- 運用負荷が大幅に軽減され、エンジニアリング効率が向上
- **毎秒最大 10 GB/s** のスループットで、ミッションクリティカルなワークロードに対応

---

## 前提・背景

### 従来の課題

- **複雑な管理**: 自己管理型コネクタの運用は複雑で、スケールが進むにつれコスト増加
- **プラグイン管理**: S3 コネクタプラグインの保守、セキュリティ承認の取得が必要
- **セキュリティ更新**: コネクタフリート全体でセキュリティパッチを継続的に適用
- **スケーリング負荷**: キャパシティ計画とプロビジョニングの運用負担

### 顧客のニーズ

- ログアーカイブ、コンプライアンス保持
- Kafka データの再生・リプレイ
- AI/ML モデルトレーニング用データの大規模配信
- リアルタイムデータパイプラインの自動化

---

## 変更内容・新機能

### 完全マネージド型 S3 配信

- **自動スケーリング**: キャパシティ管理が完全に自動化
- **リトライ処理**: 信頼性の高い配信を自動的に確保
- **バックプレッシャー管理**: 自動的に負荷を制御

### パフォーマンス特性

- **スループット**: 毎秒最大 10 GB/s (GB/s) に対応
- **信頼性**: エンドツーエンドの信頼性を保証
- **運用性**: ルーチン操作（スケーリング、バージョンアップ）が配信ギャップなく自動実行

### 利点

- **追加スループット不要**: ブローカーの追加出力スループットをプロビジョニングしない
- **インフラコスト削減**: 追加インフラコストが発生しない
- **柔軟なスケーリング**: ピーク予測ではなく、実ワークロード需要に応じたスケーリング

---

## 効果・メリット

### コスト削減

- 自己管理型ソリューションと比較して **最大 60% のコスト削減**
- 追加ブローカー出力スループット不要
- インフラストラクチャコストの増加なし
- 実際の需要に応じたスケーリングで無駄を排除

### 運用効率化

- **コネクタフリート管理が不要**: チーム間の調整が不要
- **セキュリティパッチの自動適用**: 継続的なメンテナンス負荷が軽減
- **配信ギャップなし**: ルーチン操作中も安定した配信

### 信頼性向上

- ミッションクリティカルなワークロードに対応
- エンドツーエンド信頼性を保証
- 毎秒 10 GB/s の高スループット対応

---

## ユースケース

### 1. ログアーカイブ・コンプライアンス

- Kafka トピックから S3 への自動ログアーカイブ
- コンプライアンス要件を満たす確実なデータ保持
- 監査トレイルの構築

### 2. AI/ML モデルトレーニング

- 大規模なトレーニングデータセットの準備
- S3 にデータを配信し、SageMaker との連携
- データパイプラインの自動化

### 3. Kafka データリプレイ

- 過去のデータを S3 から再処理
- 分析やデバッグの実施
- ディザスタリカバリー

### 4. データレイク構築

- リアルタイムストリーミングデータの Lake House 化
- Lake Formation との統合
- データガバナンスの強化

---

## 利用可能な地域

- **すべての AWS リージョン** で Amazon MSK Express ブローカーが提供されている場所で利用可能
- グローバルな展開が可能
- リージョン間のデータレプリケーションにも対応

---

## 関連機能との組み合わせ

### MSK Replicator との連携

- 外部 Kafka クラスタからの複製と S3 配信のシームレス統合
- ハイブリッド・マルチクラウド環境への対応

### Apache Iceberg ストリーミングテーブルとの統合

- S3 に配信されたデータを Iceberg テーブル化
- 小ファイル問題の自動解決
- 分析クエリの効率化（コスト 30% 削減）

---

## まとめ

### Amazon MSK Express S3 配信の位置付け

- **完全マネージド型** で、運用負荷を大幅に軽減
- **最大 60% のコスト削減** を実現
- **エンドツーエンド信頼性** でミッションクリティカルなワークロード対応
- **すべての AWS リージョン** でグローバルに利用可能

### 次のステップ

1. 既存の S3 配信パイプラインの評価
2. 自己管理型コネクタとのコスト比較
3. Amazon MSK Express への移行計画
4. パイロットプロジェクトの実施

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: [Amazon MSK Express brokers now delivers Apache Kafka data to Amazon S3](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-express-brokers-delivers-to-amazon-s3)
- **Amazon MSK Developer Guide**: https://docs.aws.amazon.com/msk/latest/developerguide/msk-data-delivery.html
- **Amazon MSK 料金ページ**: https://aws.amazon.com/msk/pricing/

### 関連発表

- [MSK Replicator now supports replication from external Apache Kafka clusters to MSK Express Brokers](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-msk-replicator-external-kafka-cluster-support)
- [Amazon MSK Express Brokers adds support for Apache Kafka version 4.2](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-express-version-42)
- [Amazon MSK Express brokers now deliver data to streaming tables for Apache Iceberg](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-streaming-tables-for-apache-iceberg)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**