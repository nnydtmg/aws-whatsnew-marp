# Amazon CloudFront が Viewer mTLS の OCSP 失効確認をサポート

Amazon CloudFront announces support for OCSP Revocation for Mutual TLS (Viewer)

**カテゴリ:** What's New
**公開日:** 2026年5月14日
**元記事:** https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-ocsp/

---

## 要約

Amazon CloudFront がViewer mTLS（相互 TLS 認証）に対するOCSP失効確認機能をサポートするようになりました。これにより、クライアント証明書の失効状態をリアルタイムで検証できるようになります。この機能は、規制業界やゼロトラストアーキテクチャを採用している組織にとって、セキュリティ要件を満たすための重要なアップデートとなります。

---

## 主な変更点

### OCSP 失効確認が利用可能に

- **CloudFront が Viewer mTLS でクライアント証明書のリアルタイム失効検証に対応**
  - 接続確立時に認証局から直接失効状態を確認
  - 従来のように静的な失効リストを手動で管理する必要がなくなる

### セキュリティ要件への対応強化

- **規制業界向けの高度なセキュリティ対応**
  - PCI-DSS、HIPAA などの厳格な規制に対応
  - 失効証明書によるアクセスを即座に防止

- **ゼロトラストアーキテクチャに対応**
  - 常に証明書の有効性を検証する仕組み
  - "信頼できない" を前提にした設計を実現

---

## これまでの課題

### 手動管理の負担が大きかった

- CloudFront Functions と KeyValueStore を使用して静的な失効リストを手動で管理
- 失効情報の更新遅延が発生し、セキュリティ面でのリスク
- 管理の複雑化とコスト増加

### セキュリティ要件への対応が困難

- 規制業界では動的な失効検証が必須
- ゼロトラストアーキテクチャでのセキュリティ強化が急務

---

## 新機能の詳細

### 1. リアルタイム OCSP 失効確認

**自動検証プロセス**

- CloudFront がクライアント証明書に埋め込まれたレスポンダー URL をクエリ
- 認証局に直接失効状態を確認
- 接続確立前に検証が完了

**メリット**

- 手動管理が不要になる
- 失効状態がリアルタイムに反映される
- セキュリティ性の大幅向上

### 2. パフォーマンス最適化

**OCSP レスポンスのキャッシング**

- OCSP レスポンスは最大 30 分間キャッシュ
- 後続接続でのレイテンシー影響を最小化
- エッジロケーションでの高速処理を実現

### 3. CloudFront Connection Function との統合

**柔軟なカスタムロジック実装**

- OCSP 検証結果が Connection Function で公開される
- カスタムロジック（例えば、証明書ローテーション猶予期間、IP ベースの例外、独自の失効リストとの組み合わせ）を実装可能

---

## ユースケース

### 1. 金融機関

- **API ゲートウェイの高度なセキュリティ確保**
- **PCI-DSS / FISC 準拠**
- クライアント証明書ベースの厳密な認証

### 2. ヘルスケア

- **HIPAA 準拠の実現**
- **患者データの厳格なアクセス制御**
- 監査証跡の完全性確保

### 3. 政府・公共機関

- **国家セキュリティ要件への対応**
- **行政サービスの信頼性確保**
- ゼロトラストアーキテクチャ実装

---

## 料金

- ✅ **追加費用なし**で利用可能
- 既存の CloudFront 料金体系に含まれる

---

## 実装のポイント

### 導入前に確認すべき事項

1. **クライアント証明書の OCSP レスポンダー URL 確認**
   - 使用している認証局から取得可能

2. **CloudFront Connection Function の設計**
   - OCSP 検証結果をどのように活用するかを事前に検討

3. **ロギング・監視の設定**
   - OCSP エラーやキャッシュ状況を監視

4. **フェイルオーバー戦略の検討**
   - OCSP レスポンダーへのアクセス失敗時の対応

### 推奨される展開方法

1. 既存の CloudFront mTLS 構成を確認
2. OCSP 対応の認証局と連携
3. Connection Function のロジック設計と検証
4. ステージング環境での検証
5. 本番環境への段階的展開

---

## 効果・メリット

### セキュリティ面での効果

- 📌 **リアルタイムな失効検証**
  - 失効証明書による不正アクセスを即座に防止

- 📌 **規制要件への準拠**
  - PCI-DSS、HIPAA など厳格な規制対応
  - 監査ログの完全性確保

- 📌 **ゼロトラストセキュリティ実現**
  - 常に証明書の有効性を検証
  - "信頼できない" を前提にした設計

### 運用面での効果

- 🔧 **管理負担の削減**
  - CloudFront Functions による静的リスト管理が不要
  - 失効情報の自動更新

- 🚀 **パフォーマンス維持**
  - キャッシング機構で低レイテンシーを実現
  - グローバル展開でも高速応答

---

## 参考リンク

### AWS 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-ocsp/
- **CloudFront Viewer mTLS**: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/mtls-authentication.html
- **CloudFront Origin mTLS**: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-mtls-authentication.html
- **Connection Functions**: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/concepts-cloudfront-functions.html

### 関連情報

- OCSP (Online Certificate Status Protocol) - RFC 6960
- Zero Trust Architecture - NIST SP 800-207
