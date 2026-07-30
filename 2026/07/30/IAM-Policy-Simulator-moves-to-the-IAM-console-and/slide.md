---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAM Policy SimulatorがIAMコンソールに統合、新機能も追加

IAM Policy Simulator moves to the IAM console and adds additional capabilities

**What's New** | 2026-07-30

---

## 概要

### 主な変更点

- IAM Policy Simulator が IAM コンソールに統合
- SCP（Service Control Policies）のテスト機能を追加
- 条件キーのシミュレーション機能を追加
- ポリシー除外機能を追加

### 期待される効果

- ポリシーユニットテストの自動化が可能に
- 過度なアクセス権限の検出がより効率的に
- ガードレール検証がより信頼性高く実施可能に

---

## 前提・背景

### 従来の課題

- IAM Policy Simulator がスタンドアロンサイトで提供されていた
- IAM コンソールとの切り替えが必要
- ポリシー検証の手間が多い

### 市場の動向

- セキュリティとコンプライアンス要件の厳格化
- IAM ポリシー管理の複雑化
- 効率的なアクセス制御自動化への需要増加

---

## 変更内容・新機能

### 統合とコンソール内テスト

- IAM Policy Simulator が IAM コンソールに統合
- IAM コンソール内でポリシーテスト・検証が可能に

### SCP テストサポート

- Service Control Policies (SCPs) のテストをサポート
- 組織の SCP 階層とポリシーの相互作用をテスト可能

### 条件キーのシミュレーション

- API を通じてリージョン制限やタグ要件などの条件キーを含めて実行
- より現実的なシナリオでテスト

---

## 変更内容・新機能（続き）

### ポリシー除外機能

- 特定のポリシーを除外してシミュレーション実行可能
- 「このポリシーを削除した場合」のシナリオをモデル化

### クロスアカウント対応

- クロスアカウントシミュレーションにて、ポリシーごとの決定が報告
- 拒否リクエストの場合、マッチしたステートメントのみが返却

---

## 効果・メリット

### セキュリティチームへのメリット

- ポリシーユニットテストの自動化が容易に
- 過度なアクセス権限の検出がより正確・効率的に
- ガードレール検証がより信頼度高く実施可能

### 運用効率の向上

- IAM コンソール内で完結した作業フロー
- スタンドアロンサイトとの切り替え不要
- 検証プロセスの標準化が容易に

---

## ユースケース

### セキュリティチームのワークフロー

1. IAM ポリシー変更を提案
2. IAM コンソール内で Policy Simulator を起動
3. SCPs を含めたテスト実行
4. 各種条件キーでシミュレーション
5. 結果に基づいてポリシー調整

### ガバナンス要件への対応

- 最小権限の原則の検証を自動化
- 組織横断的な SCP ルール遵守の確認
- 定期的なアクセス権限監査の効率化

---

## まとめ

### 主な成果

- IAM Policy Simulator の IAM コンソール統合により、ポリシー検証がより身近に
- SCP、条件キー、ポリシー除外など、新機能が多数追加
- セキュリティ・プラットフォームチームの作業効率が大幅に向上

### 次のステップ

1. 自社の IAM ポリシー体系を棚卸し
2. 新 Policy Simulator での検証プロセスを構築
3. セキュリティチームへのトレーニング実施
4. 本番運用への段階的移行

---

## 参考URL

- **AWS What's New**: [IAM Policy Simulator moves to the IAM console and adds additional capabilities](https://aws.amazon.com/about-aws/whats-new/2026/07/iam-policy-simulator-iam-console/)
- **AWS IAM ドキュメント**: [IAM policy testing with the IAM policy simulator](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**