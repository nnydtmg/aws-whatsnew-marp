# AWS Cost and Usage Report 2.0 のテーブル設定更新機能が利用可能に

AWS Cost and Usage Report 2.0 now supports table configurations update

**カテゴリ:** What's New
**公開日:** 2026-06-10T13:33:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cost-usage-report/)

このページでは、AWS What's Newで発表された「AWS Cost and Usage Report 2.0 now supports table configurations update」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Cost and Usage Report 2.0は、AWS Management ConsoleおよびSDK/CLIを通じてテーブル設定を直接更新できる新機能をサポートするようになりました。これにより、顧客は既存のエクスポートを削除して再作成することなく、新しい機能を採用できるようになります。

## このアップデートで何が変わったか

- AWS Cost and Usage Report 2.0（CUR 2.0）がテーブル設定の更新機能をサポートするようになりました。
- AWS Management ConsoleおよびSDK/CLIを通じて、既存のエクスポート設定を直接変更できるようになりました。
- 以前は、新しい機能（追加列やより細かい行レベルの粒度など）を採用する場合、既存のエクスポートを削除して新しい設定で再作成する必要がありました。
- この更新により、顧客はテーブル設定を直接更新でき、次のスケジュール配信から更新された設定でエクスポートを受け取ることができます。
- この機能は、AWS GovCloud（US）リージョンと中国リージョンを除く、すべての商用AWSリージョンで利用可能です。
- ETLジョブが安定したスキーマに依存している場合でも、スキーマ変更の準備ができたら更新できるようになりました。

## 詳細

### 主な変更点

1. **テーブル設定の直接更新**
   - AWS Management Console から UI で直接設定変更可能
   - AWS SDK/CLI からプログラマティックに設定変更可能

2. **対応する設定項目**
   - TIME_GRANULARITY: 時間粒度（月単位、日単位、時間単位）
   - INCLUDE_RESOURCES: リソースID を含むかどうか

3. **反映のタイミング**
   - 設定変更後、次のスケジュール配信から新しい設定でエクスポートを受け取り可能
   - 既存エクスポートの削除・再作成が不要に

4. **対応リージョン**
   - AWS GovCloud（US）リージョンと中国リージョンを除く、すべての商用AWSリージョンで利用可能

### メリット

- **運用効率の向上**: 設定変更を簡素化し、削除・再作成の手間を削減
- **柔軟性の向上**: 新しい機能を段階的に採用でき、既存ワークフローへの影響を最小化
- **コスト分析の強化**: より詳細なコスト分析が可能に、リソースレベルの粒度を自由に選択可能

### ユースケース

- コスト分析の段階的な詳細化（月単位 → 日単位 → 時間単位）
- リソースレベル分析への拡張
- 既存システムの無停止更新

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cost-usage-report/)
- [AWS Cost and Usage Report 2.0 now supports Athena and Redshift integration](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cur2.0-athena-redshift)
- [Cost and Usage Report (CUR) 2.0 - AWS Data Exports](https://docs.aws.amazon.com/cur/latest/userguide/table-dictionary-cur2.html)
- [AWS Billing and Cost Management ドキュメント](https://docs.aws.amazon.com/awsaccountbilling/)