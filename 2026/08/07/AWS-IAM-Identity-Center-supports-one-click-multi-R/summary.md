# AWS IAM Identity Center で新組織インスタンスのワンクリックマルチリージョン設定が利用可能に

AWS IAM Identity Center supports one-click multi-Region option for new organization instances

**カテゴリ:** What's New  
**公開日:** 2026-08-07  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-identity-center-supports-one-click-multi-region-option-new-organization-instances)

このページでは、AWS What's Newで発表された「AWS IAM Identity Center supports one-click multi-Region option for new organization instances」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAM Identity Center は、新しい組織インスタンスの作成時にワンクリックでマルチリージョン対応を有効にできる機能を提供するようになりました。この機能により、複数リージョンにわたるレジリエントなアクセス環境を簡単に構築でき、プライマリリージョンの障害時にもワークフォースの継続的なアクセスが保証されます。

## このアップデートで何が変わったか

### 設定の簡素化

- **従来の課題**: カスタマー管理の KMS キーの作成、キーポリシーの設定、リージョンの手動追加など複数ステップが必要
- **新機能**: 3つの設定オプション（単一リージョン、マルチリージョン、カスタム）から選択
- **自動化**: マルチリージョンインスタンスオプションで KMS キーとレプリケーションを自動実行

### ディザスタリカバリー対応

- プライマリリージョンで IAM Identity Center に障害発生時も継続アクセス可能
- ワークフォースは AWS アカウントへのアクセスを維持
- 既に設定済みの権限を利用して継続運用

### 対応リージョン

- 17 のデフォルト有効な商用 AWS リージョンで利用可能
- グローバル規模でのマルチリージョン展開に対応

### 料金

- IAM Identity Center 自体は追加料金なし
- AWS KMS: マルチリージョンインスタンスオプションで標準的な KMS 料金が適用

---

## 詳細

AWS IAM Identity Center は、新しい組織インスタンスを作成する際に、ワンクリックでマルチリージョン対応を有効にできるようになりました。

### これまでの課題

従来は、以下の複数ステップが必要でした：
- カスタマー管理の KMS キーの作成
- キーポリシーの設定
- リージョンの手動追加

### 新しい設定オプション

**1. 単一リージョンインスタンス**
- 従来通りの単一リージョン構成で運用

**2. マルチリージョンインスタンス** ⭐ 新機能
- AWS がカスタマー管理のマルチリージョン KMS キーを自動作成
- インスタンスを追加リージョンに自動レプリケート
- ワークフォースの ID と権限が複数リージョンで自動同期

**3. カスタムインスタンス**
- 既存のカスタマー管理 KMS キーを使用可能
- リージョン設定を個別にカスタマイズ

### ディザスタリカバリーの仕組み

- プライマリリージョンで IAM Identity Center に障害が発生した場合でも、ワークフォースは AWS アカウントにアクセスし続けることが可能
- 追加リージョンで既に設定済みのアクセス権限を利用
- ビジネス継続性が強化される

### グローバル対応

- 17 のデフォルト有効な商用 AWS リージョンで利用可能
- アプリケーションデータレジデンシー要件に対応
- ユーザーに近いリージョンでのアプリケーション展開が可能

### 料金体系

- **IAM Identity Center**: 追加料金なし（既存の料金体系と同じ）
- **AWS KMS**: マルチリージョンインスタンスオプションで作成されたカスタマー管理キーについて、標準的な AWS KMS 料金が適用

### 適用対象

この更新は以下の組織に最適：
- 複数リージョンにわたるレジリエントな AWS アカウントおよびアプリケーションアクセスが必要な組織
- グローバル規模で展開している企業
- ディザスタリカバリーを重視する組織
- 高可用性が必須のミッションクリティカルなシステムを運用する企業

---

## ユースケース

### 1. グローバル企業のアイデンティティ管理

複数リージョンに展開している企業では、ワンクリックでマルチリージョン対応が実現でき、統一的なアイデンティティ管理が可能になります。

### 2. ミッションクリティカルなシステム

銀行、医療、政府機関など、ダウンタイムが許されないシステムでは、地域的な障害時も継続的なアクセスが保証されます。

### 3. データレジデンシー要件

特定リージョンでのデータ保管が必須の組織でも、複数リージョンでのユーザーアクセス管理が可能です。

### 4. ユーザー近接性とパフォーマンス

アプリケーションをユーザーに近いリージョンに展開しながら、ワークフォースのアクセス管理は AWS IAM Identity Center で統一的に行えます。

---

## まとめ

### 主な利点

✅ **導入の簡素化** - ワンクリックで複雑な設定が実現  
✅ **レジリエンス向上** - 地域的な障害に対応  
✅ **グローバル対応** - 複数リージョンでのシームレスなアクセス  
✅ **コスト効率** - 追加料金なしで多くの機能を利用可能  
✅ **柔軟な設定** - 3つのオプションから選択可能  
✅ **ビジネス継続性** - ディザスタリカバリー対応  

### 次のステップ

1. **戦略確認** - 自社のマルチリージョン戦略と高可用性要件を確認
2. **新規構築** - 新しい組織インスタンス作成時に本機能の評価を実施
3. **段階的適用** - 既存インスタンスへの段階的な移行計画を策定
4. **ドキュメント確認** - AWS 公式ドキュメントで詳細な設定手順を確認

---

## 参考リソース

- [AWS What's New - AWS IAM Identity Center supports one-click multi-Region option](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-identity-center-supports-one-click-multi-region-option-new-organization-instances)
- [AWS IAM Identity Center ドキュメント](https://docs.aws.amazon.com/singlesignon/)
- [AWS KMS 料金](https://aws.amazon.com/kms/pricing/)
- [AWS Identity Center Multi Region Replication Enablement Deep Dive](https://www.youtube.com/watch?v=vFg9aQx34AE)
- [AWS IAM Identity Center extends multi-Region support to Identity Center directory](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-iam-identity-center-extends-multi-region-support-to-identity-center-directory)