# Amazon Bedrock AgentCore の Web Answer が一般提供開始

Announcing Web Answer on Amazon Bedrock AgentCore

**カテゴリ:** What's New
**公開日:** 2026-11-05T20:56:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/web-answer-amazon-bedrock/)

このページでは、AWS What's Newで発表された「Announcing Web Answer on Amazon Bedrock AgentCore」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCoreのWeb Answerが一般提供され、エージェントビルダーの皆様は単一の呼び出しで最新のウェブソースに基づく根拠付き回答を取得できるようになりました。

## このアップデートで何が変わったか

- 新機能は、Amazon Bedrock AgentCoreにおけるWeb Answerの一般提供開始です。
- Web Answerは、自然言語の質問に対して根拠付きかつ引用付きの合成回答を単一の呼び出しで返すマネージドツールです。
- 本機能はWeb Searchを拡張し、ウェブコンテンツの検索から完成した回答の返却までを実現します。
- 本アップデートは、検索・取得・合成・引用のパイプラインを自ら構築・維持したくないエージェントビルダーの皆様に適しています。
- Web Answerはエージェントのように動作し、検索を計画し、複数を並列実行し、十分な証拠が集まったと判断した時点で回答します。
- ドメインの許可リスト・拒否リスト、公開日フィルターで検索範囲を制御できます。
- AgentCore Gatewayのターゲットとしてアタッチし、MCP経由で呼び出され、IAMで認証され、データは外部に送信されません（zero data egress）。
- 米国東部（バージニア北部）リージョンで利用可能で、ツール呼び出しごとの料金体系です。
- 2026年6月にリリースされたWeb 

## 詳細

- 新機能は、Amazon Bedrock AgentCoreにおけるWeb Answerの一般提供開始です。
- Web Answerは、自然言語の質問に対して根拠付きかつ引用付きの合成回答を単一の呼び出しで返すマネージドツールです。
- 本機能はWeb Searchを拡張し、ウェブコンテンツの検索から完成した回答の返却までを実現します。
- 本アップデートは、検索・取得・合成・引用のパイプラインを自ら構築・維持したくないエージェントビルダーの皆様に適しています。
- Web Answerはエージェントのように動作し、検索を計画し、複数を並列実行し、十分な証拠が集まったと判断した時点で回答します。
- ドメインの許可リスト・拒否リスト、公開日フィルターで検索範囲を制御できます。
- AgentCore Gatewayのターゲットとしてアタッチし、MCP経由で呼び出され、IAMで認証され、データは外部に送信されません（zero data egress）。
- 米国東部（バージニア北部）リージョンで利用可能で、ツール呼び出しごとの料金体系です。
- 2026年6月にリリースされたWeb Searchを拡張し「ウェブコンテンツを見つける」から「完成した回答を返す」へと進化しました。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/web-answer-amazon-bedrock/)