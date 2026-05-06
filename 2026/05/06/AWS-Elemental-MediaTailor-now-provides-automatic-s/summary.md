# AWS Elemental MediaTailor now provides automatic secure server-to-server integration with Google's ad platforms

**カテゴリ:** What's New  
**公開日:** 2026-05-05  
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/05/mediatailor-automatic-google-ad-platform-integration

---

## 要約

AWS Elemental MediaTailorは、Googleのアドプラットフォームとのサーバー間接続を自動的に認証するようになり、お客様の手作業を不要にしました。この機能により、Google Ad Manager、Google Campaign Manager、およびDV360を使用するお客様は、セキュアで正確な広告配信とトラッキングを実現できるようになります。

---

## 詳細

### 新機能のポイント

- **自動認証接続機能**: AWS Elemental MediaTailorは、Google Ad Manager（GAM）、Google Campaign Manager（GCM）、およびGoogle Display & Video 360（DV360）との間で、サーバー間の自動認証接続を提供するようになりました。

### これまでのプロセスとの違い

- **従来方法**: MediaTailorユーザーがAWSサポートケースを通じて統合の有効化をリクエストし、許可リストに追加される必要がありました。

- **新方法**: 今回のアップデートにより、MediaTailorは自動的にGoogleのアドサーバー宛のリクエストを検出し、必要なセキュアな接続を確立するため、お客様による操作は不要になりました。

### 各プラットフォーム別の改善

#### Google Ad Manager（GAM）
- サーバーサイド広告リクエストが自動的にセキュアされる
- Authorized Buyersへのアクセスが可能になります

#### Google Campaign Manager & DV360
- サーバーサイドインプレッショントラッキングリクエストは、Googleの認証エンドポイント経由で自動的にルーティング
- より正確なレポーティング実現
- インプレッション拒否の削減

### その他の特徴

- その他の広告リクエストは変更なく動作し続けます
- この機能はMediaTailorが利用可能なすべてのAWSリージョンで利用可能
- **追加コストなし**: 既存のMediaTailorご利用に含まれます

---

## ビジネス上のメリット

### 運用効率の向上

1. **セットアッププロセスの簡素化**
   - サポートケース不要
   - 許可リスト登録プロセス不要
   - 即座に利用開始可能

2. **コスト削減**
   - 統合設定にかかる管理コスト削減
   - サポート対応コスト削減

### 広告配信品質の向上

1. **セキュリティ強化**
   - 自動的にセキュアな接続が確立
   - Googleの認証エンドポイント経由のルーティング

2. **精度向上**
   - より正確なレポーティング
   - インプレッション拒否の削減
   - キャンペーン分析の精度向上

---

## 対象ユーザー

- AWS Elemental MediaTailorの既存ユーザー
- Google Ad Manager、Google Campaign Manager、DV360を使用している企業
- プログラマティック広告配信を行うメディア企業やパブリッシャー

---

## 実装上の注意点

- 既存ユーザーは自動的にこの機能が有効化されます
- 特別な設定変更は不要です
- 既存の広告リクエストプロセスは変更なく動作します

---

## 参考資料

- [AWS Elemental MediaTailor 公式ドキュメント](https://docs.aws.amazon.com/mediatailor/)
- [Client-side ad-tracking integrations](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-reporting-client-side-ad-tracking-integrations.html)
- [Server-side MediaTailor integration with Google Ad Manager](https://docs.aws.amazon.com/mediatailor/latest/ug/gam-integration-ssl.html)