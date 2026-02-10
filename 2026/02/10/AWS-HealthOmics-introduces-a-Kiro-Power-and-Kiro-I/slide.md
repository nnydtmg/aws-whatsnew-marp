---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS HealthOmics で Kiro Power と Kiro IDE 拡張を導入
バイオインフォマティクスワークフロー開発の革新

**発表日: 2026年2月9日**

---

## 概要

### AWS HealthOmics が実現する3つの進化

- **AI エージェント支援開発**: Kiro Power による HealthOmics ワークフロー作成の自動化・最適化
- **統合開発環境**: Kiro IDE 拡張で Nextflow・WDL の直接編集が可能
- **エンタープライズ対応**: HIPAA 準拠のスケーラブルなバイオインフォマティクスサービス

---

## 前提・背景

### バイオインフォマティクス開発の課題

- **複雑性**: NextflowやWDLでの大規模ワークフロー開発は技術的バリアが高い
- **効率性**: ワークフローの最適化やデバッグに時間がかかる
- **スケーラビリティ**: インフラ管理なしで大規模データ処理が必要
- **コンプライアンス**: 医療・研究データの HIPAA 対応管理

### Kiro のエコシステム

- AI エージェントの新しい標準: Model Context Protocol (MCP)
- エージェント専門知識を効率的に提供
- AWS サービスとの深い統合

---

## 主な機能と改善

### Kiro IDE 拡張機能

- **言語対応**: NextflowおよびWDLを含むドメイン固有言語（DSL）での直接開発
- **開発体験**:
  - 構文ハイライトとコード補完
  - トラブルシューティングガイダンス
  - HealthOmicsエンジン互換性チェック
  
- **最適化機能**:
  - パフォーマンス最適化推奨
  - 自動実行分析と障害診断
  - ワークフローのインポート/エクスポート

---

## 主な機能と改善（続き）

### Kiro Power による HealthOmics 専門知識

- **MCP サーバー**: HealthOmics API へのシームレスアクセス
- **ステアリングファイル**: 
  - ワークフロー開発のガイドライン
  - マイグレーションガイド（Nextflow / WDL 向け）
  - トラブルシューティング手順
  
- **エージェント統合**:
  - ワークフロー作成・修正の自動化
  - 最適化提案の自動生成

---

## 効果・メリット

### 開発効率の向上

- **開発時間の短縮**: AI エージェント支援による高速ワークフロー開発
- **エラー削減**: 構文チェック・互換性チェックによる品質向上
- **学習コスト削減**: 専門知識をエージェントが提供

### 運用効率の向上

- **コスト最適化**: 自動パフォーマンス分析によるリソース最適化
- **スケーラビリティ**: インフラ管理不要で大規模実行
- **コンプライアンス**: HIPAA 対応で医療・研究機関の要件クリア

---

## ユースケース

### 対象ユーザー

- **バイオインフォマティクス研究者**: Nextflow/WDL ワークフロー開発者
- **科学研究組織**: ゲノミクス・オミクス データ処理を行う機関
- **医療・ライフサイエンス企業**: HIPAA 対応が必須の組織

### 適用シーン

- 新規ワークフローの高速プロトタイピング
- 既存ワークフロー（Nextflow）の AWS への移行・最適化
- 大規模ゲノム解析の自動実行・監視

---

## 利用開始方法

### セットアップ手順

1. **Kiro Power のダウンロード**
   - https://kiro.dev/powers/ から HealthOmics Kiro Power を入手

2. **IDE 拡張機能のインストール**
   - Open VSX Registry から HealthOmics Kiro IDE 拡張を検索・インストール

3. **AWS 認証情報の設定**
   - HealthOmics MCP サーバーが AWS API と連携

4. **ワークフロー開発開始**
   - Kiro IDE で NextflowまたはWDLワークフローを作成

---

## まとめ

### AWS HealthOmics + Kiro の価値提案

- **AI ネイティブな開発体験**: Kiro エージェントが HealthOmics 専門知識を提供
- **エンタープライズ対応**: HIPAA 準拠で大規模科学研究に対応
- **スケーラブルな運用**: インフラ管理不要で数百〜数千のワークフロー実行

### 次のステップ

1. 自社のバイオインフォマティクスワークフローに合わせた評価
2. パイロットプロジェクト（既存ワークフロー最適化など）
3. 本番環境への段階的展開
4. AWS HealthOmics チームへの問い合わせ

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/01/aws-healthomics-introduces-kiro-plugin-for-bioinformatics-workflow-development/
- **Kiro Powers Repository**: https://github.com/kirodotdev/powers
- **AWS HealthOmics ドキュメント**: https://docs.aws.amazon.com/omics/
- **Kiro 公式サイト**: https://kiro.dev/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**