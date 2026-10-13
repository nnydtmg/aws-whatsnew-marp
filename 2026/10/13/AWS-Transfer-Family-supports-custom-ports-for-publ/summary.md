# AWS Transfer FamilyのパブリックSFTPサーバーでカスタムポートが利用可能に

AWS Transfer Family supports custom ports for public SFTP servers

**カテゴリ:** What's New
**公開日:** 2026-10-12T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/transfer-family-custom-ports-sftp/)

このページでは、AWS What's Newで発表された「AWS Transfer Family supports custom ports for public SFTP servers」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Transfer FamilyのパブリックSFTPサーバーでカスタムポートと通信モードを設定できる新機能が追加されました。このアップデートは特定のポート要件を持つクライアントやセキュリティを向上させたいユーザーに適しています。

## このアップデートで何が変わったか

AWS Transfer FamilyはパブリックSFTPサーバーでカスタムポートを設定できるようになりました。最大3つのポートを22または2000から65535の範囲で設定できます。各ポートに対してクライアントファーストまたはサーバーファーストの通信モードを選択できます。この新機能は異なるポートを必要とするクライアントをサポートするユーザーに適しています。SFTPクライアントが自ら通信を開始する場合に接続の停滞を防ぐために役立ちます。ポート22以外を使用することで自動スキャナーからの不要な接続試行を減らしたいユーザーに適しています。この機能はTransfer FamilyのパブリックSFTPサーバーが提供されているすべてのAWSリージョンで利用可能です。AWS Transfer Familyコンソール、AWS CLI、AWS SDKから開始できます。

## 対象ユーザー

AWS Transfer FamilyはパブリックSFTPサーバーでカスタムポートを設定できるようになりました。最大3つのポートを22または2000から65535の範囲で設定できます。各ポートに対してクライアントファーストまたはサーバーファーストの通信モードを選択できます。この新機能は異なるポートを必要とするクライアントをサポートするユーザーに適しています。SFTPクライアントが自ら通信を開始する場合に接続の停滞を防ぐために役立ちます。ポート22以外を使用することで自動スキャナーからの不要な接続試行を減らしたいユーザーに適しています。この機能はTransfer FamilyのパブリックSFTP

## 詳細

AWS Transfer FamilyはパブリックSFTPサーバーでカスタムポートを設定できるようになりました。最大3つのポートを22または2000から65535の範囲で設定できます。各ポートに対してクライアントファーストまたはサーバーファーストの通信モードを選択できます。この新機能は異なるポートを必要とするクライアントをサポートするユーザーに適しています。SFTPクライアントが自ら通信を開始する場合に接続の停滞を防ぐために役立ちます。ポート22以外を使用することで自動スキャナーからの不要な接続試行を減らしたいユーザーに適しています。この機能はTransfer FamilyのパブリックSFTPサーバーが提供されているすべてのAWSリージョンで利用可能です。AWS Transfer Familyコンソール、AWS CLI、AWS SDKから開始できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/transfer-family-custom-ports-sftp/)