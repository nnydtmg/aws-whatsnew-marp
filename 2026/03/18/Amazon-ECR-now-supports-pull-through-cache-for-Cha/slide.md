---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon ECR
Chainguardのプルスルーキャッシュに対応

**発表日: 2026年3月18日**

---

## 概要

### Amazon ECRの最新機能

- **Chainguardレジストリ対応**: Amazon ECRのプルスルーキャッシュが、Chainguardのレジストリをアップストリームソースとしてサポート
- **シンプルな管理**: Chainguardイメージを追加ツールなしに同期・管理が可能
- **セキュリティ機能統合**: ECRのセキュリティ機能（イメージスキャン、ライフサイクルポリシー）を活用可能
- **グローバル対応**: すべての対応リージョンで利用可能

---

## 前提・背景

### コンテナセキュリティの課題

- **脆弱性管理**: 従来のベースイメージには多くのCVEが含まれる
- **イメージ同期**: Chainguardのプライベートイメージを複数レジストリで管理するのは複雑
- **運用負荷**: 異なるレジストリ間でのツール・ワークフロー管理の必要性

### 市場動向

- **セキュリティ重視**: ゼロCVEまたはCVEなしのコンテナイメージへの需要増加
- **統合化**: AWS内でコンテナ管理を一元化したいユーザーの増加
- **Chainguard採用**: セキュアなコンテナイメージとしてChainguardの人気が上昇

---

## 変更内容・新機能

### 1. Chainguardレジストリ統合

- Amazon ECRのプルスルーキャッシュが、Chainguardをアップストリームソースとして正式対応
- 認証情報をAWS Secrets Managerに保存
- プルスルーキャッシュルールで自動的にリポジトリを作成・管理

### 2. 自動同期とキャッシュ

- **24時間ごとの自動更新**: 最新版のChainguardイメージに自動更新
- **頻繁なレジストリ同期**: コンテナイメージを常に最新の状態に保持
- **キャッシュ保障**: アップストリームが一時的に利用不可でも、最後のキャッシュイメージを利用可能

### 3. ECR機能の活用

- **イメージスキャン**: キャッシュされたChainguardイメージに対してECRのスキャン機能を適用
- **ライフサイクルポリシー**: 古いイメージの自動削除ルールを設定
- **アクセス制御**: IAMとリソースベースのポリシーで細かく制御

---

<!-- _class: small -->

## 利用方法

### セットアップ手順

1. **認証情報を作成**: Chainguardのレジストリ認証情報をAWS Secrets Manager に保存
   - シークレット名には `ecr-pullthroughcache/` プレフィックスを使用

2. **プルスルーキャッシュルールを作成**
   - Amazon ECRコンソール → Private registry → Pull through cache
   - Registry: Chainguard Registry
   - リポジトリプレフィックス: `chainguard` など

3. **イメージをプル**
   ```bash
   docker pull <account-id>.dkr.ecr.<region>.amazonaws.com/chainguard/<image-name>:<tag>
   ```

4. **ポリシーを適用**: イメージスキャン、ライフサイクルポリシーなどを設定

---

## 効果・メリット

### 運用効率化

- **ワークフロー削減**: 複数ツール・外部スクリプト不要で管理可能
- **一元管理**: AWS内ですべてのコンテナイメージを一箇所に集約
- **自動更新**: 手動の同期作業が不要に

### セキュリティ向上

- **CVE削減**: Chainguardのセキュアイメージで脆弱性を最小化
- **常時最新**: 24時間ごとの自動更新で最新パッチを適用
- **統合セキュリティ**: ECRのスキャンと組み合わせて多層防御

### コスト削減

- **ネットワーク最適化**: キャッシュにより不要な再取得を削減
- **運用コスト削減**: 自動化により手作業を大幅削減
- **AWSエコシステム**: 追加ツールのライセンス不要

---

## ユースケース

### 1. セキュア開発パイプライン

- **環境**: マイクロサービスアーキテクチャ
- **課題**: 脆弱性を最小化したベースイメージが必要
- **効果**: Chainguardイメージを自動同期し、CVE削減を実現

### 2. エンタープライズ運用

- **環境**: 複数AWSアカウント、複数リージョン展開
- **課題**: コンテナイメージのライフサイクル管理が複雑
- **効果**: ECRの統合管理で運用を簡素化

### 3. コンプライアンス対応

- **環境**: 規制業界（金融、医療など）
- **課題**: イメージの監査ログ、スキャン結果の追跡が必要
- **効果**: ECRのスキャンとメタデータで完全なトレーサビリティを実現

---

## まとめ

### 主なポイント

- Amazon ECRのプルスルーキャッシュが、**Chainguardレジストリに正式対応**
- **シンプルな設定**: 数ステップでChainguardイメージの管理が可能
- **自動同期**: 24時間ごとに最新版に自動更新
- **統合セキュリティ**: ECRのスキャン機能で脆弱性を一元管理
- **グローバル展開**: すべての対応リージョンで利用可能

### 次のステップ

1. AWS Secrets Managerに認証情報を登録
2. ECRコンソールでプルスルーキャッシュルールを作成
3. 既存パイプラインにChainguardイメージを統合
4. ECRのスキャンとライフサイクルポリシーを設定

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-ecr-pull-through-cache-chainguard/
- **Amazon ECR ドキュメント**: https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html
- **プルスルーキャッシュ設定ガイド**: https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache-creating-rule.html
- **Chainguardコンテナイメージ**: https://www.chainguard.dev/
- **ECR Public ブログ**: https://aws.amazon.com/blogs/containers/expanding-container-security-and-choice-with-amazon-ecr-public/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**