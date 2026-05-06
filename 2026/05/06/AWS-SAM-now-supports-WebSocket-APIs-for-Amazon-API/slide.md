---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS SAM が WebSocket API をサポート
Amazon API Gateway 向け WebSocket API の完全なサポート

**発表日: 2026年5月5日**

---

## 概要

### AWS SAM における3つの主要な改善

- **WebSocket API のネイティブサポート**: SAM テンプレートで最小限の設定で完全な WebSocket API を定義可能
- **自動リソース生成**: IAM 権限やルート統合を自動生成し、デバッグが容易に
- **エンタープライズ機能**: API Gateway と同等の認可、カスタムドメイン、ステージ設定に対応

---

## 前提・背景

### これまでの課題

- AWS SAM は WebSocket API をサポートしていなかった
- AWS CloudFormation で基盤となるリソースをすべて手動で設定する必要があった
- Lambda 関数の IAM 権限不足などの一般的な問題のデバッグが困難

### リアルタイム通信の需要

- チャットアプリケーション、ライブダッシュボード、AI/LLM ストリーミングなど、リアルタイムアプリケーションの重要性が増加
- WebSocket API は双方向通信を実現し、サーバーからクライアントへのメッセージ配信が可能
- IoT、金融取引プラットフォーム、コラボレーションツールなど、様々な用途に対応

---

## 主な機能と改善

### 1. 新しいリソースタイプ

- **AWS::Serverless::WebSocketApi**: SAM テンプレートに追加可能
- Lambda 関数ハンドラーを $connect、$disconnect、$default ルート、およびカスタムルートに指定
- SAM が各ルートの統合と権限を自動的に設定

### 2. API Gateway との機能パリティ

- **IAM 認可と Lambda 認可**: 柔軟なアクセス制御
- **カスタムドメイン**: 独自のドメイン設定
- **RouteSettings**: ルート単位での設定
- **Models と StageVariables**: データ検証と環境変数管理

---

## 主な機能と改善（続き）

### 3. Globals サポート

- 複数の WebSocket API 間で共通設定を共有
- 設定の重複を排除し、保守性を向上

### 4. 設定の簡素化

- 認可、ステージ設定、カスタムドメインをリソース定義内で直接設定
- テンプレートを見れば、API の構造が一目で分かる
- CloudFormation を直接操作する手間を削減

---

## 対応するユースケース

### リアルタイムアプリケーション

<div class="columns">
<div>

### コンシューマー向け

- **チャットアプリケーション**
  リアルタイムメッセージング

- **ライブダッシュボード**
  リアルタイムデータ可視化

</div>
<div>

### エンタープライズ向け

- **AI/LLM ストリーミング**
  生成結果の段階的配信

- **IoT プラットフォーム**
  センサーデータのリアルタイム配信

</div>
</div>

---

## 効果・メリット

### 開発の簡素化

- **設定の最小化**: SAM テンプレートで必要な設定のみ記述
- **自動生成**: IAM 権限やリソース統合を自動生成
- **一元管理**: SAM テンプレートですべてを定義

### 運用の効率化

- **デバッグの容易化**: IAM 権限不足などの問題を早期に発見
- **保守性の向上**: Globals で共通設定を共有
- **スケーラビリティ**: 複数の WebSocket API を効率的に管理

### コスト削減

- **開発時間の短縮**: テンプレート記述時間を削減
- **エラーの削減**: 手動設定によるミスを排除
- **運用コストの低減**: 自動化による運用負荷の削減

---

## 使用例

### SAM テンプレート構造

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Globals:
  Function:
    Runtime: python3.9

Resources:
  WebSocketApi:
    Type: AWS::Serverless::WebSocketApi
    Properties:
      RouteSelectionExpression: $request.body.action
      Auth:
        IAMAuthorization: true

  ConnectFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/
      Handler: connect.handler
      Events:
        ConnectEvent:
          Type: WebSocket
          Properties:
            Api: !Ref WebSocketApi
            Route: $connect
```

---

## まとめ

### AWS SAM のイノベーション

- AWS SAM が WebSocket API をネイティブサポート
- SAM テンプレートで最小限の設定で完全な WebSocket API を実装
- API Gateway と同等のエンタープライズ機能に対応
- リアルタイムアプリケーション開発が大幅に簡素化

### 次のステップ

1. 自社のリアルタイムアプリケーション要件を評価
2. SAM テンプレートで WebSocket API を実装してテスト
3. 既存の CloudFormation ベースの WebSocket API を SAM に移行
4. 本番環境への段階的デプロイメント

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-sam-websocket-apis-api-gateway/
- **SAM 開発者ガイド**: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-websocketapi.html
- **API Gateway WebSocket API 概要**: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html
- **API Gateway WebSocket API チュートリアル**: https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-step-functions-tutorial.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**