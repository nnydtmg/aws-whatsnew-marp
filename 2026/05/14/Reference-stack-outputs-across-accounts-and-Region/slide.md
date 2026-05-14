---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS CloudFormation と CDK でアカウント・リージョン間のスタック出力を参照

Reference stack outputs across accounts and Regions with AWS CloudFormation and CDK

**What's New** | 2026-05-14T17:30:00

---

## 概要

- AWS CloudFormationの新しい「Fn::GetStackOutput」関数により、アカウントとリージョン間でスタック出力を直接参照でき、マルチアカウント環境の管理が大幅に簡素化されました。
- この更新は、複数のAWSアカウントやリージョンにまたがるインフラストラクチャを管理するチーム、CDKアプリケーションを使用する開発者、およびクロススタック依存関係の管理を効率化したい組織に特に有益です。

---

## 前提・背景

### クロススタック参照の課題

- 従来、CloudFormationではスタック出力をエクスポートして参照する必要がありました
- エクスポート名の管理やスタック間の強い依存関係が生じていました
- アカウントやリージョン間の参照は困難で、カスタムリソースやSSMパラメータが必要でした
- マルチアカウント環境ではIAMロールの管理がコンプレックスでした

### 市場の動向

- クラウドネイティブアーキテクチャの複雑化
- マルチアカウント戦略の採用増加
- インフラストラクチャコード化の重要性向上
- CDK利用の急速な拡大

---

## 主な機能

### Fn::GetStackOutput 関数

- **直接参照**: CloudFormationテンプレートおよびCDKアプリケーション内で直接スタック出力を参照
- **クロスアカウント対応**: 異なるAWSアカウント間のスタック出力を参照可能
- **クロスリージョン対応**: 異なるリージョン間のスタック出力を参照可能
- **IAM統合**: IAMロールARNを指定して安全にアクセス権限を制御

### 対応プラットフォーム

- CloudFormation テンプレート (YAML/JSON)
- AWS CDK アプリケーション
- CloudFormationがサポートされるすべてのリージョン

---

## 効果・メリット

### 運用効率の向上

- **手動調整の廃止**: テンプレート間での値のコピーやパラメータ更新の手動調整が不要
- **デッドロック回避**: CDKアプリケーションにおけるクロススタック依存関係の再構成時のデプロイメントデッドロックが排除
- **管理負荷削減**: カスタムリソースやSSMパラメータの使用が不要

### 設計の柔軟性

- **スタック間の弱い参照**: スタック間の弱い参照を作成することでリファクタリングが簡素化
- **マルチアカウント対応**: 複数AWSアカウント間でのリソース参照が容易
- **マルチリージョン対応**: リージョン間でのリソース参照が容易

### セキュリティ

- **IAM統合**: IAMロールを指定することでアクセス制御が明示的に定義可能
- **自動権限処理**: CloudFormationが自動的にロールを引き受け、出力値を取得して解決

---

## ユースケース

### エンタープライズ環境

- **マルチアカウント構成**: 複数アカウント間のリソース連携が効率化
- **リージョン展開**: グローバル展開時の複数リージョン管理が簡素化
- **ネットワーク構成**: VPC/セキュリティグループ等の設定参照が容易

### CDK開発チーム

- **スタック管理**: CDKアプリケーション内での依存関係管理が改善
- **テスト環境**: テスト/本番環境でのスタック出力参照が統一化
- **継続的デプロイメント**: CI/CDパイプラインでの自動デプロイが堅牢に

---

## まとめ

### AWS CloudFormation / CDK のスタック出力参照機能

- **新機能**: Fn::GetStackOutput関数によるクロスアカウント・クロスリージョン対応
- **利点**: マルチアカウント環境の管理が大幅に簡素化
- **適用範囲**: CloudFormationがサポートされるすべてのリージョンで利用可能

### 次のステップ

1. 既存のCloudFormationテンプレートをレビュー
2. エクスポート参照の箇所をFn::GetStackOutputに置き換え
3. テスト環境で動作確認
4. 本番環境への段階的移行

---

## 参考URL

- **元記事**: [Reference stack outputs across accounts and Regions with AWS CloudFormation and CDK](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-cloudformation-cdk-stack/)
- **CloudFormation ドキュメント**: [CloudFormation best practices](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html)
- **Outputs セクション**: [CloudFormation template Outputs syntax](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**