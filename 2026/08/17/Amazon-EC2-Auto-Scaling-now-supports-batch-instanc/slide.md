---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EC2 Auto Scaling がバッチインスタンス終了に対応

Amazon EC2 Auto Scaling now supports batch instance termination

**What's New** | 2026-08-17T18:11:00

---

## 概要

- Amazon EC2 Auto Scalingが単一のAPI呼び出しで最大100個のインスタンスをバッチ終了できるようになり、スケールダウン時のAPI呼び出し数を大幅に削減できるようになりました。
- この機能はAI/MLトレーニングやコンテナオーケストレーションなど、急速なスケーリングが必要なワークロードに特に適しており、既存のAuto Scaling動作を保持しながら、すべてのAWSリージョンで追加コストなしで利用可能です。

---

## 前提・背景

### 関連する最近の動向

- **EC2 Auto Scaling introduces instance lifecycle policy**
  [詳細](https://www.amazonaws.cn/en/new/2026/ec2-auto-scaling-introduces-instance-lifecycle-policy)

- **Dynamic scaling for Amazon EC2 Auto Scaling**
  [詳細](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html)

- **What is Amazon EC2 Auto Scaling?**
  [詳細](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)

---

## 変更内容・新機能

- この機能はすべてのAWSリージョンで追加コストなしで利用可能です。

---

## 効果・メリット

- Auto Scaling グループのスケールダウンに必要なAPI呼び出し数を削減できます。

---

## まとめ

- Amazon EC2 Auto Scaling now supports batch instance termination について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ec2-auto-scaling-batch-termination)

### 関連情報

- [EC2 Auto Scaling introduces instance lifecycle policy](https://www.amazonaws.cn/en/new/2026/ec2-auto-scaling-introduces-instance-lifecycle-policy)
- [Dynamic scaling for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html)
- [What is Amazon EC2 Auto Scaling?](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)