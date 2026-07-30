# AWS Transit Gateway でPolicy-Based Routingが一般提供開始

AWS announces general availability of Policy-Based Routing on AWS Transit Gateway

**カテゴリ:** What's New
**公開日:** 2026-07-30
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-transit-gateway-policy-based-routing/)

このドキュメントでは、AWS What's Newで発表された「AWS announces general availability of Policy-Based Routing on AWS Transit Gateway」の内容を日本語で要約し、実装のポイントを紹介します。

---

## 要約

AWS Transit Gateway の Policy-Based Routing 機能により、ネットワーク管理者は複数のパケット属性に基づいたきめ細かいトラフィック制御が可能になりました。本機能は追加料金なしで、セキュリティ強化とワークロード分離を必要とするエンタープライズ組織に特に有用です。

## このアップデートで何が変わったか

AWS Transit Gateway が Policy-Based Routing (PBR) 機能の一般提供を開始しました。PBR により、ネットワーク管理者は以下の制御が可能になります：

- **送信元・送信先 IP アドレスに基づくルーティング**
- **ポート番号やプロトコルなどのパケット属性による細粒度制御**
- **パケット属性の組み合わせでのトラフィック分類**

従来のアーキテクチャと比較すると、複雑な多 VPC アーキテクチャを構築する必要がなくなり、追加インフラストラクチャなしでトラフィック分類と転送が可能になりました。

### 技術的な特徴

- **ポリシーテーブルの関連付け**: Transit Gateway アタッチメントにポリシーテーブルを関連付け
- **順序付きルールセット**: マッチング優先度を明確に定義
- **ターゲットルートテーブル**: マッチしたパケットを指定されたルートテーブルに転送

## 主なメリット

### 1. 運用の簡素化

- 追加インフラストラクチャが不要
- AWS Management Console、AWS CLI、AWS SDKで簡単に設定可能
- 複雑なVPCアーキテクチャが不要に

### 2. コスト効率

- 追加料金なし
- 標準的な Transit Gateway 料金のみで利用可能
- 運用コストの削減

### 3. セキュリティ向上

- きめ細かいトラフィック制御
- マイクロセグメンテーション戦略の実装が容易
- ワークロード分離による保護の強化

## 利用シーン

### 1. セキュリティ検査の一元化

- AWS Network Firewall へのトラフィック誘導
- サードパーティ製検査アプライアンスとの統合
- 特定のプロトコルやポートのみを検査対象にする最適化

### 2. ハイブリッド環境での接続管理

- AWS Direct Connect 経由のトラフィック誘導
- AWS VPN 経由の接続ルーティング
- オンプレミス環境との効率的な通信

### 3. ワークロード分離と環境分離

- 本番環境と開発環境の完全分離
- マイクロセグメンテーション戦略の実装
- テナント間のトラフィック分離

## 対象ユーザー

- **セキュリティアーキテクト**: ネットワークセキュリティ戦略の実装
- **エンタープライズネットワークチーム**: 大規模マルチアカウント環境の管理
- **トラフィック制御が必要な組織**: マイクロセグメンテーション、ワークロード分離の実現

## サポート範囲

### 利用可能リージョン

- AWS Transit Gateway が利用可能なすべてのコマーシャルリージョン

### 設定方法

- AWS Management Console
- AWS CLI
- AWS SDK

## 関連するAWSサービス

- **AWS Transit Gateway**: ネットワーク接続の中央ハブ
- **AWS Network Firewall**: トラフィック検査と保護
- **AWS Direct Connect**: 専用ネットワーク接続
- **AWS VPN**: VPC 間およびハイブリッド環境の接続
- **AWS CloudWatch**: モニタリングとログ

## 実装のポイント

### ポリシー設計

1. トラフィック分類の要件を明確化
2. ポリシーテーブルのルールセットを順序付けして定義
3. 各ルールのマッチング条件と転送先ルートテーブルを設定

### 運用上の注意

- ルール優先度の誤設定に注意
- トラフィック分析を通じた定期的なレビュー
- セキュリティ要件の変更に対応した保守

## 料金体系

- **追加料金**: なし
- **適用対象**: 標準的な AWS Transit Gateway 料金に含まれる

---

## 参考リンク

### 公式ドキュメント

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-transit-gateway-policy-based-routing/)
- [AWS Transit Gateway 政策テーブル](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-policy-tables.html)
- [AWS Transit Gateway ルートテーブル](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html)

### 関連情報

- [AWS Transit Gateway 説明](https://www.kentik.com/kentipedia/aws-transit-gateway-explained)
- [AWS Network Firewall 統合](https://aws.amazon.com/blogs/security/why-and-how-to-migrate-to-a-transit-gateway-attached-aws-network-firewall/)

---

**作成日**: 2026-07-31
**更新日**: 2026-07-31