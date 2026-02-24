# AWS Trusted Advisor now delivers more accurate unused NAT Gateway checks powered by AWS Compute Optimizer

**カテゴリ:** What's New
**公開日:** 2026年2月23日
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/trusted-advisor-unused-nat-gateway-check/](https://aws.amazon.com/about-aws/whats-new/2026/02/trusted-advisor-unused-nat-gateway-check/)

---

## 要約

AWS Trusted Advisorが、AWS Compute Optimizerの検出機能を活用した強化されたNATゲートウェイ未使用検出を提供開始しました。このアップデートは、コスト最適化チームとDevOpsエンジニアが、推定月額コスト削減額を基に優先順位を付けながら、不要なNATゲートウェイを効率的に特定・削除するのに最適です。

---

## 主な改善点

### 検出精度の向上

- AWS Trusted Advisorが、AWS Compute Optimizerの検出機能を活用して、未使用のNATゲートウェイの検出精度を大幅に向上させました
- 32日間のルックバック期間にわたって追加のCloudWatchメトリクスを分析
- NATゲートウェイがルートテーブルに関連付けられているかを検証することで、誤検知を削減

### コスト最適化の効率化

- 各推奨事項に推定月額コスト削減額が含まれており、金銭的影響に基づいて優先順位を付けてクリーンアップを実行可能
- このアップデートは、コスト最適化チームとDevOpsエンジニアが、不要な料金が発生している未使用のNATゲートウェイを自信を持って特定・削除するのに役立つ

### 統合的な利用

- Trusted AdvisorコンソールまたはAPIを通じて、他のコスト最適化チェックと並行してこれらの推奨事項を表示・実行可能
- ワークロード移行やリソース廃止後に残されたアイドル状態のNATゲートウェイを簡単にクリーンアップ

---

## 対応スコープ

### 利用可能なリージョン

- AWS Trusted AdvisorがサポートされているすべてのAWSリージョンで利用可能

### アクセス要件

- Cost Optimization HubとCompute Optimizerにオプトインしている組織が、これらの強化された推奨事項にアクセス可能

---

## 技術的な詳細

### 検出ロジック

1. **32日間のルックバック期間**: 十分な期間でのアクティビティを分析
2. **CloudWatchメトリクス分析**: バイトアウト/バイトインなどの詳細情報を確認
3. **ルートテーブル検証**: NATゲートウェイの関連付け状況を確認
4. **誤検知の排除**: 上記の複合分析で、バックアップなどの重要なリソースを誤検知から除外

### 推奨事項の情報

- 推定月額コスト削減額が自動計算される
- 金銭的インパクト順での優先度付け
- すぐに実行可能なクリーンアップ提案

---

## ユースケース

### 1. ワークロード移行時のクリーンアップ

- オンプレミス→AWS移行完了後、旧環境用のNATゲートウェイが残存する問題を自動検出
- 削減できるコスト額を明確化し、迅速な判断・実行を支援

### 2. 定期的なコスト監査

- 月次レビューでTrusted Advisorを実行
- 最大効果が期待できる施策から優先的に対応
- 継続的なコスト最適化を実現

### 3. 複数アカウント管理

- AWS Organizations との連携で全アカウント横断的に最適化
- 全社的なコスト削減イニシアティブをサポート

---

## 利用開始方法

### 前提条件の確認

1. Cost Optimization Hub へのオプトイン
2. AWS Compute Optimizer へのオプトイン

### アクセス方法

- **Web コンソール**: AWS Trusted Advisor コンソールで確認
- **API**: Trusted Advisor API を通じてプログラマティックなアクセス

### 参考ドキュメント

- [AWS Trusted Advisor 公式ドキュメント](https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html#idle-nat-gateways)

---

## 関連情報

- [AWS Network Firewall announces new price reductions](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-network-firewall-new-price-reduction/)
- [AWS Trusted Advisor - AWS Support - AWS Documentation](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html)
- [AWS Trusted Advisor check reference - AWS Support](https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor-check-reference.html)