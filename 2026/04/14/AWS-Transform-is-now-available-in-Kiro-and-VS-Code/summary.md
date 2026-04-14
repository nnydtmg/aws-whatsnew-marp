# AWS Transform is now available in Kiro and VS Code

**カテゴリ:** What's New
**公開日:** 2026-04-14
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transform-kiro-vscode/)

---

## 要約

AWS Transformは、KiroおよびVS Codeでの新たな統合により、開発者が既に使用しているツール環境から直接、大規模なインフラストラクチャ移行と技術債削減を実施できるようになりました。このアップデートは、エンタープライズ変革のタイムラインを数年から数ヶ月に短縮し、複数のリポジトリ全体での効率的な変換を求める組織に特に有益です。

---

## 詳細

### サービス概要

AWS Transformは、エージェント型の移行・最新化ファクトリーです。大規模インフラストラクチャ移行から継続的な技術債削減まで、手動のハンドオフと文脈の喪失なく対応します。

### 新しい統合

**Kiro での利用方法**
- AWS Transform Power を Kiro にインストール
- Kiro 内から直接 AWS Transform を実行可能

**VS Code での利用方法**
- AWS Transform 拡張機能を VS Code にインストール
- Visual Studio Code Marketplace から入手可能

### 対応する変換

**AWS 管理変換**
- Java、Python、Node.js のバージョンアップグレード
- AWS SDK 移行 (boto2 → boto3、Java SDK v1 → v2、JS SDK v2 → v3)

**カスタム変換**
- 独自の変換ルールを定義可能
- 企業固有のニーズに対応

### 主な機能

- **ツール表面の統合**: Web コンソール、CLI、IDE で状態を共有
- **大規模実行**: 数千のリポジトリ全体でのエージェント実行が容易
- **カスタム変換の構築**: 新しいツール表面により、カスタム変換の構築と反復が容易
- **進捗追跡**: IDE で開始し、Web コンソールで進捗を追跡、CLI で完成させることが可能

### リージョン対応

**AWS Transform**
- すべての AWS コマーシャルリージョンに対応

**AWS Transform Custom**
- US East (N. Virginia)
- Europe (Frankfurt)
- ※ 順次拡大予定

### 対象組織

- エンタープライズレベルのインフラストラクチャ移行を実施する組織
- 大規模な技術債削減を推進するチーム
- IDE 内で開発作業を行いながら、移行・最新化タスクを効率化したい開発者
- 複数のリポジトリにわたる一括変換が必要な企業

### ビジネスメリット

- **時間短縮**: エンタープライズ変革のタイムラインを数年から数ヶ月に短縮
- **効率化**: 複数リポジトリにわたる効率的な変換が可能
- **品質向上**: 一貫した変換により、品質を維持
- **開発者効率**: IDE 統合により、ワークフロー分断を解消

### 参考リソース

- **AWS Transform 製品ページ**: https://aws.amazon.com/transform
- **ユーザーガイド**: https://docs.aws.amazon.com/transform/latest/userguide/what-is-service.html
- **Kiro - AWS Transform Power**: https://github.com/kirodotdev/powers/tree/main/aws-transform
- **VS Code 拡張機能**: https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-transform-plugin
