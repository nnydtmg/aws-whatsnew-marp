---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch log Centralization でロググループタグの伝播がサポート開始

Amazon CloudWatch log Centralization now supports log group tag propagation

**発表日: 2026年8月19日**

---

## 概要

### 主な変更点

- **ロググループタグの自動伝播**: ソースアカウントのタグを宛先ロググループに自動的にコピーして同期
- **一元的なタグ管理**: セントラライゼーションルール設定時にタグ伝播動作を選択可能
- **全リージョン対応**: CloudWatch Centralizationが利用可能なすべてのAWSリージョンで利用可能

---

## 前提・背景

### 複数アカウント管理における課題

- 複数のアカウントとリージョンからログデータを集約する際、ソースのタグ情報が失われるリスク
- コスト管理、アクセス制御、コンプライアンス追跡の複雑化
- セントラライズされたログに対するメタデータの不一致

### 市場の動向

- AWS Organizations での統一的なログ管理需要の増加
- マルチテナント環境でのコスト配分とアクセス制御の重要性
- タグベースのアクセス制御（ABAC）の普及

---

## 主な機能と改善

### 1. ロググループタグの自動伝播

- ソースロググループのタグを自動的に検出・コピー
- 宛先ロググループに同期を保ちながら維持
- セントラライゼーションルール設定時にタグ伝播動作を選択可能

### 2. 柔軟なタグ管理

- **Application タグ**: 所有チーム・アプリケーション管理
- **CostCenter タグ**: コスト配分・チーム別課金追跡
- **カスタムタグ**: 組織固有の管理ルール対応

### 3. 設定方法の柔軟性

- Amazon CloudWatch コンソールでの直感的設定
- AWS CLI による自動化対応
- AWS SDK による統合開発

---

## 利用シナリオ

### セキュリティ・コンプライアンス

- セントラライズされたログのコンプライアンスタグを保持
- IAM 条件でアクセスをスコープ化
- 監査ログの一元管理と追跡

### コスト管理

- AWS Cost Explorer でセントラライズされたログ支出をチームごとに報告
- CostCenter タグによる部門別課金配分
- リソース別・アカウント別のコスト追跡

### アクセス制御

- タグベースのアクセス制御（ABAC）で柔軟な権限管理
- 複数のセキュリティグループにおけるログアクセスの統一制御

---

## まとめ

### Amazon CloudWatch log Centralization の強化

- タグ伝播機能により、マルチアカウント環境でのログ管理がより効率化
- コスト管理、セキュリティ、コンプライアンス追跡が一層効果的に
- AWS Organizations との統合により、統一的なログ管理が実現

### 次のステップ

1. 現在のログ管理戦略とタグ付けポリシーの確認
2. CloudWatch Centralization でタグ伝播機能を有効化
3. コスト配分・アクセス制御ルールの設定実施

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-centralization-tag-propogation/
- **CloudWatch Logs Centralization ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_Centralization.html
- **AWS ブログ**: https://aws.amazon.com/blogs/mt/simplifying-log-management-using-amazon-cloudwatch-logs-centralization

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
