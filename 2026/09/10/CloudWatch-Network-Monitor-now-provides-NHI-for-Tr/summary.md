# Amazon CloudWatch Network Monitor、Transit Gateway ピアリングで NHI をサポート

CloudWatch Network Monitor now provides NHI for Transit Gateway peering

**カテゴリ:** What's New
**公開日:** 2026-09-10T10:28:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-network-monitoring-tgw-support)

このページでは、AWS What's Newで発表された「CloudWatch Network Monitor now provides NHI for Transit Gateway peering」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatch Network Monitoring の合成モニターで、AWS Transit Gateway のリージョン間ピアリング接続を経由するパスのネットワークパフォーマンス問題が AWS ネットワークが原因かどうかを判定できるようになりました。これにより、ネットワークオペレーターとアプリケーション開発者は、これらのパスの劣化の原因を特定するのに費やす時間を短縮できます。

## このアップデートで何が変わったか

従来、合成モニターのネットワークヘルスインジケーター (NHI) は AWS Direct Connect を経由するパスのみをカバーしていました。今回のリリースでは、Transit Gateway のリージョン間ピアリングを経由して別のリージョンの宛先に到達するパスまで拡張されました。これらのパスについて、インジケーターは Transit Gateway ピアリング接続までの AWS ネットワークパスのヘルスを反映し、Amazon CloudWatch アカウントに公開されるため、ダッシュボードの構築とアラームの設定が可能になります。

## 対象ユーザー

Amazon CloudWatch Network Monitoring の合成モニターで、AWS Transit Gateway のリージョン間ピアリング接続を経由するパスのネットワークパフォーマンス問題が AWS ネットワークが原因かどうかを判定できるようになりました。これにより、ネットワークオペレーターとアプリケーション開発者は、これらのパスの劣化の原因を特定するのに費やす時間を短縮できます。

## 詳細

従来、合成モニターのネットワークヘルスインジケーター (NHI) は AWS Direct Connect を経由するパスのみをカバーしていました。今回のリリースでは、Transit Gateway のリージョン間ピアリングを経由して別のリージョンの宛先に到達するパスまで拡張されました。これらのパスについて、インジケーターは Transit Gateway ピアリング接続までの AWS ネットワークパスのヘルスを反映し、Amazon CloudWatch アカウントに公開されるため、ダッシュボードの構築とアラームの設定が可能になります。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/cloudwatch-network-monitoring-tgw-support)