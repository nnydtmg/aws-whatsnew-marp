---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Advanced JDBC Wrapper now provides client-side encryption

**What's New** | 2026-05-07

---

## 概要

- AWS Advanced JDBC WrapperのKMS暗号化プラグインにより、Javaアプリケーションはアプリケーションコードを変更することなく、Amazon RDSおよびAmazon Aurora上で列レベルのクライアント側暗号化を実現でき、PCI DSS、HIPAA、GDPRなどの規制要件に対応することができるようになりました。
- このオープンソースソリューションは、既存のSQL、Spring、Hibernateと統合され、セキュアなデータ保護を提供します。

---

## 前提・背景

### 関連する最近の動向

- **The AWS Advanced JDBC Wrapper now supports automatic query caching with Valkey**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-jdbc-caching-with-valkey/)

- **Unlock Amazon Aurora's Advanced Features with Standard JDBC Driver using AWS Advanced JDBC Wrapper**
  [詳細](https://aws.amazon.com/blogs/database/unlock-amazon-auroras-advanced-features-with-standard-jdbc-driver-using-aws-advanced-jdbc-wrapper/)

---

## 変更内容・新機能

- AWS Advanced JDBC Wrapperは、KMS暗号化プラグインを通じて、列レベルのクライアント側暗号化機能を提供するようになりました。
- このプラグインは、アプリケーションがデータベースに書き込む際に、データがデータベースに到達する前に暗号化し、読み取り時には復号化して返すため、平文はアプリケーションのみに表示されます。
- データベースエンジン内での復号化を回避することで、PCI DSS、HIPAA、GDPRなどの規制要件下での認証情報の侵害やSQL インジェクション攻撃によるリスクを軽減します。
- このプラグインは、既存のSQL、Spring、Hibernate、接続プールの設定とシームレスに統合され、アプリケーションコードの変更を必要としません。
- KMS暗号化プラグインは、Amazon RDSおよびAmazon Aurora PostgreSQL、MySQL互換データベースで動作します。
- このプラグインはApache 2.0ライセンスのオープンソースプロジェクトとして利用可能です。

---

## まとめ

- AWS Advanced JDBC Wrapper now provides client-side encryption について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-advanced-jdbc-wrapper-encryption/)

### 関連情報

- [The AWS Advanced JDBC Wrapper now supports automatic query caching with Valkey](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-jdbc-caching-with-valkey/)
- [Unlock Amazon Aurora's Advanced Features with Standard JDBC Driver using AWS Advanced JDBC Wrapper](https://aws.amazon.com/blogs/database/unlock-amazon-auroras-advanced-features-with-standard-jdbc-driver-using-aws-advanced-jdbc-wrapper/)