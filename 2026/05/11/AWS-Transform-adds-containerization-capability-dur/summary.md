# AWS Transformが移行中のコンテナ化機能をサポート

AWS Transform adds containerization capability during migrations

**カテゴリ:** What's New
**公開日:** 2026-05-11
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-transform-containerization/)

---

## 要約

AWS Transformの新しいコンテナ化機能により、ソースコードの自動分析とDockerイメージ生成を通じて、AWSへの移行と近代化を並行して実行できるようになりました。この機能は、オンプレミスからクラウドネイティブアーキテクチャへの移行を加速させたい企業の移行チームに最適です。

---

## このアップデートで何が変わったか

### 主な追加機能

1. **ソースコード自動分析**
   - GitHub、Bitbucket、GitLab、ZIPファイルからの自動分析
   - 言語、フレームワーク、依存関係の自動検出

2. **Docker化の自動化**
   - Dockerfileの自動生成
   - CVE脆弱性スキャン統合
   - コンテナイメージのビルドと最適化

3. **マルチリポジトリ対応**
   - モノレポジトリ構造への対応
   - マルチリポジトリの一括処理
   - AWS CodeArtifactによるプライベート依存関係解決

4. **インフラストラクチャコード自動生成**
   - Terraform IaC（Infrastructure as Code）の生成
   - Kubernetes用Helmチャートの生成

5. **移行ウェーブ計画との統合**
   - リホスト（従来の移行）とコンテナ化パスの選択肢提供
   - 段階的な移行実行の支援

---

## 対象ユーザー

- **エンタープライズ企業の移行チーム**: 大規模なアプリケーション移行プロジェクトを進める組織
- **クラウド近代化推進組織**: オンプレミスからクラウドネイティブアーキテクチャへの移行を検討中の企業
- **DevOps/SREチーム**: 自動化とスケーラビリティを求める技術チーム

---

## 詳細情報

### 利用可能な機能

#### ソースコードのコンテナ化
- GitHub、Bitbucket、GitLab、.zipファイルからのコード取得
- 自動的なDockerファイル生成
- Amazon ECRへの自動公開
- Amazon ECS または Amazon EKS へのデプロイ対応

#### セキュリティと品質
- CVE（Common Vulnerabilities and Exposures）の脆弱性スキャン統合
- デプロイ準備完了（Production Ready）のイメージ生成
- コンテナイメージの最適化

#### スケーラビリティ
- 数千のアプリケーションの並行処理に対応
- モノレポとマルチレポの両方に対応
- 大規模エンタープライズ環境での運用実績

#### デプロイメント自動化
- Terraform Infrastructure as Code の自動生成
- Helm チャートの自動生成（Kubernetes用）
- 複数環境への展開に対応

### 利用可能リージョン

AWS Transform が提供されているすべての AWS リージョンで利用可能

---

## ビジネスメリット

### 時間短縮
- 手動のコンテナ化作業を完全自動化
- 移行チームの工数を大幅削減
- 数千のアプリケーション処理も効率的に実行

### コスト削減
- 人的リソースの効率化
- エラーによる二度手間を排除
- クラウドネイティブアーキテクチャによる運用コスト削減

### リスク低減
- 統一的で信頼性の高いコンテナ化プロセス
- 脆弱性スキャン統合で事前検出
- 移行失敗のリスク大幅削減

### 迅速な近代化
- 移行と近代化を並行実行
- ビジネス価値の早期実現
- 競争力の強化

---

## 使用例

### ユースケース1: レガシーアプリケーション移行
- オンプレミスの.NET、Java、Pythonアプリケーション
- 自動コンテナ化で Amazon EKS での運用へ
- 運用負荷を大幅削減

### ユースケース2: 大規模エンタープライズマイグレーション
- 数百～数千のアプリケーション一括移行
- 移行ウェーブに基づいた段階的な実行
- 一部リホスト、一部コンテナ化の並行実行

### ユースケース3: クラウドネイティブ化推進
- Amazon ECS/EKS への完全移行
- マイクロサービスアーキテクチャへの移行
- DevOps 文化の確立

---

## 参考リソース

- **AWS What's New記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-transform-containerization/
- **AWS Transform ユーザーガイド**: https://docs.aws.amazon.com/transform/latest/userguide/transform-containers.html
- **Amazon ECR ドキュメント**: https://aws.amazon.com/ecr/
- **Amazon ECS ドキュメント**: https://aws.amazon.com/ecs/
- **Amazon EKS ドキュメント**: https://aws.amazon.com/eks/

---

*最終更新: 2026年5月11日*