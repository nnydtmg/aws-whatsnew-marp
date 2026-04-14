---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Quick
Google Drive ナレッジベースのドキュメントレベルアクセス制御対応

**発表日: 2026年4月13日**

---

## 概要

### 3つの主要な変更点

- **ドキュメントレベルアクセス制御（ACL）対応**: Google Driveナレッジベースのドキュメント単位でのアクセス制御が可能に

- **二重検証アプローチ**: インデックス化されたACLと実時間のGoogle Drive権限確認の組み合わせ

- **全リージョン対応**: Amazon Quickが利用可能なすべてのAWSリージョンで利用可能

### セキュアなアクセス管理

- Google Driveのネイティブな権限を維持しながらセキュアに運用
- 古い権限データや不正なマッピングから保護

---

## 前提・背景

### 組織の課題

- Google Driveを知識ベースとして利用する際、アクセス権限の管理が複雑化
- AIアシスタントが適切な権限管理下でドキュメントにアクセスする必要
- ユーザーが無断でアクセスすべきでないドキュメントの露出防止

### エンタープライズの要求

- セキュリティとコンプライアンスの両立
- 効率的かつ予測可能なアクセス制御
- 既存のGoogle Drive権限設定との統合

---

## 主な機能と改善

### 1. インデックス化ACLの活用

- Google Driveのアクセス制御リストをインデックス作成時に複製
- 効率的な事前フィルタリングで高速応答を実現
- パフォーマンスと精度のバランスを最適化

### 2. リアルタイム権限確認

- ユーザーからのクエリ受信時にGoogle Driveで現在の権限を検証
- レスポンス生成前に最新の権限情報を確認
- 権限変更への即座の反映

### 3. ドキュメント単位の制御

- Google Driveの個別ファイル権限を尊重
- フォルダ権限も適切に処理
- Google Driveネイティブな権限構造を維持

---

## セキュリティメリット

- **多層的な保護**: キャッシュされた権限とリアルタイム確認による二重防御
- **データ保護**: 古い権限データからの自動防護
- **整合性確保**: 不正なマッピングの排除
- **監査対応**: 権限変更ログとの統合

---

## ユースケース

### 適用対象の組織

- **大規模組織**: 部門ごとにGoogle Driveを構成し、セキュアに社員に情報提供
- **金融機関**: 機密情報へのアクセスを厳格に管理
- **医療機関**: 個人情報を適切に保護し、必要な情報のみ提供
- **コンプライアンス重視企業**: 規制要件を満たしながらAI導入

### 具体的なシナリオ

- 社内ナレッジベースをAIで検索可能に
- 部門別の秘密情報を保護
- クライアント別の情報提供を自動化

---

## セットアップ方法

### Amazon Quickコンソールでの設定

1. Google Driveナレッジベースを新規作成または既存のものを更新
2. 統合設定画面を開く
3. 「ドキュメントレベルのアクセス制御」オプションを有効化
4. 権限同期のタイミング設定
5. テスト実行と本番展開

---

## まとめ

### Amazon Quickの位置づけ

- ドキュメントレベルのアクセス制御により、エンタープライズグレードのセキュリティを実現
- Google Drive との統合でオンプレミスの権限構造を完全に活用
- 全AWSリージョンで一貫したセキュアなAI体験を提供

### 次のステップ

1. 自社のGoogle Drive構造を確認
2. 権限設定を整理
3. 試験環境での検証実施
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-quick-document-level-access-controls-google-drive/
- **Document-level access controls**: https://docs.aws.amazon.com/quick/latest/userguide/google-drive-kb-acl.html
- **Google Drive integration**: https://docs.aws.amazon.com/quick/latest/userguide/google-drive-integration.html
- **Admin-managed setup**: https://docs.aws.amazon.com/quick/latest/userguide/google-drive-kb-admin-managed.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**