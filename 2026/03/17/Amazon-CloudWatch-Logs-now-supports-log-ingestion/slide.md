---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatch Logs が HTTP ベースのログ取り込みに対応

新しい 4 つのエンドポイントでサードパーティシステムの統合が容易に

**発表日: 2026年3月16日**

---

## 概要

### CloudWatch Logs の 3 つの新しい対応

- **4 つの HTTP エンドポイント**: HLC、ND-JSON、Structured JSON、OpenTelemetry Logs
- **AWS SDK 非依存**: サードパーティソフトウェアやパッケージソフトウェアからのログ取り込みに対応
- **セキュアな実装**: ベアラートークン認証による保護と柔軟な API キー管理

### 対応フォーマット

- **HLC**: JSON 形式のイベント用（既存ログパイプラインの移行に最適）
- **ND-JSON**: 改行区切り JSON（高ボリュームストリーミング・バルク取り込み）
- **Structured JSON**: 単一オブジェクト or JSON 配列
- **OpenTelemetry**: JSON/Protobuf 形式の OTLP ログ

---

## 前提・背景

### CloudWatch Logs の課題

- AWS SDK 統合が実行不可能なシステムからのログ取り込みが困難
- レガシーシステムやサードパーティソフトウェアの統合に制限
- ログ集約の柔軟性不足

### 市場の動向

- ハイブリッドクラウド・マルチクラウド環境の普及
- OpenTelemetry（OTEL）標準の採用拡大
- ログ取り込みの標準化が急務

---

## 主な変更内容・新機能

### 1. HTTP Log Collector（HLC）エンドポイント

- JSON 形式のイベント用途に特化
- 既存のログパイプラインからの移行に最適
- シンプルな HTTP POST リクエストで対応

### 2. ND-JSON エンドポイント

- 改行区切り JSON 形式をサポート
- 高ボリュームストリーミングに最適
- バルクログ取り込みの効率化

### 3. Structured JSON エンドポイント

- 単一の JSON オブジェクト対応
- JSON オブジェクト配列の一括送信対応
- 複雑なデータ構造に対応

### 4. OpenTelemetry Logs エンドポイント

- OTLP 形式ログをネイティブサポート
- JSON / Protobuf 両形式対応
- 標準ベースのログ取り込み

---

## セキュリティ・認証機能

### ベアラートークン認証

- 各ロググループで有効/無効を制御
- API キーは CloudWatch 設定から生成
- 有効期限の柔軟な設定: 1 日 / 5 日 / 30 日 / 90 日 / 365 日

### 保護機能

- サービスコントロールポリシー（SCP）で認証情報作成をブロック
- 意図しない取り込みから保護
- 組織レベルでのセキュリティ統制

---

## 効果・メリット

### 統合の簡素化

- **AWS SDK 不要**: 既存システムの最小限の変更で対応
- **標準フォーマット対応**: HLC・ND-JSON・Structured JSON・OTEL をサポート
- **柔軟な実装**: HTTP ベースで言語・プラットフォーム問わず対応

### 運用効率化

- **ログパイプラインの統一**: 多様なソースから CloudWatch Logs へ集約
- **ハイブリッド環境対応**: オンプレミス・マルチクラウドシステムからのログ取り込み
- **コスト削減**: カスタムログ集約ソリューションの不要化

### セキュリティ向上

- **認証の一元化**: ベアラートークンで統一的に管理
- **動的な API キー管理**: 定期的な更新・ローテーション対応
- **組織レベルの制御**: SCP による統制

---

## ユースケース

### 1. サードパーティモニタリングツール

- Splunk、ELK Stack などからの CloudWatch Logs 統合
- 既存ツールからの最小限の変更

### 2. カスタムアプリケーション

- マイクロサービスアーキテクチャからのログ取り込み
- OpenTelemetry 標準に準拠したアプリケーション

### 3. レガシーシステム

- 古いソフトウェアからの HTTP ベースログ転送
- API キー認証による安全な統合

### 4. IoT・エッジデバイス

- エッジデバイスからのリアルタイムログ取り込み
- 低帯域幅環境への ND-JSON 対応

---

## まとめ

### Amazon CloudWatch Logs HTTP ログ取り込みの位置づけ

- **統合の民主化**: AWS SDK 依存からの解放
- **標準化への加速**: OpenTelemetry・HTTP ベースの標準フォーマット対応
- **ハイブリッド環境の強化**: 多様なシステムからの一元的なログ管理
- **セキュリティ重視**: ベアラートークン認証による堅牢な実装

### 次のステップ

1. 自組織のログシステムの現状把握
2. 対応フォーマット（HLC・ND-JSON・OTEL など）の選定
3. API キー生成・ベアラートークン設定の実施
4. 本番環境への段階的展開

### 対応リージョン

- 米国東部（N. Virginia）
- 米国西部（N. California）
- 米国西部（Oregon）
- 米国東部（Ohio）

---

## 参考リソース

- **AWS 公式発表**: https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-http-log-collector/
- **CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/
- **HTTP エンドポイント設定ガイド**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html
- **OpenTelemetry 公式**: https://opentelemetry.io/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**