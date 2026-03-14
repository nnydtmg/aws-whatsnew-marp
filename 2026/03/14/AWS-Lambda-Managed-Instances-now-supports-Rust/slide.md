---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Lambda Managed Instances
Rust言語対応

**発表日: 2026年3月13日**

---

## 概要

### 3つの主要な変更

- **Rust言語対応**: AWS Lambda Managed Instances上でRustベースの関数が実行可能に
- **サーバーレスシンプルさ**: サーバー管理の複雑性なくサーバーレスの運用メリットを享受
- **高性能・コスト効率**: パフォーマンスクリティカルなアプリケーションをEC2の価格メリットで運用可能

---

## 前提・背景

### 従来の課題

- Lambdaはサーバーレスの簡潔性を提供する一方、パフォーマンス要件の高いアプリケーションには限界がある
- 高性能が必要な場合はEC2を直接管理する必要があり、複雑性が増加
- Rustのような高性能言語でのサーバーレス実行選択肢が限定的

### Lambda Managed Instancesの登場

- 2024年後半: Lambda Managed Instancesが導入され、EC2インスタンスを完全管理
- 2026年1月: Rust Runtime対応の予定が発表（AWS Lambda Rust Runtime 1.1.0-rc1）
- **2026年3月**: 本日、一般提供開始

---

## 主な機能

### Lambda Managed Instances の特徴

- **完全管理型EC2**: ルーティング、ロードバランシング、オートスケーリング組み込み
- **複数インスタンスタイプ対応**: Graviton4、ネットワーク最適化インスタンスなど
- **マルチテナント対応**: AWS Lambda Rust Runtime 1.1.0-rc1で実装

### Rust サポートの利点

- **並列リクエスト処理**: 実行環境内での複数リクエスト同時処理が可能
- **利用率最大化**: コンテナ内での効率的なリソース活用
- **コスト対性能向上**: 同一インスタンスでの処理効率が大幅向上

---

## パフォーマンス・効果

### メリット一覧

| 項目 | 効果 |
|------|------|
| **運用複雑性** | 削減: サーバー管理不要 |
| **価格メリット** | 活用: Compute Savings Plans / Reserved Instances適用可 |
| **スケーラビリティ** | 向上: Lambda + EC2の柔軟性を統合 |
| **言語選択肢** | 拡大: Rustを含む複数言語対応 |
| **レイテンシー** | 改善: マネージドEC2での一貫した性能 |

---

## ユースケース

### 適用シーン

<div class="columns">
<div>

### 低遅延が必要

- リアルタイム分析
- オンライン取引
- ゲーム決済処理

</div>
<div>

### 高スループット処理

- データ変換パイプライン
- メディア処理
- ログ集約

</div>
<div>

### コスト最適化

- 長時間実行関数
- 計算集約型アプリ
- スケール可変ワークロード

</div>
</div>

---

## 利用開始方法

### 展開可能リージョン

- Lambda Managed Instancesが利用可能なすべてのAWSリージョンで本日から利用開始可能
- AWS Lambda Rust Runtime 1.1.0-rc1以上が必要

### 開発ステップ

1. AWS Lambda Rust Runtimeを最新版にアップデート
2. Lambda Managed Instancesのコンテナイメージ選択
3. Rust関数をLambda Managed Instancesにデプロイ
4. Compute Savings Plansで価格最適化

---

## まとめ

### 本発表のポイント

- Rustはサーバーレス上で初めて高性能・低遅延で実行可能に
- Lambda Managed Instancesはサーバー管理の複雑性を排除
- EC2の価格メリットとLambdaの簡潔性の統合
- パフォーマンスクリティカルなアプリケーションの新しい選択肢

### 次のステップ

1. 既存のRustアプリケーションで移行可能性を検討
2. パイロットプロジェクトで性能・コスト効果を検証
3. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-lambda-managed-instances-rust/
- **AWS Lambda Rust Runtime**: https://github.com/aws/aws-lambda-rust-runtime/releases
- **Lambda Managed Instances ドキュメント**: https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances.html
- **Lambda Managed Instances Runtime**: https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-runtimes.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**