# AWS AppConfigがAIモデル呼び出しとプロンプト設定の管理をサポート

AWS AppConfig launches support for managing native AI model and AI prompt configuration

**カテゴリ:** What's New
**公開日:** 2026-11-19T05:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-appconfig-native-ai-model-invocation-prompt-configurations/)

このページでは、AWS What's Newで発表された「AWS AppConfig launches support for managing native AI model and AI prompt configuration」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS AppConfigは、生成AI向けのモデル設定とプロンプトをコード再デプロイなしで安全に管理できる新機能を提供します。生成AIソリューションを迅速かつ安全に運用したいお客様に適しています。

## このアップデートで何が変わったか

AWS AppConfigが生成AIアプリケーション向けにAIモデル呼び出し設定（AI model invocation configurations）とAIプロンプト設定（AI prompt configurations）という2つの新しい設定プロファイルタイプを導入しました。アプリケーションの実行中にコードを再デプロイせずにモデル設定やプロンプトを変更できます。段階的なロールアウトと自動ロールバックにより、安全に設定を更新できます。

AIプロンプト設定はプロンプトを独立してバージョン管理されるアーティファクトとして保存します。モデル設定を変更せずにプロンプト単体を更新・最適化でき、複数アプリケーションで再利用できます。

## 対象ユーザー

AWS AppConfigが生成AIアプリケーション向けにAIモデル呼び出し設定（AI model invocation configurations）とAIプロンプト設定（AI prompt configurations）という2つの新しい設定プロファイルタイプを導入しました。アプリケーションの実行中にコードを再デプロイせずにモデル設定やプロンプトを変更できます。段階的なロールアウトと自動ロールバックにより、安全に設定を更新できます。

## 詳細

AWS AppConfigが生成AIアプリケーション向けにAIモデル呼び出し設定（AI model invocation configurations）とAIプロンプト設定（AI prompt configurations）という2つの新しい設定プロファイルタイプを導入しました。アプリケーションの実行中にコードを再デプロイせずにモデル設定やプロンプトを変更できます。段階的なロールアウトと自動ロールバックにより、安全に設定を更新できます。

AIモデル呼び出し設定は、アプリケーションがAIモデルを呼び出す際に使う設定を保存します。モデル識別子、temperatureや最大トークン数などの推論パラメーター、システムプロンプトや例示コンバセーションなどのメッセージを含みます。プロバイダー固有のオプションはカスタムパラメーターで管理されるため、同一スキーマが複数のAIプロバイダーで利用できます。

AIプロンプト設定はプロンプトを独立してバージョン管理されるアーティファクトとして保存します。モデル設定を変更せずにプロンプト単体を更新・最適化でき、複数アプリケーションで再利用できます。

変更はトラフィックの10%、20%、30%と段階的にロールアウト可能です。運用メトリクス、顧客体験、トークン使用量への影響を測定できます。Amazon CloudWatch、Datadog、New Relicなどのオブザーバビリティソリューションのアラームが発火した場合、AWS AppConfigが自動的に前回の状態へロールバックします。

AWS AppConfigが利用可能な全AWSリージョンで追加コストなしで今日から利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-appconfig-native-ai-model-invocation-prompt-configurations/)