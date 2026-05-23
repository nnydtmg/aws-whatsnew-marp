---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Secrets Manager が Datadog と Snowflake の外部シークレット管理に対応

Datadog キーと Snowflake プログラマティックアクセストークンの自動ローテーション対応

**発表日: 2026年5月22日**

---

## 概要

### AWS Secrets Manager の機能拡張

- **Datadog キーのサポート**: API キー、アプリケーションキー、管理者認証情報ペアの 3 種類
- **Snowflake PAT のサポート**: プログラマティックアクセストークンの自動ローテーション
- **自動ローテーション**: カスタム Lambda 関数なしで直接管理可能
- **猶予期間設定**: Snowflake でアプリケーション移行を無停止で実現

---

## 前提・背景

### シークレット管理の課題

- サードパーティサービスの認証情報管理が複雑化
- 複数のサービスで独立した認証情報ローテーションが必要
- カスタム Lambda 関数開発・維持のオーバーヘッド

### AWS Secrets Manager の進化

- 既存対応: Salesforce、BigID、Snowflake、Confluent Cloud、MongoDB Atlas
- 今回追加: Datadog、Snowflake PAT
- 継続的にサードパーティ連携を拡大中

---

## 主な機能・変更内容

### Datadog 連携

- **API キー**: Datadog API 認証用のキーをローテーション
- **アプリケーションキー**: Datadog アプリケーション認証用
- **管理者認証情報ペア**: サービスアカウント用の認証情報
- 3 種類すべてが AWS Secrets Manager から一元管理可能

### Snowflake 連携

- **ネイティブ認証対応**: Snowflake 標準の認証方式で連携
- **プログラマティックアクセストークン**: PAT の自動ローテーション
- **設定可能な猶予期間**: 旧トークン有効期間を指定し無停止移行
- **シームレスな切り替え**: アプリケーション再起動不要

---

## 効果・メリット

### セキュリティの向上

- **定期的な自動ローテーション**: 認証情報の漏洩リスク低減
- **一元管理**: 複数サービスの認証情報を統一管理
- **暗号化保存**: AWS KMS による暗号化
- **アクセス制御**: IAM ポリシーで細粒度の権限管理

### 運用効率化

- **カスタム開発不要**: AWS マネージド機能により既存コード変更最小化
- **無停止ローテーション**: 猶予期間設定でアプリケーション中断回避
- **複数リージョン対応**: すべてのマネージド外部シークレット対応リージョンで利用可能
- **監査ログ**: CloudTrail により変更履歴を追跡可能

---

## ユースケース

### データパイプライン

```
AWS Secrets Manager
        |
        ├─ Datadog API キー → 監視・分析
        ├─ Snowflake PAT → データウェアハウス
        └─ 自動ローテーション（定期実行）
        
結果: 認証情報管理の一元化、自動ローテーション実装
```

### マルチクラウド環境

- AWS → Datadog へのメトリクス送信
- Datadog → Snowflake へのデータ取り込み
- 全認証情報を AWS Secrets Manager で管理

---

## 対応リージョン

- AWS Secrets Manager の管理外部シークレット機能がサポートされているすべての AWS リージョン
- グローバルな大規模デプロイに対応

---

## まとめ

### 今回のアップデートのポイント

1. **Datadog 完全対応**: API キー、アプリケーションキー、管理者認証情報を一元管理
2. **Snowflake PAT サポート**: プログラマティックアクセストークンの安全な自動ローテーション
3. **猶予期間機能**: 新旧トークン併用で無停止移行を実現
4. **エコシステム拡大**: BigID、Confluent、MongoDB Atlas との連携も充実

### 次のステップ

1. 既存の Datadog・Snowflake 統合を AWS Secrets Manager で評価
2. テスト環境でローテーション設定・検証
3. 本番環境での段階的な移行実施
4. CloudTrail でのログ監視・監査

---

## 参考リソース

- **AWS What's New**: [AWS Secrets Manager adds managed external secrets support](https://aws.amazon.com/about-aws/whats-new/2026/05/secrets-manager-managed-external-secrets-datadog-snowflake/)
- **AWS Secrets Manager ドキュメント**: https://docs.aws.amazon.com/secretsmanager/
- **Datadog Integration Guide**: https://docs.datadoghq.com/agent/configuration/secrets-management/
- **Snowflake Authentication**: https://docs.snowflake.com/en/user-guide/security-authentication
- **関連記事**: [MongoDB Atlas・Confluent Cloud 対応](https://aws.amazon.com/about-aws/whats-new/2026/04/secrets-manager-managed-external-secrets-mongodb-confluent)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**