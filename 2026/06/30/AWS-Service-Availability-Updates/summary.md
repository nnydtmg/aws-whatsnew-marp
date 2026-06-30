# AWSサービスの可用性変更発表｜メンテナンス・サンセット段階への移行

**元記事**: [AWS What's New - AWS Service Availability Updates](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-service-availability/)

**カテゴリ**: What's New
**公開日**: 2026年6月30日

---

## 📋 要約

AWS は 2026 年 6 月 30 日付で、複数のサービスについてメンテナンス段階への移行、サンセット段階への進入、およびサポート終了を発表しました。既存顧客は引き続きサービスを利用できますが、新規顧客のアクセスは制限されるため、影響を受ける顧客は提供される移行ガイドに従って計画的に代替サービスへの移行をご検討ください。

---

## 🔄 3つのサービスステータス変更

### 1. メンテナンス段階への移行

**時期**: 2026年7月30日以降

**特徴**:
- 新規顧客はアクセス不可
- 既存顧客は引き続き利用可能
- AWS が継続的なサポートを提供

**対象サービス**:
- **Amazon Bedrock Agents** (Classic)
- **Amazon Cognito Sync**
- **Amazon Kendra**
- **Amazon Q Business**
- **AWS Directory Service – Simple AD**
- **AWS IoT Device Defender – Detect** (2026年8月31日以降)
- **AWS Mainframe Modernization – Self-Managed Experience**
- **AWS Management Console – myApplications**
- **AWS Resource Groups – Group Lifecycle Events**
- **AWS Service Catalog – Application Registry**
- **AWS Systems Manager – Application Manager**

**Amazon SageMaker AI Features**:
- A2I（Augmented AI）
- Clarify（バイアス検出）
- Debugger（モデルデバッグ）
- GeoSpatial（地理空間データ分析）
- Ground Truth（データラベリング）
- Mechanical Turk
- Model Monitor（モデル監視）
- Profiler（パフォーマンスプロファイリング）
- Role Manager
- Studio Lab

---

### 2. サンセット段階への進入

**特徴**:
- 段階的な廃止が予定される
- 顧客は移行計画を立てることが重要
- 代替サービスへの移行を推奨

**対象サービス**:
- **Amazon WorkSpaces – PCoIP** (NICE DCV への移行推奨)
- **Amazon WorkSpaces – Pool** (DAS への移行推奨)
- **AWS Managed Services (AMS) Advanced**
- **AWS re:Post Private**

---

### 3. サポート終了

**時期**: 2026年6月30日

**対象サービス**:
- **Amazon Chime SDK – Carrier Voice Focus**
- **Amazon SageMaker AI – Ground Truth Plus**
- **AWS Elemental MediaLive と MediaPackage** (ADC リージョンのみ)

---

## 🎯 何が変わったか

### AWS サービスポートフォリオの最適化

1. **サービスの統合と進化**
   - 重複する機能の統合
   - より高度なサービスへの誘導
   - ユーザーフロー効率化

2. **セキュリティと運用の向上**
   - 最新のセキュリティ標準への準拠
   - サポート負担の最適化
   - 運用コスト削減

3. **ユーザー体験の改善**
   - より堅牢で機能豊富なサービスへの移行
   - 新しい技術トレンドへの対応
   - ベストプラクティスの推進

---

## 👥 対象ユーザー

### 影響を受ける顧客

1. **既存ユーザー**
   - メンテナンス段階: 引き続き利用可能、移行計画を立案
   - サンセット段階: 段階的に代替サービスへ移行
   - サポート終了: 即座の対応が必要

2. **新規ユーザー**
   - メンテナンス段階: 2026年7月30日以降アクセス不可
   - 代替サービスの利用を推奨

---

## 💡 詳細情報

### 移行ガイドと支援

AWS は以下のサポートを提供しています:

- **包括的な移行ガイド**: 各サービスの詳細な移行手順
- **AWS Support チーム**: 技術的なサポートと相談
- **ドキュメント**: 代替サービスの活用方法
- **AWS Product Lifecycle Page**: 全サービスのライフサイクル情報

### 重要なタイムライン

| 日付 | イベント |
|------|----------|
| 2026年6月30日 | 発表日 |
| 2026年7月30日 | メンテナンス段階サービス、新規顧客アクセス停止 |
| 2026年8月31日 | AWS IoT Device Defender – Detect 新規顧客アクセス停止 |
| 以降 | 各サービスのサンセットスケジュールに従う |

---

## ✅ 推奨アクション

### 今すぐすべきこと

1. **影響範囲の確認**
   ```
   □ 現在使用中のサービスを確認
   □ 対象サービスを特定
   □ 依存関係を把握
   ```

2. **移行計画の策定**
   ```
   □ AWS Product Lifecycle Page で詳細を確認
   □ 代替サービスを評価
   □ 移行タイムラインを決定
   □ リソースを割り当て
   ```

3. **サポートの活用**
   ```
   □ AWS Support に連絡
   □ 移行ガイドを参照
   □ 技術的な質問に対応
   □ POC（概念実証）を実施
   ```

### 段階別の対応

**即座（今月中）**
- 対象サービスの確認
- 初期評価と計画

**短期（1-2ヶ月）**
- 移行計画の詳細化
- 代替サービスの検証
- POC の実施

**中期（3-6ヶ月）**
- 本格的な移行開始
- 既存ワークロードの移行
- テストと検証

**長期（6ヶ月以上）**
- 完全な移行完了
- 最適化と安定化
- 新サービスの活用推進

---

## 🔗 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-service-availability/
- **AWS Product Lifecycle Page**: https://docs.aws.amazon.com/general/latest/gr/service-lifecycle.html

### 個別サービスの移行ガイド

- [Amazon Bedrock Agents Classic – Maintenance Mode](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-classic-maintenance-mode.html)
- [Amazon Cognito Sync – Availability Change](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sync-availability-change.html)
- [Amazon Kendra – Availability Change](https://docs.aws.amazon.com/kendra/latest/dg/kendra-availability-change.html)
- [Amazon Q Business – Availability Change](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/qbusiness-availability-change.html)
- [AWS Directory Service – Simple AD – Availability Change](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/simple-ad-availability-change.html)
- [AWS IoT Device Defender – Detect – Availability Change](https://docs.aws.amazon.com/iot-device-defender/latest/devguide/dd-detect-availability-change.html)
- [Amazon WorkSpaces – PCoIP End of Support](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-pcoip-end-of-support.html)
- [Amazon WorkSpaces – Pool End of Support](https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp-pools-end-of-support.html)
- [AWS re:Post Private – End of Support](https://docs.aws.amazon.com/repostprivate/latest/userguide/repost-private-end-of-support.html)

---

## 📊 まとめ

このアップデートは、AWS のサービスポートフォリオが継続的に進化していることを示しています。

### 重要な点

- **段階的な移行**: 既存顧客には十分な猶予期間が提供されます
- **サポート体制**: AWS は包括的な移行ガイドと技術サポートを提供します
- **早期対応の重要性**: 計画的な移行で追加コストや運用負担を最小化できます
- **ベストプラクティス**: より先進的なサービスへの移行により、セキュリティと機能性が向上します

### 次のステップ

1. 影響を受けるサービスを特定する
2. AWS Product Lifecycle Page で詳細を確認する
3. 移行計画を立案する
4. AWS Support と協力して実行する

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**