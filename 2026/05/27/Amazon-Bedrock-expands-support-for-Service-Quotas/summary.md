# Amazon Bedrock での Service Quotas サポート拡張

Amazon Bedrock expands support for Service Quotas

**カテゴリ:** What's New
**公開日:** 2026-05-27
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/5/amazon-bedrock-service-quotas/)

このページでは、AWS What's Newで発表された「Amazon Bedrock expands support for Service Quotas」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrockは、bedrock-mantleエンドポイントのinference quotasをAWS Service Quotasで表示できるようにしました。これにより、顧客はOpenAIまたはAnthropicベースのアプリケーションを実行する際に、本番環境のスケーリングを計画し、limitsを一貫性のある方法で管理できるようになりました。

## このアップデートで何が変わったか

- **bedrock-mantle Quotas の可視化**: AWS Service Quotas コンソールでモデルごとの TPM を確認可能に
- **一貫性のある管理**: bedrock-runtime や他の AWS サービスと同じ方法で quotas を管理
- **トークンベースの制限**: RPM ベースから TPM（トークン/分）への移行で予測可能性向上
- **OpenAI/Anthropic 完全互換**: 既存コードの最小変更で Amazon Bedrock 上で実行可能
- **モデルごとの制限値**: input-tokens-per-minute と output-tokens-per-minute を個別に公開

## 詳細

### 主要な変更

1. **AWS Service Quotas コンソール統合**
   - bedrock-mantle エンドポイントの quotas を AWS Service Quotas で表示
   - モデルごとの input/output TPM 限度を確認可能
   - 他の AWS サービスと同じ方法で quota 増加をリクエスト

2. **トークンベースの新しい quota 方式**
   - 従来の RPM（requests-per-minute）ベースから TPM ベースへ移行
   - Claude 4.7+ の例: Input TPM 10M、Output TPM 2M
   - 全モデル共通の RPM 限度: 10,000/アカウント/リージョン

3. **API 互換性の拡張**
   - OpenAI Responses API サポート
   - OpenAI Chat Completions API サポート
   - Anthropic Messages API サポート
   - 既存アプリケーションの最小限のコード変更で利用可能

4. **スケーリング計画の容易化**
   - bedrock-mantle エンドポイントの限度が可視化される
   - 本番環境でのリソース計画が積極的に実施可能
   - 新しい scheduling 機構による fair-share 分配

### 対応リージョン

- 米国東部（us-east-1）
- 米国西部（us-west-2）
- アジア太平洋
- ヨーロッパ
- 南米

### 適用対象ユーザー

- OpenAI または Anthropic ベースのアプリケーションを実行している顧客
- Amazon Bedrock 上で生成 AI アプリケーションをスケーリングする必要がある顧客
- 複数のモデルの容量管理が必要な企業
- 本番環境での quota 管理を一元化したい組織

### 利用方法

1. **AWS Service Quotas コンソール**
   - AWS Management Console から Service Quotas を開く
   - Amazon Bedrock サービスを選択
   - bedrock-mantle の quotas を確認

2. **Quota 増加リクエスト**
   - Service Quotas コンソール から直接リクエスト
   - または AWS Support を通じてリクエスト
   - 標準的な Amazon Bedrock limit 増加プロセスに従う

## メリット・効果

- **一元的な管理**: すべての AWS サービスと同じ方法で quotas を管理
- **予測可能なスケーリング**: トークンベースの制限で容量計画が容易
- **柔軟な API 選択**: OpenAI/Anthropic 互換 API で既存コード再利用
- **グローバル展開**: 全 AWS リージョンで利用可能
- **自動化の促進**: Service Quotas API で quota 管理を自動化可能

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/5/amazon-bedrock-service-quotas/)
- [Amazon Bedrock ドキュメント](https://docs.aws.amazon.com/bedrock/latest/userguide/doc-history.html)
- [スケーリング・ベストプラクティス](https://docs.aws.amazon.com/bedrock/latest/userguide/scaling-throughput-best-practices.html)
