# Amazon Bedrock Guardrails supports cross-account safeguards with centralized control and management

**カテゴリ:** AWS Blog
**公開日:** 2026-04-03T20:36:40
**元記事:** [https://aws.amazon.com/blogs/aws/amazon-bedrock-guardrails-supports-cross-account-safeguards-with-centralized-control-and-management/](https://aws.amazon.com/blogs/aws/amazon-bedrock-guardrails-supports-cross-account-safeguards-with-centralized-control-and-management/)

---

## 要約

Amazon Bedrock Guardrailsのクロスアカウントセーフガード機能により、組織全体で統一された安全管理ポリシーを一元的に管理・適用することが可能になりました。このアップデートは、複数のAWSアカウントを運用する企業のセキュリティチームが、生成AIアプリケーション全体における責任あるAI要件への準拠を効率的に実現するのに適しています。

## 詳細

- Amazon Bedrock Guardrailsが、複数のAWSアカウント間でのクロスアカウントセーフガードをサポートするようになりました。

- 組織の管理アカウントから単一のガードレールポリシーを設定することで、すべてのメンバーアカウントのモデル呼び出しに自動的に安全管理が適用されます。

- 組織レベルの実装により、すべてのアカウントと生成AI アプリケーション全体で統一された保護が提供されます。

- アカウントレベルとアプリケーション固有のコントロールも柔軟に適用できます。

- セキュリティチームは、個別のアカウントやアプリケーションの設定とコンプライアンスを独立して監視・検証する必要がなくなります。

- 特定のモデルを含める、または除外するオプションが新たに追加されました。

- システムプロンプトとユーザープロンプトに対して、包括的または選択的なコンテンツガード制御を設定できます。

- AWS Organizations コンソールから Bedrock ポリシーを作成し、対象のアカウントまたは組織単位に適用できます。

- このアップデートは、すべてのAWSコマーシャルリージョンおよびGovCloudリージョンで一般提供されています。

- 自動推論チェックはこの機能ではサポートされていません。