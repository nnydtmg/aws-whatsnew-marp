# AWS IAMがTrusted Identity Propagationを拡張しIdentity Centerを簡素化

AWS IAM extends trusted identity propagation to IAM federation and IAM Roles Anywhere, and simplifies it in IAM Identity Center

**カテゴリ:** What's New
**公開日:** 2026-11-25T06:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-iam/)

このページでは、AWS What's Newで発表された「AWS IAM extends trusted identity propagation to IAM federation and IAM Roles Anywhere, and simplifies it in IAM Identity Center」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWSは信頼されたアイデンティティ伝播（Trusted Identity Propagation / TIP）をIAMフェデレーションおよびIAM Roles Anywhereへ拡張し、IAM Identity Centerの体験を簡素化しました。これにより、ヒューマンやワークロードのアイデンティティをIAMポリシーでのアクセス制御とCloudTrail監査に利用できます。IAMアウトバウンドフェデレーションでは、TIP情報を含むAWS署名付きJWTを外部サービスに提供できます。

## このアップデートで何が変わったか

主な変更内容:
- IAMフェデレーション: SAMLアサーションまたはOIDCトークンから人間・ワークロードアイデンティティと、リスクスコアやCI/CDワークフロー名など任意のランタイムクレームをロールセッションへマッピング可能。
- IAM Roles Anywhere: X.509証明書由来のアイデンティティにTIPを適用可能。
- IAM Identity Center: アイデンティティソースが提供するユーザー名を、IAM Identity Centerが生成するユーザーIDと並行して追加。アプリケーションとAWSアカウントの両方で均一に伝播。
- IAMアウトバウンドアイデンティティフェデレーション: TIPセッションからのアイデンティティ情報を含むAWS署名付きJWTをリクエスト可能。外部サービスが発行元の人間ユーザーまたはワークロードを識別できる。
- アイデンティティはIAMロール間およびAWSサービス間で保持され、ロールごとの信頼ポリシー更新は不要。

利用可能リージョン:
- すべての商用AWSリージョン
- AWS GovCloud (US) リージョン
- A

## 対象ユーザー

Trusted identity propagation (TIP)は、人間ユーザーまたはワークロードのアイデンティティをサポート対象のAWSサービスへのリクエストとともに携帯する機能です。お客様はそのアイデンティティをIAMポリシーの条件によるアクセス制御に使用でき、AWS CloudTrailで発行元の人間ユーザーまたはワークロードを特定できます。

## 詳細

Trusted identity propagation (TIP)は、人間ユーザーまたはワークロードのアイデンティティをサポート対象のAWSサービスへのリクエストとともに携帯する機能です。お客様はそのアイデンティティをIAMポリシーの条件によるアクセス制御に使用でき、AWS CloudTrailで発行元の人間ユーザーまたはワークロードを特定できます。

主な変更内容:
- IAMフェデレーション: SAMLアサーションまたはOIDCトークンから人間・ワークロードアイデンティティと、リスクスコアやCI/CDワークフロー名など任意のランタイムクレームをロールセッションへマッピング可能。
- IAM Roles Anywhere: X.509証明書由来のアイデンティティにTIPを適用可能。
- IAM Identity Center: アイデンティティソースが提供するユーザー名を、IAM Identity Centerが生成するユーザーIDと並行して追加。アプリケーションとAWSアカウントの両方で均一に伝播。
- IAMアウトバウンドアイデンティティフェデレーション: TIPセッションからのアイデンティティ情報を含むAWS署名付きJWTをリクエスト可能。外部サービスが発行元の人間ユーザーまたはワークロードを識別できる。
- アイデンティティはIAMロール間およびAWSサービス間で保持され、ロールごとの信頼ポリシー更新は不要。

対象顧客:
- IAMフェデレーション、IAM Roles Anywhere、IAM Identity Centerを利用するお客様
- アイデンティティベースのアクセス制御とCloudTrail監査を必要とするお客様
- 外部サービスでの発行元識別が必要なお客様

利用可能リージョン:
- すべての商用AWSリージョン
- AWS GovCloud (US) リージョン
- AWS European Sovereign Cloud (Germany) リージョン

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-iam/)