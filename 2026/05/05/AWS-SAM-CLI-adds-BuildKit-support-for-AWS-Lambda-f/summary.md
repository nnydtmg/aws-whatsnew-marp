# AWS SAM CLI adds BuildKit support for AWS Lambda functions packaged as container images

**カテゴリ:** What's New
**公開日:** 2026-05-05
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-cli-buildkit-aws-lambda/](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-cli-buildkit-aws-lambda/)

---

## 要約

AWS SAM CLIがBuildKitをサポートすることで、Lambda関数のコンテナイメージビルドが高速化・効率化され、マルチステージビルド、改善されたキャッシング、クロスアーキテクチャビルド、セキュアなシークレット管理などの高度な機能が利用可能になりました。

## 詳細

AWS SAM CLIがLambda関数のコンテナイメージビルドにおいてBuildKitのサポートを追加しました。マルチステージビルド機能により、開発用依存関係を除いた小さなファイナルイメージを作成できるようになりました。改善されたキャッシング機能によりリビルド時間を短縮することができます。ビルドステップの並列化が向上し、より効率的なビルドプロセスが実現されました。x86_64とarm64（AWS Graviton2）の両アーキテクチャに対応するクロスアーキテクチャビルドが可能になりました。ビルド中にDockerシークレットを使用でき、認証情報やAPIキーなどの機密データをイメージレイヤーから除外できます。SAM CLI バージョン1.159.0以降で--use-buildkitフラグをsam buildコマンドで使用することで利用可能です。DockerとFinchの両方でこの機能が動作します。