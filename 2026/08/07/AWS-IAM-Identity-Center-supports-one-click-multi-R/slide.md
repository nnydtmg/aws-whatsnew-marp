---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM Identity Center で新組織インスタンスのワンクリックマルチリージョン設定が利用可能に

AWS IAM Identity Center supports one-click multi-Region option for new organization instances

**発表日: 2026年8月7日**

---

## 概要

### 主な改善点

- **ワンクリック設定**: 新しい組織インスタンス作成時に簡単にマルチリージョン対応が可能
- **レジリエンス向上**: 複数リージョンにわたるレジリエントなアクセス環境を構築
- **継続的なアクセス**: プライマリリージョンの障害時もワークフォースのアクセスが保証
- **設定オプション**: 3つの設定パターンから選択可能

---

## 前提・背景

### これまでの課題

- **複数ステップが必要**: カスタマー管理の KMS キーの作成が必須
- **キーポリシー設定**: 手動でのキーポリシー設定が必要
- **リージョン追加**: リージョンの手動追加プロセスが複雑
- **運用負荷**: 初期設定に時間と労力がかかる

### 市場の動向

- マルチリージョン対応の需要が高まるエンタープライズ環境
- ディザスタリカバリーの重要性
- グローバル展開企業での高可用性ニーズ

---

## 変更内容・新機能

### 3つの設定オプション

1. **単一リージョンインスタンス**
   - 従来通りの単一リージョン構成

2. **マルチリージョンインスタンス**
   - AWS が KMS キーを自動作成・管理
   - インスタンスを追加リージョンに自動レプリケート

3. **カスタムインスタンス**
   - 既存の KMS キーの使用に対応
   - リージョン設定を個別にカスタマイズ可能

---

## マルチリージョンインスタンスの仕組み

### 自動プロセス

- **KMS キー作成**: カスタマー管理のマルチリージョン KMS キーを自動生成
- **レプリケーション**: インスタンスを追加リージョンに自動複製
- **ID・権限同期**: ワークフォースの ID とアクセス権限が複数リージョンで同期

### ディザスタリカバリー効果

- プライマリリージョンで IAM Identity Center に障害発生時も継続アクセス可能
- ワークフォースは AWS アカウントへのアクセスを维持
- 既に設定済みの権限を利用して継続運用

---

## 利用可能リージョンと料金

### 対応リージョン

- **17 のデフォルト有効な商用 AWS リージョン**で利用可能
- グローバル規模でのマルチリージョン展開に対応

### 料金体系

- **IAM Identity Center**: 追加料金なし
- **AWS KMS**: マルチリージョンインスタンスオプションで作成されたカスタマー管理キーについて標準的な KMS 料金が適用

---

## ユースケース

### 適用シナリオ

- **グローバル企業**: 複数リージョンにわたる統一的なアイデンティティ管理
- **ミッションクリティカルシステム**: 高可用性が必須な環境
- **ディザスタリカバリー**: 地域的障害への対策
- **ローカルデプロイ**: ユーザーに近いリージョンでのアプリケーション展開

---

## まとめ

### AWS IAM Identity Center マルチリージョン設定の利点

✅ **導入の簡素化**: ワンクリックで複雑な設定が実現  
✅ **レジリエンス向上**: 地域的な障害に対応  
✅ **グローバル対応**: 複数リージョンでのシームレスなアクセス  
✅ **コスト効率**: 追加料金なしで多くの機能を利用可能  
✅ **柔軟な設定**: 3つのオプションから選択可能  

### 次のステップ

1. 自社のマルチリージョン戦略を確認
2. 新組織インスタンス作成時に本機能を評価
3. 既存インスタンスへの段階的適用を計画

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-identity-center-supports-one-click-multi-region-option-new-organization-instances
- **AWS IAM Identity Center ドキュメント**: https://docs.aws.amazon.com/singlesignon/
- **AWS KMS 料金**: https://aws.amazon.com/kms/pricing/
- **AWS Identity Center Multi Region Replication Deep Dive**: https://www.youtube.com/watch?v=vFg9aQx34AE
- **IAM Identity Center extends multi-Region support**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-iam-identity-center-extends-multi-region-support-to-identity-center-directory

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**