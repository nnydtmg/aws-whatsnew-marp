---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudFront が Viewer mTLS の OCSP 失効確認をサポート

クライアント証明書の自動失効検証で高いセキュリティ要件に対応

**発表日: 2026年5月14日**

---

## 概要

### 主な変更点

- **OCSP 失効確認機能が利用可能に**
  - CloudFront が Viewer mTLS でクライアント証明書のリアルタイム失効検証に対応
  - 接続確立時に認証局から直接失効状態を確認

- **セキュリティ要件の充実**
  - 規制業界向けの高度なセキュリティ対応
  - ゼロトラストアーキテクチャに対応

---

## 前提・背景

### これまでの課題

- **手動管理の負担**
  - CloudFront Functions と KeyValueStore を使用して静的な失効リストを手動で管理
  - 失効情報の更新遅延が発生
  - 管理の複雑化とコスト増加

- **セキュリティ要件への対応**
  - 規制業界では動的な失効検証が必須
  - ゼロトラストアーキテクチャでのセキュリティ強化が急務

### CloudFront mTLS の進化

- 2026年2月: Origin mTLS サポート開始
- 2026年5月: Viewer mTLS の OCSP 失効確認機能を追加

---

## 主な機能と改善

### 1. リアルタイム OCSP 失効確認

- **自動検証プロセス**
  - クライアント証明書に埋め込まれたレスポンダー URL をクエリ
  - 認証局に直接失効状態を確認
  - 接続確立前に検証完了

### 2. パフォーマンス最適化

- **OCSP レスポンスのキャッシング**
  - 最大 30 分間キャッシュ
  - 後続接続でのレイテンシー影響を最小化
  - エッジでの高速処理

### 3. CloudFront Connection Function との統合

- **OCSP 結果の公開**
  - 関数内で検証結果にアクセス可能
  - カスタムロジック実装が容易

---

## 利用可能な機能

### カスタムロジックの実装例

- **証明書ローテーション猶予期間**
  - 失効後の一時的なアクセス許可

- **IP ベースの例外処理**
  - 特定の IP アドレスからの接続を優先

- **独自失効リストとの組み合わせ**
  - OCSP + 内部リストの二重チェック

### 料金

- ✅ **追加費用なし**で利用可能
- 既存の CloudFront 料金体系に含まれる

---

## 効果・メリット

### セキュリティ面

- 📌 **リアルタイムな失効検証**
  - 失効証明書による不正アクセスを即座に防止

- 📌 **規制要件への準拠**
  - PCI-DSS、HIPAA など厳格な規制対応
  - 監査ログの完全性確保

- 📌 **ゼロトラストセキュリティ実現**
  - 常に証明書の有効性を検証
  - "信頼できない" を前提にした設計

### 運用面

- 🔧 **管理負担の削減**
  - CloudFront Functions による静的リスト管理が不要
  - 失効情報の自動更新

- 🚀 **パフォーマンス維持**
  - キャッシング機構で低レイテンシーを実現
  - グローバル展開でも高速応答

---

## ユースケース

### 1. 金融機関

- API ゲートウェイの高度なセキュリティ
- PCI-DSS / FISC 対応
- クライアント証明書ベースの厳密な認証

### 2. ヘルスケア

- HIPAA 準拠の実現
- 患者データの厳格なアクセス制御
- 監査証跡の完全性

### 3. 政府・公共機関

- 国家セキュリティ要件への対応
- 行政サービスの信頼性確保
- ゼロトラストアーキテクチャ実装

---

## 技術仕様

### OCSP 検証プロセス

```
[クライアント] --TLS Handshake--> [CloudFront]
                                    |
                                    v
                            [CloudFront 検証ロジック]
                                    |
                            OCSP レスポンダー URL 抽出
                                    |
                                    v
                          [認証局 OCSP レスポンダー]
                                    |
                    失効状態を照会・キャッシュ
                                    |
                                    v
                          接続許可/拒否判定
```

### キャッシング

- TTL: 最大 30 分
- エッジロケーション単位で管理
- 後続接続の高速化

---

## 実装のポイント

### 導入前に確認すべき事項

- ✓ クライアント証明書の OCSP レスポンダー URL 確認
- ✓ CloudFront Connection Function の設計
- ✓ ロギング・監視の設定
- ✓ フェイルオーバー戦略の検討

### Connection Function での処理例

```javascript
// OCSP 検証結果の利用
if (request.clientCertificate.ocsp.revoked) {
  return { statusCode: 403 }; // 接続拒否
}

// カスタムロジック（例）
if (request.clientCertificate.ocsp.nextUpdate < threshold) {
  // ロギング: 失効情報が古い
}
```

---

## まとめ

### 主な利点

1. ✨ **セキュリティの強化**
   - リアルタイム失効検証で不正アクセスを防止
   - 規制要件への準拠を実現

2. ✨ **運用の簡素化**
   - 静的リスト管理から解放
   - 自動化による効率化

3. ✨ **グローバルスケール**
   - エッジでの高速処理
   - 低レイテンシーを維持

### 次のステップ

1. 既存の CloudFront mTLS 構成を確認
2. OCSP 対応の認証局と連携
3. Connection Function のロジック設計
4. ステージング環境での検証
5. 本番環境への段階的展開

---

## 参考リソース

### AWS 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-ocsp/
- **CloudFront Viewer mTLS**: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/mtls-authentication.html
- **CloudFront Origin mTLS**: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-mtls-authentication.html
- **Connection Functions**: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/concepts-cloudfront-functions.html

### 関連情報

- **OCSP (Online Certificate Status Protocol)** - RFC 6960
- **Zero Trust Architecture** - NIST SP 800-207

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**