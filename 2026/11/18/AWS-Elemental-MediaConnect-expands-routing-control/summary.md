# AWS Elemental MediaConnectがRTMP対応とルーティング制御を拡充

AWS Elemental MediaConnect expands routing control and protocol support

**カテゴリ:** What's New
**公開日:** 2026-11-17T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/rtmp-support-aws-elemental-mediaconnect/)

このページでは、AWS What's Newで発表された「AWS Elemental MediaConnect expands routing control and protocol support」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Elemental MediaConnectは、RTMP、RTMPS、eRTMPのプロトコル対応とPIDリマッピング、クリーンスイッチ、SRTマージ入力モードを追加いたしました。本アップデートは、ライブ動画ワークフローやOBS利用者、耐障害性を必要とするお客様に適しております。

## このアップデートで何が変わったか

- AWS Elemental MediaConnectは、ライブ動画ワークフロー向けのプロトコルサポートとルーティング制御を拡充いたしました。
- フローおよびルーターの両方で、RTMP、RTMPS、eRTMPを新たにサポートいたします。
- RTMPソースの取り込みと、ソーシャルおよびライブストリーミングプラットフォームへのRTMP配信が可能となりました。
- PIDリマッピングは、トランスコーディングなしでトランスポートストリームのPIDをインライン再割り当ていたします。
- クリーンスイッチは、映像境界で入力遷移を揃え、シームレスな切り替えを実現いたします。
- SRTマージ入力モードは、冗長なSRTストリームを結合し、パス劣化時にクリーンなフィードを再構築いたします。
- これらの機能は、MediaConnect Routerが利用可能なすべてのAWSリージョンでご利用いただけます。
- 本アップデートは、OBSなどのライブストリーミングエンコーダーをご利用のお客様に適しております。
- 損失の多い回線や長距離コントリビューションで耐障害性を求めるお客様にも有益でございます。

## 対象ユーザー

- AWS Elemental MediaConnectは、ライブ動画ワークフロー向けのプロトコルサポートとルーティング制御を拡充いたしました。
- フローおよびルーターの両方で、RTMP、RTMPS、eRTMPを新たにサポートいたします。
- RTMPソースの取り込みと、ソーシャルおよびライブストリーミングプラットフォームへのRTMP配信が可能となりました。
- PIDリマッピングは、トランスコーディングなしでトランスポートストリームのPIDをインライン再割り当ていたします。
- クリーンスイッチは、映像境界で入力遷移を揃え、シームレスな切り替えを実現いたします。
- SRTマージ入力モード

## 詳細

- AWS Elemental MediaConnectは、ライブ動画ワークフロー向けのプロトコルサポートとルーティング制御を拡充いたしました。
- フローおよびルーターの両方で、RTMP、RTMPS、eRTMPを新たにサポートいたします。
- RTMPソースの取り込みと、ソーシャルおよびライブストリーミングプラットフォームへのRTMP配信が可能となりました。
- PIDリマッピングは、トランスコーディングなしでトランスポートストリームのPIDをインライン再割り当ていたします。
- クリーンスイッチは、映像境界で入力遷移を揃え、シームレスな切り替えを実現いたします。
- SRTマージ入力モードは、冗長なSRTストリームを結合し、パス劣化時にクリーンなフィードを再構築いたします。
- これらの機能は、MediaConnect Routerが利用可能なすべてのAWSリージョンでご利用いただけます。
- 本アップデートは、OBSなどのライブストリーミングエンコーダーをご利用のお客様に適しております。
- 損失の多い回線や長距離コントリビューションで耐障害性を求めるお客様にも有益でございます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/rtmp-support-aws-elemental-mediaconnect/)