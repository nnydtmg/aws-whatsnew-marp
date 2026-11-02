---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFrontが閲覧者ISP名と耐量子TLS詳細の転送に対応

Amazon CloudFront now provides viewer ISP and post-quantum TLS details

**What's New** | 2026-10-30T18:15:00

---

## 概要

- Amazon CloudFrontは、閲覧者のISP名と耐量子TLSの詳細をオリジンへ転送する新しいヘッダーを提供します。
- 本機能は、ネットワーク分析および耐量子暗号の利用状況の把握に役立ちます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudFront now provides viewer ISP and post-quantum TLS details**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility)

- **Amazon CloudFront launches TLS security policy with post-quantum support**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/09/amazon-cloudfront-TLS-policy-post-quantum-support)

- **Supported ...

---

## 変更内容・新機能

Amazon CloudFrontはオリジンへ転送できる2つの新しいオプションヘッダーを提供します。CloudFront-Viewer-ISPヘッダーには閲覧者のISP名が含まれ、CloudFront-Viewer-TLS-Detailsヘッダーには耐量子暗号（PQC）の利用有無を含むTLS暗号詳細（キー交換、署名スキーム、署名公開鍵タイプ）が含まれます。ネットワーク別にトラフィックとパフォーマンスを分析したいお客様や、単一プロバイダーからの異常トラフィックを切り分けたいお客様に適しています。耐量子暗号で接続している閲覧者の割合を測定し、未対応クライアントを特定したいお客様にも有用です。ヘッダーをオリジンへ転送するには、origin request policyに追加してディストリビューションにアタッチします。

---

## まとめ

- Amazon CloudFront now provides viewer ISP and post-quantum TLS details について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility/)

### 関連情報

- [Amazon CloudFront now provides viewer ISP and post-quantum TLS details](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility)
- [Amazon CloudFront launches TLS security policy with post-quantum support](https://aws.amazon.com/about-aws/whats-new/2025/09/amazon-cloudfront-TLS-policy-post-quantum-support)
- [Supported protocols and ciphers between viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html)
- [CloudFront distributions enforce a post-quantum TLS 1.3 security policy](https://hub.prowler.com/check/cloudfront_distributions_pqc_tls_enabled)