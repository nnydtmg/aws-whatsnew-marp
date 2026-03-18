---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Config が 75 個の新しいマネージドルールをリリース

セキュリティ、耐久性、運用性の向上を実現

**発表日: 2026年3月18日**

---

## 概要

### AWS Config の主要な3つのアップデート

- **75 個の新しいマネージドルール追加**: セキュリティ、耐久性、運用に対応
- **対応サービス拡大**: AWS Amplify、Amazon SageMaker、Amazon Route 53 など
- **ガバナンス効率化**: Conformance Packs でアカウント/組織単位で一括デプロイ可能

### コンプライアンスチェック機能

- タグ付けの確認
- 暗号化設定の検証
- ヘルスチェック設定の確認
- 多様なセキュリティ評価

---

## 前提・背景

### AWS Config の役割

- AWS リソースの構成変化を継続的に監視・評価
- コンプライアンスと運用性を強化
- 大規模環境でのガバナンスが複雑化

### 市場動向

- クラウド環境でのセキュリティ要件の厳格化
- マルチアカウント・マルチサービス環境の増加
- 自動化されたコンプライアンスチェックの需要増加

---

## 対応する新サービス

### セキュリティ関連

- **ACM** (AWS Certificate Manager): 証明書の透明性ログ有効化確認
- **CloudTrail**: イベントデータストアのマルチリージョン設定
- **IAM**: OIDC プロバイダーのクライアント ID リスト確認

### インフラ・コンテナ関連

- **AWS Amplify**: アプリビルド設定、ブランチ設定の確認
- **AppMesh**: ヘルスチェックと TLS 強制設定
- **ECS**: タグ伝播設定の確認

---

## 対応する新サービス（続き）

### データ・分析関連

- **Amazon SageMaker**: データ品質ジョブの暗号化・分離確認
- **Amazon Route 53**: リカバリー設定のタグ付け確認
- **OpenSearch Serverless**: コレクションの説明と スタンバイレプリカ設定

### ストレージ・その他

- **RDS**: クラスタバックアップ保持期間の確認
- **S3**: ディレクトリバケットのライフサイクルポリシー確認
- **Lambda**: ログレベルと JSON ログ形式の設定確認

---

## 新ルールの主要カテゴリ

<!-- _class: small -->

| カテゴリ | ルール数 | 主な対象サービス |
|---------|--------|----------------|
| セキュリティ | 25+ | ACM、CloudTrail、IAM、AppMesh |
| タグ管理 | 20+ | 全サービス共通 |
| 暗号化・通信 | 15+ | ECS、SageMaker、RDS |
| ヘルスチェック | 10+ | AppMesh、ELBv2 |
| コンプライアンス | 5+ | Route 53、S3 |

### 新規マネージドルールの例

- **AMPLIFY_APP_BUILD_SPEC_CONFIGURED**: Amplify アプリのビルド設定確認
- **APPMESH_VIRTUAL_NODE_LISTENERS_HEALTH_CHECK_ENABLED**: ヘルスチェック有効化確認
- **SAGEMAKER_DATA_QUALITY_JOB_ENCRYPT_IN_TRANSIT**: データ品質ジョブの暗号化確認

---

## 効果・メリット

### 運用効率の向上

- **自動化**: 手動チェックを排除し、継続的コンプライアンス監視が可能
- **スケーラビリティ**: Conformance Packs で組織全体に一括デプロイ
- **時間短縮**: 新しいサービスに対応したルールをすぐに活用

### ガバナンス強化

- **多層的な検証**: セキュリティ、耐久性、運用の 3 軸で評価
- **リスク低減**: タグ付け、暗号化、ヘルスチェック設定を一元管理
- **監査対応**: ルール履歴と評価結果の可視化

---

## ユースケース

### ケース 1: セキュリティ監査

- 暗号化設定の自動検証
- タグベースのアクセス制御確認
- コンプライアンス違反の早期発見

### ケース 2: マルチアカウント管理

- 組織全体で統一したルールを適用
- 各アカウントのコンプライアンス状況を一元管理
- 修正対象の自動特定

### ケース 3: 新規サービス導入

- SageMaker や Amplify 導入時の自動チェック
- ベストプラクティスの強制
- 本番環境移行前の検証

---

## 使用方法

### ステップ 1: AWS Config コンソールにアクセス

```
AWS Management Console → AWS Config
```

### ステップ 2: ルールを検索・有効化

- コンソールから新しいルールを検索
- 対象サービスに応じてルールを選択
- 有効化してリソースの評価を開始

### ステップ 3: Conformance Packs でデプロイ

```
AWS Config → Conformance Packs → Create
```

- 事前定義されたパックまたはカスタムパックを選択
- 組織内のアカウントを指定
- 一括デプロイを実行

---

## 利用可能なリージョン

- AWS Config が利用可能なすべてのリージョンで新ルールが提供されます
- 各ルールのリージョン可用性は AWS Config マネージドルール ドキュメントで確認可能
- 定期的に新しいリージョン対応が追加される予定

---

## まとめ

### AWS Config の進化

- **75 個の新しいマネージドルール** で対応範囲を大幅に拡大
- **セキュリティ、耐久性、運用** の 3 軸でガバナンスを強化
- **Conformance Packs** で組織規模での一元管理を実現

### 次のステップ

1. 自社環境で必要なルールを特定
2. パイロット環境で検証・テスト
3. Conformance Packs で段階的にロールアウト
4. モニタリング・改善を継続実施

---

## 参考リソース

- **AWS What's New**: [AWS Config launches 75 new managed rules](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-config-launches-new-rules/)
- **AWS Config 開発者ガイド**: [https://docs.aws.amazon.com/config/latest/developerguide/](https://docs.aws.amazon.com/config/latest/developerguide/)
- **マネージドルール一覧**: [https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html)
- **ルール評価の開始**: [https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_add-rules.html](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_add-rules.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
