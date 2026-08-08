---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS WAFでSalt Securityの管理ルールグループがAPI・MCP脅威検出に対応

**発表日: 2026年8月6日**

---

## 概要

### 3つの主要な改善

- **API・MCP脅威検出**: Salt Securityの管理ルールグループにより、APIおよびAIエージェント、MCPエンドポイントからの攻撃を効果的に検出・軽減
- **AWS Marketplace統合**: AWS WAFコンソールから直接サブスクリプション可能で、追加設定不要
- **複雑な攻撃ベクトル対応**: 認証情報ブルートフォース、GraphQL過負荷、SSRF、JWT異常など多様な攻撃パターンに対応

---

## 前提・背景

### API セキュリティの課題

- APIは攻撃対象として最も広範なリスクを抱えており、95%の企業がAPI セキュリティ事象を経験
- 従来の WAF だけでは複雑な API 攻撃を検出・防止するのに不十分
- Model Context Protocol（MCP）の普及により、新たな脅威への対応が急務

### 市場の動向

- API セキュリティ専門ソリューションの需要が急速に増加
- AI・機械学習を活用した高度な脅威検出の必要性
- セキュリティの自動化と簡素化への要求

---

## 主な新機能

### 1. 先制的な API 脅威検出

- **認証情報ブルートフォース**: 無理矢理アクセス試行を検出
- **GraphQL 過負荷**: 過度なクエリによる DoS 攻撃を防止
- **SSRF 攻撃**: サーバーサイドリクエストフォージェリを検出
- **プロトタイプ汚染**: オブジェクト汚染による攻撃を防止
- **JWT 異常**: JSON Web Token の異常なパターンを検出

### 2. MCP エンドポイント対応

- MCP トラフィックの識別とラベル付け
- 認証されていない MCP アクセスの自動ブロック
- AWS WAF での MCP インタラクションの可視性確保

---

## 効果・メリット

### セキュリティ面

- 複雑で新型のAPI攻撃を自動検出・軽減
- カスタムルール作成の手間と保守コストを削減
- AIエージェント・MCPエンドポイント向けセキュリティを強化

### 運用面

- AWS Marketplace から直接サブスクリプション可能
- 追加設定不要で数分で導入可能
- ルールグループのバージョン管理により継続的に更新
- レート制限による列挙・悪用の軽減

### ビジネス面

- セキュリティ実装の時間短縮
- API セキュリティの民主化（SIer 依存度の低減）
- 規制要件への準拠を加速

---

## 利用方法

### セットアップ手順

1. AWS Management Console にログイン
2. AWS WAF → Web ACLs にアクセス
3. AWS Marketplace より「Salt Managed Rules for AWS WAF - AI Agent & API Security」を検索
4. ルールグループをサブスクリプション
5. 既存の Web ACL にルールを追加

### コンテキスト認識レート制限

- ユーザー識別子やメールアドレスなどのパラメータベースでレート制限を設定
- 機密情報への無制限アクセスを防止

---

## ユースケース

### 金融機関

- OpenBanking API の脅威検出と軽減
- 不正なクレデンシャルスタッフィング攻撃から保護

### SaaS 企業

- GraphQL API での過負荷攻撃防止
- AI エージェント統合による API 悪用の検出

### e コマース

- MCP エンドポイント経由の在庫列挙攻撃防止
- JWT トークン異常の自動検出

---

## まとめ

### このアップデートのポイント

1. **迅速な導入**: AWS Marketplace 統合で数分での実装
2. **包括的保護**: API・AIエージェント・MCPエンドポイントの一元管理
3. **自動化**: Salt Security の AI/ML が継続的に脅威パターンを学習・更新
4. **コスト削減**: カスタムルール開発・保守コストの削減

### 次のステップ

1. 既存の API ポートフォリオの脅威評価
2. Salt Managed Rules の無料トライアル実施
3. 段階的な導入計画の策定
4. AWS WAF ポリシーの統一化

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-waf-salt-security-managed-rules/
- **Salt Security Blog**: https://salt.security/blog/salt-debuts-first-aws-waf-managed-ruleset-for-ai-agent-and-api-protection
- **AWS WAF ドキュメント**: https://docs.aws.amazon.com/waf/
- **AWS Marketplace**: https://aws.amazon.com/marketplace/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**