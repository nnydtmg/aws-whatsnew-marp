---
marp: true
theme: aws-whatsnew
paginate: true
---

# Network Load Balancer が相互TLS（mTLS）認証をサポート

AWS Network Load Balancer now supports mutual TLS authentication

**What's New** | 2026-11-19T08:00:00

---

## 概要

- AWS Network Load Balancerが相互TLS認証をサポートし、クライアント証明書の検証をNLBにオフロードできるようになりました。
- 独自プロキシを運用されていたお客様や、IoTおよび規制環境のお客様に有用です。

---

## 前提・背景

### これまでの課題

これまでNLBでmTLSが必要な場合は独自解汾やサードパーティプロキシを運用する必要がありました。ALBではmTLSが既に提供されていましたが、NLBはLayer 4の超低レイテンシでTLS終端するケースに対応しています。IoT、API、マイクロサービス、規制環境で双方の身元証明が必要なお客様に有用です。

---

### 関連する最近の動向

- **AWS Network Load Balancer now supports mutual TLS authentication**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/network-load-balancer-mtls/)

- **Introducing mTLS for Network Load Balancer**
  [詳...

---

## 変更内容・新機能

AWS Network Load Balancer（NLB）が相互TLS（mTLS）認証をサポートしました。NLBのTLSリスナーでX.509クライアント証明書を検証し、信頼されたクライアントのみがターゲットに到達できます。mTLSの計算量の多い処理をNLBにオフロードでき、バックエンドへの証明書ロジック追加が不要になりました。

証明書はX.509v3、公開鍵はRSA 2K–8KまたはECDSA（secp256r1/384r1/521r1）に対応します。評価順序は信頼チェーン検証 → 証明書フィルター → 失効確認です。ターゲットには証明書データは渡されず、バックエンドの変更は不要です。全商用リージョンおよびAWS GovCloud (US)で利用可能です。AWS Management Console、AWS CLI、API、CloudFormationで設定できます。

---

## まとめ

- AWS Network Load Balancer now supports mutual TLS authentication について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/network-load-balancer-mtls/)

### 関連情報

- [AWS Network Load Balancer now supports mutual TLS authentication](https://aws.amazon.com/about-aws/whats-new/2026/11/network-load-balancer-mtls/)
- [Introducing mTLS for Network Load Balancer](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-mtls-for-network-load-balancer/)
- [Authenticate clients using mutual TLS for Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/mutual-authentication.html)
- [Introducing mTLS for Application Load Balancer](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-mtls-for-application-load-balancer)