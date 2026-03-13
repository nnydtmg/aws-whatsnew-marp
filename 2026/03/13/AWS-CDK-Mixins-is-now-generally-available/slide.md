---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS CDK Mixins

一般提供開始

**発表日: 2026年3月12日**

---

## 概要

### AWS CDK Mixinsとは

- **AWS Cloud Development Kit (CDK)の新機能**として一般提供開始
- あらゆるAWSコンストラクト（L1、L2、カスタム）に**再利用可能な抽象化**を追加
- 既存インフラストラクチャコードの**再構築不要**でセキュリティ・コンプライアンス適用が可能
- 開発チームの**ポリシー適用の負担を大幅削減**

### 主な特徴

- シンプルな `.with()` 構文で機能適用
- 複数のMixinsを組み合わせ可能
- 高度なフィルタリング機能（`Mixins.of()`）対応

---

<!-- _class: section -->

# 1. 背景・課題

これまでの開発の悩みと市場の動向

---

## 背景・課題

### これまでの課題

<div class="columns">
<div>

#### L1コンストラクト選択時
- ✅ 新AWS機能への即日アクセス
- ❌ 高い学習曲線
- ❌ セキュリティ・コンプライアンス対応に多大な手作業

</div>
<div>

#### L2コンストラクト選択時
- ✅ 高度な抽象化で利便性高い
- ✅ セキュリティデフォルト搭載
- ❌ 新AWS機能への対応が遅い

</div>
</div>

### エンタープライズの課題

- セキュリティ・コンプライアンスポリシーをインフラ全体に**統一適用する手段がない**
- カスタムコンストラクトライブラリの**保守コストが高い**
- 新機能と既存ポリシーの**両立が困難**

---

## 市場動向

### AWS CDK コミュニティの成長

- 2025年12月～2026年2月で**150+ プルリクエスト**提出
- EKS、Bedrock、ECS等多領域でのアップデート加速
- Mixinsは**プレビュー版から一般提供へと進化**

### インフラストラクチャ・コード化の進展

- Infrastructure as Code (IaC) の重要性が増加
- 再利用可能な抽象化の需要が拡大
- **組織横断的なポリシー適用の必要性**が高まる

---

<!-- _class: section -->

# 2. AWS CDK Mixins の機能

新しい抽象化の仕組み

---

## 主な機能

### 1. `.with()` 構文による簡潔な機能適用

```typescript
// 例: S3バケットにセキュリティ機能を追加
bucket
  .with(AutoDelete())
  .with(BucketEncryption())
  .with(Versioning())
  .with(BlockPublicAccess());
```

**利点**
- コード行数が少ない
- 各機能をチェーンメソッドのように適用
- 既存コードへの影響最小化

---

## 主な機能（続き）

### 2. 複数Mixinsの組み合わせ

- カスタムL2コンストラクトに**複数Mixinsを統合**可能
- スコープ全体に**コンプライアンスポリシーを適用**
- 組織標準の抽象化を**モジュール化・再利用**

### 3. 高度なフィルタリング（`Mixins.of()`）

```typescript
// リソースタイプでフィルタリング
Mixins.of(stack).filter(s3Encryption, 
  { resourceType: "AWS::S3::Bucket" }
);

// パスパターンでフィルタリング
Mixins.of(stack).filter(myPolicy, 
  { pathPattern: "/api/**" }
);
```

---

## 利用可能なMixin例

### セキュリティ・ストレージ関連

- **自動削除（Auto Delete）**
- **バケット暗号化（Bucket Encryption）**
- **バージョニング（Versioning）**
- **パブリックアクセスブロック（Block Public Access）**

### その他

- EventBridgeパターン生成
- リソース固有のセキュリティ設定
- コンプライアンス監査ポリシー

---

<!-- _class: section -->

# 3. メリット・効果

組織にもたらす価値

---

## メリット

### 開発効率の向上

- 既存コードの**再構築不要**
- **コード量削減**により開発速度向上
- **統一されたセキュリティポリシー**を自動適用

### セキュリティ・コンプライアンス強化

<div class="columns">
<div>

#### 企業向けのメリット
- インフラ全体への**ポリシー一括適用**
- セキュリティの**人的ミス削減**
- コンプライアンス**監査への対応簡素化**

</div>
<div>

#### 開発チーム向けのメリット
- **新AWS機能への即日対応**を維持
- 高度な抽象化の**利便性も享受**
- カスタムライブラリ保守コスト**削減**

</div>
</div>

---

## 活用シーン

### シーン1: エンタープライズのセキュリティポリシー統一

```
経営層：「全S3バケットを暗号化してほしい」
  ↓
インフラチーム：Mixinで全バケットに自動適用
  ↓
開発チーム：既存コードそのまま、自動的にセキュリティ機能が追加される
```

### シーン2: スタートアップの柔軟な拡張

```
新機能をいち早く試す
  ↓ Mixinで標準ポリシーを後付け
本番環境への迅速な展開
```

---

<!-- _class: section -->

# 4. 技術詳細

実装のポイント

---

## 実装と利用開始

### 入手方法

- **AWS CDK v2**の `aws-cdk-lib` パッケージを通じて利用可能
- NPM/Maven/NuGet等の標準パッケージマネージャーから取得

### サポート範囲

- **全AWSリージョン**で利用可能（CloudFormationサポート対象地域）
- L1、L2、カスタムコンストラクト全てに対応

### ドキュメント

- [AWS CDK Mixins ドキュメント](https://docs.aws.amazon.com/cdk/v2/guide/mixins.html)
- [AWS CDKコミュニティの最新情報](https://dev.to/aws/)

---

## アーキテクチャの概念図

<div class="columns">
<div>

### 従来のアプローチ

```
L1コンストラクト
  ↓
+セキュリティ設定（手作業）
  ↓
+コンプライアンス対応（手作業）
  ↓
完成
```

</div>
<div>

### Mixinsのアプローチ

```
任意のコンストラクト
  ↓
.with(Mixin1)
.with(Mixin2)
.with(Mixin3)
  ↓
自動適用完了
```

</div>
</div>

---

<!-- _class: section -->

# 5. まとめ・次のステップ

---

## AWS CDK Mixinsまとめ

### 主なポイント

| 項目 | 内容 |
|-----|------|
| **提供開始** | 2026年3月12日（一般提供） |
| **対象** | L1、L2、カスタムコンストラクト全て |
| **利点** | コード非侵襲的、再利用可能、組織横断的ポリシー適用 |
| **入手** | aws-cdk-lib パッケージ（全AWSリージョン対応） |
| **用途** | セキュリティ・コンプライアンス自動適用、開発効率化 |

---

## 次のステップ

### すぐに始める

1. **AWS CDK環境の準備**
   ```bash
   npm install -g aws-cdk
   ```

2. **ドキュメントの確認**
   - [AWS CDK Mixins ガイド](https://docs.aws.amazon.com/cdk/v2/guide/mixins.html)

3. **既存プロジェクトへの適用**
   - セキュリティポリシーの検討
   - 標準Mixinの定義
   - パイロット適用

### 組織への展開

- 標準Mixinライブラリの構築
- ガイドラインの策定
- チーム内への教育・啓発

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-cdk-mixins/
- **AWS CDK ドキュメント**: https://docs.aws.amazon.com/cdk/v2/guide/mixins.html
- **AWS CDK GitHub**: https://github.com/aws/aws-cdk

### コミュニティ情報

- **AWS CDK Community Update**: https://dev.to/aws/aws-cdk-community-update-janfeb-2026-51jb
- **Announcing AWS CDK Mixins (Preview)**: https://dev.to/aws/announcing-aws-cdk-mixins-composable-abstractions-for-aws-resources-588m

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**