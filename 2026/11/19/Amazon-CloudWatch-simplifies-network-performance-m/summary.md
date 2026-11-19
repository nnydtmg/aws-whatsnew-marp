# Amazon CloudWatch が VPC 向けネットワークパフォーマンス監視を簡素化

Amazon CloudWatch simplifies network performance monitoring for your Amazon Virtual Private Cloud (VPC)

**カテゴリ:** What's New
**公開日:** 2026-11-18T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-network-path-monitoring/)

このページでは、AWS What's Newで発表された「Amazon CloudWatch simplifies network performance monitoring for your Amazon Virtual Private Cloud (VPC)」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Network Monitoringにパフォーマンスモニターが追加され、ソフトウェア不要でAWSネットワークパスの健全性をほぼリアルタイムに監視できるようになりました。本機能はVPC上のワークロードを運用されるお客様や問題の切り分けを行うチームに適しております。

## このアップデートで何が変わったか

Amazon CloudWatch Network Monitoringにパフォーマンスモニターが追加され、ソフトウェアをインストールすることなくワークロードが通るAWSネットワークパスの健全性をほぼリアルタイムで監視できるようになりました。本機能はパスごとのレイテンシー、ネットワーク影響スコアおよびトラフィック量を提供し、VPCを選択するだけで数分以内にメトリクスが利用可能になります。AWSが既に収集しているテレメトリを利用し、AZ内・AZ間・リージョン間・AWSサービス向けのパスをTCP/UDP/ICMPで特定し、過去履歴と他パスと比較してスコアを算出します。メトリクスはCloudWatchに公開され、AWS Organizations統合でアカウント・リージョン跨ぎのVPC監視も可能です。フローモニターを補完し、AWSネットワークの問題と自社アプリケーションの問題を切り分けできます。

## 対象ユーザー

Amazon CloudWatch Network Monitoringにパフォーマンスモニターが追加され、ソフトウェアをインストールすることなくワークロードが通るAWSネットワークパスの健全性をほぼリアルタイムで監視できるようになりました。本機能はパスごとのレイテンシー、ネットワーク影響スコアおよびトラフィック量を提供し、VPCを選択するだけで数分以内にメトリクスが利用可能になります。AWSが既に収集しているテレメトリを利用し、AZ内・AZ間・リージョン間・AWSサービス向けのパスをTCP/UDP/ICMPで特定し、過去履歴と他パスと比較してスコアを算出します。メトリクスはCloudWatc

## 詳細

Amazon CloudWatch Network Monitoringにパフォーマンスモニターが追加され、ソフトウェアをインストールすることなくワークロードが通るAWSネットワークパスの健全性をほぼリアルタイムで監視できるようになりました。本機能はパスごとのレイテンシー、ネットワーク影響スコアおよびトラフィック量を提供し、VPCを選択するだけで数分以内にメトリクスが利用可能になります。AWSが既に収集しているテレメトリを利用し、AZ内・AZ間・リージョン間・AWSサービス向けのパスをTCP/UDP/ICMPで特定し、過去履歴と他パスと比較してスコアを算出します。メトリクスはCloudWatchに公開され、AWS Organizations統合でアカウント・リージョン跨ぎのVPC監視も可能です。フローモニターを補完し、AWSネットワークの問題と自社アプリケーションの問題を切り分けできます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudwatch-network-path-monitoring/)