# Amazon Quick now supports document-level access controls for Google Drive knowledge bases

**カテゴリ:** What's New
**公開日:** 2026-04-13
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-quick-document-level-access-controls-google-drive/

---

## 要約

Amazon Quickは、Google Driveナレッジベースに対するドキュメントレベルのアクセス制御をサポートし、インデックス化されたACLと実時間のGoogle Drive権限確認の二重アプローチにより、セキュアかつ効率的なアクセス管理を実現しました。この機能は、Google Driveのネイティブな権限を維持しながら、組織のセキュリティ要件を満たす必要があるすべての企業に適しています。

## 詳細

### 主な変更点

- Amazon Quickは、Google Driveナレッジベースに対してドキュメントレベルのアクセス制御（ACL）をサポートするようになりました。

- Google Driveのネイティブな権限をインデックス作成時に維持することが可能になりました。

- ACLの複製による効率的な事前フィルタリングと、クエリ時のGoogle Driveとの追加のリアルタイム権限確認の二重アプローチが採用されています。

### 動作メカニズム

- ユーザーがクエリを送信する際に、Amazon Quickはレスポンス生成前にGoogle Driveで現在の権限を検証します。

- インデックス化されたACLのパフォーマンス利点を得ながら、古い権限データや不正にマッピングされた権限データから保護されます。

### 機能の範囲

- ドキュメントレベルのアクセス制御により、Google Driveの個別ファイルおよびフォルダ権限が尊重されます。

- この機能はAmazon Quickが利用可能なすべてのAWSリージョンで利用可能です。

### セットアップ方法

- Amazon Quickコンソールでセットアップするには、Google Driveナレッジベースを作成または更新し、統合設定でドキュメントレベルのアクセス制御を構成します。