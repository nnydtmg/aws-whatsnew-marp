# Partner Revenue Measurement now supports User Agent string for certain AWS services

**カテゴリ:** What's New
**公開日:** 2026-04-03T18:55:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/04/partner-revenue-measurement-user-agent-support/](https://aws.amazon.com/about-aws/whats-new/2026/04/partner-revenue-measurement-user-agent-support/)

---

## 要約

AWSパートナーがUser Agent stringを活用することで、自社ソリューションによるAWSサービス消費量をより正確に測定し、収益への影響を把握できるようになりました。この機能は複数のAWS SDKに対応しており、自動デプロイメント環境での属性取得を実現します。

## 詳細

- Partner Revenue Measurement User Agent string機能が、2026年4月3日にAWSから一般提供開始されました。

- この機能により、AWSパートナーは自社ソリューションによるAWSサービス消費量をAWS APIおよびSDKを使用して測定できるようになりました。

- パートナーはAWSマーケットプレイスのリスティングから一意のプロダクトコードをUser Agent stringに埋め込むことで、特定のサービス全体でのAWS収益への影響を定量化できます。

- User Agent stringの形式は「APN_1.1/pc_<AWS Marketplace product-code>$」です。

- パートナーはSDK内の環境変数設定またはAWS共有設定ファイルでの設定により、すべてのAWSサービスコールに自動的にUser Agent stringを適用できます。

- Python、Node.js、Java、Kotlinなど複数のAWS SDKにおいて、自動デプロイメント全体でのAPI駆動型ワークロードの属性を取得できます。

- Partner Revenue Measurementは、Resource TaggingおよびAWSマーケットプレイスメータリング統合機能を補完します。

- この機能は全ての商用リージョンで一般提供されています。