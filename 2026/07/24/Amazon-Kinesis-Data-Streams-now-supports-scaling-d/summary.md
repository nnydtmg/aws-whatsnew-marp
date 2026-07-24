# Amazon Kinesis Data Streams がウォームスループットでのスケールダウン機能に対応

Amazon Kinesis Data Streams now supports scaling down ingest capacity with warm throughput

**カテゴリ:** What's New  
**公開日:** 2026-07-24  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/kinesis/on-demand-scale-down)

---

## 要約

Amazon Kinesis Data Streamsのオンデマンドアドバンテージモードが、ウォームスループットを使用した取り込み容量のスケールダウン機能をサポートするようになりました。この機能により、ユーザーはストリームの書き込みスループットを柔軟に調整でき、最適なパフォーマンスとコスト効率を実現できます。

---

## このアップデートで何が変わったか

### スケーリング機能の拡張

- **従来**: ウォームスループットでスケールアップのみ対応
- **変更後**: スケールダウン機能が追加
- **効果**: 容量を両方向に自由に調整可能

### スケールダウンの実行方法

```
オンデマンドストリームのウォームスループット値を低く設定
        ↓
ストリーム調整ロジック
        ↓
調整容量 = MAX(指定容量, 過去1時間のピーク使用量)
        ↓
常に現在のトラフィックに対応可能な容量に調整
```

### 追加コストなし

- ウォームスループットスケールダウン機能は無料
- On-demand Advantage モード有効時
- すべてのAWSリージョンで利用可能

---

## 対象ユーザー

### ユースケース

1. **トラフィックが時間帯により大きく変動する**
   - 朝夕ピークと深夜の谷間
   - 曜日による変動
   - 季節変動

2. **イベント駆動型のストリーミング**
   - 販売イベント期間のトラフィック増加
   - キャンペーン期間の一時的な負荷
   - イベント終了後の容量削減

3. **マルチテナント環境での容量管理**
   - テナント数に応じたスケーリング
   - 収益性に基づいた資源配分
   - 柔軟な課金体系

4. **コスト最適化を重視する企業**
   - クラウド支出の削減
   - 不要な過剰容量の解放
   - On-demand Advantage 環境での最大60%削減

---

## 主な特徴

### 1. スマート容量調整ロジック

```
最終容量 = MAX(
  管理者が指定した容量,
  過去1時間のピークデータ取り込み使用量
)
```

**意味**:
- トラフィックスパイク時への対応を常に確保
- 指定容量が使用パターンを下回る場合は自動的に増加
- 過剰容量の効率的な削減

### 2. API による簡単な制御

- **API名**: UpdateStreamWarmThroughput
- **スケール範囲**: 0 ～ 10 GiB/s
- **調整時間**: 数秒～数分で即座に反映

### 3. 無料で利用

- 追加コストなし
- On-demand Advantage モード有効時

---

## 効果とメリット

### コスト削減

| 項目 | 効果 |
|------|------|
| 不要な過剰容量削減 | 即座に容量を縮小 |
| 波動トラフィック対応 | 実際の使用量に合わせた課金 |
| On-demand Advantage との組み合わせ | 最大60%のコスト削減 |

### 運用効率向上

- 手動スケール調整が容易
- トラフィックパターンに合わせた細かい制御
- 自動化スクリプトとの連携が可能
- ストリーム管理の単純化

### パフォーマンス最適化

- 常に現在のトラフィックに対応可能な容量を維持
- 急激なトラフィック増加への対応を確保
- スロットリングや処理遅延を防止
- 最適なストリーム処理パフォーマンス

---

## 技術詳細

### 前提条件

- **ストリームモード**: On-demand モード
- **必須設定**: On-demand Advantage モード有効
- **リージョン**: On-demand Advantage がサポートされているすべてのAWSリージョン

### API インターフェース

```bash
# AWS CLI の例
aws kinesis update-stream-warm-throughput \
  --stream-arn arn:aws:kinesis:region:account-id:stream/stream-name \
  --desired-throughput 5000000000  # 5 GiB/s
```

### スケール範囲

- **最小**: 0 GiB/s
- **最大**: 10 GiB/s
- **単位**: 調整は秒単位で可能

---

## ユースケース例

### ケース1: 小売業向けのイベント対応

**シナリオ**: Black Friday セール

```
セール前（平常時）:
  - ウォームスループット: 2 GiB/s
  - 実運用容量: 1 GiB/s
  - コスト: 最小限

セール期間中:
  - ウォームスループット: 20 GiB/s に増加
  - 実運用容量: 15 GiB/s
  - コスト: トラフィックに応じた課金

セール後:
  - ウォームスループット: 2 GiB/s に削減
  - 実運用容量: 1 GiB/s
  - コスト: 元の水準に戻る
```

### ケース2: SaaS プラットフォーム

**シナリオ**: 顧客数に応じたスケーリング

```
顧客が少ない時期:
  - 必要容量: 3 GiB/s
  - ウォームスループット: 3 GiB/s
  - 運用効率: 最高

新規顧客獲得期:
  - 必要容量: 10 GiB/s
  - ウォームスループット: 10 GiB/s に自動調整
  - サービス品質維持: ✓

顧客数安定後:
  - 必要容量: 5 GiB/s
  - ウォームスループット: 5 GiB/s に削減
  - コスト効率: 改善
```

### ケース3: IoT データ収集

**シナリオ**: 時間帯による変動

```
夜間（センサー数が少ない）:
  - 予測容量: 1 GiB/s
  - ウォームスループット: 1 GiB/s

朝間（センサー起動）:
  - 予測容量: 8 GiB/s
  - ウォームスループット: 自動的に 8 GiB/s へ

日中（フル稼働）:
  - 予測容量: 12 GiB/s
  - ウォームスループット: 12 GiB/s に拡張
```

---

## 導入方法

### ステップ1: 前提確認

```bash
# ストリームが On-demand Advantage モードであることを確認
aws kinesis describe-stream \
  --stream-name stream-name

# StreamModeAdvantagesToEnablement を確認
```

### ステップ2: ウォームスループット値を設定

```bash
# 新しいスケールダウン値を設定
aws kinesis update-stream-warm-throughput \
  --stream-arn arn:aws:kinesis:region:account:stream/name \
  --desired-throughput 5000000000
```

### ステップ3: 変更確認

```bash
# 設定後の状態を確認
aws kinesis describe-stream \
  --stream-name stream-name
```

---

## 参考リンク

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/07/kinesis/on-demand-scale-down
- **On-demand Advantage**: https://aws.amazon.com/blogs/big-data/amazon-kinesis-data-streams-launches-on-demand-advantage-for-instant-throughput-increases-and-streaming-at-scale
- **UpdateStreamWarmThroughput API**: https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateStreamWarmThroughput.html
- **Amazon Kinesis Data Streams ドキュメント**: https://docs.aws.amazon.com/kinesis/
- **ストリームモード選択ガイド**: https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html
- **Amazon Kinesis Data Streams 料金**: https://aws.amazon.com/kinesis/data-streams/pricing/

---

## 関連リソース

- **AWS Big Data Blog**: Amazon Kinesis Data Streams launches On-demand Advantage for instant throughput increases and streaming at scale
- **Kinesis Documentation**: [Amazon Kinesis Data Streams デベロッパーガイド](https://docs.aws.amazon.com/kinesis/latest/dev/)
- **AWS Samples**: Kinesis のサンプルコードと実装例