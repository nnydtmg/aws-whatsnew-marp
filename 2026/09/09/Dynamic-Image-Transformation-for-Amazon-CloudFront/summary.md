# Amazon CloudFront向け動的画像変換に4つの新機能が追加

Dynamic Image Transformation for Amazon CloudFront adds four new features

**カテゴリ:** What's New
**公開日:** 2026-09-08T14:32:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/dynamic-image-transformation-adds-new-features/)

このページでは、AWS What's Newで発表された「Dynamic Image Transformation for Amazon CloudFront adds four new features」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudFront向け動的画像変換（DIT）に4つの新機能が追加され、スマートクロッピングの強化や自動最適化の向上などが実現されました。本更新は、多様なデバイス向けに画像を動的に変換・最適化するお客様に適しております。

## このアップデートで何が変わったか

AWSは、Dynamic Image Transformation for Amazon CloudFront（DIT）に4つの新機能を発表しました。1) 強化されたスマートクロッピング：カスタムラベル検出と高度な構図制御により、製品、テキスト、ロゴ、カスタムオブジェクトを保持できます。顔、ラベル、テキスト、ロゴ、カスタムAmazon Rekognitionモデルを1つのリクエストで組み合わせることが可能です。アスペクト比、パディング、重力制約をビジネスニーズに応じて設定できます。2) 強化された自動画像最適化：CloudFrontの多層デバイス検出により、スマートフォン、タブレットからスマートTVまで、あらゆるデバイスへ適切なサイズの画像を配信できます。Client Hintsを最優先し、CloudFrontのデバイス分類ヘッダーと設定可能なフォールバックを組み合わせた階層的検出アプローチにより、従来約30%のトラフィックが未最適化だったブラウザサポートギャップを解消します。3) インタラクティブな画像変換プレイグラウンド：変換結果と拡張メトリクス（元のサイズと出力サイズ、フォーマッ

## 対象ユーザー

AWSは、Dynamic Image Transformation for Amazon CloudFront（DIT）に4つの新機能を発表しました。1) 強化されたスマートクロッピング：カスタムラベル検出と高度な構図制御により、製品、テキスト、ロゴ、カスタムオブジェクトを保持できます。顔、ラベル、テキスト、ロゴ、カスタムAmazon Rekognitionモデルを1つのリクエストで組み合わせることが可能です。アスペクト比、パディング、重力制約をビジネスニーズに応じて設定できます。2) 強化された自動画像最適化：CloudFrontの多層デバイス検出により、スマートフォン、タブレットからスマー

## 詳細

AWSは、Dynamic Image Transformation for Amazon CloudFront（DIT）に4つの新機能を発表しました。1) 強化されたスマートクロッピング：カスタムラベル検出と高度な構図制御により、製品、テキスト、ロゴ、カスタムオブジェクトを保持できます。顔、ラベル、テキスト、ロゴ、カスタムAmazon Rekognitionモデルを1つのリクエストで組み合わせることが可能です。アスペクト比、パディング、重力制約をビジネスニーズに応じて設定できます。2) 強化された自動画像最適化：CloudFrontの多層デバイス検出により、スマートフォン、タブレットからスマートTVまで、あらゆるデバイスへ適切なサイズの画像を配信できます。Client Hintsを最優先し、CloudFrontのデバイス分類ヘッダーと設定可能なフォールバックを組み合わせた階層的検出アプローチにより、従来約30%のトラフィックが未最適化だったブラウザサポートギャップを解消します。3) インタラクティブな画像変換プレイグラウンド：変換結果と拡張メトリクス（元のサイズと出力サイズ、フォーマット、ファイルサイズ、圧縮率、処理時間）を検証できます。4) ECSとLambdaアーキテクチャ間で完全な機能パリティが達成されました。DITはすべての商用リージョンおよび4つのオプトインリージョン（アジアパシフィック（香港）、中東（バーレーン）、アフリカ（ケープタウン）、欧州（ミラノ））で利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/dynamic-image-transformation-adds-new-features/)