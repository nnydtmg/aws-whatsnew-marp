---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Secrets Manager Agent で事前取得とロール引き受けが利用可能に

Introducing pre-fetching and IAM role assumption for AWS Secrets Manager Agent

**What's New** | 2026-05-18T07:00:00

---

## 概要

- AWS Secrets Manager Agentが、スタートアップ時のシークレット事前取得機能とIAMロール引き受け機能をサポートするようになりました。
- これらの機能により、アプリケーション起動レイテンシーの削減、セキュリティ態勢の強化、およびマルチアカウント環境での運用オーバーヘッドの削減が実現されます。

---

## 前提・背景

### 市場の動向と課題

- マイクロサービス環境では起動時に複数のシークレットが必要
- クロスアカウント環境でのシークレット管理が複雑化
- セキュリティ態勢強化と運用効率の両立が課題

### 関連する最近の動向

- AWS Secrets Manager が量子耐性暗号（ML-KEM）による TLS 保護に対応（2026年4月）
- マルチアカウント環境での秘密鍵管理の重要性が増加
- 自動ローテーション機能が主流化

---

## 変更内容・新機能

### 1. シークレット事前取得機能

- **スタートアップ時の一括取得**: 起動時に指定したシークレットまたはタグ値をエージェント起動時に取得
- **BatchGetSecretValue API 活用**: 複数シークレットを効率的に取得
- **キャッシング**: 取得したシークレットをエージェント内にキャッシュ

### 2. IAM ロール引き受け機能

- **ロールARNの指定**: 事前取得設定またはHTTPリクエストでロールARNを指定
- **クロスアカウント対応**: 異なるアカウント内のロールを引き受け可能
- **シークレットごとの異なるロール**: マルチアカウント環境で柔軟に対応

---

## 効果・メリット

### パフォーマンス向上

- **起動レイテンシー削減**: 複数シークレット取得時の遅延を最小化
- **API呼び出し最適化**: 順序付きGetSecretValue呼び出しを回避
- **コスト削減**: バッチ処理による API コスト削減

### 運用効率化

- **カスタムロジック不要**: 事前読み込みロジックを排除
- **運用オーバーヘッド削減**: シークレット管理の複雑性を軽減
- **保守性向上**: 標準機能による安定した動作

### セキュリティ強化

- **ロールベースアクセス**: IAM ロール引き受けによる細粒度制御
- **最小権限原則**: シークレットごとに異なるロールを指定可能
- **監査可能性**: IAM ロール引き受けによる監査証跡

---

## ユースケース

### マイクロサービスアーキテクチャ

- **シナリオ**: 起動時に20個のシークレットが必要なマイクロサービス
- **従来**: 20回の GetSecretValue API 呼び出しが必要
- **改善後**: 単一のバッチ操作で事前取得、起動時間を大幅削減

### マルチアカウント環境

- **シナリオ**: 複数の AWS アカウントにまたがるシークレット管理
- **従来**: 各アカウント用に個別のクレデンシャル設定が必要
- **改善後**: シークレットごとに異なるIAMロールを指定、クロスアカウント取得が容易

### ハイブリッド環境

- **オンプレミスシステム**: Secrets Manager Agent がオンプレミスで動作
- **事前取得**: 接続確立時に必要なシークレットを一度に取得
- **信頼性**: 接続断時もキャッシュされたシークレットで動作継続

---

## まとめ

### 主要なポイント

1. **事前取得機能**: アプリケーション起動時にシークレットを一括取得
2. **ロール引き受け**: IAMロール引き受けによるクロスアカウント対応
3. **運用効率化**: カスタムロジック不要で運用オーバーヘッド削減

### 対応リージョン

- AWS Secrets Manager が提供されているすべての AWS リージョンでサポート

### 次のステップ

1. Secrets Manager Agent のバージョン確認と更新
2. 自社のマイクロサービスで事前取得機能の活用を検討
3. マルチアカウント環境での IAM ロール設定
4. テスト環境での動作検証

---

## 参考URL

- **元記事**: [Introducing pre-fetching and IAM role assumption for AWS Secrets Manager Agent](https://aws.amazon.com/about-aws/whats-new/2026/05/secrets-manager-agent-prefetch-and-role-assumption/)
- **AWS Secrets Manager ドキュメント**: https://docs.aws.amazon.com/secretsmanager/
- **Secrets Manager Agent**: https://docs.aws.amazon.com/secretsmanager/latest/userguide/agent.html
- **関連記事**: [AWS Secrets Manager clients now support hybrid post-quantum TLS](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-secrets-manager-post-quantum-tls/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**