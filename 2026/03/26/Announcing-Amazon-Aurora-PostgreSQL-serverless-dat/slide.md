---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Aurora PostgreSQL
サーバーレスデータベース数秒で作成

**発表日: 2026年3月25日**

---

## 概要

### エクスプレス構成による即座のデータベース作成

- **わずか2クリック**で本番環境対応のAurora PostgreSQLサーバーレスデータベースを数秒で起動
- **新しいエクスプレス構成**により、複雑な設定が不要
- **デフォルトで有効化**されるセキュリティ機能（IAM認証、インターネットアクセスゲートウェイ）

---

## 前提・背景

### 従来の課題

- データベース構築に時間がかかる
- VPC、ネットワーク設定が複雑
- セキュリティ設定の手間

### 市場ニーズ

- 迅速なアプリケーション開発の要求
- スタートアップ企業の時間短縮ニーズ
- プロトタイプ・PoC環境の快速構築
- 開発者体験の向上

### Aurora PostgreSQL の進化

- 2026年2月: 重大な安定性強化（v17.4.5リリース）
- 2026年3月: AWS Free Tier対応を発表
- 段階的な改善で開発者体験を向上

---

## 主な機能と改善

### 1. エクスプレス構成

- **プリセット設定**: 本番環境対応のデフォルト値を提供
- **VPC不要**: Amazon VPC ネットワークなしで即座に構築
- **インターネットアクセスゲートウェイ付属**: VPNやAWS Direct Connect不要

### 2. セキュリティ機能

- **IAM認証**: デフォルトで有効
- **パスワードレス認証**: 初回から利用可能
- **ベストプラクティス**: セキュリティ設定が標準装備

### 3. 開発者統合

- **AWS CloudShell**: 作成後すぐにクエリ実行可能
- **プログラミング言語対応**: Python、Node.js等で即座にコード実行
- **開発ツール統合**: Vercel v0、Kiro IDEなど

---

## ユースケース

### スタートアップ企業

- 迅速なMVP（最小実行製品）開発
- コスト効率的なデータベース構築
- AWS Free Tierで無料試用可能

### エンタープライズ組織

- プロトタイプ・PoC環境の快速構築
- 複数のプロジェクト環境を効率的に展開
- 開発・テスト環境の自動化

### 個人開発者

- 学習用環境の即座の構築
- サイドプロジェクトのデータベース基盤
- AWS Free Tierの活用

---

## 効果・メリット

### 時間削減

- ✅ **数秒のデータベース作成**: 従来は数分かかっていた構築が高速化
- ✅ **2クリック操作**: UI操作の最小化
- ✅ **設定不要**: デフォルト設定で本番環境対応

### コスト削減

- ✅ **AWS Free Tier対応**: 追加コストなしで試験可能
- ✅ **リソース最適化**: 必要なリソースのみで構成
- ✅ **スケーリング対応**: 成長に応じた段階的スケール

### セキュリティ向上

- ✅ **IAM認証標準化**: ベストプラクティスの自動適用
- ✅ **パスワードレス認証**: セキュアな認証方式
- ✅ **プロビジョニングリスク低減**: 誤設定を防止

### 開発体験の向上

- ✅ **即座のアクセス**: 作成後すぐにクエリ実行可能
- ✅ **統合開発ツール**: Vercel v0等との連携
- ✅ **学習曲線短縮**: 複雑な設定が不要

---

## 利用可能性

### 対応リージョン

- ✅ **すべてのAWSコマーシャルリージョン**で本日から利用可能

### 対応ティア

- ✅ **AWS Free Tier**: 新規顧客向けに追加コストなし
- ✅ **本番環境**: サーバーレス構成で利用可能
- ✅ **スケーリング**: Auto Scaling対応

---

## まとめ

### Amazon Aurora PostgreSQL エクスプレス構成の位置づけ

- **開発効率の革新**: わずか2クリックで本番対応DB構築
- **セキュリティの強化**: IAM認証がデフォルト標準化
- **アクセス性の拡大**: AWS Free Tierで全てのユーザーが試用可能

### 次のステップ

1. **評価開始**: 自社のユースケースで試用
2. **パイロット実施**: 開発環境での検証
3. **本番展開**: プロダクション環境への段階的移行

### 推奨対象

- 🎯 **スタートアップ**: 迅速なMVP開発
- 🎯 **エンタープライズ**: PoC・プロトタイプ環境
- 🎯 **開発者**: 学習用環境の快速構築

---

## 参考リソース

### 公式ドキュメント

- 📄 **AWS What's New**: https://aws.amazon.com/blogs/aws/announcing-amazon-aurora-postgresql-serverless-database-creation-in-seconds/
- 📄 **Amazon Aurora PostgreSQL Updates**: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraPostgreSQLReleaseNotes/AuroraPostgreSQL.Updates.html
- 📄 **AWS Free Tier対応**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-aurora-postgresql-aws-free-tier/

### 関連情報

- 🔗 **Amazon Aurora PostgreSQL 作成・接続ガイド**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-aurora-postgresql-database/
- 🔗 **Aurora PostgreSQL 13.x サポート終了**: https://repost.aws/articles/announcement-amazon-aurora-postgresql-13-x-end-of-standard-support
- 🔗 **Amazon Aurora | AWS News Blog**: https://aws.amazon.com/blogs/aws/category/database/amazon-aurora/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**