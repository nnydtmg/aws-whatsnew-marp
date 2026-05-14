# Amazon CloudFront、Viewer mTLSに対するOCSP失効確認に対応

Amazon CloudFront announces support for OCSP Revocation for Mutual TLS (Viewer)

**カテゴリ:** What's New
**公開日:** 2026-05-13
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-ocsp-tls/)

このページでは、AWS What's Newで発表された「Amazon CloudFront announces support for OCSP Revocation for Mutual TLS (Viewer)」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudFrontがViewer mTLSに対するOCSP失効確認機能をサポートするようになり、クライアント証明書の失効状態をリアルタイムで検証できるようになりました。この機能は追加コストなしで提供され、規制業界やゼロトラストアーキテクチャを採用する組織に特に有用です。

## このアップデートで何が変わったか

Amazon CloudFrontがViewer mTLSに対するOCSP失効確認機能をサポートするようになりました。この機能により、接続確立時にクライアント証明書の失効状態をリアルタイムで検証できるようになります。従来は、CloudFront FunctionsとKeyValueStoreを使用して静的な失効リストを手動で管理する必要がありました。OCSPにより、CloudFrontはクライアント証明書に埋め込まれたレスポンダーURLに問い合わせを行い、発行認証局に対して直接失効状態を検証します。CloudFrontはOCSPレスポンスを最大30分間キャッシュし、後続の接続のレイテンシー影響を最小化します。OCSP結果は接続関数で公開され、顧客は猶予期間の設定、IPベースの例外処理、独自の失効リストとの組み合わせなどのカスタムロジックを実装できます。この機能は追加コストなしで利用可能です。

## 詳細

Amazon CloudFrontがViewer mTLSに対するOCSP失効確認機能をサポートするようになりました。この機能により、接続確立時にクライアント証明書の失効状態をリアルタイムで検証できるようになります。従来は、CloudFront FunctionsとKeyValueStoreを使用して静的な失効リストを手動で管理する必要がありました。OCSPにより、CloudFrontはクライアント証明書に埋め込まれたレスポンダーURLに問い合わせを行い、発行認証局に対して直接失効状態を検証します。CloudFrontはOCSPレスポンスを最大30分間キャッシュし、後続の接続のレイテンシー影響を最小化します。OCSP結果は接続関数で公開され、顧客は猶予期間の設定、IPベースの例外処理、独自の失効リストとの組み合わせなどのカスタムロジックを実装できます。この機能は追加コストなしで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-ocsp-tls/)
