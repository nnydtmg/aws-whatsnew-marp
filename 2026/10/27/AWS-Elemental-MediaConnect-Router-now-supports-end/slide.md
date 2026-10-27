---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Elemental MediaConnect Routerがエンドポイント接続管理をサポート

AWS Elemental MediaConnect Router now supports endpoint connection management

**What's New** | 2026-10-26T08:00:00

---

## 概要

- AWS Elemental MediaConnect Routerにエンドポイントレジストリが追加され、外部接続の集中管理とクロスアカウント共有が可能になりました。
- 本機能はコンテンツ配信事業者や放送事業者など、セキュアなライブ映像の共有を必要とするお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS Elemental MediaConnect Router now supports endpoint connection management - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/mediaconnect-cross-account-endpoints/)

- **AWS Elemental MediaConnect Router - Amazon Web Services**
  [詳細](https://aws.amazon.com/mediaconnect/features/router)

- **Using the MediaConnect router - AWS Elemental MediaConnect**
  [詳細](ht...

---

## 変更内容・新機能

- 新機能は、AWS Elemental MediaConnect Routerにおけるエンドポイントレジストリによる外部接続管理です。
- 本レジストリは、カメラやモニターなどの標準エンドポイントと他のAWSアカウントへの接続を集中的に登録・管理するインターフェースを提供いたします。
- 登録済みエンドポイントを他のAWSアカウントと直接共有でき、クロスアカウントのライブ映像ワークフローを効率化いたします。
- コンピュートインスタンスの削減によるコスト低減、ネットワークホップ減少による低遅延化、手動での接続チェーンやIP調整が不要になる点が特徴です。
- AWS RAMによる共有、暗号化とプロトコル制御の検証、Connection Managerによる接続管理をご利用いただけます。
- 本アップデートは、ライブフィードをパートナーと共有するコンテンツ配信事業者に適しております。
- 組織を越えて協力する放送事業者や、セキュアなクロスアカウント映像転送を必要とするメディアワークフローにも適しております。
- MediaConnect Routerが利用可能なすべてのAWSリージョンで

---

## 効果・メリット

- - 新機能は、AWS Elemental MediaConnect Routerにおけるエンドポイントレジストリによる外部接続管理です。
- - 本レジストリは、カメラやモニターなどの標準エンドポイントと他のAWSアカウントへの接続を集中的に登録・管理するインターフェースを提供いたします。
- - 登録済みエンドポイントを他のAWSアカウントと直接共有でき、クロスアカウントのライブ映像ワークフローを効率化いたします。

---

## ユースケース

AWS Elemental MediaConnect Router now supports managing external connections through a new endpoint registry. The registry provides a centralized interface to register and manage both standard endpoints—devices or software outside the service, such as cameras, sources, monitors, and other destinatio

---

## まとめ

- AWS Elemental MediaConnect Router now supports endpoint connection management について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/mediaconnect-cross-account-endpoints/)

### 関連情報

- [AWS Elemental MediaConnect Router now supports endpoint connection management - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/mediaconnect-cross-account-endpoints/)
- [AWS Elemental MediaConnect Router - Amazon Web Services](https://aws.amazon.com/mediaconnect/features/router)
- [Using the MediaConnect router - AWS Elemental MediaConnect](https://docs.aws.amazon.com/mediaconnect/latest/ug/using-mediaconnect-router.html)
- [Video Transport – AWS Elemental MediaConnect – Amazon Web Services](https://aws.amazon.com/mediaconnect)