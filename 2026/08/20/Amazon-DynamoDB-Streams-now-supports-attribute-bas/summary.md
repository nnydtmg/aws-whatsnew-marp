# Amazon DynamoDB Streams が ABAC に対応 - タグベースアクセス制御が利用可能に

Amazon DynamoDB Streams now supports attribute-based access control

**カテゴリ:** What's New
**公開日:** 2026-08-19T21:03:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-dynamodb-streams-abac/)

このページでは、AWS What's Newで発表された「Amazon DynamoDB Streams now supports attribute-based access control」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon DynamoDB StreamsがABAC（アトリビュートベースアクセス制御）に対応し、タグベースのIAMポリシー条件を使用してストリームへのアクセスをより柔軟に制御できるようになりました。複数のアプリケーションと環境を管理するチームにおいて、環境分離やコンプライアンス要件への対応が簡素化され、IAMポリシー管理の負担が軽減されます。

## このアップデートで何が変わったか

- **ABAC サポート開始**: Amazon DynamoDB Streams がタグベースのアイデンティティおよびアクセス管理（IAM）ポリシーによるアトリビュートベースアクセス制御（ABAC）をサポート
- **ストリームタグ管理**: 各ストリームに最大50個のタグを付与可能
- **タグベースのアクセス制御**: IAM ポリシー条件でタグを使用した柔軟なアクセス制御

## 対象ユーザー

- 複数のアプリケーションおよび環境全体で DynamoDB Streams アクセスを管理するチーム
- より細粒度でスケーラブルなアクセス制御が必要な組織
- マルチテナント環境の管理者

## 活用シーン

### 環境別アクセス制御

例えば、「environment:production」タグが付与されたストリームからのみレコード読み取りを許可し、他の環境へのアクセスを制限することが可能です。

### マルチテナント環境

テナント別タグの付与により、顧客別ストリームアクセスの自動分離が実現します。

### チーム別アクセス制御

チーム別タグの活用で、チーム別ストリームアクセスの自動制御が可能になります。

## 主な特徴

### タグベースアクセス制御
- ストリームタグは親テーブルタグから独立して管理
- 環境分離、チームベースの隔離、コンプライアンス要件を実装
- 多数の個別 IAM ポリシーを作成する必要がなくなる

### 利用範囲
- Amazon DynamoDB Streams が利用可能なすべての商用 AWS リージョン
- AWS GovCloud（US）リージョン
- **追加コスト**: なし

## 詳細

### タグベースのアクセス制御

- Amazon DynamoDB Streams がタグベースの条件を使用した IAM ポリシーによるアトリビュートベースアクセス制御（ABAC）をサポート
- 各ストリームに最大50個のタグを付与可能
- これらのタグを IAM ポリシー条件で使用して特定のアクションへのアクセスを許可または拒否

### ストリームタグの独立管理

- ストリームタグは親テーブルタグから独立して管理
- 環境分離、チームベースの隔離、コンプライアンス要件を実装
- 多数の個別 IAM ポリシーを作成する必要がなくなる

### スケーラビリティとメリット

- IAM ポリシー管理の複雑さを大幅に削減
- 新規環境・チーム追加時のポリシー変更が不要
- 運用効率の向上とコスト削減

## 参考リンク

### 公式ドキュメント

- [AWS What's New - Amazon DynamoDB Streams ABAC](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-dynamodb-streams-abac/)
- [ABAC with DynamoDB - AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/attribute-based-access-control.html)
- [Enabling ABAC in DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/abac-enable-ddb.html)

### 関連記事

- [Using attribute-based access control for tag-based access authorization with Amazon DynamoDB - AWS Database Blog](https://aws.amazon.com/blogs/database/using-attribute-based-access-control-for-tag-based-access-authorization-with-amazon-dynamodb)
- [IAM ABAC ガイド](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html)
