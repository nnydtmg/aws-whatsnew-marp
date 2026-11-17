# Amazon VPC、Transit Gateway、Cloud WANがクロスリージョン通信で99.999% SLAを提供

Amazon VPC, AWS Transit Gateway, and AWS Cloud WAN now offer a 99.999% availability SLA for cross-Region traffic

**カテゴリ:** What's New
**公開日:** 2026-11-17T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-tgw-cloudwan-99999-sla/)

このページでは、AWS What's Newで発表された「Amazon VPC, AWS Transit Gateway, and AWS Cloud WAN now offer a 99.999% availability SLA for cross-Region traffic」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWSはクロスリージョン通信向けにMultipath Resilienceを導入し、99.999%の可用性SLAを提供します。ミッションクリティカルなアプリケーションを運用されるお客様に適しています。

## このアップデートで何が変わったか

Multipath Resilienceという新機能により、各パケットのコピーを物理的に多様なパスへ送信し、最初に到達したコピーを使用します。アプリケーションコードやOSの変更は不要です。

## 対象ユーザー

AWSはクロスリージョン通信向けにMultipath Resilienceを導入し、99.999%の可用性SLAを提供します。ミッションクリティカルなアプリケーションを運用されるお客様に適しています。

## 活用シーン

ユースケース: 決済処理、金融取引、電話、ライブメディアストリーミング

## 詳細

Amazon VPC、AWS Transit Gateway、AWS Cloud WANのクロスリージョン通信に対し99.999%の可用性SLAが新たに提供されるようになりました。

Multipath Resilienceという新機能により、各パケットのコピーを物理的に多様なパスへ送信し、最初に到達したコピーを使用します。アプリケーションコードやOSの変更は不要です。

背景: AWSバックボーンは物理的に多様なファイバーパスでリージョン間を接続し、パス障害時はサブ秒で自動再ルーティングします。しかし部分的な劣化など稀なケースでは復旧に数分かかる場合があり、決済処理、金融取引、電話、ライブメディアストリーミングなどは数秒から数分の中断を許容できません。

従来の課題: お客様はアプリケーションやOSを変更して単一接続を複数接続に分割したり、データを全リージョンに複製してクロスリージョン呼び出しを避けるなどの回避策が必要でした。

対応サービス: Amazon VPCクロスリージョンピアリング、AWS Transit Gatewayクロスリージョンピアリングアタッチメント、AWS Cloud WANのクロスリージョン通信

提供リージョン: 米国東部（バージニア北部）、米国東部（オハイオ）、米国西部（北カリフォルニア）、米国西部（オレゴン）、欧州（アイルランド）

ユースケース: 決済処理、金融取引、電話、ライブメディアストリーミング

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/vpc-tgw-cloudwan-99999-sla/)