# Amazon CloudWatch で Accelerated Compute Insights が利用可能に

Announcing Accelerated Compute Insights for Amazon CloudWatch

**カテゴリ:** What's New
**公開日:** 2026-11-10T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/accelerated-compute-insights-cloudwatch/)

このページでは、AWS What's Newで発表された「Announcing Accelerated Compute Insights for Amazon CloudWatch」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatchにAccelerated Compute Insightsが追加され、Amazon EKS上のセルフホスト型AI推論ワークロードの監視が可能になりました。本機能はプラットフォームチームおよびAIチームのコスト最適化とトラブルシューティングに役立ちます。

## このアップデートで何が変わったか

Amazon CloudWatchのAccelerated Compute Insightsは、Amazon EKSクラスター上で稼働するセルフホスト型AI推論ワークロード向けの監視およびオブザーバビリティを提供します。推論スタック全体からテレメトリを収集し、アイドル状態のアクセラレーターの特定やコスト削減、高いTTFT（Time to First Token）などの推論問題のトラブルシューティングを支援します。Amazon CloudWatch Observabilityアドオンを有効にすると、クラスター内のNVIDIA GPUを自動検出し、フリートレベルから個別ワークロード・アクセラレーターまで監視できます。アイドル・低利用のワークロードの特定や、推論ワークロードごとの推定コスト/トークンも確認できます。CloudWatch Omniではエージェンティックな質問経験も利用可能です。追加料金はなく、収集したテレメトリには標準のCloudWatch価格が適用されます。

## 対象ユーザー

Amazon CloudWatchのAccelerated Compute Insightsは、Amazon EKSクラスター上で稼働するセルフホスト型AI推論ワークロード向けの監視およびオブザーバビリティを提供します。推論スタック全体からテレメトリを収集し、アイドル状態のアクセラレーターの特定やコスト削減、高いTTFT（Time to First Token）などの推論問題のトラブルシューティングを支援します。Amazon CloudWatch Observabilityアドオンを有効にすると、クラスター内のNVIDIA GPUを自動検出し、フリートレベルから個別ワークロード・アクセラレータ

## 詳細

Amazon CloudWatchのAccelerated Compute Insightsは、Amazon EKSクラスター上で稼働するセルフホスト型AI推論ワークロード向けの監視およびオブザーバビリティを提供します。推論スタック全体からテレメトリを収集し、アイドル状態のアクセラレーターの特定やコスト削減、高いTTFT（Time to First Token）などの推論問題のトラブルシューティングを支援します。Amazon CloudWatch Observabilityアドオンを有効にすると、クラスター内のNVIDIA GPUを自動検出し、フリートレベルから個別ワークロード・アクセラレーターまで監視できます。アイドル・低利用のワークロードの特定や、推論ワークロードごとの推定コスト/トークンも確認できます。CloudWatch Omniではエージェンティックな質問経験も利用可能です。追加料金はなく、収集したテレメトリには標準のCloudWatch価格が適用されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/accelerated-compute-insights-cloudwatch/)