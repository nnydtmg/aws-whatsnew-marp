---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Continuum による機械速度のセキュリティリスク自動対応が利用開始

Introducing AWS Continuum for security at machine speed

**What's New** | 2026-06-17T07:00:00

---

## 概要

- AWS Continuumは、機械速度でセキュリティリスクの発見から修復までのライフサイクル全体を自動化する新しいサービスです。
- このアップデートは、脆弱性管理プロセスを効率化し、セキュリティチームが戦略的な意思決定に集中できるようにしたい企業に最適です。

---

## 前提・背景

### 現在のセキュリティ管理の課題

- 脆弱性の発見から修復までのプロセスが手動で時間がかかる
- セキュリティチームの負担が大きく、戦略的な意思決定に集中できない
- 2026年のセキュリティベストプラクティスでは、リスク管理が継続的かつ自動化される必要性が高まっている

### 関連する業界動向

- AI-native なセキュリティサービスの需要が拡大
- リスクベースのガバナンス重視へのシフト
- エンタープライズ向けセキュリティ自動化ソリューションの登場

---

## 主な機能と改善

### AWS Continuum の 4 つのステップ

- **発見（Discovery）**
  - 既存のツールからの検出結果を取り込む
  - 機械速度で自動的にセキュリティリスクを発見

- **優先順位付け（Prioritization）**
  - 環境とビジネスのコンテキストグラフを使用
  - 各リスクの重要度を自動判定

- **検証（Validation）**
  - 隔離されたサンドボックス環境で再現可能な証拠を構築
  - 悪用可能なリスクか判断

- **修復（Remediation）**
  - ユーザーが定義したガードレール内で軽減策を提供
  - 迅速で可逆的な対応が可能

---

## 新機能の詳細

### Continuum 脅威モデリング

- 設計ドキュメントまたはソースコードから自動的に脅威モデルを生成
- STRIDE 形式で包括的な脅威を識別
- セキュリティ設計プロセスを加速

### Continuum 侵入テスト

- 一般提供開始
- 脅威の実際の悪用可能性を検証
- 継続的なセキュリティ評価に対応

### Continuum コードスキャン

- プレビュー版で利用可能に
- ソースコード内の脆弱性を自動検出
- 開発パイプラインへの組み込みが可能

---

## 既存サービスとの連携

- **Amazon GuardDuty** との統合
  - 脅威検出結果を Continuum で自動優先順位付け

- **AWS Security Hub** との連携
  - セキュリティ状態を統合管理

- セキュリティチームは、手動トリアージから方向設定と結果承認へシフト可能
- 運用効率が大幅に向上

---

## 効果・メリット

### セキュリティチーム向けメリット

- **自動化による時間削減**
  - 手動トリアージから戦略的な作業へシフト
  - セキュリティエンジニアの生産性向上

- **より正確なリスク評価**
  - ビジネスコンテキストに基づいた優先順位付け
  - 誤検知の削減

### ビジネス向けメリット

- **脆弱性対応時間の短縮**
  - 機械速度での検出と修復
  - セキュリティリスクの削減

- **チーム間調整時間の削減**
  - 自動化されたワークフロー
  - より効率的な意思決定

- **コスト最適化**
  - セキュリティ管理の自動化による運用コスト削減
  - 人的リソースの効果的な配置

---

## ユースケース

### 金融機関
- コンプライアンス要件を満たしながら脆弱性を迅速に修復
- リスク管理プロセスの自動化

### SaaS/クラウドネイティブ企業
- 継続的なセキュリティ検証
- 開発速度を損なわないセキュリティ対応

### エンタープライズ企業
- 複雑な環境でのリスク管理の自動化
- チーム間調整の効率化

---

## まとめ

### AWS Continuum の位置づけ

- セキュリティリスク管理の完全な自動化を実現
- AI-native なアプローチで機械速度での対応が可能
- AWS セキュリティサービスと統合した統合セキュリティプラットフォーム

### 次のステップ

1. AWS Continuum の評価を開始
2. 既存のセキュリティツールとの統合計画
3. パイロットプロジェクトの実施
4. 本番環境への段階的展開

---

## 参考リソース

- **元記事**: [AWS What's New - AWS Continuum](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-continuum/)

### 関連情報

- [AWS Summit New York 2026: New AI agent innovations](https://www.aboutamazon.com/news/aws/aws-summit-nyc-2026-ai-agents)
- [ICYMI: May 2026 @AWS Security](https://aws.amazon.com/blogs/security/icymi-may-2026-aws-security)
- [12 Best Practices for Securing AWS Cloud in 2026 - Qualys Blog](https://blog.qualys.com/product-tech/2026/04/09/1aws-cloud-security-best-practices-guide)
- [Amazon unveils new AI agents](https://www.geekwire.com/2026/amazon-unveils-new-ai-agents-trying-to-thread-the-needle-between-autonomy-and-human-control)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**