---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECR が 200GB までのイメージレイヤーをサポート

Amazon ECR now supports image layers up to 200 GB

**What's New** | 2026-08-03T15:00:00

---

## 概要

- Amazon ECR が Docker push 経由でのイメージレイヤーの最大サイズを 200 GB に拡大し、大規模言語モデルやゲノミクスデータセットなどの大容量アセットを単一レイヤーで管理できるようになりました。
- この更新により、複数レイヤーへの分割やオフロード処理が不要となり、コンテナイメージの複雑性が軽減されます。

---

## 前提・背景

### これまでの課題

- 従来は、大規模なアセットをパッケージ化する際に、複数のレイヤーにデータを分割するか、外部ストレージシステムにオフロードする必要がありました。

---

### 関連する最近の動向

- **AWS ECR Introduces Game-Changing Features After 5 Years**
  [詳細](https://vrabbi.cloud/post/ecr-is-finally-usable)

- **Introducing multi-architecture container images for Amazon ECR**
  [詳細](https://aws.amazon.com/blogs/containers/introducing-multi-architecture-container-images-for-amazon-ecr)

---

## 変更内容・新機能

- Amazon ECR が Docker push 経由でプッシュされるイメージレイヤーの最大サイズを 200 GB に拡大したことが発表されました。

- この更新により、顧客は単一のイメージレイヤーに最大 200 GB を保存できるようになり、複雑な処理が不要になります。

---

## ユースケース

- 大規模言語モデルの埋め込み、ゲノミクスデータセットのバンドル、大規模バイナリ依存関係のコンテナイメージへの直接パッケージ化といったユースケースに対応しています。

---

## まとめ

- Amazon ECR now supports image layers up to 200 GB について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecr-image-layers/)

### 関連情報

- [AWS ECR Introduces Game-Changing Features After 5 Years](https://vrabbi.cloud/post/ecr-is-finally-usable)
- [Introducing multi-architecture container images for Amazon ECR](https://aws.amazon.com/blogs/containers/introducing-multi-architecture-container-images-for-amazon-ecr)
- [Pushing a Docker image to an Amazon ECR private repository - Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)
- [Optimizing performance for Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/performance.html)