# AWS MCP ServerがAWS Lambda向けサーバーレス診断機能を追加

AWS MCP Server adds a serverless capability for AWS Lambda functions

**カテゴリ:** What's New
**公開日:** 2026-09-04T16:31:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-mcp-server-serverless/)

このページでは、AWS What's Newで発表された「AWS MCP Server adds a serverless capability for AWS Lambda functions」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS MCP Serverに、Lambda関数とその接続リソースを効率的に診断するサーバーレス機能が追加されました。本機能は、コーディングエージェントを利用する開発者に適しております。

## このアップデートで何が変わったか

AWS MCP Serverに、Lambda関数とその接続リソースを効率的に診断するサーバーレス機能が追加されました。本機能は、コーディングエージェントを利用する開発者に適しております。

## 対象ユーザー

Today, AWS Model Context Protocol Server (AWS MCP Server) added a serverless capability so that coding agents such as Claude Code and Kiro can efficiently diagnose issues with your Lambda functions. The serverless capability helps you troubleshoot your running Lambda functions and their connected re

## 活用シーン

Today, AWS Model Context Protocol Server (AWS MCP Server) added a serverless capability so that coding agents such as Claude Code and Kiro can efficiently diagnose issues with your Lambda functions. The serverless capability helps you troubleshoot your running Lambda functions and their connected re

## 詳細

Today, AWS Model Context Protocol Server (AWS MCP Server) added a serverless capability so that coding agents such as Claude Code and Kiro can efficiently diagnose issues with your Lambda functions. The serverless capability helps you troubleshoot your running Lambda functions and their connected resources. The AWS MCP Server, available through the Agent Toolkit for AWS or as a standalone installation, is a managed service that gives AI coding agents secure access to AWS services. With the new AWS MCP Server serverless capability, your coding agent inspects your Lambda function and its connected resources across Amazon API Gateway, Amazon EventBridge, Amazon S3, Amazon DynamoDB, Amazon SNS, Amazon SQS, and AWS Step Functions. The agent can correlate error signals against a 7-day baseline to pinpoint what changed, surface recurring errors to identify trends, retrieve the deployed configuration of your function and connected resources, provide a timeline of recent changes to track what happened, and analyze service latency across connected resources. As the agent gets comprehensive data in a single call, it consumes fewer tokens compared to orchestrating multiple API calls. To get started, configure the Agent toolkit for AWS by running 'aws configure agent-toolkit' from the AWS CLI, or enable the AWS MCP Server directly. The AWS MCP Server can access services in all commercial AWS Regions, while the AWS MCP Server itself runs in the US East (N. Virginia) and Europe (Frankfurt) Regions. The serverless diagnostic capabilities in the AWS MCP Server are available at no additional cost.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-mcp-server-serverless/)