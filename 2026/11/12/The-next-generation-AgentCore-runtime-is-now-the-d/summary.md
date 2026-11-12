# Amazon Bedrock AgentCoreの次世代ランタイムがデフォルトに

The next generation AgentCore runtime is now the default

**カテゴリ:** What's New
**公開日:** 2026-11-12T05:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/)

このページでは、AWS What's Newで発表された「The next generation AgentCore runtime is now the default」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrock AgentCoreの次世代ランタイムが複数リージョンでデフォルトとなり、セッションの高速起動とアイドル時ゼロスケールを実現します。重量作業やマルチターンエージェントを運用するお客様にとって、性能向上と最大68パーセントの課金メモリ削減が期待できます。

## このアップデートで何が変わったか

本日より、Amazon Bedrock AgentCoreの新規ランタイムでは次世代ランタイムがデフォルトとなります。次世代ランタイムは初期化済みエージェントのスナップショットから各セッションを復元し、作業に応じてコンピュートとメモリをスケールし、アイドル時はゼロまでスケールします。各セッションはハードウェア分離されたFirecrackerマイクロVMで動作し、最大8 vCPUおよび32 GBメモリ、最大10 GBのコンテナイメージをサポートします。2 GBイメージではセッション起動がP75で2秒未満となり、従来の29.7秒から短縮されました。マルチターンエージェントではセッションあたり最大68パーセントの課金メモリ削減が見込めます。既存ランタイムは移行まで現行版のままで、platformVersionをV2に設定すると移行できます。新規ランタイムを現行版のまま使う場合はplatformVersionをV1に設定します。本更新は、大規模コードベースのコンパイルやブラウザ操作、ローカルモデル読み込みなどの重量作業を行うお客様に適しています。セッションの高速起動と課金メモリ削減を求めるマル

## 対象ユーザー

本日より、Amazon Bedrock AgentCoreの新規ランタイムでは次世代ランタイムがデフォルトとなります。次世代ランタイムは初期化済みエージェントのスナップショットから各セッションを復元し、作業に応じてコンピュートとメモリをスケールし、アイドル時はゼロまでスケールします。各セッションはハードウェア分離されたFirecrackerマイクロVMで動作し、最大8 vCPUおよび32 GBメモリ、最大10 GBのコンテナイメージをサポートします。2 GBイメージではセッション起動がP75で2秒未満となり、従来の29.7秒から短縮されました。マルチターンエージェントではセッションあたり最大6

## 詳細

本日より、Amazon Bedrock AgentCoreの新規ランタイムでは次世代ランタイムがデフォルトとなります。次世代ランタイムは初期化済みエージェントのスナップショットから各セッションを復元し、作業に応じてコンピュートとメモリをスケールし、アイドル時はゼロまでスケールします。各セッションはハードウェア分離されたFirecrackerマイクロVMで動作し、最大8 vCPUおよび32 GBメモリ、最大10 GBのコンテナイメージをサポートします。2 GBイメージではセッション起動がP75で2秒未満となり、従来の29.7秒から短縮されました。マルチターンエージェントではセッションあたり最大68パーセントの課金メモリ削減が見込めます。既存ランタイムは移行まで現行版のままで、platformVersionをV2に設定すると移行できます。新規ランタイムを現行版のまま使う場合はplatformVersionをV1に設定します。本更新は、大規模コードベースのコンパイルやブラウザ操作、ローカルモデル読み込みなどの重量作業を行うお客様に適しています。セッションの高速起動と課金メモリ削減を求めるマルチターンエージェントの利用者にも有用です。デフォルト対応リージョン: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), South America (São Paulo), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Milan), Europe (Paris), Europe (Spain), Europe (Stockholm), Asia Pacific (Malaysia), Asia Pacific (Mumbai), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Thailand), Asia Pacific (Tokyo)。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/)