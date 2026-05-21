---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Bedrock でリクエストレベルの使用状況追跡機能が利用可能に

Amazon Bedrock expands support for request-level usage attribution

**What's New** | 2026-05-20

---

## 概要

- Amazon Bedrockは、InvokeModelおよびInvokeModelWithResponseStream APIにおいてリクエストレベルでの使用状況属性付けをサポートし、顧客がチーム、アプリケーション、環境ごとに推論使用状況を詳細に追跡・分析できるようになりました。
- この機能により、組織全体の使用パターンの可視化、支出の最適化、および内部ステークホルダーへの使用状況報告が効率的に実現できます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Bedrock InvokeModel API - YouTube**
  [詳細](https://www.youtube.com/watch?v=Y5i6uTXJ-N0)

- **InvokeModel - Amazon Bedrock - AWS Documentation**
  [詳細](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html)

- **Getting started with Bedrock application inference profile**
  [詳細](https://builder.aws.com/content/2oa6QAE7tgxmAsgAExXY2B2MqCV/getting-started-with-bedrock-application-inference-profile)

---

## 変更内容・新機能

- Amazon Bedrockは、InvokeModelおよびInvokeModelWithResponseStream APIにおいて、リクエストレベルでの使用状況属性付けの機能を拡張しました。
- この機能により、顧客は特定のチーム、アプリケーション、環境、および実験に対して、モデル推論の使用状況を個別のリクエストレベルで属性付けすることができます。
- 組織全体におけるAmazon Bedrockの使用状況の分布を詳細に可視化し、消費パターンの理解、支出の最適化、および内部ステークホルダーへの使用状況報告が可能になります。
- この機能は、既存のリソースレベルおよびIAMプリンシパルレベルの属性付け機能に加えて、ConverseおよびConverseStream APIで既にサポートされているリクエストレベルのメタデータ機能と同等の機能をInvokeModel APIにもたらします。
- 顧客は、チーム、プロジェクト、環境などの属性を使用して各Amazon Bedrockモデル推論呼び出しにタグを付け、Amazon Bedrockモデル呼び出しログでこれらのタグによる使用状況を分析することができます。

---

## 利用方法

### セットアップの手順

1. **モデル呼び出しログの有効化**
   - Amazon Bedrockを呼び出すAWSリージョンでモデル呼び出しログを有効にします

2. **メタデータの追加**
   - 推論リクエストにメタデータを追加します

3. **属性付けの設定**
   - チーム、プロジェクト、環境などの属性タグを設定します

4. **ログの分析**
   - Amazon Bedrockモデル呼び出しログでタグ別に使用状況を分析

---

## 効果・メリット

- **詳細な使用状況追跡**: リクエストレベルでの属性付けにより、細粒度の使用状況把握が可能
- **コスト最適化**: 組織全体の消費パターンを理解し、支出を最適化
- **チーム別管理**: 特定のチーム、アプリケーション、環境ごとに使用状況を管理
- **内部報告の効率化**: ステークホルダーへの使用状況報告が容易に
- **リソース最適化**: 実験や開発環境での使用状況を個別に追跡

---

## 対応リージョン

- この機能は、Amazon Bedrockが利用可能な**すべてのAWSコマーシャルリージョン**で提供されています

---

## まとめ

### 主なポイント

- Amazon Bedrockのリクエストレベル使用状況追跡機能により、InvokeModel APIでも細粒度の属性付けが可能に
- 既存のConverse APIと同等のメタデータ機能をInvokeModel APIに拡張
- 組織全体の使用状況をリアルタイムで可視化し、コスト最適化を実現
- すべてのAWSコマーシャルリージョンで利用可能

### 次のステップ

1. 自社の使用状況追跡ニーズを評価
2. 試験環境でメタデータ機能をテスト
3. 本番環境への展開

---

## 参考URL

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-bedrock-request-level-usage-attribution/)

### 関連情報

- [Amazon Bedrock InvokeModel API - YouTube](https://www.youtube.com/watch?v=Y5i6uTXJ-N0)
- [InvokeModel - Amazon Bedrock - AWS Documentation](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html)
- [Getting started with Bedrock application inference profile](https://builder.aws.com/content/2oa6QAE7tgxmAsgAExXY2B2MqCV/getting-started-with-bedrock-application-inference-profile)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**