# IAM Roles Anywhere now supports post-quantum digital certificates

**カテゴリ:** What's New
**公開日:** 2026-03-09
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/03/iam-roles-anywhere-post-quantum-digital-certificates

---

## 要約

IAM Roles AnywhereがML-DSA量子耐性デジタル署名アルゴリズムをサポートするようになり、X.509証明書ベースの認証におけるセキュリティが向上しました。このアップデートは、AWS外のワークロードをセキュアに認証する必要があるお客様にとって特に有用です。

## 詳細

### ML-DSAのサポート

- IAM Roles Anywhereが、NIST標準化の量子耐性デジタル署名アルゴリズムであるFIPS 204 Module-Lattice Digital Signature Standard（ML-DSA）をサポートするようになりました
- ML-DSAは、大規模量子コンピュータを保有する脅威アクターから保護するために設計されており、X.509証明書の署名アルゴリズムの脆弱化を防ぎます

### 利用可能な機能

- IAM Roles Anywhereのお客様は、ML-DSA署名されたCA証明書をトラストアンカーとして使用できるようになりました
- ML-DSAキーにバインドされたエンドエンティティ証明書を発行可能
- 従来の X.509 証明書と同様のワークフローで運用可能

### 対応範囲

- AWS GovCloud（US）リージョン
- AWS European Sovereign Cloud（Germany）リージョン
- 中国リージョン
- IAM Roles Anywhereが利用可能なすべてのAWSリージョン

### セキュリティ面での改善

- AWS外で実行されているワークロードがX.509証明書を使用してAWSリソースにアクセスする際のセキュリティを強化
- 一時的なAWS認証情報取得時のセキュリティ向上
- 将来の量子コンピュータ脅威への対策を実現

## 活用シーン

### ハイブリッドクラウド

- オンプレミスワークロードから AWS への安全なアクセス認証

### エンタープライズシステム

- 長期セキュリティが必要な金融・医療システム

### IoT・エッジコンピューティング

- デバイスから AWS への量子耐性通信

## 今後の推奨事項

1. 既存のIAM Roles Anywhere環境でML-DSA対応の評価を開始
2. AWS Private CAとの連携を確認
3. セキュリティ要件に応じて段階的に導入
4. 関連チームへの情報共有と教育実施