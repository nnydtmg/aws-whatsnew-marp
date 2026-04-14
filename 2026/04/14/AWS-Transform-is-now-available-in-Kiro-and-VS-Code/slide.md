---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Transform
Kiro と VS Code で利用開始

**発表日: 2026年4月14日**

---

## 概要

### 3つの主要なポイント

- **IDE統合**: Kiro と VS Code で AWS Transform を直接利用可能
- **タイムライン短縮**: エンタープライズ変革を数年から数ヶ月に短縮
- **スケーラビリティ**: 複数リポジトリにわたる大規模変換に対応

---

<!-- _class: section -->

# 1. 背景・課題

---

## 背景

### エンタープライズ変革の課題

- **長期化**: 大規模なインフラストラクチャ移行には数年を要する
- **手動作業**: 手動のハンドオフにより文脈が喪失
- **技術債**: 継続的に蓄積される技術債の削減が困難
- **ツール分散**: 複数のツールを使い分ける必要がある

### 開発者の課題

- IDE外での作業が必要
- ワークフローが分断される
- スケーラビリティの限界

---

<!-- _class: section -->

# 2. AWS Transform について

---

## AWS Transform とは

### サービス概要

**エージェント型の移行・最新化ファクトリー**

- 大規模インフラストラクチャ移行に対応
- 継続的な技術債削減をサポート
- 手動のハンドオフを排除
- 文脈の喪失を防止

### 主な特徴

- **自動化**: エージェント型システムによる自動変換
- **柔軟性**: カスタム変換の定義が可能
- **スケール**: 数千のリポジトリにわたる一括実行

---

<!-- _class: section -->

# 3. Kiro / VS Code 統合

---

## 新機能: IDE統合

### Kiro での利用方法

- **AWS Transform Power をインストール**
- Kiro 内から直接 AWS Transform を実行
- GUI ベースの操作が可能

### VS Code での利用方法

- **AWS Transform 拡張機能をインストール**
- VS Code Marketplace から取得可能
- 開発中のコードから直接変換を開始

### ワークフローの利点

- 開発者が既に使用しているツール環境から直接開始
- IDE を離れずに作業完結
- ジョブ状態がすべてのツール表面で共有

---

## ユースケース

### シナリオ 1: .NET アプリケーションの現代化

1. VS Code で AWS Transform 拡張機能を起動
2. 古い .NET Framework アプリケーションを選択
3. 自動的に .NET 8 にアップグレード
4. コンパイルエラーを修正
5. 進捗を Web コンソールで追跡

### シナリオ 2: 大規模マイグレーション

1. Kiro で AWS Transform Power をインストール
2. 複数のリポジトリ全体にわたる Java バージョンアップグレードを定義
3. エージェントが数千のリポジトリを並行処理
4. 数ヶ月で完了（従来は数年)

---

<!-- _class: section -->

# 4. 対応する変換パターン

---

## AWS 管理変換

### 言語バージョンアップグレード

- **Java**: エンタープライズ対応の最新バージョンへ
- **Python**: Python 2.x から 3.x へ（セキュリティ向上）
- **Node.js**: 長期サポート版への自動アップグレード

### AWS SDK 移行

- **Python**: boto2 → **boto3**
- **Java**: AWS SDK v1 → **v2**（パフォーマンス向上）
- **JavaScript**: AWS SDK v2 → **v3**（バンドルサイズ削減）

---

## カスタム変換

### 定義可能な独自変換

- 企業固有のライブラリの置き換え
- 非推奨 API の自動置き換え
- 内部的なコーディング規約への準拠
- フレームワークのバージョンアップ

### 構築と反復

- **ビルダー機能**: カスタム変換を GUI で構築
- **テスト実行**: 小規模なサブセットで検証
- **スケール実行**: 検証後、全体に展開

---

<!-- _class: section -->

# 5. 利点・効果

---

## ビジネス効果

### 時間短縮

- **変革タイムライン**: 数年 → **数ヶ月**
- **開発速度**: 手動作業を自動化
- **市場投入**: 迅速な現代化により競争力を強化

### コスト削減

- **人件費**: 手動のハンドオフを削減
- **リスク低減**: 文脈喪失による再作業を防止
- **スケール効率**: 複数プロジェクトに適用可能

---

## 技術効果

### 品質向上

- **一貫性**: エージェント型システムによる統一的な変換
- **文脈保持**: 手動のハンドオフを排除
- **検証**: 各ステップで状態追跡が可能

### 開発効率

- **IDE統合**: ワークフロー分断を解消
- **ジョブ追跡**: Web コンソール / CLI / IDE 全体で共有
- **柔軟な開始・終了**: 任意のツール表面で開始・完了

---

<!-- _class: section -->

# 6. リージョンとサポート

---

## リージョン対応

### AWS Transform

**全 AWS コマーシャルリージョン対応**

- US East (N. Virginia)
- Europe (Frankfurt)
- Asia Pacific 他

### AWS Transform Custom

**現在利用可能なリージョン**

- **US East (N. Virginia)**
- **Europe (Frankfurt)**

*注: 順次拡大予定*

---

## 対象組織

### おすすめのユースケース

- ✅ エンタープライズレベルのインフラストラクチャ移行を実施
- ✅ 大規模な技術債削減を推進
- ✅ IDE 内で開発しながら移行・最新化を効率化
- ✅ 複数リポジトリにわたる一括変換が必要
- ✅ 開発者が既に使用しているツールで作業したい

---

<!-- _class: section -->

# 7. まとめ

---

## 要点

### AWS Transform の新機能

1. **IDE 統合**: Kiro と VS Code で直接利用可能に
2. **スケーラビリティ**: 数千リポジトリの並行処理
3. **柔軟な変換**: AWS 管理変換とカスタム変換の両対応
4. **ワークフロー統合**: Web / CLI / IDE で状態共有

### エンタープライズへのインパクト

- **タイムライン短縮**: 数年 → 数ヶ月
- **コスト削減**: 自動化による効率化
- **品質向上**: 一貫性のある変換
- **開発者満足度**: ツール分断を解消

---

## 次のステップ

### 1. まずはお試しを

- Kiro の [AWS Transform Power](https://github.com/kirodotdev/powers/tree/main/aws-transform) をインストール
- または VS Code の [AWS Transform 拡張機能](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-transform-plugin) をインストール

### 2. 詳細情報

- [AWS Transform 製品ページ](https://aws.amazon.com/transform)
- [ユーザーガイド](https://docs.aws.amazon.com/transform/latest/userguide/what-is-service.html)

### 3. サポート

- AWS コンソールからドキュメントにアクセス
- [AWS Support](https://aws.amazon.com/support/) にお問い合わせ

---

## 参考リソース

- **AWS What's New 記事**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transform-kiro-vscode/
- **AWS Transform**: https://aws.amazon.com/transform
- **Kiro - AWS Transform Power**: https://github.com/kirodotdev/powers/tree/main/aws-transform
- **VS Code 拡張機能**: https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-transform-plugin
- **ユーザーガイド**: https://docs.aws.amazon.com/transform/latest/userguide/what-is-service.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
