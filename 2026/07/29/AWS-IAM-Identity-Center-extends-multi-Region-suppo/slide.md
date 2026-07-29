---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS IAM Identity Center、Identity Center ディレクトリでマルチリージョン対応拡大

**発表日: 2026年7月29日**

---

## 概要

### 3つの主要な変更点

- **Identity Center ディレクトリ対応**: 以前はExternal identity providersのみマルチリージョン対応でしたが、Identity Center ディレクトリを使用するインスタンスにも拡張
- **自動レプリケーション**: プライマリリージョンから追加リージョンへ、アイデンティティと権限付与が自動的にレプリケーション
- **ビジネス継続性**: プライマリリージョン障害時もユーザーアクセスが継続可能

---

## 前提・背景

### 市場の動向

- マルチリージョン対応が企業のBCPとDRの要件化
- グローバル企業のユーザーアクセス一元管理の重要性が増加
- コンプライアンス要件によるデータレジデンシーの必要性

### AWS IAM Identity Center の進化

- 2026年2月: External IdP対応でマルチリージョン機能開始
- 2026年7月: Identity Center ディレクトリにも拡張
- 段階的なエンタープライズ対応を推進

---

## 主な機能・改善

### 1. Identity Center ディレクトリ対応

- プライマリリージョンに加えて、選択した追加リージョンへの自動レプリケーション
- アイデンティティ、権限付与、その他の情報を完全に同期

### 2. 障害対応と継続性

- プライマリリージョン障害時も追加リージョンの権限でアクセス継続
- Active AWS access portal endpoint を各リージョンで提供

### 3. アプリケーション展開

- 標準的なデプロイメントワークフローで追加リージョンへのアプリケーション展開が可能
- データレジデンシーやユーザー近接性に応じたリージョン選択

---

## 対応範囲と要件

### 対応リージョン

- **17の商用AWSリージョン**で利用可能
- デフォルト有効なリージョンが対象

### 必須要件

- **マルチリージョンカスタマーマネージドKMSキー** の設定が必須
- 既存のIAM Identity Center設定から有効化可能

### コスト

- **追加費用なし**: IAM Identity Centerは引き続き無料

---

## 効果・メリット

- **ユーザーアクセスの復元力向上**: 単一リージョン障害の影響を最小化
- **グローバル対応**: データレジデンシー要件への対応が容易
- **ユーザー体験向上**: 地理的に近いリージョンでのアクセス提供
- **運用効率化**: プライマリリージョン集中管理で複雑性を軽減
- **コンプライアンス対応**: データ保護規制への準拠を強化

---

## ユースケース

### 1. グローバル企業の拠点管理

複数大陸の拠点で同じIAM Identity Centerを使用しながら、各地域のコンプライアンス要件に対応

### 2. 業界別の要件対応

- **金融機関**: データレジデンシー規制への対応
- **ヘルスケア**: HIPAA 等の地域法令への準拠
- **製造業**: 製造拠点の近接性を考慮したアプリケーション配置

### 3. 災害復旧と事業継続性（BCP）

プライマリリージョンの大規模障害時も、ユーザーが追加リージョンで継続稼働

---

## 次のステップ

### 実装のためのチェックリスト

1. 現在のIAM Identity Center設定の確認
2. マルチリージョンカスタマーマネージドKMSキーの設定
3. 対象リージョンの選択とレプリケーション有効化
4. テスト環境でのフェイルオーバー検証
5. 本番環境への段階的展開

---

## まとめ

### AWS IAM Identity Center マルチリージョン対応の位置づけ

- Identity Center ディレクトリユーザー向けの重要なアップデート
- グローバル企業のBCP/DR要件への対応を実現
- エンタープライズ向けアイデンティティ管理の進化

### ビジネス上の重要性

- コンプライアンス対応の簡素化
- ユーザーアクセス体験の向上
- 運用リスクの低減

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-iam-identity-center-extends-multi-region-support-to-identity-center-directory
- **IAM Identity Center ドキュメント**: https://docs.aws.amazon.com/singlesignon/
- **AWS News Blog**: https://aws.amazon.com/blogs/aws/aws-iam-identity-center-now-supports-multi-region-replication-for-aws-account-access-and-application-use/
- **Okta 連携ガイド**: https://www.okta.com/blog/customers-and-partners/okta-aws-iam-identity-center-multi-region-access

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**