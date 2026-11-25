---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon API Gateway が API Portal を発表

Amazon API Gateway announces API Portal

**What's New** | 2026-11-23T20:00:00

---

## 概要

- Amazon API Gatewayは、組織全体のAPIおよびAIエンドポイントを検出、管理、文書化するAPI Portalを発表しました。
- Amazon API Gateway、Application Load Balancer、Amazon CloudFrontの背後にあるAPIを、インストールやログ転送なしで継続的に登録し、シャドウAPIの特定、セキュリティ体制の評価、ドキュメントポータルでの公開が可能です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon API Gateway announces API Portal - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-announces-api-portal/)

- **Introducing API and AI security on AWS, from discovery to protection | AWS Security Blog**
  [詳細](https://aws.amazon.com/blogs/security/introducing-api-and-ai-security-on-aws-from-discovery-to-protection)

- **API Portal in API ...

---

## 変更内容・新機能

Amazon API Gateway が API Portal を発表しました。本機能は、Amazon API Gateway、Application Load Balancer、Amazon CloudFront の背後にある API と AI エンドポイントを、AWS Organizations 全体で検出・管理・文書化します。インストールやログ転送は不要で、AWS側のトラフィックログとサービス構成レコードから継続更新されるインベントリを構築します。検出された API は管理選択までシャドウ API となり、パブリックまたはプライベートとしてラベル付けし、MCP サーバー、A2A サーバー、LLM エンドポイントなどの AI エンドポイントを識別します。管理対象 API のセキュリティ体制を認証・スロットリング・AWS WAF 保護などのベストプラクティスと照らして評価し、ドキュメントポータルで公開できます。既存の API Gateway Portals は継続して利用でき、API Portal の Documentation Portals セクションから管理されます。32 の 

---

## まとめ

- Amazon API Gateway announces API Portal について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-announces-api-portal/)

### 関連情報

- [Amazon API Gateway announces API Portal - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-announces-api-portal/)
- [Introducing API and AI security on AWS, from discovery to protection | AWS Security Blog](https://aws.amazon.com/blogs/security/introducing-api-and-ai-security-on-aws-from-discovery-to-protection)
- [API Portal in API Gateway - Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apiportal.html)
- [Improve API discoverability with the new Amazon API Gateway Portal | AWS Compute Blog](https://aws.amazon.com/blogs/compute/improve-api-discoverability-with-the-new-amazon-api-gateway-portal)
- [Amazon API Gateway adds Developer Portal capabilities - AWS](https://aws.amazon.com/about-aws/whats-new/2025/11/api-gateway-developer-portal-capabilities)