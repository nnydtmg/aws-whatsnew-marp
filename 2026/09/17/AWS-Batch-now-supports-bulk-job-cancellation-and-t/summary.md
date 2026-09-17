# AWS Batch が一括ジョブキャンセル・終了機能に対応

AWS Batch now supports bulk job cancellation and termination

**カテゴリ:** What's New
**公開日:** 2026-09-17T17:23:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-batch-bulk-cancellation/)

このページでは、AWS What's Newで発表された「AWS Batch now supports bulk job cancellation and termination」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Batchは最大50件のジョブを一括でキャンセルまたは終了する新機能を提供いたします。大規模なバッチ処理を管理するお客様の運用が簡素化されます。

## このアップデートで何が変わったか

- AWS Batchが1回のAPI呼び出しで最大50件のジョブをキャンセルまたは終了できる一括機能をサポートするようになりました。
- 新しいCancelJobs、TerminateJobs、TerminateServiceJobs APIにより、大規模バッチワークロードの運用複雑さを軽減できます。
- ListJobsがisCancelledとisTerminatedフィールドを返し、ジョブのライフサイクル状態を追跡しやすくなりました。
- この更新は大規模なバッチワークロードを管理するお客様に適しております。

## 詳細

- AWS Batchが1回のAPI呼び出しで最大50件のジョブをキャンセルまたは終了できる一括機能をサポートするようになりました。
- 新しいCancelJobs、TerminateJobs、TerminateServiceJobs APIにより、大規模バッチワークロードの運用複雑さを軽減できます。
- ListJobsがisCancelledとisTerminatedフィールドを返し、ジョブのライフサイクル状態を追跡しやすくなりました。
- この更新は大規模なバッチワークロードを管理するお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-batch-bulk-cancellation/)