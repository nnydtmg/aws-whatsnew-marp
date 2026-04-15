# AWS Interconnect is now generally available, with a new option to simplify last-mile connectivity

**カテゴリ:** AWS Blog
**公開日:** 2026-04-14T23:54:47
**元記事:** [https://aws.amazon.com/blogs/aws/aws-interconnect-is-now-generally-available-with-a-new-option-to-simplify-last-mile-connectivity/](https://aws.amazon.com/blogs/aws/aws-interconnect-is-now-generally-available-with-a-new-option-to-simplify-last-mile-connectivity/)

---

## 要約

AWS Interconnectは、マルチクラウド環境とハイブリッド環境におけるプライベート接続を簡素化する管理型サービスとして一般提供されました。このサービスは、複数のクラウドプロバイダーやオンプレミスネットワークとAWSを接続する必要がある大規模企業にとって、ネットワーク構成の複雑さを軽減し、セキュアで高速な接続を実現するために最適です。

## 詳細

### AWS Interconnect – multicloud

- Amazon VPCを他のクラウドプロバイダーのVPCに直接接続する管理型プライベート接続サービスが一般提供されました
- AWSと他のクラウドプロバイダー（Google Cloud、Microsoft Azure予定）間でプライベートなレイヤー3接続を提供
- 現在、5つのリージョンペア（米国東部、米国西部、ヨーロッパ）で利用可能

### AWS Interconnect – last mile

- オンプレミスやリモートロケーションからAWSへの接続を、ネットワークプロバイダーのラストマイルインフラストラクチャを通じて簡素化
- 米国東部（N. Virginia）でLumenとの提携により開始
- AT&TとMegaportが進行中

### 共通機能

- **MACsec暗号化**: すべてのトラフィックを暗号化
- **冗長性**: 複数の物理施設にわたる冗長性により高可用性を実現
- **CloudWatch統合**: 監視とログ分析が組み込まれている
- **99.99%の可用性SLA**: エンタープライズグレードの信頼性
- **帯域幅**: 1Gbpsから100Gbpsまで対応
- **コンソール帯域幅調整**: 必要に応じてコンソールから帯域幅を調整可能

### 利点

- 複数のクラウドプロバイダーにまたがるワークロードを運用する大規模企業向けに設計
- ネットワークチームが複雑な手動設定作業から解放される
- ビジネスに重要なアプリケーション開発に集中できるようになる
- 接続は数分でプロビジョニング可能
- AWSコンソールから数クリックで設定可能
