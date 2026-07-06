# CloudWatch Application Signals が Dynamic Instrumentation をサポート

CloudWatch Application Signals now supports Dynamic Instrumentation

**カテゴリ:** What's New
**公開日:** 2026-06-30T16:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/cloudwatch-dynamic-instrumentation/)

---

## 要約

CloudWatch Application Signals の Dynamic Instrumentation は、アプリケーションの再起動や再デプロイなしにライブ実行時の状態をキャプチャし、変数値やスタックトレースを検査できる機能です。本機能は Java、Python、JavaScript/TypeScript をサポートしており、本番環境で再現困難な問題をデバッグする開発者に特に有用です。

---

## このアップデートで何が変わったか

### 新機能

- **Dynamic Instrumentation 機能の追加**
  - ライブアプリケーションの実行時状態をキャプチャ
  - 変数値、メソッド引数、戻り値、スタックトレースを特定のコード位置で検査可能
  - 再起動や再デプロイが不要

### 主な特徴

- **非侵襲的なデバッグ**: ログステートメント追加による再デプロイが不要
- **柔軟なデータ収集**: キャプチャするデータ量を調整可能、引数とローカル変数を選択可能
- **トレース連携**: CloudWatch Logs に配信され、アクティブなトレースと相関付け
- **複数言語対応**: Java、Python、JavaScript/TypeScript をサポート
- **グローバル対応**: すべての商用 AWS リージョンで利用可能

---

## 技術的詳細

### 実装方法

1. **AWS Distro for OpenTelemetry（ADOT）SDKs を使用**
   - Java、Python、JavaScript/TypeScript 対応

2. **コード位置の設定**
   - CloudWatch Application Signals MCP サーバーで指定
   - AWS CLI と SDK による自動化が可能

3. **スナップショット取得**
   - 実行がインストルメント化された位置に到達すると自動取得
   - ランタイムコンテキストを含むスナップショットをキャプチャ

4. **データ配信**
   - CloudWatch Logs に配信
   - アクティブなトレースと相関付け

### 有効化方法

- ADOT SDKs ではデフォルトで無効
- フラグを有効にすることで機能を利用開始

---

## 対象ユーザー

### 主要な対象者

- **開発者**: 本番環境で再現困難な問題をデバッグする開発者
- **DevOps チーム**: アプリケーションの効率的なモニタリングと問題解決が必要なチーム
- **SRE**: システムの信頼性向上に注力するエンジニア

### 推奨ユースケース

- ステージング環境では再現しない本番環境バグの調査
- パフォーマンス問題のボトルネック特定
- メモリリークやリソース使用パターンの分析

---

## 価格とコスト

### 料金体系

- Dynamic Instrumentation データはログとしてキャプチャ
- 標準的な CloudWatch Logs の取り込みと保存料金が適用
- データ量を調整することでコスト最適化が可能

### コスト最適化のポイント

- 必要な引数とローカル変数のみを選択
- キャプチャするデータ量を調整
- ログの保持期間を設定

---

## 実装のメリット

### 開発生産性の向上

- デバッグ時間の大幅短縮
- 問題の再現待機が不要
- 本番環境での直接調査が可能

### 運用効率の改善

- ダウンタイムの削減
- 問題解決までのリードタイム短縮
- 予測可能なデバッグプロセス

### システムの安定性向上

- 本番環境への変更を最小化
- リスクの低減
- スケーラブルなモニタリング

---

## 利用開始方法

### ステップ1: 前提条件の確認

- AWS Distro for OpenTelemetry（ADOT）SDK の最新版への更新
- CloudWatch Application Signals の設定確認

### ステップ2: インストルメンテーション

- 対象アプリケーションを ADOT SDK でインストルメント化
- Dynamic Instrumentation を有効化

### ステップ3: コード位置の設定

- CloudWatch Application Signals MCP サーバーで監視対象のコード位置を指定
- AWS CLI または SDK を使用した自動化が可能

### ステップ4: 検証とモニタリング

- CloudWatch Logs でデータが取得できることを確認
- アクティブなトレースとの相関付けを検証

---

## 関連情報

### AWS ドキュメント

- [Debug applications with Dynamic Instrumentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals-DynamicInstrumentation.html)
- [CloudWatch Application Signals](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals.html)
- [AWS Distro for OpenTelemetry](https://aws-otel.github.io/)

### 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/cloudwatch-dynamic-instrumentation/)