---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Interconnect - multicloud が Oracle Cloud Infrastructure への対応をプレビュー開始

シームレスなマルチクラウド接続実現へ

**発表日: 2026年5月15日**

---

## 概要

### AWS Interconnect - multicloud の特徴

- **AWS と OCI 間の直接接続**: シームレスで復元力のあるプライベート接続
- **複雑性の排除**: 従来のマルチクラウド構築プロセスを大幅に簡素化
- **段階的展開**: Google Cloud (一般提供中) → Azure (2026年後半) → OCI (プレビュー)

### 主要なメリット

- 予測可能なレイテンシと一貫したスループット
- インターネット輻輳からの隔離
- 物理インフラ管理の不要化

---

## 前提・背景

### マルチクラウド環境における課題

- **接続の複雑性**: 複数クラウド間での手動管理の負担
- **信頼性の懸念**: インターネット経由の接続による不安定性
- **運用コスト**: 物理インフラとネットワーク管理の高コスト化
- **データエグレス**: 異なるクラウド間のデータ移動による費用増

### AWS Interconnect の進化

- Google Cloud との一般提供開始 (2026年4月)
- Microsoft Azure への対応予定 (2026年後半)
- Oracle Cloud Infrastructure への対応 (プレビュー開始)

---

## 変更内容・新機能

### AWS Interconnect - multicloud (OCI)

- **プライベート接続**: Layer 3 レベルのマネージドプライベート接続
- **高速・信頼性**: AWS グローバルバックボーン + OCI プライベートネットワーク経由
- **自動化**: AWS Management Console、CLI、API による簡単プロビジョニング

### 利用可能なリージョン

- **初期対応**: us-east-1 (N. Virginia)
- **段階的拡大**: 追加リージョン対応予定

### 対応クラウドプロバイダー

- **Google Cloud**: 一般提供中 (5つのリージョンペア)
- **Microsoft Azure**: 2026年後半予定
- **Oracle Cloud Infrastructure**: プレビュー開始

---

## 技術仕様・詳細機能

### AWS Interconnect – Last Mile (補足)

- **オンプレミス接続**: ブランチオフィス・データセンターから AWS への接続
- **パートナー対応**: Lumen が初期パートナー (AT&T、Megaport 対応予定)
- **冗長性**: 2つの物理ロケーション間で4つの冗長接続を自動プロビジョニング

### セキュリティ・信頼性

- **MACsec 暗号化**: デフォルトで有効
- **Jumbo Frames**: デフォルトサポート
- **SLA**: 99.99% 可用性保証
- **帯域幅**: 1 Gbps〜100 Gbps (コンソールから柔軟に調整可能)

---

## 効果・メリット

### ビジネスメリット

- **運用の簡素化**: 物理インフラ管理・複雑な設定が不要
- **コスト削減**: インターネット経由のエグレス費用削減
- **ワークロード統合**: AWS と OCI のベストな機能を同時活用

### 技術的メリット

- **低遅延**: 公開インターネットを経由しない直接接続
- **スケーラビリティ**: 帯域幅を柔軟に調整可能
- **セキュリティ**: 暗号化通信、プライベートネットワーク経由

---

## ユースケース

### 適用シナリオ

- **Oracle AI Database + AWS 統合**: OCI の AI Database と AWS の EC2・Lambda を統合
- **データウェアハウス**: OCI から AWS へのデータ移行・統合分析
- **エンタープライズアプリケーション**: 複数クラウドへのアプリケーション分散配置
- **AI・ML ワークロード**: OCI 専用 AI エンジン + AWS ML サービスの併用

### 顧客タイプ

- **マルチクラウド戦略採用企業**: Google Cloud、Azure、OCI を複数利用中
- **Oracle 既存ユーザー**: オンプレミス Oracle から AWS・OCI ハイブリッド展開
- **高パフォーマンス要求企業**: 低遅延・高スループット必須の大規模データ処理

---

## まとめ

### AWS Interconnect - multicloud (OCI 対応) のポイント

- **マルチクラウド時代の必須インフラ**: AWS + OCI のシームレス統合
- **複雑性を排除**: オンデマンドプロビジョニングで運用負荷を大幅削減
- **エンタープライズグレード**: 99.99% SLA、暗号化、冗長性を標準装備

### 次のステップ

1. **利用開始**: AWS Management Console から Interconnect を作成
2. **OCI 環境準備**: OCI 側の接続設定
3. **パイロット検証**: 初期ワークロードでの動作確認
4. **本番展開**: 段階的に本番環境へ移行

### 無料利用枠

- **初期特典**: 2026年5月より、アカウント当たり月 500 Mbps ローカル接続が無料 (1リージョン)

---

## 参考リソース

### 公式ドキュメント・記事

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-announces-AWS-interconnect-multicloud-oci-preview/
- **AWS News Blog**: https://aws.amazon.com/blogs/aws/aws-interconnect-is-now-generally-available-with-a-new-option-to-simplify-last-mile-connectivity/
- **Oracle 発表**: https://www.oracle.com/news/announcement/oracle-and-aws-collaborate-to-expand-multicloud-networking-2026-04-16/

### 関連情報

- **InfoQ 記事**: AWS Interconnect Reaches General Availability with Managed Multicloud and Last-Mile Connectivity
- **AWS Direct Connect コンソール**: Interconnect メニューから設定可能
- **リージョンペア情報**: 北米・欧州での初期展開、APAC 拡大予定

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**