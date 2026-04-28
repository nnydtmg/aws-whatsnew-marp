# Amazon Quick now supports document-level access controls for SharePoint knowledge bases

**カテゴリ:** What's New
**公開日:** 2026-04-23T14:26:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/quick-sharepoint-access-control/](https://aws.amazon.com/about-aws/whats-new/2026/04/quick-sharepoint-access-control/)

---

## 要約

Amazon Quickが、Microsoft SharePointナレッジベースに対するドキュメントレベルのアクセス制御をサポートするようになり、SharePointのネイティブ権限を維持しながらセキュアにコンテンツをインデックス化できるようになりました。この更新は、セキュリティコンプライアンスを重視する組織や、複数のユーザーと安全にナレッジベースを共有する必要がある企業に特に有用です。

## 詳細

- Amazon Quickが、Microsoft SharePointのナレッジベースに対してドキュメントレベルのアクセス制御（ACL）をサポートするようになりました。

- SharePointのネイティブなアクセス権限がインデックス化時に維持されるため、ユーザーはSharePointで閲覧権限を持つドキュメントのみをAmazon Quickを通じてアクセスできます。

- インデックス化されたACLによる効率的な事前フィルタリングと、クエリ時のSharePointとのリアルタイム権限確認の二重アプローチにより、パフォーマンスとセキュリティの両立が実現されています。

- ユーザーがクエリを送信する際に、Amazon Quickは現在の権限をSharePointで検証してから回答を生成するため、最新のアクセス権に基づいた結果が提供されます。

- この機能はAmazon Quickが利用可能なすべてのAWSリージョン（米国東部、米国西部、アジアパシフィック、ヨーロッパ地域など）で利用可能です。

- 管理者はAmazon Quickコンソールでadmin管理のSharePointナレッジベースを作成し、詳細設定でドキュメントレベルのアクセス制御を設定することで利用を開始できます。