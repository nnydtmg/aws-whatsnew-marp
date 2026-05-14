---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS RTB Fabric、リアルタイム入札にカスタムドメイン対応

AWS RTB Fabric supports custom domains for real-time bidding workloads

**What's New** | 2026-05-14

---

## 概要

- AWS RTB Fabricのカスタムドメイン機能により、AdTech企業はパートナー企業にエンドポイント設定の変更を要求することなく、自社ドメインを保持しながらトラフィックをシームレスにルーティングできるようになりました。
- この機能は、複数地域で利用可能であり、ネットワークコストを最大80%削減しながら、シングルディジット・ミリ秒のレイテンシーを実現します。

---

## 前提・背景

### AdTech業界の課題

- DSP・SSPなどの複数システム間の統合が複雑化
- パートナー間でのエンドポイント設定変更が頻繁に発生
- インターネット経由のネットワークコスト増加

### AWS RTB Fabricの位置づけ

- リアルタイム入札（RTB）に特化したプライベートネットワーク
- 複数のAWSリージョンで提供
- AdTechパートナー間での通信を最適化

---

## 変更内容・新機能

### カスタムドメイン機能

- **カスタムドメイン対応**: AdTech企業が自社ドメイン名を保持可能
- **DNS設定** : CNAMEを使用してRTB Fabricにルーティング
- **URLパターンベースのルーティング**: 異なるトラフィックを特定のRTB Fabricリンクへ振り分け
- **パートナー設定不要**: エンドポイント設定変更を要求しない

### 対応地域

- 米国東部（バージニア北部）
- 米国西部（オレゴン）
- アジアパシフィック（シンガポール）
- アジアパシフィック（東京）
- ヨーロッパ（フランクフルト）
- ヨーロッパ（アイルランド）

---

## 効果・メリット

- **ドメイン保持**: 自社ドメインを維持したままAWS RTB Fabricを利用
- **パートナー連携の簡素化**: エンドポイント設定変更の不要化
- **ネットワークコスト削減**: 標準クラウド比で最大80%削減
- **低レイテンシー**: シングルディジット・ミリ秒の応答時間
- **セットアップ時間短縮**: 複数組織間の調整が不要
- **スケーラビリティ**: 複数パートナーとの同時接続が3ステップで実現

---

## ユースケース

### DSP（Demand-Side Platform）

- 自社ドメインを維持しながらSSPに接続
- 複数SSPへのトラフィック振り分け

### SSP（Supply-Side Platform）

- パブリッシャーの要件に応じたドメイン構成
- DSPとの統合をシンプル化

### AdNetworks / Ad Exchanges

- パートナー数の増加に対応
- ネットワークコストを抑えながら規模拡大

---

## まとめ

### 主なポイント

- AWS RTB Fabricがカスタムドメイン機能をサポート開始
- AdTech企業のドメイン戦略を柔軟に対応
- ネットワークコスト削減とパフォーマンス向上を同時実現
- グローバル6リージョンで即座に利用可能

### 次のステップ

1. 自社の要件に合わせたカスタムドメイン戦略を検討
2. パイロットプロジェクトでテスト実施
3. パートナーとの連携計画を策定

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-rtb-fabric-custom-domains/)

### 関連情報

- [AWS RTB Fabric supports health checks for real-time bidding workloads](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-rtb-fabric-health-checks/)
- [AWS RTB Fabric Documentation](https://aws.amazon.com/documentation-overview/rtb-fabric/)
- [Real-time bidding optimization network – AWS RTB Fabric](https://aws.amazon.com/rtb-fabric/)
- [Now generally available: AWS RTB Fabric for real-time bidding](https://aws.amazon.com/about-aws/whats-new/2025/10/aws-rtb-fabric-generally-available/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**