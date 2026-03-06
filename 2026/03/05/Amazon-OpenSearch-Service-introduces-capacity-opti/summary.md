# Amazon OpenSearch Service introduces capacity optimized blue/green deployments

**カテゴリ:** What's New
**公開日:** 2026-03-05
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-opensearch-service-bg/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-opensearch-service-bg/)

---

## 要約

Amazon OpenSearch Serviceの新しいキャパシティ最適化ブルー/グリーンデプロイメントオプションにより、利用可能なインスタンスキャパシティが不足している場合でも、段階的なバッチ処理を通じてドメイン更新を完了できるようになりました。このオプションは、30ノード以上の大規模クラスターを運用されているお客様に特に推奨されており、すべてのOpenSearchおよびElasticsearchバージョンでご利用いただけます。

## 詳細

Amazon OpenSearch Serviceは、ブルー/グリーンデプロイメントに対して「キャパシティ最適化」オプションを新たに導入いたしました。このオプションにより、必要なインスタンスキャパシティが利用可能でない場合でも、ドメイン更新を完了できるようになりました。更新は段階的なバッチで実行されるため、デプロイメント処理中に必要な追加インスタンス数が削減されます。従来の「フルスワップ」オプションは現在の動作を維持し、最速のデプロイメントのために100%のインスタンスキャパシティを事前に必要といたします。新しい「キャパシティ最適化」オプションは、まずフルキャパシティデプロイメントを試行し、キャパシティが不足している場合は自動的にバッチデプロイメントにフォールバックいたします。このオプションはOpenSearch ServiceコンソールまたはAPIのデプロイメント構成設定から選択できます。キャパシティ最適化オプションは、30ノード以上のクラスターに推奨されております。この機能は、すべてのOpenSearchおよびElasticsearchバージョンで、OpenSearch Serviceが利用可能なすべてのAWSコマーシャルリージョンで提供されております。