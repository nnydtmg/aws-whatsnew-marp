---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Transfer FamilyのパブリックSFTPサーバーでカスタムポートが利用可能に

AWS Transfer Family supports custom ports for public SFTP servers

**What's New** | 2026-10-12T08:00:00

---

## 概要

- AWS Transfer FamilyのパブリックSFTPサーバーでカスタムポートと通信モードを設定できる新機能が追加されました。
- このアップデートは特定のポート要件を持つクライアントやセキュリティを向上させたいユーザーに適しています。

---

## 前提・背景

### 関連する最近の動向

- **Create an SFTP-enabled server - AWS Transfer Family**
  [詳細](https://docs.aws.amazon.com/transfer/latest/userguide/create-server-sftp.html)

- **Configuring an SFTP, FTPS, or FTP server endpoint**
  [詳細](https://docs.aws.amazon.com/transfer/latest/userguide/sftp-for-transfer-family.html)

- **Custom port possible with Transfer for SFTP?**
  [詳細](https://repost.aws/questions/QUMU...

---

## 変更内容・新機能

AWS Transfer FamilyはパブリックSFTPサーバーでカスタムポートを設定できるようになりました。最大3つのポートを22または2000から65535の範囲で設定できます。各ポートに対してクライアントファーストまたはサーバーファーストの通信モードを選択できます。この新機能は異なるポートを必要とするクライアントをサポートするユーザーに適しています。SFTPクライアントが自ら通信を開始する場合に接続の停滞を防ぐために役立ちます。ポート22以外を使用することで自動スキャナーからの不要な接続試行を減らしたいユーザーに適しています。この機能はTransfer FamilyのパブリックSFTPサーバーが提供されているすべてのAWSリージョンで利用可能です。AWS Transfer Familyコンソール、AWS CLI、AWS SDKから開始できます。

---

## 効果・メリット

- AWS Transfer FamilyのパブリックSFTPサーバーでカスタムポートと通信モードを設定できる新機能が追加されました。
- このアップデートは特定のポート要件を持つクライアントやセキュリティを向上させたいユーザーに適しています。

---

## まとめ

- AWS Transfer Family supports custom ports for public SFTP servers について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/transfer-family-custom-ports-sftp/)

### 関連情報

- [Create an SFTP-enabled server - AWS Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/create-server-sftp.html)
- [Configuring an SFTP, FTPS, or FTP server endpoint](https://docs.aws.amazon.com/transfer/latest/userguide/sftp-for-transfer-family.html)
- [Custom port possible with Transfer for SFTP?](https://repost.aws/questions/QUMUS4NzxuSgai7S9kE_vYtw/custom-port-possible-with-transfer-for-sftp)
- [AWS Transfer Family supports custom ports for public SFTP servers](https://aws.amazon.com/about-aws/whats-new/2026/10/transfer-family-custom-ports-sftp/)