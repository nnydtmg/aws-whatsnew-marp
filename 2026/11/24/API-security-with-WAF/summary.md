# AWS WAF API Security と API Portal が一般提供開始

API security with WAF

**カテゴリ:** What's New
**公開日:** 2026-11-23T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/api-security-with-waf/)

このページでは、AWS What's Newで発表された「API security with WAF」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

新しいAPI PortalとAWS WAF API Securityにより、AWS環境内のAPIを自動検出から保護まで一貫して提供します。お客様はカスタムルールを書くことなくAPIを保護できます。

## このアップデートで何が変わったか

Automated API discovery and protection are now generally available. Amazon API Gateway、Application Load Balancer、Amazon CloudFront配下の全APIをAWS Organization全体で自動検出し、AWS WAFで保護できる。API Portalはエージェント不要でトラフィックログとサービス設定からAPIを自動識別し、ゾンビAPIやシャドウAPI、オーファンAPIを特定してセキュリティ所見を報告する。AWS WAF API Securityマネージドルールグループは、BOLA（Broken Object Level Authorization）、認証の不備とクレデンシャルスタッフィング、API偵察と列挙から保護する。単一リクエストのルール（トークン改ざんなど）とトラフィック学習による振る舞い検知の両方を提供。WAFの検出イベントはAPI Portalの所見に集約される。API Portalは32のAWSリージョンで利用可能。API SecurityはGovCl

## 詳細

Automated API discovery and protection are now generally available. Amazon API Gateway、Application Load Balancer、Amazon CloudFront配下の全APIをAWS Organization全体で自動検出し、AWS WAFで保護できる。API Portalはエージェント不要でトラフィックログとサービス設定からAPIを自動識別し、ゾンビAPIやシャドウAPI、オーファンAPIを特定してセキュリティ所見を報告する。AWS WAF API Securityマネージドルールグループは、BOLA（Broken Object Level Authorization）、認証の不備とクレデンシャルスタッフィング、API偵察と列挙から保護する。単一リクエストのルール（トークン改ざんなど）とトラフィック学習による振る舞い検知の両方を提供。WAFの検出イベントはAPI Portalの所見に集約される。API Portalは32のAWSリージョンで利用可能。API SecurityはGovCloud、中国リージョン、European Sovereign Cloudを除くAWS WAF提供リージョンで利用可能。あわせてAI Securityマネージドルールグループも提供され、LLM推論、MCP、A2Aエンドポイントを保護する。カスタムルールなしでAPIの検出から保護までを行いたいお客様に適している。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/api-security-with-waf/)