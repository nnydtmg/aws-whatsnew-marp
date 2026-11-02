# Amazon CloudFrontが閲覧者ISP名と耐量子TLS詳細の転送に対応

Amazon CloudFront now provides viewer ISP and post-quantum TLS details

**カテゴリ:** What's New
**公開日:** 2026-10-30T18:15:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility/)

このページでは、AWS What's Newで発表された「Amazon CloudFront now provides viewer ISP and post-quantum TLS details」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudFrontは、閲覧者のISP名と耐量子TLSの詳細をオリジンへ転送する新しいヘッダーを提供します。本機能は、ネットワーク分析および耐量子暗号の利用状況の把握に役立ちます。

## このアップデートで何が変わったか

Amazon CloudFrontはオリジンへ転送できる2つの新しいオプションヘッダーを提供します。CloudFront-Viewer-ISPヘッダーには閲覧者のISP名が含まれ、CloudFront-Viewer-TLS-Detailsヘッダーには耐量子暗号（PQC）の利用有無を含むTLS暗号詳細（キー交換、署名スキーム、署名公開鍵タイプ）が含まれます。ネットワーク別にトラフィックとパフォーマンスを分析したいお客様や、単一プロバイダーからの異常トラフィックを切り分けたいお客様に適しています。耐量子暗号で接続している閲覧者の割合を測定し、未対応クライアントを特定したいお客様にも有用です。ヘッダーをオリジンへ転送するには、origin request policyに追加してディストリビューションにアタッチします。

## 詳細

Amazon CloudFrontはオリジンへ転送できる2つの新しいオプションヘッダーを提供します。CloudFront-Viewer-ISPヘッダーには閲覧者のISP名が含まれ、CloudFront-Viewer-TLS-Detailsヘッダーには耐量子暗号（PQC）の利用有無を含むTLS暗号詳細（キー交換、署名スキーム、署名公開鍵タイプ）が含まれます。ネットワーク別にトラフィックとパフォーマンスを分析したいお客様や、単一プロバイダーからの異常トラフィックを切り分けたいお客様に適しています。耐量子暗号で接続している閲覧者の割合を測定し、未対応クライアントを特定したいお客様にも有用です。ヘッダーをオリジンへ転送するには、origin request policyに追加してディストリビューションにアタッチします。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility/)