---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront向け動的画像変換に4つの新機能が追加

Dynamic Image Transformation for Amazon CloudFront adds four new features

**What's New** | 2026-09-08T14:32:00

---

## 概要

- Amazon CloudFront向け動的画像変換（DIT）に4つの新機能が追加され、スマートクロッピングの強化や自動最適化の向上などが実現されました。
- 本更新は、多様なデバイス向けに画像を動的に変換・最適化するお客様に適しております。

---

## 前提・背景

### これまでの課題

AWSは、Dynamic Image Transformation for Amazon CloudFront（DIT）に4つの新機能を発表しました。1) 強化されたスマートクロッピング：カスタムラベル検出と高度な構図制御により、製品、テキスト、ロゴ、カスタムオブジェクトを保持できます。顔、ラベル、テキスト、ロゴ、カスタムAmazon Rekognitionモデルを1つのリクエストで組み合わせることが可能です。アスペクト比、パディング、重力制約をビジネスニーズに応じて設定できます。2) 強化され

---

### 関連する最近の動向

- **Features and benefits - Dynamic Image Transformation for Amazon CloudFront**
  [詳細](https://docs.aws.amazon.com...

---

## 変更内容・新機能

AWSは、Dynamic Image Transformation for Amazon CloudFront（DIT）に4つの新機能を発表しました。1) 強化されたスマートクロッピング：カスタムラベル検出と高度な構図制御により、製品、テキスト、ロゴ、カスタムオブジェクトを保持できます。顔、ラベル、テキスト、ロゴ、カスタムAmazon Rekognitionモデルを1つのリクエストで組み合わせることが可能です。アスペクト比、パディング、重力制約をビジネスニーズに応じて設定できます。2) 強化された自動画像最適化：CloudFrontの多層デバイス検出により、スマートフォン、タブレットからスマートTVまで、あらゆるデバイスへ適切なサイズの画像を配信できます。Client Hintsを最優先し、CloudFrontのデバイス分類ヘッダーと設定可能なフォールバックを組み合わせた階層的検出アプローチにより、従来約30%のトラフィックが未最適化だったブラウザサポートギャップを解消します。3) インタラクティブな画像変換プレイグラウンド：変換結果と拡張メトリクス（元のサイズと出力サイズ、フォーマッ

---

## 効果・メリット

- Amazon CloudFront向け動的画像変換（DIT）に4つの新機能が追加され、スマートクロッピングの強化や自動最適化の向上などが実現されました。
- 本更新は、多様なデバイス向けに画像を動的に変換・最適化するお客様に適しております。

---

## まとめ

- Dynamic Image Transformation for Amazon CloudFront adds four new features について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/dynamic-image-transformation-adds-new-features/)

### 関連情報

- [Features and benefits - Dynamic Image Transformation for Amazon CloudFront](https://docs.aws.amazon.com/solutions/latest/dynamic-image-transformation-for-amazon-cloudfront/features-and-benefits.html)
- [Solution Overview](https://docs.aws.amazon.com/solutions/latest/dynamic-image-transformation-for-amazon-cloudfront/solution-overview.html)
- [Dynamic Image Transformation for Amazon CloudFront](https://aws.amazon.com/solutions/implementations/dynamic-image-transformation-for-amazon-cloudfront)
- [GitHub - aws-solutions/dynamic-image-transformation-for-amazon-cloudfront](https://github.com/aws-solutions/dynamic-image-transformation-for-amazon-cloudfront)