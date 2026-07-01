---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS AppConfig、管理型の実験ツールでA/Bテストが簡単に

Amazonの25年以上のベストプラクティスに基づいた実験機能

**発表日: 2026年7月1日**

---

## 概要

### AWS AppConfigの管理型実験機能

- **簡単な実験実行**: 別途インフラを構築することなくA/Bテストと機能実験が可能
- **Amazonのベストプラクティス**: 25年以上の実験運用経験に基づいた設計
- **AI駆動のガイダンス**: 堅牢な実験設計をサポート
- **データドリブンな意思決定**: 複数環境での運用に最適

---

## 前提・背景

### 市場の課題

- A/B テストと機能実験の複雑さ
- 専門的なインフラストラクチャ構築の負担
- データドリブンな意思決定の必要性
- マイクロサービス環境での統一的な管理

### AWS AppConfigの進化

- 従来は設定管理に特化
- 実験機能を一般提供開始
- エンタープライズレベルの機能を搭載

---

## 主な機能

### 実験の種類

- **A/B テスト**: UIの変更やアルゴリズムの比較
- **多変量実験**: 複数の変数の組み合わせテスト
- **AIモデル実験**: 異なるAIモデルの比較
- **プロンプト実験**: LLMプロンプトの最適化

### 対応環境

- **EC2**: 従来型の仮想マシン環境
- **Lambda**: サーバーレスアプリケーション
- **ECS**: コンテナ化されたワークロード
- **EKS**: Kubernetes環境
- **オンプレミス**: AWS AppConfig Agent経由

---

## 利用方法

### 設定・管理

<div class="columns">
<div>

#### 定義方法

- AWS Management Console
- AWS CLI
- AWS API
- AWS CDK

</div>
<div>

#### 設定項目

- 機能バリエーション
- ターゲットオーディエンス
- トラフィック配分
- 実験期間

</div>
</div>

---

## 分析と本番環境への昇格

### 結果分析

- **Amazon CloudWatch** での監視
- 既存分析ツールとの統合
- 統計的有意性の自動計算
- リアルタイムメトリクス確認

### セーフロールアウト

- AWS AppConfigの標準プロセスを使用
- 段階的なトラフィック配分
- 自動ロールバック機能
- 完全な監視と制御

---

## メリット

### 開発チーム

- 実験基盤の構築不要
- 迅速なA/B テスト実施
- 複数のワークロード環境に対応

### エンタープライズ

- データドリブンな意思決定
- Amazonベストプラクティスの活用
- 本番環境での安全な機能検証
- 統一されたプラットフォーム

---

## ユースケース

### 活用シナリオ

- **Webアプリケーション**: UIレイアウト変更の効果測定
- **AI/ML**: 異なるモデルやプロンプトの精度比較
- **モバイル**: 推奨アルゴリズムの最適化
- **SaaS**: ユーザー体験向上のための継続的改善

---

## 料金体系

### 従量課金制

- 実験時間に基づく課金
- 複数実験の同時実行に対応
- リージョンごとの課金

### 利用可能なリージョン

- すべてのAWSリージョン
- AWS GovCloud（US）リージョン

---

## まとめ

### AWS AppConfigの実験機能

- **管理型サービス**: インフラ構築不要
- **エンタープライズグレード**: Amazonのベストプラクティス搭載
- **統合プラットフォーム**: 複数環境対応
- **安全な本番環境運用**: セーフロールアウト機能

### 次のステップ

1. AWS AppConfig実験の詳細確認
2. パイロットプロジェクトの企画
3. 本番環境への展開検討

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/6/aws-appconfig-experimentation/
- **AWS AppConfig 実験機能**: https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-experimentation.html
- **実験用語集**: https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-experimentation-terminology.html
- **A/B テスト実装ガイド**: https://oneuptime.com/blog/post/2026-02-12-implement-ab-testing-on-aws/view

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**
