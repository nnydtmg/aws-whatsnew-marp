# AWS Security Agentが脅威モデリング機能をサポート

**原文**: AWS Security Agent announces support for Threat Modeling

**カテゴリ**: What's New  
**公開日**: 2026-06-17  
**元記事**: [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-security-agent-threat-modeling/)

---

## 概要

AWS Security Agentに脅威モデリング機能が追加され、AI駆動型のエージェントがSTRIDEフレームワークを使用して自動的に脅威モデルを生成するようになりました。この機能は開発者とセキュリティチームの両者にとって有用であり、設計段階からデプロイ前の評価まで、脅威の特定と軽減に役立つものです。

---

## このアップデートで何が変わったか

### 新機能の追加

- **脅威モデリング機能**: AWS Security Agentに脅威モデリング機能が追加されました
- **AI駆動型の自動生成**: AI駆動型のエージェント機能で、アプリケーションの脅威モデルを自動生成
- **STRIDEフレームワーク対応**: STRIDE フレームワークを使用して脅威を特定し、推奨される軽減策を提供

### 提供状況

- **パブリックプレビュー**: 現在パブリックプレビューで利用可能
- **無料利用**: パブリックプレビュー期間中は追加費用なしで利用できます
- **全リージョン対応**: AWS Security Agentがサポートするすべてのリージョンで利用可能

---

## 主な機能と特徴

### 1. 自動脅威分析

- **ソースコード分析**: アプリケーションの設計ドキュメントやソースコードを分析
- **アーキテクチャ理解**: アプリケーションアーキテクチャの全体的なコンテキストを理解
- **脅威の自動分類**: STRIDEフレームワークに基づいて脅威を分類

### 2. 開発ツール統合

- **IDE統合**: Kiro、Claude Code などのIDEにエージェントを統合
- **早期対応**: 仕様から脅威モデルを作成し、設計段階の早期に脅威に対応
- **プルリクエスト検証**: 継続的なセキュリティレビューが可能

### 3. 用途別対応

#### 開発者向け

- IDEにエージェントを統合して、仕様から脅威モデルを作成
- 設計段階の早期に脅威に対応することが可能

#### セキュリティチーム向け

- デプロイ前の評価として設計ドキュメントとソースコードに対して使用可能
- 包括的な脅威評価を自動化

---

## 利点とメリット

### 業務効率化

- 手動での脅威モデリングに必要な専門知識と多大な労力を削減
- 脅威分析を週単位から数時間に短縮可能
- スケーラビリティの向上: 複数プロジェクトへの適用が容易

### セキュリティ強化

- 設計段階から脅威を特定して対応
- デプロイ前の包括的な検証により、本番環境でのセキュリティ問題を削減
- セキュアバイデザインの実現

### チーム協業

- 開発チームとセキュリティチームの共通言語での脅威議論
- 全ライフサイクルを通じた一貫したセキュリティアプローチ

---

## ユースケース

### 1. マイクロサービスアーキテクチャ

複雑なマイクロサービス環境において、各サービス間の脅威を自動分析し、API セキュリティ設定を最適化できます。

### 2. ジェネレーティブAI アプリケーション

LLM統合アプリケーションの以下のリスクを設計段階で把握:
- プロンプトインジェクション攻撃
- データ漏洩リスク
- モデル出力の改ざん

### 3. 規制対応

金融機関、医療機関などの脅威モデリング要件を自動化して満たし、コンプライアンス対応を加速できます。

---

## 関連技術とフレームワーク

### STRIDE フレームワーク

この機能が使用するSTRIDEは、以下の6つの脅威カテゴリを分類します:

1. **Spoofing**: なりすまし
2. **Tampering**: 改ざん
3. **Repudiation**: 否認
4. **Information Disclosure**: 情報漏洩
5. **Denial of Service**: サービス拒否
6. **Elevation of Privilege**: 権限昇格

### 関連する取り組み

- **OWASP Top 10 for LLM**: ジェネレーティブAI アプリケーション向けのセキュリティガイドライン
- **AWS Security Agent**: 脅威モデリング以外にも、ペネトレーションテスト、セキュリティレビューなどの機能を提供

---

## 参考リンク

### 公式リソース

- [AWS What's New - AWS Security Agent announces support for Threat Modeling](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-security-agent-threat-modeling/)
- [AWS Security Agent](https://aws.amazon.com/security-agent)
- [AWS Security Agent ドキュメント](https://docs.aws.amazon.com/security-agent/)

### 関連情報

- [Using Threat Modelling in AWS - STRIDE - Tech Reformers](https://techreformers.com/understanding-cloud-security-with-the-stride-model)
- [Mastering Threat Modeling for Agentic RAG Architectures on AWS: A STRIDE-Based Guide](https://medium.com/@arshriz/mastering-threat-modeling-for-agentic-rag-architectures-on-aws-a-stride-based-guide-e7876c8db26d)
- [How to Start Threat Modelling in AWS - AWS Security Digest](https://awssecuritydigest.com/articles/threat-modelling-in-aws)
- [AWS re:Inforce 2025 - Hardening generative AI applications using threat model agent](https://www.youtube.com/watch?v=nqllUYDzihQ)

---

## 次のステップ

1. **評価開始**: パブリックプレビューで自社のアプリケーションで試験
2. **チーム教育**: 脅威モデリングの基礎知識を組織全体で共有
3. **段階的展開**: パイロットプロジェクトから本番運用への移行
4. **フィードバック**: プレビュー期間中にAWSに機能改善の提案を実施