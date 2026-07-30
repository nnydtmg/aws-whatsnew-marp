---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Transit Gateway でPolicy-Based Routingが一般提供開始

AWS announces general availability of Policy-Based Routing on AWS Transit Gateway

**What's New** | 2026-07-30

---

## 概要

- AWS Transit Gateway の Policy-Based Routing 機能により、ネットワーク管理者は複数のパケット属性に基づいたきめ細かいトラフィック制御が可能になりました。
- 本機能は追加料金なしで、セキュリティ強化とワークロード分離を必要とするエンタープライズ組織に特に有用です。

---

## 前提・背景

### これまでの課題

- 従来のAWS Transit Gatewayでは、複雑な多VPCアーキテクチャを構築する必要がありました
- 送信元・送信先IPアドレス、ポート、プロトコルなどで細かいトラフィック制御ができていませんでした
- ネットワーク管理の複雑化により、運用コストが増加していました

### 市場の動向

- エンタープライズ組織でセキュリティ強化の需要が高まっている
- マイクロセグメンテーションとワークロード分離の重要性が増している
- AWS Network Firewallなどのセキュリティサービスとの統合ニーズが拡大

---

## 変更内容・新機能

### Policy-Based Routing (PBR) の主要機能

- **柔軟なパケット属性マッチング**: 送信元・送信先IPアドレス、ポート、プロトコルの組み合わせでルーティング
- **ポリシーテーブル**: Transit Gatewayアタッチメントに関連付け、順序付きルールセットを定義
- **詳細なトラフィック制御**: マッチしたパケットを指定されたルートテーブルに転送

### サポートされるリージョン

- AWS Transit Gatewayが利用可能なすべてのコマーシャルリージョン
- AWS Management Console、AWS CLI、AWS SDKで設定可能

---

## ユースケース

### 1. セキュリティ検査

- AWS Network Firewallやサードパーティ製検査アプライアンスへのトラフィック誘導
- きめ細かいトラフィック分類による効率的な検査

### 2. 接続経路の最適化

- 送信元やプロトコルに基づいたAWS Direct ConnectやAWS VPN経由のルーティング
- ハイブリッド環境での接続管理

### 3. ワークロード分離

- 本番環境と開発環境の分離
- マイクロセグメンテーション戦略の実装

---

## メリット・効果

- **追加インフラストラクチャが不要**: 複雑な多VPCアーキテクチャの構築が不要に
- **コスト削減**: 運用コストの削減、追加料金なしで利用可能
- **柔軟性の向上**: きめ細かいトラフィック制御で様々なユースケースに対応
- **セキュリティ強化**: 細粒度のアクセス制御でセキュリティ体制を向上

---

## まとめ

### AWS Transit Gateway Policy-Based Routing の位置づけ

- AWS Transit Gatewayの強力な新機能
- エンタープライズネットワーク管理を大幅に簡素化
- セキュリティとワークロード分離を必要とする組織に最適

### 次のステップ

1. AWS Management Consoleにてデモ環境で検証
2. ビジネス要件に合わせたポリシー設計
3. 本番環境への段階的導入

---

## 参考リソース

### 公式ドキュメント

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-transit-gateway-policy-based-routing/
- **AWS Transit Gateway 政策テーブル**: https://docs.aws.amazon.com/vpc/latest/tgw/tgw-policy-tables.html
- **AWS Transit Gateway ルートテーブル**: https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html

### 関連情報

- **AWS Transit Gateway 説明**: https://www.kentik.com/kentipedia/aws-transit-gateway-explained
- **AWS Network Firewall 統合**: https://aws.amazon.com/blogs/security/why-and-how-to-migrate-to-a-transit-gateway-attached-aws-network-firewall

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**