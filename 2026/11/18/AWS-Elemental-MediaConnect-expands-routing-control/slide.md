---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Elemental MediaConnectがRTMP対応とルーティング制御を拡充

AWS Elemental MediaConnect expands routing control and protocol support

**What's New** | 2026-11-17T08:00:00

---

## 概要

- AWS Elemental MediaConnectは、RTMP、RTMPS、eRTMPのプロトコル対応とPIDリマッピング、クリーンスイッチ、SRTマージ入力モードを追加いたしました。
- 本アップデートは、ライブ動画ワークフローやOBS利用者、耐障害性を必要とするお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Cloud Routing for Broadcast Video Workflows: An Introduction to AWS Elemental MediaConnect Router | AWS Builder Center**
  [詳細](https://builder.aws.com/content/3Gp11HZn3asCAFWkbMFMJNIlz6H/cloud-routing-for-broadcast-video-workflows-an-introduction-to-aws-elemental-mediaconnect-router)

- **AWS Elemental MediaConnect: Flows vs Router vs Gateway**
  [詳細](https://repost.aws/article...

---

## 変更内容・新機能

- AWS Elemental MediaConnectは、ライブ動画ワークフロー向けのプロトコルサポートとルーティング制御を拡充いたしました。
- フローおよびルーターの両方で、RTMP、RTMPS、eRTMPを新たにサポートいたします。
- RTMPソースの取り込みと、ソーシャルおよびライブストリーミングプラットフォームへのRTMP配信が可能となりました。
- PIDリマッピングは、トランスコーディングなしでトランスポートストリームのPIDをインライン再割り当ていたします。
- クリーンスイッチは、映像境界で入力遷移を揃え、シームレスな切り替えを実現いたします。
- SRTマージ入力モードは、冗長なSRTストリームを結合し、パス劣化時にクリーンなフィードを再構築いたします。
- これらの機能は、MediaConnect Routerが利用可能なすべてのAWSリージョンでご利用いただけます。
- 本アップデートは、OBSなどのライブストリーミングエンコーダーをご利用のお客様に適しております。
- 損失の多い回線や長距離コントリビューションで耐障害性を求めるお客様にも有益でございます。

---

## まとめ

- AWS Elemental MediaConnect expands routing control and protocol support について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/rtmp-support-aws-elemental-mediaconnect/)

### 関連情報

- [Cloud Routing for Broadcast Video Workflows: An Introduction to AWS Elemental MediaConnect Router | AWS Builder Center](https://builder.aws.com/content/3Gp11HZn3asCAFWkbMFMJNIlz6H/cloud-routing-for-broadcast-video-workflows-an-introduction-to-aws-elemental-mediaconnect-router)
- [AWS Elemental MediaConnect: Flows vs Router vs Gateway](https://repost.aws/articles/ARdEOKktO9SwybW7ZEecJk0Q/aws-elemental-media-connect-flows-vs-router-vs-gateway-a-service-comparison-guide)
- [Protocols in MediaConnect - AWS Elemental MediaConnect](https://docs.aws.amazon.com/mediaconnect/latest/ug/protocols.html)
- [Troubleshooting SRT and Zixi with AWS Elemental MediaConnect](https://aws.amazon.com/blogs/media/troubleshooting-srt-and-zixi-with-aws-elemental-mediaconnect)