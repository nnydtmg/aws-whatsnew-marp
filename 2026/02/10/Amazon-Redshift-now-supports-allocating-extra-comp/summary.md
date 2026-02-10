# Amazon Redshift now supports allocating extra compute for automatic optimizations

**カテゴリ:** What's New
**公開日:** 2026年2月9日
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-redshift-allocate-extra-compute-for-automatic-optimizations](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-redshift-allocate-extra-compute-for-automatic-optimizations)

---

## 要約

Amazon Redshiftは、ユーザーワークロードに影響を与えることなく自動最適化機能を実行するための追加コンピュートリソースの割り当てをサポートするようになりました。データベース管理者は、コスト管理機能を活用しながら、手動スケジュールなしに自動テーブル最適化やバキューム、分析などの操作を効率的に実行できるようになります。

---

## 詳細

### 1. 自動最適化機能（Autonomics）の専用リソース

- Amazon Redshiftは、自動最適化機能（autonomics）のための追加コンピュートリソースの割り当てをサポートするようになりました
- ユーザーワークロードと独立した計算リソースを確保し、パフォーマンス影響を完全排除

### 2. 対応する最適化操作

- **自動テーブル最適化（ATO）**: テーブルの物理レイアウトを最適化
- **自動テーブルソート（ATS）**: ソートキーの順序を自動保持
- **自動バキューム**: 削除済み行領域を自動クリーンアップ
- **自動分析**: テーブル統計を自動更新
- データベース管理者は、ユーザーアクティビティが高い期間でも、これらの最適化を手動でスケジュールする必要がなくなりました

### 3. コスト管理機能

- プロビジョニングされたクラスターに対するコスト管理機能により、データベース管理者はautonomicsで利用可能なリソース量を制限できるようになりました
- リソース上限を設定することで、予測可能な支出管理が実現

### 4. 監視と可視化

- 新しいSYS_AUTOMATIC_OPTIMIZATIONシステムテーブルにより、プロビジョニングされたクラスターとサーバーレスワークグループの両方のautonomics操作に関する詳細情報が提供されます
- 使用量メトリクス、課金情報の詳細なトラッキング

### 5. 利用可能範囲

- この機能は、Amazon RedshiftがサポートされているすべてのAWSリージョンで利用可能です
- プロビジョニングクラスター、サーバーレスワークグループの両方で対応

---

## ビジネス上の利点

### 運用効率

- **自動化**: 手動スケジューリング不要により、DBA作業を大幅削減
- **24時間運用**: 常時安定した最適化を無人で実行可能
- **エラー削減**: 人為的なスケジューリング誤り排除

### パフォーマンス

- **影響ゼロ**: ユーザークエリのパフォーマンスに一切影響なし
- **品質安定化**: テーブル統計を常時最新化
- **スケーラビリティ**: 拡大するデータに対応

### コスト最適化

- **予測可能性**: リソース上限設定で支出管理
- **効率向上**: 追加ノード購入不要
- **可視化**: SYS_AUTOMATIC_OPTIMIZATIONテーブルで実コスト把握

---

## 今後の推奨アクション

1. **現状評価**: 既存Redshiftクラスターでautonomicsの効果を測定
2. **リソース計画**: 割り当てるコンピュート量の決定
3. **テスト環境**: 非本番環境での検証
4. **監視設定**: SYS_AUTOMATIC_OPTIMIZATIONテーブルの監視体制構築
5. **本番展開**: 段階的な本番環境への適用

---

## 関連リンク

- **Autonomics 使用メトリクス**: https://docs.aws.amazon.com/redshift/latest/dg/t_autonomics-usage-metrics.html
- **Autonomics 課金情報**: https://docs.aws.amazon.com/redshift/latest/dg/t_autonomics-billing.html
- **自動最適化基礎**: https://docs.aws.amazon.com/redshift/latest/dg/c_autonomics.html
- **マルチクラスター対応**: https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-redshift-autonomics-for-multi-cluster
