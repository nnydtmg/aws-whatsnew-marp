# Amazon Bedrock でリクエストレベルの使用状況追跡機能が利用可能に

Amazon Bedrock expands support for request-level usage attribution

**カテゴリ:** What's New
**公開日:** 2026-05-20
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-bedrock-request-level-usage-attribution/)

このページでは、AWS What's Newで発表された「Amazon Bedrock expands support for request-level usage attribution」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Bedrockは、InvokeModelおよびInvokeModelWithResponseStream APIにおいてリクエストレベルでの使用状況属性付けをサポートし、顧客がチーム、アプリケーション、環境ごとに推論使用状況を詳細に追跡・分析できるようになりました。この機能により、組織全体の使用パターンの可視化、支出の最適化、および内部ステークホルダーへの使用状況報告が効率的に実現できます。

## このアップデートで何が変わったか

- Amazon Bedrockは、InvokeModelおよびInvokeModelWithResponseStream APIにおいて、リクエストレベルでの使用状況属性付けの機能を拡張しました。
- この機能により、顧客は特定のチーム、アプリケーション、環境、および実験に対して、モデル推論の使用状況を個別のリクエストレベルで属性付けすることができます。
- 組織全体におけるAmazon Bedrockの使用状況の分布を詳細に可視化し、消費パターンの理解、支出の最適化、および内部ステークホルダーへの使用状況報告が可能になります。
- この機能は、既存のリソースレベルおよびIAMプリンシパルレベルの属性付け機能に加えて、ConverseおよびConverseStream APIで既にサポートされているリクエストレベルのメタデータ機能と同等の機能をInvokeModel APIにもたらします。
- 顧客は、チーム、プロジェクト、環境などの属性を使用して各Amazon Bedrockモデル推論呼び出しにタグを付け、Amazon Bedrockモデル呼び出しログでこれらのタグによる使用状況を分析することができます。

## 詳細

- Amazon Bedrockは、InvokeModelおよびInvokeModelWithResponseStream APIにおいて、リクエストレベルでの使用状況属性付けの機能を拡張しました。
- この機能により、顧客は特定のチーム、アプリケーション、環境、および実験に対して、モデル推論の使用状況を個別のリクエストレベルで属性付けすることができます。
- 組織全体におけるAmazon Bedrockの使用状況の分布を詳細に可視化し、消費パターンの理解、支出の最適化、および内部ステークホルダーへの使用状況報告が可能になります。
- この機能は、既存のリソースレベルおよびIAMプリンシパルレベルの属性付け機能に加えて、ConverseおよびConverseStream APIで既にサポートされているリクエストレベルのメタデータ機能と同等の機能をInvokeModel APIにもたらします。
- 顧客は、チーム、プロジェクト、環境などの属性を使用して各Amazon Bedrockモデル推論呼び出しにタグを付け、Amazon Bedrockモデル呼び出しログでこれらのタグによる使用状況を分析することができます。
- この機能を利用するには、Amazon Bedrockを呼び出すAWSリージョンでモデル呼び出しログを有効にし、推論リクエストにメタデータを追加する必要があります。
- この機能は、Amazon Bedrockが利用可能なすべてのAWSコマーシャルリージョンで提供されています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-bedrock-request-level-usage-attribution/)