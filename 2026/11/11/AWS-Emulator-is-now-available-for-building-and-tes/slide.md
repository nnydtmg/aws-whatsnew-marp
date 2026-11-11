---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Emulatorが利用可能に - アカウント不要でローカル構築・テスト

AWS Emulator is now available for building and testing AWS applications locally

**What's New** | 2026-11-11T17:00:00

---

## 概要

- AWS Emulatorが本日よりご利用いただけるようになり、AWSアカウントなしでローカルおよび継続的インテグレーション環境にて構築とテストができます。
- 開発者やコーディングエージェントがデプロイ前にエラーを修正するのに適しています。

---

## 変更内容・新機能

AWS Emulatorは、コンピューターや継続的インテグレーション環境でAWSアプリケーションを構築およびテストできる公式エミュレーターです。既存のAWS SDKおよびCLIの呼び出しがエミュレーターに送られ、ミリ秒単位で応答が返されます。デプロイやAWSアカウントは不要であり、対応操作ではAWSと同じ結果とエラーが返されます。未対応操作は501 Not Implementedを返します。リソース状態はメモリ上に保持され、停止すると消えます。各インスタンスは独自のポート・キー・インメモリ状態を持ち、エージェント・テストスイート・CIジョブ間でリソースが衝突しません。サービスはAWS SDKと同じ公開APIモデルから生成され、新サービスやAPIはリリースごとに追加・検証されます。AWSリージョンに依存せず、追加のサービス料金はありません。ソースコードはCC0 1.0 Universalで公開されています。本番利用は非推奨です。

---

## まとめ

- AWS Emulator is now available for building and testing AWS applications locally について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-emulator-now-available/)
