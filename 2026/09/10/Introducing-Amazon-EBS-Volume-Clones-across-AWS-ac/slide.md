---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EBS Volume ClonesがAWSアカウント間コピーに対応

Introducing Amazon EBS Volume Clones across AWS accounts

**AWS Blog** | 2026-09-09T22:01:47

---

## 概要

- Amazon EBSのクロスアカウントボリュームクローンにより、本番データを別アカウントへ安全にコピーできるようになりました。
- 開発・テスト環境の更新と本番環境の隔離に役立ちます。

---

## 前提・背景

### 関連する最近の動向

- **Introducing Amazon EBS Volume Clones across AWS accounts | AWS News Blog**
  [詳細](https://aws.amazon.com/blogs/aws/introducing-amazon-ebs-volume-clones-across-aws-accounts/)

- **Amazon EBS now supports Volume Clones for instant volume copies**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-ebs-volume-clones-instant-volume-copies)

- **Copy an Amazon EBS volume...

---

## 変更内容・新機能

新機能は、Amazon EBSボリュームクローンを他のAWSアカウントへコピーできるクロスアカウントコピーです。ターゲットアカウントのAWS KMSキーで再暗号化しながら、同一アベイラビリティーゾーン内にコピーを作成できます。AWS RAMでボリュームを共有し、ターゲットアカウント側からコピーを開始できます。本アップデートは、本番環境の最新データを用いて別アカウントの開発・テスト環境を更新したいお客様に適しています。本番情報を保護・隔離しつつ、セカンダリ環境で開発・テスト・実験を行いたいお客様に有用です。暗号化は非暗号化ボリュームとカスタマー管理キー(CMK)で暗号化されたボリュームのみ共有可能で、AWS管理キー(AMK)で暗号化されたボリュームは共有できません。CMKで暗号化された共有ボリュームをコピーする場合、CMKもターゲットアカウントと共有する必要があります。ターゲットアカウントで別のCMKを指定して再暗号化できます。コピー開始時にボリュームサイズに基づく一回限りの料金が発生し、共有自体に料金はかかりません。コピーされたボリュームは通常のEBS料金が発生します。コピーはソースと

---

## まとめ

- Introducing Amazon EBS Volume Clones across AWS accounts について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/blogs/aws/introducing-amazon-ebs-volume-clones-across-aws-accounts/)

### 関連情報

- [Introducing Amazon EBS Volume Clones across AWS accounts | AWS News Blog](https://aws.amazon.com/blogs/aws/introducing-amazon-ebs-volume-clones-across-aws-accounts/)
- [Amazon EBS now supports Volume Clones for instant volume copies](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-ebs-volume-clones-instant-volume-copies)
- [Copy an Amazon EBS volume - Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-copying-volume.html)