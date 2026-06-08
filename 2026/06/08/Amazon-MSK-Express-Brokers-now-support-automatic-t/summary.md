# Amazon MSK Express が Kafka Streams のトピック自動作成に対応

Amazon MSK Express Brokers now support automatic topic creation with Kafka Streams

**カテゴリ:** What's New  
**公開日:** 2026年6月8日  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-msk-express-topic-support-kstreams/)

---

## 概要

Amazon MSK Express Brokers が Kafka Streams のステートフル操作（count、aggregate、join など）に必要な内部トピックを自動作成する機能が利用可能になりました。

これまでは Express Brokers 上で Kafka Streams を実行する際に、これらのトピックを手動で事前作成する必要がありました。今回のアップデートにより、アプリケーション起動時にトピックが自動的に作成されるようになり、セットアップが大幅に簡素化されます。

この機能は追加設定なしで利用でき、MSK Express Brokers が利用可能なすべての AWS リージョンで本日から利用可能です。

---

## 何が変わったか

### ビフォー（従来）

```
Kafka Streams アプリケーション
        ↓
    [実行失敗]
        ↓
手動でトピックを作成
（AdminClient または AWS コンソール）
        ↓
再度デプロイ
```

- ステートフル操作（count, aggregate, join）で失敗
- トピック名の規則を理解して手動作成
- デプロイ→失敗→修正→再デプロイのサイクル

### アフター（新機能適用後）

```
Kafka Streams アプリケーション
        ↓
自動でトピックを作成
        ↓
    [実行成功]
```

- トピックが自動生成される
- セットアップ設定が不要
- デプロイしたらすぐに動作

---

## 主な機能

### 自動作成の対象

Kafka Streams のステートフル操作に使用される以下の内部トピック：

| 操作タイプ | 用途 | 影響 |
|-----------|------|------|
| **count** | レコード数のカウント | 状態ストアが自動作成 |
| **aggregate** | 集約処理 | 中間結果の保存トピックが自動作成 |
| **join** | ストリーム結合 | 結合用の状態ストアトピックが自動作成 |

### トピック名の自動生成

トピック名は Kafka Streams の標準規則に従って自動生成されます：

```
{application.id}-{stateful_operator_name}-store
{application.id}-{stateful_operator_name}-changelog
```

例：
- `msk-streams-processing-count-store`
- `msk-streams-processing-count-changelog`

### 利用可能なリージョン

MSK Express Brokers が利用可能なすべての AWS リージョンで利用可能

---

## メリット・効果

### 1. デプロイメント効率の向上

- **設定時間の短縮**: 手動セットアップが不要
- **即座に動作**: デプロイ直後にアプリケーションが正常に動作
- **エラー削減**: トピック不一致による実行時エラーが発生しない

### 2. 開発生産性の向上

- **テスト環境での迅速な検証**: セットアップ時間が短縮
- **デバッグの効率化**: アプリケーションロジックに集中できる
- **デプロイの自動化**: CI/CD パイプラインに完全に組み込める

### 3. 運用負担の軽減

- **トピック管理業務の自動化**: 手動操作が不要
- **人的エラーの削減**: 設定ミスによるトラブルがなくなる
- **スケーリングが容易**: 新規アプリケーションのデプロイが簡単に

### 4. コスト削減

- **オペレーション時間の削減**: 管理業務の時間短縮
- **問題対応コストの低下**: エラーや設定ミスが少なくなる
- **開発効率の向上**: より短い期間で本番運用へ移行

---

## 使用例

### Kafka Streams アプリケーション例

```java
StreamsBuilder builder = new StreamsBuilder();

// このカウント操作で自動的に internal topic が作成される
builder.stream("input-topic")
    .selectKey((k, v) -> v.getCategory())
    .groupByKey()
    .count()  // 内部トピックが自動作成される
    .toStream()
    .to("output-topic");
```

**従来の方法（不要になった）:**
```bash
# AWS CLI または AdminClient で手動作成
aws kafka create-topic \
  --cluster-arn <cluster-arn> \
  --topic-name msk-app-count-store
```

**新しい方法:**
```bash
# アプリケーションをデプロイするだけ
# トピックは自動で作成される
```

---

## 推奨される活用シーン

### 1. リアルタイム分析

- **センサーデータ処理**: IoT センサーからのストリーム処理
- **ユーザーアクティビティ分析**: リアルタイムのユーザー行動分析
- **取引量計算**: 市場データのリアルタイム集約

### 2. マイクロサービス基盤

- **イベント駆動型アーキテクチャ**: サービス間の非同期通信
- **CQRS パターン**: コマンドとクエリの読み込みモデル分離
- **データレプリケーション**: マルチサービスへのデータ同期

### 3. データ ETL パイプライン

- **データ変換・集約**: 複数ソースからのデータ処理
- **ストリーミング分析**: リアルタイムでのデータ分析
- **キャッシング戦略**: 頻繁にアクセスされるデータの集約管理

---

## 技術的な詳細

### 内部トピック作成の仕組み

Kafka Streams はステートフル操作を実行する際、内部的に 2 種類のトピックを使用します：

1. **State Store Topic (状態ストアトピック)**
   - ローカル状態を保存
   - リカバリ用のバックアップ

2. **Changelog Topic (変更ログトピック)**
   - 状態の変更履歴を記録
   - 他のインスタンスとの同期

**従来**: これらを手動で作成→トピック名不一致のリスク  
**現在**: 自動作成→確実に連携

### 命名規則

自動作成されるトピック名は以下の形式です：

```
{application.id}-{operator-name}-store
{application.id}-{operator-name}-changelog
```

例：
```
application.id = "my-app"
operator-name = "count"
    ↓
自動作成トピック:
  - my-app-count-store
  - my-app-count-changelog
```

---

## まとめ

### 主要なポイント

✅ **自動作成**: Kafka Streams のステートフル操作に必要なトピックが自動生成  
✅ **セットアップ不要**: 追加設定なしで即座に利用可能  
✅ **全リージョン対応**: MSK Express Brokers が利用可能なリージョンで利用可能  
✅ **運用省力化**: 手動管理業務が完全に廃止  

### 推奨される次のアクション

1. **テスト環境での検証**: 既存の Kafka Streams アプリケーションで動作確認
2. **移行計画**: 現在のシステムから MSK Express への移行を検討
3. **新規プロジェクト適用**: 新しいストリーミング処理で即採用
4. **ドキュメント確認**: 詳細は AWS 公式ドキュメントを参照

---

## 参考リソース

### AWS 公式ドキュメント

- [AWS What's New - Amazon MSK Express](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-msk-express-topic-support-kstreams/)
- [Amazon MSK Developer Guide](https://docs.aws.amazon.com/msk/latest/developerguide/)
- [Using Kafka Streams with MSK Express Brokers](https://docs.aws.amazon.com/msk/latest/developerguide/use-kafka-streams-express-brokers-msk-serverless.html)

### 関連情報

- [Kafka Streams Documentation](https://kafka.apache.org/documentation/streams/)
- [Apache Kafka Community](https://kafka.apache.org/)

### 参考記事

- [Streamline Apache Kafka Topic Management with Amazon MSK](https://aws.amazon.com/blogs/big-data/streamline-apache-kafka-topic-management-with-amazon-msk/)
