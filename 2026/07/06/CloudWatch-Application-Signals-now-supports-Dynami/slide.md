---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# CloudWatch Application Signals が Dynamic Instrumentation をサポート

再起動なしでライブ実行時の状態をキャプチャ

**発表日: 2026年6月30日**

---

## 概要

### Dynamic Instrumentation の3つの主要特徴

- **再起動不要**: アプリケーションの再起動や再デプロイなしにライブ実行時の状態をキャプチャ
- **詳細なデバッグ情報**: 変数値、メソッド引数、戻り値、スタックトレースを特定のコード位置で検査
- **複数言語対応**: Java、Python、JavaScript/TypeScript をサポート

### 本番環境デバッグの革新

- ログステートメント追加による再デプロイが不要
- 問題の自然な再現を待つ必要がない
- 本番環境で再現困難な問題を効率的に調査可能

---

## 前提・背景

### 従来のデバッグの課題

- **再現の困難さ**: 本番環境固有の問題は再現しにくい
- **デプロイのオーバーヘッド**: デバッグのたびに再デプロイが必要
- **情報の不足**: ログレベルを上げても必要な情報が得られないことがある
- **ダウンタイムリスク**: 本番環境への頻繁な変更は危険

### Application Signals の進化

- CloudWatch Application Signals は分散トレーシングの可視化を提供
- Dynamic Instrumentation により、さらに詳細な実行時情報をキャプチャ可能に
- DevOps チームの生産性向上への需要が高まる

---

## 主な機能と改善

### 1. ランタイムスナップショット機能

- 指定したコード位置でのスナップショット自動取得
- ランタイムコンテキストを含む詳細情報をキャプチャ
- CloudWatch Logs に配信され、アクティブなトレースと相関付け

### 2. 柔軟なデータ収集

- キャプチャするデータ量を調整可能
- 収集する引数とローカル変数を選択可能
- パフォーマンスへの影響を最小化

### 3. ADOT SDK による実装

- AWS Distro for OpenTelemetry（ADOT）SDK を使用
- CloudWatch Application Signals MCP サーバーで設定
- AWS CLI と SDK による自動化対応

---

## セットアップ・実装方法

### 1. インストルメンテーション

```
AWS Distro for OpenTelemetry（ADOT）SDKs を使用
対象言語: Java、Python、JavaScript/TypeScript
```

### 2. モニタリング対象コード位置の設定

- CloudWatch Application Signals MCP サーバーで指定
- AWS CLI と SDK による自動化が可能

### 3. デフォルト設定

- ADOT SDKs ではデフォルトで無効
- フラグを有効にして機能を利用開始

---

## 効果・メリット

### 開発者にとってのメリット

- **デバッグ時間の短縮**: 本番環境での問題を迅速に特定
- **再現待機時間の削減**: 必要な情報を即座に取得可能
- **本番リスクの低減**: コード変更を最小限に

### 運用チームへの効果

- **ダウンタイム削減**: 問題解決までの時間短縮
- **予測可能なデバッグ**: アクティブなトレース情報との相関付け
- **スケーラブルなモニタリング**: 複数のコード位置を並行監視可能

---

## 対応リージョンと価格

### 利用可能地域

- **すべての商用 AWS リージョン** で利用可能
- グローバルなデプロイメントに対応

### 価格モデル

- Dynamic Instrumentation データはログとしてキャプチャ
- 標準的な CloudWatch Logs の取り込みと保存料金が適用
- データ量を調整することで、コスト最適化が可能

---

## ユースケース

### パフォーマンス問題の調査

- 特定のメソッドの実行時間計測
- メモリリークの特定
- 予期しないエラーの根本原因分析

### 本番環境バグの迅速な解決

- ステージング環境では再現しないバグ
- 特定条件下でのみ発生する問題
- タイミング関連のバグ

### コスト最適化

- リソース使用パターンの分析
- ボトルネックの特定
- パフォーマンス改善の優先順位付け

---

## まとめ

### CloudWatch Dynamic Instrumentation の位置づけ

- **本番環境デバッグの新しい標準**: 再起動不要で詳細情報をキャプチャ
- **開発者体験の向上**: デバッグ時間を大幅に短縮
- **運用効率の改善**: 問題解決までのリードタイム削減

### 次のステップ

1. ADOT SDK をアプリケーションに統合
2. CloudWatch Application Signals の設定を確認
3. パイロットプロジェクトでの検証開始
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/cloudwatch-dynamic-instrumentation/
- **CloudWatch ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals-DynamicInstrumentation.html
- **AWS Distro for OpenTelemetry**: https://aws-otel.github.io/
- **CloudWatch Application Signals**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**