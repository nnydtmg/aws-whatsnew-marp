---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Direct Connect が VIF Rate Limiters に対応
ネットワーク輻輳を防止

**発表日: 2026年6月1日**

---

## 概要

### AWS Direct Connect への3つの主要な改善

- **VIF Rate Limiters**: 1つの専用接続上で最大10個のVIFに対する帯域幅割り当てを独立して制御
- **トラフィック保護**: 予期しないトラフィックスパイクが他のVIFに影響を与えることなく動作
- **CloudWatch統合**: トラフィック利用率と廃棄パケット数をリアルタイム監視

### サポート範囲

- 50 Mbps から 1.6 Tbps （リンク集約グループ使用時）
- すべてのAWSリージョンの商用およびChina パーティション

---

## 前提・背景

### 既存の課題

- AWS Direct Connect では複数のVIFが同一の専用接続を共有
- 1つのVIFのトラフィックスパイクが他のVIFのパフォーマンスに影響
- VIF単位での帯域幅制御がなく、予測可能なネットワーク動作が困難

### 市場の動向

- エンタープライズの多くが複数のVIFで異なるワークロードを分離
- ネットワーク輻輳の防止と QoS の確保が重要な要件
- 帯域幅の効率的な利用と管理の需要が増加

---

## 主な機能

### 1. VIF 単位の帯域幅制限

- 専用接続上で最大10個のVIFに対する独立した帯域幅割り当て
- 各VIFに最大帯域幅を設定して、他のVIFを保護
- 入出両方向のトラフィックに適用

### 2. トラフィック管理

- 設定容量を超えるトラフィックは自動的に廃棄
- 他のVIFの帯域幅を確保してネットワーク安定性を維持
- 細かい帯域幅調整が可能

---

## 主な機能（続き）

### 3. Amazon CloudWatch 統合

- **トラフィック利用率メトリクス**: VIFの設定容量に対するパーセンテージで表示
- **廃棄パケット数**: 制限を超えたトラフィック統計
- **カスタムアラーム**: CloudWatch 上でアラーム設定して監視・通知

### 4. 設定方法

- AWS Direct Connect コンソール
- AWS API
- AWS SDK

---

## 利用例

<div class="columns">
<div>

### 使用例1: 本番・開発環境の分離

- **本番 VIF**: 1 Gbps を割り当て
- **開発 VIF**: 100 Mbps を割り当て
- 開発環境のスパイクが本番環境に影響しない

</div>
<div>

### 使用例2: 部門別リソース配分

- **営業部門**: 500 Mbps
- **エンジニアリング**: 400 Mbps
- **バックアップ**: 100 Mbps
- 各部門の必要帯域を確保

</div>
</div>

---

## メリット

### 予測可能なネットワーク動作

- 各VIFの帯域幅が保証され、SLA達成が容易に
- トラフィックスパイクによるサービス障害を防止

### 帯域幅の効率的な活用

- 複数部門・アプリケーション間で帯域幅を公平に配分
- 利用率に応じた動的調整が可能

### 運用の簡素化

- CloudWatch 統合で可視化と監視が容易
- アラーム設定で異常なトラフィックを即座に検知

---

## 対応範囲と制限事項

### 利用可能な設定

| 項目 | 仕様 |
|------|------|
| **Rate Limiters 最大数** | 1接続当たり 10個 |
| **帯域幅設定範囲** | 50 Mbps ～ 1.6 Tbps |
| **トラフィック方向** | 双方向（入出両対応） |
| **対応VIF型** | 専用接続上のすべてのVIF |

### 利用可能なリージョン

- すべての AWS リージョン（商用パーティション）
- China リージョン

---

## まとめ

### AWS Direct Connect VIF Rate Limiters の位置づけ

- AWS Direct Connect の機能拡張によるネットワーク管理の高度化
- エンタープライズの複雑なネットワーク要件に対応
- CloudWatch との統合で運用効率を大幅に向上

### 次のステップ

1. 自社の Direct Connect 接続を確認
2. VIF 単位での帯域幅必要量を整理
3. Rate Limiters の設定とテストを実施
4. CloudWatch アラーム設定で運用開始

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-direct-connect-now-supports-vif-rate-limiters/
- **AWS Direct Connect ドキュメント**: https://docs.aws.amazon.com/directconnect/
- **Direct Connect VIF（仮想インターフェイス）ガイド**: https://docs.aws.amazon.com/directconnect/latest/UserGuide/WorkingWithVirtualInterfaces.html
- **AWS Direct Connect コンソール**: https://console.aws.amazon.com/directconnect/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**