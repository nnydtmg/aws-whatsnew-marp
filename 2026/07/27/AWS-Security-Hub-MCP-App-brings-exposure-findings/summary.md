# AWS Security Hub MCP App でセキュリティ調査を AI ワークフローに統合（プレビュー）

AWS Security Hub MCP App brings exposure findings into your AI-assisted workflow (Preview)

**カテゴリ:** What's New
**公開日:** 2026-07-27
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-mcp-app/)

このページでは、AWS What's Newで発表された「AWS Security Hub MCP App brings exposure findings into your AI-assisted workflow (Preview)」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Security Hub MCP Appは、Security Hubの露出検出結果をClaude Desktopに統合するプレビュー機能であり、セキュリティ調査を加速し、自然言語でのセキュリティ態勢の調査、攻撃パスの詳細確認、修復推奨事項の取得が可能です。このアプリケーションはSecurity Hubのお客様に追加コストなしで利用でき、ローカルで読み取り専用のツールとして実行されます。

---

## 主な変更点

### Model Context Protocol（MCP）サーバー

AWS Security Hub MCP Appは、Model Context Protocol（MCP）サーバーであり、Security Hubの露出検出結果をClaude Desktopに直接統合するプレビュー機能です。

### セキュリティ調査の加速

このアプリケーションにより、以下の効果が期待できます：

- **コンテキストスイッチングの削減**: Security Hubのコンソールと他のツール間を行き来する必要がなくなる
- **手動トリアージの削減**: AI が検出結果を自動的に分析・優先付け
- **調査時間の短縮**: セキュリティチームが戦略的な業務に注力可能

### 機能

1. **自然言語でのセキュリティ態勢調査**
   - Claude Desktop で自然言語でセキュリティ態勢を調査可能

2. **トップ露出検出結果の表示**
   - 優先度の高い検出結果を素早く把握

3. **攻撃パスと拡張ネットワークパスの詳細確認**
   - 検出結果がどのように攻撃に使用されるかを可視化

4. **関連検出結果と影響を受けたリソース構成の検査**
   - 相互に関連する検出結果と影響範囲を一元管理

5. **修復推奨事項の取得**
   - AI が修復方法を提案

### 技術的な特徴

- **MCPサーバーはローカルマシン上で実行**
- **既存のAWS認証情報を使用**
- **すべてのツールは読み取り専用**（環境への変更は行われない）
- **各ツール呼び出しは、テキスト要約とインタラクティブな可視化の両方を返却**

### 利用可能性

- **追加コストなし**: Security Hubのお客様に無償で利用可能
- **リージョン**: Security HubをサポートするすべてのAWSコマーシャルリージョンで利用可能
- **ステータス**: プレビュー版

---

## メリット

### セキュリティチームの効率化

- セキュリティ調査の時間短縮
- 手動作業の削減
- セキュリティ専門知識への集中

### セキュリティ態勢の向上

- 攻撃パスの理解
- 影響範囲の把握
- リスク優先度の明確化

### コスト効率

- 追加コストなし
- 既存インフラの活用

---

## 対象ユーザー

- AWS Security Hub を使用している組織
- セキュリティ運用チーム（SOC）
- クラウドセキュリティチーム
- コンプライアンス担当者

---

## 詳細

AWS Security Hub MCP Appは、Model Context Protocol（MCP）サーバーであり、Security Hubの露出検出結果をClaude Desktopに直接統合するプレビュー機能です。このアプリケーションにより、セキュリティ調査が加速され、コンテキストスイッチングと手動トリアージが削減されます。ユーザーは自然言語でセキュリティ態勢を調査でき、トップ露出検出結果の表示、検出結果の攻撃パスと拡張ネットワークパスの詳細確認、関連検出結果と影響を受けたリソース構成の検査が可能です。修復推奨事項を取得できます。各ツール呼び出しは、AIエージェントが推論するためのテキスト要約とインタラクティブな可視化の両方を返します。MCPサーバーはローカルマシン上で実行され、既存のAWS認証情報を使用します。すべてのツールは読み取り専用であり、環境への変更は行われません。Security Hub MCP Appは、Security Hubのお客様に追加コストなしで利用可能です。このプレビュー機能は、Security HubをサポートするすべてのAWSコマーシャルリージョンで利用可能です。

---

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-mcp-app/)
- [AWS Security Hub ユーザーガイド](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-v2-mcp-app.html)
- [AWS Security Hub 製品ページ](https://aws.amazon.com/security-hub/)
- [AWS リージョンサービス一覧](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/)
