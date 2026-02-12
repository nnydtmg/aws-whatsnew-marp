# Amazon Bedrock AgentCore Browser now supports proxy configuration

**カテゴリ:** What's New
**公開日:** 2026-02-11
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/bedrock-agentcore-browser-proxy/](https://aws.amazon.com/about-aws/whats-new/2026/02/bedrock-agentcore-browser-proxy/)

---

## 要約

Amazon Bedrock AgentCore Browserがカスタマー提供のプロキシ設定に対応し、ブラウザセッションを顧客のプロキシインフラストラクチャ経由でルーティングできるようになりました。これにより、地理的制限コンテンツへのアクセス、地域別コンテンツ検証、およびコンプライアンス要件を満たしながら、特に医療機関や金融サービス企業などの規制業界での自動化が実現可能になります。

## 詳細

Amazon Bedrock AgentCore Browserがカスタマー提供のプロキシ設定に対応するようになりました。地理的ターゲティング、地域別コンテンツアクセス、およびコンプライアンス要件を満たすため、ブラウザセッションを顧客自身のプロキシインフラストラクチャ経由でルーティングできるようになりました。地理的に制限されたコンテンツへのアクセス、地域別の価格設定検証、および市場全体でのローカライズされたアプリケーション動作の検証が可能になりました。医療や金融サービスなどの規制業界の顧客は、セキュリティポリシーを満たしながら重要なビジネスプロセスを自動化できるようになりました。ブラウザプロキシは、IPローテーションによる再認証サイクルを排除し、IP許可リスト要件のための安定した制御可能な送信アドレスを提供します。HTTPおよびHTTPSプロトコルの両方をサポートしており、AWS Secrets Managerを通じた安全な認証情報管理が可能です。この機能は、厳密なIPホワイトリストを持つヘルスケア組織、厳格な送信ポリシーを持つ金融サービス企業、および監査とセキュリティポリシー実施を提供するコーポレートプロキシインフラストラクチャを通じてトラフィックをルーティングするエンタープライズに特に有用です。この機能は、Amazon Bedrock AgentCore Browserが利用可能な14のAWSリージョンすべてで利用可能です。

## 主な機能

### プロキシ設定機能

- **HTTP/HTTPS プロトコル対応**: 両方のプロトコルをサポート
- **基本認証**: ユーザー名とパスワードによる認証
- **AWS Secrets Manager統合**: 認証情報の安全な管理
- **ドメインパターン指定**: 特定のドメインへのルーティング設定
- **バイパスルール**: 特定ドメインをプロキシ経由にしない設定
- **複数プロキシ**: 複数のプロキシを設定・管理可能

## ユースケース

### 医療機関

- ヘルスケアポータルへのアクセス（IPホワイトリスト対応）
- 患者データ取得の自動化
- コンプライアンス要件の満たし

### 金融サービス

- 複数地域での価格監視・検証
- 規制要件への対応
- トレーディングシステムとの連携

### エンタープライズ

- コーポレートプロキシ経由でのトラフィックルーティング
- セキュリティポリシーの実施
- 監査ログの統合

## 効果・メリット

### 運用効率化

- IP許可リスト要件の簡素化
- IPローテーション時の再認証が不要
- 認証情報の一元管理

### ビジネス効果

- エンタープライズセキュリティ要件への自動対応
- AIエージェントの自動化範囲拡大
- 複数地域でのビジネスプロセス自動化

### 技術的メリット

- 安定した送信アドレス
- 柔軟なプロキシ設定
- AWS Secrets Managerとのシームレス統合

## 利用可能なリージョン

Amazon Bedrock AgentCore Browserが利用可能な14のAWSリージョン全て：

- 米国東部 (N. Virginia)
- 米国東部 (Ohio)
- 米国西部 (Oregon)
- ヨーロッパ (Ireland)
- ヨーロッパ (London)
- ヨーロッパ (Frankfurt)
- アジア太平洋 (Tokyo)
- アジア太平洋 (Singapore)
- アジア太平洋 (Sydney)
- アジア太平洋 (Mumbai)
- 他

## 関連リソース

- [AWS What's New記事](https://aws.amazon.com/about-aws/whats-new/2026/02/bedrock-agentcore-browser-proxy/)
- [AWS API Changes](https://awsapichanges.info/archive/changes/56b6d8-bedrock-agentcore.html)
- [Amazon Bedrock AgentCore ドキュメント - ブラウザプロキシ](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/browser-proxies.html)
- [トラブルシューティング](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/built-in-tools-troubleshooting.html)
- [VPC設定](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-vpc.html)