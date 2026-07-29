---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Interconnect - マルチクラウド接続が一般提供開始

AWS と Oracle Cloud Infrastructure 間のシンプルで安全な接続

**発表日: 2026年7月29日**

---

## 概要

### AWS Interconnect - multicloud の3つの特徴

- **プライベート接続**: インターネットを経由しないマネージドなレイヤー3接続
- **一貫性のある体験**: Google Cloud、Azure、OCI で同じインターフェース
- **迅速なプロビジョニング**: 数週間から数時間へ

### 対応クラウドプロバイダー

- **Google Cloud**: 一般提供（GA）✅
- **Oracle Cloud Infrastructure**: 一般提供（GA）✅ ← 新たに追加
- **Microsoft Azure**: 2026年後半対応予定

---

## 前提・背景

### これまでのマルチクラウド接続の課題

- **複雑性**: VPN、コロケーション、サードパーティネットワークファブリックの組み合わせ
- **時間消費**: DIY的なアプローチで数週間～数ヶ月を要する
- **管理負荷**: ネットワーク運用チームの負担が大きい
- **スケーラビリティ**: グローバルな多層ネットワーク構築が困難

### マルチクラウド戦略の高まり

- エンタープライズが複数のクラウドプロバイダーを採用
- ワークロード相互運用性の需要増加
- セキュアで予測可能な接続が必須

---

## 主な機能と改善

### 1. シンプルな接続管理

- AWS Management Console で数クリックで設定可能
- AWS CLI および API でのプログラマティックな構成
- 自動プロビジョニングで即座に利用開始

### 2. 堅牢なアーキテクチャ

- **業界初**: 専用目的のマルチクラウド接続製品
- スケーラブルでレジリエントな設計
- 専有帯域幅による一貫した性能

### 3. グローバルリージョン対応

| リージョン | 状態 |
|-----------|------|
| US East (N. Virginia) | 利用可能 |
| EU リージョン | 今後展開予定 |
| APAC | 計画中 |

---

<!-- _class: small -->

## 技術仕様と利用可能な機能

### AWS Interconnect のスペック

- **接続タイプ**: プライベート、マネージド Layer 3 接続
- **帯域幅**: 100 Mbps～10 Gbps で選択可能
- **遅延**: 予測可能で低遅延（インターネット非経由）
- **セキュリティ**: AWS グローバルバックボーン + パートナークラウドのプライベートネットワーク経由

### 対応リージョンペア（2026年7月現在）

- **Google Cloud**: 5リージョンペア
  - US East (N. Virginia)
  - US West (N. California)
  - US West (Oregon)
  - Europe (London)
  - Europe (Frankfurt)

- **OCI**: us-east-1（バージニア北部）で利用可能

---

## 効果とメリット

### ビジネスメリット

- **導入時間の短縮**: 数週間 → 数時間
- **オペレーション効率化**: 手動構築から自動化へ
- **TCO削減**: 複雑な多層ネットワーク不要
- **柔軟性向上**: 複数クラウド間での自由なワークロード配置

### 技術メリット

- **予測可能な性能**: 専有接続による一貫した遅延・スループット
- **セキュリティ強化**: インターネット非経由で安全
- **スケーラビリティ**: Transit Gateway、Cloud WAN と連携
- **運用簡素化**: AWS ネイティブ管理ツール統合

---

## ユースケース

### 1. データ分析・AI ワークロード

- AWS で学習→OCI で推論の分散処理
- リアルタイムデータ同期

### 2. 金融・規制業界

- 複数クラウド間での確実なデータ連携
- セキュアなバックアップ・ディザスタリカバリ

### 3. エンタープライズアプリケーション

- マルチクラウド戦略の実現
- ベンダーロックイン回避
- 高可用性・冗長性の確保

---

## まとめ

### AWS Interconnect - multicloud の価値提案

- **画期的**: マルチクラウド接続の民主化
- **シンプル**: ワンクリック設定、一貫したUX
- **拡張可能**: Google Cloud、OCI、Azure で統一体験
- **企業対応**: エンタープライズ要件を満たす堅牢性

### 次のステップ

1. 自社のマルチクラウド戦略確認
2. AWS コンソールで試験的な接続構築
3. オンプレミス・他クラウドとの連携検討
4. Transit Gateway / Cloud WAN との統合計画

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New** (元記事)
  https://aws.amazon.com/about-aws/whats-new/2026/07/aws-announces-AWS-interconnect-multicloud-OCI-GA/

- **AWS Interconnect ドキュメント**
  https://docs.aws.amazon.com/interconnect/

### 関連記事

- [AWS Interconnect is now generally available, with a new option to simplify last-mile connectivity](https://aws.amazon.com/blogs/aws/aws-interconnect-is-now-generally-available-with-a-new-option-to-simplify-last-mile-connectivity)

- [Oracle and AWS Collaborate to Expand Multicloud Networking](https://www.oracle.com/news/announcement/oracle-and-aws-collaborate-to-expand-multicloud-networking-2026-04-16)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**