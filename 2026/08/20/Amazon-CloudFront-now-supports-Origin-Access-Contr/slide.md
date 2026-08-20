---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudFront が Amazon S3 マルチリージョンアクセスポイント用 OAC に対応

セキュアで高速なグローバルコンテンツ配信を実現

**発表日: 2026年8月20日**

---

## 概要

### 新機能のポイント

- **CloudFront OAC のネイティブ対応**: Amazon S3 マルチリージョンアクセスポイント（MRAP）に Origin Access Control（OAC）を直接対応
- **Lambda@Edge 不要**: カスタム関数なしでセキュアなアクセス制御を実現
- **高速化と耐障害性向上**: グローバル分散ユーザーへの最適なパフォーマンス
- **追加料金なし**: 既存の CloudFront・S3 の料金体系で利用可能

---

## 前提・背景

### これまでの課題

- CloudFront から S3 MRAP へのアクセス保護が複雑
- カスタム Lambda@Edge 関数が必須
  - 非対称署名バージョン4（SigV4a）認可ヘッダーを手動計算
  - 追加の開発・運用コスト
  - パフォーマンスオーバーヘッド

### グローバルコンテンツ配信の需要

- 複数リージョンでの耐障害性が重要
- 低遅延なコンテンツ配信が必須
- セキュリティと利便性の両立が課題

---

## 主な機能

### 1. Origin Access Control（OAC）のネイティブサポート

- CloudFront ディストリビューションからのアクセスのみを許可
- S3 MRAP オリジンを直接保護
- IAM ベースのセキュアな認可

### 2. 自動署名処理

- CloudFront がネイティブに SigV4a 署名を計算
- カスタム Lambda@Edge 関数が不要
- シンプルな設定で実現

---

## 変更内容・新機能

### 対応範囲

- **地域**: CloudFront 中国リージョンを除く世界中で利用可能
- **設定方法**: 
  - CloudFront コンソール
  - AWS SDK
  - AWS CLI
  - AWS CloudFormation

### パフォーマンス向上

- **キャッシュミス時の最適化**: 最も近いリージョンから高速取得
- **グローバル分散ユーザー対応**: 各地域で最適なレスポンスタイム
- **耐障害性**: 複数リージョンへの自動フェイルオーバー

---

## 効果・メリット

### セキュリティ

- CloudFront を経由したアクセスのみに限定
- 不正なダイレクトアクセスを防止
- IAM ポリシーで細かく制御

### 開発効率

- Lambda@Edge の開発・保守コストを削減
- シンプルな設定で実現
- デバッグが容易

### パフォーマンス

- 低遅延なコンテンツ配信
- グローバルユーザーに最適な応答
- キャッシュヒット率の向上

### コスト

- 追加料金なし
- Lambda@Edge の実行コスト削減
- 運用コストの最小化

---

## ユースケース

### グローバルなメディア配信

- 動画・画像・ドキュメントの高速配信
- 複数リージョンでの耐障害性
- セキュアなアクセス制御

### SaaS アプリケーション

- マルチテナント対応
- テナントごとのデータ分離
- 各地域でのローカル最適化

### エンタープライズコンテンツ管理

- 企業資産の安全な配信
- グローバルオフィス対応
- コンプライアンス要件への対応

---

## まとめ

### 重要なポイント

- **CloudFront が Amazon S3 MRAP 用 OAC をネイティブサポート**
- **Lambda@Edge 関数が不要に**
- **セキュリティとパフォーマンスを同時に実現**
- **追加料金なしで利用可能**

### 次のステップ

1. 既存の CloudFront ディストリビューション設定を確認
2. S3 MRAP への OAC 設定に移行
3. Lambda@Edge 関数の廃止を検討

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudfront-oac-s3-mrap/
- **CloudFront ドキュメント**: https://docs.aws.amazon.com/AmazonCloudFront/
- **S3 Multi-Region Access Points**: https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPoints.html
- **関連資料**: https://github.com/aws-samples/amazon-cloudfront-with-s3-multi-region-access-points

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**