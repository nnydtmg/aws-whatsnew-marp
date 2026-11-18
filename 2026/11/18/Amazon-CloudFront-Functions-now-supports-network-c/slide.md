---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront Functionsがネットワーク呼び出しに対応

Amazon CloudFront Functions now supports network calls

**What's New** | 2026-11-18T16:00:00

---

## 概要

- Amazon CloudFront Functionsがネットワーク呼び出しに対応し、エッジでリアルタイムデータを活用したリクエスト処理が可能になりました。
- 本機能は、エッジでの認証、ルーティング、分析を実現したいお客様に適しております。

---

## 前提・背景

### これまでの課題

Amazon CloudFront Functionsがネットワーク呼び出しに対応し、リクエスト中に応答を利用した処理が可能になりました。cf.fetch()メソッドでAPIを呼び出して処理を決定でき、cf.beacon()メソッドで視聴者を遅延させずに分析イベントを送信できます。両メソッドはOACやVPCオリジンなどの既存オリジン設定を活用し、全エッジロケーションでご利用いただけます。料金は100万回あたり0.10ドルで、定額プランのPro以上では追加料金なしとなります。本アップデートは、外部

---

### 関連する最近の動向

- **Amazon CloudFront Functions now supports network calls - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-ne...

---

## 変更内容・新機能

Amazon CloudFront Functionsがネットワーク呼び出しに対応し、リクエスト中に応答を利用した処理が可能になりました。cf.fetch()メソッドでAPIを呼び出して処理を決定でき、cf.beacon()メソッドで視聴者を遅延させずに分析イベントを送信できます。両メソッドはOACやVPCオリジンなどの既存オリジン設定を活用し、全エッジロケーションでご利用いただけます。料金は100万回あたり0.10ドルで、定額プランのPro以上では追加料金なしとなります。本アップデートは、外部データを用いた認証やルーティングをエッジで行いたいお客様に適しております。AIエージェントの権限確認、不正検出、キャッシュ配信時の分析送信を行いたいお客様にも適しております。CloudFront Functionsはこれまで軽量なJavaScriptをエッジで実行し、リクエストやレスポンスのカスタマイズを行ってきましたが、他サービスのデータに依存するロジックはLambda@Edgeやオリジン側に移す必要がありました。今回のアップデートにより、ビューワーに近いエッジでリアルタイムデータを使ったパー

---

## ユースケース

Amazon CloudFront Functionsがネットワーク呼び出しに対応し、リクエスト中に応答を利用した処理が可能になりました。cf.fetch()メソッドでAPIを呼び出して処理を決定でき、cf.beacon()メソッドで視聴者を遅延させずに分析イベントを送信できます。両メソッドはOACやVPCオリジンなどの既存オリジン設定を活用し、全エッジロケーションでご利用いただけます。料金は100万回あたり0.10ドルで、定額プランのPro以上では追加料金なしとなります。本アップデートは、外部データを用いた認証やルーティングをエッジで行いたいお客様に適しております。AIエージェントの権限確認

---

## まとめ

- Amazon CloudFront Functions now supports network calls について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-functions-network-calls/)

### 関連情報

- [Amazon CloudFront Functions now supports network calls - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudfront-functions-network-calls/)
- [Customize at the edge with CloudFront Functions - Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html)
- [CloudFront Functions vs. Lambda@Edge: what's the difference?](https://dev.to/aws-heroes/cloudfront-functions-vs-lambdaedge-whats-the-difference-1g60)
- [Amazon CloudFront Functions now supports logging to CloudFront access logs](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudfront-functions-access-logs)