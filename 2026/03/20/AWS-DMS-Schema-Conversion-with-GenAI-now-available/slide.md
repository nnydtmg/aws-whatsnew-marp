---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS DMS Schema Conversion with GenAI
9つの追加地域で利用開始

**発表日: 2026年3月20日**

---

## 概要

### AWS DMS Schema Conversion with GenAI の主な特徴

- **AI駆動の自動変換**: Amazon Bedrockの基盤モデル（Claude 3.5/3.7 Sonnet他）を活用
- **複数DBエンジン対応**: Oracle、SQL Server、MySQL、PostgreSQL、Sybaseからの変換
- **地域拡大**: アジア太平洋、ヨーロッパ、北米の9地域で新規利用可能
- **追加料金なし**: エンタープライズに優しい価格モデル

### 対応ターゲット

- Amazon Aurora PostgreSQL互換版
- Amazon RDS for PostgreSQL

---

## 前提・背景

### データベース現代化の課題

- 従来のOracle、SQL Server、MySQLなどの古いシステムの維持コストが増加
- スキーマとコード変換には専門知識と大量の時間が必要
- 手作業による変換はエラーが多く、プロジェクト遅延の原因に
- グローバル展開時のデータレジデンシー要件への対応が困難

### Amazon Bedrockの進化

- 生成AIモデルの精度向上により、複雑なデータベース変換も自動化可能に
- クロスリージョン推論によるデータレジデンシー対応
- エンタープライズ向けの信頼性向上

---

## 新機能・対応地域

### 新規利用可能なAWS地域（9地域）

#### アジア太平洋地域
- **東京** (ap-northeast-1)
- **大阪** (ap-northeast-3)
- **シドニー** (ap-southeast-2)

#### ヨーロッパ地域
- **アイルランド** (eu-west-1)
- **ロンドン** (eu-west-2)
- **ストックホルム** (eu-north-1)
- **パリ** (eu-west-3)

#### その他
- **カナダ（中部）** (ca-central-1)
- **米国東部（オハイオ）** (us-east-1)

---

## 主な機能

### 1. 自動スキーマ変換

- Oracle、SQL Server、MySQL、PostgreSQL、Sybaseの各DBからの変換に対応
- Amazon Bedrockの基盤モデルが複雑なスキーマを自動解析
- テーブル定義、インデックス、トリガーなどの自動変換
- 関数やストアドプロシージャの変換にも対応

### 2. コード変換サポート

- データベース固有のコードを互換性のあるSQLに自動変換
- パフォーマンス最適化の提案
- 変換結果の検証と修正の支援

### 3. ローカルデータ処理

- ローカルリージョンでのワークロード処理でレイテンシを削減
- データレジデンシー要件への対応
- コンプライアンス要件を満たしながらの現代化

---

## 効果・メリット

### 開発生産性

- **手動作業を大幅削減**: 数週間かかるスキーマ変換が数時間で完了
- **スキル依存の軽減**: AI支援により、DBエキスパートの負担を軽減
- **エラー率の低減**: 自動化により人的ミスを削減

### ビジネス効果

- **マイグレーション加速**: プロジェクトタイムラインの短縮
- **コスト削減**: 手作業コストの低下
- **ダウンタイム最小化**: 効率的な移行計画の実行

### グローバル対応

- **データレジデンシー対応**: 各地域でのローカル処理が可能
- **コンプライアンス**: 規制要件への対応がシンプルに
- **低レイテンシ**: 地理的に近いリージョンでの処理

---

## 利用方法

### アクセス方法

1. **AWS Management Console** から DMS Schema Conversion を選択
2. **AWS CLI** でスクリプト化して自動実行
3. 対象DBの接続情報を入力
4. AI による自動変換を実行
5. 結果を確認・修正

### 支援リソース

- AWS DMS Schema Conversion ドキュメント
- クロスリージョン推論ドキュメント
- AWS サポートでの相談対応

---

## ユースケース

### エンタープライズOracleからの移行

数千のストアドプロシージャを持つレガシーOracleを、Amazon Aurora PostgreSQLに効率的に移行。手作業では数ヶ月かかるが、GenAIなら数日で完了。

### SQL Server のクラウド最適化

オンプレミスの SQL Server を Amazon RDS for PostgreSQL に移行し、クラウドネイティブなアーキテクチャを実現。スケーラビリティとコスト削減を同時に達成。

### グローバル企業の地域コンプライアンス対応

複数の国でレガシーシステムを運用する企業が、地元の規制に対応しながら各リージョンで現代化を実施。

---

## まとめ

### AWS DMS Schema Conversion with GenAI の位置付け

- **AI駆動のデータベース近代化**: エンタープライズの変革を加速
- **グローバル対応**: 9つの新規地域で、世界中の顧客をサポート
- **追加料金なし**: AWS Database Migration Service に完全統合

### 次のステップ

1. 既存データベースの棚卸し（対象DB、スキーマ規模の把握）
2. パイロットプロジェクトの実施（小規模DBから開始）
3. 変換品質の検証と本番環境への展開
4. チーム教育と運用体制の確立

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-dms-schema-conversion-with-genai/
- **DMS Schema Conversion ドキュメント**: https://docs.aws.amazon.com/dms/latest/userguide/schema-conversion-convert.databaseobjects.html
- **クロスリージョン推論**: https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.DataProtection.CrossRegionInference.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**