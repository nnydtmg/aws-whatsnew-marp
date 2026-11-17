---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security Hubがインストール済みソフトウェアと使用状況からリソース重要度を推論

AWS Security Hub now infers resource criticality from installed software and usage

**What's New** | 2026-11-17T20:00:00

---

## 概要

- AWS Security Hubはインストール済みソフトウェアとリソース使用状況をリソース重要度（resource criticality）の新しいシグナルとして追加しました。
- 重要度はビジネスにおけるリソースの重要さを示し、露出（exposure）ファインディングの優先順位付けに利用されます。
- 既存のタグ・名前からの推論に加え、タグ付けや追加設定なしでより多くのリソースに意味のある重要度が付与されます。
- Security Hub Essentialsプランに追加コストなしで含ま...

---

## 前提・背景

### これまでの課題

これまでSecurity Hubはリソースタグとリソース名から重要度を推論していましたが、タグ付けが不統一なリソースはUnknown（不明）となり、露出の優先順位付けが困難でした。インストール済みソフトウェアと使用状況を追加シグナルとすることで、タグ付けや追加設定なしでより多くのリソースに意味のある重要度が付与されます。

---

### 関連する最近の動向

- **AWS Security Hub resource criticality: where to check it and what it costs**
  [詳細](https://puppyip.com/en/resources/aws-security-hub-resource-criticality-guide)

- **Document history for the AWS Secu...

---

## 変更内容・新機能

AWS Security Hubは、インストール済みソフトウェアとリソース使用状況をリソース重要度（resource criticality）のシグナルとして追加しました。重要度はリソースがビジネスにとってどの程度重要かを示し、Security Hubはこれを使って露出（exposure）ファインディングをランク付けします。これにより中央セキュリティチームは、最も重要なリソースに影響する露出を優先的に対応できます。

これまでSecurity Hubはリソースタグとリソース名から重要度を推論していましたが、タグ付けが不統一なリソースはUnknown（不明）となり、露出の優先順位付けが困難でした。インストール済みソフトウェアと使用状況を追加シグナルとすることで、タグ付けや追加設定なしでより多くのリソースに意味のある重要度が付与されます。

---

## ユースケース

例えば、データベースエンジンを実行し定常的なトラフィックを処理するEC2インスタンスは、監視エージェントのみを実行しアイドル状態のインスタンスよりも高い重要度が付与されます。

---

## まとめ

- AWS Security Hub now infers resource criticality from installed software and usage について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-resource-criticality/)

### 関連情報

- [AWS Security Hub resource criticality: where to check it and what it costs](https://puppyip.com/en/resources/aws-security-hub-resource-criticality-guide)
- [Document history for the AWS Security Hub User Guide](https://docs.aws.amazon.com/securityhub/latest/userguide/doc-history.html)
- [AWS Security Hub now supports resource criticality for prioritization](https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-resource-criticality)
- [Software bill of materials - AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-v2-sbom.html)
- [AWS Security Hub now provides an SBOM inventory for your compute resources](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-sbom-inventory)