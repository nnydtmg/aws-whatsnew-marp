---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Backupの論理的エアギャップボールトがAmazon FSx for NetApp ONTAPをサポート

AWS Backup adds logically air-gapped vault support for Amazon FSx for NetApp ONTAP

**What's New** | 2026-09-28T08:00:00

---

## 概要

- AWS BackupがAmazon FSx for NetApp ONTAP向け論理的エアギャップボールトサポートを追加しました。
- 安全なバックアップ保護と迅速な復旧が可能になります。

---

## 前提・背景

### 関連する最近の動向

- **AWS Backup adds logically air-gapped vault support for Amazon FSx for NetApp ONTAP - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-backup-air-gapped-vault-fsx-ontap/)

- **Logically air-gapped vault - AWS Backup**
  [詳細](https://docs.aws.amazon.com/aws-backup/latest/devguide/logicallyairgappedvault.html)

- **Cross-Region and Cross-Account Backup for Amazon...

---

## 変更内容・新機能

AWS Backupの論理的エアギャップボールトがAmazon FSx for NetApp ONTAPをサポートするようになりました。FSx for NetApp ONTAPボリュームをイミュータブルでロックされたバックアップとして保護できます。バックアップは暗号化され同一アカウントまたは他のアカウントやリージョンに保存可能です。直接リストアにより復旧時間を短縮できます。この更新はAmazon FSx for NetApp ONTAPをご利用のお客様に適しております。ダウンタイム低減やコンプライアンス・災害復旧を重視する組織に良いです。

---

## 効果・メリット

- AWS Backupの論理的エアギャップボールトがAmazon FSx for NetApp ONTAPをサポートするようになりました。
- FSx for NetApp ONTAPボリュームをイミュータブルでロックされたバックアップとして保護できます。
- バックアップは暗号化され同一アカウントまたは他のアカウントやリージョンに保存可能です。
- 直接リストアにより復旧時間を短縮できます。
- この更新はAmazon FSx for NetApp ONTAPをご利用のお客様に適しております。

---

## まとめ

- AWS Backup adds logically air-gapped vault support for Amazon FSx for NetApp ONTAP について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-backup-air-gapped-vault-fsx-ontap/)

### 関連情報

- [AWS Backup adds logically air-gapped vault support for Amazon FSx for NetApp ONTAP - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-backup-air-gapped-vault-fsx-ontap/)
- [Logically air-gapped vault - AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/logicallyairgappedvault.html)
- [Cross-Region and Cross-Account Backup for Amazon FSx for NetApp ONTAP - NetApp Community](https://community.netapp.com/community/discussion/468353/cross-region-and-cross-account-backup-for-amazon-fsx-for-netapp-ontap)
- [Primary backups to logically air-gapped vaults - AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/lag-vault-primary-backup.html)