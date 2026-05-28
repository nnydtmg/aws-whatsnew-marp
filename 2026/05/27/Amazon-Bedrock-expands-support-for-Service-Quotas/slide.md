---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock での Service Quotas サポート拡張

Amazon Bedrock expands support for Service Quotas

**発表日: 2026年5月27日**

---

## 概要

### AWS Service Quotas との統合

- **bedrock-mantleエンドポイント**: Inference quotasを AWS Service Quotasで表示可能に
- **一貫性のある管理**: OpenAI/Anthropic ベースアプリケーションでも同じ方法で管理
- **スケーリング計画**: 本番環境での容量計画が容易に
- **モデルごとの制限**: input/output tokens-per-minute (TPM) を可視化

---

## 前提・背景

### 従来の課題

- bedrock-mantle エンドポイントの quotas が AWS Service Quotas に非表示
- OpenAI/Anthropic ベースアプリケーションの限度管理が一貫性に欠ける
- 本番環境でのスケーリング計画に必要な情報が不足
- requests-per-minute (RPM) ベースの古い制限方式

### 関連する最近の動向

- RPM quotas の廃止（2026年5月27日）
- トークンベースの quotas へのシフト
- bedrock-mantle での OpenAI/Anthropic API 完全サポート

---

## 変更内容・新機能

### 1. bedrock-mantle Quotas の可視化

- AWS Service Quotas コンソール上に quotas を表示
- モデルごとの input/output TPM を確認可能
- bedrock-runtime と同じ管理方法を採用

### 2. 対応 API

- OpenAI Responses API
- OpenAI Chat Completions API  
- Anthropic Messages API

### 3. トークンベースの管理

- **Claude 4.7+**: Input TPM 10M / Output TPM 2M
- **全モデル共通**: RPM 10,000（アカウント/リージョンごと）
- 新しい scheduling 機構による fair-share 分配

---

## 効果・メリット

- **可視化の向上**: bedrock-mantle の限度が一目でわかる
- **管理の統一**: 他の AWS サービスと同じ方法で quota 管理
- **スケーリング計画**: 本番環境での容量計画が容易に
- **既存アプリの最小変更**: OpenAI/Anthropic コードで利用可能
- **グローバル対応**: 全 AWS リージョンで利用可能

---

## ユースケース

### 1. OpenAI ベースアプリケーションの移行

- 既存の OpenAI 統合コードを Amazon Bedrock に移動
- Service Quotas で TPM 限度を可視化・管理

### 2. Anthropic Claude の大規模利用

- Claude 4.7+ の高い TPM 限度を活用
- 本番環境での自動スケーリング計画

### 3. マルチモデル展開

- 複数のモデルを bedrock-mantle で運用
- 統一された quota 管理で複雑性を低減

---

## 利用方法

### AWS Service Quotas コンソール

1. AWS Service Quotas コンソールを開く
2. Amazon Bedrock を検索
3. bedrock-mantle のサービス quotas を確認
4. 必要に応じて増加をリクエスト

### Quota 増加リクエスト

- 標準的な Amazon Bedrock limit 増加プロセスに従う
- AWS Support を通じてリクエスト

---

## 利用可能なリージョン

- 米国東部 (us-east-1)
- 米国西部 (us-west-2)
- アジア太平洋各地
- ヨーロッパ各地
- 南米各地

---

## まとめ

### 主なポイント

- Amazon Bedrock が Service Quotas 統合により quota 管理を統一
- bedrock-mantle で OpenAI/Anthropic API 完全サポート
- トークンベースの新しい quota 方式により予測可能なスケーリング
- 全 AWS リージョンでグローバルに利用可能

### 次のステップ

1. AWS Service Quotas で bedrock-mantle の quota を確認
2. 現在の利用状況と見通しを評価
3. 必要に応じて quota 増加をリクエスト
4. 本番環境での容量計画を更新

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/5/amazon-bedrock-service-quotas/
- **Amazon Bedrock ドキュメント**: https://docs.aws.amazon.com/bedrock/latest/userguide/doc-history.html
- **スケーリング・ベストプラクティス**: https://docs.aws.amazon.com/bedrock/latest/userguide/scaling-throughput-best-practices.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**