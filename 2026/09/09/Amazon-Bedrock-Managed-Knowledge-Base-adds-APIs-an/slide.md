---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock Knowledge BaseがドキュメントACLデバッグ用APIとコンソールを追加

Amazon Bedrock Managed Knowledge Base adds APIs and console support for debugging document-level access control

**What's New** | 2026-09-09T16:03:00

---

## 概要

- Amazon Bedrock Managed Knowledge Baseに、ドキュメントレベルのアクセス制御をデバッグするためのCheckIngestedDocumentAclおよびGetIngestedDocumentAcl APIとコンソールサポートが追加されました。
- 本アップデートは、ACL対応データソースを利用する管理者の皆様が、サポートケースを開くことなく権限の問題を迅速に診断できる点で有益です。

---

## 前提・背景

### これまでの課題

Amazon Bedrock Managed Knowledge Baseに、ドキュメントレベルのアクセス制御をデバッグするためのAPIとコンソールサポートが追加されました。CheckIngestedDocumentAcl APIでは、特定のユーザーが取り込み済みドキュメントにアクセスできるかを確認できます。GetIngestedDocumentAcl APIでは、ドキュメントに付与された完全なACLを取得し、権限設定を監査できます。コンソールのデータソース詳細ページに、ドキュメントアクセス制御

---

### 関連する最近の動向

- **Amazon Bedrock Managed Knowledge Base adds APIs and console support for debugging document-level access control...

---

## 変更内容・新機能

Amazon Bedrock Managed Knowledge Baseに、ドキュメントレベルのアクセス制御をデバッグするためのAPIとコンソールサポートが追加されました。CheckIngestedDocumentAcl APIでは、特定のユーザーが取り込み済みドキュメントにアクセスできるかを確認できます。GetIngestedDocumentAcl APIでは、ドキュメントに付与された完全なACLを取得し、権限設定を監査できます。コンソールのデータソース詳細ページに、ドキュメントアクセス制御セクションが新たに追加されました。本アップデートは、ACL対応データソースを利用するお客様およびエンタープライズナレッジベースの管理者の皆様に適しています。ユーザーがACL対応データソースの検索結果で期待したドキュメントが表示されない場合、アクセス制御の設定ミスか別の原因かを切り分けるのが困難でした。新APIとコンソールにより、サポートケースを開かずに権限問題を自己診断・解決できます。

---

## まとめ

- Amazon Bedrock Managed Knowledge Base adds APIs and console support for debugging document-level access control について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-knowledge-base-debugging-document-access-control/)

### 関連情報

- [Amazon Bedrock Managed Knowledge Base adds APIs and console support for debugging document-level access control](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-knowledge-base-debugging-document-access-control)
- [Access Control Lists awareness enablement - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-managed-acl.html)
- [Document-level access controls - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-managed-ds-custom-acl.html)
- [CheckIngestedDocumentAcl API Reference](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_CheckIngestedDocumentAcl.html)
- [GetIngestedDocumentAcl API Reference](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetIngestedDocumentAcl.html)