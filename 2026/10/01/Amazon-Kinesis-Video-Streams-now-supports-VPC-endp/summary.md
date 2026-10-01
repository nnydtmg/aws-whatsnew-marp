# Amazon Kinesis Video StreamsがAWS PrivateLinkによるVPCエンドポイントをサポート

Amazon Kinesis Video Streams now supports VPC endpoints with AWS PrivateLink

**カテゴリ:** What's New
**公開日:** 2026-09-30T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis-video-streams-vpc-privatelink/)

このページでは、AWS What's Newで発表された「Amazon Kinesis Video Streams now supports VPC endpoints with AWS PrivateLink」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Kinesis Video StreamsがAWS PrivateLinkによるVPCエンドポイントを新たにサポートしました。プライベート接続でビデオの取り込みと再生が可能となり、セキュリティ要件の厳しいお客様に適しています。コントロールプレーンおよびビデオ取り込み・再生のデータプレーンのトラフィックがAWSネットワーク内に留まり、パブリックインターネットに公開されません。

## このアップデートで何が変わったか

利用可能リージョン: Kinesis Video Streamsが利用可能なすべてのリージョン（AWS GovCloud (US)、中国（北京）を含む）。東京リージョン（ap-northeast-1）も含まれる。

## 対象ユーザー

Amazon Kinesis Video StreamsがAWS PrivateLinkを利用したインターフェースVPCエンドポイントをサポートするようになりました。お客様のVPCとKinesis Video Streams間のトラフィックはAWSネットワーク内に留まり、パブリックインターネットに公開されません。コントロールプレーンとビデオ取り込み・再生のデータプレーンの両方が対象です。

## 詳細

Amazon Kinesis Video StreamsがAWS PrivateLinkを利用したインターフェースVPCエンドポイントをサポートするようになりました。お客様のVPCとKinesis Video Streams間のトラフィックはAWSネットワーク内に留まり、パブリックインターネットに公開されません。コントロールプレーンとビデオ取り込み・再生のデータプレーンの両方が対象です。

対応API: コントロールプレーンのKinesis Video Streams API、データプレーンのPutMedia/GetMedia、アーカイブメディアAPIのGetMediaForFragmentList等。WebRTCコンポーネント（signaling, STUN, TURN, media, control plane）は非対応。

厳格なセキュリティ、コンプライアンス、ネットワーク分離の要件を持つお客様は、インターネットゲートウェイ、NATデバイス、パブリックIPアドレスなしでビデオの取り込み・保存・再生が可能。例: プライベートサブネット上の接続カメラやIoTビデオワークロード。

作成方法: Amazon VPCコンソール、AWS CLI、AWS SDKからエンドポイントを作成し、VPCエンドポイントポリシーでアクセス制御が可能。サービス名: com.amazonaws.region.kinesisvideo。Private DNSの有効化が必須。

クオータ: VPCエンドポイント経由のリクエストレートはアカウント・エンドポイントあたり500リクエスト/秒。

利用可能リージョン: Kinesis Video Streamsが利用可能なすべてのリージョン（AWS GovCloud (US)、中国（北京）を含む）。東京リージョン（ap-northeast-1）も含まれる。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis-video-streams-vpc-privatelink/)