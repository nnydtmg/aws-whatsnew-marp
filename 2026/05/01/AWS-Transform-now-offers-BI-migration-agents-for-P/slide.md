---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Transform
BI移行エージェント
Power BI・Tableauから Amazon QuickSight へ

**発表日: 2026年5月1日**

---

## 概要

### 何が変わったか

- **BI移行の大幅な高速化**: 移行期間を数ヶ月から数日に短縮
- **自動化されたエージェント**: Wavicle Data Solutionsが構築した4つのエージェント
- **チャットベースのインターフェース**: 直感的な操作で移行準備状況を評価
- **セキュア処理**: すべての処理がお客様のAWSアカウント内で実行
- **エンタープライズ対応**: Power BI、Tableau双方に対応

---

## 前提・背景

### BI環境の課題

- **従来の課題**: ダッシュボード移行には数ヶ月の期間が必要
- **手動作業の多さ**: データセット、計算フィールド、ビジュアライゼーションの手動構築
- **クラウド移行への需要**: エンタープライズのクラウド化加速

### 市場の動向

- AWS Transform、EZConvertBIなど専門ソリューションが登場
- Tableau から QuickSight への移行が増加

---

## 変更内容・新機能

### 1. 4つのBI移行エージェント

#### Power BI 向け
- **Analyzer エージェント**: ダッシュボード評価・準備状況を診断
- **Converter エージェント**: Power BI ダッシュボードを自動変換

#### Tableau 向け
- **Analyzer エージェント**: Tableau 環境を評価
- **Converter エージェント**: Tableau ダッシュボードを自動変換

### 2. チャットベースのインターフェース

- 直感的な対話型インターフェース
- データセット、計算フィールド、ビジュアライゼーション、フィルターを自動再構築

---

## 変更内容・新機能（続き）

### 3. セキュリティ・プライバシー

- すべての処理がお客様の AWS アカウント内で実行
- データは環境外に出ない
- AWS Advanced Consulting Partner である Wavicle Data Solutions による安定稼働

### 4. 可用性・展開

- 利用可能リージョン: **US East (N. Virginia)** で現在利用可能
- QuickSight アセット作成: **すべての商用リージョン**に対応
- AWS Marketplace を通じて購入可能

---

## 効果・メリット

### 移行効率の向上

- 移行期間の大幅短縮: 数ヶ月 → 数日
- 手動作業の削減: 70-80% のダッシュボード変換を自動化
- エラーリスクの低減: 自動化による一貫性向上

### ビジネス効果

- クラウド移行の加速: BI システムの迅速なクラウド化
- コスト削減: 移行プロジェクト工数の削減
- AI 活用の早期実現: QuickSight の高度な分析機能をいち早く利用

---

## ユースケース

### シナリオ 1: Power BI から QuickSight への大規模移行

- **課題**: 数百のダッシュボードを Power BI から QuickSight に移行
- **解決策**: Power BI Analyzer & Converter エージェントで自動化

### シナリオ 2: Tableau 環境の AWS への統合

- **課題**: オンプレミス Tableau 環境を AWS に統合
- **解決策**: Tableau Analyzer & Converter エージェント + AWS Transform

---

## まとめ

### 主な特徴

- Power BI、Tableau から Amazon QuickSight への迅速な移行
- エージェンティック AI による自動ダッシュボード変換
- セキュアで予測可能な移行プロセス

### 次のステップ

1. 現在の BI 環境を評価
2. AWS Marketplace から EZConvertBI を購入
3. パイロットプロジェクトで小規模移行を試実施
4. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/quick-bi-migration/
- **AWS Transform - EZConvertBI - Tableau**: https://aws.amazon.com/marketplace/pp/prodview-dkpskx3mnmk6m
- **AWS Transform - EZConvertBI - Power BI**: https://aws.amazon.com/marketplace/pp/prodview-p7sor3iihijpg
- **Amazon QuickSight ドキュメント**: https://docs.aws.amazon.com/quicksight/
