# AWS Security Agent adds support for penetration tests on shared VPCs across AWS accounts

**カテゴリ:** What's New
**公開日:** 2026-02-25T19:07:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/aws-security-agent-adds-penetration-tests-shared/](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-security-agent-adds-penetration-tests-shared/)

---

## 要約

AWS Security Agentが、AWS Organization内の複数アカウント間で共有されたVPCリソースに対するペネトレーションテストをサポートするようになりました。これにより、セキュリティチームは中央アカウントからAWS RAMを利用して、複雑なマルチアカウント環境全体にわたる包括的なセキュリティ評価を効率的に実施できるようになります。

## 詳細

### 主な変更点

- **マルチアカウント対応**: AWS Organization内の複数のAWSアカウント間で共有されたVPC（Virtual Private Cloud）リソースに対するペネトレーションテストの実行をサポート

- **AWS RAM統合**: AWS Resource Access Manager（RAM）を活用することで、サブアカウントから中央のAWSアカウントへVPCリソースを安全に共有し、ペネトレーションテストを実施可能に

- **一元管理**: セキュリティ専門家は中央アカウントにAgent Spaceを作成して、接続されたサブアカウントのVPCリソースにアクセスしてテスト実行が可能

### 背景・課題

- 複数のAWSアカウントにまたがる分散アーキテクチャのセキュリティテストに課題がありました
- 従来は単一アカウント内のリソース検証が主流でしたが、エンタープライズ環境ではマルチアカウント構成が一般的です
- 統一的なセキュリティ評価フレームワークが必要でした

### 効果・メリット

- **セキュリティ態勢の向上**: 共有VPCリソースの包括的なテストが可能になることで、組織全体のセキュリティ態勢が向上
- **運用効率の改善**: 複雑なマルチアカウント構成を持つ組織のセキュリティ評価プロセスが効率化
- **スケーラビリティ**: 新規アカウント追加時の対応を簡素化

### 対象ユーザー

- 複数のAWSアカウント環境を持つセキュリティチーム
- マルチアカウント設定を行う大規模組織
- AWS Security Agentを活用してセキュリティ評価を実施する企業

### 使用例

1. **金融機関**: 複数の子会社・支社のVPCを中央のセキュリティチームが一元管理
2. **大規模SaaS企業**: テナント毎に分離したアカウント環境全体のセキュリティ評価
3. **エンタープライズ企業**: 事業部門毎のアカウント構成で、セキュリティ監査の一貫性を確保

### 関連サービス

- **AWS Security Agent**: 設計レビュー、コードレビュー、ペネトレーションテストを提供
- **AWS Resource Access Manager (RAM)**: リソース共有メカニズム
- **AWS Organization**: マルチアカウント管理

---

## 技術仕様

### 必要条件

- AWS Organization による複数アカウント管理
- AWS Resource Access Manager (RAM) による VPC リソース共有
- 中央アカウントに AWS Security Agent の Agent Space を構成

### 対応リージョン

AWS Security Agent の利用可能なリージョンで対応予定

---

## 参考リソース

- [AWS Security Agent - User Guide](https://docs.aws.amazon.com/securityagent/latest/userguide/)
- [Connect agent to private VPC resources - AWS Documentation](https://docs.aws.amazon.com/securityagent/latest/userguide/connect-agent-vpc.html)
- [AWS Resource Access Manager](https://docs.aws.amazon.com/ram/latest/userguide/)
- [AWS Organization](https://docs.aws.amazon.com/organizations/latest/userguide/)
- [AWS penetration testing: Definition, Policy Tools, and process](https://securityboulevard.com/2026/02/aws-penetration-testing-definition-policy-tools-and-process/)