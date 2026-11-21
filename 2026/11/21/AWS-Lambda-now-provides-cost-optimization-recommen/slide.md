---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS LambdaがEvent Functions向けコスト最適化レコメンデーションを提供

AWS Lambda now provides cost optimization recommendations for Event Functions

**What's New** | 2026-11-20T19:00:00

---

## 概要

- AWS LambdaはTrusted Advisorでイベント関数のLMI移行によるコスト最適化レコメンデーションを提供するようになりました。
- 対象サポートプランをお持ちのお客様は、推奨設定により高ボリューム関数のコスト削減を迅速に実現できます。

---

## 前提・背景

### 関連する最近の動向

- **AWS Lambda Pricing (2026): Rates, Free Tier & Examples**
  [詳細](https://www.usage.ai/blogs/aws/lambda-pricing)

- **Cost optimization - AWS Support**
  [詳細](https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html)

- **The Ultimate AWS Cost Optimization Checklist for 2026**
  [詳細](https://builder.aws.com/content/3KKL67xEvtq9V4evV2fQYqkuaB9/the-ultimate-a...

---

## 変更内容・新機能

-新機能は、AWS Trusted Advisorにおけるイベント関数向けのコスト最適化レコメンデーションでございます。
-オンデマンド関数のうちLMIへの移行でコスト削減が見込まれるものを特定し、設定ガイダンスを提供いたします。
-Lambdaは高ボリュームのイベント関数の呼び出しパターン、実行時間、リソース使用率を自動分析いたします。
-各推奨には関数ARN、推奨EC2インスタンスタイプとメモリ対vCPU比率、推定コストおよび削減額が含まれます。
-本機能は米国東部（バージニア北部）、米国西部（オレゴン）、欧州（アイルランド）、欧州（ミラノ）でご利用いただけます。
-本更新はLambdaコストを削減したいお客様にとって有益でございます。
-手動分析の負担なくLMIの適合性を判断したい高ボリューム関数の利用者に適しております。
-対象のAWSサポートプランをお持ちのお客様がTrusted Advisorコンソールでご利用いただけます。

---

## 効果・メリット

- -新機能は、AWS Trusted Advisorにおけるイベント関数向けのコスト最適化レコメンデーションでございます。
- -オンデマンド関数のうちLMIへの移行でコスト削減が見込まれるものを特定し、設定ガイダンスを提供いたします。
- -Lambdaは高ボリュームのイベント関数の呼び出しパターン、実行時間、リソース使用率を自動分析いたします。

---

## まとめ

- AWS Lambda now provides cost optimization recommendations for Event Functions について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-cost-optimization-recommendations/)

### 関連情報

- [AWS Lambda Pricing (2026): Rates, Free Tier & Examples](https://www.usage.ai/blogs/aws/lambda-pricing)
- [Cost optimization - AWS Support](https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html)
- [The Ultimate AWS Cost Optimization Checklist for 2026](https://builder.aws.com/content/3KKL67xEvtq9V4evV2fQYqkuaB9/the-ultimate-aws-cost-optimization-checklist-for-2026)
- [How to Use Trusted Advisor for Cost Optimization Recommendations](https://oneuptime.com/blog/post/2026-02-12-use-trusted-advisor-for-cost-optimization-recommendations/view)
- [AWS Lambda now supports scale to and from zero for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-managed-instances-scale-to-zero)