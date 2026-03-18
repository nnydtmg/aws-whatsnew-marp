# Amazon ECR now supports pull through cache for Chainguard

**カテゴリ:** What's New  
**公開日:** 2026年3月18日  
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-ecr-pull-through-cache-chainguard/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-ecr-pull-through-cache-chainguard/)

---

## 要約

Amazon ECRのプルスルーキャッシュがChainguardレジストリに対応し、顧客はChainguardイメージを追加ツールなしに同期・管理でき、ECRのセキュリティ機能を活用できるようになりました。この機能は全対応リージョンで利用可能です。

---

## 詳細

### 新機能の概要

- **Chainguardレジストリ統合**: Amazon ECR（Elastic Container Registry）のプルスルーキャッシュ機能が、Chainguardのレジストリをアップストリームソースとしてサポート

- **セキュリティと可用性の向上**: 顧客はChainguardのプライベートイメージをAmazon ECRのセキュリティと可用性を活用して管理可能に

- **運用効率化**: Chainguardイメージを同期させるために、追加のワークフローやツール管理が不要

- **自動同期機能**: ECRのプルスルーキャッシュは頻繁なレジストリ同期をサポートしており、Chainguardから取得したコンテナイメージを最新の状態に保つことが可能

- **統合セキュリティ機能**: キャッシュされたChainguardイメージに対して、イメージスキャンやライフサイクルポリシーなどのECR機能を適用可能

- **グローバル対応**: この機能は、Amazon ECRプルスルーキャッシュがサポートされているすべてのAWSリージョンで利用可能

### 利用方法

1. **認証情報の設定**
   - Chainguardのレジストリ認証情報をAWS Secrets Managerに保存
   - シークレット名には `ecr-pullthroughcache/` プレフィックスを使用

2. **プルスルーキャッシュルールの作成**
   - Amazon ECRコンソール → Private registry → Pull through cache
   - レジストリとして "Chainguard Registry" を選択
   - リポジトリプレフィックスを指定（例：`chainguard`）

3. **イメージのプル**
   ```
   docker pull <account-id>.dkr.ecr.<region>.amazonaws.com/chainguard/<image-name>:<tag>
   ```

4. **ポリシーの適用**
   - イメージスキャン、ライフサイクルポリシーなどを設定

### 技術的特徴

- **24時間ごとの自動更新**: キャッシュ内の最後のプルから24時間以内に、アップストリームレジストリから新しいバージョンがないか確認
- **フェイルセーフ機構**: アップストリームが利用不可の場合でも、最後のキャッシュイメージを提供
- **リポジトリ作成テンプレート**: プルスルーキャッシュで作成されるリポジトリの初期設定をテンプレートで制御可能

### メリット

1. **運用効率化**
   - 複数のツールやスクリプト不要でコンテナイメージを管理
   - AWS内での一元管理

2. **セキュリティ向上**
   - Chainguardのセキュアイメージで脆弱性を最小化
   - ECRのスキャン機能で継続的に監視

3. **可用性向上**
   - キャッシュにより外部レジストリの障害の影響を軽減
   - ネットワークトラフィックの最適化

### 対応リージョン

Amazon ECRプルスルーキャッシュがサポートされているすべてのAWSリージョンで利用可能

---

## 関連情報

- Amazon ECRはコンテナイメージの保存、管理、デプロイメントを行うマネージドコンテナレジストリサービス
- Chainguardは、セキュリティを第一に考えた最小限のコンテナイメージを提供するプロバイダー
- プルスルーキャッシュ機能は、他にもDocker Hub、ECR Public、Kubernetes、Quayなど複数のレジストリをサポート