---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon OpenSearch Serviceがインデックスレベル暗号化をサポート

Amazon OpenSearch Service now supports index-level encryption

**What's New** | 2026-10-12T02:30:00

---

## 概要

- Amazon OpenSearch Serviceがインデックスレベルの暗号化をサポートし、個別のKMSキーによるデータ保護が可能になりました。
- この更新はマルチテナント環境を利用するお客様に特に有益です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon OpenSearch Service now supports index-level encryption - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/opensearch-index-level-encryption)

- **Amazon OpenSearch Service now supports index-level encryption | The AWS News Feed**
  [詳細](https://aws-news.com/article/2026-04-30-amazon-opensearch-service-now-supports-index-level-encryption)

- **Encryption of ...

---

## 変更内容・新機能

Amazon OpenSearch Serviceはインデックスレベルの暗号化を新たにサポートするようになりました。各インデックスを独自のAWS KMSカスタマー管理キーで保存時に暗号化できます。同じドメイン上で異なる所有権や感度のデータを別々のキーで保護することが可能です。この機能はマルチテナントアプリケーションで各テナントのデータを独自のキーで暗号化したいお客様に適しています。既存のドメインレベルの保存時暗号化機能を拡張し、更精細な制御が可能になりました。有効化には、新規ドメイン作成時に暗号化モードをNativeに設定し、カスタマー管理のAWS KMSキーを指定します。その後、追加のキーをドメインに登録し、個別インデックスの暗号化に使用できます。OpenSearch 3.3以降のドメインで利用可能で、14のAWSリージョンで提供されます（米国東部（バージニア北部、オハイオ）、米国西部（オレゴン）、カナダ（中央）、アジアパシフィック（ムンバイ、ソウル、シンガポール、シドニー、東京）、ヨーロッパ（フランクフルト、アイルランド、ロンドン、パリ）、南米（サンパウロ））。本機能の追加料金はあ

---

## まとめ

- Amazon OpenSearch Service now supports index-level encryption について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/opensearch-index-level-encryption)

### 関連情報

- [Amazon OpenSearch Service now supports index-level encryption - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/opensearch-index-level-encryption)
- [Amazon OpenSearch Service now supports index-level encryption | The AWS News Feed](https://aws-news.com/article/2026-04-30-amazon-opensearch-service-now-supports-index-level-encryption)
- [Encryption of data at rest for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/encryption-at-rest.html)
- [Index-level encryption - Amazon OpenSearch Service Developer Guide](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/index-level-encryption.html)