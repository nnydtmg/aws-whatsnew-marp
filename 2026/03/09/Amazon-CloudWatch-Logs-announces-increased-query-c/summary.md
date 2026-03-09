# Amazon CloudWatch Logs announces increased query concurrency and API limits

**カテゴリ:** What's New
**公開日:** 2026-03-09
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-logs-increased-limits/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-logs-increased-limits/)

---

## 要約

Amazon CloudWatch Logsは、ユーザーの同時クエリ実行能力を大幅に強化しました。クエリの同時実行数を30から100に引き上げ、StartQuery および GetQueryResults API の呼び出し制限をアカウント/リージョンあたり毎秒10に設定しました。これにより、より多くのユーザーが同時にクエリを実行でき、ダッシュボードを効率的に活用でき、スロットリングなしでより迅速に結果を取得できるようになります。

---

## 詳細

### 主な変更点

1. **クエリ同時実行数の拡大**
   - 従来: 30 個の同時クエリ
   - 新規: 100 個の同時クエリ
   - 3倍以上の拡張により、複数ユーザーの並行分析が可能に

2. **API 呼び出し制限の新設**
   - StartQuery API: 毎秒 10 呼び出し（アカウント/リージョン単位）
   - GetQueryResults API: 毎秒 10 呼び出し（アカウント/リージョン単位）
   - API ドリブンなアプリケーション統合がスロットリングなしで実行可能

3. **対応リージョンの拡大**
   - 30以上のリージョンで利用可能
   - 北米、南米、ヨーロッパ、アフリカ、中東、アジア太平洋地域、メキシコをカバー
   - 主要リージョン: US East (N. Virginia, Ohio), EU (Frankfurt, Ireland, London), Asia Pacific (Tokyo, Singapore, Sydney)

### 対象ユーザー

- **複数ユーザーが CloudWatch Logs クエリを同時実行する組織**
  - 複数のチームメンバーが同時にダッシュボードにアクセス
  - 分析チーム間での並行クエリ実行

- **Logs Insights Query Language (QL) を活用**
  - Logs Insights QL による分析・調査を多用
  - ダッシュボードやアプリケーション構築での活用

- **StartQuery / GetQueryResults API を多用するアプリケーション**
  - 自動化スクリプトやモニタリングツール
  - 外部システムとの統合

### 効果・メリット

1. **運用効率の向上**
   - スロットリングの削減により、スムーズなクエリ実行
   - 複数ユーザーの待機時間を削減
   - ダッシュボード利用の快適性向上

2. **スケーラビリティの向上**
   - より多くのユーザーの同時アクセスに対応
   - 組織規模の拡大に合わせた拡張性
   - マルチテナント環境での並行分析対応

3. **開発効率の向上**
   - API ベースのアプリケーション開発で制限の縛りが緩和
   - 自動化・統合シナリオの実装が容易に

### 利用可能なリージョン

**北米:** US East (N. Virginia, Ohio), US West (N. California, Oregon), Canada (Central, Calgary)

**南米:** South America (São Paulo)

**ヨーロッパ:** Europe (Frankfurt, Ireland, London, Paris, Stockholm, Milan, Zurich, Spain)

**アフリカ・中東:** Africa (Cape Town), Middle East (Tel Aviv)

**アジア太平洋:** Asia Pacific (Mumbai, Hyderabad, Singapore, Sydney, Melbourne, Tokyo, Osaka, Seoul, Hong Kong, Jakarta, Bangkok, Malaysia, Auckland, Taipei)

**その他:** Mexico (Querétaro)

---

## 推奨されるユースケース

1. **エンタープライズ運用**
   - 複数ダッシュボードの同時運用
   - 複数チームでのログ分析

2. **SaaS・クラウドサービス**
   - 顧客向けログ分析機能の提供
   - API ドリブンな分析プラットフォーム構築

3. **セキュリティ・監視**
   - SIEM、脅威検知ツールとの統合
   - リアルタイム監視・アラートシステム

4. **自動化・CI/CD**
   - ビルド/デプロイログの自動分析
   - パフォーマンステスト結果の自動集約

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-logs-increased-limits/
- **CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html
- **StartQuery API リファレンス**: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
- **CloudWatch Logs エンドポイント・クォータ**: https://docs.aws.amazon.com/general/latest/gr/cwl_region.html