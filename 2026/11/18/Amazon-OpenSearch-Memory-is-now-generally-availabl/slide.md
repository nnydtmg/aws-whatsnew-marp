---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon OpenSearch Memoryが一般提供開始、AIエージェントに永続メモリを追加

Amazon OpenSearch Memory is now generally available

**What's New** | 2026-11-18T21:09:00

---

## 概要

- Amazon OpenSearch Memoryが一般提供開始となり、AIエージェントへサーバーレスで永続メモリを追加できるようになりました。
- インフラを構築せずに長期メモリを実現したいお客様に適した機能です。

---

## 前提・背景

### これまでの課題

Amazon OpenSearch Serviceのサーバーレス機能であるAmazon OpenSearch Memoryが一般提供開始。AIエージェントのやり取りを検索可能なイベントとして保存し、有用なメモリを導出してセッションをまたいだ関連コンテキストを取得する。インフラのプロビジョニングや抽出・索引・統合・検索システムの構築なしにエージェントへ長期メモリを付与可能。元のイベントを原文のまま保存し数秒以内に検索可能にし、非同期で構造化メモリを導出。メモリライフサイクル全体（抽出、埋め込み、索

---

### 関連する最近の動向

- **Amazon OpenSearch Memory is now generally available - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2...

---

## 変更内容・新機能

Amazon OpenSearch Serviceのサーバーレス機能であるAmazon OpenSearch Memoryが一般提供開始。AIエージェントのやり取りを検索可能なイベントとして保存し、有用なメモリを導出してセッションをまたいだ関連コンテキストを取得する。インフラのプロビジョニングや抽出・索引・統合・検索システムの構築なしにエージェントへ長期メモリを付与可能。元のイベントを原文のまま保存し数秒以内に検索可能にし、非同期で構造化メモリを導出。メモリライフサイクル全体（抽出、埋め込み、索引、統合、キーワード/セマンティック/ハイブリッド検索による取得）を管理。IAMによるメモリストアごとのアクセス制御、アクターとセッションのスコープ設定、イベントとメモリの有効期限設定が可能。サーバーレスのためクラスタープロビジョニング不要で、抽出と検索の容量は自動スケール。利用可能リージョン: US East (N. Virginia, Ohio), US West (Oregon), Europe (Frankfurt), Asia Pacific (Tokyo)。エージェントは過去の意思決

---

## まとめ

- Amazon OpenSearch Memory is now generally available について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-memory-generally-available/)

### 関連情報

- [Amazon OpenSearch Memory is now generally available - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-memory-generally-available/)
- [What is Amazon OpenSearch Memory? - Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/memory.html)
- [OpenSearch as an agentic memory solution](https://opensearch.org/blog/opensearch-as-an-agentic-memory-solution-building-context-aware-agents-using-persistent-memory)
- [AWS OpenSearch pitch: retrieval, serverless costs and agent memory](https://venturebeat.com/data/awss-opensearch-pitch-ahead-of-opensearchcon-retrieval-serverless-costs-and-agent-memory)