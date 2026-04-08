---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon WorkSpaces Advisor
AI駆動のトラブルシューティング機能が利用可能

**発表日: 2026年4月8日**

---

## 概要

### Amazon WorkSpaces Advisor の3つの主要機能

- **AI駆動の自動分析**: 生成AIを活用したWorkSpace構成の問題自動検出
- **実行可能な推奨事項**: 具体的で実装可能なトラブルシューティング手順を提供
- **全リージョン対応**: AWS商用リージョン全域で利用可能

### 主な利点

- 管理者の調査・修正時間を大幅削減
- 仮想デスクトップインフラストラクチャの積極的な管理
- エンドユーザー体験の向上とダウンタイム最小化

---

## 前提・背景

### 市場の動向

- デジタル変革に伴う仮想デスクトップ利用の拡大
- VDI環境の複雑化と管理負担の増加
- エンドユーザー体験向上への要求の高まり

### Amazon WorkSpaces の現状

- WorkSpaces Personal は多くの組織で採用
- 従来のトラブルシューティングは手作業が中心
- 問題の特定から解決まで時間がかかる課題

### AWS の AI戦略

- Agentic AI の企業応用への注力
- Amazon Bedrock を中心とした生成AI基盤の整備
- 継続的なインサイト分析による自動化

---

## 主な機能と改善

### 1. AI駆動の自動分析

- テレメトリ、ログ、構成データを継続的に分析
- WorkSpace の問題を自動で特定
- 根本原因を関連付けた優先度付きレポート生成

### 2. 実行可能な推奨事項

- AWS ベストプラクティスに基づく推奨事項
- 各問題ごとに具体的な修正手順を提供
- コンソールから直接実施可能

### 3. 管理ワークフロー効率化

- コンソールからの簡単な操作で調査を開始
- 数分以内の高速な問題解決
- 管理者の作業負担を大幅軽減

---

## 対応する問題領域

### 現在対応しているカテゴリ

- **接続性の問題**: ネットワーク接続・通信の問題
- **パフォーマンス問題**: WorkSpace の遅延や応答速度
- **プロビジョニング問題**: インスタンスの起動・作成に関する問題
- **その他の管理課題**: 構成の最適化と運用効率化

### 対応対象

- Amazon WorkSpaces Personal インスタンス
- AWS 商用リージョン全域での利用可能

---

## 利用方法と操作フロー

### ステップバイステップ

1. **コンソールアクセス**
   - Amazon WorkSpaces コンソールにアクセス

2. **調査開始**
   - 対象の WorkSpace を選択して調査を開始

3. **AI分析**
   - WorkSpaces Advisor が過去数日のテレメトリを分析

4. **結果確認**
   - 優先度付きの検出結果と推奨事項を表示

5. **修正実行**
   - コンソールから直接修正アクションを実施

---

## 効果・メリット

### 運用効率化

- **調査時間の短縮**: 数時間から数分へ
- **管理者負担の削減**: 手作業の自動化による工数削減
- **スキル依存の軽減**: AI が複雑な診断を実施

### ユーザー体験の向上

- **ダウンタイム最小化**: 高速な問題解決
- **エンドユーザー満足度向上**: 快適な利用環境を維持
- **予防的な維持**: 問題が生じる前の対応可能

### コスト効率

- **管理コストの削減**: 作業時間削減による経費削減
- **生産性向上**: ユーザー復帰時間の短縮
- **スケーラビリティ**: 環境拡大時の管理難度軽減

---

## ユースケース

### 中規模～大規模企業での活用

**シナリオ1: パフォーマンス問題への迅速対応**
- WorkSpace の遅延報告を受け取る
- WorkSpaces Advisor で即座に原因を特定
- 推奨事項に従い問題を解決
- 数分で業務復帰可能

**シナリオ2: 構成の最適化**
- 定期的に WorkSpaces Advisor で分析を実施
- 構成の問題や最適化機会を特定
- 計画的に改善を実施

### マルチリージョン環境での利用

- AWS 商用リージョン全域で統一された管理が可能
- グローバル組織での一貫した運用
- 地域ごとの問題把握と対応

---

## まとめ

### Amazon WorkSpaces Advisor の位置づけ

- AWS の Agentic AI 技術を VDI 管理に適用
- 企業向けトラブルシューティングを高度に自動化
- 管理者の専門知識を最大限に活かす基盤を提供

### 次のステップ

1. Amazon WorkSpaces コンソールで機能を確認
2. テスト環境で使用方法を習得
3. 本番環境に段階的に展開
4. 運用プロセスへの組み込み

### 推奨される活動

- ブログとユーザーガイドで詳細を確認
- 小規模なテストケースから開始
- 組織内の運用プロセスに統合

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/04/workspaces-advisor-ai-troubleshooting/
- **ブログ記事**: https://aws.amazon.com/blogs/desktop-and-application-streaming/troubleshoot-amazon-workspaces-personal-issues-faster-with-workspaces-advisor/
- **ユーザーガイド**: https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-advisor.html
- **Amazon WorkSpaces ドキュメント**: https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-troubleshooting.html

### 関連サービス

- Amazon WorkSpaces
- Amazon Bedrock
- AWS Agentic AI

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**