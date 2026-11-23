---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS CDK Blocksが一般提供開始、本番対応アプリ構築を簡素化

AWS CDK Blocks reaches general availability

**What's New** | 2026-11-20T08:00:00

---

## 概要

- AWS CDK Blocksが一般提供開始となり、本番対応アプリケーションの構築を簡素化する機能が利用可能になりました。
- これにより、開発チームは迅速に高品質なアプリケーションを構築できます。
- CDK BlocksはCDKの拡張として、データストレージと処理、バックグラウンドジョブ、AIエージェント構築向けの本番対応ビルディングブロックを17種類以上提供します。

---

## 前提・背景

### 関連する最近の動向

- **AWS CDK Blocks reaches general availability**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cdk-blocks-ga/)

- **What is AWS CDK Blocks?**
  [詳細](https://docs.aws.amazon.com/cdk/blocks/devguide/what-is-blocks.html)

- **AWS Launches Blocks preview**
  [詳細](https://www.infoq.com/news/2026/06/aws-blocks-framework-preview)

---

## 変更内容・新機能

AWS CDK Blocks（プレビュー時の名称はAWS Blocks）が一般提供開始。CDKの拡張として、データストレージと処理、バックグラウンドジョブ、AIエージェント構築向けの本番対応ビルディングブロックを17種類以上提供する。各CDK BlockはCDK Constructに、アプリがそのインフラを利用するための接続コード、AWSサービス固有のベストプラクティス（安全なリトライ、デッドレターキュー、パーシャルバッチ失敗処理）、ローカルテストセットアップを打ち込んだパッケージ。開発者はAWSアカウントなしでローカルにビルド・テストし、同じコードを変更せず自社AWSアカウントへデプロイ可能。組織の要件を反映したカスタムCDK Blockの構成と共有も可能。全リージョンで利用可能。追加サービス料金なし。Apache License 2.0のオープンソース。

---

## まとめ

- AWS CDK Blocks reaches general availability について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cdk-blocks-ga/)

### 関連情報

- [AWS CDK Blocks reaches general availability](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cdk-blocks-ga/)
- [What is AWS CDK Blocks?](https://docs.aws.amazon.com/cdk/blocks/devguide/what-is-blocks.html)
- [AWS Launches Blocks preview](https://www.infoq.com/news/2026/06/aws-blocks-framework-preview)