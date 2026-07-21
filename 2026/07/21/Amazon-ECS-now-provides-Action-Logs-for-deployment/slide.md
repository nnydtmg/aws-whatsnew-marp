---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon ECS Action Logsでデプロイメントとオーケストレーションの可視性向上

Amazon ECS now provides Action Logs for deployment and orchestration visibility

**発表日: 2026年7月21日**

---

## 概要

### Amazon ECS Action Logs の3つの特徴

- **デプロイメント操作の可視性**: サービスデプロイメント中に Amazon ECS が実行するすべてのアクションを詳細にログに記録
- **タイムスタンプ付きレコード**: 各操作の正確な実行時刻を記録し、問題発生箇所の特定を加速
- **自動的なトラブルシューティング**: Amazon Q 統合で問題を自動検出し、根本原因分析を提供

---

## 前提・背景

### これまでの課題

- **可視性の不足**: サービス側でどのような操作が行われているかが不透明
- **トラブルシューティングの複雑さ**: AWSサポートに連絡したり、複数のソースからデータを手動で関連付ける必要
- **MTTR（平均復旧時間）の増加**: デプロイメント問題の根本原因特定に時間がかかる

### 市場の動向

- コンテナ化ワークロードの複雑化に伴い、可観測性の重要性が増加
- DevOps チームの効率性向上への期待
- Amazon ECS では最近、AWS Management Console での real-time observability を提供開始

---

## 主な機能

### 1. 詳細なアクションログ

- **イベント名**: 実行された具体的なアクション（例：タスク起動、ECS Managed Daemon 更新）
- **ログレベル**: INFO、WARN、ERROR の3段階で重要度を分類
- **リソースARN**: 対象となるリソースを特定
- **ステータス理由**: 成功・失敗の詳細な理由を記録

### 2. 複数のログ配信先をサポート

- **Amazon CloudWatch Logs**: リアルタイムモニタリング
- **Amazon S3**: 長期保存とアーカイブ
- **Amazon Kinesis Data Firehose**: ストリーミング処理

---

<!-- _class: small -->

## 3. Amazon Q 統合による自動分析

### 自動検出対象のデプロイメント問題

- **サーキットブレーカーのロールバック**: Circuit breaker が発動した場合の自動検出
- **不安定なサービスリビジョン**: 問題のあるバージョンの自動検出
- **その他のデプロイメント失敗**: 異常なパターンの自動認識

### 提供される分析

- **根本原因分析**: 問題が発生した理由を詳細に分析
- **リソースレベルの比較**: 関連リソースの状態を比較して差異を特定
- **段階的な修復ガイダンス**: 実行可能なステップバイステップ指示

---

## セットアップと利用方法

### オプトイン方法

1. **Amazon ECS Console** から設定
   - クラスタレベルで Action Logs 機能を有効化
   - または **CloudWatch vended logs API** を使用

2. **ログ配信先の選択**
   - CloudWatch Logs（推奨：デフォルト選択肢）
   - Amazon S3（長期保存用）
   - Amazon Kinesis Data Firehose（ストリーム処理）

### 利用可能なリージョン

- **全 AWS リージョン** で利用可能
- AWS GovCloud（US）にも対応

---

## 効果・メリット

### 運用効率の向上

- **MTTR の大幅削減**: 問題発生から解決までの時間を短縮
- **自己診断の強化**: AWSサポートへの問い合わせ回数を削減
- **データ駆動型のトラブルシューティング**: 推測ではなく実データに基づいた対応

### チームの生産性向上

- **開発チーム**: デプロイメント問題を迅速に特定・解決
- **DevOps エンジニア**: 運用負荷を軽減
- **システム管理者**: 複雑なECS環境の管理が容易に

---

## ユースケース

### ユースケース1: 本番環境のデプロイメント監視

- 新しいサービスバージョンを本番環境にデプロイ
- Action Logs で各ステップの進捗を追跡
- 問題発生時は Amazon Q がすぐに根本原因を分析

### ユースケース2: ECS Managed Daemon の更新追跡

- Daemon の自動更新中の詳細を記録
- 更新による予期しない動作を素早く検出
- 過去ログを S3 に保存して監査に対応

### ユースケース3: 複数クラスタの運用管理

- 複数のECSクラスタのログを一元管理（CloudWatch Logs）
- Firehose 経由でカスタム BI ツールに統合
- 全社的なデプロイメントパターンを分析

---

## 料金

### 適用される料金体系

- **CloudWatch Logs**: 標準の CloudWatch Logs 料金
  - ログ取り込み: GB あたり USD 0.50
  - ログ保存: GB あたり月額 USD 0.03

- **Amazon S3**: 標準の S3 料金
  - ストレージ料金
  - データ転送料金

- **Amazon Kinesis Data Firehose**: 標準の Firehose 料金
  - 取り込みデータ量に基づいた課金

---

## まとめ

### Amazon ECS Action Logs がもたらす価値

- ✅ デプロイメントとオーケストレーション操作が完全に可視化される
- ✅ Amazon Q による自動分析で問題解決が高速化される
- ✅ 複雑な ECS 環境の運用が大幅に簡素化される
- ✅ 全 AWS リージョンで今すぐ利用可能

### 次のステップ

1. 既存の ECS クラスタで Action Logs を有効化
2. CloudWatch Logs でログを確認
3. Amazon Q の自動分析機能をテスト
4. 本番環境への段階的導入

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: [Amazon ECS now provides Action Logs for deployment and orchestration visibility](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-action-logs/)
- **Amazon ECS ドキュメント**: [AWS Documentation](https://docs.aws.amazon.com/ecs/)
- **CloudWatch Logs**: [CloudWatch ドキュメント](https://docs.aws.amazon.com/AmazonCloudWatch/)

### 関連トピック

- [Amazon ECS now provides real-time deployment observability in the AWS Management Console](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-aws-management-console)
- [Amazon ECS service deployment state change events](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_service_deployment_events.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**