# Amazon Bedrock AgentCore の管理型ハーネスが一般利用開始

AgentCore harness is now generally available

**カテゴリ:** What's New
**公開日:** 2026-06-17
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-harness-generally-available)

このページでは、AWS What's Newで発表された「AgentCore harness is now generally available」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCore の管理型エージェントハーネスが一般利用可能になり、チームが設定ベースでプロダクショングレードのエージェントを数分で構築・運用できるようになりました。このソリューションは、モデルの独立性、統合されたセキュリティ・可観測性、スケーラブルな運用基盤を提供し、エンタープライズ環境でのエージェント開発を大幅に加速させます。

## このアップデートで何が変わったか

Amazon Bedrock AgentCore の管理型エージェントハーネスが一般利用可能になったことが発表されました。このハーネスは、モデルの選択、ツール呼び出し、スキルアクセス、命令実行などを設定ベースで定義することで、数分でプロダクショングレードのエージェントを実行できます。オーケストレーションループの実行、ツール実行、コンテキストウィンドウ管理、セッション間の状態永続化、障害復旧、セッション分離などの機能を提供します。

## 詳細

### 主要機能

1. **管理型エージェントハーネス**
   - モデルの選択、ツール呼び出し、スキルアクセス、命令実行を設定ベースで定義
   - 数分でプロダクショングレードのエージェントを実行可能

2. **統合プラットフォーム**
   - オーケストレーションループの実行
   - ツール実行
   - コンテキストウィンドウ管理
   - セッション間の状態永続化
   - 障害復旧
   - セッション分離

3. **モデル独立性**
   - ハーネスはモデルから独立
   - セッション中にモデルやプロバイダーを切り替え可能

4. **セキュリティ・可観測性**
   - セキュリティポリシーの実行
   - 組織知識へのアクセス
   - ウェブ検索
   - ID管理
   - メモリ
   - 可観測性

5. **カスタマイズ対応**
   - カスタムオーケストレーションが必要な場合、CLIコマンドでStrands ベースのコードにエクスポート可能
   - 再構築は不要

### 提供範囲

- AWS商用リージョンのAgentCore が利用可能なすべての地域で一般利用可能

### ユースケース

#### VTEX社の事例

> "以前は、新しいエージェントのプロトタイプ作成には、オーケストレーションコードとインフラ設定に数日を要していました。ハーネス機能により、モデル選択、ツール追加、命令の調整が設定変更になったため、エージェントのアイデア検証が数日から数分に短縮されました。"
> — Rodrigo Moreira, VP of Engineering, VTEX

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-harness-generally-available)
- [AWS ブログ: Announcing new features in Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/get-to-your-first-working-agent-in-minutes-announcing-new-features-in-amazon-bedrock-agentcore)
- [AWS Show and Tell: Getting started quickly with managed harness in AgentCore](https://www.youtube.com/watch?v=jXPvvJ_KX8s)
- [SiliconAngle: AWS accelerates AI agent development in Amazon Bedrock AgentCore](https://siliconangle.com/2026/04/22/aws-accelerates-ai-agent-development-amazon-bedrock-agentcore)
- [AWS Documentation: Release notes for Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html)