# AWS Certificate Manager now supports native certificate search

**カテゴリ:** What's New
**公開日:** 2026-04-07
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/aws-certificate-manager-search/](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-certificate-manager-search/)

---

## 要約

AWS Certificate Manager (ACM)にネイティブな証明書検索機能が追加され、ドメイン名やARN、有効性などのパラメータを使用してコンソールまたはSearchCertificates APIから証明書を検索できるようになりました。この機能は、複数の証明書を管理し、期限切れ間近の証明書を効率的に特定する必要があるユーザーに特に有用です。

## 詳細

AWS Certificate Manager (ACM)にネイティブな証明書検索機能が追加されました。ACMコンソールに検索バーが実装され、ドメイン名、証明書ARN、証明書の有効性などの複数のパラメータを使用して証明書を検索できるようになりました。新しいSearchCertificates APIが提供されており、プログラマティックに証明書を検索することが可能です。この機能は、複数の証明書を管理するユーザーが、特定のドメインを持つ証明書や、間もなく期限切れになる証明書を効率的に検索する場合に有用です。この機能は、すべてのPublic AWS、AWS China、およびAWS GovCloud地域で利用可能です。この更新は、証明書管理の効率性を向上させ、運用負荷を軽減する必要があるユーザーに特に適しています。