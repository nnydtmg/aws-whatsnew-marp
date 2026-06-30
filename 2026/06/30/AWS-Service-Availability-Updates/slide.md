---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWSサービスの可用性変更発表

メンテナンス・サンセット段階への移行

**発表日: 2026年6月30日**

---

## 概要

### AWS が発表した3つのステータス変更

- **メンテナンス段階**: 2026年7月30日以降、新規顧客はアクセス不可
  - 既存顧客は引き続き利用可能
  - AWS が継続的なサポートを提供

- **サンセット段階**: 段階的な廃止が予定される
  - 移行計画を立てることが重要
  - 代替サービスへの移行を推奨

- **サポート終了**: 2026年6月30日以降、利用不可
  - 即座の移行が必要

---

## 前提・背景

### 変更が必要な理由

- AWS サービスポートフォリオの継続的な最適化
- ユーザー需要の変化に対応した機能統合
- より新しい、より高度なサービスへの誘導
- セキュリティと運用コストの最適化

### 段階的な移行スケジュール

- 既存顧客への十分な猶予期間を設定
- 移行ガイドと専門的サポートを提供
- AWS Product Lifecycle Page で詳細確認可能

---

<!-- _class: small -->

## メンテナンス段階へ移行するサービス（抜粋）

### AI・アナリティクス関連

- **Amazon Bedrock Agents** (Classic)
- **Amazon Kendra** (エンタープライズ検索)
- **Amazon Q Business** (生成AI ビジネスアシスタント)
- **Amazon SageMaker AI Features**
  - A2I（Augmented AI）
  - Clarify（バイアス検出）
  - Debugger（モデルデバッグ）
  - GeoSpatial（地理空間データ分析）
  - Ground Truth（データラベリング）
  - Model Monitor（モデル監視）
  - Profiler（パフォーマンスプロファイリング）

### エンタープライズ・ディレクトリサービス

- **Amazon Cognito Sync** (ユーザー同期)
- **AWS Directory Service – Simple AD** (ディレクトリサービス)

---

<!-- _class: small -->

## メンテナンス段階へ移行するサービス（続き）

### IoT・管理・アプリケーション関連

- **AWS IoT Device Defender – Detect** (2026年8月31日以降)
- **AWS Mainframe Modernization** – Self-Managed Experience
- **AWS Management Console – myApplications**
- **AWS Resource Groups** – Group Lifecycle Events
- **AWS Service Catalog** – Application Registry
- **AWS Systems Manager** – Application Manager

---

## サンセット段階へ進入するサービス

### 段階的廃止の対象

| サービス | 説明 | 対応 |
|---------|------|------|
| **Amazon WorkSpaces – PCoIP** | 仮想デスクトップサービス | 新プロトコルへの移行が必要 |
| **Amazon WorkSpaces – Pool** | プール型ワークスペース | DAS への移行推奨 |
| **AWS Managed Services Advanced** | マネージドサービス | 別プランへの移行 |
| **AWS re:Post Private** | プライベートコミュニティ | 公開版への移行 |

---

## サポート終了に達したサービス

### 2026年6月30日現在、利用不可

- **Amazon Chime SDK – Carrier Voice Focus**
  - 電話キャリア連携機能が廃止
  - 代替手段を確保すること

- **Amazon SageMaker AI – Ground Truth Plus**
  - 高度なデータラベリング機能
  - Ground Truth への統合により廃止

- **AWS Elemental MediaLive & MediaPackage (Select Regions)**
  - ADC（Asia Pacific）リージョンでサポート終了
  - 他リージョンへの移行を検討

---

## 効果・メリット

### 顧客にとってのメリット

- ✅ **段階的な移行**: 十分な猶予期間で計画立案可能
- ✅ **サポート継続**: メンテナンス段階でも AWS が継続サポート
- ✅ **移行ガイド提供**: 専門的なドキュメントとサポート完備
- ✅ **最新機能へのアクセス**: より高度なサービスへの誘導
- ✅ **セキュリティ向上**: 最新のセキュリティ標準に対応

### AWS にとってのメリット

- 🔄 **サービスの最適化**: ポートフォリオ効率化
- 🔄 **運用コスト削減**: サポート負担の軽減
- 🔄 **ユーザー体験向上**: より良いサービスへの集約

---

## 推奨アクション

### 今すぐすべきこと

1. **影響範囲の確認**
   - 現在利用中のサービスをチェック
   - 対象サービスの特定

2. **移行計画の策定**
   - AWS Product Lifecycle Page で詳細確認
   - 代替サービスの評価
   - タイムラインの決定

3. **サポートの活用**
   - AWS Support に相談
   - 移行ガイドの参照
   - 技術的な質問への対応

### タイムライン

| 日時 | イベント |
|-----|----------|
| 2026年6月30日 | 発表日（本日） |
| 2026年7月30日 | メンテナンス段階サービス、新規顧客アクセス停止 |
| 2026年8月31日 | AWS IoT Device Defender – Detect 新規顧客アクセス停止 |
| 各サービス個別 | サンセット段階のタイムライン |

---

## まとめ

### 重要なポイント

- 🎯 **複数のサービスで可用性変更が発生**
  - メンテナンス段階、サンセット段階、サポート終了

- 🎯 **既存顧客への配慮**
  - 十分な猶予期間とサポート体制

- 🎯 **計画的な移行が必須**
  - 早期の対応で追加コストを削減

- 🎯 **AWS の支援体制が充実**
  - 移行ガイド、ドキュメント、サポートチーム

### 次のステップ

1. 影響を受けるサービスを特定する
2. AWS Product Lifecycle Page で詳細を確認
3. 移行計画を立案する
4. AWS Support と協力して実行する

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-service-availability/
- **AWS Product Lifecycle Page**: https://docs.aws.amazon.com/general/latest/gr/service-lifecycle.html
- **個別サービスのドキュメント**:
  - [Amazon Bedrock Agents Classic Maintenance Mode](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-classic-maintenance-mode.html)
  - [Amazon Cognito Sync Availability Change](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sync-availability-change.html)
  - [Amazon Kendra Availability Change](https://docs.aws.amazon.com/kendra/latest/dg/kendra-availability-change.html)
  - [Amazon WorkSpaces PCoIP End of Support](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-pcoip-end-of-support.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**