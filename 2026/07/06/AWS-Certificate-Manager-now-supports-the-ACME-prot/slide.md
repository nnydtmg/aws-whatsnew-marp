---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Certificate Manager が ACME プロトコルをサポート、公開証明書の自動発行に対応

AWS Certificate Manager now supports the ACME protocol for public certificates

**What's New** | 2026-07-06

---

## 概要

- AWS Certificate Manager（ACM）がACMEプロトコルをサポートし、完全管理型のACMEサーバーエンドポイントを提供することで、標準的なACMEv2互換クライアントを使用した公開TLS証明書の自動発行と更新が可能になりました。

---

## 変更内容・新機能

AWS Certificate Manager（ACM）がACMEプロトコルに対応し、完全管理型のACMEサーバーエンドポイントを提供するようになりました。Certbot、cert-manager for Kubernetes、acme.shなどのACMEv2互換クライアントを使用して、Amazon Trust Servicesから45日間の有効期限を持つ公開TLS証明書を発行できます。CA/Browser Forumが2029年までに47日間の証明書有効期限を義務付けることに対応し、公開証明書の手動管理が不要になります。PKI管理者は、ドメインスコープの定義、ワイルドカード使用ポリシーの適用、アプリケーションチームへの委任などの一元化されたガバナンス制御を備えたマネージドACMEエンドポイントを作成できます。ドメイン検証はエンドポイントレベルで一度実行され、アプリケーション所有者は標準ACMEクライアントを使用して証明書をリクエストできます。すべてのアクティビティはACMコンソールで表示でき、AWS CloudTrailログとAmazon CloudWatchメトリクスで監査可能です

---

## まとめ

- AWS Certificate Manager now supports the ACME protocol for public certificates について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-certificate-manager-acme/)
