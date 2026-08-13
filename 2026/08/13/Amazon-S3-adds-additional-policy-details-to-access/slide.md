---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3 がアクセス拒否エラーメッセージにポリシー詳細を追加

Amazon S3 adds additional policy details to access denied error messages

**What's New** | 2026-08-13

---

## 概要

- Amazon S3のアクセス拒否エラーメッセージに特定のIAMおよびAWS Organizationsポリシーの ARNが表示されるようになり、アクセス拒除の原因となっているポリシーを迅速に特定できるようになりました。
- この機能は全AWSリージョンで利用可能であり、トラブルシューティングの効率性を大幅に向上させます。

---

## 前提・背景

### これまでの課題

- アクセス拒否エラー発生時、どのポリシーが原因かを特定するのが困難
- 同じタイプの複数のポリシーが存在する場合、各ポリシーを手動で検査する必要があった
- トラブルシューティングに時間がかかっていた

### 市場の動向

AWSサービスの複雑化に伴い、IAMおよびOrganizations ポリシー管理の透明性が求められている状況です。

---

## 変更内容・新機能

### 対応するポリシータイプ

- **Service Control Policies (SCP)**
- **Resource Control Policies (RCP)**
- **アイデンティティベースのポリシー**
- **セッションポリシー**
- **権限の境界**

### 対応スコープ

- 同一アカウント内のリクエスト
- 同一組織内のリクエスト
- 明示的な拒否ケース

---

## 効果・メリット

- **高速なトラブルシューティング**: エラーメッセージに特定のポリシーARNが表示される
- **原因特定の容易化**: 複数ポリシー存在時も直接該当ポリシーを特定可能
- **作業効率の向上**: 手動検査の手間が大幅に削減
- **グローバル対応**: 全AWSリージョン、AWS GovCloud (US)、AWSチャイナリージョンで利用可能

---

## ユースケース

### シナリオ1: マルチアカウント環境

複数のAWSアカウントを管理する場合、Organization Policyで設定されているSCPが原因でアクセスが拒否されることがあります。ARNが表示されることで、どのOrganization ポリシーが影響しているかを即座に判断できます。

### シナリオ2: コンプライアンス管理

セキュリティ要件に基づいて設定された権限の境界により、アクセスが制限される場合があります。ポリシーARNが明示されることで、コンプライアンス要件との紐付けが容易になります。

---

## まとめ

### 主な改善点

- アクセス拒否エラーメッセージに**ポリシーARNを直接表示**
- **複数ポリシー環境での迅速な原因特定**
- **全リージョンで利用可能**

### 次のステップ

1. 現在の IAM ポリシー構成を確認
2. 本番環境でのエラーメッセージ改善を検証
3. トラブルシューティングプロセスの最適化

---

## 参考リソース

- **元記事**: [Amazon S3 adds additional policy details to access denied error messages](https://aws.amazon.com/about-aws/whats-new/2026/08/s3-additional-policy-details-access-denied-error-messages/)
- **関連**: [AWS introduces additional policy details to access denied error messages](https://aws.amazon.com/about-aws/whats-new/2026/01/additional-policy-details-access-denied-error)
- **AWS Security Blog**: [Enhanced access denied error messages with policy ARNs](https://aws.amazon.com/blogs/security/enhanced-access-denied-error-messages-with-policy-arns/)
- **IAM ドキュメント**: [Troubleshoot access denied error messages](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**