---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch で Accelerated Compute Insights が利用可能に

Announcing Accelerated Compute Insights for Amazon CloudWatch

**What's New** | 2026-11-10T08:00:00

---

## 概要

- Amazon CloudWatchにAccelerated Compute Insightsが追加され、Amazon EKS上のセルフホスト型AI推論ワークロードの監視が可能になりました。
- 本機能はプラットフォームチームおよびAIチームのコスト最適化とトラブルシューティングに役立ちます。

---

## 前提・背景

### これまでの課題

Amazon CloudWatchのAccelerated Compute Insightsは、Amazon EKSクラスター上で稼働するセルフホスト型AI推論ワークロード向けの監視およびオブザーバビリティを提供します。推論スタック全体からテレメトリを収集し、アイドル状態のアクセラレーターの特定やコスト削減、高いTTFT（Time to First Token）などの推論問題のトラブルシューティングを支援します。Amazon CloudWatch Observabilityアドオンを有効にすると

---

### 関連する最近の動向

- **Expensive accelerators, no workload-level visibility: Introducing Amazon CloudWatch accelerated compute insight...

---

## 変更内容・新機能

Amazon CloudWatchのAccelerated Compute Insightsは、Amazon EKSクラスター上で稼働するセルフホスト型AI推論ワークロード向けの監視およびオブザーバビリティを提供します。推論スタック全体からテレメトリを収集し、アイドル状態のアクセラレーターの特定やコスト削減、高いTTFT（Time to First Token）などの推論問題のトラブルシューティングを支援します。Amazon CloudWatch Observabilityアドオンを有効にすると、クラスター内のNVIDIA GPUを自動検出し、フリートレベルから個別ワークロード・アクセラレーターまで監視できます。アイドル・低利用のワークロードの特定や、推論ワークロードごとの推定コスト/トークンも確認できます。CloudWatch Omniではエージェンティックな質問経験も利用可能です。追加料金はなく、収集したテレメトリには標準のCloudWatch価格が適用されます。

---

## 効果・メリット

- Amazon CloudWatchのAccelerated Compute Insightsは、Amazon EKSクラスター上で稼働するセルフホスト型AI推論ワークロード向けの監視およびオブザーバビリティを提供します。
- 推論スタック全体からテレメトリを収集し、アイドル状態のアクセラレーターの特定やコスト削減、高いTTFT（Time to First Token）などの推論問題のトラブルシューティングを支援します。
- Amazon CloudWatch Observabilityアドオンを有効にすると、クラスター内のNVIDIA GPUを自動検出し、フリートレベルから個別ワークロード・アクセラレーターまで監視できます。
- アイドル・低利用のワークロードの特定や、推論ワークロードごとの推定コスト/トークンも確認できます。
- CloudWatch Omniではエージェンティックな

---

## まとめ

- Announcing Accelerated Compute Insights for Amazon CloudWatch について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/accelerated-compute-insights-cloudwatch/)

### 関連情報

- [Expensive accelerators, no workload-level visibility: Introducing Amazon CloudWatch accelerated compute insights - The New Stack](https://thenewstack.io/cloudwatch-accelerated-compute-insights)
- [Accelerated Compute Insights - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Accelerated-Compute-Insights.html)
- [Get started with Accelerated Compute Insights - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Accelerated-Compute-Insights-Get-Started.html)
- [AI Inference Insights - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/omni-ai-inference-insights.html)
- [Announcing Accelerated Compute Insights for Amazon CloudWatch](https://aws.amazon.com/about-aws/whats-new/2026/11/accelerated-compute-insights-cloudwatch/)