# AWS WAFでSalt Securityの管理ルールグループがAPI・MCP脅威検出に対応

AWS WAF now supports a Salt Security managed rule group for API and MCP threat detection

**カテゴリ:** What's New
**公開日:** 2026-08-06T21:10:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-waf-salt-security-managed-rules/)

---

## 要約

AWS WAFはSalt Securityの管理ルールグループをサポートするようになり、APIおよびAIエージェント、MCPエンドポイントからの攻撃検出と軽減が可能になりました。このルールグループはAWS Marketplaceから直接利用でき、カスタムルール作成の手間を削減しながら包括的なAPI脅威保護を提供します。

---

## このアップデートで何が変わったか

### AWS WAFの新しい管理ルールグループ

- AWS WAFがSalt Securityの管理ルールグループをサポートするようになりました
- AWS Marketplaceから「Salt Managed Rules for AWS WAF - AI Agent & API Security」として利用可能
- AWS WAFコンソールから直接サブスクリプション可能で、追加設定は不要

### API脅威検出機能の強化

- APIに特化した攻撃検出と、AIエージェントおよびModel Context Protocol（MCP）エンドポイントからのトラフィック検出・軽減機能を提供
- 従来の WAF ルールでは検出できない複雑な API 攻撃ベクトルに対応

### MCP エンドポイント対応

- MCPエンドポイントからのトラフィックを識別・ラベル付け
- 認証されていないMCPアクセスをブロック
- AWS WAFでのMCP相互作用に可視性を追加

---

## 対応する攻撃ベクトル

- **認証情報ブルートフォース**: ユーザーアカウントへの無理矢理アクセス試行
- **GraphQL 過負荷攻撃**: 過度で複雑なクエリによる DoS 攻撃
- **SSRF（Server-Side Request Forgery）**: サーバーサイドからの不正なリクエスト生成
- **プロトタイプ汚染**: JavaScript オブジェクトの予期しない属性変更
- **JWT（JSON Web Token）異常**: トークンベースの認証機構の異常検出

---

## 利用可能な機能

### コンテキスト認識レート制限

- ユーザー識別子やメールアドレスなどの機密リクエストパラメータにレート制限を適用
- 列挙攻撃とアビューズを軽減

### ルールグループの管理

- AWS WAFコンソールから直接サブスクリプション
- バージョン管理をサポート
- 価格設定はSalt Securityによって決定

### 実装の簡素化

- カスタムルールを作成・保守する必要がなくなる
- API セキュリティ実装の時間短縮
- 新しい脅威ベクトルへの自動対応

---

## ユースケース

### 金融サービス

- OpenBanking API の脅威検出
- クレデンシャルスタッフィング攻撃からの保護
- 規制要件への準拠

### SaaS・クラウドサービス

- GraphQL API の保護
- AI エージェント統合によるセキュリティ強化
- API 悪用パターンの自動検出

### e コマース・マーケットプレイス

- 在庫照会 API の列挙攻撃防止
- MCP エンドポイント経由の不正アクセス検出
- ユーザーデータ保護

---

## メリット・効果

### セキュリティ面

- 複雑で新型の API 攻撃を自動検出・軽減
- カスタムルール開発の手間を削減
- 常に最新の脅威パターンに対応（自動更新）
- AIエージェント・MCPエンドポイント向けセキュリティを強化

### 運用面

- AWS Marketplace から直接サブスクリプション
- 追加設定不要で数分で導入
- ルールのバージョン管理により継続的に改善
- 既存の AWS WAF 運用フローとの統合

### コスト・ビジネス面

- セキュリティ実装時間の大幅短縮
- SIer や外部ベンダーへの依存度低減
- 規制要件（GDPR、PCI-DSS 等）への準拠加速
- 迅速な市場対応

---

## 導入方法

### 基本的なセットアップ手順

1. AWS Management Console にログイン
2. AWS WAF サービスにアクセス
3. 保護対象のリソース（ALB、CloudFront 等）を選択
4. AWS Marketplace で「Salt Managed Rules for AWS WAF - AI Agent & API Security」を検索
5. ルールグループをサブスクリプション
6. 既存の Web ACL にルールを追加
7. テストとデプロイ

### 推奨事項

- まずは **Test** モードで動作確認
- 既存の WAF ルールとの相互作用を検証
- 段階的に本番環境へ展開
- CloudWatch ロギングで効果を監視

---

## よくある質問

### Q: 既存の WAF ルールと共存できるか

A: はい。Salt Managed Rules は既存のルールと共存でき、段階的に統合できます。

### Q: セットアップに特別なスキルが必要か

A: いいえ。AWS WAF コンソールから直接サブスクリプション可能で、追加設定は不要です。

### Q: 費用はいくらか

A: 価格設定は Salt Security により決定され、AWS Marketplace に記載されています。

### Q: MCP 対応はいつからか

A: 本ルールグループの発表と同時に、MCP 対応機能が提供されています。

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-waf-salt-security-managed-rules/
- **Salt Security 公式ブログ**: https://salt.security/blog/salt-debuts-first-aws-waf-managed-ruleset-for-ai-agent-and-api-protection
- **AWS WAF ドキュメント**: https://docs.aws.amazon.com/waf/
- **AWS Marketplace**: https://aws.amazon.com/marketplace/
- **Salt Security との API セキュリティ連携**: https://aws.amazon.com/blogs/apn/preventing-api-breaches-using-salt-security-with-aws-waf-and-amazon-api-gateway/

---

## 関連トピック

- AWS WAF の概要と利点
- API セキュリティのベストプラクティス
- AWS Marketplace でのセキュリティソリューション選定
- OWASP API Security Top 10 への対応
- クラウドセキュリティの最新動向