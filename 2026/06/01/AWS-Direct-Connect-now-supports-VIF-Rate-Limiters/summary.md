# AWS Direct Connect が VIF Rate Limiters に対応 - ネットワーク輻輳を防止

AWS Direct Connect now supports VIF Rate Limiters to help prevent network congestion

**カテゴリ:** What's New  
**公開日:** 2026-06-01T15:00:00  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-direct-connect-now-supports-vif-rate-limiters/)

---

## 要約

AWS Direct ConnectがVIF Rate Limitersをサポートするようになり、専用接続上で最大10個のVIFに対して帯域幅を制限し、ネットワーク輻輳を防止することができるようになりました。この機能により、予期しないトラフィックスパイクが他のVIFに影響を与えることなく、CloudWatch統合によるトラフィック監視と帯域幅管理が容易になります。

---

## このアップデートで何が変わったか

### 新機能概要

- **VIF Rate Limiters**: 1つの専用接続上で最大10個のVIFに対する独立した帯域幅割り当て機能
- **トラフィック保護**: 各VIFに最大帯域幅を設定して、予期しないトラフィックスパイクから他のVIFを保護
- **CloudWatch 統合**: トラフィック利用率と廃棄パケット数をリアルタイムで監視可能

### サポート容量

- 最小: 50 Mbps
- 最大: 1.6 Tbps（リンク集約グループ使用時）
- すべてのAWSリージョンで利用可能（商用およびChina パーティション）

---

## 詳細

### AWS Direct Connect VIF Rate Limiters の特徴

**1. 専用接続上の帯域幅管理**
- AWS Direct Connectの専用接続において、Virtual Interface（VIF）Rate Limitersという新機能がサポートされるようになりました
- 1つの専用接続上で最大10個のVIFに対して、最大帯域幅割り当てを設定することが可能です

**2. トラフィックスパイク対策**
- この機能により、予期しないトラフィックスパイクによるネットワーク輻輳を防止することができます
- レート制限はAWSネットワークへの入出両方向のトラフィックに適用されます

**3. 帯域幅保護メカニズム**
- 設定容量を超えるトラフィックは廃棄され、他のVIFが必要とする帯域幅を保護します

**4. 利用可能な帯域幅範囲**
- 50 Mbpsから1.6 Tbps（リンク集約グループ使用時）の幅広い範囲から選択できます

**5. CloudWatch 統合による可視化**
- VIFの設定容量に対するパーセンテージとして表示されるトラフィック利用率メトリクスと廃棄パケット数がAmazon CloudWatchに発行されます
- CloudWatch上でアラームを設定して、帯域幅割り当ての使用状況を監視・調整することができます

**6. グローバル対応**
- この機能は、AWS Direct Connectの専用接続がサポートされているすべてのAWSリージョンの商用およびChina パーティションで利用可能です

**7. 設定方法**
- AWS Direct Connectコンソール、API、またはSDKを通じてRate Limitersを設定できます

**8. ターゲットユース**
- このアップデートは、複数のVIFを使用する組織や、ネットワーク帯域幅の効率的な管理が必要な企業に適しています

---

## ユースケース

### 本番・開発環境の分離

複数のVIFを持つ企業が本番環境と開発環境を分離する場合:
- 本番 VIF: 1 Gbps を割り当て、ビジネスクリティカルなアプリケーションを保護
- 開発 VIF: 100 Mbps を割り当て、開発作業でのトラフィックスパイクが本番環境に影響しないようにする

### 部門別リソース配分

複数の部門が同じDirect Connect接続を共有する場合:
- 営業部門: 500 Mbps
- エンジニアリング: 400 Mbps  
- バックアップ: 100 Mbps
- 各部門の必要帯域を確保しつつ、全体の帯域幅を効率的に利用

### SLA要件の達成

Service Level Agreement で帯域幅保証が必要な場合:
- 顧客ごとのVIFに対して保証帯域幅を設定
- CloudWatch でSLA達成状況をリアルタイム監視
- SLA違反時に自動アラームで通知

---

## メリット

### 予測可能なネットワーク動作
- 各VIFの帯域幅が保証され、ネットワークパフォーマンスが予測可能に
- トラフィックスパイクによるサービス障害を防止
- SLA達成が容易に

### 帯域幅の効率的な活用
- 複数部門・アプリケーション間で帯域幅を公平に配分
- ピークアワーの帯域幅利用を最適化
- 利用率に応じた動的調整が可能

### 運用効率の向上
- CloudWatch 統合で可視化と監視が容易
- アラーム設定で異常なトラフィックを即座に検知
- トラブルシューティングに必要な情報が自動的に記録される

### コスト管理
- 不要な帯域幅スパイクを抑制
- 必要な帯域幅を正確に把握できり、適切な接続速度を選択可能

---

## 注意事項

- VIF Rate Limiters は AWS Direct Connect の専用接続にのみ適用されます（ホスト接続には非対応）
- 設定容量を超えたトラフィックは廃棄されるため、アプリケーション側での適切なエラーハンドリングが必要です
- CloudWatch メトリクスの保存にはコストが発生します

---

## 参考リンク

- [AWS What's New - AWS Direct Connect now supports VIF Rate Limiters](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-direct-connect-now-supports-vif-rate-limiters/)
- [AWS Direct Connect - VIF Bandwidth Limits](https://www.reddit.com/r/aws/comments/8c7kb1/direct_connect_vif_bandwidth_limits)
- [Direct Connect quotas - AWS Documentation](https://docs.aws.amazon.com/directconnect/latest/UserGuide/limits.html)
- [Direct Connect Bandwidth Consumption Limits per account/Application | AWS re:Post](https://repost.aws/questions/QUrk9m7MPbT3-qTENBs9nC3Q/direct-connect-bandwidth-consumption-limits-per-account-application)
- [AWS Direct Connect ドキュメント](https://docs.aws.amazon.com/directconnect/)
