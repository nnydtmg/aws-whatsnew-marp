---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Cost and Usage Report 2.0 のテーブル設定更新機能が利用可能に

AWS Management ConsoleおよびSDK/CLIからテーブル設定を直接更新可能

**発表日: 2026年6月10日**

---

## 概要

### 3つの主要ポイント

- **直接更新機能**: AWS Management ConsoleおよびSDK/CLIを通じてテーブル設定を直接更新可能
- **効率化**: 既存のエクスポートを削除して再作成する手間が不要に
- **柔軟な採用**: 新しい機能を段階的に採用できるようになりました

---

## 前提・背景

### これまでの課題

- 新しい機能（追加列やより細かい行レベルの粒度など）を採用する場合、既存のエクスポートを削除して新しい設定で再作成する必要があった
- テーブル設定の変更に手動作業が多くかかっていた
- ETLジョブが安定したスキーマに依存していため、スキーマ変更に慎重にならざるを得なかった

### AWS Cost and Usage Report 2.0 の進化

- CUR 2.0は構造化されたデータ形式で、より詳細な分析が可能
- Athena や Redshift との統合オプションも拡充
- コスト管理のための重要なサービスとして機能強化が続いている

---

## 変更内容・新機能

### テーブル設定の直接更新

- **AWS Management Console**: UI から直接設定変更可能
- **AWS SDK/CLI**: プログラマティックに設定を変更可能
- **設定の種類**: TIME_GRANULARITY（時間粒度）、INCLUDE_RESOURCES（リソースID）など

### 反映のタイミング

- 設定変更後、次のスケジュール配信から新しい設定でエクスポートを受け取ることが可能
- 既存のエクスポート削除・再作成による手間が不要

### 対応リージョン

- AWS GovCloud（US）リージョンと中国リージョンを除く、すべての商用AWSリージョンで利用可能

---

## 効果・メリット

### 運用効率の向上

- テーブル設定の更新を簡素化
- 削除・再作成による手間を削減
- 設定変更に必要な時間を短縮

### 柔軟性の向上

- 新しい機能を段階的に採用できるように
- ETLジョブのスキーマ変更を容易に
- ビジネス要件に応じた細かい調整が可能

### コスト管理の強化

- より詳細なコスト分析が可能に
- リソースレベルの粒度を自由に選択可能
- 既存ワークフローへの影響を最小化

---

## ユースケース

### 1. コスト分析の段階的な詳細化

- 最初は月単位のコスト集計で開始
- 必要に応じて日単位、さらに時間単位への変更が可能
- ETLジョブを再作成せずに実施

### 2. リソースレベルの分析への拡張

- 最初はサービス単位の集計で開始
- 後からリソースID を含める設定に変更
- スキーマ変更に対応したETLジョブの段階的な移行

### 3. 既存システムの無停止更新

- 古いスキーマに依存するシステムと新しいスキーマの共存
- 移行期間を設けて段階的に切り替え可能

---

## まとめ

### 主なポイント

- AWS Cost and Usage Report 2.0 のテーブル設定を直接更新できるようになった
- AWS Management Console や SDK/CLI から簡単に設定変更可能
- 既存ワークフローへの影響を最小化しながら新機能を採用可能

### 次のステップ

1. 現在の CUR 2.0 設定を確認
2. 新しい機能の必要性を評価
3. AWS Management Console で設定を試してみる
4. 本番環境への展開を計画

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cost-usage-report/
- **AWS Cost and Usage Report 2.0 now supports Athena and Redshift integration**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cur2.0-athena-redshift
- **Cost and Usage Report (CUR) 2.0 - AWS Data Exports**: https://docs.aws.amazon.com/cur/latest/userguide/table-dictionary-cur2.html
- **AWS Billing and Cost Management ドキュメント**: https://docs.aws.amazon.com/awsaccountbilling/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**