# Amazon Textract CoreがAIエージェント向けスキルを発表

Announcing a new skill for AI agents in Amazon Textract Core

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-textract-core-skill-ai-agents/)

このページでは、AWS What's Newで発表された「Announcing a new skill for AI agents in Amazon Textract Core」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Textract Coreに、サーバー不要で文書データを抽出できるAIエージェント向けスキルが追加されました。独自の統合構築が不要になり、自然言語で構造化データを取得できます。

## このアップデートで何が変わったか

Amazon Textract Coreに、サーバー不要で文書データを抽出できるAIエージェント向けスキルが追加されました。独自の統合構築が不要になり、自然言語で構造化データを取得できます。

## 対象ユーザー

Amazon Textract Core now lets AI agents extract text, tables, forms, and other data from documents through a skill, with no server to run or infrastructure to deploy. The skill guides an agent to the right Amazon Textract Core API for each document and includes a tested parser that converts the outp

## 活用シーン

Amazon Textract Core now lets AI agents extract text, tables, forms, and other data from documents through a skill, with no server to run or infrastructure to deploy. The skill guides an agent to the right Amazon Textract Core API for each document and includes a tested parser that converts the outp

## 詳細

Amazon Textract Core now lets AI agents extract text, tables, forms, and other data from documents through a skill, with no server to run or infrastructure to deploy. The skill guides an agent to the right Amazon Textract Core API for each document and includes a tested parser that converts the output into reading-order text and structured fields, such as answers to questions, receipt and invoice details, and identity document fields. Previously, teams that connected an agent to Amazon Textract had to build and maintain their own integration. You ask in natural language, and the agent returns the answers you need. The skill processes multi-page PDFs and returns every page in reading order. It uses confidence scores to accept high-confidence results and flags the rest, so you can route them to your own review process. For example, you can ask an agent to turn a patient's intake form into structured data and flag unclear fields for staff review. The skill is available at no additional charge, and standard Amazon Textract pricing applies. It is available in all commercial AWS Regions where Amazon Textract is available. If you use the AWS MCP server with the aws-core plugin, your agent can load the skill automatically. The skill is also published in the AWS Agent Toolkit, so agents including Kiro, Claude Code, and Cursor can use it.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-textract-core-skill-ai-agents/)