# AWS simplifies IAM role creation and setup in service workflows

**カテゴリ:** What's New
**公開日:** 2026-03-04
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/aws-simplifies-iam-role-creation-and-setup/](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-simplifies-iam-role-creation-and-setup/)

---

## 要約

AWS IAM がサービスワークフロー内でのロール作成と権限設定を直接サポートするようになり、ユーザーは IAM コンソールへの移動なしにロール管理を実行できるようになりました。この機能は、複数の AWS サービスで利用可能であり、開発者やアーキテクトのワークフロー効率を大幅に向上させます。

## 詳細

- AWS IAM ロールの作成と設定がサービスワークフロー内で直接実行できるようになりました。
- ブラウザタブを切り替えることなく、ロール権限をカスタマイズできるようになりました。
- コンソールタスク実行時に新しいパネルが表示され、必要な権限を設定できるようになりました。
- デフォルトポリシーまたは簡略化されたステートメントビルダーを使用して権限をカスタマイズできます。
- この機能は Amazon EC2、AWS Lambda、Amazon EKS、Amazon ECS、AWS Glue、AWS CloudFormation、AWS Database Migration Service、AWS Systems Manager、AWS Secrets Manager、Amazon RDS、および AWS IoT Core で利用可能です。
- 現在は US East (N. Virginia) リージョンで利用可能であり、今後、追加のサービスとリージョンに段階的に展開される予定です。
- IAM ロールは一時的な認証情報を使用して安全な AWS サービス間接続を実現し、ハードコードされたアクセスキーの必要性を排除します。
- リソースセットアップを効率化しながら、IAM ロール管理の全機能を維持できます。