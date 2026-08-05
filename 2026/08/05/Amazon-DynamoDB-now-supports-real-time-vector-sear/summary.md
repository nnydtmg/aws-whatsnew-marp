# Amazon DynamoDB リアルタイムベクトル検索が一般提供開始

**元の英語タイトル**: Amazon DynamoDB now supports real-time vector search at any scale

**カテゴリ**: AWS Blog
**公開日**: 2026-08-05
**元記事**: https://aws.amazon.com/blogs/aws/amazon-dynamodb-now-supports-real-time-vector-search-at-any-scale/

---

## 要約

Amazon DynamoDBがベクトル検索機能の一般提供を開始しました。これまで別のベクトルストアにデータを複製する必要があったのに対し、DynamoDB内で運用データとベクトル埋め込みを一緒に保存し、効率的に検索できるようになりました。

本機能により、以下のメリットが得られます：
- シングル桁ミリ秒のレイテンシーで99%以上の再現率
- 数兆個のベクトルまでスケーリング可能
- 別システム管理の廃止によるコスト削減
- データ同期パイプラインの不要化

---

## このアップデートで何が変わったか

### 1. 統合ストレージ

従来:
```
DynamoDB（運用データ）+ 別のベクトルDB（ベクトル埋め込み）
→ 2つのシステム管理、データ同期パイプライン必須
```

現在:
```
DynamoDB（運用データ + ベクトル埋め込み）
→ シングルシステム、同期不要、コスト削減
```

### 2. パフォーマンス

- **レイテンシー**: シングル桁ミリ秒
- **再現率**: 99%以上
- **スケール**: 数兆個のベクトルに対応
- **ストレージ**: 制限なし、自動水平スケーリング

### 3. 運用の簡素化

- サーバーレス: プロビジョニング、パッチ、管理不要
- ゼロダウンタイム: 定期メンテナンスが透過的
- 標準データ型: 新しいスキーマ変更不要（List型のNumber要素）

---

## 主な機能

### ベクトル検索の設定

- **最大4096次元** のベクトル対応
- **3つの距離関数**:
  - ユークリッド距離: ベクトル間の直線距離
  - コサイン距離: ベクト間の角度（テキスト埋め込みに有効）
  - ドット積: スカラープロダクト

### インライン フィルタリング

- クエリ時に非ベクトル属性で結果を絞り込み可能
- 例: 「category = footwear AND marketplace = US」
- 正確値一致のみサポート（BETWEEN等の範囲条件は非サポート）

### パーティショニング

- ベクトルインデックスにパーティションキーを指定可能
- 大規模データセットで予測可能なレイテンシーを実現
- 各検索は単一パーティション内に限定

### 属性プロジェクション

- 検索結果に返却するテーブル属性を指定
- 全属性または限定した属性を選択可能
- 検索結果に名前、価格など運用データも含まれる

---

## 実装ステップ

### 1. ベクトル埋め込みの生成と保存

**埋め込みモデルの選択肢:**
- Amazon Bedrock Titan Text Embeddings
- Cohere Embed
- OpenAI text embedding models

**保存方法:**
- 各アイテムに新しい属性（例: `descriptionEmbedding`）を追加
- UpdateItem APIで既存テーブルに埋め込みを追加
- リスト型（List）で float 値を保存

### 2. ベクトルインデックスの作成

**DynamoDB コンソールから:**
1. テーブル → Indexes タブ → "Create vector index"
2. インデックス名、ベクトル属性、次元数を指定
3. 距離関数を選択（Cosine, Euclidean, Dot product）
4. パーティションキー設定（オプション）
5. フィルタ属性の追加（オプション）
6. "Create vector index" で作成

### 3. 検索の実行

**SearchVectors API:**
```
入力:
- ベクトルインデックス名
- クエリ用ベクトル（自然言語クエリから生成）
- 返却件数（Top K: 最大100件）
- パーティションキー値
- フィルタ条件（オプション）

出力:
- 類似度スコアでランク付けされた結果
- 類似度スコア（距離関数により意味変化）
- テーブルの全属性またはプロジェクション属性
```

---

## ユースケース

### 1. e-Commerce

**シナリオ**: オンライン靴販売での自然言語検索
- クエリ: "軽い夏用ランニングシューズ"
- 検索対象: 商品説明のベクトル埋め込み
- フィルタ: category=footwear, marketplace=US
- 結果: セマンティックに関連する商品を返却

### 2. RAG（検索拡張生成）

- ユーザー質問を埋め込み
- 知識ベースから関連ドキュメントを検索
- LLMに対して検索結果をコンテキストとして提供
- より正確で根拠のある回答生成

### 3. 推奨エンジン

- ユーザー行動/嗜好を埋め込み表現
- 類似ユーザーを素早く発見
- パーソナライズされた推奨を提供

### 4. 異常検知

- 正常なデータの埋め込みパターンを学習
- 類似度が低い異常データを検出
- 不正検出、品質管理に活用

---

## 利用可能な地域

- **商用AWSリージョン**: すべてのリージョンで利用可能
- **AWS GovCloud (US)**: 対応
- **今後の展開**: AWS Capabilities by Region ページで確認可能

---

## 料金

- DynamoDB の既存の従量課金モデルに統合
- ベクトル検索操作は書き込み/読み込みユニット単位で課金
- 詳細は Amazon DynamoDB 料金ページで確認

---

## 対象ユーザー

### 最適なユーザー

- **既存DynamoDBユーザー**: 意味検索機能を追加したい
- **スタートアップ**: インフラ管理を最小化したい
- **エンタープライズ**: 複数システム管理のコストを削減したい
- **AI/ML開発者**: RAG、推奨エンジンを素早く実装したい

### 利用検討のポイント

- 運用データとベクトル検索を同じデータベースで管理したい
- サーバーレスで管理負荷を最小化したい
- 数兆規模のベクトルをスケーラブルに処理したい
- コスト最適化を重視している

---

## 次のステップ

1. **自社の既存DynamoDBデータを確認**
   - どのテーブルに意味検索が有用か検討

2. **埋め込みモデルの選定**
   - Bedrock Titan、Cohere、OpenAI等から選択
   - 次元数、精度、コストを比較

3. **パイロットプロジェクトの実施**
   - 小規模なテーブルで検証
   - パフォーマンス、コスト測定

4. **本番環境への段階的展開**
   - パフォーマンステスト実施
   - 段階的にベクトル検索機能を統合

5. **フィードバック送付**
   - AWS re:Post for DynamoDB での情報共有
   - AWS Support への問い合わせ

---

## 参考リソース

- **AWS Blog**: https://aws.amazon.com/blogs/aws/amazon-dynamodb-now-supports-real-time-vector-search-at-any-scale/
- **Amazon DynamoDB Vector Search ドキュメント**: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/VectorSearch.html
- **Amazon Bedrock Titan Text Embeddings**: https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html
- **Amazon DynamoDB 料金**: https://aws.amazon.com/dynamodb/pricing/
- **AWS 機能一覧（地域別）**: https://builder.aws.com/build/capabilities/explore
- **AWS re:Post DynamoDB**: https://repost.aws/tags/knowledge-center/TAljkKQ0MDQJCjDdxSeDQBJw