---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Partner Revenue Measurement
User Agent string が利用可能に

**発表日: 2026年4月3日**

---

## 概要

### 3つの主要ポイント

- **正確な測定**: AWSパートナーが自社ソリューション経由のAWSサービス消費量を正確に測定可能
- **複数SDK対応**: Python、Node.js、Java、Kotlinなど複数のAWS SDKに対応
- **自動適用**: 環境変数設定で全AWSサービスコールに自動的にUser Agent stringを適用

### 発表内容

- Partner Revenue Measurement User Agent string 機能が一般提供開始
- 2026年4月3日に公式発表
- 全ての商用リージョンで利用可能

---

## 前提・背景

### パートナーが直面する課題

- パートナー企業は自社ソリューション経由でのAWS収益への影響を正確に把握が困難
- リソースタグによるマニュアルな属性設定は手間がかかり、スケーラビリティに課題
- API駆動型ワークロードの自動追跡メカニズムが不足していた

### AWSパートナープログラムの進化

- 2026年1月: 基本的なPartner Revenue Measurement機能を発表
- パートナー向けの収益可視化ソリューションへのニーズが高まる
- チャネルパートナープログラムの成長を促進するための機能拡張

---

## 主な機能・特徴

### User Agent String 機能の特徴

#### 形式の標準化

- **フォーマット**: `APN_1.1/pc_<AWS Marketplace product-code>$`
- AWSマーケットプレイスのプロダクトコードを埋め込み
- 全てのAWS APIリクエストに自動付与

#### 複数の設定方法

- **環境変数設定**: SDKの環境変数を設定するだけ
- **AWS共有設定ファイル**: `~/.aws/config` で一元管理
- 手動コーディング不要で自動適用

#### 対応SDK

| SDK | 対応状況 | 自動デプロイ |
|-----|---------|----------|
| Python | ✅ 対応 | ✅ 可能 |
| Node.js | ✅ 対応 | ✅ 可能 |
| Java | ✅ 対応 | ✅ 可能 |
| Kotlin | ✅ 対応 | ✅ 可能 |
| その他 | ✅ 対応予定 | 順次対応 |

---

## 実装・利用方法

### 環境変数による設定

```bash
export AWS_USER_AGENT_EXTRA="APN_1.1/pc_12345678$"
```

### AWS設定ファイルでの設定

```ini
[profile my-partner]
aws_user_agent = APN_1.1/pc_12345678$
```

### 効果

- **自動適用**: すべてのAWS APIコールに自動的に付与
- **スケーラビリティ**: 数千のAPIリクエストに対応
- **レポーティング連携**: AWS請求・分析システムと自動連携

---

## 利点・メリット

### パートナー企業側のメリット

- **正確な収益測定**: 自社ソリューション経由のAWS消費量を正確に把握
- **導入容易性**: 環境変数設定だけで実装可能、コード変更不要
- **スケーラブルな運用**: 自動デプロイメント環境で確実に機能

### AWS/顧客側のメリット

- **透明性向上**: パートナーの貢献度を定量的に把握
- **チャネル最適化**: パートナー貢献度に基づいたインセンティブ設計
- **エコシステム強化**: パートナーと顧客の関係を可視化

---

## 補完機能

### Partner Revenue Measurement の複数の測定方式

<div class="columns">
<div>

### User Agent String
- API駆動型ワークロード
- 自動適用
- 今回リリース

</div>
<div>

### Resource Tagging
- リソースベースの測定
- マニュアルタグ設定
- 1月リリース

</div>
<div>

### AWS Marketplace Metering
- SaaS利用量測定
- 課金連携
- 既存機能

</div>
</div>

---

## ユースケース

### パートナーソリューション企業 X 社の事例

- **背景**: クラウド管理プラットフォームをSaaS提供
- **課題**: 顧客のAWS消費量への自社ソリューションの影響度が不明確
- **解決**: User Agent string で自動追跡開始
- **結果**: 月次レポートで ROI を定量化、チャネルパートナーに貢献度をアピール

### ISV（独立系ソフトウェアベンダー）での活用

- セキュリティ監視ツールのAWS統合
- データ分析プラットフォームの利用パターン追跡
- マルチテナント環境での顧客別オートメーション

---

## まとめ

### Partner Revenue Measurement User Agent String の位置付け

- AWS パートナー向けの重要な機能拡張
- 自社ソリューション経由のAWS消費量の可視化を実現
- 環境変数設定だけで導入可能な使いやすさ
- 全商用リージョンで即座に利用開始可能

### 次のアクション

1. **評価**: 自社ソリューションのAWS統合ポイントを確認
2. **計画**: User Agent string 導入スケジュール作成
3. **実装**: 環境変数またはAWS設定ファイルでの設定実施
4. **検証**: AWS Cost Management/Analytics での測定データ確認

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/partner-revenue-measurement-user-agent-support/
- **User Agent 実装ガイド**: https://docs.aws.amazon.com/PRM/latest/aws-prm-onboarding-guide/user-agent-string.html
- **対応サービス一覧**: https://docs.aws.amazon.com/PRM/latest/aws-prm-onboarding-guide/user-agent-included-services.html
- **Partner Revenue Measurement オンボーディングガイド**: https://docs.aws.amazon.com/PRM/latest/aws-prm-onboarding-guide/what-is-service.html

### 関連情報

- [New Partner Revenue Measurement gives visibility into AWS service consumption](https://aws.amazon.com/about-aws/whats-new/2026/01/new-partner-revenue-measurement/)
- [Updates to AWS Channel Partner Programs to Drive Growth in 2026](https://aws.amazon.com/blogs/apn/updates-to-aws-channel-programs-to-drive-growth-in-2026/)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**