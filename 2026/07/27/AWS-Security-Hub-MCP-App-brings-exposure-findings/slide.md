---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Security Hub MCP App でセキュリティ調査を AI ワークフローに統合（プレビュー）

AWS Security Hub MCP App brings exposure findings into your AI-assisted workflow (Preview)

**What's New** | 2026-07-27

---

## 概要

- AWS Security Hub MCP Appは、Security Hubの露出検出結果をClaude Desktopに統合するプレビュー機能であり、セキュリティ調査を加速し、自然言語でのセキュリティ態勢の調査、攻撃パスの詳細確認、修復推奨事項の取得が可能です。
- このアプリケーションはSecurity Hubのお客様に追加コストなしで利用でき、ローカルで読み取り専用のツールとして実行されます。

---

## 前提・背景

### セキュリティ調査の課題

- **コンテキストスイッチングの問題**: Security Hubのコンソールとセキュリティツール間を何度も行き来する必要がある
- **手動トリアージの負担**: セキュリティチームによる検出結果の手動分類と優先付けに時間がかかる
- **情報の分散**: 露出検出結果、攻撃パス、修復推奨事項が異なるインターフェースに散在している

### Claude Desktop と MCP の進化

- Claude Desktop は AI ワークフローの中心として機能
- Model Context Protocol（MCP）により、AI エージェントが外部データソースに直接アクセス可能
- AWS セキュリティサービスとの統合が加速している

---

## 変更内容・新機能

### AWS Security Hub MCP App の概要

- **Model Context Protocol（MCP）サーバー**: Security Hubの露出検出結果をClaude Desktopに直接統合
- **プレビュー機能**: 2026年7月27日より提供開始
- **追加コストなし**: Security Hubのお客様に無償で利用可能

### 主な機能

1. **自然言語でのセキュリティ調査**
   - Security Hub の露出検出結果にテキストベースでアクセス可能
   - Claude がセキュリティ態勢を自然言語で説明

2. **トップ露出検出結果の表示**
   - 優先度の高い検出結果を素早く把握
   - インタラクティブな可視化で詳細を確認

3. **攻撃パスの詳細確認**
   - 検出結果の攻撃パス（Attack Path）を分析
   - 拡張ネットワークパスで影響範囲を特定

4. **関連検出結果の検査**
   - 相互に関連する検出結果を検出
   - 影響を受けたリソース構成を可視化

5. **修復推奨事項の取得**
   - Claude が修復方法を提案
   - テキスト要約とインタラクティブ可視化の両方で確認可能

### 技術的な特徴

- **ローカル実行**: MCPサーバーはローカルマシン上で実行
- **既存認証情報を使用**: AWS 認証情報をそのまま活用
- **読み取り専用**: セキュリティ上、すべてのツールは読み取り専用で、環境への変更は行われない
- **テキスト要約 + インタラクティブ可視化**: 各ツール呼び出しで、テキスト要約と可視化の両方を返却

### リージョン対応

- Security Hub をサポートするすべての AWS コマーシャルリージョンで利用可能

---

## 効果・メリット

### セキュリティ調査の加速

- **コンテキストスイッチングの削減**: Security Hub から Claude Desktop に統合され、ツール間の切り替えが不要
- **手動トリアージの削減**: AI が自動的に検出結果を分析し、優先付けを支援
- **意思決定の高速化**: 自然言語でのインタラクティブな調査で、セキュリティスタッフの効率が向上

### セキュリティ態勢の可視化

- **攻撃パスの理解**: 検出結果がどのように攻撃に使用されるかを視覚的に把握
- **影響範囲の把握**: 関連検出結果と影響を受けたリソースを一元管理
- **修復優先度の決定**: AI の提案に基づき、修復順序を効率的に決定

### セキュリティチームの生産性向上

- **作業時間の短縮**: 自動化により、手動作業を大幅削減
- **セキュリティ専門知識の活用**: AI が定型作業を担当し、セキュリティスタッフは戦略的な判断に注力
- **セキュリティ体制の強化**: AI による 24/7 の監視と分析が可能

### コスト効率

- **追加コストなし**: Security Hub 利用者に無償で提供
- **既存インフラの活用**: 既存の AWS 認証情報とローカルマシンで動作

---

## ユースケース

### 1. セキュリティ運用センター（SOC）

- セキュリティチームが Claude Desktop を使用して、セキュリティ態勢をリアルタイムで監視
- AI による自動分析で検出結果を優先付けし、対応時間を短縮

### 2. クラウドセキュリティ検査

- AWS リソースの露出検出結果を Claude に提供し、自然言語での検査実施
- 攻撃パスを可視化して、セキュリティリスクを定量化

### 3. コンプライアンス対応

- Security Hub の検出結果を基に、修復推奨事項を自動生成
- コンプライアンス要件に基づいた対応を効率化

### 4. セキュリティインシデント対応

- インシデント発生時に、Claude Desktop で関連検出結果を迅速に確認
- 攻撃パスを分析して、被害範囲と影響を把握
- 修復手順を AI に提案させて対応を加速

---

## まとめ

### AWS Security Hub MCP App の価値

- **セキュリティ調査の AI 統合**: Security Hub の検出結果を Claude Desktop に統合し、AI ワークフローを実現
- **効率化と高度化**: AI による自動分析で、セキュリティチームの効率と対応能力を向上
- **無償で提供**: Security Hub 利用者に追加コストなしで利用可能

### 導入のメリット

1. **迅速な検出・対応**: AI による自動分析で、セキュリティインシデントへの対応時間を短縮
2. **セキュリティチームの効率化**: 手動作業を削減し、セキュリティスタッフを戦略的な業務に集中させる
3. **セキュリティ態勢の可視化**: 攻撃パスと修復推奨事項を一元管理し、セキュリティ体制を強化
4. **スケーラビリティ**: AI による 24/7 の監視で、組織のセキュリティ体制をスケール

### 次のステップ

1. AWS Security Hub MCP App のドキュメントを確認
2. Claude Desktop をセットアップし、Security Hub との統合を構成
3. パイロットプロジェクトで効果を検証
4. 本番環境への展開と運用プロセスの構築

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-mcp-app/
- **AWS Security Hub ユーザーガイド**: https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-v2-mcp-app.html
- **AWS Security Hub 製品ページ**: https://aws.amazon.com/security-hub/
- **AWS リージョンサービス一覧**: https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/

### 関連情報

- **Release notes - Claude Help Center**: https://support.claude.com/en/articles/12138966-release-notes
- **Running Claude Desktop on Amazon Bedrock**: https://aws.amazon.com/blogs/machine-learning/from-developer-desks-to-the-whole-organization-running-claude-cowork-in-amazon-bedrock
- **The AWS MCP Server now supports cross-account and cross-role access**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-mcp-server

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
