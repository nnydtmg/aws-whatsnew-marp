---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon ECRが既存コンテナイメージのレプリケーションバックフィルをサポート

Amazon ECR now supports replication backfill for existing container images

**What's New** | 2026-10-26T20:24:00

---

## 概要

- Amazon ECRは既存のコンテナイメージを単一のAPI呼び出しでレプリケーション先へ複製できるバックフィル機能をサポートするようになりました。
- 本機能は新しいリージョンへの展開や災害復旧の検証、コンプライアンス対応を行うお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Amazon ECR Cross Region / Cross Account replication**
  [詳細](https://www.youtube.com/watch?v=fILn8zMvZN8)

- **Copy Amazon ECR container images across AWS accounts and AWS Regions**
  [詳細](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/copy-ecr-container-images-across-accounts-regions.html)

- **Cross region replication in Amazon ECR has landed**
  [詳細](https:...

---

## 変更内容・新機能

Amazon ECRは既存のコンテナイメージに対するレプリケーションバックフィルを新たにサポートするようになりました。単一のAPI呼び出しにより既存のイメージカタログ全体を設定済みのレプリケーション先へ複製できるようになりました。最大10件のバックフィルジョブを同時実行でき、新しいAPIで進捗を監視し、いつでも停止できます。本機能は新しいAWSリージョンへの展開を行うお客様に適しています。災害復旧の準備状況を検証するお客様に適しています。レプリケーションルールの更新やコンプライアンス対応を行うお客様に適しています。

---

## まとめ

- Amazon ECR now supports replication backfill for existing container images について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/replication-backfill-amazon-ecr)

### 関連情報

- [Amazon ECR Cross Region / Cross Account replication](https://www.youtube.com/watch?v=fILn8zMvZN8)
- [Copy Amazon ECR container images across AWS accounts and AWS Regions](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/copy-ecr-container-images-across-accounts-regions.html)
- [Cross region replication in Amazon ECR has landed](https://aws.amazon.com/blogs/containers/cross-region-replication-in-amazon-ecr-has-landed)
- [Private image replication in Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/replication.html)
- [ECR Cross Region Replication to New Region](https://repost.aws/questions/QUl5TU0Wt_QJu-jjak0xVH1Q/ecr-cross-region-replication-to-new-region)