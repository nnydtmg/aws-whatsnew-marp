---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Security Hub でネットワークスキャンが利用可能に

**発表日: 2026年7月8日**

---

## 概要

### Network Scanning機能の概要

- **新機能**: インターネットから実際に到達可能なリソースを自動的に検出
- **可視化**: セキュリティリスクを効果的に可視化
- **追加費用**: なし（Security Hub Essentialsに含まれる）
- **対象**: 既存顧客・新規顧客双方で利用可能

---

## 前提・背景

### 市場の動向と課題

- **マルチクラウド対応**: AWS環境とAzure環境を一元的に監視する必要性
- **セキュリティ検出の進化**: 設定検証から実際の到達可能性確認へ
- **継続的なセキュリティ評価**: Security Hubの拡張により統合運用が可能に

### 関連するセキュリティハブの更新

- Document history for the AWS Security Hub User Guide（2026年6月更新）
- AWS Security Hubのマルチクラウド環境への拡張（2026年3月）

---

## 主な機能

### Network Scanningの特徴

- **リソース検出**: パブリックIPアドレス、仮想マシン、ロードバランサーを特定
- **マルチクラウド対応**: AWSおよびAzure環境全体で発見
- **ポート分析**: 到達可能なポートとサービスを特定
- **ファインディング生成**: 各到達可能なポートに対してSecurity Hubのファインディングを生成

### セキュリティハブ Exposuresの相関機能

- 他のファインディングとリソース設定を自動的に相関
- より広範なリスク判定が可能
- リスクの根本原因を特定しやすく

---

## 利用方法と対象範囲

### 既存顧客向け

- 個別アカウント単位での有効化が可能
- リージョン単位での有効化が可能
- 組織全体での一括有効化が可能

### 新規顧客向け

- Network Scanningはデフォルトで有効（追加設定不要）

### 利用可能リージョン

- Security HubをサポートするすべてのAWSコマーシャルリージョン

---

## 効果・メリット

- **セキュリティ体制の強化**: 設定検証だけでなく、実際の外部からのアクセス可能性を把握
- **リスク可視化**: 隠れた公開リソースを発見
- **コスト効率**: 追加費用なしで利用可能
- **運用効率化**: 自動検出とファインディング相関により手作業を削減

---

## ユースケース

- **セキュリティ監査**: 組織全体のリソース公開状況を一元的に把握
- **コンプライアンス**: 規制要件を満たすための定期的なセキュリティ検査
- **マルチクラウド環境の監視**: 複数クラウドプロバイダー環境の統一的な管理
- **インシデント対応**: 外部からアクセス可能なリソースの迅速な特定

---

## まとめ

### AWS Security Hub Network Scanningのポイント

- AWS Security Hubの新機能として、ネットワークスキャン機能が利用可能に
- インターネットから実際に到達可能なリソースを自動検出
- Security Hub Essentialsに含まれ、追加費用なし
- 既存・新規顧客双方にメリット
- マルチクラウド環境にも対応

### 次のステップ

1. 自社のクラウド環境でNetwork Scanningを有効化
2. 検出されたリソースのセキュリティ評価
3. リスク軽減計画の策定と実施

---

## 参考リソース

- [AWS What's New - AWS Security Hub Network Scanning](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-network-scanning/)
- [AWS Security Hub ドキュメント](https://docs.aws.amazon.com/securityhub/)
- [AWS Security Hub User Guide - Document history](https://docs.aws.amazon.com/securityhub/latest/userguide/doc-history.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**