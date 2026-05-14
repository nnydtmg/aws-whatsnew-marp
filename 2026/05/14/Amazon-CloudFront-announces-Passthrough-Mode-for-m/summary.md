# Amazon CloudFront の mTLS パススルーモード対応

Amazon CloudFront announces Passthrough Mode for mutual TLS (Viewer)

**カテゴリ:** What's New
**公開日:** 2026-05-14T21:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-passthrough/)

このページでは、AWS What's Newで発表された「Amazon CloudFront announces Passthrough Mode for mutual TLS (Viewer)」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudFrontがビューアー相互TLSのパススルーモードを新たに発表いたしました。このモードにより、既存のmTLS検証インフラストラクチャをオリジンで保有されているお客様は、CloudFront側での検証ロジック実装なしに、クライアント証明書をオリジンに転送し、エンドツーエンドの認証を実現できるようになります。

## このアップデートで何が変わったか

- Amazon CloudFrontが、ビューアー相互TLS（mTLS）認証のパススルーモードをサポートすることを発表いたしました。
- このモードでは、CloudFrontがクライアント証明書の検証を行わず、オリジンに転送することが可能になります。
- 既存のmTLS実装をオリジンで保有されているお客様が、CloudFront側で検証ロジックを実装することなく利用できるようになります。
- パススルーモードでは、CloudFrontがすべてのリクエストをクライアントの完全な証明書チェーンとともにオリジンに転送いたします。
- キャッシング機能は無効となり、各リクエストがエンドツーエンドでオリジンにより認証されることが保証されます。
- 接続レベルのデータを検査または変換できる接続機能は引き続き利用可能であり、証明書データをオリジンに到達する前に処理することができます。
- CloudFrontの相互TLS（ビューアー）パススルーモードは、追加費用なしで利用可能です。

## 詳細

- Amazon CloudFrontが、ビューアー相互TLS（mTLS）認証のパススルーモードをサポートすることを発表いたしました。
- このモードでは、CloudFrontがクライアント証明書の検証を行わず、オリジンに転送することが可能になります。
- 既存のmTLS実装をオリジンで保有されているお客様が、CloudFront側で検証ロジックを実装することなく利用できるようになります。
- パススルーモードでは、CloudFrontがすべてのリクエストをクライアントの完全な証明書チェーンとともにオリジンに転送いたします。
- キャッシング機能は無効となり、各リクエストがエンドツーエンドでオリジンにより認証されることが保証されます。
- 接続レベルのデータを検査または変換できる接続機能は引き続き利用可能であり、証明書データをオリジンに到達する前に処理することができます。
- CloudFrontの相互TLS（ビューアー）パススルーモードは、追加費用なしで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-passthrough/)