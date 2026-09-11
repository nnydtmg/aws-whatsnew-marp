---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock Knowledge BaseがTwelveLabs Marengo 3.0のマルチモーダル埋め込みに対応

Amazon Bedrock Managed Knowledge Base now supports multimodal embeddings for video, audio, and image content with TwelveLabs Marengo 3.0

**What's New** | 2026-09-11T15:13:00

---

## 概要

- Amazon BedrockマネージドナレッジベースがTwelveLabs Marengo 3.0によるマルチモーダル埋め込みに対応し、動画・音声・画像を自然言語で検索できるようになりました。
- スポーツ分析や教育など、メディアコンテンツを扱うお客様に適した機能です。

---

## 前提・背景

### 関連する最近の動向

- **TwelveLabs Marengo Becomes First Video Model in Amazon Bedrock Managed Knowledge Base**
  [詳細](https://finance.yahoo.com/technology/ai/articles/twelvelabs-marengo-becomes-first-video-130000866.html)

- **Marengo in Amazon Bedrock Knowledge Base | TwelveLabs**
  [詳細](https://www.twelvelabs.io/blog/marengo-amazon-bedrock-managed-knowledge-base)

- **Video and image search in Amazo...

---

## 変更内容・新機能

Amazon Bedrockマネージドナレッジベースが、TwelveLabs Marengo 3.0による動画、音声、画像コンテンツ向けのマルチモーダル埋め込みを新たにサポート。視覚的なシーンや音声、動画の手がかりを直接埋め込みにエンコードし、文字起こしだけでは捉えられない意味をキャプチャできる。Amazon S3からメディアをアップロードして同期するだけで、インフラ管理なしに自然言語で検索可能。512次元のコンパクトなベクトルとセグメントの開始・終了時刻により、高精度な検索と該当箇所への直接ジャンプが可能。スポーツ分析、メディア・エンターテインメント、セキュリティ、教育、小売などの業界に適している。対応リージョンはUS East (N. Virginia) と US West (N. California)。対応ファイル形式は動画(MP4, MOV)、画像(JPEG, PNG)、音声。Retrieve APIでテキストクエリによる検索が可能。

---

## まとめ

- Amazon Bedrock Managed Knowledge Base now supports multimodal embeddings for video, audio, and image content with TwelveLabs Marengo 3.0 について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-multimodal-embeddings-twelvelabs-marengo/)

### 関連情報

- [TwelveLabs Marengo Becomes First Video Model in Amazon Bedrock Managed Knowledge Base](https://finance.yahoo.com/technology/ai/articles/twelvelabs-marengo-becomes-first-video-130000866.html)
- [Marengo in Amazon Bedrock Knowledge Base | TwelveLabs](https://www.twelvelabs.io/blog/marengo-amazon-bedrock-managed-knowledge-base)
- [Video and image search in Amazon Bedrock Knowledge Base using Marengo 3.0](https://aws.amazon.com/blogs/machine-learning/video-and-image-search-in-amazon-bedrock-knowledge-base-using-marengo-3-0)
- [Native multimodal processing - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-managed-native-multimodal.html)