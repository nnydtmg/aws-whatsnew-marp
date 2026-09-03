---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Aurora MySQL がマルチソースレプリケーションと遅延レプリケーションに対応

Amazon Aurora MySQL now supports multi-source replication and delayed replication

**What's New** | 2026-09-03

---

## 概要

- Amazon Aurora MySQLは、マルチソースレプリケーションと遅延レプリケーションを新たにサポートいたします。
- 本機能は、データの統合や人的ミスからの迅速な復旧を必要とするお客様に適しております。

---

## 前提・背景

### 市場の動向

- 複数のMySQLデータベースを統合する需要の増加
- データ破損やヒューマンエラーからの保護ニーズ
- レプリケーション機能の多様化

### Aurora MySQLの進化

- Aurora MySQL 8.4 LTS（2026年5月）で新しいマイルストーン達成
- 継続的なエンジン更新と改善（2026年8月版3.13.0リリース）
- MySQL 8.0.45との互換性確保

---

## 変更内容・新機能

### 1. マルチソースレプリケーション

- 単一のAurora MySQLクラスターが複数のソースデータベースから同時にレプリケート可能
- 複数のMySQLデータベースからのデータ統合を実現
- シャード統合やデータ集約ワークフロー（レポーティング、バックアップ）に対応

### 2. 遅延レプリケーション

- binlogレプリカをソースより意図的に一定時間遅延させて設定可能
- ヒューマンエラーや論理的なデータ破損に対する保護
- 有害な変更発生時に、レプリケーション停止して迅速に復旧
- フルデータベース復元不要

---

## 効果・メリット

- **データ統合の容易化**: 複数のMySQLデータベースを1つのAurora MySQLクラスターに統合
- **エラー対策**: ヒューマンエラーや論理的なデータ破損から保護
- **迅速な復旧**: フルデータベース復元不要で素早い復旧が可能
- **アップグレード対応**: アップグレード中のフォールバック機能
- **データ検査**: 過去のデータ状態を確認可能

---

## ユースケース

### データ統合シナリオ

- **シャード統合**: 複数のシャード化されたMySQLデータベースを集約
- **地域別・部門別データ集約**: 各地域・部門のデータベースを中央に統合
- **レポーティング**: 複数ソースからのデータを一元化してレポート生成

### ディザスタリカバリ

- **エラー復旧**: 誤ったDML操作からの迅速な復旧
- **アップグレード検証**: 本番適用前の変更検証
- **監査ログ**: 過去のデータ状態を確認して問題原因を特定

---

## 技術仕様

### 対応バージョン

- **Aurora MySQL 8.4.8 以上**
- **すべてのAWSリージョン**（Aurora MySQLが利用可能な地域）

### 関連ドキュメント

- MySQL マルチソースレプリケーション: https://dev.mysql.com/doc/refman/8.4/en/replication-multi-source.html
- MySQL 遅延レプリケーション: https://dev.mysql.com/doc/refman/8.4/en/replication-delayed.html
- Aurora MySQLディザスタリカバリガイダンス: https://docs.aws.amazon.com/solutions/disaster-recovery-using-amazon-aurora/

---

## まとめ

### 主な特徴

- Amazon Aurora MySQLがマルチソースレプリケーションと遅延レプリケーションに対応
- 複数のMySQLデータベース統合とデータ保護が実現
- Aurora MySQL 8.4.8以上で全リージョン対応

### 次のステップ

1. 既存のレプリケーション構成の評価
2. マルチソースレプリケーションの導入検討
3. 遅延レプリケーションによるディザスタリカバリ戦略の策定
4. テスト環境での動作確認

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-aurora-mysql-multisourcerep-delayedrep/
- **Amazon Aurora ドキュメント**: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html
- **Aurora MySQL 8.4 リリースノート**: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraMySQLReleaseNotes/AuroraMySQL.Updates.84Updates.html
- **Aurora MySQL 3.13.0 更新**: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraMySQLReleaseNotes/AuroraMySQL.Updates.3130.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**