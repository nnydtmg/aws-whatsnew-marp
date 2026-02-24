---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Trusted Advisor
NATゲートウェイ未使用検出の強化

**発表日: 2026年2月23日**

---

## 概要

### AWS Trusted Advisor がアップデート

- **AWS Compute Optimizer との統合により、未使用NATゲートウェイ検出精度が大幅向上**
- **32日間のルックバック期間でより正確に分析**
- **誤検知の削減と信頼性向上を実現**

### 主な改善点

- 追加CloudWatchメトリクスの分析
- ルートテーブルへの関連付け検証
- 推定月額コスト削減額の表示

---

## 前提・背景

### 企業のNATゲートウェイ管理の課題

- **不要なNATゲートウェイの放置**: ワークロード移行後に残存
- **コストの見落とし**: 未使用リソースによる無駄な月額費用
- **誤検知の問題**: 過去の不正確な検出ツールの限界
- **優先順位の困難**: 削減効果が不明確で対応優先度の判断が難しい

### コスト最適化の重要性

- AWS環境の継続的なコスト監視が必須
- 自動検出ツールによる効率的な最適化が求められている
- 定期的なリソース監査による無駄排除

---

## 主な機能と改善

### 1. AWS Compute Optimizer との連携

- 専門的な検出機能を Trusted Advisor に統合
- 機械学習による高精度な分析
- 複合的なメトリクスによる多角的判定

### 2. 強化された検出ロジック

- **32日間のルックバック期間**: 十分な期間でのアクティビティ分析
- **CloudWatch メトリクス分析**: バイトアウト/バイトイン情報の詳細確認
- **ルートテーブル検証**: 関連付け状況の確認で誤検知排除

### 3. 優先順位付け機能

- 推定月額コスト削減額を自動計算
- 金銭的インパクト順での整列
- 限定的なリソースで効果最大化

---

## 利用方法と対応スコープ

### アクセス方法

- **Trusted Advisor コンソール**: Web UIで直感的に確認
- **Trusted Advisor API**: プログラマティックなアクセス対応
- **他のコスト最適化チェックとの並行表示**

### 利用可能な環境

- **対象リージョン**: AWS Trusted Advisor がサポートされる全リージョン
- **前提条件**:
  - Cost Optimization Hub へのオプトイン
  - AWS Compute Optimizer へのオプトイン

---

## 効果・メリット

### コスト削減効果

- **不要な月額費用を自動検出**: 無駄な支出の見落とし防止
- **優先度付けによる効率化**: 最大効果を狙った施策実行
- **継続的な監視**: 定期的な自動監査でコスト管理を強化

### 運用面での効果

- **信頼性の向上**: 高精度検出による誤検知の排除
- **意思決定の迅速化**: 金銭的インパクト情報による即断が容易
- **ワークロード管理の簡素化**: 移行・廃止後のクリーンアップ自動化

### 組織レベルでの効果

- **ガバナンス強化**: 自動チェックによる規制対応
- **DevOpsの効率化**: DevOpsエンジニアの負担軽減
- **コスト最適化チームへの支援**: 分析時間の削減

---

## ユースケース

### ユースケース1: ワークロード移行時のクリーンアップ

```
オンプレミス → AWS への移行完了後
  ↓
旧環境用に作成したNATゲートウェイが残存
  ↓
Trusted Advisor が自動検出
  ↓
月額コスト削減額: $300/月 と表示
  ↓
即座に削除決定・実施
```

### ユースケース2: 定期的なコスト監査

- **月次レビュー**: Trusted Advisor を定期実行
- **最大効果の施策**: 削減額トップのNATゲートウェイから対応
- **コスト予測**: 過去データから最適化効果を予測

### ユースケース3: 複数アカウント管理

- **組織横断的な最適化**: AWS Organizations で統合管理
- **優先度付け**: 全アカウント内で最大インパクトの施策を選定
- **ガバナンス強化**: 全社的なコスト削減の推進

---

## まとめ

### このアップデートが実現すること

- **高精度な検出**: AWS Compute Optimizer との統合による信頼性向上
- **効率的なクリーンアップ**: 誤検知の排除と優先度付けで運用効率化
- **コスト最適化の加速**: 推定削減額の提示による意思決定の迅速化

### 推奨アクション

1. **Cost Optimization Hub と Compute Optimizer へのオプトイン確認**
2. **Trusted Advisor コンソールでの最初の実行**
3. **発見されたNATゲートウェイの検証と削除計画作成**
4. **月次レビューへの組み込み**

### 次のステップ

- AWS Trusted Advisor ドキュメント確認
- 自社環境でのパイロット実施
- チーム内での共有と運用ルール構築

---

## 参考リソース

### AWS公式ドキュメント

- **元記事**: [AWS Trusted Advisor now delivers more accurate unused NAT Gateway checks](https://aws.amazon.com/about-aws/whats-new/2026/02/trusted-advisor-unused-nat-gateway-check/)
- **Trusted Advisor ドキュメント**: https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html#idle-nat-gateways
- **Trusted Advisor チェックリファレンス**: https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor-check-reference.html
- **AWS Compute Optimizer**: https://docs.aws.amazon.com/compute-optimizer/

### 関連情報

- [AWS Network Firewall announces new price reductions](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-network-firewall-new-price-reduction/)
- [AWS Just Changed NAT Gateway — Here's What You Need to Know](https://dev.to/saheed_ea3f3e90be19db2eac/aws-just-changed-nat-gateway-heres-what-you-need-to-know-j52)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**