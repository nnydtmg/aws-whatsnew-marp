# Amazon ElastiCache now supports real-time full-text, exact-match, and numeric range search

**カテゴリ:** What's New
**公開日:** 2026-05-06
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-elasticache-enchanced-search/](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-elasticache-enchanced-search/)

---

## 要約

Amazon ElastiCacheは、Valkey 9.0以上で全文検索、完全一致検索、数値範囲検索をネイティブにサポートするようになり、マイクロ秒単位の低遅延でテラバイト単位のデータを検索できるようになりました。この更新は、ユーザーセッション、製品在庫、トランザクションレコードなど、頻繁に更新されるデータセットをリアルタイムで検索する必要があるアプリケーション開発者に最適です。

## 詳細

### 新機能

1. **全文検索機能**
   - プレフィックス、サフィックス、あいまい一致をサポート
   - e-コマースプラットフォームでの製品発見に最適
   - 複数語検索（近接マッチング）に対応

2. **完全一致検索機能**
   - ユーザー名、コンテンツID、ジャンルなどの正確な値による即座のレコード検索
   - ストリーミングおよびゲーミングアプリケーションに最適

3. **数値範囲クエリ機能**
   - トランザクション金額、日付範囲、プレイヤースコアでのフィルタリング
   - 金融アプリケーションおよびリーダーボードに最適
   - リアルタイム更新に対応

### パフォーマンス

- **応答時間**: マイクロ秒単位の低遅延
- **スループット**: 毎秒数百万の検索操作に対応
- **データ規模**: テラバイト単位のデータを検索可能
- **リアルタイム性**: 書き込み完了後すぐに検索可能

### 対応環境

- ElastiCache version 9.0以上のValkey対応クラスタ
- すべての商用AWSリージョン
- AWS GovCloud（US）リージョン
- 中国リージョン
- **追加費用: なし**

### ユースケース

1. **e-コマース**: 価格、カテゴリ、レビューを組み合わせた製品検索
2. **ストリーミング・ゲーミング**: ユーザーセッション、コンテンツの即座検索
3. **金融**: トランザクション検索、リアルタイムリーダーボード
4. **インベントリ管理**: 在庫レベルのリアルタイムフィルタリング

### 利用開始方法

1. 新しいValkey 9.0以上のクラスタを作成
2. 既存クラスタをValkey 9.0以上にアップグレード
3. AWS Management Console、AWS SDK、またはAWS CLIで実施

### 技術的特徴

- Valkey: オープンソース、ベンダーニュートラルなRedis代替
- ハイブリッドクエリ対応: テキスト、タグ、数値、ベクトル検索を組み合わせ可能
- 既存Redisアプリケーションからの容易な移行

### メリット

- 独立した検索サービスが不要 → 運用コスト削減
- マイクロ秒単位の低遅延 → ユーザー体験向上
- スケーラビリティ → 毎秒数百万クエリに対応
- 追加費用なし → コスト効率的

---

## 関連リンク

- **AWS Database Blog**: https://aws.amazon.com/blogs/database/enhanced-search-for-amazon-elasticache/
- **Valkey 公式ブログ**: https://valkey.io/blog/valkey-search-1_2/
- **ElastiCache ドキュメント**: https://docs.aws.amazon.com/elasticache/
- **Valkey 公式サイト**: https://valkey.io/