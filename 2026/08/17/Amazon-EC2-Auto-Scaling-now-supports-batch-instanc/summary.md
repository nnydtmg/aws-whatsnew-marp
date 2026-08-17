# Amazon EC2 Auto Scaling がバッチインスタンス終了に対応

Amazon EC2 Auto Scaling now supports batch instance termination

**カテゴリ:** What's New
**公開日:** 2026-08-17T18:11:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ec2-auto-scaling-batch-termination)

このページでは、AWS What's Newで発表された「Amazon EC2 Auto Scaling now supports batch instance termination」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EC2 Auto Scalingが単一のAPI呼び出しで最大100個のインスタンスをバッチ終了できるようになり、スケールダウン時のAPI呼び出し数を大幅に削減できるようになりました。この機能はAI/MLトレーニングやコンテナオーケストレーションなど、急速なスケーリングが必要なワークロードに特に適しており、既存のAuto Scaling動作を保持しながら、すべてのAWSリージョンで追加コストなしで利用可能です。

## このアップデートで何が変わったか

- この機能はすべてのAWSリージョンで追加コストなしで利用可能です。

## 詳細

- Amazon EC2 Auto Scalingが単一のAPI呼び出しでバッチインスタンス終了をサポートするようになりました。

- TerminateInstanceInAutoScalingGroup APIに最大100個のインスタンスIDを渡して、バッチとして終了できるようになりました。

- Auto Scaling グループのスケールダウンに必要なAPI呼び出し数を削減できます。

- AI/MLトレーニングジョブ、コンテナオーケストレーター、イベント駆動型アーキテクチャなど、急速なスケールダウンが必要なワークロードに適しています。

- バッチ内のすべてのインスタンスは、終了開始前にアトミックに検証されます。

- ライフサイクルフックとロードバランサー接続ドレイニングなどの既存のAuto Scalingの動作は、バッチ内の各インスタンスに対して保持されます。

- この機能はすべてのAWSリージョンで追加コストなしで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ec2-auto-scaling-batch-termination)