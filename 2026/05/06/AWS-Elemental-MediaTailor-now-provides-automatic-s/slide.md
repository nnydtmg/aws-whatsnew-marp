---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Elemental MediaTailor
Googleアドプラットフォームとのサーバー間自動統合

**発表日: 2026年5月5日**

---

## 概要

### AWS Elemental MediaTailorの3つの主要改善

- **自動認証接続**: Googleのアドプラットフォームとのサーバー間接続が自動的に認証されるように
- **手作業の削減**: AWSサポートケースによるリクエストと許可リスト登録が不要に
- **セキュアな広告配信**: 正確で信頼性の高い広告配信とトラッキングを実現

### 対応プラットフォーム

- **Google Ad Manager（GAM）**
- **Google Campaign Manager（GCM）**
- **Google Display & Video 360（DV360）**

---

## 前提・背景

### これまでの課題

- MediaTailorユーザーは手動でAWSサポートケースを提出する必要があった
- 統合の有効化にはAWS側での許可リスト登録が必須
- セットアップに時間とコストがかかるプロセス

### 市場の動向

- プログラマティック広告の自動化ニーズが急速に増加
- サーバー間統合の需要拡大
- 運用効率化による統合の簡素化が求められている

---

## 変更内容・新機能

### 1. 自動接続検出機能

- MediaTailorが自動的にGoogleのアドサーバー宛のリクエストを検出
- 必要なセキュアな接続を自動的に確立
- お客様による操作は一切不要

### 2. Google Ad Managerへの統合

- サーバーサイド広告リクエストが自動的にセキュアされる
- Authorized Buyersへのアクセスが可能に

### 3. Google Campaign Manager / DV360への統合

- サーバーサイドインプレッショントラッキングリクエストがGoogleの認証エンドポイント経由で自動ルーティング
- より正確なレポーティング実現
- インプレッション拒否の削減

---

## 効果・メリット

### 運用効率の向上

- **セットアップ時間の短縮**: 従来のサポートケースプロセスが不要に
- **コスト削減**: AWS・Google間の統合設定にかかる管理コストを削減
- **即座に利用可能**: 自動認証により、すぐに利用開始可能

### 広告配信の品質向上

- **セキュアな接続**: 自動的にセキュアな接続が確立される
- **正確なレポーティング**: トラッキングリクエストの自動ルーティングにより精度が向上
- **信頼性向上**: インプレッション拒否の削減で、より正確なキャンペーン分析が可能

### 後方互換性の維持

- その他の広告リクエストは変更なく動作し続ける

---

## 利用可能性

### 対応リージョン

- MediaTailorが利用可能なすべてのAWSリージョンで利用可能

### コスト

- **追加コストなし**: 既存のMediaTailorご利用に含まれます

---

## ユースケース

### 1. メディア企業向け

- 複数のプラットフォームへの広告配信を一元管理
- 自動統合により、運用チームの負担を大幅削減

### 2. デジタルパブリッシャー向け

- Google DV360やGAMとの統合で、より精密なターゲティングが可能
- レポーティングの自動化で、キャンペーン分析が簡素化

### 3. マルチプラットフォーム配信

- MediaTailorで複数のGoogleプラットフォーム（GAM、GCM、DV360）に同時配信
- 一元管理で複雑性を軽減

---

## まとめ

### AWS Elemental MediaTailorの進化

- 自動認証接続機能により、統合の複雑性を大幅削減
- お客様の運用効率向上とコスト削減を実現
- セキュアで正確な広告配信プラットフォームへの進化

### 次のステップ

1. 既存のMediaTailorユーザーは自動的に利用可能
2. Google Ad Manager、GCM、DV360の設定を確認
3. サーバーサイド統合による効率化をすぐに体験

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/mediatailor-automatic-google-ad-platform-integration
- **AWS Elemental MediaTailor ドキュメント**: https://docs.aws.amazon.com/mediatailor/
- **Client-side ad-tracking integrations**: https://docs.aws.amazon.com/mediatailor/latest/ug/ad-reporting-client-side-ad-tracking-integrations.html
- **Server-side GAM integration**: https://docs.aws.amazon.com/mediatailor/latest/ug/gam-integration-ssl.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**