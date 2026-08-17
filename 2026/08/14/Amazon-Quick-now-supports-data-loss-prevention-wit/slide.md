---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Quick が Microsoft Purview との統合でデータ損失防止に対応

**発表日: 2026年8月14日**

---

## 概要

### 3つの主要ポイント

- **Microsoft Purview との統合**: Purview感度ラベルを Amazon Quick に自動適用
- **細粒度のデータ保護**: チャット、スペース、ナレッジベースで機密ファイル共有を制御
- **既存ガバナンス継承**: 追加ツール不要で Purview ポリシーを Quick に拡張

---

## 前提・背景

### データ漏洩防止（DLP）の必要性

- クラウドコラボレーションツール利用の拡大に伴い、データ漏洩リスク増加
- 機密ファイルの不適切な共有による企業リスク
- 既存のガバナンスポリシーを新しいツールにも統一的に適用したいという要求

### Microsoft Purview との連携

- Microsoft Purview DLP は Microsoft 365 統合の自然な選択肢
- 感度ラベルと DLP ポリシーが Teams、SharePoint、OneDrive に組み込まれている
- Amazon Quick と連携することで、さらに統合したデータ保護が実現

---

## 主な機能

### 1. Purview 感度ラベルの自動適用

- Quick のチャット、スペース、ナレッジベースに Purview 感度ラベルを適用
- ファイルの取り扱いを自動制御
- 手動設定の手間を削減

### 2. 実行アクションの細粒度制御

- **ブロック**: 極秘ファイルの共有スペースアップロードを禁止
- **警告**: 内部ファイルに警告通知を付けて許可
- **許可**: 機密度に応じた柔軟な制御

### 3. グローバル対応

- Amazon Quick のエージェント機能がサポートされるすべての AWS リージョンで利用可能

---

## 効果・メリット

- **セキュリティ強化**: 機密ファイル漏洩リスクを低減
- **運用負荷軽減**: 追加ツール導入・管理不要で既存ポリシーを活用
- **コンプライアンス対応**: 統一されたデータ保護ポリシー実現
- **組織横断的な一貫性**: Microsoft 365 と Amazon Quick 間でガバナンスを統一
- **ユーザー体験向上**: シームレスな保護機構により利用者が透過的に保護される

---

## ユースケース

### 金融サービス業界

- **極秘ファイル**: 共有スペースへのアップロードを自動ブロック
- **内部ファイル**: 警告通知を付けて許可
- **結果**: 規制要件を満たしながら生産性を維持

### ヘルスケア・製薬企業

- PHI（患者情報）を含むファイルの厳格な管理
- HIPAA 規制への対応を自動化

### 製造・エンジニアリング企業

- 機密設計情報・知的財産の保護
- 部門間での安全な情報共有

---

## まとめ

### Amazon Quick と Microsoft Purview の統合のメリット

1. **既存投資の活用**: Purview への投資が Quick でも生かされる
2. **運用効率化**: 複数ツール管理の負荷軽減
3. **セキュリティ確保**: 統一されたデータ保護
4. **グローバル対応**: 複数リージョンでの利用可能

### 次のステップ

1. Amazon Quick での Microsoft Purview 統合設定を確認
2. 既存の Purview ポリシーを Quick 環境にマッピング
3. パイロットプロジェクトで動作検証
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick-dlp-purview/
- **Amazon Quick ドキュメント**: https://docs.aws.amazon.com/quick/
- **Microsoft Purview**: https://learn.microsoft.com/en-us/purview/purview
- **Data Loss Prevention (DLP)**: https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**