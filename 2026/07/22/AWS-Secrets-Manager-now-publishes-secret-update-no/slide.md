---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Secrets Manager が Amazon EventBridge への通知発行をサポート

AWS Secrets Manager now publishes secret update notifications to Amazon EventBridge

**What's New** | 2026-07-22T07:00:00

---

## 概要

- AWS Secrets Manager がシークレット値の変更時に Amazon EventBridge へ自動的にイベントを発行するようになり、複数の API イベント照合が不要になりました。
- これにより、ユーザーは EventBridge ルールを活用してキャッシュされた認証情報の更新やサービス再起動などのイベント駆動型ワークフローをリアルタイムで実行できるようになります。

---

## 前提・背景

### 市場背景

- **シークレット管理の複雑化**
  - 多くの企業で数百～数千個のシークレットを一元管理
  - シークレット変更時の依存アプリケーションへの通知が手動で行われることが多い

- **イベント駆動型アーキテクチャの需要
  - マイクロサービス環境でのリアルタイム連携が必須
  - シークレット更新に応じた自動キャッシュ更新・サービス再起動の要望

### 従来の課題

- CloudTrail API イベント照合による複雑な実装
- リアルタイム性の欠如
- 複数の監視手段が必要

---

## 変更内容・新機能

### 1. シークレット更新通知の自動発行

- AWS Secrets Manager が Amazon EventBridge に対してシークレット更新通知を自動的に発行
- シークレット値が変更されるたびに、EventBridge にイベントが直接発行される
- 複数の CloudTrail API イベントを照合する必要がなくなる

### 2. EventBridge ルールによる柔軟な処理

- EventBridge ルールを使用してシークレット値の変更を検出
- ローテーション中などのアクティブなシークレット値の変更に対応
- AWS Lambda、Amazon SNS、Amazon SQS、Amazon Step Functions などへのルーティング

### 3. ゼロ設定での有効化

- シークレット更新通知はデフォルトイベントバスに自動的に発行
- 追加の設定やオプトインは不要
- すべての AWS リージョンで利用可能

---

## 効果・メリット

### 運用効率の向上

- **自動更新の実現**
  - キャッシュされた認証情報をプロアクティブに更新
  - 依存するサービスを自動再起動
  - シークレットローテーションのコンプライアンスレポートを自動更新

### コスト削減

- **追加料金なし**
  - この機能は AWS Secrets Manager の既存機能として提供
  - EventBridge 利用時の標準料金のみ

### セキュリティ強化

- **リアルタイム対応**
  - シークレット変更への即座の対応
  - セキュリティコンプライアンスの向上

---

## ユースケース

### 1. データベース認証情報の自動更新

データベースパスワードのローテーション時に、アプリケーションの接続プールをリセット

### 2. API キーの動的更新

外部 API キーの更新を検出し、アプリケーション設定を即座に反映

### 3. コンプライアンス監視

シークレット変更イベントをキャプチャし、監査ログに記録・分析

### 4. マイクロサービスの自動再起動

シークレット更新に応じて、複数のマイクロサービスを自動再起動

---

## まとめ

### このアップデートのポイント

- **シークレット管理の自動化**
  - AWS Secrets Manager と Amazon EventBridge の統合により、シークレット更新の自動対応が可能に

- **運用負荷の軽減**
  - CloudTrail API 照合不要、複雑な実装が不要に
  - ゼロ設定で自動利用可能

- **セキュリティと効率のバランス**
  - リアルタイム性とコンプライアンスを両立

### 次のステップ

1. 自社のシークレット管理フローを評価
2. EventBridge ルール設定の検討（対象シークレット、ターゲット選定）
3. テスト環境での検証を実施
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/secrets-manager-update-notifications

- **AWS Secrets Manager events - Amazon EventBridge**: https://docs.aws.amazon.com/eventbridge/latest/ref/events-ref-secretsmanager.html

- **How Amazon EventBridge uses AWS Secrets Manager**: https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_how-services-use-secrets_events.html

- **Match AWS Secrets Manager events with Amazon EventBridge**: https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring-eventbridge.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**