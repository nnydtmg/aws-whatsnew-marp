# Amazon ElastiCache now supports real-time aggregations

**カテゴリ:** What's New
**公開日:** 2026-05-06
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-elasticache-aggregations/](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-elasticache-aggregations/)

---

## 要約

Amazon ElastiCacheは、キャッシュ内でリアルタイム集約クエリを実行できる新機能をサポートするようになりました。この機能は、マイクロ秒単位のレイテンシーでテラバイト規模のデータを集計でき、e-commerceストリーミングサービス、AIパーソナライゼーション、運用ダッシュボードなど、リアルタイムインサイトが必要なアプリケーションに最適です。

## 詳細

### 主な特徴

- **リアルタイム集約クエリ機能**: 開発者はキャッシュ内で直接フィルタリング、グループ化、データ変換、および集計を単一のクエリで実行可能
- **超低レイテンシー**: マイクロ秒単位の低レイテンシーでテラバイト規模のデータに対して集約クエリを実行
- **一貫性**: 結果は完了した書き込みを反映しており、最新のデータに基づいている
- **アーキテクチャ簡素化**: メモリ内で直接集約を実行することにより、複雑さを軽減し応答時間を改善

### 対応ユースケース

- **ファセットナビゲーション**: カテゴリーカウント、ロールアップ、リーダーボード
- **リアルタイムインサイト**: トレンドコンテンツ、人気カテゴリー、トップパフォーマンスアイテム
- **エンタープライズ機能**: AI駆動のパーソナライゼーション、運用ダッシュボード

### 提供範囲と要件

- すべての商用AWSリージョン、AWSガバメントクラウド、中国リージョンで利用可能
- ElastiCache バージョン9.0以上のValkey上で利用
- 追加費用なしで利用可能
- Valkeyはオープンソースで、Redisの最も許容性の高いベンダーニュートラルな代替手段

### ビジネスインパクト

- **コスト効率**: 追加インフラ投資なしでリアルタイム集約機能を実装
- **パフォーマンス**: マイクロ秒単位のレイテンシーでテラバイト規模のデータを処理
- **スケーラビリティ**: 大規模なデータセットへの効率的な対応
- **開発効率**: 複雑な集計ロジックが単一クエリで実現可能

---

## 関連情報

### Valkeyプラットフォーム
Amazon ElastiCache for Valkey 9.0は以下の機能を含みます:
- リアルタイム全文検索、完全一致検索、範囲検索
- 集約クエリ機能（本リリース）
- Redis OSS比で最大20%コスト削減、40%パフォーマンス向上を実現

### 参考リンク
- [Announcing Valkey 9.0 for Amazon ElastiCache](https://aws.amazon.com/about-aws/whats-new/2026/05/valkey-amazon-elasticache/)
- [AWS Database Blog - Valkey 9.0](https://aws.amazon.com/blogs/database/announcing-valkey-9-0-for-amazon-elasticache/)
- [Amazon ElastiCache Documentation](https://docs.aws.amazon.com/elasticache/)
