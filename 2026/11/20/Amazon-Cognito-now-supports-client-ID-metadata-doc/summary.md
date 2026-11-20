# Amazon CognitoがクライアントIDメタデータドキュメント（CIMD）をサポート

Amazon Cognito now supports client ID metadata documents

**カテゴリ:** What's New
**公開日:** 2026-11-19T21:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-client-id-metadata-documents/)

このページでは、AWS What's Newで発表された「Amazon Cognito now supports client ID metadata documents」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CognitoはCIMDを新たにサポートし、MCPクライアントやAIエージェントが個別のアプリクライアントなしでユーザープールへサインインできるようになりました。本機能はEssentialsおよびPlusプランでご利用いただけます。

## このアップデートで何が変わったか

Amazon CognitoがOAuthクライアントIDメタデータドキュメント（CIMD）をサポートしました。クライアントはHTTPSのURLをクライアントIDとして使用し、そのURLでJSONメタデータドキュメントを公開できます。Cognitoはサインイン開始時にドキュメントを取得して検証し、CIMDポリシーによりURLパターンをアプリクライアントへ対応付けます。付与されるスコープとグラントタイプは、アプリクライアントとメタデータドキュメントの双方が許可するものに限定されます。本更新の対象は、MCPクライアントやAIエージェント、ならびにMCPサーバーを運用する企業です。個別のアプリクライアントを作成および維持せずにサインインを受け入れられる点が利点です。従来は各外部クライアントに対して事前作成または動的クライアント登録（DCR）でアプリクライアントを用意し、管理・クリーンアップが必要でした。CIMDはEssentialsおよびPlusフィーチャープランで、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用できます。

## 対象ユーザー

Amazon CognitoがOAuthクライアントIDメタデータドキュメント（CIMD）をサポートしました。クライアントはHTTPSのURLをクライアントIDとして使用し、そのURLでJSONメタデータドキュメントを公開できます。Cognitoはサインイン開始時にドキュメントを取得して検証し、CIMDポリシーによりURLパターンをアプリクライアントへ対応付けます。付与されるスコープとグラントタイプは、アプリクライアントとメタデータドキュメントの双方が許可するものに限定されます。本更新の対象は、MCPクライアントやAIエージェント、ならびにMCPサーバーを運用する企業です。個別のアプリクライア

## 詳細

Amazon CognitoがOAuthクライアントIDメタデータドキュメント（CIMD）をサポートしました。クライアントはHTTPSのURLをクライアントIDとして使用し、そのURLでJSONメタデータドキュメントを公開できます。Cognitoはサインイン開始時にドキュメントを取得して検証し、CIMDポリシーによりURLパターンをアプリクライアントへ対応付けます。付与されるスコープとグラントタイプは、アプリクライアントとメタデータドキュメントの双方が許可するものに限定されます。本更新の対象は、MCPクライアントやAIエージェント、ならびにMCPサーバーを運用する企業です。個別のアプリクライアントを作成および維持せずにサインインを受け入れられる点が利点です。従来は各外部クライアントに対して事前作成または動的クライアント登録（DCR）でアプリクライアントを用意し、管理・クリーンアップが必要でした。CIMDはEssentialsおよびPlusフィーチャープランで、Amazon Cognitoが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-client-id-metadata-documents/)