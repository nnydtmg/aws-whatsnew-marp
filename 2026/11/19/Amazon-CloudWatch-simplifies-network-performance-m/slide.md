---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch が VPC 向けネットワークパフォーマンス監視を簡素化

Amazon CloudWatch simplifies network performance monitoring for your Amazon Virtual Private Cloud (VPC)

**What's New** | 2026-11-18T08:00:00

---

## 概要

- Amazon CloudWatch Network Monitoringにパフォーマンスモニターが追加され、ソフトウェア不要でAWSネットワークパスの健全性をほぼリアルタイムに監視できるようになりました。
- 本機能はVPC上のワークロードを運用されるお客様や問題の切り分けを行うチームに適しております。

---

## 前提・背景

### これまでの課題

Amazon CloudWatch Network Monitoringにパフォーマンスモニターが追加され、ソフトウェアをインストールすることなくワークロードが通るAWSネットワークパスの健全性をほぼリアルタイムで監視できるようになりました。本機能はパスごとのレイテンシー、ネットワーク影響スコアおよびトラフィック量を提供し、VPCを選択するだけで数分以内にメトリクスが利用可能になります。AWSが既に収集しているテレメトリを利用し、AZ内・AZ間・リージョン間・AWSサービス向けのパスをTCP/U

---

### 関連する最近の動向

- **Amazon CloudWatch simplifies network performance monitoring for your Amazon Virtual Private Cloud (VPC) - AWS**...

---

## 変更内容・新機能

Amazon CloudWatch Network Monitoringにパフォーマンスモニターが追加され、ソフトウェアをインストールすることなくワークロードが通るAWSネットワークパスの健全性をほぼリアルタイムで監視できるようになりました。本機能はパスごとのレイテンシー、ネットワーク影響スコアおよびトラフィック量を提供し、VPCを選択するだけで数分以内にメトリクスが利用可能になります。AWSが既に収集しているテレメトリを利用し、AZ内・AZ間・リージョン間・AWSサービス向けのパスをTCP/UDP/ICMPで特定し、過去履歴と他パスと比較してスコアを算出します。メトリクスはCloudWatchに公開され、AWS Organizations統合でアカウント・リージョン跨ぎのVPC監視も可能です。フローモニターを補完し、AWSネットワークの問題と自社アプリケーションの問題を切り分けできます。

---

## まとめ

- Amazon CloudWatch simplifies network performance monitoring for your Amazon Virtual Private Cloud (VPC) について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-network-path-monitoring/)

### 関連情報

- [Amazon CloudWatch simplifies network performance monitoring for your Amazon Virtual Private Cloud (VPC) - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-network-path-monitoring/)
- [Cross-Region AWS PrivateLink monitoring with Amazon CloudWatch Network Synthetic Monitor](https://aws.amazon.com/blogs/mt/cross-region-aws-privatelink-monitoring-with-amazon-cloudwatch-network-synthetic-monitor)
- [Using Network Synthetic Monitor - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/what-is-network-monitor.html)
- [Amazon CloudWatch Network Monitoring adds flow visibility between Regions](https://aws.amazon.com/about-aws/whats-new/2025/09/amazon-cloudwatch-network-flow-visibility-regions)
- [Mastering AWS Network Observability: A Practical Guide](https://builder.aws.com/content/3CnMknyHkkcyDOcp6W6dcz0WVS2/mastering-aws-network-observability-a-practical-guide)