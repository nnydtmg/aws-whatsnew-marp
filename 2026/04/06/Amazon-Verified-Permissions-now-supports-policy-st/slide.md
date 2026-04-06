---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Verified Permissions
ポリシーストアエイリアスと名前付きポリシー・テンプレートの新サポート

**発表日: 2026年4月6日**

---

## 概要

### Amazon Verified Permissionsの新機能

- **ポリシーストアエイリアス**: テナント識別子に基づいた人間が読みやすいエイリアスをAPI呼び出しで使用可能
- **名前付きポリシー**: システムが生成したIDではなく、意味のある名前でポリシーを参照
- **名前付きポリシーテンプレート**: ポリシーテンプレートも人間が読みやすい名前で管理

### 主な効果

- ルックアップテーブル管理が不要
- マルチテナント環境での認可ロジック管理を簡素化
- APIの可読性と保守性が向上

---

<!-- _class: section -->

# 1. 前提・背景

これらの機能が必要とされた背景と市場の動向

---

## 前提・背景

### 従来の課題

- **ID管理の複雑さ**: マルチテナント環境ではテナントごとに異なるIDを管理
- **可読性の問題**: システム生成IDにより、ポリシーの参照と検証が困難
- **ルックアップテーブルの負担**: テナントIDとポリシーストアIDの関連付けを手動管理
- **スケーラビリティの制約**: アプリケーション成長時の管理負荷増加

### 市場の動向

- マルチテナント SaaS アプリケーションの拡大
- 認可ロジックの複雑化に対する解決策への需要増加
- エンタープライズレベルでの認可管理の標準化を求める声

---

## 関連する最近の動向

### Amazon Verified Permissions の進化

- **2026年1月**: リソース暗号化機能のサポート開始
- **2026年4月**: ポリシーストアエイリアス、名前付きポリシー・テンプレート機能の追加

### AWS の認可管理戦略

- きめ細かいアクセス制御 (FGAC) への標準化
- エンタープライズセキュリティニーズへの対応強化

---

<!-- _class: section -->

# 2. 変更内容・新機能

実装される新機能の詳細

---

## 新機能1: ポリシーストアエイリアス

### 機能概要

- テナント識別子に基づいた人間が読みやすいエイリアスを定義
- API呼び出し時にシステムIDの代わりにエイリアスを使用

### 利用例

```
// 従来の方法
API Call → PolicyStoreId: "ps-abc123xyz789"
          TenantId: "t-def456uvw012"

// 新機能を使用
API Call → PolicyStoreAlias: "tenant-acme-corp"
          TenantAlias: "acme-prod"
```

### メリット

- コード可読性の大幅改善
- ルックアップテーブル管理が不要
- テナント識別の明確化

---

## 新機能2: 名前付きポリシー

### 機能概要

- ポリシーにシステムIDの代わりにセマンティックな名前を付与
- ポリシーの参照と検証が容易

### 利用例

```
// 従来の方法
PolicyId: "p-ghi789jkl012"

// 新機能を使用
PolicyName: "admin-full-access"
PolicyName: "user-read-only"
PolicyName: "developer-create-delete"
```

### メリット

- ポリシーの目的が一目瞭然
- 監査ログの可読性向上
- チームコラボレーション効率化

---

## 新機能3: 名前付きポリシーテンプレート

### 機能概要

- ポリシーテンプレートにもセマンティックな名前を付与
- テンプレートの再利用を促進

### 利用例

```
TemplateId: "tmpl-mno345pqr678"
     ↓
TemplateName: "multi-tenant-rbac-template"
TemplateName: "resource-based-access-template"
```

### メリット

- テンプレート管理の標準化
- ポリシー作成の効率化
- 組織内でのベストプラクティス共有

---

<!-- _class: section -->

# 3. 効果・メリット

組織と開発チームへの具体的な利益

---

## 効果・メリット

### 開発効率の向上

- **コード可読性**: APIコールが自己説明的になり、コード理解が容易
- **開発速度**: ルックアップテーブル管理の廃止により開発時間を削減
- **デバッグ効率**: ポリシー名により問題の特定が迅速化

### 運用効率の改善

- **管理複雑性の低減**: テナント・ポリシー・テンプレートの管理が直感的
- **スケーラビリティ**: 多数のテナント管理時の負荷削減
- **保守性向上**: ポリシー変更時の追跡が容易

### セキュリティ強化

- **監査トレーサビリティ**: ポリシー適用の履歴追跡が明確
- **ミスの削減**: 人間が読みやすい名前により設定ミスを防止
- **アクセス制御の透明性**: ポリシー意図が明確なため監査が容易

### コスト削減

- **統合・管理コスト**: ルックアップテーブル管理のITコスト削減
- **人的資源**: ポリシー管理の自動化により人件費を削減
- **トラブル対応**: 問題特定が迅速なため対応コスト削減

---

<!-- _class: section -->

# 4. ユースケース

実際の活用シーン

---

## ユースケース

### ユースケース1: マルチテナント SaaS プラットフォーム

**シナリオ**: 複数の企業がプラットフォームを利用

```
企業A (エイリアス: acme-corp)
  ├─ admin-policy (システム管理者用)
  ├─ user-policy (一般ユーザー用)
  └─ guest-policy (ゲストアクセス用)

企業B (エイリアス: beta-inc)
  ├─ admin-policy
  ├─ developer-policy
  └─ viewer-policy
```

**メリット**: テナント毎のポリシー構成が一目瞭然、管理が直感的

---

## ユースケース2: エンタープライズ向けマイクロサービス

**シナリオ**: 複数の部門が異なるマイクロサービスを共有

```
サービス: Order Management
  ├─ ポリシーテンプレート: enterprise-rbac-template
  ├─ ポリシー: order-creator-policy
  └─ ポリシー: order-reviewer-policy

サービス: Inventory Management
  ├─ ポリシーテンプレート: enterprise-rbac-template
  ├─ ポリシー: inventory-updater-policy
  └─ ポリシー: inventory-auditor-policy
```

**メリット**: 統一されたテンプレートで組織全体の認可管理を標準化

---

## ユースケース3: 複雑なポリシー管理

**シナリオ**: 環境別、ロール別のポリシー要件

```
ポリシーストアエイリアス:
  - prod-policy-store
  - staging-policy-store
  - dev-policy-store

テンプレートエイリアス:
  - data-access-template-v2
  - compliance-audit-template
  - internal-tools-template
```

**メリット**: 環境ごとのポリシー管理が明確化、誤設定を防止

---

<!-- _class: section -->

# 5. 実装方法

新機能の利用方法

---

## 実装方法

### API: ポリシーストアエイリアスの設定

```python
import boto3

client = boto3.client('verifiedpermissions')

# ポリシーストアエイリアスの作成
response = client.create_policy_store_alias(
    policyStoreId='ps-abc123xyz789',
    alias='tenant-acme-corp',
    tenantIdentifier='acme-prod'
)
```

### API: 名前付きポリシーの作成

```python
response = client.create_policy(
    policyStoreId='ps-abc123xyz789',
    definition={
        'static': {
            'description': 'Admin policy for ACME Corp'
        }
    },
    policyName='admin-full-access',
    policyType='STATIC'
)
```

### API: 認可チェック時にエイリアスを使用

```python
response = client.is_authorized(
    policyStoreId='ps-abc123xyz789',  # または policyStoreAlias='tenant-acme-corp'
    principal={
        'entityType': 'User',
        'entityId': 'user-123'
    },
    action={'actionType': 'CreateOrder'},
    resource={
        'entityType': 'Order',
        'entityId': 'order-456'
    }
)
```

---

## 移行のベストプラクティス

### 段階的な移行

1. **フェーズ1**: 新しいテナントでエイリアスを使用
2. **フェーズ2**: 既存テナント向けにエイリアスをマッピング
3. **フェーズ3**: 全テナント対象にロールアウト

### 互換性

- 既存のシステムIDベースのAPIも継続サポート
- 段階的なマイグレーションが可能
- 新旧混在環境での動作保証

---

<!-- _class: section -->

# 6. まとめ

---

## まとめ

### Amazon Verified Permissions の進化

ポリシーストアエイリアス、名前付きポリシー・テンプレート機能により:

- **マルチテナント環境での管理が大幅に簡素化**
- **開発効率と運用効率が向上**
- **セキュリティと透明性が強化**
- **エンタープライズレベルのアクセス制御を実現**

### 利用可能リージョン

- Amazon Verified Permissions が利用可能な **すべてのAWSリージョン** で提供

### 推奨ユーザー

- マルチテナント SaaS アプリケーション開発者
- エンタープライズアーキテクチャ管理者
- クラウドセキュリティ担当者
- マイクロサービスベースのシステム構築者

### 次のアクション

1. AWS ドキュメントで詳細を確認
2. テスト環境でエイリアス機能を試験
3. 既存ポリシーの命名規則を定義
4. 段階的な本番環境への適用計画を策定

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-verified-permissions-policy-store/
- **Amazon Verified Permissions ドキュメント**: https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/
- **Amazon Verified Permissions policies**: https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/policies.html
- **ポリシーストア管理ガイド**: https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/policy-stores.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**