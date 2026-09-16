---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS STSがセッショントークンサイズ制限を簡素化し監視機能を追加

AWS STS simplifies session token size limits and adds session token size monitoring

**What's New** | 2026-09-15T22:42:00

---

## 概要

- AWS STSはセッショントークンサイズ制限を簡素化し監視機能を追加しました。
- これにより大きなポリシーとタグの組み合わせを柔軟に利用できるようになります。

---

## 前提・背景

### これまでの課題

AWS Security Token Service (STS) は、セッショントークンのサイズ制限を単一の4,096バイトに統一しました。以前は、セッショントークンサイズと渡されたパラメータ（インラインポリシー、マネージドポリシー、セッションタグ）に対して別々の制限を適用していましたが、その分離を撤廃し、セッションポリシーとセッションタグのより大きな組み合わせに柔軟性を提供します。

---

### 関連する最近の動向

- **AWS STS simplifies session token size limits and adds session token size monitoring**
  [詳細](https://aws.amazon.com/blogs/security/aws-sts-simplifies-session-token-size...

---

## 変更内容・新機能

主な変更点:
- 制限の統一: packed policyサイズと組み立て済みトークンサイズの2つの制限を、組み立て済みセッショントークン4,096バイトの単一制限に統合。PackedPolicyTooLargeExceptionは継続使用されるため既存のエラーハンドリングはSDK更新不要。
- サイズ可視化: SessionTokenSize（バイト数）とSessionTokenUtilization（利用率%）をAPIレスポンスに追加。PackedPolicySizeは後方互換のためSessionTokenUtilizationと同じ値を返す。CloudWatchのAWS/STS名前空間にSessionTokenSizeとSessionTokenMaxSizeを公開。CloudTrailイベントにも記録。
- テスト機能: MinimumSessionTokenSizeパラメータで指定サイズ以上のトークンを生成し、インフラの対応上限を検証可能。

4,096バイトは現在の最大値であり恒久的な上限ではない。新しいコンテキストキー、監査メタデータ、耐量子暗号署名などの追加により将来拡張

---

## まとめ

- AWS STS simplifies session token size limits and adds session token size monitoring について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts/)

### 関連情報

- [AWS STS simplifies session token size limits and adds session token size monitoring](https://aws.amazon.com/blogs/security/aws-sts-simplifies-session-token-size-limits-and-adds-session-token-size-monitoring)
- [AWS STS Unifies Session Token Limit at 4,096 Bytes and Adds Size Monitoring](https://mallory.ai/stories/01a0a757-a61f-73a0-903d-2caed3f8a159)
- [AWS STS simplifies session token size limits and adds session token size monitoring - Reddit](https://www.reddit.com/r/aws/comments/1whgugi/aws_sts_simplifies_session_token_size_limits_and)
- [Pass session tags in AWS STS - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html)