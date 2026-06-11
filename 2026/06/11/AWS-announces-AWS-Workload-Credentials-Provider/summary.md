# AWS Workload Credentials Provider で証明書とシークレットの管理を自動化

AWS announces AWS Workload Credentials Provider

**カテゴリ:** What's New
**公開日:** 2026-06-11
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-workload-credentials-provider/)

このページでは、AWS What's Newで発表された「AWS announces AWS Workload Credentials Provider」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Workload Credentials Providerは、ACM証明書とSecrets Managerのシークレットの展開とキャッシュを自動化する軽量なクライアント側プロバイダーであり、AWS環境と非AWS環境の両方で動作します。このアップデートは、証明書の有効期限管理を簡素化し、カスタムオートメーションの複雑性を排除したいお客様にとって有益です。

## このアップデートで何が変わったか

AWS Workload Credentials Providerは、AWS Certificate Manager（ACM）からエクスポートされた証明書の展開とAWS Secrets Managerからのシークレットのローカルキャッシュを自動化する軽量なクライアント側プロバイダーです。これまで、ACMから公開証明書または秘密鍵証明書をエクスポートするお客様は、Amazon EventBridgeを使用した更新検出と証明書展開のカスタムオートメーションを構築する必要がありました。認証局ブラウザフォーラム（CA/B）の要件により公開証明書の有効期限が短縮されているため、このカスタムオートメーションの大規模な維持管理が困難になっていました。

AWS Workload Credentials Providerは、シークレットと証明書の両方をワークロードに配布・自動化する単一のプロバイダーを提供することで、この複雑性を排除します。

## 詳細

### 主な特徴

- **証明書自動展開**: AWS Certificate Manager（ACM）からエクスポートされた証明書の展開を自動化
- **シークレット管理**: AWS Secrets Manager のシークレットをローカルキャッシュして管理
- **ハイブリッド対応**: AWS環境と非AWS環境（オンプレミス）の両方で動作
- **マルチプラットフォーム**: Windows、Linuxで動作し、ApacheおよびNGINXウェブサーバーをサポート
- **下位互換性**: AWS Secrets Manager Agentとの完全な互換性を維持
- **オープンソース**: GitHubで公開されており、コミュニティで利用可能

### 設定可能な項目

- 証明書ARN: ACM証明書のARNを指定
- ファイルパス: 証明書を保存するファイルパス
- サーバー再読み込み動作: サーバー再読み込みの動作方式（例: Apache、NGINX）

### 利用可能な環境

- すべてのAWSリージョン
- エクスポート可能なACM証明書が必要
- AWS Secrets Managerが必要

### メリット

- **運用負荷の削減**: 証明書更新の自動化により、手動対応を削減
- **セキュリティ向上**: 有効期限切れによる障害を防止
- **複雑性の排除**: Amazon EventBridgeを使用したカスタムオートメーション実装が不要
- **統一管理**: シークレットと証明書を単一プロバイダーで管理

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-workload-credentials-provider/)
- [AWS Certificate Manager ドキュメント](https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate-automation.html)
- [GitHub リポジトリ](https://github.com/aws/aws-workload-credentials-provider)
- [AWS Secrets Manager ドキュメント](https://docs.aws.amazon.com/secretsmanager/)