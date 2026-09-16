# AWS STSがセッショントークンサイズ制限を簡素化し監視機能を追加

AWS STS simplifies session token size limits and adds session token size monitoring

**カテゴリ:** What's New
**公開日:** 2026-09-15T22:42:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts/)

このページでは、AWS What's Newで発表された「AWS STS simplifies session token size limits and adds session token size monitoring」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS STSはセッショントークンサイズ制限を簡素化し監視機能を追加しました。これにより大きなポリシーとタグの組み合わせを柔軟に利用できるようになります。

## このアップデートで何が変わったか

主な変更点:
- 制限の統一: packed policyサイズと組み立て済みトークンサイズの2つの制限を、組み立て済みセッショントークン4,096バイトの単一制限に統合。PackedPolicyTooLargeExceptionは継続使用されるため既存のエラーハンドリングはSDK更新不要。
- サイズ可視化: SessionTokenSize（バイト数）とSessionTokenUtilization（利用率%）をAPIレスポンスに追加。PackedPolicySizeは後方互換のためSessionTokenUtilizationと同じ値を返す。CloudWatchのAWS/STS名前空間にSessionTokenSizeとSessionTokenMaxSizeを公開。CloudTrailイベントにも記録。
- テスト機能: MinimumSessionTokenSizeパラメータで指定サイズ以上のトークンを生成し、インフラの対応上限を検証可能。

4,096バイトは現在の最大値であり恒久的な上限ではない。新しいコンテキストキー、監査メタデータ、耐量子暗号署名などの追加により将来拡張

## 対象ユーザー

対象API: AssumeRole, AssumeRoleWithSAML, AssumeRoleWithWebIdentity, GetSessionToken, GetFederationToken

## 詳細

AWS Security Token Service (STS) は、セッショントークンのサイズ制限を単一の4,096バイトに統一しました。以前は、セッショントークンサイズと渡されたパラメータ（インラインポリシー、マネージドポリシー、セッションタグ）に対して別々の制限を適用していましたが、その分離を撤廃し、セッションポリシーとセッションタグのより大きな組み合わせに柔軟性を提供します。

さらに、STSはセッショントークンサイズとトークンサイズ制限に対する利用率（パーセンテージ）を示すレスポンス要素を返すようになりました。これらの値はAWS CloudTrailに記録され、対応するメトリクスがAmazon CloudWatchに公開されます。新しいオプションAPIパラメータ（MinimumSessionTokenSize）により、アプリケーションやインフラが大きなトークンを処理できるかをテストするために、最大4,096バイトまでの大きなセッショントークンを生成できます。

対象API: AssumeRole, AssumeRoleWithSAML, AssumeRoleWithWebIdentity, GetSessionToken, GetFederationToken

主な変更点:
- 制限の統一: packed policyサイズと組み立て済みトークンサイズの2つの制限を、組み立て済みセッショントークン4,096バイトの単一制限に統合。PackedPolicyTooLargeExceptionは継続使用されるため既存のエラーハンドリングはSDK更新不要。
- サイズ可視化: SessionTokenSize（バイト数）とSessionTokenUtilization（利用率%）をAPIレスポンスに追加。PackedPolicySizeは後方互換のためSessionTokenUtilizationと同じ値を返す。CloudWatchのAWS/STS名前空間にSessionTokenSizeとSessionTokenMaxSizeを公開。CloudTrailイベントにも記録。
- テスト機能: MinimumSessionTokenSizeパラメータで指定サイズ以上のトークンを生成し、インフラの対応上限を検証可能。

4,096バイトは現在の最大値であり恒久的な上限ではない。新しいコンテキストキー、監査メタデータ、耐量子暗号署名などの追加により将来拡張される可能性がある。

対象ユーザー: 大きなセッションポリシーやセッションタグを扱うユーザー、セッショントークンを保存・転送するシステム（ロードバランサー、プロキシ、キャッシュ、データベース）を運用するユーザー。

利用可能リージョン: すべての商用AWSリージョン、AWS GovCloud (US) リージョン、AWS European Sovereign Cloud リージョン。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts/)