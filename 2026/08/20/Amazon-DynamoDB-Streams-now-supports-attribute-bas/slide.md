---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon DynamoDB Streams が ABAC に対応
タグベースアクセス制御が利用可能に

**発表日: 2026年8月19日**

---

## 概要

### Amazon DynamoDB Streams ABAC サポート開始

- **タグベースのアクセス制御**: IAM ポリシー条件でタグを使用した柔軟なアクセス制御
- **ストリームタグ管理**: 各ストリームに最大50個のタグを付与可能
- **環境分離の簡素化**: 複数環境・複数アプリケーション管理での IAM ポリシー削減

---

## 前提・背景

### IAM アクセス制御の課題

- 複雑な多環境・多アプリケーション管理での個別 IAM ポリシー作成の負荷
- スケーリング時のアクセス制御管理の複雑化
- リソースベースのアクセス制御の拡張性限界

### ABAC の導入意義

- タグベースの属性によるスケーラブルなアクセス制御戦略
- 新規リソース・ユーザー追加時のポリシー変更の不要化
- コンプライアンス要件への対応簡素化

---

## 主な機能と改善

### 1. タグベースのアクセス制御

- **最大50個のタグ付与**: ストリームごとに細粒度なタグ設定が可能
- **IAM ポリシー条件**: タグマッチングによるアクセス許可・拒否の自動化
- **独立したタグ管理**: ストリームタグは親テーブルタグから独立

### 2. 実践的な活用例

```
例: environment:production タグ付与ストリームからのみ
    レコード読み取りを許可し、
    他の環境へのアクセスを制限
```

### 3. スケーラビリティ

- 環境分離、チームベース隔離の実装が複数個別ポリシー不要に
- 新規環境・チーム追加時のタグ付与のみで自動的に権限付与

---

## メリット・効果

### セキュリティ

- **粒度の細かいアクセス制御**: タグベースの条件付きアクセス許可で堅牢な権限管理
- **環境の厳密な分離**: 本番環境・ステージング・開発環境の明確な隔離
- **コンプライアンス対応**: タグベースの監査ログとアクセス追跡

### 運用効率

- **IAM ポリシー数の削減**: 多数の個別ポリシーが不要に
- **スケーリングの容易化**: 新規リソース・チーム追加時の自動権限付与
- **保守コスト低減**: ポリシー更新の最小化と一元管理

### コスト

- **追加料金なし**: ABAC 機能の使用に追加コストは発生しない
- **効率化による間接的コスト削減**: IAM 管理工数の削減

---

## 提供範囲

### 利用可能リージョン

- すべての商用 AWS リージョン
- AWS GovCloud（US）リージョン

### 対象リソース

- Amazon DynamoDB Streams
- 既存の DynamoDB テーブル・インデックスとの統合

---

## ユースケース

### マルチテナント環境

```
タグ: tenant:customer-a, tenant:customer-b
→ 顧客別ストリームアクセスの自動分離
```

### 複数環境管理

```
タグ: environment:production, environment:staging, environment:dev
→ 環境別のアクセス権限を IAM ポリシー条件で定義
```

### チーム別アクセス制御

```
タグ: team:data-engineering, team:analytics
→ チーム別ストリームアクセスの自動制御
```

---

## 次のステップ

### 導入準備

1. 既存 DynamoDB Streams のタグ戦略を検討
2. IAM ポリシーにタグ条件を追加
3. 段階的な移行計画の立案

### 推奨アクション

- AWS コンソールで ABAC 設定を有効化
- チーム別・環境別のタグ命名規則を標準化
- パイロットプロジェクトでの検証実施

---

## まとめ

### 主な利点

- **スケーラブル**: タグベースで新規環境・チーム追加時のポリシー変更不要
- **セキュア**: タグマッチングによる粒度の細かいアクセス制御を実現
- **効率的**: IAM ポリシー管理の複雑さを大幅に削減
- **コスト効率**: 追加料金なし

### DynamoDB 運用の進化

Amazon DynamoDB Streams ABAC サポートにより、エンタープライズ規模のマルチテナント・マルチ環境運用がより簡素化・セキュアになります。

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-dynamodb-streams-abac/
- **ABAC with DynamoDB**: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/attribute-based-access-control.html
- **Enabling ABAC in DynamoDB**: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/abac-enable-ddb.html

### 関連記事

- **AWS Database Blog**: https://aws.amazon.com/blogs/database/using-attribute-based-access-control-for-tag-based-access-authorization-with-amazon-dynamodb
- **IAM ABAC ガイド**: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
