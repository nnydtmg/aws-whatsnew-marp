# AWS SAM CLI が CloudFormation Language Extensions をサポート - ローカルサーバーレス開発を加速

AWS SAM CLI adds AWS CloudFormation Language Extensions support to accelerate local serverless development

**カテゴリ:** What's New
**公開日:** 2026-05-18
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-cli-cloudformation/)

---

## 要約

AWS SAM CLIがCloudFormation Language Extensionsをサポートすることで、開発者はテンプレートの重複を削減しながら、ローカル環境で完全なテストと検証を行うことができるようになりました。これにより、クラウドデプロイ前にエラーを検出でき、開発の反復サイクルが大幅に短縮されます。

---

## このアップデートで何が変わったか

### 新機能

1. **Fn::ForEach**: 単一の定義から複数のリソースを自動生成
2. **Fn::Length**: テンプレート内でコレクションの長さを取得
3. **Fn::ToJsonString**: オブジェクトをJSON文字列に変換
4. **Fn::FindInMap の拡張**: DefaultValue オプションをサポート
5. **条件付き属性**: DeletionPolicy と UpdateReplacePolicy が条件付きで使用可能

### SAM CLI コマンドの拡張

- **sam build**: ループを自動展開してリソースを処理
- **sam local invoke**: ローカル環境でのテストに対応
- **sam sync**: リアルタイム同期時にループを展開
- **sam local start-api**: API テスト環境で展開済みリソースを利用
- **sam validate**: テンプレート検証時にループを展開

---

## 対象ユーザー

- **サーバーレス開発者**: Lambda、DynamoDB、SNS など複数のリソースを定義する開発者
- **DevOps エンジニア**: IaC テンプレートを管理・最適化する担当者
- **クラウド開発チーム**: ローカルテスト環境を整備したいチーム

---

## 詳細

### CloudFormation Language Extensions とは

AWS CloudFormation Language Extensions は、CloudFormation テンプレートに高度な機能を追加する拡張機能です。ループ処理（Fn::ForEach）や条件付き属性、より多くの組み込み関数を提供し、テンプレートの重複を削減しながら、複雑なインフラをコード化できます。

### AWS SAM CLI での対応

これまで、CloudFormation Language Extensions はクラウド環境でのみサポートされていました。今回のアップデートにより、AWS SAM CLI のローカル環境でも完全にサポートされます。

- **sam build**: テンプレートをビルド時にループを展開
- **sam local invoke**: ローカルでの Lambda テスト時にリソースを処理
- **sam validate**: テンプレートの検証時にループを展開して構文チェック

### 利用例

```yaml
# Fn::ForEach を使用した複数 Lambda 関数の定義
Resources:
  MyLambdas: !ForEach
    - FunctionName
    - ["Process", "Transform", "Validate"]
    - {FunctionName}LambdaFunction:
        Type: AWS::Lambda::Function
        Properties:
          FunctionName: !Sub "${FunctionName}-function"
          Handler: index.handler
          Runtime: python3.9
```

このテンプレートは、ProcessLambdaFunction、TransformLambdaFunction、ValidateLambdaFunction の 3 つのリソースを自動生成します。

### ローカルテストの流れ

1. SAM テンプレートを作成（Fn::ForEach を使用）
2. `sam build` でテンプレートをビルド（ループが展開される）
3. `sam local invoke` でローカル環境での動作確認
4. `sam validate` でテンプレートの構文をチェック
5. エラーが検出されたら修正
6. `sam deploy` でクラウドにデプロイ

---

## メリット

### 開発効率の向上

- **テンプレート重複の削減**: IaC コード量が減少し、保守性が向上
- **ローカル環境での完全テスト**: クラウドデプロイ前のエラー検出
- **構文エラーの早期発見**: 依存関係の問題を事前にチェック

### 運用コストの低減

- **デプロイ失敗の削減**: ローカルテストで問題を事前解決
- **デバッグ時間の短縮**: クラウド環境での問題解決コストを削減
- **反復サイクルの短縮**: より高速な開発を実現

### ビジネス価値

- **開発速度の向上**: 反復サイクルが短くなり、新機能のリリースが加速
- **品質の向上**: ローカルテストにより、本番環境でのエラーが減少
- **チーム生産性の向上**: テンプレート管理の効率化

---

## ユースケース

### 1. マイクロサービスアーキテクチャ

複数のマイクロサービスを Lambda 関数として定義する場合、Fn::ForEach を使用して複数の Lambda 関数をテンプレート内で効率的に定義できます。

```yaml
Microservices: !ForEach
  - ServiceName
  - ["UserService", "ProductService", "OrderService"]
  - {ServiceName}:
      Type: AWS::Lambda::Function
      Properties:
        FunctionName: !Sub "${ServiceName}-function"
```

### 2. 複数環境の管理

本番環境、ステージング環境、開発環境など、複数の環境を同じテンプレートで定義する場合に有効です。

### 3. 複数リージョンへのデプロイ

複数の AWS リージョンに同じリソースをデプロイする場合、ループ処理により効率的にテンプレートを記述できます。

### 4. 複数アカウント構成

複数の AWS アカウントに対して、一貫性のあるインフラを構築する場合に利用できます。

---

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-cli-cloudformation/
- **AWS SAM ドキュメント**: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html
- **AWS CloudFormation Language Extensions**: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html
- **AWS SAM CLI GitHub**: https://github.com/aws/aws-sam-cli
- **AWS CloudFormation Best Practices**: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html
