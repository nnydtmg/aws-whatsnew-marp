---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS IAM Policy Autopilot
Kiro Power として利用開始

**発表日: 2026年2月23日**

---

## 概要

### AWS IAM Policy Autopilot の主要特徴

- **1クリックインストール**: Kiro IDE およびウェブインターフェースから直接インストール可能
- **手動設定不要**: MCP サーバー設定が不要で、セットアップが簡素化
- **ベースラインポリシー自動生成**: AWS IAM ポリシーのベースラインを迅速に作成

### ツールの位置づけ

- 2025年の AWS re:Invent で発表されたオープンソース静的コード分析ツール
- AI 支援開発環境にシームレスに統合
- 開発者の IAM ポリシー作成作業を大幅に簡素化

---

## 前提・背景

### IAM ポリシー作成の課題

- IAM ポリシーの手動作成は時間がかかり、複雑な設定が必要
- セキュリティと利便性のバランスが難しい
- 開発サイクルの中での IAM 設定が開発生産性を阻害

### 市場の動向

- エージェント AI 開発の急速な拡大
- AI コーディングアシスタント（Claude Code、Cursor など）の活用が進む
- 開発ワークフロー内での統合ツール化が求められている

### Anthropic/Kiro のエコシステム

- Kiro IDE は AI 統合開発環境として進化
- Kiro Powers により、AI ネイティブなツール統合が実現
- MCP（Model Context Protocol）ベースでの柔軟な拡張が可能

---

## 主な機能と改善

### 1. 静的コード分析によるポリシー生成

- **自動分析**: アプリケーションコードを分析して必要な IAM アクションを特定
- **最小権限原則**: 97% 以上の不要な権限を削減
- **対応言語**: Python、TypeScript、Go に対応

### 2. Kiro Power としての統合

- **1クリックインストール**: GitHub から直接インポート
- **IDE 統合**: コーディングワークフロー内でポリシー生成
- **MCP 不要**: 従来の MCP サーバー手動設定が不要

### 3. AI コーディングアシスタントとの連携

- **Kiro IDE**: ネイティブサポート
- **Claude Code**: コード分析とポリシー提案
- **Cursor**: 同様の統合に対応

---

## ワークフローの簡素化

### 従来のアプローチ

```
1. コード作成
2. 必要な IAM アクション特定（手動）
3. IAM ポリシードキュメント確認
4. ポリシー手動作成
5. CloudFormation 設定
```

### 新しいアプローチ（IAM Policy Autopilot + Kiro）

```
1. コード作成
2. IAM Policy Autopilot でワンクリック分析
3. ベースラインポリシー自動生成
4. CloudFormation 自動デプロイ
```

---

## 効果・メリット

### 開発者にとってのメリット

- **時間短縮**: IAM ポリシー作成にかかる時間を大幅削減
- **セキュリティ向上**: 最小権限原則に基づく自動生成で過剰権限を排除
- **ワークフロー効率化**: IDE を離れることなくポリシーを生成
- **試行錯誤の容易さ**: ポリシーを素早く修正・再生成可能

### 組織にとってのメリット

- **セキュリティ強化**: 99% の不要な権限を削減できるポリシー
- **デプロイメント加速**: プロトタイピングから本番化の時間短縮
- **知識集約の軽減**: IAM 専門知識がなくても正しいポリシーを生成
- **コスト削減**: セキュリティ監査・修正にかかる工数削減

---

## ユースケース

### 1. AWS アプリケーションのラピッドプロトタイピング

- 新規プロジェクトのベースラインポリシーを瞬時に作成
- マイクロサービスの IAM 設定を自動化
- 複数の AWS サービス連携時のポリシー生成を簡素化

### 2. 新規 AWS プロジェクトのポリシー作成

- 初期段階でのセキュア設定を実装
- 開発から本番への移行時の権限整理を自動化
- 複数環境（開発/ステージ/本番）のポリシー管理

### 3. IDE 環境での開発効率向上

- Kiro IDE や Claude Code と連携した統合開発
- コーディング中にセキュリティ設定を自動提案
- ドキュメント作成と同時に IAM ポリシーを生成

---

## テクノロジスタック

### オープンソーステクノロジー

- **ツール**: IAM Policy Autopilot CLI
- **プロトコル**: Model Context Protocol (MCP)
- **統合**: Kiro Powers フレームワーク

### 対応環境

| 項目 | 対応状況 |
|------|----------|
| IDE | Kiro IDE、Claude Code、Cursor |
| 言語 | Python、TypeScript、Go |
| インストール | 1クリック（Kiro Power）or uvx/pip |
| AWS サービス | IAM、Lambda、S3、DynamoDB など対応 |

---

## 使用開始方法

### Kiro IDE からのインストール

1. **Powers メニューを開く**: 左サイドバーの「Powers」をクリック
2. **Add Custom Power をクリック**: GitHub リポジトリからインポート
3. **GitHub URL を入力**: `awslabs/iam-policy-autopilot`
4. **自動インストール**: Kiro が自動的にセットアップ

### 手動セットアップ（uvx の場合）

```json
{
  "mcpServers": {
    "iam-policy-autopilot": {
      "command": "uvx",
      "args": ["iam-policy-autopilot", "mcp-server"],
      "env": {
        "AWS_PROFILE": "your-profile-name",
        "AWS_REGION": "us-east-1"
      }
    }
  }
}
```

---

## リソースと次のステップ

### 学習・利用リソース

- **GitHub リポジトリ**: https://github.com/awslabs/iam-policy-autopilot
- **Kiro Powers ページ**: https://kiro.dev/powers/
- **AWS IAM ドキュメント**: https://docs.aws.amazon.com/IAM/

### 推奨される次のステップ

1. **Kiro IDE にインストール**: 1クリックで開始
2. **簡単なアプリケーションで試す**: Lambda 関数など
3. **本番プロジェクトへの適用**: セキュリティ監査と統合
4. **チーム内での標準化**: 開発プロセスへの組み込み

---

## まとめ

### AWS IAM Policy Autopilot の価値

- **即座に利用可能**: Kiro Power として 1クリックインストール
- **開発効率大幅向上**: IDE 内での統合で生産性を最大化
- **セキュリティ向上**: 97%+ の不要権限を削減
- **開発民主化**: IAM 専門知識がなくても正しいポリシーを生成

### 対象ユーザー

- **開発者**: AWS IAM の知識がなくても迅速にポリシーを作成
- **アーキテクト**: セキュアなベースラインを快速に提供
- **チーム**: 開発と運用の間のギャップを短縮

### オープンソースの価値

- AWS コミュニティによる継続的な改善
- 透明性が高く信頼性のあるツール
- カスタマイズが可能な柔軟性

---

## 参考リソース

### AWS 公式

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/aws-iam-policy-autopilot-kiro-power/
- **AWS re:Invent 2025 発表**: https://aws.amazon.com/about-aws/whats-new/2025/11/iam-policy-autopilot-generate-iam-policies-code/
- **AWS Security ブログ**: https://aws.amazon.com/blogs/security/iam-policy-autopilot-an-open-source-tool-that-brings-iam-policy-expertise-to-builders-and-ai-coding-assistants/

### GitHub・コミュニティ

- **GitHub リポジトリ**: https://github.com/awslabs/iam-policy-autopilot
- **Kiro 公式**: https://kiro.dev/
- **Kiro Powers**: https://kiro.dev/powers/
- **DEV Community**: https://dev.to/kazuya_dev/aws-reinvent-2025-from-code-to-policies-accelerate-development-w-iam-policy-autopilot-sec351-164f

### AWS IAM ドキュメント

- **IAM ユーザーガイド**: https://docs.aws.amazon.com/IAM/
- **ベストプラクティス**: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
