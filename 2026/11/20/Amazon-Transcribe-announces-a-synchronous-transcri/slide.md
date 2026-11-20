---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Transcribeが同期文字起こしAPI「TranscribeAudio」を発表

Amazon Transcribe announces a synchronous transcription API

**What's New** | 2026-11-20T20:00:00

---

## 概要

- Amazon Transcribeは同期文字起こしAPI「TranscribeAudio」を発表しました。
- 対話型アプリケーションに迅速かつ正確な音声テキスト変換を追加できます。
- 音声ファイルを単一のリクエストで送信し、同じレスポンスで全文の文字起こし結果を取得できます。
- ジョブの開始やステータスのポーリング、接続の管理は不要です。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Transcribe announces a synchronous transcription API - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-transcribe-sync-api/)

- **Best Speech-to-Text APIs in 2026 | LLM API**
  [詳細](https://llmapi.ai/blog/best-speech-to-text-apis-to-try)

- **5 Amazon Transcribe alternatives in 2026 | AssemblyAI**
  [詳細](https://www.assemblyai.com/blog/amazon-transc...

---

## 変更内容・新機能

Amazon Transcribeは同期文字起こしAPIであるTranscribeAudioを提供開始しました。音声ファイルを単一のリクエストで送信し、同じレスポンスで全文の文字起こし結果を取得できます。ジョブの開始やステータスのポーリング、接続の管理は不要です。本アップデートは音声アシスタント、エージェント支援ツール、オンデマンドの文字起こし機能などの対話型アプリケーションに適しています。

同期APIは既存のAmazon Transcribe機能をサポートします。音声はインライン（最大23MB）またはAmazon S3（最大500MB）から送信可能で、0.5秒から1時間まで、WAV/MP3/FLAC/M4A/MP4/Ogg/WebM/AMR形式に対応します。文字起こし結果はレスポンスで返却、または指定したS3場所へ書き出せます。価格は音声分あたり$0.0070／分（秒単位請求）で、話者分離、言語識別、カスタム語彙、チャネル識別が含まれます。2チャネル音声はファイル時間で一度のみ請求されます。PIIレダクションはオプション追加です。

---

## まとめ

- Amazon Transcribe announces a synchronous transcription API について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-transcribe-sync-api/)

### 関連情報

- [Amazon Transcribe announces a synchronous transcription API - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-transcribe-sync-api/)
- [Best Speech-to-Text APIs in 2026 | LLM API](https://llmapi.ai/blog/best-speech-to-text-apis-to-try)
- [5 Amazon Transcribe alternatives in 2026 | AssemblyAI](https://www.assemblyai.com/blog/amazon-transcribe-alternatives)
- [Real-Time Transcription: A 2026 Guide | Recall.ai Blog](https://www.recall.ai/blog/real-time-transcription-api-providers-2026)
- [OpenAI Whisper vs Google Speech-to-Text vs Amazon Transcribe](https://www.gladia.io/blog/openai-whisper-vs-google-speech-to-text-vs-amazon-transcribe)