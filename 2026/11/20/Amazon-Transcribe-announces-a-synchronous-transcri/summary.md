# Amazon Transcribeが同期文字起こしAPI「TranscribeAudio」を発表

Amazon Transcribe announces a synchronous transcription API

**カテゴリ:** What's New
**公開日:** 2026-11-20T20:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-transcribe-sync-api/)

このページでは、AWS What's Newで発表された「Amazon Transcribe announces a synchronous transcription API」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Transcribeは同期文字起こしAPI「TranscribeAudio」を発表しました。対話型アプリケーションに迅速かつ正確な音声テキスト変換を追加できます。音声ファイルを単一のリクエストで送信し、同じレスポンスで全文の文字起こし結果を取得できます。ジョブの開始やステータスのポーリング、接続の管理は不要です。

## このアップデートで何が変わったか

Amazon Transcribeは同期文字起こしAPIであるTranscribeAudioを提供開始しました。音声ファイルを単一のリクエストで送信し、同じレスポンスで全文の文字起こし結果を取得できます。ジョブの開始やステータスのポーリング、接続の管理は不要です。本アップデートは音声アシスタント、エージェント支援ツール、オンデマンドの文字起こし機能などの対話型アプリケーションに適しています。

同期APIは既存のAmazon Transcribe機能をサポートします。音声はインライン（最大23MB）またはAmazon S3（最大500MB）から送信可能で、0.5秒から1時間まで、WAV/MP3/FLAC/M4A/MP4/Ogg/WebM/AMR形式に対応します。文字起こし結果はレスポンスで返却、または指定したS3場所へ書き出せます。価格は音声分あたり$0.0070／分（秒単位請求）で、話者分離、言語識別、カスタム語彙、チャネル識別が含まれます。2チャネル音声はファイル時間で一度のみ請求されます。PIIレダクションはオプション追加です。

## 詳細

Amazon Transcribeは同期文字起こしAPIであるTranscribeAudioを提供開始しました。音声ファイルを単一のリクエストで送信し、同じレスポンスで全文の文字起こし結果を取得できます。ジョブの開始やステータスのポーリング、接続の管理は不要です。本アップデートは音声アシスタント、エージェント支援ツール、オンデマンドの文字起こし機能などの対話型アプリケーションに適しています。

同期APIは既存のAmazon Transcribe機能をサポートします。音声はインライン（最大23MB）またはAmazon S3（最大500MB）から送信可能で、0.5秒から1時間まで、WAV/MP3/FLAC/M4A/MP4/Ogg/WebM/AMR形式に対応します。文字起こし結果はレスポンスで返却、または指定したS3場所へ書き出せます。価格は音声分あたり$0.0070／分（秒単位請求）で、話者分離、言語識別、カスタム語彙、チャネル識別が含まれます。2チャネル音声はファイル時間で一度のみ請求されます。PIIレダクションはオプション追加です。

対応言語: 英語、スペイン語、フランス語、イタリア語、ドイツ語、日本語、ポルトガル語、韓国語、中国語（簡体字・繁体字・香港）。
提供リージョン: US East (N. Virginia, Ohio), US West (Oregon), Canada (Central), Europe (Ireland, London, Frankfurt), Asia Pacific (Mumbai, Singapore, Sydney, Tokyo, Seoul), South America (São Paulo)。PIIレダクションはSouth America (São Paulo)以外の全リージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-transcribe-sync-api/)