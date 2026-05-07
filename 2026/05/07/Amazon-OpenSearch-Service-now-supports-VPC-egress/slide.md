---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon OpenSearch Service
VPC egress オプション対応

**発表日: 2026年5月7日**

---

## 概要

### VPC egress オプションがサポート開始

- **新機能**: Amazon OpenSearch Service が VPC egress オプションをサポート
- **主な特徴**: VPC ドメインがVPC内のリソースとプライベート接続を確立可能
- **セキュリティ向上**: インターネットにトラフィックを公開することなく通信実現

### 対応リージョン

- Amazon OpenSearch Service が利用可能なすべての AWS リージョンでサポート

---

## 前提・背景

### セキュリティ要件の高まり

- 企業システムでセキュリティ要件がますます厳しくなっている
- VPC内での完全なプライベート通信が必須となるケースが増加
- インターネット経由でのトラフィック公開を回避したいニーズ

### Amazon OpenSearch Service の進化

- AWS PrivateLink による接続オプションの拡張
- VPC ドメイン内でのセキュアな統合がさらに強化
- エンタープライズグレードのセキュリティ標準に対応

---

## 主な機能・変更内容

### VPC egress オプションとは

- OpenSearch Service ドメインから VPC 内のリソースへのプライベート接続
- ネットワークインターフェースを選択されたサブネットに追加
- アウトバウンドトラフィックを VPC 内にルーティング

### 接続対象リソース

- **ML モデル**: Amazon SageMaker などの機械学習サービス
- **AWS サービス**: Lambda、S3、DynamoDB など
- **カスタムアプリケーション**: VPC 内の自社システム

---

## 設定・管理方法

### 有効化・無効化の方法

- **Amazon OpenSearch Service console**: GUI で簡単設定
- **AWS CLI**: コマンドラインから管理
- **API 操作**: CreateDomain と UpdateDomainConfig API で実装

### 動作メカニズム

1. VPC egress オプションを有効化
2. OpenSearch Service がネットワークインターフェースを配置
3. ドメインのサブネットにインターフェースを追加
4. アウトバウンドトラフィックを VPC 経由にルーティング
5. VPC 内リソースとのプライベート接続確立完了

---

## ユースケース・適用対象

### 特に適している環境

- **金融機関**: 規制要件が厳しく、インターネット経由での通信が禁止
- **医療関係**: HIPAA などのセキュリティ標準に準拠が必要
- **大企業**: エンタープライズセキュリティポリシーが厳格

### 推奨される活用シーン

- OpenSearch と SageMaker モデルの統合分析
- VPC 内の複数の AWS サービス間での相互通信
- オンプレミス環境とのハイブリッドシステム構築

---

## まとめ

### Amazon OpenSearch Service VPC egress の意義

- セキュリティ要件が高い環境でも安心して利用可能
- VPC 内の完全なプライベートネットワーク通信を実現
- 規制要件に対応したエンタープライズソリューション

### 次のステップ

1. 自社のセキュリティ要件を確認
2. VPC egress オプションの導入検討
3. AWS ドキュメントで詳細を確認
4. テスト環境での動作検証を実施

---

## 参考リソース

- **AWS What's New 記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-opensearch-service-vpc
- **ドキュメント（VPC egress）**: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc-egress.html
- **OpenSearch Service VPC サポート**: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html
- **AWS PrivateLink**: https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc-interface-endpoints.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**