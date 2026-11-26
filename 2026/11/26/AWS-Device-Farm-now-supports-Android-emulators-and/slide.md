---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Device FarmがAndroidエミュレーターとiOSシミュレーターをサポート

AWS Device Farm now supports Android emulators and iOS simulators

**What's New** | 2026-11-25T08:00:00

---

## 概要

- AWS Device FarmがAndroidエミュレーターとiOSシミュレーターを新たにサポートし、開発パイプラインの早期段階で迅速かつ大規模なテストが可能になりました。
- 自前のエミュレーター・シミュレーター基盤を維持したくない開発者や、すべてのテストを実機で行っていたチームに適しています。

---

## 前提・背景

### これまでの課題

AWS Device Farmは実機に加えてAndroidエミュレーターとiOSシミュレーターをサポートするようになりました。自動テストと手動テストの両方に対応し、仮想デバイスにより開発パイプラインの早い段階（プルリクエスト、コードマージ、スモークテスト）で高速・大規模なテストが可能になります。最新のデバイスとOSの仮想デバイスは通常数秒で起動し、その他も約1分程度で起動します。実機は回帰テストやリリーステストなど高い忠実度が必要な後段に残せます。以前は自前でAndroidエミュレーターやiOS

---

### 関連する最近の動向

- **AWS Device Farm now supports Android emulators and iOS simulators - AWS**
  [詳細](https://aws.amazon.com/about-a...

---

## 変更内容・新機能

AWS Device Farmは実機に加えてAndroidエミュレーターとiOSシミュレーターをサポートするようになりました。自動テストと手動テストの両方に対応し、仮想デバイスにより開発パイプラインの早い段階（プルリクエスト、コードマージ、スモークテスト）で高速・大規模なテストが可能になります。最新のデバイスとOSの仮想デバイスは通常数秒で起動し、その他も約1分程度で起動します。実機は回帰テストやリリーステストなど高い忠実度が必要な後段に残せます。以前は自前でAndroidエミュレーターやiOSシミュレーター基盤（iOSはMacホストが必要）を構築・維持するか、すべての段階を実機で実行する必要がありました。今は同じ完全管理型のDevice Farm API、テスト環境、プライベートエンドポイント、テストフレームワークを仮想デバイスと実機の両方で利用できます。切り替えはデバイスタイプの変更のみで、パイプラインとテストはそのまま使えます。仮想デバイスは既存の課金型価格を利用し、Androidでは既存の定額スロットで実機または仮想デバイスを追加料金なしで実行できます。AWS Device F

---

## まとめ

- AWS Device Farm now supports Android emulators and iOS simulators について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/device-farm-virtual-devices/)

### 関連情報

- [AWS Device Farm now supports Android emulators and iOS simulators - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/device-farm-virtual-devices/)
- [Test environment for iOS devices - AWS Device Farm](https://docs.aws.amazon.com/devicefarm/latest/developerguide/custom-test-environments-hosts-ios.html)
- [Mobile and Web Application Testing – AWS Device Farm – AWS](https://aws.amazon.com/device-farm)
- [Marathon Cloud vs AWS Device Farm](https://marathonlabs.io/vs/aws-device-farm)