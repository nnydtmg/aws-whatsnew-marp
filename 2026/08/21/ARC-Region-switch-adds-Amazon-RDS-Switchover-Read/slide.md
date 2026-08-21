---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# ARC Region switch が Amazon RDS スイッチオーバー実行ブロック対応

Oracle Data Guard を実行するマルチリージョン RDS データベースの復旧をオーケストレーション

**発表日: 2026年8月20日**

---

## 概要

### 何が変わったか

- **Amazon RDS Switchover Read Replica 実行ブロック**がARC Region switchに追加
- Oracle Data Guardを実行するマルチリージョンのRDSデータベース復旧が**自動化**
- 計画的・計画外のフェイルオーバーシナリオで、ゼロデータロスまたは迅速な復旧を実現

### 対応範囲

- すべての商用リージョン
- AWS GovCloud（US）リージョン

---

## 前提・背景

### 従来の課題

- マルチリージョン構成でのデータベースフェイルオーバーが複雑
- 手動によるロール切り替え作業に時間がかかる
- フェイルオーバー時のデータロスのリスク
- 異なるAWSアカウント間での復旧が困難

### Amazon ARC について

- **Application Recovery Controller（ARC）** は、マルチリージョン復旧を自動化するAWSサービス
- **Region switch** は、アクティブ/パッシブまたはアクティブ/アクティブ構成でのフェイルオーバーを自動化
- 継続的な復旧検証により、実際のフェイルオーバー時に信頼性を確保

---

## 主な機能と改善

### 1. 復旧オーケストレーションの自動化

- Oracle Data Guard を実行する Amazon RDS データベースの復旧を自動化
- プライマリデータベースとリードレプリカのロール切り替えを定義された手順に従って実行
- 複数ステップの復旧プロセスを**単一の実行ブロック**で管理

### 2. フェイルオーバーシナリオへの対応

#### 計画的なフェイルオーバー

- ゼロデータロス（RPO: 0）でのロール遷移が可能
- メンテナンスや計画的な切り替え時に活用

#### 計画外のフェイルオーバー

- リードレプリカをプライマリデータベースに**迅速に昇格**
- 障害発生時の復旧時間（RTO）を最小化

---

## 利活用のメリット

<div class="columns">
<div>

### 運用効率の向上

- 手動作業を削減
- 復旧手順を自動化
- 人為的エラーを回避

</div>
<div>

### ビジネス継続性

- ゼロデータロス保証
- 迅速な復旧実現
- 信頼できるフェイルオーバー

</div>
<div>

### 管理の一元化

- マルチリージョン復旧を統一管理
- クロスアカウント対応で組織全体をカバー
- 復旧ポリシーの統一

</div>
</div>

---

## ユースケース

### 対応業界・用途

1. **金融・証券業界**
   - 取引システムの高可用性要件
   - 規制要件への対応（データロス防止）

2. **医療・ヘルスケア業界**
   - ミッションクリティカルなシステム
   - 患者データの高い保護要件

3. **Eコマース・リテール**
   - 顧客注文データの信頼性
   - トランザクション整合性の確保

4. **エンタープライズアプリケーション**
   - 多拠点展開システム
   - グローバル運用環境

---

## まとめ

### このアップデートの意義

- **ARC Region switch** の機能拡張で、データベース復旧の自動化がさらに進化
- Oracle Data Guard による**マルチリージョン RDS** 構成での運用が大幅に効率化
- ゼロデータロスと迅速な復旧の両立により、ビジネス継続性を強化

### 次のステップ

1. 既存のマルチリージョンRDS構成を確認
2. Oracle Data Guard 設定の見直し
3. ARC Region switch での復旧計画の設計
4. 本番環境への段階的導入

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/region-switch-rds-switchover-execution-block/
- **Amazon Application Recovery Controller**: https://aws.amazon.com/application-recovery-controller/
- **ARC ドキュメント**: https://docs.aws.amazon.com/r53recovery/latest/dg/region-switch.html
- **Amazon RDS**: https://aws.amazon.com/rds/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**