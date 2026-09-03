# AWS Gateway Load Balancer が TCP リセット機能をサポート、障害回復を高速化

AWS Gateway Load Balancer now supports TCP Reset for faster failure recovery

**カテゴリ:** What's New
**公開日:** 2026-09-03T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-gateway-load-balancer-tcp-reset/)

このページでは、AWS What's Newで発表された「AWS Gateway Load Balancer now supports TCP Reset for faster failure recovery」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Gateway Load Balancerの新機能により、TCPリセットパケットを送信して障害回復を迅速化します。この機能はデフォルトでは無効であり、ターゲットグループごとに有効化できます。

## このアップデートで何が変わったか

AWS Gateway Load Balancerは、ターゲットが異常になった場合、登録解除された場合、またはフローのアイドルタイムアウトが期限切れになった場合にTCPリセットパケットを送信する機能をサポートします。この機能は、トラフィックの中断を数分から数秒に短縮するのに役立ちます。この更新は、TCPエンドポイントが失敗した接続を迅速に検出し新しいフローを確立することを望むユーザーに適しています。

## 対象ユーザー

AWS Gateway Load Balancerは、ターゲットが異常になった場合、登録解除された場合、またはフローのアイドルタイムアウトが期限切れになった場合にTCPリセットパケットを送信する機能をサポートします。この機能は、トラフィックの中断を数分から数秒に短縮するのに役立ちます。この更新は、TCPエンドポイントが失敗した接続を迅速に検出し新しいフローを確立することを望むユーザーに適しています。

## 詳細

AWS Gateway Load Balancerは、ターゲットが異常になった場合、登録解除された場合、またはフローのアイドルタイムアウトが期限切れになった場合にTCPリセットパケットを送信する機能をサポートします。この機能は、トラフィックの中断を数分から数秒に短縮するのに役立ちます。この更新は、TCPエンドポイントが失敗した接続を迅速に検出し新しいフローを確立することを望むユーザーに適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-gateway-load-balancer-tcp-reset/)