# AWS RTB Fabric、リアルタイム入札にカスタムドメイン対応

AWS RTB Fabric supports custom domains for real-time bidding workloads

**カテゴリ:** What's New
**公開日:** 2026-05-14
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-rtb-fabric-custom-domains/)

このページでは、AWS What's Newで発表された「AWS RTB Fabric supports custom domains for real-time bidding workloads」の内容を日本語で要約しています。

---

## 要約

AWS RTB Fabricのカスタムドメイン機能により、AdTech企業はパートナー企業にエンドポイント設定の変更を要求することなく、自社ドメインを保持しながらトラフィックをシームレスにルーティングできるようになりました。この機能は、複数地域で利用可能であり、ネットワークコストを最大80%削減しながら、シングルディジット・ミリ秒のレイテンシーを実現します。

## このアップデートで何が変わったか

### 主な変更点

- **カスタムドメイン対応**: AWS RTB Fabricがカスタムドメイン機能をサポート
- **DNS連携**: DNS設定とCNAMEパブリックエンドポイントを構成可能
- **ルーティング機能**: URLパターンに基づいてトラフィックを特定のRTB Fabricリンクへルーティング
- **パートナー設定不要**: AdTech企業がパートナーにエンドポイント設定の更新を要求不要
- **グローバル対応**: 6つのAWSリージョンで利用可能

## 詳細情報

### 機能概要

- **自社ドメイン維持**: AdTech企業は自社のドメイン名を保持可能
- **簡単な設定**: DNS設定とCNAMEで構成
- **柔軟なルーティング**: URLパターンベースでトラフィック振り分け
- **パートナー連携の簡素化**: セットアップ時間を短縮

### 対応地域

- 米国東部（バージニア北部）
- 米国西部（オレゴン）
- アジアパシフィック（シンガポール）
- アジアパシフィック（東京）
- ヨーロッパ（フランクフルト）
- ヨーロッパ（アイルランド）

### メリット・効果

- **ドメイン戦略の柔軟性**: 自社ドメインを保持したままAWS RTB Fabricを利用
- **パートナー連携の簡素化**: 複数組織・アプリケーション・ドメイン間の調整が不要
- **ネットワークコスト削減**: 標準的なクラウドネットワーキングコスト比で最大80%削減
- **高性能**: シングルディジット・ミリ秒のレイテンシーをプライベートネットワーク環境で実現
- **パートナー数の拡大**: Amazon Ads、GumGum、Kargo、MobileFuse、Sovrn、TripleLift、Viant、Yieldmoなどのパートナーとの接続が3ステップで可能

## ユースケース

### DSP（Demand-Side Platform）

- 自社ドメインを維持しながらSSPに接続
- 複数SSPへのトラフィック振り分け

### SSP（Supply-Side Platform）

- パブリッシャー要件に応じたドメイン構成
- DSPとの統合を簡素化

### AdNetworks / Ad Exchanges

- パートナー数の増加に対応
- ネットワークコストを抑えながら規模拡大

## 対応パートナー

Amazon Ads、GumGum、Kargo、MobileFuse、Sovrn、TripleLift、Viant、Yieldmo など

## 関連リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-rtb-fabric-custom-domains/)
- [AWS RTB Fabric ドキュメント](https://aws.amazon.com/documentation-overview/rtb-fabric/)
- [AWS RTB Fabric 製品ページ](https://aws.amazon.com/rtb-fabric/)
- [AWS RTB Fabric ヘルスチェック機能](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-rtb-fabric-health-checks/)