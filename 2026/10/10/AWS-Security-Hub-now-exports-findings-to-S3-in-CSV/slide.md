---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security Hubが検出結果のS3エクスポートをCSV/JSON形式で提供開始

AWS Security Hub now exports findings to S3 in CSV or JSON format

**What's New** | 2026-10-09T22:00:00

---

## 概要

- AWS Security Hubは、検出結果をS3へCSVまたはJSON形式でエクスポートできる機能を追加いたしました。
- 本機能は、コンプライアンス報告や監査を行うセキュリティチームに適しております。

---

## 前提・背景

### 関連する最近の動向

- **Exporting Amazon Inspector findings reports - Amazon Inspector**
  [詳細](https://docs.aws.amazon.com/inspector/latest/user/findings-managing-exporting-reports.html)

- **How to export AWS Security Hub findings to CSV format | AWS Security Blog**
  [詳細](https://aws.amazon.com/blogs/security/how-to-export-aws-security-hub-findings-to-csv-format)

- **Export Findings from Security H...

---

## 変更内容・新機能

- AWS Security Hubは、検出結果をAmazon S3へCSVまたはJSON（OCSF）形式でエクスポートする新機能を提供いたします。
- 脅威、エクスポージャー、脆弱性、ポスチャ管理、機密データ、すべての検出結果など、コンソールの全検出結果ページからオンデマンドでエクスポートし、お客様のS3バケットへ配信いたします。
- 独自の抽出パイプラインを構築・維持する必要がなくなります。
- 本アップデートは、コンプライアンス報告や監査証跡のために検出結果をコンソール外で必要とするセキュリティチームに適しております。

---

## まとめ

- AWS Security Hub now exports findings to S3 in CSV or JSON format について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-exports-s3-csv-json/)

### 関連情報

- [Exporting Amazon Inspector findings reports - Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/findings-managing-exporting-reports.html)
- [How to export AWS Security Hub findings to CSV format | AWS Security Blog](https://aws.amazon.com/blogs/security/how-to-export-aws-security-hub-findings-to-csv-format)
- [Export Findings from Security Hub in OCSF Format: A Complete Guide - k9 Security](https://www.k9security.io/posts/2025/10/export-findings-from-security-hub-in-ocsf-format-a-complete-guide)
- [GitHub - aws-samples/aws-security-hub-findings-historical-export](https://github.com/aws-samples/aws-security-hub-findings-historical-export)
- [Download AWS Security Hub CSV report | AWS Security Blog](https://aws.amazon.com/blogs/security/download-aws-security-hub-csv-report)