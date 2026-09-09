---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Systems ManagerがEC2未管理インスタンスの診断対象を6カテゴリ追加

AWS Systems Manager now diagnoses more issues that cause EC2 instances to be unmanaged

**What's New** | 2026-09-09T08:00:00

---

## 概要

- AWS Systems Managerの診断機能が拡張され、未管理インスタンスのより多くの問題を特定できるようになりました。
- お客様は具体的なガイダンスを活用してフリートを迅速に管理下に置くことができます。

---

## 前提・背景

### これまでの課題

AWS Systems Managerの診断機能が拡張され、EC2インスタンスやハイブリッドアクティベートノードが管理対象にならない6つの追加カテゴリの問題を特定できるようになりました。新しい診断対象には、IAM権限、SSMエージェントのバージョン、インスタンスステータスチェック、オペレーティングシステム設定、デフォルトホスト管理設定、ハイブリッドアクティベーションが含まれます。従来はネットワーク接続のみが診断対象でした。Systems Managerの統合コンソールで診断を実行すると、各カテゴ

---

### 関連する最近の動向

- **AWS Systems Manager User Guide - Diagnosing EC2 category types**
  [詳細](https://docs.aws.amazon.com/systems-man...

---

## 変更内容・新機能

AWS Systems Managerの診断機能が拡張され、EC2インスタンスやハイブリッドアクティベートノードが管理対象にならない6つの追加カテゴリの問題を特定できるようになりました。新しい診断対象には、IAM権限、SSMエージェントのバージョン、インスタンスステータスチェック、オペレーティングシステム設定、デフォルトホスト管理設定、ハイブリッドアクティベーションが含まれます。従来はネットワーク接続のみが診断対象でした。Systems Managerの統合コンソールで診断を実行すると、各カテゴリで見つかった具体的な問題が報告され、すべての診断結果にステップバイステップの解決ガイダンスが付きます。一部の問題はコンソールからAWS Systems Manager Automationランブックを直接実行して修復できます。この機能はデフォルトで有効なすべてのAWSリージョンで利用可能で、Automationランブックとして実行されるため標準のAutomation利用料金が適用されます。

---

## まとめ

- AWS Systems Manager now diagnoses more issues that cause EC2 instances to be unmanaged について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/systems-manager-diagnoses-ec2-unmanaged/)

### 関連情報

- [AWS Systems Manager User Guide - Diagnosing EC2 category types](https://docs.aws.amazon.com/systems-manager/latest/userguide/diagnosing-ec2-category-types.html)
- [Automate installing AWS Systems Manager agent on unmanaged Amazon EC2 nodes](https://aws.amazon.com/blogs/mt/automate-installing-ssm-agent-on-unmanaged-ec2-instances-in-an-aws-organization)
- [AWS Systems Manager Hybrid Activations](https://docs.aws.amazon.com/systems-manager/latest/userguide/activations.html)
- [Managing nodes in hybrid and multicloud environments with Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-hybrid-multicloud.html)
- [AWS Systems Manager pricing](https://aws.amazon.com/systems-manager/pricing/)