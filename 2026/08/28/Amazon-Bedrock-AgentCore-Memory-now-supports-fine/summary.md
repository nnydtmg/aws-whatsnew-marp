# Amazon Bedrock AgentCore Memoryが細粒度アクセス制御に対応

**元のタイトル:** Amazon Bedrock AgentCore Memory now supports fine-grained access control

**カテゴリ:** What's New  
**公開日:** 2026-08-28  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-fine-grained-access-control)

---

## 要約

Amazon Bedrock AgentCore Memoryが細粒度アクセス制御（FGAC）に対応し、OAuth認証とCedarポリシーを通じてユーザーごとおよびテナントごとのメモリ分離を実現できるようになりました。これにより、カスタム認可ロジックを構築することなく、暗号化されたアイデンティティ証明に基づいたセキュアなアクセス制御をインフラストラクチャレイヤーで実装できます。

---

## このアップデートで何が変わったか

### 主な変更点

- **細粒度アクセス制御（FGAC）対応**: ユーザーごと、テナントごとのメモリ分離を実現
- **AgentCore Gateway統合**: OAuth（JWT）認証とCedarポリシーによるアクセス管理
- **カスタム認可ロジック不要**: インフラストラクチャレイヤーで一元的に制御
- **12のメモリ操作を Cedar アクション化**: 作成、読取、更新、削除などの操作を個別に制御可能
- **暗号化 ID による検証**: セキュリティ強化

---

## 機能詳細

### AgentCore Gatewayを通じたアクセス制御

- **OAuth（JWT）認証設定**: ユーザーアイデンティティの確立
- **Cedar ポリシー適用**: 認証ユーザーの ID に基づくアクセス制限
- **ユーザートークン連携**: トークンクレームから導出したネームスペースでメモリレコードを制限
- **呼び出し元ごとの操作制御**: 特定のメモリ操作を許可・拒否

### AgentCore Memory コネクタ

- ゲートウェイターゲットをメモリデータプレーンに接続
- 12個のメモリ操作をCedarアクションとして公開
- 管理型ゲートウェイコネクタとして提供

---

## セキュリティ利点

### インフラストラクチャレイヤーでの強制

**改善前の課題:**
- アプリケーションコードに認可ロジック実装が必要
- エージェントコードの外側での制御が困難
- プロンプトインジェクション対策に課題

**改善後の実装:**
- インフラレイヤーで決定論的に強制
- エージェント影響外で実施
- 暗号化 ID による検証

---

## 使用シナリオ

### 1. マルチテナント SaaS プラットフォーム

```
テナント A のユーザー
  ↓
AgentCore Gateway（Cedar ポリシー適用）
  ↓
「テナント A のメモリのみアクセス可能」
```

### 2. エンタープライズ組織管理

| ロール | アクセス範囲 |
|--------|------------||
| 管理者 | 全員のメモリ |
| マネージャー | 部下のデータのみ |
| 一般ユーザー | 自身のメモリのみ |

### 3. 規制対応環境（GDPR/CCPA）

- ユーザートークンクレームに基づくコンプライアンス
- 監査ログとともに実装可能

---

## 実装の特徴

### Cedar ポリシー言語の優位性

- **宣言型**: ポリシー記述とコード実装の分離
- **決定論的**: 全リクエストで一貫性のある評価
- **スケール対応**: ゲートウェイが毎秒数千リクエストを処理
- **監査可能**: ポリシー変更履歴とアクセス決定を追跡

### 多層防御アーキテクチャ

- **Cedar ポリシー**: per-request アクション単位の認可
- **Gateway Interceptors**: カスタム認可ロジック（オプション）
- **Resource-based Policies**: IAM レベルのアクセス制御
- **Encryption & microVM Isolation**: 物理的な多層防御

---

## 関連する最近の動向

### AgentCore Policy の進化

- **2026年3月**: AgentCore Policy が GA となる
- Cedar ポリシーベースの決定論的認可を実現
- エージェントコードの外側でアクション単位の認可を強制
- RSAC 2026 でエンタープライズエージェント ガバナンスの重要性を強調

---

## 導入ステップ

### 段階的な実装手順

1. **準備段階**
   - AgentCore Gateway の設定
   - OAuth 認証の有効化

2. **ポリシー設計**
   - ユースケースに合わせた Cedar ポリシー作成
   - テスト環境での検証

3. **統合・運用**
   - Memory コネクタの統合
   - Memory リソースへのアクセス制御適用
   - CloudWatch でのポリシー評価結果追跡

4. **監査・最適化**
   - 定期的なポリシー見直し
   - アクセスパターン分析
   - セキュリティ面での改善

---

## 参考リソース

### AWS 公式ドキュメント

- [AWS What's New - AgentCore Memory FGAC](https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-fine-grained-access-control/)
- [Amazon Bedrock AgentCore 開発ガイド - Fine-grained access control for Memory](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory-gateway-fgac.html)
- [Amazon Verified Permissions](https://aws.amazon.com/verified-permissions/)

### 関連技術

- [Cedar ポリシー言語](https://www.cedarpolicy.com/)
- [Amazon Bedrock AgentCore](https://aws.amazon.com/bedrock/agents/)
- [AgentCore Gateway](https://aws.amazon.com/bedrock/agentcore/)

---

**作成日:** 2026年8月29日  
**言語:** 日本語（要約）