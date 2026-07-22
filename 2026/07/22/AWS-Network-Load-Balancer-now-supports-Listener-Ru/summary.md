# AWS Network Load Balancerがリスナールールでカスタムトラフィックルーティングに対応

AWS Network Load Balancer now supports Listener Rules for custom traffic routing

**カテゴリ:** What's New
**公開日:** 2026-07-22
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-network-load-balancer-supports-listener-rules/)

このページでは、AWS What's Newで発表された「AWS Network Load Balancer now supports Listener Rules for custom traffic routing」の内容を日本語で要約します。

---

## 要約

AWS Network Load Balancerのリスナールール機能により、送信元IPアドレスタイプに基づいて接続を異なるターゲットグループへルーティングでき、IPv4とIPv6の両クライアントに対応する際に、プロトコル変換なしでクライアントIPを保持できるようになりました。この機能は既存のデュアルスタックNLBに追加でき、すべてのAWSリージョンで追加料金なしで利用可能です。

## このアップデートで何が変わったか

AWS Network Load Balancer（NLB）がリスナールール機能をサポートするようになりました。この機能により、送信元IPアドレスタイプに基づいて異なるターゲットグループへの接続をルーティングできるようになりました。

### 主な特徴

- **デュアルスタック対応**: デュアルスタックNLBは、IPv6クライアントトラフィックをIPv6ターゲットへ、IPv4クライアントトラフィックをIPv4ターゲットへルーティング
- **クライアントIP保持**: 両方のアドレスファミリーについて、元のクライアントIPアドレスがエンドツーエンドで保持
- **レイヤー3ルーティング**: リスナールールにより、レイヤー3での条件付きルーティングが可能
- **既存NLBへの追加**: 既存のデュアルスタックNLBに対して、リスナールールを追加する際に再作成は不要

## 以前の課題

従来は、IPv4とIPv6の両方のクライアントに対応するために、以下のいずれかを選択する必要がありました：

- 2つの別々のロードバランサーを運用する（管理コストが高い）
- プロトコル変換を通じてクライアントIPを失う（セキュリティ・ログ分析に課題）

## 新しい解決方法

リスナールール機能により、以下が実現します：

- 1つのロードバランサーでIPv4/IPv6トラフィックを効率的に分離
- 各接続を同じファミリーのターゲットグループに変換なしでルーティング
- オリジナルクライアントIPアドレスを保持してセキュリティと監査ログを強化

## 詳細

### 対応プロトコル

- **TCP**: 標準的なTCPリスナー
- **UDP**: UDPベースのアプリケーション
- **TCP_UDP**: 混合プロトコルリスナー
- **TLS**: セキュアな接続

### 既存NLB機能との連携

以下の既存NLB機能とシームレスに連携します：

- 接続ドレーニング
- ターゲットグループスティッキネス
- クロスゾーン負荷分散
- 加重ターゲットグループ
- クライアントIP保持

## 利用可能な地域

- **提供範囲**: すべてのAWSコマーシャルリージョンおよびAWS GovCloud（US）リージョン
- **料金**: 追加料金なし（標準的なNLB料金が適用）

## 料金体系

新しいリスナールール機能を使用しても、追加料金は発生しません。以下の標準的なNLB料金が適用されます：

- ロードバランサー時間
- LCU (Load Balancer Capacity Unit)

## ユースケース例

### 1. グローバルアプリケーション

IPv6対応地域からのトラフィックを最適化し、クライアント近接のターゲットへのルーティングが可能。パフォーマンス向上とレイテンシ削減を実現。

### 2. レガシーシステム移行

既存IPv4システムと新規IPv6システムを共存させながら、段階的なIPv6対応が可能。クライアントIP情報の維持により監査ログも完全に保持。

### 3. セキュリティ強化

クライアント情報の保持でセキュリティ監視を強化。DDoS対策での詳細なトラフィック分析が可能に。ジオロケーション分析も正確に実施可能。

## 参考リンク

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-network-load-balancer-supports-listener-rules/
- **AWS Elastic Load Balancing ドキュメント**: https://docs.aws.amazon.com/elasticloadbalancing/
- **Network Load Balancer ドキュメント**: https://docs.aws.amazon.com/elasticloadbalancing/latest/network/
