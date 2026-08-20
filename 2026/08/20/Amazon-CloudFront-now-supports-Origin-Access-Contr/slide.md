---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudFront が Amazon S3 マルチリージョンアクセスポイント向け Origin Access Control に対応

**発表日: 2026年8月20日**

---

## 概要

### このアップデートで何が変わったか

- **CloudFront OAC ネイティブ対応**: Amazon S3 マルチリージョンアクセスポイント（MRAP）に対して Origin Access Control（OAC）がネイティブにサポートされました
- **Lambda@Edge 不要**: カスタム Lambda@Edge 関数を使用せずに SigV4a 署名が自動的に行われます
- **セキュアなアクセス制御**: 指定された CloudFront ディストリビューションからのアクセスのみを許可可能
- **グローバルなパフォーマンス向上**: 高速で耐障害性の高いグローバルコンテンツ配信が実現
- **追加料金なし**: この機能を使用するための追加コストはなし

---

## 前提・背景

### これまでの課題

- 従来は、カスタム Lambda@Edge 関数を使用して非対称署名バージョン 4（SigV4a）認可ヘッダーを計算・転送する必要がありました
- Lambda@Edge の複雑な実装とメンテナンスの負担
- S3 MRAP のセキュアなアクセス制御が複雑だった

### 市場の動向

- グローバルに分散したコンテンツ配信の需要増加
- セキュアで高速なエッジキャッシング機能の要求
- Lambda@Edge などの複雑な実装を避けたい企業ニーズ

---

## 主な機能と改善

### 1. CloudFront OAC for S3 MRAP

- CloudFront がネイティブに S3 MRAP へのリクエストに署名
- SigV4a 認可ヘッダーが自動計算・付加される
- CloudFront ディストリビューションからのアクセスのみを許可する粒度の細かい制御

### 2. 導入方法

- CloudFront コンソール、AWS SDK、AWS CLI、CloudFormation で設定可能
- S3 MRAP エンドポイントを CloudFront オリジンとして設定時に OAC を有効化
- 既存の CloudFront ディストリビューションにも適用可能

---

## 効果・メリット

- **パフォーマンス向上**: キャッシュミス時に最も近いリージョンから高速にコンテンツを取得
- **耐障害性強化**: グローバルに分散したユーザーへのレジリエンスが向上
- **運用効率化**: Lambda@Edge 不要で管理負担を削減
- **セキュリティ強化**: CloudFront ディストリビューションからのアクセスのみに制限
- **コスト最適化**: 追加料金なく利用可能

---

## 利用可能リージョン

### グローバルデプロイ

- **CloudFront 中国リージョンを除く世界中で利用可能**
- すべての CloudFront エッジロケーションで S3 MRAP への OAC アクセスが可能
- リージョン固有の制限なし（中国リージョン除く）

---

## ユースケース

### 1. グローバルなメディア配信

- 世界中のユーザーへの動画・画像コンテンツ配信
- キャッシュミス時に地理的に最も近い S3 バケットから取得
- レイテンシー低下とスループット向上

### 2. エンタープライズコンテンツ配信

- 複数リージョンの S3 バケットからの統一インターフェース
- セキュアなアクセス制御で企業内リソース保護
- 災害復旧・事業継続性の強化

### 3. API & 動的コンテンツ配信

- S3 MRAP を通じた API レスポンスのキャッシング
- 低レイテンシーな API 応答実現
- グローバルスケーラビリティ

---

## 設定例

### CloudFront で S3 MRAP を OAC で保護

```
1. CloudFront ディストリビューションを作成
2. Origin as Custom Origin を選択
3. Domain name に S3 MRAP エンドポイント（*.mrap.accesspoint.s3-global.amazonaws.com）を入力
4. OAC を作成して適用
5. S3 バケットのポリシーを自動更新
```

---

## まとめ

### 主な活用シーン

- **グローバルなコンテンツ配信** を求める企業
- **セキュリティと運用効率** の両立を目指す組織
- **Lambda@Edge 実装の複雑性** を削減したい開発チーム
- **S3 マルチリージョンアクセスポイント** を活用するワークロード

### 推奨される次のステップ

1. 既存の CloudFront + S3 MRAP 構成を確認
2. Lambda@Edge を使用している場合は、OAC への移行を検討
3. 新規プロジェクトでは OAC を標準として採用
4. AWS マネジメントコンソールで OAC の設定をテスト

---

## 参考リソース

- **AWS What's New 記事**: [Amazon CloudFront now supports Origin Access Control (OAC) for Amazon S3 Multi-Region Access Points](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudfront-oac-s3-mrap)
- **Amazon CloudFront ドキュメント**: https://docs.aws.amazon.com/cloudfront/
- **Amazon S3 Multi-Region Access Points**: https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointArns.html
- **CloudFront Origin Access Control**: https://docs.aws.amazon.com/cloudfront/latest/developerguide/private-content-restricting-access-to-origin.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**