# Amazon CloudWatch Alarms がウォールクロック評価ウィンドウをサポート

Amazon CloudWatch Alarms now supports wall clock evaluation windows

**カテゴリ:** What's New
**公開日:** 2026-08-07T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-alarms-wallclock-evaluation)

このページでは、AWS What's Newで発表された「Amazon CloudWatch Alarms now supports wall clock evaluation windows」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon CloudWatchアラームがウォールクロック評価ウィンドウ機能をサポートするようになり、固定されたカレンダー境界に基づいてアラーム評価を実施できるようになりました。この機能は、スケジュール済みまたはビジネスに合わせたワークロードを監視する顧客にとって特に有用であり、ローリングウィンドウ境界を越えるイベントによる誤ったアラームを回避することができます。

## このアップデートで何が変わったか

### 新しい評価ウィンドウオプション

Amazon CloudWatch Alarmsが、固定されたカレンダー境界（時間の開始、真夜中、週の開始など）にアラーム評価を整列させることができるウォールクロック評価ウィンドウをサポートするようになりました。

### 既存機能との関係

既存のスライディングウィンドウ動作を補完する新しいオプションであり、スケジュール済みまたはビジネスに合わせたワークロードを監視する顧客向けに設計されています。

## 対象ユーザー

- スケジュール済みワークロードを監視する企業
- ビジネス時間に合わせたアラーム運用が必要な組織
- グローバルに複数タイムゾーンで運用する企業
- 日次バックアップなど、カレンダー日ベースの監視が必要なシステム

## 詳細

### ウォールクロック評価ウィンドウの特徴

#### 1. カレンダー境界に整列

- 時間の開始（毎時00分）
- 真夜中（毎日の深夜0時）
- 週の開始（毎週の特定曜日）
- など固定されたカレンダー境界に整列

#### 2. スライディングウィンドウとの違い

**スライディングウィンドウ**:
- ウィンドウが時間とともにローリング
- イベントがウィンドウ境界を越えるときに誤ったアラーム発生の可能性

**ウォールクロック評価ウィンドウ**:
- 各カレンダー日を独立して評価
- イベント境界越えによる誤検知を排除

#### 3. 具体例：日次バックアップアラーム

スライディングウィンドウでは、連続したバックアップが24時間以上離れている場合でも、各カレンダー日が正常なバックアップを持っていればアラームは誤ってトリガーされません。ウォールクロック評価ウィンドウは、各カレンダー日を独立して評価し、この問題を排除します。

### タイムゾーン対応

タイムゾーンを指定できるため、日次アラームはローカルビジネス日に合わせることができ、夏時間の移行は自動的に処理されます。

### 対応周期

- 1分
- 5分
- 1時間
- 1日
- 1週間

**非対応**:
- 高解像度アラーム
- コンポジットアラーム
- PromQL アラーム

### 利用可能なリージョン

この機能は、Amazon CloudWatchが利用可能なすべてのAWSリージョンで利用可能ですが、以下のリージョンを除きます：
- 中東（UAE）
- 中東（バーレーン）

## 効果・メリット

### 1. アラーム精度の向上

- **誤ったアラーム削減**: 境界越えによる誤検知を排除
- **予測可能性向上**: 評価ウィンドウが固定されるため動作が予測可能
- **信頼性向上**: アラームの信頼性が大幅に向上

### 2. ビジネス適合性の向上

- **営業時間対応**: ビジネス日ベースのアラーム設定が容易
- **グローバル対応**: タイムゾーン指定で各地域のビジネス日に対応
- **自動DST処理**: 夏時間切り替え時の自動調整
- **ビジネス要件対応**: SLA監視、営業目標達成確認など

### 3. 運用効率化

- **アラーム管理簡素化**: 複雑な後処理ロジックが不要
- **スケーラビリティ**: 複雑な時間ロジックをCloudWatchに統一
- **保守性向上**: アラーム設定が直感的に理解可能
- **コスト最適化**: 不要な後処理スクリプトを削除可能

## ユースケース

### 1. バックアップ監視

- 日次バックアップが完了したか確認
- 各カレンダー日に最低1回のバックアップを検証
- 23:30と00:30の間のバックアップでも1回とカウント

### 2. ビジネスアワーズ監視

- 営業日の営業時間内のメトリクス監視
- 1時間単位で営業時間内の状態をチェック
- 週末の評価を自動的に排除

### 3. SLA監視

- 月単位のSLA達成確認
- 1ヶ月の稼働率や応答時間を独立評価
- 請求周期に合わせたメトリクス評価

### 4. 定期ジョブ監視

- 日次レポート生成の完了確認
- 週次バッチ処理の成功監視
- 月次集計タスクの確認

## 使用方法

### AWS Management Consoleでの設定

1. **アラームの作成・編集ページを開く**
   - CloudWatch コンソール → Alarms
   - 新規アラーム作成 または 既存アラーム編集

2. **Evaluation window オプションを確認**
   - 「Wall clock window」を選択

3. **周期を指定**
   - 1分、5分、1時間、1日、1週間から選択

4. **タイムゾーンを指定（オプション）**
   - ローカルビジネス日に合わせて設定

### AWS CLI での設定例

```bash
aws cloudwatch put-metric-alarm \
  --alarm-name DailyBackupAlarm \
  --metric-name BackupStatus \
  --namespace CustomMetrics \
  --statistic Maximum \
  --period 86400 \
  --evaluation-periods 1 \
  --threshold 1 \
  --comparison-operator GreaterThanOrEqualToThreshold \
  --evaluation-window '{"WallClockWindow": {"TimeZone": "Asia/Tokyo"}}'
```

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-alarms-wallclock-evaluation
- **CloudWatch ドキュメント（ウォールクロック評価）**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_WallClock_Alarm.html
- **CloudWatch アラーム評価**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html
- **AWS CloudWatch 監視ガイド**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/

---

**ご質問やご不明な点は、[AWS サポート](https://aws.amazon.com/jp/support/)までお問い合わせください**