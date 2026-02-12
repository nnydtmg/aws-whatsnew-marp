---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock AgentCore Browser
プロキシ設定対応

**発表日: 2026年2月11日**

---

## 概要

### ブラウザセッションのプロキシルーティング機能が追加

- **カスタマー提供のプロキシ設定に対応**
- ブラウザセッションを顧客インフラ経由でルーティング
- 地理的制限コンテンツのアクセス実現
- 地域別コンテンツ検証・価格検証が可能

### 対応業界での自動化実現

- 医療機関での規制対応自動化
- 金融サービスでのセキュリティ要件対応
- エンタープライズでのコンプライアンス要件対応

---

## 前提・背景

### 従来の課題

- **IP検証の問題**: IPローテーション時の再認証サイクル
- **セキュリティ要件**: IP許可リスト管理の複雑化
- **地域コンテンツ**: 地理的制限コンテンツへのアクセス困難
- **コンプライアンス**: エンタープライズのセキュリティ要件対応困難

### 市場の動向

- エンタープライズAIの規制対応需要増加
- ハイブリッドクラウド環境でのセキュリティ要件強化
- 金融・ヘルスケアセクターでのAI活用拡大

---

## 主な機能

### プロキシ設定機能

<div class="columns">
<div>

**対応プロトコル**
- HTTP プロトコル
- HTTPS プロトコル
- 認証情報管理

**セキュリティ**
- AWS Secrets Manager連携
- 基本認証対応
- 安全な認証情報保管

</div>
<div>

**ドメイン設定**
- ドメインパターン指定
- ワイルドカードサポート
- バイパスルール設定

**プロキシルーティング**
- 複数プロキシ設定可能
- ドメイン別ルーティング
- キャッチオール設定

</div>
</div>

---

## 利用方法

### API 設定例

```json
{
  "proxyConfiguration": {
    "proxies": [
      {
        "externalProxy": {
          "server": "corp-proxy.example.com",
          "port": 8080,
          "domainPatterns": [".company.com", ".internal.corp"],
          "credentials": {
            "basicAuth": {
              "secretArn": "arn:aws:secretsmanager:region:account:secret:proxy-creds"
            }
          }
        }
      }
    ],
    "bypass": {
      "domainPatterns": [".amazonaws.com"]
    }
  }
}
```

---

## ユースケース

### 医療機関

- **ヘルスケアポータルアクセス**
  - 厳密なIPホワイトリスト対応
  - コンプライアンス要件満たし
  - 患者データ取得の自動化

### 金融サービス

- **地域別価格検証**
  - 複数地域での価格監視
  - 規制要件対応
  - トレーディングシステム連携

### エンタープライズ

- **セキュリティ要件対応**
  - コーポレートプロキシ経由ルーティング
  - セキュリティポリシー実施
  - 監査ログ統合

---

## 効果・メリット

### 運用効率化

- **安定した送信アドレス**: IP許可リスト要件の簡素化
- **再認証サイクル排除**: IPローテーション対応不要
- **セキュリティ向上**: 認証情報の一元管理

### ビジネス効果

- **規制対応簡素化**: コンプライアンス要件への自動対応
- **自動化範囲拡大**: 地域別ターゲティング実現
- **信頼性向上**: 安定したプロキシ接続

### テクニカル効果

- **スケーラビリティ**: 複数プロキシの並列運用
- **柔軟な設定**: ドメイン別ルーティング
- **シームレス統合**: AWS Secrets Manager連携

---

## 利用可能なリージョン

Amazon Bedrock AgentCore Browserが利用可能な**14のAWSリージョン全て**で対応

- 米国東部・西部
- ヨーロッパ地域
- アジア太平洋地域
- その他主要リージョン

---

## まとめ

### Amazon Bedrock AgentCore Browser プロキシ設定

| 項目 | 内容 |
|------|------|
| **対応開始日** | 2026年2月11日 |
| **対応プロトコル** | HTTP / HTTPS |
| **認証方式** | 基本認証 |
| **認証情報管理** | AWS Secrets Manager |
| **対応リージョン** | 14リージョン全て |
| **主な活用先** | 医療・金融・エンタープライズ |

### 次のステップ

1. 既存ワークフローでのプロキシ要件確認
2. AWS Secrets Manager での認証情報登録
3. 開発環境でのテスト実施
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/02/bedrock-agentcore-browser-proxy/
- **API Changes**: https://awsapichanges.info/archive/changes/56b6d8-bedrock-agentcore.html
- **ドキュメント**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/browser-proxies.html
- **トラブルシューティング**: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/built-in-tools-troubleshooting.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**