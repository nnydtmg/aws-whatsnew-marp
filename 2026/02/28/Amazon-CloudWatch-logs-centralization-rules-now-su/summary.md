# Amazon CloudWatch logs centralization rules now support customizable destination log group structure

**カテゴリ:** What's New
**公開日:** 2026-02-27T18:50:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/cloudwatch-centralization-custom-groups/](https://aws.amazon.com/about-aws/whats-new/2026/02/cloudwatch-centralization-custom-groups/)

---

## 要約

Amazon CloudWatch Logs の集約ルールが、組織ID、リージョン、アカウントIDなどの属性を使用してカスタマイズ可能な宛先ロググループ名構造をサポートするようになりました。これにより、複数アカウント環境でログを組織の運営方法やコンプライアンス要件に合わせた階層構造で一元管理できるようになります。

## 詳細

- Amazon CloudWatch Logs の集約ルールが、カスタマイズ可能な宛先ロググループ構造に対応するようになりました。

- ソースアカウントID、リージョン、ロググループ名、組織ID、組織単位ID、ルートID、および完全な組織パスなどの属性を使用して、宛先ロググループ名パターンを定義できるようになりました。

- ${source.accountId}/${source.region}/${source.logGroup}のようなパターンを使用することで、123456789012/us-east-1/cloudtrail/managementeventのような形式で、ログの出所となるアカウントとリージョンを容易に識別できるようになりました。

- 複数のアカウント間でログを管理する組織は、自社の運営方法やコンプライアンス要件に合わせた意味のある階層構造でログを整理できるようになりました。

- この機能は、CloudWatch Logs の集約ルールがサポートされているすべてのリージョンで利用可能です。

- ログの最初の1コピーは無料で集約でき、追加のコピーは集約されたログ1GBあたり0.05ドルで課金されます。