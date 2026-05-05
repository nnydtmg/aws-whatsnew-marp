---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon WorkSpaces Applications
ホストからクライアントへのURL リダイレクション機能

**発表日: 2026年5月4日**

---

## 概要

### URL リダイレクション機能の主な特徴

- **ローカルブラウザ起動**: ストリーミングセッション内のURLがユーザーのローカルブラウザで自動的に起動
- **インフラ負荷軽減**: ストリーミングインフラストラクチャの負荷を軽減
- **コスト削減**: 帯域幅集約的なワークロードをローカルデバイスにシフト
- **セキュリティ維持**: セキュリティを保ちながらコスト効率を改善

---

## 前提・背景

### 市場の動向

- Amazon WorkSpaces製品ファミリーのリダイレクション機能が継続的に拡張中
- 2026年1月: プリンタリダイレクション機能を発表
- WebAuthnリダイレクション: セキュリティ向上のための認証機能
- ファイルシステムリダイレクション: データの柔軟なハンドリング

### 導入の課題

- クラウドデスクトップでのリソース効率化のニーズ
- ストリーミングインフラのコスト最適化が重要
- ローカルリソースの活用による性能向上

---

## 変更内容・新機能

### ホストからクライアントへのURL リダイレクション

- **自動URL起動**: ストリーミングセッションからのURLがローカルブラウザで自動起動
- **ポリシー設定**: AWS Management Consoleから許可/拒否パターンを設定可能
- **アプリケーション対応**: ブラウザナビゲーション、Microsoft Wordなどで動作
- **ブラウザサポート**: ChromeおよびEdge ウェブブラウザに対応

### セキュアなオフロード機能

- **選別的なオフロード**: 機密アプリはストリーミング環境内、動画などはローカル処理
- **ビデオストリーミング最適化**: リソース集約的なコンテンツをローカルで処理
- **環境の分離**: 機密性の高いアプリケーションはクラウド側に保持

---

## 対応環境

### 利用可能なリージョン

- 複数のAWSリージョンで利用可能
- グローバル展開対応

### 互換性

- Chrome ウェブブラウザ: ✅ 対応
- Edge ウェブブラウザ: ✅ 対応
- WorkSpaces Applications: 最新版が必須

---

## 効果・メリット

### インフラストラクチャコスト削減

- ストリーミングインフラの負荷軽減
- 帯域幅集約的なワークロードの削減
- スケーリング要件の最適化

### ユーザーエクスペリエンス向上

- より高速なレスポンス（ローカル処理の活用）
- 低遅延のブラウジング体験
- リソース利用の最適化

### セキュリティと効率のバランス

- セキュリティ要件を維持しながらコスト効率化
- きめ細かなアクセス制御ポリシー

---

## ユースケース

### 推奨される組織

- **ストリーミングコスト最適化が必要な企業**: インフラコストの削減を検討中
- **動画コンテンツを多用する業界**: メディア、エンターテイメント、教育
- **セキュアなデスクトップが必須**: 金融、医療、法律事務所
- **帯域幅管理が課題**: リモートオフィスが多い企業

### 活用シーン

- ビデオ会議や動画再生のローカル処理
- 社内ポータルのブラウザ閲覧
- リソース集約的なコンテンツの効率化

---

## まとめ

### Amazon WorkSpaces Applications URL リダイレクション

- ストリーミングセッション内のURLをローカルブラウザで自動起動
- インフラコストを削減しながらセキュリティを維持
- 複数リージョンで利用可能
- Chrome/Edge ブラウザでサポート

### 次のステップ

1. 自社のワークロード分析
2. パイロットプロジェクトの実施
3. ポリシー設定とテスト
4. 本番環境への展開

---

## 参考リソース

### 公式情報

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-workspaces-applications-url/
- **Amazon WorkSpaces**: https://aws.amazon.com/workspaces/
- **Amazon AppStream 2.0**: https://aws.amazon.com/appstream2/

### 関連記事

- **デバイスリダイレクション簡素化**: https://aws-news.com/article/2025-07-17-simplify-device-redirection-in-amazon-workspaces-personal-and-amazon-appstream-20-using-fabulatech-software
- **プリンタリダイレクション**: https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-workspaces-advanced-printer-redirection/
- **WebAuthn セキュリティ**: https://aws.amazon.com/blogs/desktop-and-application-streaming/enhancing-security-with-webauthn-redirection-in-amazon-workspaces/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
