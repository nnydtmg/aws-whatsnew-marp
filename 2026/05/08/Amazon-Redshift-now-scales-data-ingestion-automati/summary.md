# Amazon Redshift now scales data ingestion automatically with concurrency scaling for batch workloads

**カテゴリ:** What's New
**公開日:** 2026-05-07T02:06:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/concurrencyscaling-support-for-copy](https://aws.amazon.com/about-aws/whats-new/2026/05/concurrencyscaling-support-for-copy)

---

## 要約

Amazon Redshift は、Amazon S3 からの COPY クエリに対する同時実行スケーリングをサポートすることで、取り込み速度とクエリパフォーマンスを両立させながら、バッチワークロードの自動スケーリングを実現しました。リアルタイム分析、継続的な ETL、高頻度レポーティングなどの時間に敏感なデータ操作を行う組織にとって、ピーク需要時の取り込みボトルネック解消に有効です。

## 詳細

### 新機能の概要

- Amazon Redshift は、Amazon S3 からの COPY クエリに対して同時実行スケーリングを拡張し、バッチワークロードの高ボリュームデータ取り込みをサポートするようになりました。

- 新機能により、データパイプラインは取り込み速度とクエリパフォーマンスの間で選択する必要がなくなり、ピーク需要時でも両立が可能になりました。

### 技術的特徴

- **対応ファイル形式**: Parquet および ORC ファイル形式に対応した COPY クエリの同時実行スケーリングにより、キューイング遅延なく複数ファイルを同時にロードできるようになりました。

- **自動スケーリング**: 手動クラスタサイズ変更やワークロードスケジューリングは不要で、Amazon Redshift Serverless では需要に基づいて自動的に有効化・無効化されます。

### 提供範囲

- **リージョン**: AWS の全商用リージョンおよび AWS GovCloud (US) リージョン
- **対応サービス形態**: Amazon Redshift Serverless とプロビジョニング型データウェアハウスの両方で一般提供されています。

### 導入の容易さ

- 移行や設定変更は不要で、同時実行スケーリングを有効にするだけで取り込みワークロードが即座に利益を得られます。

## ビジネス価値

### メリット

1. **パフォーマンス向上**: 複数ファイルの並行ロード、キューイング遅延ゼロ
2. **運用効率化**: 手動操作削減、自動スケーリング対応
3. **コスト最適化**: 不要な手動スケーリングの削減
4. **スケーラビリティ向上**: ピーク負荷への対応能力向上

### 活用シーン

- **リアルタイム分析**: 営業成績ダッシュボード、分析レポートの即座の更新
- **継続的 ETL**: 複数形式ファイルの同時処理、パイプライン全体の高速化
- **高頻度レポーティング**: POS データなど店舗データの定期集約・レポート化

## 対応デバイス・環境

- Amazon Redshift Serverless: 完全対応
- Amazon Redshift プロビジョニング型: 完全対応
- すべての AWS 商用リージョン
- AWS GovCloud (US) リージョン

## 注意事項・制限事項

- 既存のクエリやアプリケーションの変更は不要
- 現在のデータパイプラインへの影響なし
- 別途追加コスト（同時実行スケーリング料金は既存の課金体系を継続）

## 参考資料

- [AWS What's New - Amazon Redshift 同時実行スケーリング](https://aws.amazon.com/about-aws/whats-new/2026/05/concurrencyscaling-support-for-copy)
- [Amazon Redshift 同時実行スケーリングドキュメント](https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html)
- [Amazon Redshift COPY コマンドリファレンス](https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html)
- [Amazon S3 ドキュメント](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
