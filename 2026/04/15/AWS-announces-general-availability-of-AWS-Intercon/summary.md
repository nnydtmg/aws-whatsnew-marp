# AWS announces general availability of AWS Interconnect - last mile

**カテゴリ:** What's New  
**公開日:** 2026年4月13日  
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/04/aws-announces-ga-AWS-interconnect-last-mile/

---

## 要約

AWS Interconnect - last mileは、AWSコンソールから数クリックでブランチオフィスやデータセンターをAWSに接続できる完全管理型サービスであり、複雑なネットワーク設定の自動化とダイナミックなスケーリング機能を提供しています。このサービスは、ネットワーク接続の複雑性を軽減したいエンタープライズ組織、複数拠点を持つ企業、およびクラウド接続を迅速に実現する必要がある組織に最適です。

---

## 詳細

### サービスの概要

- **AWS Interconnect - last mile**: AWSが発表した完全管理型の接続サービスであり、支社、データセンター、リモートロケーションからAWSへの接続を数クリックで実現できます

- **Lumenとの協業**: AWSクラウドイノベーションとLumenの広大なネットワークフットプリントを組み合わせたサービスになっています

### 主な機能

#### 1. シンプルな接続セットアップ

- AWSコンソールから、優先するAWSリージョン、帯域幅速度、Direct Connect Gateway ID、パートナーサブスクライバーIDを選択するだけでプライベートで高速な接続を即座に確立できます

- 一度開始されると、AWSが自動的にアクティベーションキーを生成し、Lumenでのプロビジョニング完了までの手続きが簡単になります

#### 2. ネットワーク設定の自動化

- BGPピアリング、VLAN設定、ASN割り当てなどの複雑なネットワーク設定が自動化されており、ネットワークセットアップの複雑さが軽減されます

- ネットワークチームの負担を大幅に削減し、設定時間を大幅に短縮できます

#### 3. スケーラビリティと信頼性

- 帯域幅を1 Gbpsから100 Gbpsまでダイナミックにスケーリングでき、ダウンタイムなしのメンテナンスが可能です

- サービスは高可用性設計でSLAによってサポートされています

#### 4. セキュリティ強化

- MACsec暗号化がデフォルトで有効化され、AWSとパートナーデバイス間のセキュリティが強化されています

- すべてのトラフィックはAWSグローバルバックボーン経由でプライベートに送信され、公開インターネットを経由しません

### 提供内容と対応

- **ローンチ**: 現在、米国でLumenをローンチパートナーとして利用可能です

- **パートナー統合**: パートナーはGitHubで公開されているオープンAPIパッケージを通じて容易に導入できます

- **今後の展開**: AT&TやMegaportなどの追加パートナーが進行中であり、さらなる地域への拡張が計画されています

### 適用対象組織

- ネットワーク接続の複雑性を排除したいエンタープライズ組織
- 複数拠点を持ち、クラウドとの統合が必要な企業
- 迅速なクラウド接続を実現する必要がある組織
- レガシーシステムとのハイブリッド構成を必要とする企業

### 利用開始方法

1. AWS Direct Connect コンソールにアクセス
2. AWS Interconnect - last mileを選択
3. 優先リージョン、帯域幅、Direct Connect Gateway IDなどを入力
4. 完成後、Lumenでアクティベーション

---

## 技術仕様

| 項目 | 仕様 |
|-----|------|
| 帯域幅範囲 | 1 Gbps～100 Gbps |
| 暗号化方式 | MACsec（デフォルト有効） |
| エッジレイテンシ | < 5ms |
| 可用性 | SLA保証 |
| メンテナンス | ダウンタイムなし |
| 対応パートナー | Lumen（米国）、AT&T、Megaport（進行中） |

---

## 関連サービス

### AWS Interconnect - multicloud

- **機能**: AWS と他のクラウドプロバイダー（Google Cloud、Microsoft Azure）間のプライベート接続
- **提供状況**: Google Cloud との連携は5地域で提供中、Azure は2026年後半予定
- **特徴**: 完全にプライベートで高速な接続、予測可能なレイテンシと一貫したスループット

---

## 参考リンク

- AWS What's New: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-announces-ga-AWS-interconnect-last-mile/
- AWS News Blog: https://aws.amazon.com/blogs/aws/aws-interconnect-is-now-generally-available-with-a-new-option-to-simplify-last-mile-connectivity/
- Lumen Cloud 2.0 Blog: https://www.lumen.com/blog/en-us/future-next-gen-cloud-connectivity-aws
- AWS Direct Connect ドキュメント: https://docs.aws.amazon.com/directconnect/
- AWS Interconnect ドキュメント: https://docs.aws.amazon.com/directconnect/latest/userguide/interconnect.html