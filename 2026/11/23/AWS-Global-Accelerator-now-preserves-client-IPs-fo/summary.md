# AWS Global AcceleratorがTLSリスナー付きNLBでクライアントIP保持をサポート

AWS Global Accelerator now preserves client IPs for NLBs with TLS listeners

**カテゴリ:** What's New
**公開日:** 2026-11-23T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/global-accelerator-client-ip-nlb-tls/)

このページでは、AWS What's Newで発表された「AWS Global Accelerator now preserves client IPs for NLBs with TLS listeners」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Global AcceleratorはTLSリスナー付きNLBでもクライアントIPを保持できるようになり、レイヤー4でのTLS終端と実クライアントIPの両方を必要とするお客様に適した更新でございます。

## このアップデートで何が変わったか

-新機能は、AWS Global AcceleratorがTLSリスナー付きNLBでもクライアントIPアドレスを保持できるようになったことです。
- NLBでTLSを終端しながら、元のクライアントIPアドレスをアプリケーションで確認できます。
- 追加設定は不要であり、商用リージョンでは追加料金なしでご利用いただけます。
- 本更新は、レイヤー4でのTLS終端が必要なワークロードに適しております。
- 非HTTPのTCP、静的またはElastic IPが必要なアプリケーション、高スループット通信をご利用のお客様に有益です。
- 実クライアントIPに基づくセキュリティやコンプライアンス制御が必要なお客様に適しております。

## 詳細

-新機能は、AWS Global AcceleratorがTLSリスナー付きNLBでもクライアントIPアドレスを保持できるようになったことです。
- NLBでTLSを終端しながら、元のクライアントIPアドレスをアプリケーションで確認できます。
- 追加設定は不要であり、商用リージョンでは追加料金なしでご利用いただけます。
- 本更新は、レイヤー4でのTLS終端が必要なワークロードに適しております。
- 非HTTPのTCP、静的またはElastic IPが必要なアプリケーション、高スループット通信をご利用のお客様に有益です。
- 実クライアントIPに基づくセキュリティやコンプライアンス制御が必要なお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/global-accelerator-client-ip-nlb-tls/)