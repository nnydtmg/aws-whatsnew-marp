# Network Load Balancer が相互TLS（mTLS）認証をサポート

AWS Network Load Balancer now supports mutual TLS authentication

**カテゴリ:** What's New
**公開日:** 2026-11-19T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/network-load-balancer-mtls/)

このページでは、AWS What's Newで発表された「AWS Network Load Balancer now supports mutual TLS authentication」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Network Load Balancerが相互TLS認証をサポートし、クライアント証明書の検証をNLBにオフロードできるようになりました。独自プロキシを運用されていたお客様や、IoTおよび規制環境のお客様に有用です。

## このアップデートで何が変わったか

AWS Network Load Balancer（NLB）が相互TLS（mTLS）認証をサポートしました。NLBのTLSリスナーでX.509クライアント証明書を検証し、信頼されたクライアントのみがターゲットに到達できます。mTLSの計算量の多い処理をNLBにオフロードでき、バックエンドへの証明書ロジック追加が不要になりました。

証明書はX.509v3、公開鍵はRSA 2K–8KまたはECDSA（secp256r1/384r1/521r1）に対応します。評価順序は信頼チェーン検証 → 証明書フィルター → 失効確認です。ターゲットには証明書データは渡されず、バックエンドの変更は不要です。全商用リージョンおよびAWS GovCloud (US)で利用可能です。AWS Management Console、AWS CLI、API、CloudFormationで設定できます。

## 対象ユーザー

証明書はX.509v3、公開鍵はRSA 2K–8KまたはECDSA（secp256r1/384r1/521r1）に対応します。評価順序は信頼チェーン検証 → 証明書フィルター → 失効確認です。ターゲットには証明書データは渡されず、バックエンドの変更は不要です。全商用リージョンおよびAWS GovCloud (US)で利用可能です。AWS Management Console、AWS CLI、API、CloudFormationで設定できます。

## 詳細

AWS Network Load Balancer（NLB）が相互TLS（mTLS）認証をサポートしました。NLBのTLSリスナーでX.509クライアント証明書を検証し、信頼されたクライアントのみがターゲットに到達できます。mTLSの計算量の多い処理をNLBにオフロードでき、バックエンドへの証明書ロジック追加が不要になりました。

トラストストア（CA証明書バンドル）をTLSリスナーにアタッチしてverifyモードで相互認証を実行します。CRL（証明書失効リスト）で信頼できなくなった証明書をブロックできます。クライアント証明書フィルターでCommon Name、Organizational Unit、SANのDNS名やURI（SPIFFE ID含む）に一致する特定クライアントのみを許可できます。

これまでNLBでmTLSが必要な場合は独自解汾やサードパーティプロキシを運用する必要がありました。ALBではmTLSが既に提供されていましたが、NLBはLayer 4の超低レイテンシでTLS終端するケースに対応しています。IoT、API、マイクロサービス、規制環境で双方の身元証明が必要なお客様に有用です。

証明書はX.509v3、公開鍵はRSA 2K–8KまたはECDSA（secp256r1/384r1/521r1）に対応します。評価順序は信頼チェーン検証 → 証明書フィルター → 失効確認です。ターゲットには証明書データは渡されず、バックエンドの変更は不要です。全商用リージョンおよびAWS GovCloud (US)で利用可能です。AWS Management Console、AWS CLI、API、CloudFormationで設定できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/network-load-balancer-mtls/)