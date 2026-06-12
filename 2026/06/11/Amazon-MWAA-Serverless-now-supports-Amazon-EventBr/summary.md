# Amazon MWAA ServerlessがAmazon EventBridgeへの通知機能をサポート

Amazon MWAA Serverless now supports Amazon EventBridge notifications

**カテゴリ:** What's New  
**公開日:** 2026-06-11  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-mwaa-serverless-eventbridge/)

---

## 要約

Amazon MWAA Serverless が Amazon EventBridge への通知機能をサポートするようになりました。ワークフローおよびタスクの状態変化イベントをリアルタイムで Amazon EventBridge に送信できるようになり、イベント駆動型の自動化構築が可能になります。

---

## このアップデートで何が変わったか

### ワークフロー状態イベントの送信

- ワークフロー状態遷移（開始、実行中、成功、失敗）を Amazon EventBridge に送信
- リアルタイムで状態変化を検出可能

### タスク状態イベントの送信

- タスク状態変化（スケジュール済み、成功、失敗、再試行待ち）を Amazon EventBridge に送信
- 個別タスクレベルでの監視が可能

### これまでとの違い

| 項目 | 従来 | 今回 |
|------|------|------|
| 監視方法 | カスタムポーリング/手動観察 | EventBridge による自動通知 |
| アラート | 手動対応 | 自動トリガー |
| 依存関係管理 | 手動実行 | 自動連鎖実行 |
| 監査ログ | 手動収集 | 自動記録（S3） |

---

## 対象ユーザー

- **データエンジニアリングチーム**
  - Apache Airflow ワークフローの管理・監視
  - パイプラインの自動化構築

- **プラットフォームチーム**
  - ワークフロー基盤の提供
  - エンタープライズコンプライアンス対応

- **DevOps/SRE**
  - ワークフロー監視の自動化
  - アラート・復旧ロジックの構築

---

## 詳細情報

### サポート対象の状態遷移

#### ワークフロー状態

- `started`: ワークフロー実行開始
- `running`: ワークフロー実行中
- `succeeded`: ワークフロー成功
- `failed`: ワークフロー失敗

#### タスク状態

- `scheduled`: タスクスケジュール済み
- `succeeded`: タスク成功
- `failed`: タスク失敗
- `up_for_retry`: タスク再試行待ち

### ユースケース

#### 1. 失敗時の自動アラート

```
ワークフロー失敗 → EventBridge ルール → SNS/Lambda → Slack 通知
```

- 本番ワークフロー失敗時に自動通知
- 対応時間の短縮
- エスカレーション処理の自動化

#### 2. 依存パイプラインの自動再開

```
上流ワークフロー成功 → EventBridge ルール → Lambda → 下流ワークフロー実行
```

- ワークフロー間の依存関係を自動管理
- 手動トリガーが不要
- 処理遅延の削減

#### 3. コンプライアンスログの自動記録

```
状態遷移イベント → EventBridge ルール → S3 に保存
```

- すべての状態遷移を Amazon S3 に自動保存
- 監査証跡の確保
- 規制要件への対応

### 提供開始日

- **2026年6月11日**
- Amazon MWAA Serverless が利用可能なすべての AWS リージョンで提供

### 利用可能なリージョン

- US East (N. Virginia): `us-east-1`
- US East (Ohio): `us-east-2`
- Europe (Ireland): `eu-west-1`
- Europe (London): `eu-west-2`
- Europe (Paris): `eu-west-3`
- Europe (Frankfurt): `eu-central-1`
- Europe (Stockholm): `eu-north-1`
- その他 MWAA Serverless サポートリージョン

### 料金

- Amazon EventBridge の[標準料金](https://aws.amazon.com/eventbridge/pricing/)に基づく
- イベント数に応じた従量課金

---

## メリット

### 運用効率の向上

- ✅ **ポーリングロジック不要**
  - カスタム監視コード削減
  - 開発工数削減

- ✅ **自動アラート機能**
  - リアルタイム通知
  - 対応時間の短縮
  - 人的介入の遅れを削減

- ✅ **監査ログ自動収集**
  - すべての状態遷移を記録
  - コンプライアンス対応簡素化
  - 規制要件への対応

### コスト最適化

- ✅ **開発・保守コスト削減**
  - マネージドサービスで自動化
  - インフラ管理不要

- ✅ **従量課金モデル**
  - EventBridge の Pay-as-you-go
  - 使用量に応じた最適な価格

### ビジネス価値

- ✅ **信頼性向上**
  - リアルタイム監視
  - 問題検出速度向上
  - ダウンタイム削減

- ✅ **スケーラビリティ**
  - 手動監視の負担を削減
  - ワークフロー数増加に対応

- ✅ **透明性確保**
  - 完全な監査証跡
  - ガバナンス強化

---

## 実装ガイドライン

### クイックスタート

#### ステップ1: EventBridge ルール作成

1. AWS Management Console にアクセス
2. EventBridge コンソール → 「ルールを作成」
3. ルール名を入力
4. イベントソース: 「AWS services」を選択
5. サービス: 「Amazon MWAA Serverless」を選択
6. イベントタイプ: 必要な状態遷移を選択

#### ステップ2: ターゲット設定

- SNS: メール/SMS 通知
- Lambda: カスタム処理
- SQS: メッセージキュー
- S3: ログ保存

#### ステップ3: テストと本番化

1. 非本番環境でテスト実行
2. イベント送信の確認
3. 本番環境への展開

### ベストプラクティス

#### セキュリティ

- IAM ポリシーで最小権限を設定
- EventBridge ルールのアクセス制御
- 機密情報はシークレッツマネージャーで管理
- CloudTrail で API 監査ログを記録

#### 運用

- ルールの命名規則を統一（例: `mwaa-failure-alert`）
- CloudWatch で EventBridge メトリクスを監視
- 定期的なログレビュー
- 障害対応手順書を整備

#### コスト最適化

- 不要なルールを定期削除
- EventBridge イベント数の監視
- 料金計画に基づいたルール数調整
- Reserved Capacity の活用検討

---

## FAQ

### Q: すべてのワークフロー状態が EventBridge に送信されますか？

**A:** はい、すべてのワークフロー状態遷移と対応タスク状態が送信されます。EventBridge ルールでフィルタリングすることで、必要なイベントのみを処理できます。

### Q: 既存のワークフローに変更は必要ですか？

**A:** いいえ、既存のワークフロー定義に変更は不要です。EventBridge ルールの設定のみで利用開始できます。

### Q: 遅延はどの程度ですか？

**A:** EventBridge への送信は数秒以内（通常は数百ミリ秒）です。詳細は AWS ドキュメントをご確認ください。

### Q: 過去のイベントを取得できますか？

**A:** EventBridge は新規イベントのみを処理します。過去イベントは CloudWatch Logs などに保存している場合のみアクセス可能です。

---

## 次のステップ

1. **評価フェーズ**
   - 既存ワークフローで活用可能なユースケースを特定
   - 運用効果を試算

2. **パイロットフェーズ**
   - 非本番環境で実装テスト
   - EventBridge ルールの動作確認
   - 通知フローのテスト

3. **展開フェーズ**
   - 本番ワークフローへの段階的展開
   - 運用手順書の整備
   - チームトレーニング

4. **最適化フェーズ**
   - メトリクスに基づいたルール調整
   - コスト最適化
   - セキュリティ監査

---

## 参考リソース

### 公式ドキュメント

- [Amazon MWAA Serverless - What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-mwaa-serverless-eventbridge/)
- [Monitoring Amazon MWAA Serverless](https://docs.aws.amazon.com/mwaa/latest/mwaa-serverless-userguide/monitoring.html)
- [Amazon MWAA Serverless Events Reference](https://docs.aws.amazon.com/eventbridge/latest/ref/events-ref-airflow-serverless.html)
- [Amazon EventBridge User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/)

### 関連サービス

- [Amazon MWAA](https://aws.amazon.com/managed-workflows-for-apache-airflow/)
- [Amazon EventBridge](https://aws.amazon.com/eventbridge/)
- [Apache Airflow Documentation](https://airflow.apache.org/docs/)

### AWS ブログ・その他

- [AWS Management Blog](https://aws.amazon.com/blogs/)
- [AWS What's New](https://aws.amazon.com/new/)

---

**最終更新日:** 2026年6月11日  
**ステータス:** 一般提供開始済み