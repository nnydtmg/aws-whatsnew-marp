# Amazon CloudFront が Amazon S3 マルチリージョンアクセスポイント向け Origin Access Control に対応

Amazon CloudFront now supports Origin Access Control (OAC) for Amazon S3 Multi-Region Access Points

**カテゴリ:** What's New
**公開日:** 2026-08-20T18:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudfront-oac-s3-mrap)

このページでは、AWS What's Newで発表された「Amazon CloudFront now supports Origin Access Control (OAC) for Amazon S3 Multi-Region Access Points」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

CloudFront が Amazon S3 マルチリージョンアクセスポイント（MRAP）に対して Origin Access Control（OAC）をネイティブにサポートするようになり、カスタム Lambda@Edge 関数を使用せずにセキュアで高速なグローバルコンテンツ配信が可能になりました。このアップデートにより、グローバルに分散したユーザーへのパフォーマンスと耐障害性が向上し、追加料金なくご利用いただけます。

---

## このアップデートで何が変わったか

### 技術的な改善

- **CloudFront OAC ネイティブ対応**: Lambda@Edge 不要で SigV4a 署名が自動実行される
- **セキュアなアクセス制御**: 指定された CloudFront ディストリビューションからのアクセスのみを許可
- **設定の簡素化**: CloudFront コンソール、SDK、CLI、CloudFormation で設定可能

### パフォーマンスの向上

- キャッシュミス時に最も近いリージョンから高速にコンテンツを取得
- グローバルに分散したユーザーのパフォーマンスと耐障害性が向上

---

## 以前の方法との比較

### 従来の方法（Lambda@Edge 使用）

1. CloudFront が S3 MRAP へリクエストを受け取る
2. Lambda@Edge 関数を起動して SigV4a 認可ヘッダーを計算
3. カスタム認可ヘッダーを付加してリクエストを転送
4. 追加の計算リソースとメンテナンスが必要

### 新しい方法（CloudFront OAC）

1. CloudFront が S3 MRAP へリクエストを受け取る
2. CloudFront がネイティブに SigV4a 署名を実行
3. 認可ヘッダーを自動付加してリクエストを転送
4. Lambda@Edge 不要で実装が簡単

---

## 詳細

### CloudFront OAC for S3 MRAP の機能

- CloudFront が Amazon S3 マルチリージョンアクセスポイント（MRAP）に対して Origin Access Control（OAC）をサポート
- CloudFront OAC を使用することで、指定された CloudFront ディストリビューションからのアクセスのみを許可して S3 MRAP オリジンを保護
- CloudFront が S3 MRAP オリジンへのリクエストにネイティブに署名するため、カスタム認可ヘッダー計算が不要

### パフォーマンス上のメリット

- キャッシュミス時に最も近いリージョンからより高速にコンテンツを取得
- グローバルに分散したユーザーのパフォーマンスと耐障害性が向上

### 利用可能範囲

- 利用可能リージョン: CloudFront 中国リージョンを除く世界中
- 追加料金なし

### 設定方法

- CloudFront コンソール、AWS SDK、AWS CLI、CloudFormation を使用して、S3 MRAP エンドポイントを CloudFront で設定する際に OAC を有効にできます

### 対象ユースケース

- グローバルなコンテンツ配信とセキュリティを必要とするお客様
- Lambda@Edge の複雑な実装を避けたい組織
- 複数リージョンの S3 バケットから統一インターフェースでコンテンツを配信したいユーザー

---

## ユースケース

### 1. グローバルなメディア配信

マルチリージョンの S3 バケットに保存された動画・画像を世界中のユーザーに配信する場合、CloudFront OAC を使用することで:
- CloudFront キャッシュのヒット率向上
- キャッシュミス時に地理的に最も近い S3 バケットから取得
- レイテンシー低下とスループット向上を実現

### 2. エンタープライズコンテンツ配信

複数リージョンの S3 バケットからのセキュアなコンテンツ配信:
- CloudFront ディストリビューションからのアクセスのみを許可
- 企業内リソースの保護強化
- 災害復旧・事業継続性の強化

### 3. API & 動的コンテンツ配信

S3 MRAP を通じた API レスポンスのキャッシング:
- 低レイテンシーな API 応答実現
- グローバルスケーラビリティの実現

---

## 設定方法

### CloudFront ディストリビューションでの設定

1. **CloudFront ディストリビューションを作成**
2. **Origin を設定**:
   - Domain name に S3 MRAP エンドポイント（*.mrap.accesspoint.s3-global.amazonaws.com）を入力
   - Origin type を "Custom Origin" として設定
3. **OAC を作成・適用**:
   - Origin Access Control を作成
   - CloudFront ディストリビューションに適用
4. **S3 バケットポリシーの自動更新**
   - CloudFront OAC が S3 バケットポリシーを自動更新

---

## 参考リソース

- **AWS What's New 記事**: [Amazon CloudFront now supports Origin Access Control (OAC) for Amazon S3 Multi-Region Access Points](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudfront-oac-s3-mrap)
- **Amazon CloudFront ドキュメント**: https://docs.aws.amazon.com/cloudfront/
- **Amazon S3 Multi-Region Access Points**: https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointArns.html
- **CloudFront Origin Access Control**: https://docs.aws.amazon.com/cloudfront/latest/developerguide/private-content-restricting-access-to-origin.html

---

## まとめ

CloudFront が S3 MRAP に対する OAC ネイティブサポートを追加したことで、グローバルなコンテンツ配信がより簡単、セキュア、効率的になりました。Lambda@Edge の複雑な実装なしに、SigV4a 署名を自動的に実行し、世界中のユーザーに高速なコンテンツを配信できます。