# Amazon S3がS3 VectorsとPrivateLinkでポスト量子TLS鍵交換をサポート

Amazon S3 adds post-quantum TLS key exchange support to additional S3 endpoints

**カテゴリ:** What's New
**公開日:** 2026-11-17
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-post-quantum-tls-key-exchange-support/)

このページでは、AWS What's Newで発表された「Amazon S3 adds post-quantum TLS key exchange support to additional S3 endpoints」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3はS3 VectorsとAWS PrivateLink for Amazon S3インターフェースエンドポイントにポスト量子TLS（PQ-TLS）鍵交換サポートを追加した。既存のリージョナルS3、S3 Tables、S3 Express One Zoneに続く拡張。NIST標準のML-KEM対応クライアントはアプリ変更なしで全リージョン無償利用可能。

## このアップデートで何が変わったか

Amazon S3はS3 VectorsとAWS PrivateLink for Amazon S3インターフェースエンドポイントにポスト量子TLS（PQ-TLS）鍵交換サポートを追加した。これは既にリージョナルS3、S3 Tables、S3 Express One Zoneエンドポイントで利用可能だったポスト量子暗号サポートを拡張するものです。

S3 VectorsエンドポイントとPrivateLinkインターフェースエンドポイントは、NISTが標準化したポスト量子暗号アルゴリズムの1つであるML-KEM（Module-Lattice-Based Key-Encapsulation Mechanism）をサポートします。PQ-TLS鍵交換はML-KEM鍵交換アルゴリズムを使用するよう設定されたすべてのクライアントで利用可能です。S3 VectorsとPrivateLinkエンドポイントは、クライアントソフトウェアがサポートする最強の鍵交換を自動的に交渉するため、ML-KEMをサポートするクライアントはアプリケーションやエンドポイント設定を変更せずにPQ-TLS鍵交換のメリットを受け

## 対象ユーザー

Amazon S3はS3 VectorsとAWS PrivateLink for Amazon S3インターフェースエンドポイントにポスト量子TLS（PQ-TLS）鍵交換サポートを追加した。これは既にリージョナルS3、S3 Tables、S3 Express One Zoneエンドポイントで利用可能だったポスト量子暗号サポートを拡張するものです。

## 詳細

Amazon S3はS3 VectorsとAWS PrivateLink for Amazon S3インターフェースエンドポイントにポスト量子TLS（PQ-TLS）鍵交換サポートを追加した。これは既にリージョナルS3、S3 Tables、S3 Express One Zoneエンドポイントで利用可能だったポスト量子暗号サポートを拡張するものです。

S3 VectorsエンドポイントとPrivateLinkインターフェースエンドポイントは、NISTが標準化したポスト量子暗号アルゴリズムの1つであるML-KEM（Module-Lattice-Based Key-Encapsulation Mechanism）をサポートします。PQ-TLS鍵交換はML-KEM鍵交換アルゴリズムを使用するよう設定されたすべてのクライアントで利用可能です。S3 VectorsとPrivateLinkエンドポイントは、クライアントソフトウェアがサポートする最強の鍵交換を自動的に交渉するため、ML-KEMをサポートするクライアントはアプリケーションやエンドポイント設定を変更せずにPQ-TLS鍵交換のメリットを受けられます。

S3 VectorsおよびAWS PrivateLink for S3のPQ-TLS鍵交換は、すべてのAWSリージョンで追加費用なしでサポートされます。

ポスト量子TLSは通信途上の暗号にのみ使用され、クライアントからS3エンドポイントへのデータ移送を保護します。AES-256によるサーバーサイド暗号と組み合わせることで、通信途上と保存時の両方で量子认抗型の暗号を提供します。ハイブリッドPQ-TLSは伝統的な様円曲線暗号（ECDH）とML-KEMを組み合わせ、harvest now, decrypt later攻撃からデータを保護します。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-post-quantum-tls-key-exchange-support/)