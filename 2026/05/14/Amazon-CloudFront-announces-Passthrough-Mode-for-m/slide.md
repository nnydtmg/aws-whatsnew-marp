---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudFront の mTLS パススルーモード対応

Amazon CloudFront announces Passthrough Mode for mutual TLS (Viewer)

**発表日: 2026年5月14日**

---

## 概要

- Amazon CloudFrontがビューアー相互TLSのパススルーモードを新たに発表いたしました。
- このモードにより、既存のmTLS検証インフラストラクチャをオリジンで保有されているお客様は、CloudFront側での検証ロジック実装なしに、クライアント証明書をオリジンに転送し、エンドツーエンドの認証を実現できるようになります。

---

## 前提・背景

### mTLS認証の進化

- Amazon CloudFrontは、以前よりビューアーからのmTLS認証に対応
- 2026年1月には、オリジン側へのmTLS認証対応を実装
- 今回、さらにパススルーモードで柔軟性を拡大

### 既存の課題

- CloudFront側でもmTLS検証を実装する必要があった
- 検証ロジックの二重実装が発生
- オリジン側の既存mTLS実装の活用が制限されていた

---

## 主な機能

### パススルーモードの特徴

- **証明書の転送**: CloudFrontがクライアント証明書の検証を行わず、そのままオリジンに転送
- **完全な証明書チェーン**: クライアントの完全な証明書チェーンをオリジンに送信
- **エンドツーエンド認証**: 各リクエストがオリジンにより直接認証される

### キャッシングと接続機能

- **キャッシング無効**: パススルーモードではキャッシング機能は無効
- **接続機能**: 接続レベルのデータ検査・変換は引き続き利用可能
- **柔軟な処理**: オリジン到達前に証明書データの処理が可能

---

## 利用メリット

### セキュリティの向上

- **ゼロトラスト実現**: CloudFront～オリジン間でエンドツーエンド認証
- **既存資産の活用**: オリジン側の既存mTLS実装をそのまま利用可能
- **検証ロジックの統一**: オリジン側のみで認証ロジックを管理

### 運用の簡素化

- **実装の削減**: CloudFront側での検証ロジック実装が不要
- **保守性向上**: 認証ロジックの一元管理
- **追加費用なし**: 新機能は追加費用なしで利用可能

---

## ユースケース

### 金融機関

- オリジン側に厳密なmTLS認証インフラを構築済み
- CloudFrontを追加する際、既存の認証体制をそのまま利用

### エンタープライズ企業

- 複数のオリジンサーバー間で一貫したmTLS認証を実装
- CloudFront経由でも同一の認証ポリシーを適用

### マイクロサービス環境

- サービス間通信のセキュリティ強化
- CloudFrontを統一エントリーポイントとして利用

---

## まとめ

### Amazon CloudFront mTLS パススルーモードの価値

- **段階的な拡張**: ビューアー認証 → オリジン認証 → パススルーモード
- **既存投資の活用**: オリジン側のmTLS実装をそのまま活用
- **ゼロトラスト実現**: エンドツーエンドのセキュアな通信を実現
- **シンプルな運用**: 認証ロジックの統一管理で運用負荷を削減

### 次のステップ

1. オリジン側のmTLS対応状況を確認
2. CloudFront distributions の設定を確認・更新
3. パススルーモードへの移行を検討・テスト
4. 本番環境への段階的デプロイ

---

## 参考リソース

### 元記事

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-passthrough/

### 関連情報

- **Amazon CloudFront mutual TLS support for origins**: https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-cloudfront-mutual-tls-for-origins/
- **CloudFront mTLS Authentication Blog**: https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-now-supports-mtls-authentication-to-origins/
- **Amazon CloudFront ドキュメント**: https://docs.aws.amazon.com/AmazonCloudFront/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**