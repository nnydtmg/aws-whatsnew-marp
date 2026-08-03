# AWS Resilience Hub が推奨レジリエンステストを提供開始

AWS Resilience Hub now provides recommended resilience tests

**カテゴリ:** What's New
**公開日:** 2026-08-03T19:02:58
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-resilience-hub/)

---

## 要約

AWS Resilience Hubの推奨レジリエンステスト機能により、プラットフォームエンジニアリングおよびサイト信頼性エンジニアリングチームは、既知の障害シナリオに対するサービスの対応と回復を検証できるようになりました。このテストはFISを活用して自動的に障害を注入し、詳細なレポートを生成します。

## このアップデートで何が変わったか

- AWS Resilience Hubが推奨レジリエンステストを提供するようになりました。
- このテストは、サービスが既知の障害シナリオにどのように対応し、回復するかを検証するのに役立ちます。
- プラットフォームエンジニアリングおよびサイト信頼性エンジニアリングチーム向けの機能です。
- AWS Fault Injection Service (FIS)を使用して制御された障害を注入します。
- サービスのアーキテクチャ、設定、およびレジリエンスポリシーに基づいて事前設定されたテストを提供します。
- 可用性ゾーン障害、地域障害、依存関係障害などのシナリオを検証できます。
- テストは自動的にリソースをターゲットにし、障害を注入し、アラーム評価と回復目標に基づいて合格または不合格の結果を生成します。
- 詳細なテストレポートが自動生成されます。
- 15のAWSリージョンで利用可能です。

## 詳細

### 推奨レジリエンステスト機能の特徴

- **自動テスト生成**: アプリケーションのアーキテクチャ分析に基づいて、事前設定されたテストケースを自動生成
- **FIS連携**: AWS Fault Injection Serviceを活用した制御された障害注入
- **包括的なシナリオテスト**: AZ障害、地域障害、依存関係障害など複数のシナリオに対応
- **自動評価**: アラーム評価と回復目標(RTO/RPO)に基づいた合格/不合格の自動判定
- **レポート自動生成**: テスト結果と信頼性スコアの詳細なレポートを自動生成

### 対象ユーザー

- プラットフォームエンジニアリングチーム
- サイト信頼性エンジニア(SRE)
- インフラストラクチャ管理者
- アプリケーション開発チーム

### 利用可能なリージョン

15のAWSリージョンで利用可能

## ユースケース

### 1. マイクロサービスアーキテクチャの検証

複数のマイクロサービスで構成されたアプリケーションで、サービス間依存関係が障害に対してどう動作するかを検証

### 2. 災害復旧計画(DR)のテスト

リージョン間フェイルオーバーのシナリオテストと、RTO/RPO目標の達成を確認

### 3. コンプライアンスと監査対応

金融機関や医療機関での定期的な障害テストと監査ログの自動生成

### 4. 本番環境への安心なデプロイ

アーキテクチャ変更やインフラアップグレード前の包括的な信頼性評価

## メリット

### 運用効率

- テストケース作成の自動化により、手動作業を削減
- AWS Resilience Hubコンソール内で統合的に実行

### リスク低減

- 本番環境での予期しない障害を事前に検出
- 信頼性スコアに基づいた継続的な改善

### チーム間の連携

- プラットフォームチームとSREチームによる統一的な信頼性検証
- 自動的に生成されるテストレポートで透明性を確保

## 関連情報

- [AWS Resilience Hub – application resilience](https://aws.amazon.com/resilience-hub)
- [Implementing recommended experiments using the AWS Resilience Hub console | AWS Cloud Operations Blog](https://aws.amazon.com/blogs/mt/implementing-recommended-experiments-using-the-aws-resilience-hub-console)
- [AWS Fault Injection Service](https://aws.amazon.com/fis/)
- [AWS Well-Architected Framework - 信頼性の柱](https://docs.aws.amazon.com/wellarchitected/)

---

**このアップデートについてのご質問や詳細な情報は、上記のAWS公式ドキュメントをご参照いただくか、AWSサポートにお問い合わせください。**