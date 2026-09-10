---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch Network Monitor、Transit Gateway ピアリングで NHI をサポート

CloudWatch Network Monitor now provides NHI for Transit Gateway peering

**What's New** | 2026-09-10T10:28:00

---

## 概要

- Amazon CloudWatch Network Monitoring の合成モニターで、AWS Transit Gateway のリージョン間ピアリング接続を経由するパスのネットワークパフォーマンス問題が AWS ネットワークが原因かどうかを判定できるようになりました。
- これにより、ネットワークオペレーターとアプリケーション開発者は、これらのパスの劣化の原因を特定するのに費やす時間を短縮できます。

---

## 前提・背景

### これまでの課題

従来、合成モニターのネットワークヘルスインジケーター (NHI) は AWS Direct Connect を経由するパスのみをカバーしていました。今回のリリースでは、Transit Gateway のリージョン間ピアリングを経由して別のリージョンの宛先に到達するパスまで拡張されました。これらのパスについて、インジケーターは Transit Gateway ピアリング接続までの AWS ネットワークパスのヘルスを反映し、Amazon CloudWatch アカウントに公開されるため、ダッシュボー

---

### 関連する最近の動向

- **Amazon CloudWatch now supports network health indicator for TGW inter-Region peering using synthetic monitors -...

---

## 変更内容・新機能

従来、合成モニターのネットワークヘルスインジケーター (NHI) は AWS Direct Connect を経由するパスのみをカバーしていました。今回のリリースでは、Transit Gateway のリージョン間ピアリングを経由して別のリージョンの宛先に到達するパスまで拡張されました。これらのパスについて、インジケーターは Transit Gateway ピアリング接続までの AWS ネットワークパスのヘルスを反映し、Amazon CloudWatch アカウントに公開されるため、ダッシュボードの構築とアラームの設定が可能になります。

---

## 効果・メリット

- Amazon CloudWatch Network Monitoring の合成モニターで、AWS Transit Gateway のリージョン間ピアリング接続を経由するパスのネットワークパフォーマンス問題が AWS ネットワークが原因かどうかを判定できるようになりました。
- これにより、ネットワークオペレーターとアプリケーション開発者は、これらのパスの劣化の原因を特定するのに費やす時間を短縮できます。

---

## まとめ

- CloudWatch Network Monitor now provides NHI for Transit Gateway peering について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-network-monitoring-tgw-support)

### 関連情報

- [Amazon CloudWatch now supports network health indicator for TGW inter-Region peering using synthetic monitors - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-network-monitoring-tgw-support)
- [How Network Synthetic Monitor works - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/nw-monitor-how-it-works.html)