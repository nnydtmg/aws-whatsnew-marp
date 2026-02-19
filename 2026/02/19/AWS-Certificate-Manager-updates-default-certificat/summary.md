# AWS Certificate Manager updates default certificate validity to comply with new guidelines

**カテゴリ:** What's New
**公開日:** 2026-02-18T23:46:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/aws-certificate-manager-updates-default/](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-certificate-manager-updates-default/)

---

## 要約

AWS Certificate Managerが発行する公開証明書の有効期間を395日から198日に短縮し、CA/Browser Forumの新規制に準拠するようになりました。これに伴い、エクスポート可能な公開証明書の価格も大幅に引き下げられており、顧客側での対応は不要です。

## 詳細

- AWS Certificate Manager（ACM）が発行する公開証明書の最大有効期間が、395日から198日に短縮されました。

- この変更により、2026年3月15日から始まるCA/Browser Forumの新しい規制（証明書の有効期間が200日以下であること）に準拠することになります。

- 新規および更新される公開証明書は、デフォルトで198日の有効期間を持つようになります。

- 既存の395日有効期間の証明書は引き続き使用可能であり、更新または失効するまで有効です。

- ACMは証明書の自動更新機能を継続し、失効前45日での更新となります。

- 既存の395日有効期間の証明書は失効前60日で更新され、新しい198日の有効期間で更新されます。

- エクスポート可能な公開証明書の価格が引き下げられました。

- 198日のエクスポート可能な公開証明書は、1つの完全修飾ドメイン名あたり7ドル（従来は15ドル）になります。

- ワイルドカード名のエクスポート可能な公開証明書は79ドル（従来は149ドル）になります。

- 顧客側での対応は不要であり、すべての新規および更新される公開証明書に自動的に適用されます。
