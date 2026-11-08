---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Elemental MediaConvertがSmart Subtitlesとのネイティブ統合を発表

AWS Elemental MediaConvert adds a native integration with AWS Elemental Inference Smart Subtitles

**What's New** | 2026-11-06T08:00:00

---

## 概要

- AWS Elemental MediaConvertにSmart Subtitlesが統合され、6言語の自動字幕生成をVODワークフロー内で実施できるようになりました。
- 本機能は、トランスコーディングと字幕作成を一元管理したいお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS Elemental MediaConvert adds a native integration with AWS Elemental Inference Smart Subtitles - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/mediaconvert-elemental-smart-subtitles)

- **AWS Elemental Inference — Features, Integration, and Use Cases**
  [詳細](https://repost.aws/articles/AR9Xw3H8cgQoOwFRj24ZOIIw/aws-elemental-inference-features-integration-an...

---

## 変更内容・新機能

AWS Elemental MediaConvertにネイティブ統合されたAI字幕ソリューション「Smart Subtitles」が追加されました。AWS Elemental Inferenceと最新の音声認識モデルを活用し、VODトランスコーディングおよびパッケージングワークフローへ自動字幕生成を直接組み込みます。音声を英語、フランス語、ドイツ語、イタリア語、ポルトガル語、スペイン語の6言語で自動的に字幕へ変換します。テキストベースのサイドカー形式および焼き込み出力に対応し、HLSやDASHなどの配信用フォーマットでパッケージできます。カスタム辞書により、固有名詞、ブランド名、専門用語などの認識精度を向上できます。Smart Croppingとの併用も可能で、端末のメディアパイプラインを構築できます。対象はトランスコーディングと字幕作成を単一の統合ワークフローで管理したいお客様、外部キャプションパイプラインを不要としたいお客様です。利用可能リージョンはUS East (N. Virginia)、US West (Oregon)、Europe (Ireland)、Asia Pacifi

---

## 効果・メリット

- AWS Elemental MediaConvertにネイティブ統合されたAI字幕ソリューション「Smart Subtitles」が追加されました。
- AWS Elemental Inferenceと最新の音声認識モデルを活用し、VODトランスコーディングおよびパッケージングワークフローへ自動字幕生成を直接組み込みます。
- 音声を英語、フランス語、ドイツ語、イタリア語、ポルトガル語、スペイン語の6言語で自動的に字幕へ変換します。
- テキストベースのサイドカー形式および焼き込み出力に対応し、HLSやDASHなどの配信用フォーマットでパッケージできます。
- カスタム辞書により、固有名詞、ブランド名、専門用語などの認識精度を向上できます。

---

## ユースケース

AWS Elemental MediaConvertにネイティブ統合されたAI字幕ソリューション「Smart Subtitles」が追加されました。AWS Elemental Inferenceと最新の音声認識モデルを活用し、VODトランスコーディングおよびパッケージングワークフローへ自動字幕生成を直接組み込みます。音声を英語、フランス語、ドイツ語、イタリア語、ポルトガル語、スペイン語の6言語で自動的に字幕へ変換します。テキストベースのサイドカー形式および焼き込み出力に対応し、HLSやDASHなどの配信用フォーマットでパッケージできます。カスタム辞書により、固有名詞、ブランド名、専門用語などの

---

## まとめ

- AWS Elemental MediaConvert adds a native integration with AWS Elemental Inference Smart Subtitles について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/mediaconvert-elemental-smart-subtitles/)

### 関連情報

- [AWS Elemental MediaConvert adds a native integration with AWS Elemental Inference Smart Subtitles - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/mediaconvert-elemental-smart-subtitles)
- [AWS Elemental Inference — Features, Integration, and Use Cases](https://repost.aws/articles/AR9Xw3H8cgQoOwFRj24ZOIIw/aws-elemental-inference-features-integration-and-use-cases)
- [AWS Elemental Inference now supports Smart Subtitles for automated live captioning](https://aws.amazon.com/about-aws/whats-new/2026/05/elemental-inference-subtitles)
- [Generate live subtitles with AWS Elemental Inference Smart Subtitles](https://aws.amazon.com/blogs/media/generate-live-subtitles-with-aws-elemental-inference-smart-subtitles)
- [Smart Subtitles using Elemental Inference - MediaLive](https://docs.aws.amazon.com/medialive/latest/ug/elemental-inference-automatic-subtitling.html)