---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Agent Registryがレジストリレコードのカスタムメタデータをサポート

AWS Agent Registry now supports custom metadata for registry records

**What's New** | 2026-10-13T21:00:00

---

## 概要

- AWS Agent Registryにカスタムメタデータ機能が追加され、組織独自のフィールドでリソースを一貫して発見およびガバナンスできるようになりました。
- 本機能は、多数のエージェントや関連リソースを管理する組織に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS Agent Registry now supports custom metadata for registry records**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-agent-registry-custom-metadata-registry-records)

- **Key capabilities - Amazon Bedrock AgentCore**
  [詳細](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-key-capabilities.html)

- **Manage agents, tools and skills at scale w...

---

## 変更内容・新機能

AWS Agent Registryは、組織内のエージェント、MCPサーバー、エージェントスキル、ゲートウェイ、カスタムリソースの集中型カタログです。組織が数百規模のリソースを管理するにあたり、名前と説明だけでは効果的なガバナンスと発見が不十分になります。カスタムメタデータにより、すべてのレジストリレコードに組織独自の構造化フィールドを追加でき、人と自動化システムの両方が一貫してリソースを発見・ガバナンスできます。

パブリッシャーはチーム所有権、データ分類、レビュー状況などのフィールドを各レコードに記録できます。レジストリごとに共通属性のスキーマを一度定義し、エージェントレコードのモデルファミリのようなタイプ固有フィールドで拡張できます。各フィールドは自由テキスト、URL、Boolean、許可値リストからの選択に対応し、作成および更新時に必須フィールドと値が検証されます。

---

## 効果・メリット

- AWS Agent Registryは、組織内のエージェント、MCPサーバー、エージェントスキル、ゲートウェイ、カスタムリソースの集中型カタログです。
- 組織が数百規模のリソースを管理するにあたり、名前と説明だけでは効果的なガバナンスと発見が不十分になります。
- カスタムメタデータにより、すべてのレジストリレコードに組織独自の構造化フィールドを追加でき、人と自動化システムの両方が一貫してリソースを発見・ガバナンスできます。

---

## まとめ

- AWS Agent Registry now supports custom metadata for registry records について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-agent-registry-custom-metadata-registry-records)

### 関連情報

- [AWS Agent Registry now supports custom metadata for registry records](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-agent-registry-custom-metadata-registry-records)
- [Key capabilities - Amazon Bedrock AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-key-capabilities.html)
- [Manage agents, tools and skills at scale with AWS Agent Registry](https://aws.amazon.com/blogs/machine-learning/manage-agents-tools-and-skills-at-scale-with-aws-agent-registry)
- [Supported record types and descriptors](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-supported-record-types.html)
- [AWS Agent Registry end of public preview](https://github.com/hashicorp/terraform-provider-aws/issues/48694)