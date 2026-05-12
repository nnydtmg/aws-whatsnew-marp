---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Redshift、AWS Graviton搭載のRGインスタンスがローンチ

Amazon Redshift RG instances powered by AWS Graviton

**発表日: 2026年5月12日**

---

## 概要

### 3つの主要な改善点

- **2.4倍高速化**: 前世代のRA3インスタンスと比較して最大2.4倍の高速なパフォーマンスを実現
- **30%のコスト削減**: vCPUあたりの価格が30%低く、優れた費用対効果を提供
- **統合データレイククエリエンジン**: Apache IcebergおよびParquetデータを処理可能

### 対象ワークロード

- データウェアハウスの分析
- データレイク統合クエリ
- 混合分析環境での運用

---

## 前提・背景

### データウェアハウスの課題

- **パフォーマンスの限界**: 従来のRA3インスタンスでは大規模クエリに時間がかかる
- **コスト効率**: スケーラビリティとコストのバランスが必要
- **データ形式の多様性**: Apache Iceberg、Parquetなど複数フォーマット対応が必須
- **Spectrumの課題**: テラバイト単位のスキャンで別途料金が発生

### AWS Gravitonの進化

- **高性能CPU**: カスタム設計により優れた性能を実現
- **コスト効率**: オンプレミスプロセッサと比較して低価格
- **広範な採用**: AWSサービス全体で採用が拡大

---

## 主な機能と改善

### 1. RGインスタンスの仕様

- **ベースプロセッサ**: AWS Graviton搭載
- **インスタンスタイプ**: rg.xlarge と rg.4xlarge
- **利用可能リージョン**: 25以上のAWSリージョン

### 2. ベクトル化データレイククエリエンジン

- **Apache Iceberg対応**: ネイティブサポートで2.4倍高速化
- **Parquet最適化**: カスタムスキャン機構で1.5倍高速化
- **データウェアハウス互換**: RA3比で2.2倍高速化

---

## パフォーマンス指標

### ワークロード別パフォーマンス比較

| ワークロード | 高速化率 | 特徴 |
|-----------|--------|------|
| データウェアハウス | 最大2.2倍 | 従来の分析クエリで大幅改善 |
| Apache Iceberg | 最大2.4倍 | データレイク形式で最高性能 |
| Parquet | 最大1.5倍 | オープンフォーマットに最適化 |

### 最適化技術

- **スマートプリフェッチ**: データ先読みで遅延を低減
- **NVMeキャッシング**: 高速メモリキャッシュを活用
- **ベクトル化Parquetスキャン**: SIMD命令で並列処理
- **ファイル/パーティションプルーニング**: 不要なデータスキップ
- **JIT Analyze**: クエリ最適化を自動実行

---

## 効果・メリット

### パフォーマンス向上

- 大規模クエリが高速に実行
- 複雑な分析ワークロードに対応
- レイテンシ削減でユーザー満足度向上

### コスト削減

- vCPUあたり30%の価格低下
- 実行時間短縮による消費電力削減
- Redshift Spectrum別途料金が不要

### 運用の簡素化

- 統一エンジンでデータウェアハウス＋データレイク対応
- 複数エンジン管理の複雑性を排除
- 既存RA3クラスタから容易にマイグレーション可能

---

## ユースケース

### 金融機関での利用

- リアルタイムリスク分析
- 大規模取引データの高速クエリ
- コンプライアンスレポート生成

### 小売企業での利用

- 顧客行動分析（Icebergデータレイク）
- 在庫最適化クエリ
- キャンペーン効果測定

### SaaS企業での利用

- マルチテナント分析プラットフォーム
- 顧客分析ダッシュボード
- ビッグデータ集約ツール

---

## まとめ

### Amazon Redshift RGインスタンスの位置づけ

- **次世代の標準インスタンス**: RA3に代わるパフォーマンス向上版
- **統合アナリティクスプラットフォーム**: データレイク＋ウェアハウスの融合
- **コスト効率の実現**: パフォーマンス向上と価格低下の両立

### 推奨される次のステップ

1. **評価フェーズ**: 既存ワークロードでパフォーマンスを検証
2. **パイロット運用**: 本番環境で限定的な運用試験
3. **段階的移行**: RA3からのマイグレーション実施
4. **最適化**: クエリチューニングとコスト監視

---

## 参考リソース

- **AWS What's New**: [Amazon Redshift launches RG instances powered by AWS Graviton](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-rg-instances-powered-by-graviton)

- **AWS Blog**: [Amazon Redshift introduces AWS Graviton-based RG instances with integrated data lake query engine](https://aws.amazon.com/blogs/aws/amazon-redshift-introduces-aws-graviton-based-rg-instances-with-an-integrated-data-lake-query-engine/)

- **Amazon Redshift ドキュメント**: [Amazon Redshift Documentation](https://docs.aws.amazon.com/redshift/)

- **AWS Graviton情報**: [AWS Graviton](https://aws.amazon.com/ec2/graviton/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**