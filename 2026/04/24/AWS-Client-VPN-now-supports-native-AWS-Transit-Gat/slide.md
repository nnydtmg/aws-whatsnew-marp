---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Client VPN now supports native AWS Transit Gateway integration

AWS Transit Gateway とのネイティブ統合により、リモートアクセスを一元化

**発表日: 2026年4月23日**

---

## 概要

### AWS Client VPN の大幅な機能向上

- **ネイティブ統合**: AWS Transit Gateway との直接統合に対応
- **中間 VPC 不要**: 従来の複雑な構成が不要に
- **一元化管理**: 複数の VPC とオンプレミスネットワークを統一管理
- **ソース IP 保持**: エンドツーエンドで IP アドレスが保持される

---

## 前提・背景

### 従来の課題

- リモートワーカーが複数の VPC にアクセスするにはアーキテクチャが複雑化
- 中間 VPC が必要となり、運用コストが増加
- SNAT により元のクライアント IP 情報が失われ、ユーザー追跡が困難
- セキュリティ監査とコンプライアンス対応に追加作業が必要

### 市場の動向

- ハイブリッドワークの拡大に伴い、セキュアなリモートアクセスの需要増加
- ゼロトラスト・セキュリティ導入が加速し、ユーザーレベルでの詳細な追跡が必須に
- コスト最適化と運用簡素化の重要性が増進

---

## 主な機能と改善

### 1. ネイティブな Transit Gateway 統合

- AWS Client VPN エンドポイントが Transit Gateway に直接アタッチ可能
- VPC ピアリングやプロキシサーバー不要で複数の VPC にアクセス
- スケーラブルな環境構築が実現

### 2. ソース IP のエンドツーエンド保持

- SNAT（Source Network Address Translation）が適用されない
- クライアント IP アドレスが全トラフィックで保持される
- ユーザー追跡と監査ログが正確に記録される

---

## 主な機能と改善（続き）

### 3. セキュリティ強化

- **クライアント IP 基準の認可ルール**: クライアント IP に基づいたきめ細かい アクセス制御が可能
- **詳細なログ記録**: Transit Gateway フロー ログがユーザーレベルでの接続情報を完全にキャプチャ
- **コンプライアンス対応**: セキュリティ監査とコンプライアンスワークフローが大幅に簡素化

### 4. 運用面での改善

- **中間 VPC 不要**: インフラ構成の簡素化と管理の軽減
- **追加料金なし**: 既存の AWS Client VPN と AWS Transit Gateway の標準料金で利用可能

---

## 利用可能なリージョン

- AWS Client VPN が利用可能なすべての AWS リージョンで本機能が利用可能
- グローバルな展開と統一的な管理が実現

---

## ユースケース

### 1. 金融機関

- 複数のデータセンターとクラウドネットワークへのセキュアなアクセス
- 詳細な監査ログと完全なユーザー追跡

### 2. エンタープライズ企業

- グローバル拠点からの統一されたリモートアクセス
- 各地域別のネットワーク構成を簡素化

### 3. SaaS プロバイダー

- 顧客環境へのサポートアクセスの安全な管理
- ユーザーレベルでのアクセス制御とログ記録

---

## 効果とメリット

- ✅ **アーキテクチャの簡素化**: 中間 VPC のプロビジョニングと管理が不要に
- ✅ **セキュリティ向上**: ソース IP 保持によるきめ細かいアクセス制御と監査
- ✅ **運用コスト削減**: インフラ構成の複雑性が軽減
- ✅ **スケーラビリティ**: Transit Gateway により無制限の VPC 接続が可能
- ✅ **コンプライアンス対応**: 監査ログの精度が向上し対応が容易に
- ✅ **追加投資不要**: 既存リソースの標準料金内での実装

---

## 移行方法（既存環境から）

### ステップ 1: 既存の Client VPN 構成を確認

- 現在の VPC-based 構成を把握
- 接続している VPC とオンプレミスネットワークをリスト化

### ステップ 2: Transit Gateway を準備

- Transit Gateway を作成（未作成の場合）
- VPC と VPN を Transit Gateway に接続

### ステップ 3: Client VPN エンドポイントを作成

- 新規に Client VPN エンドポイントを Transit Gateway にアタッチ
- 必要なセキュリティグループとルーティングを設定

### ステップ 4: クライアント設定の更新

- クライアントに新しい VPN 設定ファイルを配布
- テストと検証を実施

---

## まとめ

### AWS Client VPN の進化

- **ネイティブな Transit Gateway 統合** により、ハイブリッドワーク環境でのセキュアなリモートアクセスが実現
- **ソース IP 保持** による詳細な監査とコンプライアンス対応が容易に
- **アーキテクチャの簡素化** により、運用負荷とコストが大幅削減

### 次のステップ

1. **評価**: 自社のリモートアクセス要件を見直し
2. **検証**: パイロット環境での機能テスト実施
3. **計画**: 既存環境からの段階的な移行計画策定
4. **展開**: 本番環境への展開と運用開始

---

## 参考リソース

### 公式ドキュメント

- [AWS What's New: AWS Client VPN now supports native AWS Transit Gateway integration](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-client-vpn-transit-gateway/)
- [Transit Gateway integration with Client VPN - AWS Documentation](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-tgw.html)
- [Create a Client VPN attachment in AWS Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/create-client-vpn-attachment.html)

### 関連情報

- [Introducing AWS Client VPN native AWS Transit Gateway attachment](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-client-vpn-native-aws-transit-gateway-attachment/)
- [AWS Client VPN Implementation for Private Networks](https://dev.to/aws-builders/aws-client-vpn-implementation-for-private-networks-16oe)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**