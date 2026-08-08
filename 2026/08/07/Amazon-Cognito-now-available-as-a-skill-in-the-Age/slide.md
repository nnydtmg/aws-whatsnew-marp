---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Cognito が AWS Agent Toolkit のスキルとして利用可能に

AIエージェントのための認証・認可スキルが登場

**発表日: 2026年8月7日**

---

## 概要

Amazon Cognito が AWS Agent Toolkit のコアスキル（aws-auth）として新たに利用可能になりました。

### 主要ポイント

- **AIコーディングエージェント対応**: セキュアなサインインフロー実装がベストプラクティスに基づいて迅速に構築可能
- **ユースケースの拡大**: ユーザー、AIエージェント、マイクロサービス向けの認証に対応
- **統合管理**: AWS MCP Server との組み合わせで IAM ガードレール と CloudTrail ログによる安全な運用

---

## 前提・背景

### AIエージェントが直面する課題

- **認証の複雑性**: 従来のユーザー認証とは異なり、AIエージェント自身の認識管理が必要
- **セキュリティ要件**: エージェントが実行する AWS API 呼び出しへの適切なアクセス制御が不可欠
- **運用効率**: ベストプラクティスに基づいた認証フローの構築に時間がかかる

### AWS Agent Toolkit の役割

- AI コーディングエージェントが AWS サービスをセットアップ・管理できるツール
- 開発生産性の向上とセキュリティ確保のバランスが重要

---

## Amazon Cognito (aws-auth) スキルの特徴

### 対応範囲

<div class="columns">
<div>

**認証・認可機能**

- ユーザープール設定
- アプリクライアント設定
- OAuth 2.0 フロー
- JWT オーソライザー

</div>
<div>

**セキュリティ機能**

- WebAuthn / パスキー登録
- 脅威保護機能
- Lambda トリガー設定
- アイデンティティプール

</div>
</div>

---

## 主な機能と改善

### 1. セットアップ・設定の自動化

- AIエージェントが Amazon Cognito をセットアップ・設定
- ベストプラクティスワークフローに従った実装
- 手動設定の工数削減

### 2. トークン管理

- 効率的なトークン管理
- マネージドログイン対応
- OAuth 2.0 フロー統合

### 3. AWS MCP Server との連携

- **IAM ベースのガードレール**: エージェントの実行権限を制御
- **CloudTrail 監査ログ**: すべてのアクション記録可能
- **AWS CLI 連携**: スタンドアロンでも機能

---

## 利用シーン

### ユースケース例

#### 1. SaaS アプリケーション

- ユーザー認証フローの高速構築
- OAuth 2.0 による第三者統合

#### 2. マイクロサービス

- サービス間の認証
- JWT オーソライザーによる保護

#### 3. AI エージェント

- エージェント自身の認識管理
- タスク実行時の権限制御

---

## 効果・メリット

- ✅ **開発速度向上**: 認証フローの構築時間を大幅短縮
- ✅ **セキュリティ強化**: ベストプラクティスに基づいた実装保証
- ✅ **運用効率化**: IAM ガードレール と CloudTrail による監視・管理
- ✅ **スケーラビリティ**: ユーザー、エージェント、マイクロサービスに対応
- ✅ **統合管理**: AWS Agent Toolkit での一元管理

---

## 利用開始方法

### 3ステップで開始

1. **GitHub から取得**: Amazon Cognito aws-auth skill をダウンロード
   https://github.com/aws/agent-toolkit-for-aws/tree/main/skills/core-skills/aws-auth

2. **Agent Toolkit Quick Start ガイド** を参照して導入

3. **AWS MCP Server** と組み合わせて運用開始

### 参考リソース

- Amazon Cognito Developer Guide: https://docs.aws.amazon.com/cognito/latest/developerguide/

---

## まとめ

### Amazon Cognito (aws-auth) スキルのポジション

- AWS Agent Toolkit の重要なコアスキル
- AIエージェント時代の認証・認可標準化
- 開発生産性とセキュリティの両立実現

### 次のステップ

1. AWS Agent Toolkit の導入検討
2. 自社ユースケースでの評価開始
3. パイロットプロジェクト実施
4. 本番環境への展開

---

## 参考URL

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-auth-agent-skill/
- **Amazon Cognito aws-auth skill (GitHub)**: https://github.com/aws/agent-toolkit-for-aws/tree/main/skills/core-skills/aws-auth
- **Agent Toolkit Quick Start ガイド**: https://docs.aws.amazon.com/agent-toolkit/latest/userguide/quick-start.html
- **Amazon Cognito Developer Guide**: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
- **AWS MCP Server ドキュメント**: https://docs.aws.amazon.com/agent-toolkit/latest/userguide/mcp-server.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**