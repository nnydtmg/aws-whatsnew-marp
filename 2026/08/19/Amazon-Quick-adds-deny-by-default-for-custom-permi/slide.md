---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Quick のカスタム権限にデフォルト拒否機能を追加

Amazon Quick adds deny by default for custom permissions

**発表日: 2026年8月19日**

---

## 概要

Amazon Quickのカスタム権限にデフォルト拒否機能が追加され、管理者は新しいAI機能をリリース前に制限し、準備ができたときに明示的に許可することが可能になりました。

### 主なポイント

- 新しいAI機能を自動的に制限
- 管理者による事前許可制御の実現
- セキュリティとガバナンスの強化

---

## 前提・背景

### これまでの課題

- 新しいAI機能がリリース時にすべてのユーザーが利用可能だった
- 管理者は事後対応で機能を制限する必要があった
- セキュリティポリシーの事前制御が困難

### 関連する最近の動向

- エンタープライズ向けAI機能の拡大
- ガバナンスと統制の重要性の増加
- カスタム権限プロファイルの拡充

---

## 変更内容・新機能

### デフォルト拒否の仕組み

- Amazon Quickのカスタム権限に「デフォルト拒否」という新しいガバナンス設定が追加
- 管理者はカスタム権限プロファイルでAI機能カテゴリを制限可能
- リリース時に新しいAI機能を自動的に拒否

### 管理方法

- **ユーザースコープ**: ユーザー、ロール、またはアカウント全体に適用
- **カテゴリ制限**: カテゴリを制限すると既存機能も制限
- **明示的許可**: 管理者が準備できたときに各機能を許可
- **設定方法**: 「Manage account」またはAWS CLIから設定

---

## 利用可能な範囲

### リージョン

- Amazon Quickが利用可能なすべてのAWSリージョンで使用可能
- グローバルに展開

### 制限範囲

- 制限は設定したプロファイルにのみ適用
- 複数のプロファイルで異なるポリシーを運用可能

---

## まとめ

### 主なメリット

- **事前制御**: 新機能のセキュアなロールアウト
- **ガバナンス強化**: ポリシー準拠の確保
- **柔軟な管理**: プロファイル単位での制御

### 次のステップ

1. 現在のカスタム権限プロファイルを確認
2. AI機能カテゴリに対する制限ポリシーを定義
3. テスト環境で検証
4. 本番環境へのロールアウト

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-quick-deny-by-default/
- **Amazon Quickドキュメント**: https://docs.aws.amazon.com/quick/latest/userguide/custom-permissions-governance.html
- **ガバナンスガイド**: https://aws.amazon.com/blogs/business-intelligence/establishing-enterprise-governance-in-amazon-quick-using-custom-permissions

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**