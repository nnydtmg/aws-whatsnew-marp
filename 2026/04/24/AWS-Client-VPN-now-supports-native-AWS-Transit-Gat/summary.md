# AWS Client VPN now supports native AWS Transit Gateway integration

**カテゴリ:** What's New
**公開日:** 2026-04-23
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-client-vpn-transit-gateway/)

---

## 要約

AWS Client VPN が AWS Transit Gateway とのネイティブ統合に対応することで、中間 VPC を必要とせず複数の VPC とオンプレミスネットワークへの一元化されたリモートアクセスが実現でき、エンドツーエンドのソース IP 保持により、セキュリティ監査とトラフィック追跡が大幅に簡素化されるようになりました。

---

## 主な特徴

### 1. ネイティブな Transit Gateway 統合

- AWS Client VPN エンドポイントを AWS Transit Gateway に直接アタッチ可能
- 複数の VPC とオンプレミスネットワークを一元化管理
- 中間 VPC のプロビジョニングと管理が不要

### 2. ソース IP のエンドツーエンド保持

- SNAT（Source Network Address Translation）による IP アドレス変換がなくなる
- エンドユーザーのソース IP がエンドツーエンドで保持される
- トラフィックを特定のユーザーまで追跡可能

### 3. セキュリティと監査の強化

- クライアント IP に基づいた認可ルールの作成が可能
- Transit Gateway フロー ログが接続レベルの詳細情報を保持されたソース IP とともにキャプチャ
- セキュリティ監査とコンプライアンスワークフローが簡素化

---

## メリット

- ✅ **アーキテクチャの簡素化**: 運用の複雑性が軽減
- ✅ **スケーラビリティ**: 容易に新しい VPC を追加可能
- ✅ **セキュリティ向上**: ソース IP 保持によるきめ細かいアクセス制御
- ✅ **監査ログの精度向上**: ユーザーレベルでの完全な追跡
- ✅ **コスト効率**: 追加料金なしで既存リソースで実装可能
- ✅ **グローバル展開**: AWS Client VPN が利用可能なすべてのリージョンで利用可能

---

## 対応リージョン

- AWS Client VPN が利用可能なすべての AWS リージョン

---

## 料金

- AWS Client VPN と AWS Transit Gateway の標準料金
- 追加料金は発生しません

---

## 推奨ユースケース

### 金融機関

- 複数のデータセンターとクラウドネットワークへのセキュアなアクセス
- 詳細な監査ログと完全なユーザー追跡

### エンタープライズ企業

- グローバル拠点からの統一されたリモートアクセス
- 各地域別のネットワーク構成を簡素化

### SaaS プロバイダー

- 顧客環境へのサポートアクセスの安全な管理
- ユーザーレベルでのアクセス制御とログ記録

---

## 移行方法

### ステップ 1: 既存の Client VPN 構成を確認

現在の VPC-based 構成を把握し、接続している VPC とオンプレミスネットワークをリスト化します。

### ステップ 2: Transit Gateway を準備

Transit Gateway を作成（未作成の場合）し、VPC と VPN を接続します。

### ステップ 3: Client VPN エンドポイントを作成

新規に Client VPN エンドポイントを Transit Gateway にアタッチし、セキュリティグループとルーティングを設定します。

### ステップ 4: クライアント設定の更新

クライアントに新しい VPN 設定ファイルを配布し、テストと検証を実施します。

---

## 参考リソース

### 公式ドキュメント

- [AWS What's New: AWS Client VPN now supports native AWS Transit Gateway integration](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-client-vpn-transit-gateway/)
- [Transit Gateway integration with Client VPN - AWS Documentation](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-tgw.html)
- [Create a Client VPN attachment in AWS Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/create-client-vpn-attachment.html)

### 関連ブログ記事

- [Introducing AWS Client VPN native AWS Transit Gateway attachment](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-client-vpn-native-aws-transit-gateway-attachment/)
- [AWS Client VPN Implementation for Private Networks](https://dev.to/aws-builders/aws-client-vpn-implementation-for-private-networks-16oe)

---

## まとめ

AWS Client VPN の AWS Transit Gateway ネイティブ統合により、ハイブリッドワーク環境でのセキュアなリモートアクセスが実現されました。ソース IP の保持、アーキテクチャの簡素化、運用負荷の削減が同時に達成でき、金融機関からエンタープライズ、SaaS プロバイダーまで幅広いユースケースに対応できます。