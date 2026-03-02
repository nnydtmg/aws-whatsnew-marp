# AWS announces pricing for VPC Encryption Controls

**カテゴリ:** What's New
**公開日:** 2026年3月1日
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/vpc-encryption-controls-pricing/](https://aws.amazon.com/about-aws/whats-new/2026/03/vpc-encryption-controls-pricing/)

---

## 要約

AWS VPC Encryption Controlsは2026年3月1日より有料化され、非空のVPCに対して固定時間料金が課金されるようになります。このアップデートは、データ転送時の暗号化を監査・強制する必要があり、セキュリティコンプライアンス要件が厳しい企業や組織に適しております。

---

## 詳細

### 主な変更点

1. **無料プレビューから有料機能へ移行**
   - VPC Encryption Controlsは2026年3月1日より無料プレビューから有料機能へ移行いたします
   - 既存ユーザーはこの日付から自動的に料金が発生する対象となります

2. **2つの運用モード**
   - **Monitor mode**: VPC内の暗号化されていないトラフィックを検出します
   - **Enforce mode**: すべてのデータ転送時の暗号化を確保し、暗号化されていないトラフィックを許可するリソースの起動を防止します

3. **料金体系**
   - ネットワークインターフェースを含む非空のVPCに対して、Encryption Controlsが有効な場合は固定時間料金が課金されます
   - 空のVPCでEncryption Controlsが有効な場合は、料金は発生いたしません

4. **Transit Gatewayとの連携**
   - Transit Gatewayで暗号化サポートを有効にした場合、そのTransit Gatewayに接続されたすべてのVPCに対して標準的なVPC Encryption Controls料金が適用されます
   - これは暗号化制御モード（monitor、enforce、off）や空のVPCであるかどうかに関わらず適用されます

### 料金見積もり

- **推定月額コスト**: 約$110/月（$0.15/時間 × 730時間/月の想定）
  ※地域によって料金が異なるため、VPC料金ページで確認が必要です

### 適用対象

- **対象となるVPC**: ネットワークインターフェースを含む非空のVPC
- **料金が発生しないVPC**: Encryption Controlsが無効、または空のVPC

### 利用可能な地域と詳細情報

VPC Encryption Controlsの詳細情報と地域別の料金については、以下で確認できます：
- VPC Encryption Controls ドキュメント
- VPC料金ページ

---

## 対象ユーザー

### 主な活用シーン

1. **規制対応企業**
   - HIPAA、PCI DSS、FedRAMPなどの規制フレームワークに対応する必要がある組織
   - コンプライアンス監査への対応を自動化したい企業

2. **セキュリティ重視企業**
   - 金融機関、医療機関、政府機関などセキュリティが重要な組織
   - ネットワークトラフィックの暗号化を100%保証したい企業

3. **大規模環境運用企業**
   - 複数のVPCを運用する大規模組織
   - Transit Gateway経由で統一的なポリシーを適用したい企業

---

## 導入時の確認事項

1. **コスト試算**: 対象VPC数から月額費用を計算
2. **リソース確認**: Nitro対応インスタンスの有無を確認
3. **運用準備**: Monitor modeでの検証計画を立案
4. **段階的導入**: Enforce modeへの移行計画を策定

---

## 参考資料

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/vpc-encryption-controls-pricing/
- **VPC Encryption Controls ドキュメント**: https://docs.aws.amazon.com/vpc/
- **VPC料金ページ**: https://aws.amazon.com/vpc/pricing/
- **AWS Compliance**: https://aws.amazon.com/compliance/
