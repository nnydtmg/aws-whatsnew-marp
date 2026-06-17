---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Oracle Database@AWS が Oracle Autonomous AI Database Serverless に対応

AWS上でOracleの完全管理型AIデータベースが利用可能に

**発表日: 2026年6月17日**

---

## 概要

### Oracle Autonomous AI Database Serverless (ADB-S) の登場

- **Oracle Database@AWS** が **Oracle Autonomous AI Database Serverless** のサポートを開始
- AWS Management Consoleから直接プロビジョニング可能
- 完全管理型のOracleデータベースサービス

### 主なメリット

- スケーラビリティ、自動管理、高可用性を実現
- AIワークロード対応
- エンタープライズ向けの信頼性

---

## 前提・背景

### 従来の課題

- Oracleデータベースの管理が複雑
- 自動スケーリングやパッチ適用が手動対応
- AWSネイティブな統合が限定的

### 市場動向

- クラウドネイティブなデータベースの需要増加
- AIワークロードに対応するデータベースの必要性
- マルチクラウド戦略の普及

### Oracle AI Database@AWS の進化

- Dedicated Exadata Infrastructureをサポート済み
- Serverless型の柔軟な選択肢が不足
- AWS統合の強化が急務

---

## 主な機能・特徴

### 1. サーバーレスアーキテクチャ

- Exadataインフラストラクチャ上の完全管理型サービス
- パッチ適用、チューニング、スケーリングが自動処理
- 運用負担を大幅に削減

### 2. 複数のワークロードタイプをサポート

| ワークロード種 | 用途 |
|--------------|------|
| **AI Transaction Processing** | トランザクション処理 |
| **AI Lakehouse** | データレイク用途 |
| **AI JSON Database** | JSON形式データ処理 |
| **Oracle APEX** | Webアプリケーション開発 |

### 3. 柔軟なスケーリング

- コンピュートとストレージを独立してスケーリング
- ワークロード需要に応じて動的に調整
- コスト最適化を実現

---

<!-- _class: small -->

## セキュリティ・信頼性機能

### 高可用性とディザスタリカバリ

- **Autonomous Data Guard**: 自動フェイルオーバー機能
- **Amazon S3への自動バックアップ**: データ保護
- **リージョン間ディザスタリカバリ**: 業務継続性確保

### AWSサービスとの統合

- **AWS Key Management Service (KMS)**: 暗号化キー管理
- **Amazon CloudWatch**: 監視・ロギング
- **Amazon EventBridge**: イベント駆動アーキテクチャ

### プロビジョニングオプション

- AWS Management Console から直接作成
- AWS CLI / AWS API での自動化対応
- 専用インフラストラクチャ不要

---

## 利用シーン・ユースケース

### 適用対象

<div class="columns-3">
<div>

### エンタープライズ

- スケーラブルなデータベースが必要
- ミッションクリティカルなアプリ
- 高可用性要件

</div>
<div>

### AI/ML ワークロード

- Vector Searchを活用
- RAG（検索拡張生成）
- 生成AIアプリケーション

</div>
<div>

### 開発・検証

- 迅速なプロトタイプ開発
- 本番環境へのマイグレーション
- AWS環境での統合検証

</div>
</div>

---

## 効果・メリット

### 運用面

- ✅ パッチ、チューニング、スケーリング自動化
- ✅ インフラストラクチャ管理の負担軽減
- ✅ 専有インフラ不要で低い初期投資

### パフォーマンス

- ✅ 高いパフォーマンス（Exadataベース）
- ✅ 低遅延なレスポンス
- ✅ スケーラビリティで成長に対応

### コスト最適化

- ✅ 使った分だけ支払い（サーバーレス）
- ✅ AWS コミットメント利用可能
- ✅ 無駄なリソース排除

### 統合・連携

- ✅ AWS管理コンソール統一管理
- ✅ AWS サービスとのシームレス統合
- ✅ CloudWatch、EventBridgeでの監視・イベント化

---

## 利用開始方法

### ステップ1: AWS Management Consoleで作成

1. Oracle Database@AWS コンソールへアクセス
2. Autonomous AI Database Serverless を選択
3. ワークロードタイプを選択
4. パラメータを設定して作成

### ステップ2: 接続・利用

```
SQL*Plus、SQLcl、ODBC、JDBC など
標準的なOracleクライアントで接続可能
```

### 利用可能リージョン

- **米国東部 (バージニア北部)**
- **米国西部 (オレゴン)**

---

## まとめ

### Oracle Database@AWS Serverless の位置づけ

- **完全管理型**: パッチ、チューニング、スケーリング自動化
- **AI対応**: Vector Search、RAG、生成AI対応
- **AWSネイティブ**: 管理コンソール、サービス統合が充実
- **エンタープライズグレード**: 高可用性、ディザスタリカバリ対応

### 次のステップ

1. 既存Oracleワークロードの評価・整理
2. パイロットプロジェクトの実施
3. 本番環境への段階的移行
4. AI ワークロード活用の検討

### おすすめ活用シーン

- 🎯 新規AI/MLアプリケーション開発
- 🎯 既存Oracleシステムのクラウド化
- 🎯 ハイブリッドクラウド戦略の実装

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/oracle-database-aws-autonomous-database-serverless/
- **What's New for Oracle AI Database@AWS**: https://docs.oracle.com/en-us/iaas/Content/database-at-aws/oaaws-whats-new.htm
- **Oracle AI Database@AWS**: https://aws.amazon.com/oracle/
- **Amazon EC2からの接続例**: https://qiita.com/shirok/items/06f3bca71ae6378a844e

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**