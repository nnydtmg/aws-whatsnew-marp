# Amazon Route 53 が Advanced Hosted Zones の提供を開始

Amazon Route 53 now offers Advanced Hosted Zones

**カテゴリ:** What's New
**公開日:** 2026-11-20T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-offers-advanced-hosted-zones/)

このページでは、AWS What's Newで発表された「Amazon Route 53 now offers Advanced Hosted Zones」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Route 53のAdvanced Hosted Zonesはガードレールと変更履歴によりDNS変更の事故を防ぎます。この機能はドメインの安全性を高めたいお客様に適しております。

## このアップデートで何が変わったか

Amazon Route 53はAdvanced Hosted Zonesという新しいホストゾーン層を提供します。この機能はChange Guardrails、レコードレベルの変更履歴、プライベートホストゾーンのパブリックDNSフォールバックを含みます。Change Guardrailsは使用中のレコード削除を防ぎ、違反時はリクエスト全体を拒否します。変更履歴は365日間保持され、変更内容と時期を確認できます。

## 対象ユーザー

A single mistaken DNS change can take part of your domain offline, such as deleting a record that is still serving traffic or removing a delegation that resolvers are still using. To protect against this, customers build their own validation pipelines, review processes, and audit tooling. With Chang

## 活用シーン

A single mistaken DNS change can take part of your domain offline, such as deleting a record that is still serving traffic or removing a delegation that resolvers are still using. To protect against this, customers build their own validation pipelines, review processes, and audit tooling. With Chang

## 詳細

Amazon Route 53はAdvanced Hosted Zonesという新しいホストゾーン層を提供します。この機能はChange Guardrails、レコードレベルの変更履歴、プライベートホストゾーンのパブリックDNSフォールバックを含みます。Change Guardrailsは使用中のレコード削除を防ぎ、違反時はリクエスト全体を拒否します。変更履歴は365日間保持され、変更内容と時期を確認できます。

Amazon Route 53 now offers Advanced Hosted Zones, a new hosted zone tier with additional guardrails, visibility, and resilience features. Advanced Hosted Zones include Change Guardrails that prevent accidental record deletions, record-level Change History, and public DNS fallback in private hosted zones.

A single mistaken DNS change can take part of your domain offline, such as deleting a record that is still serving traffic or removing a delegation that resolvers are still using. To protect against this, customers build their own validation pipelines, review processes, and audit tooling. With Change Guardrails turned on, Route 53 checks each change before applying it. It blocks deleting a record that is still receiving DNS queries, a record that an alias record in the same hosted zone points to, or a delegation that is still in use. When a guardrail blocks a change, Route 53 rejects the whole request with an error that explains why, and no records change. Guardrails apply to every change, including changes from infrastructure as code tools. Change History gives you a record-level history of changes to your hosted zone, retained for 365 days, so you can see what changed and when.

To get started, create a new Advanced Hosted Zone or upgrade an existing hosted zone, then turn on the guardrails you want. You can use the Route 53 console, API, AWS CLI, AWS SDKs, or AWS CloudFormation. Advanced Hosted Zones are priced separately from Standard Hosted Zones.

Advanced Hosted Zones are available in all AWS commercial Regions where Route 53 public and private hosted zones are available. To learn more, see Advanced Hosted Zones in the Route 53 Developer Guide.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-offers-advanced-hosted-zones/)