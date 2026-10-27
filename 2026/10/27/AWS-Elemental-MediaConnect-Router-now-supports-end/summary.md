# AWS Elemental MediaConnect Routerがエンドポイント接続管理をサポート

AWS Elemental MediaConnect Router now supports endpoint connection management

**カテゴリ:** What's New
**公開日:** 2026-10-26T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/mediaconnect-cross-account-endpoints/)

このページでは、AWS What's Newで発表された「AWS Elemental MediaConnect Router now supports endpoint connection management」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Elemental MediaConnect Routerにエンドポイントレジストリが追加され、外部接続の集中管理とクロスアカウント共有が可能になりました。本機能はコンテンツ配信事業者や放送事業者など、セキュアなライブ映像の共有を必要とするお客様に適しております。

## このアップデートで何が変わったか

- 新機能は、AWS Elemental MediaConnect Routerにおけるエンドポイントレジストリによる外部接続管理です。
- 本レジストリは、カメラやモニターなどの標準エンドポイントと他のAWSアカウントへの接続を集中的に登録・管理するインターフェースを提供いたします。
- 登録済みエンドポイントを他のAWSアカウントと直接共有でき、クロスアカウントのライブ映像ワークフローを効率化いたします。
- コンピュートインスタンスの削減によるコスト低減、ネットワークホップ減少による低遅延化、手動での接続チェーンやIP調整が不要になる点が特徴です。
- AWS RAMによる共有、暗号化とプロトコル制御の検証、Connection Managerによる接続管理をご利用いただけます。
- 本アップデートは、ライブフィードをパートナーと共有するコンテンツ配信事業者に適しております。
- 組織を越えて協力する放送事業者や、セキュアなクロスアカウント映像転送を必要とするメディアワークフローにも適しております。
- MediaConnect Routerが利用可能なすべてのAWSリージョンで

## 対象ユーザー

Cross-account endpoint sharing lowers costs by reducing required compute instances and decreases latency through fewer network hops when sharing live content across AWS accounts. It also eliminates the need to manually chain router inputs and outputs, coordinate IP addresses out of band, and manage 

## 活用シーン

AWS Elemental MediaConnect Router now supports managing external connections through a new endpoint registry. The registry provides a centralized interface to register and manage both standard endpoints—devices or software outside the service, such as cameras, sources, monitors, and other destinatio

## 詳細

AWS Elemental MediaConnect Router now supports managing external connections through a new endpoint registry. The registry provides a centralized interface to register and manage both standard endpoints—devices or software outside the service, such as cameras, sources, monitors, and other destinations—and connections to other AWS accounts. You can share registered endpoints directly with other AWS accounts, streamlining cross-account live video workflows.

Cross-account endpoint sharing lowers costs by reducing required compute instances and decreases latency through fewer network hops when sharing live content across AWS accounts. It also eliminates the need to manually chain router inputs and outputs, coordinate IP addresses out of band, and manage connection security. The endpoint registry gives you a single interface to manage all external connections to MediaConnect for seamless integration with your existing infrastructure. You get cross-account sharing through AWS Resource Access Manager (AWS RAM), transparent verification of encryption and protocol controls, and built-in connection management with Connection Manager. Use cases include content distributors sharing live feeds with downstream partners, broadcasters collaborating across organizational boundaries, and media workflows that require secure cross-account video transport.

MediaConnect endpoint registry is available in all AWS Regions where AWS Elemental MediaConnect Router is available, at no additional cost.

- 新機能は、AWS Elemental MediaConnect Routerにおけるエンドポイントレジストリによる外部接続管理です。
- 本レジストリは、カメラやモニターなどの標準エンドポイントと他のAWSアカウントへの接続を集中的に登録・管理するインターフェースを提供いたします。
- 登録済みエンドポイントを他のAWSアカウントと直接共有でき、クロスアカウントのライブ映像ワークフローを効率化いたします。
- コンピュートインスタンスの削減によるコスト低減、ネットワークホップ減少による低遅延化、手動での接続チェーンやIP調整が不要になる点が特徴です。
- AWS RAMによる共有、暗号化とプロトコル制御の検証、Connection Managerによる接続管理をご利用いただけます。
- 本アップデートは、ライブフィードをパートナーと共有するコンテンツ配信事業者に適しております。
- 組織を越えて協力する放送事業者や、セキュアなクロスアカウント映像転送を必要とするメディアワークフローにも適しております。
- MediaConnect Routerが利用可能なすべてのAWSリージョンで追加コストなしで利用可能。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/mediaconnect-cross-account-endpoints/)