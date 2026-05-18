---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS SAM CLI が CloudFormation Language Extensions をサポート - ローカルサーバーレス開発を加速

AWS SAM CLI adds AWS CloudFormation Language Extensions support to accelerate local serverless development

**発表日: 2026年5月18日**

---

## 概要

- AWS SAM CLIがCloudFormation Language Extensionsをサポートすることで、開発者はテンプレートの重複を削減しながら、ローカル環境で完全なテストと検証を行うことができるようになりました。
- これにより、クラウドデプロイ前にエラーを検出でき、開発の反復サイクルが大幅に短縮されます。

---

## 前提・背景

### IaC開発の課題

- テンプレート内の重複が増加しても、ローカル環境での完全なテストが困難
- クラウドデプロイ時にエラーが発見され、デバッグに時間がかかる
- 開発の反復サイクルが長くなり、生産性が低下

### AWS SAM の位置づけ

- AWS CloudFormation の拡張として機能
- サーバーレス開発に特化したシンプルな構文を提供
- ローカルテスト環境を実現するツール

---

## 変更内容・新機能

### CloudFormation Language Extensions サポート

- **Fn::ForEach**: 単一の定義から複数のリソースを自動生成
- **Fn::Length**: テンプレート内でコレクションの長さを取得
- **Fn::ToJsonString**: オブジェクトをJSON文字列に変換
- **Fn::FindInMap の拡張**: DefaultValue オプションをサポート

### SAM CLI コマンドの対応

- **sam build**: ループを自動展開してリソースを処理
- **sam local invoke**: ローカル環境でのテストに対応
- **sam sync**: リアルタイム同期時にループを展開
- **sam local start-api**: API テスト環境で展開済みリソースを利用
- **sam validate**: テンプレート検証時にループを展開

---

## 効果・メリット

### 開発効率の向上

- **テンプレート重複の削減**: IaC コード量の大幅削減
- **ローカル環境での完全テスト**: クラウドデプロイ前のエラー検出
- **構文エラーの早期発見**: 依存関係の問題を事前チェック

### 運用コストの低減

- **デプロイ失敗の削減**: ローカルテストで問題を事前解決
- **デバッグ時間の短縮**: クラウド環境での問題解決コスト削減
- **反復サイクルの短縮**: より高速な開発が実現

---

## ユースケース

### 複数リソースの定義が必要なシーン

- **Lambda 関数**: 複数の Lambda 関数セットをループで定義
- **DynamoDB テーブル**: 複数のテーブルスペックを一度に定義
- **SNS トピック**: 複数トピックをループで生成
- **SQS キュー**: キューのセットを自動生成

### 適用対象

- サーバーレス開発チーム
- IaC テンプレートを管理する DevOps エンジニア
- ローカルテスト環境を整備したい開発者

---

## 新しい開発フロー

### Before

```
1. SAM テンプレート作成（重複あり）
   ↓
2. AWS にデプロイ
   ↓
3. エラー発生（構文エラーなど）
   ↓
4. テンプレート修正
   ↓
5. 再デプロイ（繰り返し）
```

### After

```
1. SAM テンプレート作成（Fn::ForEach で効率化）
   ↓
2. sam local invoke でローカルテスト
   ↓
3. エラーを事前チェック
   ↓
4. AWS にデプロイ（一発成功）
```

---

## まとめ

### AWS SAM CLI の進化

- CloudFormation Language Extensions サポートにより、IaC テンプレートの重複削減が実現
- ローカル環境での完全なテストが可能になり、デプロイの信頼性が向上
- 開発の反復サイクルが大幅に短縮され、生産性が向上

### 次のステップ

1. AWS SAM CLI を最新版に更新
2. 既存テンプレートで Fn::ForEach の活用箇所を特定
3. ローカル環境でのテスト体制を構築
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-cli-cloudformation/
- **AWS SAM ドキュメント**: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html
- **AWS CloudFormation Language Extensions**: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html
- **AWS SAM CLI GitHub**: https://github.com/aws/aws-sam-cli

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**