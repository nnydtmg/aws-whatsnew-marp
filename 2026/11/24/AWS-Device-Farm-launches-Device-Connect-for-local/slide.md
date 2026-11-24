---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Device Farm が Device Connect を発表、リモート Android 端末へローカルアクセス可能に

AWS Device Farm launches Device Connect for local access to remote Android devices

**What's New** | 2026-11-23T08:00:00

---

## 概要

- AWS Device Farmは、ローカル環境からリモートのAndroidデバイスを実機のように利用できるDevice Connectを提供開始しました。
- 本機能は、既存のADBワークフローを維持したまま実機へアクセスしたい開発者およびAIエージェントに適しております。

---

## 前提・背景

### 関連する最近の動向

- **How to connect via adb to a (Remote Session) Android Device on AWS Device Farm | AWS re:Post**
  [詳細](https://repost.aws/questions/QUitFvIMf_TzO7R-XZMDEb3w/how-to-connect-via-adb-to-a-remote-session-android-device-on-aws-device-farm)

- **Supported platforms and features - AWS Device Farm**
  [詳細](https://docs.aws.amazon.com/devicefarm/latest/developerguide/device-connect-suppor...

---

## 変更内容・新機能

- AWS Device Farmは、リモートのAndroidデバイスへローカルからアクセスできるDevice Connectを提供開始しました。
- Device Connectにより、IDEやターミナルからリモート端末をノートPCに接続したかのように利用できます。
- デバッガーの接続、パフォーマンスのプロファイリング、ビルドのプレビュー、ADBコマンドの実行、手動操作が可能です。
- ライブ動画ならびにデバイスおよびテストのログを取得できます。
- ローカルでADBと連携するツールやテストフレームワークを、Device Farm管理の実機上で実行できます。
- 本更新は、Android Studioやターミナルなどのローカルツールを用いる開発者に適しています。
- AIエージェントにもご利用いただけます。

---

## まとめ

- AWS Device Farm launches Device Connect for local access to remote Android devices について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/device-farm-device-connect/)

### 関連情報

- [How to connect via adb to a (Remote Session) Android Device on AWS Device Farm | AWS re:Post](https://repost.aws/questions/QUitFvIMf_TzO7R-XZMDEb3w/how-to-connect-via-adb-to-a-remote-session-android-device-on-aws-device-farm)
- [Supported platforms and features - AWS Device Farm](https://docs.aws.amazon.com/devicefarm/latest/developerguide/device-connect-support.html)
- [Installing Device Connect and attaching a device - AWS Device Farm](https://docs.aws.amazon.com/devicefarm/latest/developerguide/device-connect-getting-started.html)
- [AWS Device Farm Update – Remote Access to Devices for Interactive Testing | AWS News Blog](https://aws.amazon.com/blogs/aws/aws-device-farm-update-remote-access-to-devices-for-interactive-testing)
- [Getting Started with AWS Device Farm](https://www.youtube.com/watch?v=ZWAUAerFB6s)