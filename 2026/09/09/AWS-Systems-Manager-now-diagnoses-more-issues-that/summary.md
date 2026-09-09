# AWS Systems ManagerがEC2未管理インスタンスの診断対象を6カテゴリ追加

AWS Systems Manager now diagnoses more issues that cause EC2 instances to be unmanaged

**カテゴリ:** What's New
**公開日:** 2026-09-09T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/systems-manager-diagnoses-ec2-unmanaged/)

このページでは、AWS What's Newで発表された「AWS Systems Manager now diagnoses more issues that cause EC2 instances to be unmanaged」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Systems Managerの診断機能が拡張され、未管理インスタンスのより多くの問題を特定できるようになりました。お客様は具体的なガイダンスを活用してフリートを迅速に管理下に置くことができます。

## このアップデートで何が変わったか

AWS Systems Managerの診断機能が拡張され、EC2インスタンスやハイブリッドアクティベートノードが管理対象にならない6つの追加カテゴリの問題を特定できるようになりました。新しい診断対象には、IAM権限、SSMエージェントのバージョン、インスタンスステータスチェック、オペレーティングシステム設定、デフォルトホスト管理設定、ハイブリッドアクティベーションが含まれます。従来はネットワーク接続のみが診断対象でした。Systems Managerの統合コンソールで診断を実行すると、各カテゴリで見つかった具体的な問題が報告され、すべての診断結果にステップバイステップの解決ガイダンスが付きます。一部の問題はコンソールからAWS Systems Manager Automationランブックを直接実行して修復できます。この機能はデフォルトで有効なすべてのAWSリージョンで利用可能で、Automationランブックとして実行されるため標準のAutomation利用料金が適用されます。

## 対象ユーザー

AWS Systems Managerの診断機能が拡張され、EC2インスタンスやハイブリッドアクティベートノードが管理対象にならない6つの追加カテゴリの問題を特定できるようになりました。新しい診断対象には、IAM権限、SSMエージェントのバージョン、インスタンスステータスチェック、オペレーティングシステム設定、デフォルトホスト管理設定、ハイブリッドアクティベーションが含まれます。従来はネットワーク接続のみが診断対象でした。Systems Managerの統合コンソールで診断を実行すると、各カテゴリで見つかった具体的な問題が報告され、すべての診断結果にステップバイステップの解決ガイダンスが付きま

## 詳細

AWS Systems Managerの診断機能が拡張され、EC2インスタンスやハイブリッドアクティベートノードが管理対象にならない6つの追加カテゴリの問題を特定できるようになりました。新しい診断対象には、IAM権限、SSMエージェントのバージョン、インスタンスステータスチェック、オペレーティングシステム設定、デフォルトホスト管理設定、ハイブリッドアクティベーションが含まれます。従来はネットワーク接続のみが診断対象でした。Systems Managerの統合コンソールで診断を実行すると、各カテゴリで見つかった具体的な問題が報告され、すべての診断結果にステップバイステップの解決ガイダンスが付きます。一部の問題はコンソールからAWS Systems Manager Automationランブックを直接実行して修復できます。この機能はデフォルトで有効なすべてのAWSリージョンで利用可能で、Automationランブックとして実行されるため標準のAutomation利用料金が適用されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/systems-manager-diagnoses-ec2-unmanaged/)