# CloudWatch Application Signals で例外・パフォーマンス異常・デプロイイベントを自動キャプチャ

CloudWatch Application Signals now automatically captures errors, performance anomalies, and deployment events

**カテゴリ:** What's New
**公開日:** 2026-07-06T15:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/cloudwatch-service-events/)

このページでは、AWS What's Newで発表された「CloudWatch Application Signals now automatically captures errors, performance anomalies, and deployment events」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Application Signals に Service Events 機能が追加され、例外、レイテンシーイベント、デプロイメントイベントを自動的にキャプチャできるようになりました。この機能により、開発者はコード変更なしにサービスのパフォーマンス問題やデプロイメント影響を迅速に特定することが可能になります。

## このアップデートで何が変わったか

- Amazon CloudWatch Application Signals に Service Events 機能が追加されました。この機能は、例外やレイテンシーイベントのスナップショット、関数レベルのパフォーマンスデータ、およびデプロイメントイベントを自動的にキャプチャします。

- 追加のコード変更なしに、計装されたサービスからこれらのイベントが自動的に取得されるようになりました。

## 対象ユーザー

Amazon CloudWatch Application Signals に Service Events 機能が追加され、例外、レイテンシーイベント、デプロイメントイベントを自動的にキャプチャできるようになりました。この機能により、開発者はコード変更なしにサービスのパフォーマンス問題やデプロイメント影響を迅速に特定することが可能になります。

## 詳細

- Amazon CloudWatch Application Signals に Service Events 機能が追加されました。この機能は、例外やレイテンシーイベントのスナップショット、関数レベルのパフォーマンスデータ、およびデプロイメントイベントを自動的にキャプチャします。

- 追加のコード変更なしに、計装されたサービスからこれらのイベントが自動的に取得されるようになりました。

- CloudWatch コンソールから Service > Errors セクションにアクセスすることで、デプロイメントが新しい例外を導入したかどうかを素早く特定できるようになりました。

- ADOT SDK または Amazon CloudWatch Observability EKS アドオンを使用してアプリケーションを計装すれば、Application Signals が有効になった時点で Service Events が自動的に機能を開始します。

- オプションとして、関数呼び出しメトリクスを有効にすることで、より詳細なパフォーマンス可視性を得ることができます。

- この機能は、すべての商用 AWS リージョンで利用可能であり、Java、Python、JavaScript がサポートされています。

- Service Events データはログとしてキャプチャされ、関数呼び出しメトリクスは OpenTelemetry メトリクスとしてキャプチャされます。

- 標準的な CloudWatch 料金が適用されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/cloudwatch-service-events/)