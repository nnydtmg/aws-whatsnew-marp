---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CognitoがクライアントIDメタデータドキュメント（CIMD）をサポート

Amazon Cognito now supports client ID metadata documents

**What's New** | 2026-11-19T21:00:00

---

## 概要

- Amazon CognitoはCIMDを新たにサポートし、MCPクライアントやAIエージェントが個別のアプリクライアントなしでユーザープールへサインインできるようになりました。
- 本機能はEssentialsおよびPlusプランでご利用いただけます。

---

## 前提・背景

### これまでの課題

Amazon CognitoがOAuthクライアントIDメタデータドキュメント（CIMD）をサポートしました。クライアントはHTTPSのURLをクライアントIDとして使用し、そのURLでJSONメタデータドキュメントを公開できます。Cognitoはサインイン開始時にドキュメントを取得して検証し、CIMDポリシーによりURLパターンをアプリクライアントへ対応付けます。付与されるスコープとグラントタイプは、アプリクライアントとメタデータドキュメントの双方が許可するものに限定されます。本更新の対象は、

---

### 関連する最近の動向

- **GitHub - aws-samples/sample-serverless-architecture-cimd-with-cognito**
  [詳細](https://github.com/aws-samples/s...

---

## 変更内容・新機能

Amazon CognitoがOAuthクライアントIDメタデータドキュメント（CIMD）をサポートしました。クライアントはHTTPSのURLをクライアントIDとして使用し、そのURLでJSONメタデータドキュメントを公開できます。Cognitoはサインイン開始時にドキュメントを取得して検証し、CIMDポリシーによりURLパターンをアプリクライアントへ対応付けます。付与されるスコープとグラントタイプは、アプリクライアントとメタデータドキュメントの双方が許可するものに限定されます。本更新の対象は、MCPクライアントやAIエージェント、ならびにMCPサーバーを運用する企業です。個別のアプリクライアントを作成および維持せずにサインインを受け入れられる点が利点です。従来は各外部クライアントに対して事前作成または動的クライアント登録（DCR）でアプリクライアントを用意し、管理・クリーンアップが必要でした。CIMDはEssentialsおよびPlusフィーチャープランで、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用できます。

---

## 効果・メリット

- Amazon CognitoがOAuthクライアントIDメタデータドキュメント（CIMD）をサポートしました。
- クライアントはHTTPSのURLをクライアントIDとして使用し、そのURLでJSONメタデータドキュメントを公開できます。
- Cognitoはサインイン開始時にドキュメントを取得して検証し、CIMDポリシーによりURLパターンをアプリクライアントへ対応付けます。
- 付与されるスコープとグラントタイプは、アプリクライアントとメタデータドキュメントの双方が許可するものに限定されます。
- 本更新の対象は、MCPクライアントやAIエージェント、ならびにMCPサーバーを運用する企業です。

---

## まとめ

- Amazon Cognito now supports client ID metadata documents について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-client-id-metadata-documents/)

### 関連情報

- [GitHub - aws-samples/sample-serverless-architecture-cimd-with-cognito](https://github.com/aws-samples/sample-serverless-architecture-cimd-with-cognito)
- [MCP OAuth2.1 with AWS Cognito Example](https://glama.ai/mcp/servers/empires-security/mcp-oauth2-aws-cognito)
- [2026-03 Client ID Metadata Document](https://datatracker.ietf.org/meeting/125/materials/slides-125-oauth-client-id-metadata-document-00)
- [CIMD: The New Standard for MCP Authentication](https://guptadeepak.com/client-id-metadata-documents-cimd-the-future-of-mcp-authentication)
- [Amazon Cognito now supports client ID metadata documents - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-client-id-metadata-documents/)