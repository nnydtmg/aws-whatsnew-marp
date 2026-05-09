---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Route 53 Global Resolver now lets you add and remove AWS Regions for anycast DNS resolution

**What's New** | 2026-05-08T17:43:00

---

## 概要

- Amazon Route 53 Global Resolverが、AWSリージョンの動的な追加・削除機能を提供することで、組織の成長やコンプライアンス要件に対応した柔軟なDNS解決環境の構築が可能になりました。
- この機能は追加コストなしで利用可能です。

---

## 前提・背景

### 関連する最近の動向

- **Understanding Amazon Route 53 Global Resolver: Secure Anycast DNS Resolution from Anywhere**
  [詳細](https://repost.aws/articles/ARC-ghmRpmQhW3dXNYQ_k8lw/understanding-amazon-route-53-global-resolver-secure-anycast-dns-resolution-from-anywhere)

- **Amazon Route 53 Global Resolver is now generally available**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-route-53-global-resolver/)

---

## 変更内容・新機能

- Amazon Route 53 Global Resolverは、AnycastDNS解決のためのAWSリージョンを動的に追加・削除できるようになりました。

- この更新により、組織の成長に伴ってGlobal Resolverのカバレッジを柔軟に拡張することができます。

- コンプライアンス要件に対応するため、リージョンのデプロイメントを調整することが可能になりました。

- Global Resolverの設定を再作成することなく、AnycastDNS解決に参加するAWSリージョンを動的に調整できます。

---

## 効果・メリット

- **柔軟なスケーリング**: 組織の成長に伴ってGlobal Resolverのカバレッジを必要に応じて拡張
- **コンプライアンス対応**: リージョンの選択により、データレジデンシーと規制要件に対応
- **設定の簡素化**: 既存の設定を再作成することなくリージョンを動的に調整
- **追加コストなし**: この機能は追加コストなしで利用可能

---

## ユースケース

- **グローバル企業**: 新しい市場進出に伴う、DNSリージョンカバレッジの動的な拡張
- **規制対応**: データレジデンシー要件に応じたリージョンの選択肢の調整
- **ハイブリッド環境**: オンプレミス、支社、リモートロケーションからの安全なDNS解決

---

## まとめ

- Amazon Route 53 Global Resolverのリージョン動的追加・削除機能により、より柔軟なDNS解決環境の構築が可能に
- 設定変更による負担を軽減し、組織の成長やコンプライアンス要件への対応を迅速化
- 追加コストなしで利用可能

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-route-global-resolver-aws/)

### 関連情報

- [Understanding Amazon Route 53 Global Resolver: Secure Anycast DNS Resolution from Anywhere](https://repost.aws/articles/ARC-ghmRpmQhW3dXNYQ_k8lw/understanding-amazon-route-53-global-resolver-secure-anycast-dns-resolution-from-anywhere)
- [Amazon Route 53 Global Resolver is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-route-53-global-resolver/)
- [Introducing Amazon Route 53 Global Resolver for secure anycast DNS resolution (preview)](https://aws.amazon.com/blogs/aws/introducing-amazon-route-53-global-resolver-for-secure-anycast-dns-resolution-preview/)
- [How Route 53 Global Resolver works](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/gr-how-it-works.html)