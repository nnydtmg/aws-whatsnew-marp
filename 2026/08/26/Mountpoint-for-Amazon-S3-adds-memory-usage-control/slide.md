---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon S3 用 Mountpoint がメモリ使用量制御機能を追加

Mountpoint for Amazon S3 adds memory usage controls

**発表日: 2026年8月26日**

---

## 概要

### 主な機能追加

- **メモリ使用量制御**: Mountpoint はメモリ使用量を自動的にまたはユーザー定義で制限可能
- **リソース競合解決**: ML トレーニングや分析ワークロードとの共存を実現
- **自動検出対応**: Amazon EKS 環境では自動的にメモリ予算を検出

### 期待される効果

- 複数のメモリ集約的アプリケーション間での安定したパフォーマンス維持
- メモリプレッシャー下での堅牢な操作
- 厳密なメモリ割り当てコンテナでの Mountpoint 実行が可能に

---

## 前提・背景

### これまでの課題

- **メモリ使用量の拡大**: 使用パターンに基づいて Mountpoint のメモリ使用量が時間とともに増加
- **パフォーマンス問題**: 他のメモリ集約的アプリケーションとの競合時に問題発生のリスク
- **安定性の懸念**: 予測不可能なメモリ消費により、コンテナ環境での実行が困難
- **リソース計画の複雑性**: メモリ予算の計画・管理が難しい

### Mountpoint for Amazon S3 の位置付け

- **高スループット**: オープンソースのファイルクライアント
- **対応ワークロード**: 機械学習トレーニング、分析、 autonomous vehicle シミュレーション
- **特徴**: テラバイト～ペタバイト規模のデータセットに対応

---

## 新機能の詳細

### 1. メモリ使用量の制御方式

<div class="columns">
<div>

#### 方式A: ユーザー定義制限
- Mountpoint のメモリターゲットをユーザーが明示的に定義
- アプリケーション用にメモリを予約可能
- カスタマイズされた環境に対応

</div>
<div>

#### 方式B: 自動検出
- Amazon EKS 環境で自動実行
- コンテナの割り当てメモリ予算を自動検出
- 環境に応じた最適なデフォルト値を適用

</div>
</div>

---

### 2. メモリプレッシャー時の動作

- **操作の遅延化**: メモリ予算内に留まるための処理遅延
- **予算超過の防止**: 厳密なメモリ割り当てでも安全に動作
- **安定性の確保**: コンテナ環境での信頼性向上

### 3. 対応環境

- **すべての AWS リージョン**: グローバルに利用可能
- **コンテナ化環境**: Amazon EKS との統合対応
- **オンプレミス環境**: Linux インスタンスでの運用

---

## ユースケース・メリット

### データレイク・分析

- **大規模データセット処理**: テラバイト～ペタバイト規模へのアクセス
- **複合ワークロード**: ML、分析アプリケーションとの共存
- **リソース効率**: 限定されたメモリ環境での最適な利用

### 機械学習トレーニング

- **トレーニング環境**: 複数の ML フレームワークとの並行実行
- **メモリ制約下での訓練**: GPU/CPU リソースとの共有
- **スケーラビリティ**: コンテナ化されたトレーニングパイプライン

### Kubernetes 環境

- **Pod リソース管理**: 厳密な CPU/メモリ割り当てが可能
- **マルチテナント対応**: 複数アプリケーションの隔離運用
- **自動検出**: 設定なしで環境に適応

---

## 技術的詳細

### 実装ポイント

- **AWS CRT ライブラリ**: 高性能・低リソース利用を実現
- **ファイルシステム API**: ローカルファイル操作を S3 REST API に自動変換
- **オープンソース**: GitHub 上で公開・提供

### アップグレード方法

- Mountpoint GitHub リポジトリから最新版を入手
- 既存デプロイメントへの段階的な適用が可能
- 下位互換性を維持

---

## まとめ

### 主な利点

✅ メモリ集約的アプリケーションとの共存が可能に
✅ 自動メモリ制御で運用負荷を低減
✅ コンテナ環境（EKS）との深い統合

### 推奨される次のステップ

1. 自社のワークロードでメモリ制約を確認
2. テスト環境での動作検証
3. 本番環境への段階的デプロイ

---

## 参考リソース

### 公式情報

- 📄 **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/mountpoint-for-S3-adds-memory-usage-controls
- 📚 **Mountpoint GitHub リポジトリ**: https://github.com/awslabs/mountpoint-s3
- 📖 **Mountpoint 設定ガイド**: https://github.com/awslabs/mountpoint-s3/blob/main/doc/CONFIGURATION.md

### 関連ドキュメント

- 🔗 [Amazon S3 マウント - AWS ドキュメント](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mountpoint.html)
- 🔗 [Mountpoint for Amazon S3 概要](https://aws.amazon.com/s3/features/mountpoint)
- 🔗 [CSI ドライバ v2 - パフォーマンス向上](https://aws.amazon.com/blogs/storage/mountpoint-for-amazon-s3-csi-driver-v2-accelerated-performance-and-improved-resource-usage-for-kubernetes-workloads)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**