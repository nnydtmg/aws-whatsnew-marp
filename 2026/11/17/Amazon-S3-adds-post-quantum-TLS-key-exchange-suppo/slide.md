---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3がS3 VectorsとPrivateLinkでポスト量子TLS鍵交換をサポート

Amazon S3 adds post-quantum TLS key exchange support to additional S3 endpoints

**What's New** | 2026-11-17

---

## 概要

- Amazon S3はS3 VectorsとAWS PrivateLink for Amazon S3インターフェースエンドポイントにポスト量子TLS（PQ-TLS）鍵交換サポートを追加した。
- 既存のリージョナルS3、S3 Tables、S3 Express One Zoneに続く拡張。
- NIST標準のML-KEM対応クライアントはアプリ変更なしで全リージョン無償利用可能。

---

## 前提・背景

### これまでの課題

【前提・背景】量子コンピュータの実用化により、伝統的な公開鍵暗号は破壊される可能性がある。harvest now, decrypt later攻撃への備えが必要。2025年11月にリージョナルS3、S3 Tables、S3 Express One ZoneでPQ-TLSが利用開始したが、S3 VectorsとAWS PrivateLinkは未対応だった。

---

### 関連する最近の動向

- **Amazon S3 now supports post-quantum TLS key exchange on S3 endpoints**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/11/s3-post-quantum-tls-key-exchange-endpoints)

- **Using...

---

## 変更内容・新機能

【概要】Amazon S3はS3 VectorsとAWS PrivateLink for Amazon S3インターフェースエンドポイントにポスト量子TLS（PQ-TLS）鍵交換サポートを追加。既存のリージョナルS3、S3 Tables、S3 Express One Zoneエンドポイントのポスト量子暗号サポートを拡張する。

【変更内容】S3 VectorsとPrivateLinkインターフェースエンドポイントがNIST標準のML-KEM（Module-Lattice-Based Key-Encapsulation Mechanism）をサポート。クライアントがサポートする最強の鍵交換を自動交渉するため、ML-KEM対応クライアントはアプリやエンドポイント設定の変更不要。ハイブリッドPQ-TLSはECDHとML-KEMを組み合わせ、TLS 1.3で利用可能。

---

## 効果・メリット

- 【効果・メリット】アプリ変更不要、全AWSリージョンで追加費用なし、通信途上の量子认抗型暗号を実現。
- AES-256のサーバーサイド暗号と組み合わせて通信途上・保存時の両方を保護。
- PrivateLinkでのプライベート接続でもPQ-TLSが利用可能に。

---

## ユースケース

【ユースケース】S3 Vectorsを使うAI/MLワークロード、PrivateLinkでS3に接続するエンタープライズ、長期保管が必要な機密データの通信保護。

---

## まとめ

- Amazon S3 adds post-quantum TLS key exchange support to additional S3 endpoints について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-post-quantum-tls-key-exchange-support/)

### 関連情報

- [Amazon S3 now supports post-quantum TLS key exchange on S3 endpoints](https://aws.amazon.com/about-aws/whats-new/2025/11/s3-post-quantum-tls-key-exchange-endpoints)
- [Using hybrid post-quantum TLS with Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryptionInTransit.PQ-TLS.html)
- [Configuring hybrid post-quantum TLS for your client](https://docs.aws.amazon.com/AmazonS3/latest/userguide/pqtls-how-to.html)
- [Post-Quantum Cryptography on AWS](https://aws.amazon.com/security/post-quantum-cryptography)
- [PQC Standardization Timeline and Migration on AWS](https://hidekazu-konishi.com/entry/post_quantum_cryptography_standardization_timeline.html)