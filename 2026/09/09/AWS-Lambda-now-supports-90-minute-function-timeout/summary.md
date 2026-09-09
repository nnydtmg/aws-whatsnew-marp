# AWS Lambda Managed Instances が関数タイムアウト最大90分をサポート

AWS Lambda now supports 90-minute function timeout on Lambda Managed Instances

**カテゴリ:** What's New
**公開日:** 2026-09-09T18:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-90-minute-function/)

このページでは、AWS What's Newで発表された「AWS Lambda now supports 90-minute function timeout on Lambda Managed Instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda Managed Instancesにおいて、非同期およびESM呼び出しの関数タイムアウトが最大90分まで延長されました。長時間の連続実行が必要なデータ処理やAI推論などのワークロードをご利用のお客様に適した更新です。

## このアップデートで何が変わったか

AWS Lambdaは、Lambda Managed Instances上の非同期およびESM呼び出しにおいて、最大90分の関数タイムアウトをサポートするようになりました。本機能は伝来の15分制限から6倍の延長となり、同期呼び出しは伝来どおり15分のままです。本更新は、メディアトランスコーディング、金融計算、AI推論など長時間の連続実行が必要なデータ集約型ワークロードをご利用のお客様に適しております。アーキテクチャの再設計なしに長時間ジョブを実行したいお客様にも有益です。AWS Lambda Console、AWS CLI、Lambda API、IaCツール、Agent Toolkit for AWSで設定可能です。Lambda Managed Instancesが利用可能なすべてのAWSリージョンで利用できます。

## 対象ユーザー

AWS Lambdaは、Lambda Managed Instances上の非同期およびESM呼び出しにおいて、最大90分の関数タイムアウトをサポートするようになりました。本機能は伝来の15分制限から6倍の延長となり、同期呼び出しは伝来どおり15分のままです。本更新は、メディアトランスコーディング、金融計算、AI推論など長時間の連続実行が必要なデータ集約型ワークロードをご利用のお客様に適しております。アーキテクチャの再設計なしに長時間ジョブを実行したいお客様にも有益です。AWS Lambda Console、AWS CLI、Lambda API、IaCツール、Agent Toolkit for

## 詳細

AWS Lambdaは、Lambda Managed Instances上の非同期およびESM呼び出しにおいて、最大90分の関数タイムアウトをサポートするようになりました。本機能は伝来の15分制限から6倍の延長となり、同期呼び出しは伝来どおり15分のままです。本更新は、メディアトランスコーディング、金融計算、AI推論など長時間の連続実行が必要なデータ集約型ワークロードをご利用のお客様に適しております。アーキテクチャの再設計なしに長時間ジョブを実行したいお客様にも有益です。AWS Lambda Console、AWS CLI、Lambda API、IaCツール、Agent Toolkit for AWSで設定可能です。Lambda Managed Instancesが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-lambda-90-minute-function/)