# Introducing account regional namespaces for Amazon S3 general purpose buckets

**カテゴリ:** AWS Blog
**公開日:** 2026-03-12
**元記事:** [https://aws.amazon.com/blogs/aws/introducing-account-regional-namespaces-for-amazon-s3-general-purpose-buckets/](https://aws.amazon.com/blogs/aws/introducing-account-regional-namespaces-for-amazon-s3-general-purpose-buckets/)

---

## 要約

Amazon S3のアカウント地域ネームスペース機能は、ユーザーが自身のアカウント内で地域固有のネームスペースにおいてバケットを作成でき、バケット名の一意性と管理を簡素化することができる新機能です。この機能は、複数のAWSリージョンでバケットを作成する必要があるエンタープライズ組織、セキュリティチームがバケット作成ポリシーを厳格に管理したい企業、およびインフラストラクチャコードの管理を簡潔にしたい開発チームにとって特に有益です。

## 詳細

- Amazon S3の一般目的バケットに対して、アカウント地域ネームスペース機能が新たに導入されました。
- この機能により、ユーザーは自身のアカウント内で地域固有のネームスペースにおいてバケットを作成でき、バケット名の可用性を保証することができます。
- バケット名にアカウントID、リージョン、サフィックス「-an」を追加することで、例えば「mybucket-123456789012-us-east-1-an」のような形式でバケットを作成できます。
- 他のアカウントがユーザーのアカウントサフィックスを使用してバケットを作成しようとした場合、リクエストは自動的に拒否されます。
- AWS IAMポリシーとAWS Organizations サービスコントロールポリシーを使用して、組織内のバケット作成をアカウント地域ネームスペースに限定することができます。
- AWS CLI、AWS SDK for Python（Boto3）、AWS CloudFormationなど複数のツールで対応しており、既存のインフラストラクチャコードの更新が容易です。
- 既存のグローバルバケットをリネームすることはできませんが、新しい一般目的バケットをアカウント地域ネームスペースで作成することができます。
- この機能は37のAWSリージョン（AWS ChinaおよびAWS GovCloud（US）を含む）で利用可能であり、追加コストは発生しません。
- セキュリティチームは「s3:x-amz-bucket-namespace」条件キーを使用して、組織全体でアカウント地域ネームスペースの採用を強制できます。
- この機能は一般目的バケットのみに対応しており、S3テーブルバケット、ベクトルバケット、ディレクトリバケットには適用されません。
