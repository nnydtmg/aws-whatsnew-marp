# Amazon S3 introduces account regional namespaces for general purpose buckets

**カテゴリ:** What's New
**公開日:** 2026-03-12T13:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-s3-account-regional-namespaces/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-s3-account-regional-namespaces/)

---

## 要約

Amazon S3の汎用バケットにアカウント地域別ネームスペース機能が導入され、グローバルに一意な名前を探す必要がなくなり、複数リージョンにおいて予測可能なバケット名を作成できるようになりました。この機能は、大規模なデータストレージニーズを持つ組織、顧客やチームごとにバケットを管理する必要があるワークロード、およびセキュリティポリシーを一貫して適用したいクラウドセキュリティチームに特に有用です。

## 詳細

- Amazon S3の汎用バケットにおいて、アカウント地域別ネームスペース機能が導入されました。
- グローバルに一意なバケット名を探す必要がなくなり、バケット名の取得が簡素化されます。
- 複数のAWSリージョンにおいて、予測可能で一貫性のあるバケット名を作成できるようになりました。
- 顧客、チーム、またはデータセットごとにバケットを利用するワークロードの構築が容易になります。
- CreateBucket APIまたはAWS CloudFormationテンプレートに新しいバケットネームスペースリクエストヘッダーを追加することで利用開始できます。
- サービスコントロールポリシー（SCP）およびIAMポリシーを使用して、ユーザーがアカウント地域別ネームスペース内でのみバケット作成を行うよう強制できます。
- この機能は37のAWSリージョン（AWS ChinaおよびAWS GovCloud（US）リージョンを含む）で追加費用なしで利用可能です。
- AWS Management Console、S3 REST API、AWS CLI、AWS SDK、およびAWS CloudFormationを通じてアクセスできます。
- クラウドセキュリティチームは一貫したバケット命名慣行をエンタープライズ全体で強制することができます。