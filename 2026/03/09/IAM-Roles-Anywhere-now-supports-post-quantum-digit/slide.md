---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# IAM Roles Anywhere
量子耐性デジタル証明書対応

**発表日: 2026年3月9日**

---

## 概要

### ML-DSA量子耐性署名アルゴリズムの対応

- **IAM Roles Anywhere** が NIST 標準化の **ML-DSA** をサポート
- X.509証明書ベースの認証におけるセキュリティを大幅向上
- 量子コンピュータ脅威への対策が可能に
- AWS 外のワークロード認証をセキュアに実行

---

## 前提・背景

### 現在のセキュリティ課題

- 現在の RSA/ECC は将来の量子コンピュータに脆弱
- 「Save Now, Decrypt Later」攻撃による懸念
- エンタープライズシステムの長期セキュリティ確保が必須
- AWS 外ワークロードの認証方式の強化要求

### 市場の動向

- NIST が 2024年に PQC 標準化を完了
- 業界全体が post-quantum cryptography への移行を加速
- AWS が PQC 対応サービスを拡大中

---

## 主な機能

### ML-DSA（Module-Lattice Digital Signature Algorithm）

- **FIPS 204** に基づく量子耐性署名アルゴリズム
- 格子問題に基づくセキュリティ
- 大規模量子コンピュータからの保護を提供

### IAM Roles Anywhere での活用

- ML-DSA署名の CA 証明書をトラストアンカーとして利用可能
- ML-DSA キーにバインドされたエンドエンティティ証明書の発行
- AWS 外ワークロードの X.509 証明書ベース認証

---

## 対応範囲

### 利用可能なリージョン

- **AWS GovCloud（US）**
- **AWS European Sovereign Cloud（Germany）**
- **中国リージョン** を含む全リージョン
- IAM Roles Anywhere が利用可能な **すべての AWS リージョン**

---

## 効果・メリット

### セキュリティの向上

- 量子コンピュータ脅威への耐性確保
- X.509 証明書チェーンの長期的な安全性
- ハイブリッド認証戦略への対応（PQC + 従来方式）

### ユースケール対応

- AWS 外のオンプレミスワークロード
- ハイブリッドクラウド環境
- エッジデバイス・IoT
- マルチクラウド環境

### 運用の継続性

- 既存の IAM Roles Anywhere ワークフローと互換性維持
- 段階的な PQC 導入が可能
- 管理複雑度の増加を最小化

---

## 実装・利用方法

### CA 証明書の設定

1. AWS Private CA で ML-DSA CA 証明書を作成
2. IAM Roles Anywhere でトラストアンカーとして登録
3. ML-DSA キーでエンドエンティティ証明書に署名

### ワークロード認証

1. ML-DSA 証明書を使用して AWS STS に認証要求
2. 一時的な AWS 認証情報を取得
3. AWS リソースへのアクセスを実行

---

## ユースケース

### ハイブリッドクラウド

- オンプレミスシステムから AWS への安全なアクセス
- 複数クラウド環境での統一認証

### エンタープライズ

- 長期セキュリティが必要なシステム（金融、医療）
- 将来の規制要件への先制対応

### IoT・エッジ

- デバイスから AWS への量子耐性通信
- 長寿命デバイスのセキュリティ確保

---

## まとめ

### IAM Roles Anywhere の進化

- 量子コンピュータ時代への対応を開始
- X.509 証明書認証の強化版
- AWS 外ワークロードのセキュリティ大幅向上

### 次のステップ

1. PQC 対応の重要性を組織内で共有
2. 既存 IAM Roles Anywhere 環境の評価
3. ML-DSA への段階的移行計画を策定
4. AWS Private CA と連携した PQC 環境の構築

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/iam-roles-anywhere-post-quantum-digital-certificates/
- **IAM Roles Anywhere ドキュメント**: https://docs.aws.amazon.com/rolesanywhere/
- **Post-Quantum Cryptography with AWS**: https://aws.amazon.com/security/post-quantum-cryptography/
- **ML-DSA コード署名**: https://aws.amazon.com/blogs/security/post-quantum-ml-dsa-code-signing-with-aws-private-ca-and-aws-kms/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**