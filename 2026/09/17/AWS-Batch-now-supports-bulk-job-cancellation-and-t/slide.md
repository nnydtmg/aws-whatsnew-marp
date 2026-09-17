---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Batch が一括ジョブキャンセル・終了機能に対応

AWS Batch now supports bulk job cancellation and termination

**What's New** | 2026-09-17T17:23:00

---

## 概要

- AWS Batchは最大50件のジョブを一括でキャンセルまたは終了する新機能を提供いたします。
- 大規模なバッチ処理を管理するお客様の運用が簡素化されます。

---

## 前提・背景

### 関連する最近の動向

- **Cancel all RUNNABLE jobs in AWS Batch**
  [詳細](https://repost.aws/knowledge-center/batch-jobs-termination)

- **CancelJob - AWS Batch**
  [詳細](https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html)

- **What is the difference between canceling and terminating a job in AWS Batch**
  [詳細](https://aws.amazon.com/blogs/hpc/reader-question-what-is-the-difference-be...

---

## 変更内容・新機能

- AWS Batchが1回のAPI呼び出しで最大50件のジョブをキャンセルまたは終了できる一括機能をサポートするようになりました。
- 新しいCancelJobs、TerminateJobs、TerminateServiceJobs APIにより、大規模バッチワークロードの運用複雑さを軽減できます。
- ListJobsがisCancelledとisTerminatedフィールドを返し、ジョブのライフサイクル状態を追跡しやすくなりました。
- この更新は大規模なバッチワークロードを管理するお客様に適しております。

---

## まとめ

- AWS Batch now supports bulk job cancellation and termination について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-batch-bulk-cancellation/)

### 関連情報

- [Cancel all RUNNABLE jobs in AWS Batch](https://repost.aws/knowledge-center/batch-jobs-termination)
- [CancelJob - AWS Batch](https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html)
- [What is the difference between canceling and terminating a job in AWS Batch](https://aws.amazon.com/blogs/hpc/reader-question-what-is-the-difference-between-canceling-and-terminating-a-job-in-aws-batch)