# Amazon Quickがエージェントアクションのスマート承認をサポート

Quick now supports smart approvals for agentic actions

**カテゴリ:** What's New
**公開日:** 2026-10-28T18:28:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/quick-smart-approvals-agentic-actions/)

このページでは、AWS What's Newで発表された「Quick now supports smart approvals for agentic actions」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon Quickにスマート承認が追加され、定型アクションは自動承認しつつ重要な操作のみ利用者確認を残します。エージェント操作の承認疲れを抑えたい利用者と管理者に適した機能です。

## このアップデートで何が変わったか

- 新機能はAmazon Quickのスマート承認であり、不要な承認プロンプトを減らしつつ重要な操作の人による監督を維持するレビュー層です。
- 分類器がユーザーの依頼に照らして適格な各アクションを評価し、定型操作は自動承認し、影響の大きい操作は利用者確認へ回します。
- 既存ポリシーが常に優先され、「毎回確認」設定のアクションのみが対象となり、拒否は維持され新たなアクセスは付与されません。
- 本アップデートは、メール送信、レコード更新、チケット作成などをエージェントに任せて承認疲れを軽減したいAmazon Quick利用者に適しています。
- 管理者はカスタム権限で利用対象を制御でき、利用者は会話やスケジュール実行でオフにできます。
- 自動承認は審査した該当のアクションのみを対象とし、審査失敗やタイムアウト時は利用者確認へ回されます。
- 組織外へのコンテンツ送信、権限変更、コンテンツ削除、支払い、依頼範囲を超える操作は利用者確認へ回されます。
- AWS CloudTrailがスマート承認の審査と設定変更を記録します。
- Amazon Quickのエージェント機能が対応してい

## 対象ユーザー

Amazon Quick now supports smart approvals, a review layer that reduces unnecessary approval prompts while preserving human oversight of the actions that matter most. As agents take more actions on a user's behalf, such as sending email, updating records, and creating tickets, asking a person to appr

## 活用シーン

Amazon Quick now supports smart approvals, a review layer that reduces unnecessary approval prompts while preserving human oversight of the actions that matter most. As agents take more actions on a user's behalf, such as sending email, updating records, and creating tickets, asking a person to appr

## 詳細

Amazon Quick now supports smart approvals, a review layer that reduces unnecessary approval prompts while preserving human oversight of the actions that matter most. As agents take more actions on a user's behalf, such as sending email, updating records, and creating tickets, asking a person to approve every step leads to approval fatigue and weaker oversight over time. With smart approvals, a separate review model called the classifier evaluates each eligible action against the user's request. It approves routine actions automatically and refers consequential actions to the user for review.

Your existing policies always come first. Smart approvals only reviews actions where the user's setting is "ask" each time. Denied actions stay denied, and smart approvals never grants new access. The classifier sends higher-impact actions to the user for review. These include sending content outside the organization, changing permissions, deleting content, making payments, and actions that go beyond what the user asked for. Each automatic approval covers only the exact action that was reviewed. If a review fails or times out, the action goes to the user.

Smart approvals is on for all users by default. Administrators control who can use it with custom permissions, and users can turn it off for their conversations and scheduled runs in chat options. AWS CloudTrail records each action review made through smart approvals and each change to a user's smart approvals setting.

Smart approvals is available in Amazon Quick in all AWS Regions where Amazon Quick agentic capabilities are supported.

- 新機能はAmazon Quickのスマート承認であり、不要な承認プロンプトを減らしつつ重要な操作の人による監督を維持するレビュー層です。
- 分類器がユーザーの依頼に照らして適格な各アクションを評価し、定型操作は自動承認し、影響の大きい操作は利用者確認へ回します。
- 既存ポリシーが常に優先され、「毎回確認」設定のアクションのみが対象となり、拒否は維持され新たなアクセスは付与されません。
- 本アップデートは、メール送信、レコード更新、チケット作成などをエージェントに任せて承認疲れを軽減したいAmazon Quick利用者に適しています。
- 管理者はカスタム権限で利用対象を制御でき、利用者は会話やスケジュール実行でオフにできます。
- 自動承認は審査した該当のアクションのみを対象とし、審査失敗やタイムアウト時は利用者確認へ回されます。
- 組織外へのコンテンツ送信、権限変更、コンテンツ削除、支払い、依頼範囲を超える操作は利用者確認へ回されます。
- AWS CloudTrailがスマート承認の審査と設定変更を記録します。
- Amazon Quickのエージェント機能が対応しているすべてのAWSリージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/quick-smart-approvals-agentic-actions/)