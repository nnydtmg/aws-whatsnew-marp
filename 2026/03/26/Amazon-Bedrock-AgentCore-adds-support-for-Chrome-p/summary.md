# Amazon Bedrock AgentCore adds support for Chrome policies and custom root CA

**カテゴリ:** What's New
**公開日:** 2026-03-19T18:12:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-browser-policies-root-ca/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-browser-policies-root-ca/)

---

## 要約

Amazon Bedrock AgentCore は、Chrome Enterprise ポリシーとカスタムルート CA 証明書のサポートを追加することで、企業のセキュリティ要件と内部インフラストラクチャへの対応を強化いたしました。これにより、AI エージェントが厳格なセキュリティポリシーを持つ組織内で安全かつ効率的に運用できるようになります。

## 詳細

### 主な機能追加

1. **Chrome Enterprise ポリシーの設定機能**
   - Amazon Bedrock AgentCore は、Chrome Enterprise ポリシーの設定機能を追加いたしました。

2. **カスタムルート認証局（CA）証明書のサポート**
   - AgentCore Browser とコードインタープリタの両方で、カスタムルート認証局（CA）証明書の指定が可能になりました。

3. **ブラウザ動作の細粒度管理**
   - Chrome ポリシーを使用することで、100 以上の設定可能なポリシーを活用して、セキュリティ、URL フィルタリング、コンテンツ設定など、ブラウザの動作を管理できます。

### コンプライアンス・セキュリティの実装例

- 特定の URL への制限、パスワードマネージャーとダウンロードの無効化、URL ブロックリストの実装など、組織のコンプライアンス要件を強制することができます。

### 内部サービスへのアクセス

- カスタムルート CA サポートにより、AI エージェントが組織の内部認証局によって署名された SSL 証明書を使用する Artifactory、Jira、財務ポータルなどの内部サービスにシームレスに接続できます。

### 企業プロキシ対応

- TLS インターセプションを実行する企業プロキシとも連携することができます。

### リージョンの可用性

- これらの機能は、Amazon Bedrock AgentCore Browser とコードインタープリタが利用可能な 14 の AWS リージョンすべてで提供されています:
  - 北米: US East (N. Virginia)、US East (Ohio)、US West (Oregon)、Canada (Central)
  - ヨーロッパ: Europe (Frankfurt)、Europe (Ireland)、Europe (London)、Europe (Paris)、Europe (Stockholm)
  - アジア太平洋: Asia Pacific (Mumbai)、Asia Pacific (Singapore)、Asia Pacific (Sydney)、Asia Pacific (Tokyo)、Asia Pacific (Seoul)

## 主要な利点

### セキュリティの強化
- 組織固有のセキュリティ要件を自動的に強制
- ポリシーベースのブラウザ制御により、不正アクセスを防止
- CA 証明書による認証で、安全な内部アクセスを実現

### 運用効率の向上
- Chrome ポリシーで組織全体のセキュリティ設定を一元管理
- 複雑な認証設定を標準化し、統合を簡素化
- 複数の組織要件を効率的に満たしながら AI エージェントを展開

### ビジネスインパクト
- エンタープライズセキュリティ要件をクリアし、本番導入を促進
- AI エージェントの予測不可能な動作を厳格な制御により防止
- 組織の信頼性を確保

## ユースケース

1. **金融機関**
   - 厳格なセキュリティポリシー下での金融システムアクセス
   - 内部財務ポータルへの安全な接続
   - コンプライアンス要件を満たすアクセス制御

2. **大規模エンタープライズ**
   - 内部 Artifactory からのライブラリ取得自動化
   - Jira との連携による開発タスク管理の自動化
   - 企業プロキシ環境での安定した運用

3. **規制業界**
   - 医療、通信、エネルギー業界での厳格なセキュリティ要件対応
   - URL フィルタリングによる不正アクセスの防止
   - 監査ログ自動記録によるコンプライアンス証明

## 次のステップ

1. 自社のセキュリティポリシーを整理し、必要な Chrome ポリシーを特定
2. 内部認証局の CA 証明書を準備
3. AgentCore Browser/Code Interpreter でのパイロットテストを実施
4. 本番環境への段階的展開を計画

## 参考情報

- [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-browser-policies-root-ca/)
- [AgentCore Browser ドキュメント](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/browser-tool.html)
- [Browser Enterprise Policies](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/browser-enterprise-policies.html)
- [AgentCore リージョン](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-regions.html)
