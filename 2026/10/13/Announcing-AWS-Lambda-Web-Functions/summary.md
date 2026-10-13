# AWS Lambda Web Functions が発表 — コード変更なしでWebアプリをデプロイ

Announcing AWS Lambda Web Functions

**カテゴリ:** AWS Blog
**公開日:** 2026-10-12T22:34:47
**元記事:** [元記事](https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere/)

このページでは、AWS What's Newで発表された「Announcing AWS Lambda Web Functions」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda Web Functionsは、標準的なHTTPウェブアプリケーションをコードの書き換えなしでLambda上にデプロイできる新機能です。Express、Hono、Fastify、Next.jsなどのNode.jsフレームワークを単一コマンドでデプロイでき、スケーリング・マルチリージョン配信・アクティブCPU課金を自動処理します。ウェブアプリケーションやAPIバックエンドを構築する開発者に適しています。

## このアップデートで何が変わったか

利用可能リージョン: US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Tokyo), Europe (Ireland)
ランタイム: Node.js 24 (nodejs24.x) on Arm64

## 対象ユーザー

Lambdaは今回のローンチにより3つのフォームファクターを提供します。全てFirecracker隔離テクノロジー上に構築されています。
1. Lambda Event Functions: 既存のLambda関数。イベント駆動・単一同期ハンドラーモデル、壁時計課金。イベント処理、キュー消費、AWSサービスからの呼び出しに最適。
2. Lambda Web Functions: HTTPネイティブプログラミングモデル、複数同期実行、アクティブCPU課金。コードがポートを監聴し標準HTTPリクエストを処理。Webアプリ、APIバックエンド、インタラクティブHTTPワークロードに最適。
3. La

## 詳細

AWS Lambda Web Functionsは、標準的なHTTPウェブアプリケーションをイベントハンドラーへ書き換えることなくLambda上で実行できる新しいフォームファクターです。Express、Hono、Fastify、Next.jsなどのNode.jsフレームワークで構築した標準的なポート監聴サーバーを単一コマンド（aws lambda-web deploy）でデプロイできます。アダプター不要、インフラ管理不要、フレームワークロックインなし。

Lambdaは今回のローンチにより3つのフォームファクターを提供します。全てFirecracker隔離テクノロジー上に構築されています。
1. Lambda Event Functions: 既存のLambda関数。イベント駆動・単一同期ハンドラーモデル、壁時計課金。イベント処理、キュー消費、AWSサービスからの呼び出しに最適。
2. Lambda Web Functions: HTTPネイティブプログラミングモデル、複数同期実行、アクティブCPU課金。コードがポートを監聴し標準HTTPリクエストを処理。Webアプリ、APIバックエンド、インタラクティブHTTPワークロードに最適。
3. Lambda MicroVMs: カスタマー管理のライフサイクルを持つ隔離されたステートフルサンドボックス環境。信頼できないコードやユーザー生成コードの実行用。

主な機能:
- 1つの実行環境で最大128件の同時リクエストを処理
- アクティブCPU課金: CPU使用時間のみ課金。DBクエリやAPI呼び出しの待機時間はCPU消費が少ない。メモリは実行環境が存在する間計量
- マルチリージョン配信: --regions オプションで複数リージョンに複製し、レイテンシーベースルーティングを自動設定。グローバルURL（<domain-id>.lambda-web.global.on.aws）で提供
- リビジョン管理: 不変のコードスナップショット。エンドポイントがリビジョンへトラフィックをルーティング
- カナリアデプロイ: revision-weightsでトラフィック分散（90%/10%など）が可能
- Amazon CloudFront連携: Web FunctionエンドポイントをCloudFrontのオリジンに設定可能。OAC（Origin Access Control）でプライベートオリジン化
- VPC接続対応
- 環境変数AWS_LAMBDA_HTTP_ENDPOINTで監聴先ホスト・ポートを指定

対象ワークロード:
- WebアプリケーションやAPIバックエンド
- サーバーサイドレンダリング
- I/O負荷の高いワークロード
- AI推論エンドポイント（トークンストリーミング）
- グローバルな利用者へ低レイテンシーを提供したいケース

利用可能リージョン: US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Tokyo), Europe (Ireland)
ランタイム: Node.js 24 (nodejs24.x) on Arm64

開始方法: aws lambda-web deploy --name hello-world --hello-world
ドキュメント: https://docs.aws.amazon.com/lambda/latest/dg/web-functions.html

## 参考リンク

- [元記事](https://aws.amazon.com/blogs/aws/announcing-aws-lambda-web-functions-for-fast-consistent-web-app-performance-anywhere/)