# Policy in Amazon Bedrock AgentCore is now generally available

**カテゴリ:** What's New
**公開日:** 2026年3月3日
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/03/policy-amazon-bedrock-agentcore-generally-available/

---

## 要約

Amazon Bedrock AgentCore の Policy 機能が一般提供開始されました。この機能により、エージェント-ツール間のインタラクションに対する一元化された細粒度のコントロールが可能になります。

セキュリティ、コンプライアンス、運用チームは、自然言語で作成したポリシーが自動的に AWS のオープンソースポリシー言語である Cedar に変換され、エージェントコードを修正することなくツールアクセスと入力検証ルールを定義できるようになります。

---

## 詳細

### 主な特徴

1. **一元化された制御**
   - エージェント-ツール間のインタラクションに対して、一元化された細粒度のコントロールを提供
   - ツールアクセスと入力検証ルールを統一的に管理

2. **コード外でのポリシー動作**
   - Policyはエージェントコード外で動作
   - セキュリティ、コンプライアンス、運用チームがコード修正なしにルールを定義可能

3. **自然言語から自動変換**
   - 自然言語で作成されたポリシーが Cedar 言語に自動変換
   - 非開発者でもポリシー定義が可能

4. **トラフィック制御**
   - ポリシーエンジンに保存されたポリシーが AgentCore Gateway にアタッチ
   - エージェント-ツール間のトラフィックをインターセプト
   - 各リクエストをポリシーに対して評価し、ツールアクセスを許可または拒否

5. **ガバナンスと可視性**
   - エージェントが定義されたパラメータ内で動作することを保証
   - 組織の可視性とガバナンスを維持

### 利用可能範囲

- **13の AWS リージョンで利用可能**

### 対象ユーザー

- セキュリティチーム
- コンプライアンスチーム
- 運用チーム
- エージェント開発チーム

---

## ビジネスメリット

### セキュリティ強化
- AI エージェントの不正な動作を防止
- ツール利用の権限を厳密に制御
- エージェント-ツール間の通信内容を検証

### コンプライアンス対応
- 金融、ヘルスケア、公共機関などの規制要件に自動対応
- 監査トレイルの確保
- 組織ポリシーの自動適用

### 運用効率化
- ポリシー変更の即時適用（再デプロイ不要）
- セキュリティチームと開発チームの分離
- 非開発者によるガバナンス体制構築

### 拡張性
- 複数のエージェント・ツール組み合わせに対応
- 組織規模の拡大に対応可能
- マルチテナント環境での利用

---

## 推奨される次のアクション

1. 組織のセキュリティ・コンプライアンス要件を整理
2. Amazon Bedrock AgentCore Policy の試用・評価
3. 既存エージェント実装への Policy 適用を検討
4. セキュリティチームとの協働体制を構築
5. ポリシー定義のベストプラクティスの確立

---

## 関連リソース

- [AWS What's New - Policy in Amazon Bedrock AgentCore](https://aws.amazon.com/about-aws/whats-new/2026/03/policy-amazon-bedrock-agentcore-generally-available/)
- [Amazon Bedrock AgentCore - AWS 公式ページ](https://aws.amazon.com/bedrock/agentcore/)
- [Control Agent-to-Tool Interactions - AWS ドキュメント](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy.html)
- [The 2026 Guide to Amazon Bedrock AgentCore - GoML](https://www.goml.io/blog/amazon-bedrock-agentcore)
- [Amazon Bedrock AgentCore governance updates - Bold Start](https://fastforward.boldstart.vc/amazon-bedrock-agentcore-getting-key-governance-updates/)
