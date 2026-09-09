# Amazon Bedrock Knowledge BaseがドキュメントACLデバッグ用APIとコンソールを追加

Amazon Bedrock Managed Knowledge Base adds APIs and console support for debugging document-level access control

**カテゴリ:** What's New
**公開日:** 2026-09-09T16:03:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-knowledge-base-debugging-document-access-control/)

このページでは、AWS What's Newで発表された「Amazon Bedrock Managed Knowledge Base adds APIs and console support for debugging document-level access control」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock Managed Knowledge Baseに、ドキュメントレベルのアクセス制御をデバッグするためのCheckIngestedDocumentAclおよびGetIngestedDocumentAcl APIとコンソールサポートが追加されました。本アップデートは、ACL対応データソースを利用する管理者の皆様が、サポートケースを開くことなく権限の問題を迅速に診断できる点で有益です。

## このアップデートで何が変わったか

Amazon Bedrock Managed Knowledge Baseに、ドキュメントレベルのアクセス制御をデバッグするためのAPIとコンソールサポートが追加されました。CheckIngestedDocumentAcl APIでは、特定のユーザーが取り込み済みドキュメントにアクセスできるかを確認できます。GetIngestedDocumentAcl APIでは、ドキュメントに付与された完全なACLを取得し、権限設定を監査できます。コンソールのデータソース詳細ページに、ドキュメントアクセス制御セクションが新たに追加されました。本アップデートは、ACL対応データソースを利用するお客様およびエンタープライズナレッジベースの管理者の皆様に適しています。ユーザーがACL対応データソースの検索結果で期待したドキュメントが表示されない場合、アクセス制御の設定ミスか別の原因かを切り分けるのが困難でした。新APIとコンソールにより、サポートケースを開かずに権限問題を自己診断・解決できます。

## 対象ユーザー

Amazon Bedrock Managed Knowledge Baseに、ドキュメントレベルのアクセス制御をデバッグするためのAPIとコンソールサポートが追加されました。CheckIngestedDocumentAcl APIでは、特定のユーザーが取り込み済みドキュメントにアクセスできるかを確認できます。GetIngestedDocumentAcl APIでは、ドキュメントに付与された完全なACLを取得し、権限設定を監査できます。コンソールのデータソース詳細ページに、ドキュメントアクセス制御セクションが新たに追加されました。本アップデートは、ACL対応データソースを利用するお客様およびエン

## 詳細

Amazon Bedrock Managed Knowledge Baseに、ドキュメントレベルのアクセス制御をデバッグするためのAPIとコンソールサポートが追加されました。CheckIngestedDocumentAcl APIでは、特定のユーザーが取り込み済みドキュメントにアクセスできるかを確認できます。GetIngestedDocumentAcl APIでは、ドキュメントに付与された完全なACLを取得し、権限設定を監査できます。コンソールのデータソース詳細ページに、ドキュメントアクセス制御セクションが新たに追加されました。本アップデートは、ACL対応データソースを利用するお客様およびエンタープライズナレッジベースの管理者の皆様に適しています。ユーザーがACL対応データソースの検索結果で期待したドキュメントが表示されない場合、アクセス制御の設定ミスか別の原因かを切り分けるのが困難でした。新APIとコンソールにより、サポートケースを開かずに権限問題を自己診断・解決できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-knowledge-base-debugging-document-access-control/)