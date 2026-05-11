---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Claude Platform が AWS で一般提供開始

AWSアカウントからAnthropicのネイティブClaudeプラットフォームに直接アクセス

**発表日: 2026年5月11日**

---

## 概要

### Claude Platform on AWS が一般提供開始

- **AWS上でAnthropicのネイティブClaudeプラットフォームが一般提供開始**
  - 既存のAWSアカウントから直接アクセス可能
  - 統合請求とセキュリティ管理の実現

- **開発チームと企業向けの設計**
  - アカウント管理の簡素化
  - 複数のグローバルリージョンで利用可能

---

## 前提・背景

### 市場の動向

- **AIプラットフォーム統合の需要**
  - エンタープライズ向けAIソリューションの複雑化
  - クラウドネイティブなAI開発環境の要求

- **Claude モデルの進化**
  - 2026年4月: Claude Opus 4.7が Amazon Bedrock で利用開始
  - Anthropicのネイティブ機能への需要が増加

### 課題と課題

- **別々のアカウント管理による運用コスト増加**
- **複数プラットフォーム間での請求追跡の複雑性**
- **セキュリティとコンプライアンスの一元化の必要性**

---

## 主な機能

### アクセス方法

- **AWS IAM認証情報で直接アクセス**
  - 既存のAWSセキュリティモデルを継承
  - 追加のアカウント作成が不要

- **AWSコンソールとAPI**
  - AWS管理画面からClaudeプラットフォームにアクセス
  - AWS SDK による統合開発が可能

### 利用可能な機能

<div class="columns">
<div>

#### Core機能
- Claude Managed Agents（β）
- アドバイザー戦略（β）
- ウェブ検索
- ウェブ取得
- コード実行

</div>
<div>

#### Advanced機能
- Files API（β）
- Skills（β）
- MCP コネクタ（β）
- プロンプトキャッシング
- 引用機能
- バッチ処理

</div>
</div>

---

## エンタープライズ統合

### AWS統合による利点

- **統合請求**
  - CloudTrail 監査ログで完全可視化
  - AWS請求システムへの統合

- **セキュリティと制御**
  - 既存のIAM認証情報の活用
  - アクセス制御の一元管理
  - データセキュリティの確保

- **グローバルリージョン対応**
  - 北米、南米、ヨーロッパ、アジア太平洋地域をカバー
  - 19リージョン以上で利用可能

---

## 対応ユースケース

### Claude Platform on AWS が適している組織

- **統一されたアカウント管理を希望する開発チーム**
  - 別々のアカウント管理を避けたい企業
  - 請求追跡を一元化したい組織

- **Anthropic ネイティブ体験を求める企業**
  - Claudeプラットフォームの最新機能にアクセスしたい
  - Anthropic 公式の開発環境を利用したい

- **AWS セキュリティ機能を活用したい企業**
  - 既存のIAM ポリシーを活用したい
  - CloudTrailによる監査ログが必要

---

<!-- _class: small -->

## 効果・メリット

### 運用効率化

- **アカウント管理の簡素化**
  - 1つのAWSアカウントで統合管理
  - 複数プラットフォーム間の管理コスト削減

- **コスト最適化**
  - 統合請求による請求処理の自動化
  - チャージバック処理の簡素化

### セキュリティとコンプライアンス

- **一元化されたアクセス制御**
  - IAM ポリシーの統一的な適用
  - CloudTrail による監査ログの完全記録

- **データセキュリティ**
  - AWSセキュリティ境界との統合
  - Anthropic との協調による高レベルセキュリティ

### 開発生産性向上

- **統合開発環境**
  - AWS SDK との連携
  - Claude最新機能への即座のアクセス

---

## グローバル対応リージョン

### Claude Platform on AWS が利用可能なリージョン

<div class="columns-3">
<div>

**北米・南米**
- US East (N. Virginia)
- US East (Ohio)
- US West (Oregon)
- Canada (Central)
- South America (São Paulo)

</div>
<div>

**ヨーロッパ**
- Europe (Dublin)
- Europe (London)
- Europe (Frankfurt)
- Europe (Milan)
- Europe (Zurich)
- Europe (Paris)
- Europe (Stockholm)

</div>
<div>

**アジア太平洋**
- Asia Pacific (Tokyo)
- Asia Pacific (Seoul)
- Asia Pacific (Melbourne)
- Asia Pacific (Jakarta)
- Asia Pacific (Sydney)

</div>
</div>

---

## まとめ

### Claude Platform on AWS の特徴

- **AWS統合による統一プラットフォーム**
  - IAM、請求、CloudTrail との統合
  - 19リージョン以上でグローバル対応

- **Anthropic ネイティブ体験の実現**
  - 最新Claude機能への即座のアクセス
  - Managed Agents、ウェブ検索など先端機能が利用可能

- **エンタープライズグレードの管理機能**
  - 統合セキュリティ
  - 一元化されたアクセス制御

### 次のステップ

1. **AWS Claude Platform 製品ページで詳細確認**
2. **ドキュメント を参照してセットアップ**
3. **既存のAWSワークフローに統合開始**

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/claude-platform-aws/
- **Claude Platform 製品ページ**: https://aws.amazon.com/claude-platform/
- **ドキュメント**: https://docs.aws.amazon.com/claude-platform/latest/userguide/welcome.html
- **Claude Opus 4.7** : https://aws.amazon.com/about-aws/whats-new/2026/04/claude-opus-4.7-amazon-bedrock/
- **関連情報**: https://www.linkedin.com/pulse/claude-platform-aws-second-door-anthropics-stack-walter-lee-y9kbc

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**