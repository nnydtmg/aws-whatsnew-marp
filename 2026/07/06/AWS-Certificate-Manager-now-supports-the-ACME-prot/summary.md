# AWS Certificate Manager が ACME プロトコルをサポート、公開証明書の自動発行に対応

AWS Certificate Manager now supports the ACME protocol for public certificates

**カテゴリ:** What's New
**公開日:** 2026-07-06
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-certificate-manager-acme/)

このページでは、AWS What's Newで発表された「AWS Certificate Manager now supports the ACME protocol for public certificates」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Certificate Manager（ACM）がACMEプロトコルをサポートし、完全管理型のACMEサーバーエンドポイントを提供することで、標準的なACMEv2互換クライアントを使用した公開TLS証明書の自動発行と更新が可能になりました。

## このアップデートで何が変わったか

AWS Certificate Manager（ACM）がACMEプロトコルに対応し、完全管理型のACMEサーバーエンドポイントを提供するようになりました。Certbot、cert-manager for Kubernetes、acme.shなどのACMEv2互換クライアントを使用して、Amazon Trust Servicesから45日間の有効期限を持つ公開TLS証明書を発行できます。CA/Browser Forumが2029年までに47日間の証明書有効期限を義務付けることに対応し、公開証明書の手動管理が不要になります。PKI管理者は、ドメインスコープの定義、ワイルドカード使用ポリシーの適用、アプリケーションチームへの委任などの一元化されたガバナンス制御を備えたマネージドACMEエンドポイントを作成できます。ドメイン検証はエンドポイントレベルで一度実行され、アプリケーション所有者は標準ACMEクライアントを使用して証明書をリクエストできます。すべてのアクティビティはACMコンソールで表示でき、AWS CloudTrailログとAmazon CloudWatchメトリクスで監査可能です

## 対象ユーザー

AWS Certificate Manager（ACM）がACMEプロトコルに対応し、完全管理型のACMEサーバーエンドポイントを提供するようになりました。Certbot、cert-manager for Kubernetes、acme.shなどのACMEv2互換クライアントを使用して、Amazon Trust Servicesから45日間の有効期限を持つ公開TLS証明書を発行できます。CA/Browser Forumが2029年までに47日間の証明書有効期限を義務付けることに対応し、公開証明書の手動管理が不要になります。PKI管理者は、ドメインスコープの定義、ワイルドカード使用ポリシーの適用

## 詳細

AWS Certificate Manager（ACM）がACMEプロトコルに対応し、完全管理型のACMEサーバーエンドポイントを提供するようになりました。Certbot、cert-manager for Kubernetes、acme.shなどのACMEv2互換クライアントを使用して、Amazon Trust Servicesから45日間の有効期限を持つ公開TLS証明書を発行できます。CA/Browser Forumが2029年までに47日間の証明書有効期限を義務付けることに対応し、公開証明書の手動管理が不要になります。PKI管理者は、ドメインスコープの定義、ワイルドカード使用ポリシーの適用、アプリケーションチームへの委任などの一元化されたガバナンス制御を備えたマネージドACMEエンドポイントを作成できます。ドメイン検証はエンドポイントレベルで一度実行され、アプリケーション所有者は標準ACMEクライアントを使用して証明書をリクエストできます。すべてのアクティビティはACMコンソールで表示でき、AWS CloudTrailログとAmazon CloudWatchメトリクスで監査可能です。この機能はすべての商用AWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-certificate-manager-acme/)
