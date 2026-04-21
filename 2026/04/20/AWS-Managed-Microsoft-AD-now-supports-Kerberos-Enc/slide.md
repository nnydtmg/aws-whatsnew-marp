---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Managed Microsoft AD 
Kerberos暗号化監査ログ対応

**発表日: 2026年4月20日**

---

## 概要

### 何が変わったか

- **CloudWatch Logs統合**: Kerberos暗号化監査イベントログ（イベントID 201～209）がCloudWatch Logsに転送可能に
- **暗号化可視化**: RC4とAES暗号化の使用状況を組織全体で可視化
- **戦略策定支援**: セキュリティ要件と互換性に基づいた暗号化戦略の策定が容易に
- **グローバル対応**: 中東（UAE）および中東（バーレーン）地域を除く全AWSリージョンで利用可能

---

## 前提・背景

### Kerberos認証の課題

- **RC4廃止への対応**: Microsoftは2026年にRC4を廃止予定（CVE-2026-20833対応）
- **互換性の複雑性**: 既存システムとの互換性を保ちながらセキュリティを強化する必要性
- **可視化の欠落**: 現在のKerberos暗号化設定が不透明で、アップグレード計画が困難
- **監査要件**: セキュリティコンプライアンスのための暗号化監査ログが必要

### 市場の動向

- **セキュリティ標準化**: AES128/AES256への統一が業界標準に
- **DC（ドメインコントローラ）監査**: Enterprise環境での暗号化監査への要求が高まる

---

## 変更内容・新機能

### 1. Kerberos暗号化監査ログの転送

- **イベントID 201～209**: Kerberos暗号化関連の監査イベント
  - RC4と他の暗号化タイプの使用を検出
  - チケット発行パターンを記録

- **CloudWatch Logs統合**:
  - リアルタイムモニタリング可能
  - CloudWatch Insights でクエリ実行可能
  - 長期保存でコンプライアンス対応

### 2. 設定方法

- **AWS Directory Serviceコンソール** > **Network and Security**タブ
- ワンクリックでログ転送を有効化
- 既存のCloudWatch Logs設定と統合

---

## 効果・メリット

### セキュリティ強化

- **RC4依存の特定**: どのアプリケーション・サービスがRC4を使用しているか明確化
- **段階的マイグレーション**: AES暗号化への移行計画が策定しやすい
- **CVE-2026-20833対応**: Microsoft Kerberos更新への準備が可能

### 運用効率化

- **自動監査ログ収集**: 手動でのログ取得が不要に
- **一元管理**: CloudWatch Dashboard で暗号化状況を一元管理
- **アラート設定**: 非準拠な暗号化使用時に自動通知

### コンプライアンス対応

- **監査証跡**: 暗号化変更の完全な記録が残る
- **レポーティング**: コンプライアンスレポート作成が容易に

---

## ユースケース

### 1. エンタープライズ環境の暗号化戦略

組織全体のKerberos暗号化を可視化し、RC4廃止に向けた計画を立案

- 現状分析: 全サービスの暗号化タイプを集計
- アップグレード計画: 優先度に基づいてAESへの移行スケジュール作成
- リスク軽減: 互換性を保ちながら段階的に実施

### 2. セキュリティ監査・コンプライアンス

定期的な暗号化監査ログ分析でセキュリティ状況を報告

- 月次レポート: 暗号化使用状況の推移を可視化
- 異常検知: 予期しないRC4使用を検出してアラート
- 規制対応: 暗号化監査の完全な監査証跡を提供

---

## 技術詳細

### 監査イベント（Event IDs 201～209）

| イベント | 説明 |
|---------|------|
| 201 | RC4が使用された場合 |
| 202-209 | その他の暗号化タイプ |

### CloudWatch Logs設定

```
ログストリーム: AWS Managed Microsoft AD
フォーマット: JSON（CloudWatch Insights クエリ対応）
保持期間: 設定可能（デフォルト30日）
```

### クエリ例

```
fields @timestamp, eventID, encryptionType
| stats count() by encryptionType
```

---

## まとめ

### 主な価値

1. **可視化**: Kerberos暗号化使用状況の完全な可視化
2. **準備**: CVE-2026-20833対応への完全な準備
3. **効率化**: 監査ログ収集・管理の自動化
4. **セキュリティ**: 段階的で安全な暗号化アップグレード

### 推奨ステップ

1. **即日**: 本番環境でログ転送を有効化
2. **1週間以内**: 現状のKerberos暗号化を分析
3. **1ヶ月以内**: アップグレード計画を策定
4. **段階的**: AES暗号化への移行を実行

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-managed-microsoft-ad-kerberose-encrption-logs/
- **AWS Directory Service ドキュメント**: https://docs.aws.amazon.com/directoryservice/
- **Microsoft Kerberos セキュリティ**: https://techcommunity.microsoft.com/discussions/microsoft-security/kerberos-and-the-end-of-rc4-protocol-hardening
- **CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**