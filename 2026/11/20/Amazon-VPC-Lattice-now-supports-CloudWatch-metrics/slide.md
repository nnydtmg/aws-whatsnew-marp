---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon VPC LatticeがVPCリソース向けCloudWatchメトリクスをサポート

Amazon VPC Lattice now supports CloudWatch metrics for VPC resources

**What's New** | 2026-11-20T08:00:00

---

## 概要

- Amazon VPC LatticeはVPCリソース向けのCloudWatchメトリクスを新たに提供し、リソース所有者と利用者がレイヤー4トラフィックを直接監視できるようになりました。

---

## 前提・背景

### これまでの課題

以前はリソースアクセスログがトラフィック確認の主な手段でしたが、追加の処理が必要でリアルタイム可視性が限定的でした。今回CloudWatchでレイヤー4リソースを直接監視できるようになりました。

---

### 関連する最近の動向

- **Amazon VPC Lattice now supports CloudWatch metrics for VPC resources - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-lattice-cloudwatch-metrics/)

- **CloudWatch metrics for Amazon VPC Lattice - Amazon VPC Lattice**
  [詳細](https://docs.aws.am...

---

## 変更内容・新機能

以前はリソースアクセスログがトラフィック確認の主な手段でしたが、追加の処理が必要でリアルタイム可視性が限定的でした。今回CloudWatchでレイヤー4リソースを直接監視できるようになりました。

容量計画メトリクス（BytesProcessed、NewFlows、ActiveFlows）により、リソース所有者はリソースゲートウェイおよびリソース設定ごとのトラフィックを監視できます。信頼性メトリクス（PacketsDropped）で接続性の問題を早期検知できます。リソースゲートウェイはポート割り当てエラーも報告し、ENIあたりのIPv4アドレス追加が必要かどうかを判断できます。

---

## まとめ

- Amazon VPC Lattice now supports CloudWatch metrics for VPC resources について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-lattice-cloudwatch-metrics/)

### 関連情報

- [Amazon VPC Lattice now supports CloudWatch metrics for VPC resources - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-lattice-cloudwatch-metrics/)
- [CloudWatch metrics for Amazon VPC Lattice - Amazon VPC Lattice](https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-cloudwatch.html)