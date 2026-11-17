# AWS Security Hubがインストール済みソフトウェアと使用状況からリソース重要度を推論

AWS Security Hub now infers resource criticality from installed software and usage

**カテゴリ:** What's New
**公開日:** 2026-11-17T20:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-resource-criticality/)

このページでは、AWS What's Newで発表された「AWS Security Hub now infers resource criticality from installed software and usage」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Security Hubはインストール済みソフトウェアとリソース使用状況をリソース重要度（resource criticality）の新しいシグナルとして追加しました。重要度はビジネスにおけるリソースの重要さを示し、露出（exposure）ファインディングの優先順位付けに利用されます。既存のタグ・名前からの推論に加え、タグ付けや追加設定なしでより多くのリソースに意味のある重要度が付与されます。Security Hub Essentialsプランに追加コストなしで含まれ、新しい有効化操作は不要です。

## このアップデートで何が変わったか

AWS Security Hubは、インストール済みソフトウェアとリソース使用状況をリソース重要度（resource criticality）のシグナルとして追加しました。重要度はリソースがビジネスにとってどの程度重要かを示し、Security Hubはこれを使って露出（exposure）ファインディングをランク付けします。これにより中央セキュリティチームは、最も重要なリソースに影響する露出を優先的に対応できます。

これまでSecurity Hubはリソースタグとリソース名から重要度を推論していましたが、タグ付けが不統一なリソースはUnknown（不明）となり、露出の優先順位付けが困難でした。インストール済みソフトウェアと使用状況を追加シグナルとすることで、タグ付けや追加設定なしでより多くのリソースに意味のある重要度が付与されます。

## 活用シーン

例えば、データベースエンジンを実行し定常的なトラフィックを処理するEC2インスタンスは、監視エージェントのみを実行しアイドル状態のインスタンスよりも高い重要度が付与されます。

## 詳細

AWS Security Hubは、インストール済みソフトウェアとリソース使用状況をリソース重要度（resource criticality）のシグナルとして追加しました。重要度はリソースがビジネスにとってどの程度重要かを示し、Security Hubはこれを使って露出（exposure）ファインディングをランク付けします。これにより中央セキュリティチームは、最も重要なリソースに影響する露出を優先的に対応できます。

これまでSecurity Hubはリソースタグとリソース名から重要度を推論していましたが、タグ付けが不統一なリソースはUnknown（不明）となり、露出の優先順位付けが困難でした。インストール済みソフトウェアと使用状況を追加シグナルとすることで、タグ付けや追加設定なしでより多くのリソースに意味のある重要度が付与されます。

例えば、データベースエンジンを実行し定常的なトラフィックを処理するEC2インスタンスは、監視エージェントのみを実行しアイドル状態のインスタンスよりも高い重要度が付与されます。

これらのシグナルはSecurity Hub Essentialsプランに追加コストなしで含まれ、新しい有効化操作は不要です。重要度はResourcesページのカラムでソート・フィルター・グループでき、露出ファインディングのImpact assessmentタブにも表示されます。自動化ルールで重要度を設定することも可能で、推論ソース（タグ・名前・ソフトウェア・使用状況）も記録されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-resource-criticality/)