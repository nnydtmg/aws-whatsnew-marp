# DeepSeek-V4-Pro、V4-Flash、V4.1-FlashがAmazon SageMaker JumpStartで利用可能に

DeepSeek-V4-Pro, DeepSeek-V4-Flash, and DeepSeek-V4.1-Flash models now available on Amazon SageMaker JumpStart

**カテゴリ:** What's New
**公開日:** 2026-11-11T23:18:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/01/deepseek-v4-pro-v4-flash-v4.1-flash-on-sagemaker-jumpstart/)

このページでは、AWS What's Newで発表された「DeepSeek-V4-Pro, DeepSeek-V4-Flash, and DeepSeek-V4.1-Flash models now available on Amazon SageMaker JumpStart」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

DeepSeek-V4-Pro、DeepSeek-V4-Flash、およびDeepSeek-V4.1-FlashモデルがAmazon SageMaker JumpStartで利用可能になりました。お客様は数クリックでこれらの基盤モデルをデプロイできるようになりました。

## このアップデートで何が変わったか

DeepSeek-V4-Pro、DeepSeek-V4-Flash、およびDeepSeek-V4.1-FlashモデルがAmazon SageMaker JumpStartで新たに利用可能になりました。これらのモデルはMITライセンスのオープンウェイトMixture-of-Experts言語モデルであり、推論、コーディング、エージェントワークロードで高性能を発揮します。DeepSeek-V4-Proは1.6TパラメータのMoEモデルで、トークンあたり49Bパラメータを活性化し、1Mトークンのコンテキストウィンドウをサポートします。長文書分析、複数ステップ推論、高品質なテキスト生成に適しています。DeepSeek-V4-Flashは284Bパラメータの効率的なMoEモデルで、トークンあたり13Bパラメータを活性化し、同様に1Mトークンコンテキストをサポートします。低レイテンシ・コスト効率の生産デプロイに適しています。DeepSeek-V4.1-FlashはCausal Encoder-Decoder (CED)アーキテクチャを採用し、552Bパラメータのバックボーンでprefill時8B

## 詳細

DeepSeek-V4-Pro、DeepSeek-V4-Flash、およびDeepSeek-V4.1-FlashモデルがAmazon SageMaker JumpStartで新たに利用可能になりました。これらのモデルはMITライセンスのオープンウェイトMixture-of-Experts言語モデルであり、推論、コーディング、エージェントワークロードで高性能を発揮します。DeepSeek-V4-Proは1.6TパラメータのMoEモデルで、トークンあたり49Bパラメータを活性化し、1Mトークンのコンテキストウィンドウをサポートします。長文書分析、複数ステップ推論、高品質なテキスト生成に適しています。DeepSeek-V4-Flashは284Bパラメータの効率的なMoEモデルで、トークンあたり13Bパラメータを活性化し、同様に1Mトークンコンテキストをサポートします。低レイテンシ・コスト効率の生産デプロイに適しています。DeepSeek-V4.1-FlashはCausal Encoder-Decoder (CED)アーキテクチャを採用し、552Bパラメータのバックボーンでprefill時8B、decode時16Bパラメータを活性化します。1Mトークンコンテキストと384K最大出力トークンをサポートし、CSA2とFP4 KVキャッシュでKVキャッシュ足跡をV4-Flashの約1/4に削減します。エージェントワークロード、コーディング、ビジョンタスクに適しています。SageMaker JumpStartのモデルカタログまたはSageMaker Python SDKで数クリックでデプロイ可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/01/deepseek-v4-pro-v4-flash-v4.1-flash-on-sagemaker-jumpstart/)