---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon VPC、Transit Gateway、Cloud WANがクロスリージョン通信で99.999% SLAを提供

Amazon VPC, AWS Transit Gateway, and AWS Cloud WAN now offer a 99.999% availability SLA for cross-Region traffic

**What's New** | 2026-11-17T16:00:00

---

## 概要

- AWSはクロスリージョン通信向けにMultipath Resilienceを導入し、99.999%の可用性SLAを提供します。
- ミッションクリティカルなアプリケーションを運用されるお客様に適しています。

---

## 前提・背景

### これまでの課題

背景: AWSバックボーンは物理的に多様なファイバーパスでリージョン間を接続し、パス障害時はサブ秒で自動再ルーティングします。しかし部分的な劣化など稀なケースでは復旧に数分かかる場合があり、決済処理、金融取引、電話、ライブメディアストリーミングなどは数秒から数分の中断を許容できません。

---

### 関連する最近の動向

- **Amazon VPC, AWS Transit Gateway, and AWS Cloud WAN now offer a 99.999% availability SLA for cross-Region traffic**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-tgw-cloudwan-99999-sla/)

- **AWS Cloud W...

---

## 変更内容・新機能

Multipath Resilienceという新機能により、各パケットのコピーを物理的に多様なパスへ送信し、最初に到達したコピーを使用します。アプリケーションコードやOSの変更は不要です。

新機能: クロスリージョンVPCピアリング、クロスリージョンTransit Gatewayピアリングアタッチメント、Cloud WANのクロスリージョン通信でMultipath Resilienceを有効化すると、ネットワークが各パケットのコピーを物理的に多様なパスへ送信し、宛先リージョンのリソースに最初に到達したコピーを配信し、重複は破棄します。1つのパスでパケットがドロップされても、別パスでコピーが既に転送中のため、ネットワークプロトコルの再ルーティングを待たずに接続を維持できます。

---

## 効果・メリット

- メリット: アプリケーションは単一接続のまま利用可能、コードやOS変更不要、データのリージョン内複製が不要、ネットワーク側で耐障害性を担うため運用複雑度を削減

---

## ユースケース

ユースケース: 決済処理、金融取引、電話、ライブメディアストリーミングなどのミッションクリティカルアプリ

---

## まとめ

- Amazon VPC, AWS Transit Gateway, and AWS Cloud WAN now offer a 99.999% availability SLA for cross-Region traffic について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-tgw-cloudwan-99999-sla/)

### 関連情報

- [Amazon VPC, AWS Transit Gateway, and AWS Cloud WAN now offer a 99.999% availability SLA for cross-Region traffic](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-tgw-cloudwan-99999-sla/)
- [AWS Cloud WAN and AWS Transit Gateway comparison](https://aws.amazon.com/compare/cloud-wan-and-transit-gateway)