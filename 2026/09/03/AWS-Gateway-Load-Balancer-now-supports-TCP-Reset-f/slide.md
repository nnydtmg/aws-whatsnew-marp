---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Gateway Load Balancer が TCP リセット機能をサポート、障害回復を高速化

AWS Gateway Load Balancer now supports TCP Reset for faster failure recovery

**What's New** | 2026-09-03T17:00:00

---

## 概要

- AWS Gateway Load Balancerの新機能により、TCPリセットパケットを送信して障害回復を迅速化します。
- この機能はデフォルトでは無効であり、ターゲットグループごとに有効化できます。

---

## 前提・背景

### 関連する最近の動向

- **Reduce Traffic Interruptions with Gateway Load Balancer ...**
  [詳細](https://aws.amazon.com/blogs/networking-and-content-delivery/reduce-traffic-interruptions-with-gateway-load-balancer-tcp-reset)

- **Introducing configurable TCP idle timeout for Gateway Load Balancer**
  [詳細](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-configurable-tcp-idle-timeout-for-gateway-load-balancer)

---

## 変更内容・新機能

AWS Gateway Load Balancerは、ターゲットが異常になった場合、登録解除された場合、またはフローのアイドルタイムアウトが期限切れになった場合にTCPリセットパケットを送信する機能をサポートします。この機能は、トラフィックの中断を数分から数秒に短縮するのに役立ちます。この更新は、TCPエンドポイントが失敗した接続を迅速に検出し新しいフローを確立することを望むユーザーに適しています。

---

## 効果・メリット

- AWS Gateway Load Balancerは、ターゲットが異常になった場合、登録解除された場合、またはフローのアイドルタイムアウトが期限切れになった場合にTCPリセットパケットを送信する機能をサポートします。
- この機能は、トラフィックの中断を数分から数秒に短縮するのに役立ちます。
- この更新は、TCPエンドポイントが失敗した接続を迅速に検出し新しいフローを確立することを望むユーザーに適しています。

---

## まとめ

- AWS Gateway Load Balancer now supports TCP Reset for faster failure recovery について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-gateway-load-balancer-tcp-reset/)

### 関連情報

- [Reduce Traffic Interruptions with Gateway Load Balancer ...](https://aws.amazon.com/blogs/networking-and-content-delivery/reduce-traffic-interruptions-with-gateway-load-balancer-tcp-reset)
- [Introducing configurable TCP idle timeout for Gateway Load Balancer](https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-configurable-tcp-idle-timeout-for-gateway-load-balancer)