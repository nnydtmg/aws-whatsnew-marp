---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon MSK Express が Kafka Streams のトピック自動作成に対応

Amazon MSK Express Brokers with automatic topic creation

**発表日: 2026年6月8日**

---

## 概要

### 主な変更点

- **自動トピック作成**: Amazon MSK Express Brokers で Kafka Streams のステートフル操作に必要なトピックが自動で作成される
- **セットアップ簡素化**: 追加の設定やセットアップが不要
- **全リージョン対応**: MSK Express が利用可能なすべての AWS リージョンで利用可能

### 影響範囲

- Kafka Streams ユーザーの運用負担を大幅に削減
- アプリケーションのデプロイメントプロセスを簡潔に

---

## 前提・背景

### これまでの課題

- Express Brokers 上で Kafka Streams を実行する際、ステートフル操作用のトピックを**手動で事前作成**する必要があった
- 各操作に対応するトピック名を手動管理する手間
- セットアップの複雑さがデプロイメントのハードルを上げていた

### 市場の動向

- ストリーミングデータ処理の需要が急増
- 開発効率とデプロイメント速度への要求が高まる
- サーバーレス・マネージドサービスの運用省力化ニーズ

---

## 主な機能と改善

### 自動トピック作成の仕組み

- アプリケーション起動時にステートフル操作に必要なトピックを自動生成
- トピック名は Kafka Streams の命名規則に従って自動生成
- 追加の管理操作は不要

### 対応する操作

- **Stateful Transformations**
  - count（カウント）
  - aggregate（集約）
  - join（結合）
- これらの操作で生成される内部トピックがすべて対応

---

## 効果・メリット

### 開発生産性の向上

- **セットアップ時間の短縮**: 手動でのトピック作成が不要
- **エラーの削減**: トピック名の不一致による実行時エラーがなくなる
- **デプロイメント時間の短縮**: そのままデプロイして即座に動作

### 運用負担の軽減

- トピック管理業務の自動化
- Kafka Streams と Amazon MSK の統合がシームレスになる
- マイクロサービスの高速なデプロイメント・スケーリングが可能に

### コスト削減

- オペレーション時間の削減
- 人的エラーの削減による問題対応コストの低下

---

## ユースケース

### リアルタイム分析

Sensor データ、ユーザーアクティビティログを集計・分析するアプリケーション
- 自動作成されるトピックで状態管理が容易に
- スケーラブルな分析パイプラインを構築

### イベント駆動型アーキテクチャ

マイクロサービス間の非同期メッセージング
- Kafka Streams での変換・集約処理がシンプルになる
- サービス間の疎結合をより効果的に実現

### データストリーミング ETL

複数ソースからのデータ取り込み・変換・ロード
- 状態を持つ変換処理がスムーズに実装できる
- 本番環境への迅速なデプロイが可能

---

## まとめ

### Amazon MSK Express の進化

- **使いやすさの向上**: Kafka Streams との統合がシームレスになった
- **運用効率化**: 手動管理の廃止で大幅な省力化
- **即戦力**: 追加設定なしでそのまま利用可能

### 推奨される活用

1. 既存の Kafka Streams アプリケーションを MSK Express に移行
2. 新規ストリーミング処理プロジェクトで即採用
3. マイクロサービスのイベント処理基盤として採用

### 次のステップ

- MSK Express Brokers のドキュメントで詳細を確認
- テスト環境で Kafka Streams の検証を実施
- 本番環境への段階的な移行を検討

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-msk-express-topic-support-kstreams/
- **Amazon MSK ドキュメント**: https://docs.aws.amazon.com/msk/
- **Kafka Streams ガイド**: https://kafka.apache.org/documentation/streams/
- **Using Kafka Streams with MSK**: https://docs.aws.amazon.com/msk/latest/developerguide/use-kafka-streams-express-brokers-msk-serverless.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**