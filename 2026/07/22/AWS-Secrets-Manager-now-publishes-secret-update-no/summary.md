# AWS Secrets Manager が Amazon EventBridge への通知発行をサポート

AWS Secrets Manager now publishes secret update notifications to Amazon EventBridge

**カテゴリ:** What's New
**公開日:** 2026-07-22T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/secrets-manager-update-notifications)

このページでは、AWS What's Newで発表された「AWS Secrets Manager now publishes secret update notifications to Amazon EventBridge」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Secrets Manager がシークレット値の変更時に Amazon EventBridge へ自動的にイベントを発行するようになり、複数の API イベント照合が不要になりました。これにより、ユーザーは EventBridge ルールを活用してキャッシュされた認証情報の更新やサービス再起動などのイベント駆動型ワークフローをリアルタイムで実行できるようになります。

## このアップデートで何が変わったか

- AWS Secrets Manager が Amazon EventBridge に対してシークレット更新通知を自動的に発行するようになりました。

- キャッシュされた認証情報をプロアクティブに更新したり、依存するサービスを再起動したり、シークレットローテーションのコンプライアンスレポートを更新したりすることが可能です。

## 対象ユーザー

- AWS Secrets Manager を利用していて、シークレット更新に応じた自動アクション実行を必要とする企業
- イベント駆動型アーキテクチャを採用しているチーム
- マイクロサービス環境でシークレット管理を一元化している組織
- コンプライアンス監視が必要な業界

## 詳細

- AWS Secrets Manager が Amazon EventBridge に対してシークレット更新通知を自動的に発行するようになりました。

- シークレット値が変更されるたびに、EventBridge にイベントが直接発行されるため、複数の CloudTrail API イベントを照合する必要がなくなりました。

- EventBridge ルールを使用して、ローテーション中などのアクティブなシークレット値の変更を検出できます。

- AWS Lambda、Amazon SNS、Amazon SQS、Amazon Step Functions などのターゲットに通知をルーティングできます。

- キャッシュされた認証情報をプロアクティブに更新したり、依存するサービスを再起動したり、シークレットローテーションのコンプライアンスレポートを更新したりすることが可能です。

- シークレット更新通知はデフォルトイベントバスに自動的に発行され、追加の設定やオプトインは不要です。

- この機能は AWS Secrets Manager が利用可能なすべての AWS リージョンで追加料金なしで利用できます。

## ユースケース

### 1. データベース認証情報の自動更新

データベースパスワードのローテーション時に、アプリケーションの接続プールをリセット

### 2. API キーの動的更新

外部 API キーの更新を検出し、アプリケーション設定を即座に反映

### 3. コンプライアンス監視

シークレット変更イベントをキャプチャし、監査ログに記録・分析

### 4. マイクロサービスの自動再起動

シークレット更新に応じて、複数のマイクロサービスを自動再起動

## メリット

- **運用効率の向上**: 自動更新による手作業削減
- **追加料金なし**: 既存サービスの統合機能
- **セキュリティ強化**: リアルタイムな対応が可能
- **設定が簡単**: ゼロ設定で自動利用開始

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/secrets-manager-update-notifications)
- [AWS Secrets Manager events - Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/latest/ref/events-ref-secretsmanager.html)
- [How Amazon EventBridge uses AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_how-services-use-secrets_events.html)
- [Match AWS Secrets Manager events with Amazon EventBridge](https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring-eventbridge.html)