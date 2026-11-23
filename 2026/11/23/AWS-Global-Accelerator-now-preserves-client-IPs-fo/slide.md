---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Global AcceleratorがTLSリスナー付きNLBでクライアントIP保持をサポート

AWS Global Accelerator now preserves client IPs for NLBs with TLS listeners

**What's New** | 2026-11-23T16:00:00

---

## 概要

- AWS Global AcceleratorはTLSリスナー付きNLBでもクライアントIPを保持できるようになり、レイヤー4でのTLS終端と実クライアントIPの両方を必要とするお客様に適した更新でございます。

---

## 前提・背景

### 関連する最近の動向

- **Requirements for resources you add as accelerator endpoints - AWS Global Accelerator**
  [詳細](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-caveats.html)

- **How to configure Client IP Preservation with Global Accelerator | AWS re:Post**
  [詳細](https://repost.aws/questions/QU_BadftPRRZCEFkujF-s0jA/how-to-configure-client-ip-preservation-with-global-ac...

---

## 変更内容・新機能

-新機能は、AWS Global AcceleratorがTLSリスナー付きNLBでもクライアントIPアドレスを保持できるようになったことです。
- NLBでTLSを終端しながら、元のクライアントIPアドレスをアプリケーションで確認できます。
- 追加設定は不要であり、商用リージョンでは追加料金なしでご利用いただけます。
- 本更新は、レイヤー4でのTLS終端が必要なワークロードに適しております。
- 非HTTPのTCP、静的またはElastic IPが必要なアプリケーション、高スループット通信をご利用のお客様に有益です。
- 実クライアントIPに基づくセキュリティやコンプライアンス制御が必要なお客様に適しております。

---

## まとめ

- AWS Global Accelerator now preserves client IPs for NLBs with TLS listeners について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/global-accelerator-client-ip-nlb-tls/)

### 関連情報

- [Requirements for resources you add as accelerator endpoints - AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-caveats.html)
- [How to configure Client IP Preservation with Global Accelerator | AWS re:Post](https://repost.aws/questions/QU_BadftPRRZCEFkujF-s0jA/how-to-configure-client-ip-preservation-with-global-accelerator)
- [Requirements for endpoints with client IP address preservation - AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints.sipp-caveats.html)
- [Configuring client IP address preservation with a Network Load Balancer in AWS Global Accelerator](https://aws.amazon.com/blogs/networking-and-content-delivery/configuring-client-ip-address-preservation-with-a-network-load-balancer-in-aws-global-accelerator)
- [Preserve client IP addresses in AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html)