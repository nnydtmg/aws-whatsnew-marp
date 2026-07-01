# Amazon GuardDutyで機密ファイル修正の脅威検知が可能に

Amazon GuardDuty adds sensitive file modification threat detections

**カテゴリ:** What's New
**公開日:** 2026-07-01T16:58:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-guardduty-sfm/)

このページでは、AWS What's Newで発表された「Amazon GuardDuty adds sensitive file modification threat detections」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon GuardDuty Runtime Monitoringは、EC2インスタンスおよびEKS/ECS上のコンテナワークロードにおける機密ファイル修正を検知する3つの新しい脅威検知機能を追加いたしました。本機能により、セキュリティチームは攻撃後の悪意のある活動を識別し、MITRE ATT&CK戦術マッピングと修復推奨事項を得ることができます。

## このアップデートで何が変わったか

- Amazon GuardDuty Runtime Monitoringが、EC2インスタンスおよびEKS/ECS上のコンテナワークロードにおける機密ファイル修正の脅威検知機能を3つ新たに追加いたしました。

## 対象ユーザー

- 本機能は、設定ファイル、認証設定、システムログなどの重要なシステムファイルを監視し、5つの特定のファイル操作（open-for-write、rename、symlink、link、unlink）を直接監視することで、難読化された技術を使用した攻撃も検知可能です。

## 詳細

- Amazon GuardDuty Runtime Monitoringが、EC2インスタンスおよびEKS/ECS上のコンテナワークロードにおける機密ファイル修正の脅威検知機能を3つ新たに追加いたしました。

- 新しい検知機能は「Persistence:Runtime/SensitiveFileModified」「PrivilegeEscalation:Runtime/SensitiveFileModified」「DefenseEvasion:Runtime/SensitiveFileModified」であり、永続的なアクセス維持、権限昇格、検知回避の試みを識別いたします。

- 本機能は、設定ファイル、認証設定、システムログなどの重要なシステムファイルを監視し、5つの特定のファイル操作（open-for-write、rename、symlink、link、unlink）を直接監視することで、難読化された技術を使用した攻撃も検知可能です。

- 相関分析により正当な管理操作と悪意のある動作を区別し、誤検知を削減しながらMITRE ATT&CK戦術マッピングと修復推奨事項を提供いたします。

- 本機能は、Amazon EC2、Amazon EKS、またはAmazon ECSワークロードでGuardDuty Runtime Monitoringを有効にしているすべてのお客様がご利用いただけます。

- 新規ユーザーには30日間の無料試用期間が提供されます。

- セキュリティチーム、DevSecOps専門家、クラウドセキュリティアーキテクトを対象としており、AWS計算環境全体における包括的な脅威可視化が必要なお客様に適しています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-guardduty-sfm/)