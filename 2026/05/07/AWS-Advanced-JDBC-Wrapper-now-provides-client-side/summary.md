# AWS Advanced JDBC Wrapper now provides client-side encryption

**カテゴリ:** What's New
**公開日:** 2026-05-07
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/aws-advanced-jdbc-wrapper-encryption/](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-advanced-jdbc-wrapper-encryption/)

---

## 要約

AWS Advanced JDBC WrapperのKMS暗号化プラグインにより、Javaアプリケーションはアプリケーションコードを変更することなく、Amazon RDSおよびAmazon Aurora上で列レベルのクライアント側暗号化を実現でき、PCI DSS、HIPAA、GDPRなどの規制要件に対応することができるようになりました。このオープンソースソリューションは、既存のSQL、Spring、Hibernateと統合され、セキュアなデータ保護を提供します。

## 詳細

- AWS Advanced JDBC Wrapperは、KMS暗号化プラグインを通じて、列レベルのクライアント側暗号化機能を提供するようになりました。
- このプラグインは、アプリケーションがデータベースに書き込む際に、データがデータベースに到達する前に暗号化し、読み取り時には復号化して返すため、平文はアプリケーションのみに表示されます。
- データベースエンジン内での復号化を回避することで、PCI DSS、HIPAA、GDPRなどの規制要件下での認証情報の侵害やSQL インジェクション攻撃によるリスクを軽減します。
- このプラグインは、既存のSQL、Spring、Hibernate、接続プールの設定とシームレスに統合され、アプリケーションコードの変更を必要としません。
- KMS暗号化プラグインは、Amazon RDSおよびAmazon Aurora PostgreSQL、MySQL互換データベースで動作します。
- このプラグインはApache 2.0ライセンスのオープンソースプロジェクトとして利用可能です。