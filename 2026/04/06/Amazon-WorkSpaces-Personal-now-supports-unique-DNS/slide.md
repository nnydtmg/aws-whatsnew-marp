---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon WorkSpaces Personal
PrivateLink用のグローバルDNS名をサポート

**発表日: 2026年4月6日**

---

## 概要

### 新機能のポイント

- **一意のグローバルDNS名**: PrivateLink VPCエンドポイント用に、AWS管理のグローバルに一意なDNS名をサポート
- **DNS競合排除**: 複数のAWSアカウントおよびVPC環境でのDNS解決の競合を排除
- **自動管理**: Route 53の追加設定やカスタムDNS管理は不要
- **セキュリティ分離維持**: プライベートIPアドレスへの解決により、セキュリティを保証

---

## 前提・背景

### 従来の課題

- 複数のAWSアカウント・VPC環境でのWorkSpaces展開時、DNS解決の競合が発生
- 既存のDNS管理方法では、複雑な設定が必要
- PrivateLinkを活用したセキュアなトラフィック経路の確立が課題

### 市場動向

- ハイブリッドワーク環境の拡大に伴い、エンタープライズ向けのセキュアなリモートアクセス需要が増加
- PrivateLink利用を通じたトラフィックセキュリティの重要性が高まる
- 複数アカウント・VPC環境での管理の簡素化ニーズが拡大

---

## 主な変更内容・新機能

### グローバルに一意なDNS名

- 各インターフェースVPCエンドポイントが、AWS管理のグローバルに一意なDNS名を取得
- 複数のVPCおよびAWSアカウント間でのデプロイメントが可能に

### DNS解決の最適化

- 複数アカウント環境での集中管理型DNSインフラストラクチャでのトラフィックルーティングが正確に機能
- 公開解決可能なDNS名が、各VPC内からのみアクセス可能なプライベートIPアドレスに解決

### 自動管理と互換性

- AWS側で一意のDNS名を自動管理、ユーザーによる管理不要
- 既存の環境との後方互換性を完全に維持
- すべてのAWSリージョン（PrivateLink対応リージョン）で利用可能

---

## 効果・メリット

### 運用効率化
- **簡素化された設定**: Route 53やカスタムDNS設定が不要
- **自動管理**: AWS側で完全に管理されるため、メンテナンスコスト削減

### セキュリティ強化
- **セキュリティ分離維持**: プライベートIPアドレスへの解決でセキュリティを保証
- **トラフィック管理**: 複数環境でのセキュアなトラフィックルーティング

### エンタープライズ対応
- **複数アカウント対応**: 複雑な多地域・多アカウント環境での運用をサポート
- **コンプライアンス**: エンタープライズ顧客の要件を満たす

---

## ユースケース

### マルチアカウント環境
複数のAWSアカウントで集中管理されたWorkSpaces環境を構築する際、DNS管理を簡素化

### 複雑なネットワーク環境
オンプレミス環境とAWS環境が混在する場合、統一されたDNS解決を実現

### セキュアなリモートアクセス
コンプライアンス要件が厳しい環境で、プライベートなトラフィック経路でWorkSpacesを提供

---

## まとめ

### 主なポイント

- Amazon WorkSpaces PersonalのPrivateLink対応が大幅に簡素化
- グローバルに一意なDNS名により、複数アカウント・VPC環境での管理が容易に
- セキュリティを維持しながら、運用効率を大幅に改善

### 次のステップ

1. 自社のマルチアカウント環境での適用可能性を検討
2. 既存のWorkSpaces展開での活用方法を確認
3. PrivateLink対応WorkSpacesディレクトリの検証を開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-workspaces-personal-privatelink/
- **Infrastructure security in Amazon WorkSpaces**: https://docs.aws.amazon.com/workspaces-core/latest/ag/infrastructure-security.html
- **Amazon WorkSpaces ドキュメント**: https://docs.aws.amazon.com/workspaces/
- **PrivateLink の詳細**: https://aws.amazon.com/privatelink/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**