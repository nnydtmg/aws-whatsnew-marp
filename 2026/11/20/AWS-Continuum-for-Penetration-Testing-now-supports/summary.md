# AWS Continuum for Penetration Testing が一時停止と再開をサポート

AWS Continuum for Penetration Testing now supports pause and resume

**カテゴリ:** What's New
**公開日:** 2026-11-19T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/continuum-pentest-pause-resume/)

このページでは、AWS What's Newで発表された「AWS Continuum for Penetration Testing now supports pause and resume」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Continuum for Penetration Testingは、実行中のペネトレーションテストジョブの一時停止と再開をサポートするようになりました。この更新により、セキュリティチームは既存の作業を保持したままテストを継続できます。

## このアップデートで何が変わったか

When you resume a paused or failed pen test job, it keeps its findings and completed work and continues where it left off. You can pause a pen test job during a deployment or maintenance window, raise the task-hour limit of a pen test job that has reached it, or replace test credentials that expired mid-test. Before you resume, you can also update the network traffic settings or VPC configuration, while the pen test job's scope, including its target endpoints, stays the same.

- 新機能は、AWS Continu

## 対象ユーザー

AWS Continuum for Penetration Testing (formerly AWS Security Agent) now lets you pause a running penetration test job and resume it later from its last saved checkpoint. Continuum for Penetration Testing runs on-demand, AI-driven penetration tests against your web applications and APIs. Previously, 

## 詳細

AWS Continuum for Penetration Testing (formerly AWS Security Agent) now lets you pause a running penetration test job and resume it later from its last saved checkpoint. Continuum for Penetration Testing runs on-demand, AI-driven penetration tests against your web applications and APIs. Previously, a pen test job that failed due to client configuration error could not continue, so security teams had to start a new pen test job and repeat work the agent had already done.

When you resume a paused or failed pen test job, it keeps its findings and completed work and continues where it left off. You can pause a pen test job during a deployment or maintenance window, raise the task-hour limit of a pen test job that has reached it, or replace test credentials that expired mid-test. Before you resume, you can also update the network traffic settings or VPC configuration, while the pen test job's scope, including its target endpoints, stays the same.

You can pause and resume pen test jobs in the web application or with the StopPentestJob and ResumePentestJob APIs. You can resume a pen test job within 7 days of its creation. Pause and resume is available in all AWS Regions where AWS Continuum for Penetration Testing is available.

- 新機能は、AWS Continuum for Penetration Testingで実行中のペネトレーションテストジョブを一時停止し、最後のチェックポイントから再開できることです。
- 再開時には検出結果と完了済み作業が保持され、中断した箇所から継続します。
- WebアプリケーションまたはStopPentestJobおよびResumePentestJob APIで操作でき、作成から7日以内に再開できます。
- この更新は、設定エラーで失敗した際に作業を最初からやり直す必要があったセキュリティチームに適しています。
- デプロイやメンテナンス中の一時停止、タスク時間制限の引き上げ、期限切れ認証情報の差し替えを行う方にも有益です。
- 再開前にネットワークトラフィック設定やVPC構成を更新可能。スコープ（ターゲットエンドポイント）は変更されません。
- AWS Continuum for Penetration Testingが利用可能なすべてのAWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/continuum-pentest-pause-resume/)